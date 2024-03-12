import urls from './urls';
import api from '../api';

export default {
  addEvent: (data: AddEventReq) => api.post(urls.addEvent, data),
  addPlayers: (data: AddPlayerReq) => api.post(urls.addPlayers, data),
  addRating: (data: AddRatingReq) => api.post(urls.addRating, data),
  create: (data: CreateGameReq) => api.post(urls.create, data),
  delete: (data: DeleteGameReq) => api.post(urls.delete, data),
  deleteEvent: (data: DeleteEventReq) => api.post(urls.deleteEvent, data),
  getData: (data: GetGameDataReq) => api.post<Game>(urls.getData, data),
  getEvents: (data: GetEventsReq) => api.post<EventsList>(urls.getEvents, data),
  getPlayers: (data: GetPlayersReq) =>
    api.post<PlayersList>(urls.getPlayers, data),
  getRatings: (data: GetRatingsReq) =>
    api.post<RatingList>(urls.getRatings, data),
  setOpenForRating: (data: SetOpenForRatingReq) =>
    api.post(urls.setOpenForRating, data),
  getIsRatingPending: (data: GetPlayersReq) =>
    api.post<boolean>(urls.getIsRatingPending, data),
  removePlayerFromGame: (data: RemoveplayerFromGame) =>
    api.post(urls.removePlayerFromGame, data),
  addGuests: (data: AddGuestReq) => api.post(urls.addGuests, data),
  removeGuest: (data: RemoveGuestReq) => api.post(urls.removeGuests, data),
};
