type MyError = {
  code?: string;
  message: string;
};

type Errors = {
  createBabaName?: MyError;
  joinBabaCode?: MyError;
  createGamePlace?: MyError;
  addPlayerToGame?: MyError;
  addEvent?: MyError;
  defaultError?: MyError;
  sendEmailPassword?: MyError;
};
