import { useContext } from 'react';
import GameContext from './index';

const useGame = () => {
  const context = useContext(GameContext);
  return context;
};

export default useGame;
