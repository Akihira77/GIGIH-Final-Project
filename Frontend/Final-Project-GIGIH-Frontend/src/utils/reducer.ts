import { reducerCases } from "./constant";

export const initialState = {
  user: null,
};

type AppState = {
  user: any;
};
type AppAction = {
  type: string;
  user: any;
};

const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case reducerCases.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
