import React, { createContext, useContext, useReducer } from "react";

interface State {
  showNavbar: boolean;
}

interface Action {
  type: "TOGGLE_NAVBAR";
  payload?: any;
}

// create two context; one for the state and one for the dispatch
const StateContext = createContext<State>(undefined);

const DispatchContext = createContext<React.Dispatch<Action>>(null);

const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case "TOGGLE_NAVBAR":
      return {
        ...state,
        showNavbar: !state.showNavbar,
      };

    default:
      throw new Error(`Unknown action type"${type}`);
  }
};

export const LayoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, {
    showNavbar: false,
  });

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useLayoutState = () => useContext(StateContext);
export const useLayoutDispatch = () => useContext(DispatchContext);
