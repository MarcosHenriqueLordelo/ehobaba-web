const baseUrl = 'gameApi';

export default {
  create: `${baseUrl}/create`,
  delete: `${baseUrl}/delete`,
  getData: `${baseUrl}/getData`,
  setOpenForRating: `${baseUrl}/setOpenForRating`,
  addEvent: `${baseUrl}/addEvent`,
  deleteEvent: `${baseUrl}/deleteEvent`,
  addPlayers: `${baseUrl}/addPlayers`,
  addRating: `${baseUrl}/addRating`,
  getRatings: `${baseUrl}/getRatings`,
  getEvents: `${baseUrl}/getEvents`,
  getPlayers: `${baseUrl}/getPlayers`,
  getIsRatingPending: `${baseUrl}/getIsRatingPending`,
  removePlayerFromGame: `${baseUrl}/removePlayerFromGame`,
  addGuests: `${baseUrl}/addGuests`,
  removeGuests: `${baseUrl}/removeGuestsFromGame`
};
