import { useContext } from 'react';
import BabaContext from './index';

const useBaba = () => {
  const context = useContext(BabaContext);
  return context;
};

export default useBaba;
