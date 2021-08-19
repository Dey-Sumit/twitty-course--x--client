import axios from "axios";
import apiClient from "helpers/apiClient";
import { FC, useContext, useEffect, useReducer } from "react";
import { createContext } from "react";

interface State {
  user: any;
  loading: boolean; // might be needed later
}

interface Action {
  type: "REMOVE_USER" | "SET_USER" | "START_LOADING" | "STOP_LOADING";
  payload?: any;
}

const StateContext = createContext<State>(undefined as unknown as State); //create context default value only useful for testing

const DispatchContext = createContext<React.Dispatch<Action>>(
  null as unknown as React.Dispatch<Action>
);

const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case "SET_USER":
      return {
        ...state,
        user: payload,
      };

    case "REMOVE_USER":
      return {
        ...state,
        user: null,
      };

    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "STOP_LOADING":
      return {
        ...state,
        loading: false,
      };
    default:
      throw new Error(`Unknown action type ${type}`);
  }
};

export const AuthProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, {
    user: null,
    loading: true, // might be needed later :(
  });

  useEffect(() => {
    async function loadUser() {
      try {
        dispatch({
          type: "START_LOADING",
        });
        // set initially from cookie
        // dispatch({
        //   type: "SET_USER",
        //   payload: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
        // });
        const res = await apiClient("/api/auth/me");

        dispatch({
          type: "SET_USER",
          payload: res.data,
        });
      } catch (error) {
        console.log(error.message);
        dispatch({
          type: "REMOVE_USER",
        });
      } finally {
        dispatch({
          type: "STOP_LOADING",
        });
      }
    }
    loadUser();
  }, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useAuthState = () => useContext(StateContext);
export const useAuthDispatch = () => useContext(DispatchContext);
