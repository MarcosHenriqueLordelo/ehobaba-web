type User = {
  name: string;
  email: string;
  bornDay: string;
  id: string;
  country: string;
  position: Position;
  photoUrl: string;
};

type Info = {
  score: Score;
  rating: Rating;
  avarage: number;
  games: number;
  name: string;
  position: Position;
  bornDay: string;
  country: string;
  photoUrl: string;
};

type CreateUserData = {
  photo;
  name: string;
  email: string;
  bornDay: string;
  position: Position;
  country: string;
};

type EditUserData = {
  photo?: File;
  name?: string;
  bornDay?: string;
  position?: Position;
  country?: string;
};

type AddPerformanceEvaluationReq = {
  targetId: string;
  ratings: Rating;
};
