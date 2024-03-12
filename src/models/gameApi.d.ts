type AddEventReq = {
  babaId: string;
  gameId: string;
  playerId: string;
  type: string;
};

type AddPlayerReq = {
  babaId: string;
  gameId: string;
  playersList: string[];
};

type AddRatingReq = {
  babaId: string;
  gameId: string;
  targetId: string;
  rating: number;
};

type CreateGameReq = {
  babaId: string;
  location: string;
};

type DeleteGameReq = {
  babaId: string;
  gameId: string;
};

type DeleteEventReq = {
  babaId: string;
  gameId: string;
  eventId: string;
};

type GetGameDataReq = {
  babaId: string;
  gameId: string;
};

type GetEventsReq = {
  babaId: string;
  gameId: string;
};

type GetPlayersReq = {
  babaId: string;
  gameId: string;
};

type GetRatingsReq = {
  babaId: string;
  gameId: str;
};

type SetOpenForRatingReq = {
  babaId: string;
  gameId: string;
  status: boolean;
};

type RemoveplayerFromGame = {
  babaId: string;
  gameId: string;
  playerId: string;
};

type AddGuestReq = {
  babaId: string;
  gameId: string;
  guestNames: string[];
};

type RemoveGuestReq = {
  babaId: string;
  gameId: string;
  guestId: string;
};
