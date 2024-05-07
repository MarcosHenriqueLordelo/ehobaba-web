import React, { createContext, useState, useEffect, useCallback } from "react";

import { babaApi, userApi } from "../../services";
import api from "../../services/api";
import errorCodes from "../../utils/errorCodes";
import useUi from "../ui/useUi";

interface UserContext {
  user?: User;
  authToken?: string;
  info?: Info;
  createAccount: (reqData: LoginReq) => Promise<boolean>;
  loginWithEmail: (reqData: LoginReq) => void;
  logout: () => void;
  getUserInfo: () => void;
  createUserData: (
    photo: any,
    name: string,
    bornDay: string,
    position: Position,
    country: string
  ) => void;
  editUserData: (reqData: EditUserData) => void;
  joinBaba: (code: number) => Promise<boolean>;
  getPendingRates: () => void;
  pendingRates?: PendingRatesList;
  sendEmailPassword: (data: SendUserEmailReq) => Promise<boolean>;
  verifyPasswordCode: (data: VerifyPasswordCodeReq) => Promise<boolean>;
  changePassword: (data: ChangePasswordReq) => Promise<boolean>;
  addPerformanceEvaluation: (
    data: AddPerformanceEvaluationReq
  ) => Promise<boolean>;
  playerToBeRatedData?: PlayerToBeEvaluated;
  setPlayerToBeRatedData: React.Dispatch<
    React.SetStateAction<PlayerToBeEvaluated | undefined>
  >;
}

const UserContext = createContext<UserContext>({} as UserContext);

export const UserProvider: React.FC<DefaultProps> = ({ children }) => {
  const tokenKey = "@ehobaba:token:";

  const { setLoading, setErrors, setLoadingUser, strings } = useUi();

  const [user, setUser] = useState<User>();
  const [info, setInfo] = useState<Info>();
  const [uid, setUid] = useState<string>();
  const [authToken, setAuthToken] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [pendingRates, setPendingRates] = useState<PendingRatesList>();
  const [playerToBeRatedData, setPlayerToBeRatedData] =
    useState<PlayerToBeEvaluated>();

  useEffect(() => {
    loadRescources();
  }, []);

  const updateAuthToken = (token: string) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setAuthToken(token);
  };

  const loadRescources = async () => {
    setLoadingUser(true);
    const token = localStorage.getItem(`${tokenKey}:authToken`);
    const uid = localStorage.getItem(`${tokenKey}:uid`);
    const email = localStorage.getItem(`${tokenKey}:email`);

    if (uid !== null && uid !== "null") setUid(uid);
    if (email !== null && email !== "null") setEmail(email);

    if (token !== null && token !== "null") {
      updateAuthToken(token);
      getUserData();
    } else setLoadingUser(false);
  };

  const createAccount = async (reqData: LoginReq): Promise<boolean> => {
    try {
      setLoading(true);
      if (!reqData.email || !reqData.password) throw new Error("error");

      await userApi.createAccount(reqData);

      return Promise.resolve(true);
    } catch (err: any) {
      if (err.response) {
        if (err.response.data.code === "auth/email-already-in-use")
          setErrors({ defaultError: { message: strings.emailAlreadyInUse } });
        else setErrors({ defaultError: { message: strings.defaultError } });
      } else setErrors({ defaultError: { message: strings.defaultError } });

      return Promise.resolve(false);
    } finally {
      setLoading(false);
    }
  };

  const loginWithEmail = async (reqData: LoginReq) => {
    try {
      setLoading(true);
      if (!reqData.email || !reqData.password) throw new Error("error");

      const {
        data: { token, uid },
      } = await userApi.loginEmail(reqData);

      localStorage.setItem(`${tokenKey}:authToken`, token);
      localStorage.setItem(`${tokenKey}:uid`, uid);
      localStorage.setItem(`${tokenKey}:email`, reqData.email);

      if (token && uid) {
        setLoadingUser(true);
        updateAuthToken(token);
        setUid(uid);
        setEmail(reqData.email);
        getUserData();
      }
    } catch (err: any) {
      if (err.response) {
        if (
          err.response.data.code === "auth/wrong-password" ||
          err.response.data.code === "auth/user-not-found"
        )
          setErrors({
            defaultError: { message: strings.wrongEmailOrPassword },
          });
        else setErrors({ defaultError: { message: strings.defaultError } });
      } else setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoadingUser(true);
    setUser(undefined);
    setAuthToken(undefined);
    setInfo(undefined);
    setUid(undefined);
    setEmail(undefined);

    localStorage.setItem(`${tokenKey}:authToken`, "null");
    localStorage.setItem(`${tokenKey}:uid`, "null");
    localStorage.setItem(`${tokenKey}:email`, "null");

    setLoadingUser(false);
  };

  const getUserData = async () => {
    try {
      const { data: userData } = await userApi.getData();

      setUser(userData);
    } catch (err: any) {
      if (err.response.data.code === errorCodes.userDataNull) return;
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoadingUser(false);
    }
  };

  const getUserInfo = useCallback(async () => {
    try {
      if (!user) return;
      setLoading(true);

      const { data: infoData } = await userApi.getInfo({ id: user.id });

      setInfo(infoData);
    } catch (err) {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  }, [user]);

  const createUserData = async (
    photo: any,
    name: string,
    bornDay: string,
    position: Position,
    country: string
  ) => {
    try {
      if (!uid || !email) return;
      setLoading(true);
      setErrors({});

      const form = new FormData();

      form.append("image", photo, "profile.jpg");

      const { data: photoUrl } = await userApi.uploadImage(form);

      const req = {
        name,
        email,
        bornDay,
        position,
        country,
        photoUrl,
        id: uid,
      };

      await userApi.createData(req);

      setUser(req);
    } catch (err: any) {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const editUserData = async (reqData: EditUserData) => {
    try {
      if (!uid || !user) return;
      setLoading(true);
      setErrors({});

      const { photo, name, bornDay, position, country } = reqData;

      let photoUrl: string | undefined;

      if (photo) {
        const form = new FormData();

        form.append("image", photo, "profile.jpg");

        const { data } = await userApi.uploadImage(form);

        console.log(data);

        photoUrl = data;
      }

      const req = {
        name,
        bornDay,
        position,
        country,
        photoUrl,
      };

      await userApi.editData(req);

      setUser({
        ...user,
        name: name || user.name,
        bornDay: bornDay || user.bornDay,
        position: position || user.position,
        country: country || user.country,
        photoUrl: photoUrl || user.photoUrl,
      });

      getUserInfo();
    } catch (err: any) {
      console.log(err);
      if (err.response)
        if (err.response.data) setErrors(err.response.data);
        else {
          setErrors({ defaultError: { message: strings.defaultError } });
        }
    } finally {
      setLoading(false);
    }
  };

  const joinBaba = async (code: number): Promise<boolean> => {
    try {
      setLoading(true);

      await babaApi.joinBaba({ code });

      return Promise.resolve(true);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
      return Promise.resolve(false);
    } finally {
      setLoading(false);
    }
  };

  const getPendingRates = async () => {
    try {
      setLoading(true);

      const { data } = await userApi.getPendingRates();

      setPendingRates(data);
    } catch {
      setErrors({ defaultError: { message: strings.defaultError } });
    } finally {
      setLoading(false);
    }
  };

  const sendEmailPassword = async (
    data: SendUserEmailReq
  ): Promise<boolean> => {
    try {
      setLoading(true);

      await userApi.sendUserPasswordEmail(data);

      return Promise.resolve(true);
    } catch (err: any) {
      if (err.response) {
        if (err.response.data)
          switch (err.response.data.code) {
            case errorCodes.emailAlreadySent:
              setErrors({
                defaultError: { message: strings.emailAlreadySent },
              });
              break;
            case errorCodes.emailNotFound:
              setErrors({ defaultError: { message: strings.emailNotFound } });
              break;
            default:
              setErrors({ defaultError: { message: strings.defaultError } });
              break;
          }
      } else setErrors({ defaultError: { message: strings.defaultError } });

      return Promise.resolve(false);
    } finally {
      setLoading(false);
    }
  };

  const verifyPasswordCode = async (
    data: VerifyPasswordCodeReq
  ): Promise<boolean> => {
    try {
      setLoading(true);

      await userApi.verifyPasswordCode(data);

      return Promise.resolve(true);
    } catch (err: any) {
      if (err.response) {
        if (err.response.data)
          switch (err.response.data.code) {
            case errorCodes.emailNotFound:
              setErrors({ defaultError: { message: strings.emailNotFound } });
              break;
            case errorCodes.passwordCodeWrong:
              setErrors({
                defaultError: { message: strings.wrongCode },
              });
              break;
            case errorCodes.passwordCodeExpired:
              setErrors({ defaultError: { message: strings.codeExpired } });
              break;
            default:
              setErrors({ defaultError: { message: strings.defaultError } });
              break;
          }
      }
      return Promise.resolve(false);
    } finally {
      setLoading(false);
    }
  };

  const changePassword = async (data: ChangePasswordReq): Promise<boolean> => {
    try {
      setLoading(true);

      await userApi.changePassword(data);

      return Promise.resolve(true);
    } catch (err: any) {
      if (err.response) {
        if (err.response.data)
          switch (err.response.data.code) {
            case errorCodes.emailNotFound:
              setErrors({ defaultError: { message: strings.emailNotFound } });
              break;
            case errorCodes.passwordCodeWrong:
              setErrors({
                defaultError: { message: strings.wrongCode },
              });
              break;
            case errorCodes.passwordCodeExpired:
              setErrors({ defaultError: { message: strings.codeExpired } });
              break;
            default:
              setErrors({ defaultError: { message: strings.defaultError } });
              break;
          }
      }
      return Promise.resolve(false);
    } finally {
      setLoading(false);
    }
  };

  const addPerformanceEvaluation = async (
    data: AddPerformanceEvaluationReq
  ): Promise<boolean> => {
    try {
      setLoading(true);

      await userApi.addPerformanceEvaluation(data);

      return Promise.resolve(true);
    } catch (err) {
      return Promise.resolve(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        info,
        authToken,
        createAccount,
        loginWithEmail,
        logout,
        getUserInfo,
        createUserData,
        editUserData,
        joinBaba,
        pendingRates,
        getPendingRates,
        sendEmailPassword,
        verifyPasswordCode,
        changePassword,
        addPerformanceEvaluation,
        setPlayerToBeRatedData,
        playerToBeRatedData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
