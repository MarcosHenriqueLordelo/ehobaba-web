type Rating = {
  vel: number;
  chu: number;
  pas: number;
  mar: number;
  dri: number;
  rac: number;
};

type TypeRating = "vel" | "chu" | "pas" | "mar" | "dri" | "rac";

type RatingListItem = {
  playerName: string;
  playerPhoto: string;
  playerId: string;
  avarage: number;
};

type RatingList = RatingListItem[];

type PendingRate = {
  location: string;
  id: string;
  timestamp: number;
  babaId: string;
};

type PendingRatesList = PendingRate[];

type VoteSessionRatings = {
  [key: string]: number;
};

type PlayerToBeEvaluated = {
  playerData: Info;
  playerId: string;
};
