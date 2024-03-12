type CreateBabaReq = { name: string };

type DeleteBabaReq = { id: string };

type GetCastReq = {
  babaId: string;
};

type GetBabaDataReq = {
  id: string;
};

type GetBabaGamesReq = {
  id: string;
};

type GetScoreBoardReq = {
  babaId: string;
};

type GetQuarterScoreBoardReq = {
  babaId: string;
  quarter: number;
  year: number;
};

type JoinBabaReq = {
  code: number;
};

type RemovePlayer = {
  babaId: string;
  playerId: string;
};
