import urls from './urls';
import api from '../api';

export default {
  createAccount: (data: LoginReq) =>
    api.post<LoginRes>(urls.createAccount, data),
  loginTdp: (data: LoginReq) => api.post<LoginRes>(urls.loginTdp, data),
  loginEmail: (data: LoginReq) => api.post<LoginRes>(urls.loginEmail, data),
  editData: (data: EditDataReq) => api.post(urls.editData, data),
  getData: () => api.get<User>(urls.getData),
  getGeralRating: () => api.get<Rating>(urls.getGeralRating),
  getGeralScore: () => api.get<Score>(urls.getGeralScore),
  getInfo: (data: GetUserInfoReq) => api.post<Info>(urls.getInfo, data),
  getLastGamePlayers: () =>
    api.get<GetLastGamePlayersRes>(urls.getLastGamePlayers),
  getLastGames: () => api.get<LastGamesList>(urls.getLastGames),
  getPendingRates: () => api.get<PendingRatesList>(urls.getPendingRates),
  uploadImage: (data: FormData) =>
    api.post<UploadUserImageRes>(urls.uploadImage, data),
  uploadRembg: (data: FormData) =>
    api.post<UploadUserImageRes>(urls.uploadRembg, data),
  createData: (data: CreateUserDataReq) => api.post(urls.createData, data),
  updatePushToken: (data: UpdatePushTokenReq) =>
    api.post(urls.updatePushToken, data),
  sendUserPasswordEmail: (data: SendUserEmailReq) =>
    api.post(urls.sendUserPasswordEmail, data),
  verifyPasswordCode: (data: VerifyPasswordCodeReq) =>
    api.post(urls.verifyPasswordCode, data),
  changePassword: (data: ChangePasswordReq) =>
    api.post(urls.changePassword, data),
  addPerformanceEvaluation: (data: AddPerformanceEvaluationReq) =>
    api.post(urls.addPerformanceEvaluation, data),
};
