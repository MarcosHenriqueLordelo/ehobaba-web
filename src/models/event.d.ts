type EventType = 'gol' | 'ass' | 'def' | 'fal' | 'des';

type EventListItem = {
  id: string;
  type: EventType;
  playerId: string;
  timestamp: number;
  playerName: string;
};

type EventsList = EventListItem[];
