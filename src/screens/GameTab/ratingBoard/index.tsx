import React, { useCallback } from "react";
import { MdLock, MdLockOpen } from "react-icons/md";
import moment from "moment";

import AppBar from "../../../components/AppBar";
import Loading from "../../../components/Loading";
import RatingListItem from "../../../components/RatingListItem";
import Button from "../../../components/Button";

import useGame from "../../../contexts/game/useGame";
import useUi from "../../../contexts/ui/useUi";
import useUser from "../../../contexts/user/useUser";

import { DateLabel } from "../scoreBoard/styles";

import { Container, ListContainer } from "./styles";

import renderNoData from "../../../utils/renderNoData";

interface PropTypes {
  onNavigate: (screen: string, params?: any) => void;
}

const RatingBoard: React.FC<PropTypes> = ({ onNavigate }) => {
  const { game, ratings, toggleOpenForRating, isRatingPending } = useGame();
  const { user } = useUser();
  const { loading, strings, theme } = useUi();

  const isAdmin = (): boolean =>
    game ? game.admins.includes(user!.id) : false;

  const getList = (): RatingList => {
    if (!ratings) return [];
    let aux = ratings;

    aux.sort((a, b) => b.avarage - a.avarage);

    return aux;
  };

  const handleOnVote = useCallback(() => {
    if (!game) return;

    const sessionData: PendingRate = {
      babaId: game.babaId,
      id: game.id,
      location: game.location,
      timestamp: game.timestamp,
    };

    onNavigate("/voteSession", { sessionData });
  }, [game]);

  return (
    <Container>
      <AppBar
        title={game?.location}
        onBack={() => onNavigate("back")}
        onPrimaryAction={toggleOpenForRating}
        primaryAction={
          isAdmin()
            ? game?.openForRating
              ? () => <MdLockOpen size={24} color={theme.colors.action} />
              : () => <MdLock size={24} color={theme.colors.action} />
            : undefined
        }
      />
      {game && (
        <DateLabel>
          {moment.unix(game.timestamp).format("DD/MM/YYYY")}
        </DateLabel>
      )}
      {loading ? (
        <Loading />
      ) : (
        <ListContainer style={{ flex: 1 }}>
          {game?.openForRating && isRatingPending && (
            <div
              style={{
                alignItems: "center",
                marginTop: 16,
                marginBottom: 16,
              }}
            >
              <Button label={strings.doVote} onClick={handleOnVote} />
            </div>
          )}
          {ratings && ratings.length > 0
            ? getList().map((rating, index) => (
                <RatingListItem
                  key={rating.playerId}
                  itemData={rating}
                  index={index + 1}
                />
              ))
            : renderNoData(
                game?.openForRating
                  ? strings.ratingOpenButNoRated
                  : strings.ratingClosed
              )}
        </ListContainer>
      )}
    </Container>
  );
};

export default RatingBoard;
