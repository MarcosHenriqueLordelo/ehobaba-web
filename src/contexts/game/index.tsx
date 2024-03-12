import React, { createContext, useEffect, useState } from 'react';
import useUi from '../ui/useUi';

import { gameApi } from '../../services';
import useBaba from '../baba/useBaba';

interface GameContext {
  game?: Game;
  players?: Player[];
  events?: EventListItem[];
  ratings?: RatingList;
  createGame: (babaId: string, location: string) => Promise<boolean>;
  deleteGame: (req: DeleteEventReq) => void;
  addEvent: (req: AddEventReq) => Promise<boolean>;
  deleteEvent: (req: DeleteEventReq) => Promise<boolean>;
  addPlayers: (req: AddPlayerReq, guestList: string[]) => Promise<boolean>;
  getGame: (req: GetGameDataReq) => void;
  getEvents: (req: GetEventsReq) => void;
  getPlayers: (req: GetPlayersReq) => void;
  getRatings: (req: GetRatingsReq) => void;
  addRatings: (
    babaId: string,
    gameId: string,
    votes: VoteSessionRatings
  ) => Promise<Boolean>;
  toggleOpenForRating: () => void;
  isRatingPending: boolean;
  removePlayerFromGame: (playerId: string) => void;
}

const GameContext = createContext<GameContext>({} as GameContext);

export const GameProvider: React.FC<DefaultProps> = ({ children }) => {
  const { setLoading, setErrors, strings } = useUi();
  const { getBaba, getCast } = useBaba();

  const [game, setGame] = useState<Game>();
  const [players, setPlayers] = useState<Player[]>([]);
  const [events, setEvents] = useState<EventListItem[]>();
  const [ratings, setRatings] = useState<RatingList>();
  const [isRatingPending, setIsRatingPending] = useState(false);

  useEffect(() => {
    if (!game) return;

    getEvents({ babaId: game.babaId, gameId: game.id });
    getPlayers({ babaId: game.babaId, gameId: game.id });
    getRatings({ babaId: game.babaId, gameId: game.id });
  }, [game]);

  const createGame = async (
    babaId: string,
    location: string
  ): Promise<boolean> => {
    try {
      setLoading(true);

      await gameApi.create({ babaId, location });

      getBaba(babaId);
      return Promise.resolve(true);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
      return Promise.resolve(false);
    } finally {
      setLoading(false);
    }
  };

  const deleteGame = async (req: DeleteEventReq) => {
    try {
      setLoading(true);

      await gameApi.delete(req);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const addEvent = async (req: AddEventReq): Promise<boolean> => {
    try {
      setLoading(true);

      await gameApi.addEvent(req);

      getEvents({ babaId: req.babaId, gameId: req.gameId });
      getPlayers({ babaId: req.babaId, gameId: req.gameId });
      return Promise.resolve(true);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });

      return Promise.resolve(false);
    } finally {
      setLoading(false);
    }
  };

  const deleteEvent = async (req: DeleteEventReq): Promise<boolean> => {
    try {
      setLoading(true);

      await gameApi.deleteEvent(req);

      getEvents({ babaId: req.babaId, gameId: req.gameId });
      getPlayers({ babaId: req.babaId, gameId: req.gameId });
      return Promise.resolve(true);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
      return Promise.resolve(false);
    } finally {
      setLoading(false);
    }
  };

  const addPlayers = async (
    req: AddPlayerReq,
    guestList: string[]
  ): Promise<boolean> => {
    try {
      if (!game) return Promise.resolve(false);
      setLoading(true);

      if (req.playersList.length > 0) await gameApi.addPlayers(req);

      if (guestList.length > 0)
        await gameApi.addGuests({
          babaId: req.babaId,
          gameId: req.gameId,
          guestNames: guestList,
        });

      getPlayers({ gameId: game.id, babaId: game.babaId });
      getCast(game.babaId);
      return Promise.resolve(true);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
      return Promise.resolve(false);
    } finally {
      setLoading(false);
    }
  };

  const getGame = async (req: GetGameDataReq) => {
    try {
      setLoading(true);

      const { data } = await gameApi.getData(req);

      setGame(data);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const getEvents = async (req: GetEventsReq) => {
    try {
      setLoading(true);

      const { data } = await gameApi.getEvents(req);

      data.sort((a, b) => b.timestamp - a.timestamp);

      setEvents(data);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const getPlayers = async (req: GetPlayersReq) => {
    try {
      setLoading(true);

      const { data } = await gameApi.getPlayers(req);

      setPlayers(data);
    } catch (err) {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const getRatings = async (req: GetRatingsReq) => {
    try {
      setLoading(true);

      const { data } = await gameApi.getRatings(req);

      setRatings(data);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const toggleOpenForRating = async () => {
    if (!game) return;
    try {
      setLoading(true);

      await gameApi.setOpenForRating({
        babaId: game.babaId,
        gameId: game.id,
        status: !game.openForRating,
      });

      setGame({ ...game, openForRating: !game.openForRating });
      getIsRatingPending();
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const addRatings = async (
    babaId: string,
    gameId: string,
    votes: VoteSessionRatings
  ): Promise<Boolean> => {
    try {
      setLoading(true);

      const promises = Object.keys(votes).map(async (targetId) => {
        await gameApi.addRating({
          babaId,
          gameId,
          targetId,
          rating: votes[targetId],
        });
      });

      await Promise.all(promises);
      return Promise.resolve(true);
    } catch (err) {
      setErrors({ defaultError: { message: strings.defaultError } });
      return Promise.resolve(false);
    } finally {
      setLoading(false);
    }
  };

  const getIsRatingPending = async () => {
    try {
      if (game) {
        const { data } = await gameApi.getIsRatingPending({
          babaId: game.babaId,
          gameId: game.id,
        });
        return setIsRatingPending(data);
      } else return setIsRatingPending(false);
    } catch (err) {
      return setIsRatingPending(false);
    }
  };

  useEffect(() => {
    getIsRatingPending();
  }, [game, ratings]);

  const removePlayerFromGame = async (playerId: string) => {
    try {
      if (!game) return;
      setLoading(true);

      if (!playerId.includes('guest'))
        await gameApi.removePlayerFromGame({
          babaId: game.babaId,
          gameId: game.id,
          playerId,
        });
      else
        await gameApi.removeGuest({
          babaId: game.babaId,
          gameId: game.id,
          guestId: playerId,
        });

      getGame({ babaId: game.babaId, gameId: game.id });
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <GameContext.Provider
      value={{
        game,
        players,
        events,
        ratings,
        createGame,
        deleteGame,
        addEvent,
        deleteEvent,
        addPlayers,
        getGame,
        getEvents,
        getPlayers,
        getRatings,
        toggleOpenForRating,
        addRatings,
        isRatingPending,
        removePlayerFromGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
