import * as ActionTypes from '@/data/rootActionTypes';

export const getComments = (pEmail) => async (dispatch) => {
  dispatch({ type: ActionTypes.CHECK_EMAIL_EXIST_STARTED });
  try {
    dispatch({ type: ActionTypes.CHECK_EMAIL_EXIST_SUCCESS, payload: result });
  } catch (e) {
    dispatch({ type: ActionTypes.CHECK_EMAIL_EXIST_FAIL, error: e });
  }
};

export function logout() {
  return {
    type: ActionTypes.RESET_AUTH,
  };
}
