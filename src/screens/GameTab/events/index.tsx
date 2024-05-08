import moment from "moment";
import React, { useCallback, useState } from "react";

import AppBar from "../../../components/AppBar";
import EventListItem from "../../../components/EventListItem";
import Loading from "../../../components/Loading";
import Spacer from "../../../components/Spacer";

import useGame from "../../../contexts/game/useGame";
import useUi from "../../../contexts/ui/useUi";
import useUser from "../../../contexts/user/useUser";

import AddEventModal from "../../../modals/AddEventModal";
import DeleteEventModal from "../../../modals/DeleteEventModal";

import renderNoData from "../../../utils/renderNoData";

import { DateLabel } from "../scoreBoard/styles";
import { Container, ListContainer } from "./styles";
import { MdAddChart } from "react-icons/md";

interface PropTypes {
  onNavigate: (screen: string) => void;
}

const Events: React.FC<PropTypes> = ({ onNavigate }) => {
  const { game, events, deleteEvent } = useGame();
  const { loading, strings, theme } = useUi();
  const { user } = useUser();

  const [addEventModal, setAddEventModal] = useState(false);
  const [deleteEventModal, setDeleteEventModal] = useState(false);

  const [currentEvent, setCurrentEvent] = useState<string>();

  const isAdmin = (): boolean =>
    game ? game.admins.includes(user!.id) : false;

  const handleDelete = useCallback(async () => {
    if (!game || !currentEvent) return;

    await deleteEvent({
      babaId: game.babaId,
      eventId: currentEvent,
      gameId: game.id,
    });

    setCurrentEvent(undefined);
    setDeleteEventModal(false);
  }, [game, currentEvent]);

  return (
    <Container>
      <AppBar
        title={game?.location}
        onBack={() => onNavigate("back")}
        primaryAction={
          isAdmin()
            ? () => <MdAddChart size={24} color={theme.colors.action} />
            : undefined
        }
        onPrimaryAction={() => setAddEventModal(true)}
      />
      {game && (
        <DateLabel>
          {moment.unix(game.timestamp).format("DD/MM/YYYY")}
        </DateLabel>
      )}
      {loading ? (
        <Loading />
      ) : (
        <ListContainer>
          {events
            ? events.map((event) => (
                <EventListItem
                  itemData={event}
                  key={event.id}
                  onDelete={
                    isAdmin()
                      ? () => {
                          setCurrentEvent(event.id);
                          setDeleteEventModal(true);
                        }
                      : undefined
                  }
                />
              ))
            : renderNoData(strings.noEventsAdded)}
          <Spacer height={20} />
        </ListContainer>
      )}
      <AddEventModal
        onClose={() => setAddEventModal(false)}
        open={addEventModal}
      />
      <DeleteEventModal
        open={deleteEventModal}
        onClose={() => setDeleteEventModal(false)}
        onConfirmDelete={handleDelete}
      />
    </Container>
  );
};

export default Events;
