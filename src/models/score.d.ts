type Score = {
  gol: number;
  def: number;
  fal: number;
  des: number;
  ass: number;
};

type ScoreBoardItem = {
  id: string;
  name: string;
  score: Score;
};

type ScoreBoard = ScoreBoardItem[];
