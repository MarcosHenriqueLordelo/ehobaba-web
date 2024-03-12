import urls from './urls';
import api from '../api';

export default {
  create: (data: CreateBabaReq) => api.post(urls.create, data),
  delete: (data: DeleteBabaReq) => api.post(urls.delete, data),
  getBabas: () => api.get<BabaList>(urls.getBabas),
  getCast: (data: GetCastReq) => api.post<CastList>(urls.getCast, data),
  getData: (data: GetBabaDataReq) => api.post<Baba>(urls.getData, data),
  getGames: (data: GetBabaGamesReq) => api.post<GamesList>(urls.getGames, data),
  getScoreBoard: (data: GetScoreBoardReq) =>
    api.post<ScoreBoard>(urls.getScoreBoard, data),
  getQuarterScoreBoard: (data: GetQuarterScoreBoardReq) =>
    api.post<ScoreBoard>(urls.getQuarterScoreBoard, data),
  joinBaba: (data: JoinBabaReq) => api.post(urls.joinBaba, data),
  removePlayer: (data: RemovePlayer) => api.post(urls.removePlayer, data),
};
