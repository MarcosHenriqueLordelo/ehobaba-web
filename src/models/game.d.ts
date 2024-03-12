type Game = {
  date: string;
  id: string;
  location: string;
  openForRating: boolean;
  players: string[];
  timestamp: number;
  babaId: string;
  admins: string[];
};

type GameListItem = {
  location: string;
  id: string;
  timestamp: number;
};

type GamesList = GameListItem[];

type LastGameItem = {
  location: string;
  id: string;
  timestamp: number;
  babaId: string;
};

type LastGamesList = LastGameItem[];
