type LoginReq = {
  email: string;
  password: string;
};

type LoginRes = {
  token: string;
  uid: string;
};

type EditDataReq = {
  name?: string;
  photoUrl?: string;
  bornDay?: string;
  position?: string;
  country?: string;
};

type GetUserInfoReq = {
  id: string;
};

type GetLastGamePlayersRes = {
  id: string;
  name: string;
  photoUrl: string;
}[];

type UploadUserImageRes = string;

type CreateUserDataReq = {
  name: string;
  email: string;
  photoUrl: string;
  bornDay: string;
  position: string;
  country: string;
};

type UpdatePushTokenReq = {
  token: string;
};

type SendUserEmailReq = {
  email: string;
};

type VerifyPasswordCodeReq = {
  email: string;
  code: number;
};

type ChangePasswordReq = {
  email: string;
  code: number;
  password: string;
};
