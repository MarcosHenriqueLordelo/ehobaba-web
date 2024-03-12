type Baba = {
  admins: string[];
  cast: string[];
  code: number;
  id: string;
  name: string;
};

type BabaListItem = {
  id: string;
  name: string;
  lastGameTimestamp: number | null;
  castLength: number;
};

type BabaList = BabaListItem[];
