import React, { createContext, useState, useEffect } from 'react';
import useUi from '../ui/useUi';

import { babaApi, userApi } from '../../services';

interface BabaContext {
  lastGamePlayers?: GetLastGamePlayersRes;
  lastGames?: LastGamesList;
  babas?: BabaList;
  cast?: CastList;
  baba?: Baba;
  scoreBoard?: ScoreBoard;
  games: GamesList;
  getLastGamePlayers: () => void;
  getLastGames: () => void;
  getBabas: () => void;
  getBaba: (id: string) => void;
  getCast: (babaId: string) => void;
  getScoreBoard: (id: string) => void;
  createBaba: (name: string) => Promise<boolean>;
  deleteBaba: (id: string) => void;
  getPlayerCardInfo: (id: string) => Promise<boolean | Info>;
  getGames: (id: string) => void;
  removePlayer: (playerId: string) => void;
}

const BabaContext = createContext<BabaContext>({} as BabaContext);

export const BabaProvider: React.FC<DefaultProps> = ({ children }) => {
  const { setLoading, setErrors, strings } = useUi();

  const [lastGamePlayers, setLastGamePlayers] =
    useState<GetLastGamePlayersRes>();
  const [lastGames, setLastGames] = useState<LastGamesList>();
  const [babas, setBabas] = useState<BabaList>();
  const [cast, setCast] = useState<CastList>([]);
  const [baba, setBaba] = useState<Baba>();
  const [scoreBoard, setScoreBoard] = useState<ScoreBoard>();
  const [games, setGames] = useState<GamesList>([]);

  useEffect(() => {
    if (!baba) return;

    getCast(baba.id);
    getScoreBoard(baba.id);
    getGames(baba.id);
  }, [baba]);

  const getLastGamePlayers = async () => {
    try {
      setLoading(true);

      const { data } = await userApi.getLastGamePlayers();

      setLastGamePlayers(data);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const getLastGames = async () => {
    try {
      setLoading(true);

      const { data } = await userApi.getLastGames();

      setLastGames(data);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const getBabas = async () => {
    try {
      setLoading(true);

      const { data } = await babaApi.getBabas();

      setBabas(data);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const getCast = async (babaId: string) => {
    try {
      setLoading(true);

      const { data } = await babaApi.getCast({ babaId });

      setCast(data);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const getBaba = async (id: string) => {
    try {
      setLoading(true);

      const { data } = await babaApi.getData({ id });

      setBaba(data);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const getScoreBoard = async (id: string) => {
    try {
      if (!baba) return;
      setLoading(true);

      const { data } = await babaApi.getScoreBoard({ babaId: id });

      setScoreBoard(data);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const createBaba = async (name: string): Promise<boolean> => {
    try {
      setLoading(true);

      await babaApi.create({ name });
      return Promise.resolve(true);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
      return Promise.resolve(false);
    } finally {
      setLoading(false);
    }
  };

  const deleteBaba = async (id: string) => {
    try {
      setLoading(true);

      await babaApi.delete({ id });
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const getPlayerCardInfo = async (id: string): Promise<boolean | Info> => {
    try {
      setLoading(true);

      const { data: infoData } = await userApi.getInfo({ id });

      return Promise.resolve(infoData);
    } catch (err) {
      setErrors({ defaultError: { message: strings.defaultError } });
      return Promise.resolve(false);
    } finally {
      setLoading(false);
    }
  };

  const getGames = async (id: string) => {
    try {
      setLoading(true);

      const { data } = await babaApi.getGames({ id });

      setGames(data);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const removePlayer = async (playerId: string) => {
    try {
      if (!baba) return;
      setLoading(true);

      await babaApi.removePlayer({
        babaId: baba.id,
        playerId,
      });

      getBaba(baba.id);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  return (
    <BabaContext.Provider
      value={{
        lastGamePlayers,
        lastGames,
        babas,
        cast,
        baba,
        scoreBoard,
        getLastGamePlayers,
        getLastGames,
        getBabas,
        getBaba,
        getCast,
        getScoreBoard,
        createBaba,
        deleteBaba,
        getPlayerCardInfo,
        getGames,
        games,
        removePlayer,
      }}
    >
      {children}
    </BabaContext.Provider>
  );
};

export default BabaContext;
