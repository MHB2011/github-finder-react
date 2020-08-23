// All actions in this file example = searching users... (Insted of inside app.js)
import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

// Create initial state
const AlertState = (props) => {
  const initialState = null;

  // receives reducer function and inital state and returns new state
  // When we call the dispatch method, the useReducer() Hook
  // will perform an action based on the type that our method receives in its action argument
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //  Set Alert
  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
