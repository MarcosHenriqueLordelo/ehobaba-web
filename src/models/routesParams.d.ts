type TabParamList = {
  MainTab: {
    tab?: number;
  };
  BabaTab: {
    tab?: number;
  };
  GameTab: {
    tab?: number;
  };
};

type ParamsList = {
  VerifyCode: {
    email?: string;
  };
  ChangePassword: {
    email: string;
    code: string;
  };
};
