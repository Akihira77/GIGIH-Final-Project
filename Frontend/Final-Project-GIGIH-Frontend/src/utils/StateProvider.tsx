import { createContext, useContext, useReducer } from "react";
import { initialState } from "./reducer";

export const StateContext = createContext({});

type Props = {
  children: React.ReactNode;
  initialState: typeof initialState;
  reducer: any;
};

export const StateProvider = ({ children, initialState, reducer }: Props) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateProvider = () => useContext(StateContext);
