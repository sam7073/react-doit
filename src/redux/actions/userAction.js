export const SET_USER = "user/SET_USER";
export const RESET_USER = "user/RESET_USER";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const resetUser = (user) => ({
  type: RESET_USER,
  payload: user,
});
