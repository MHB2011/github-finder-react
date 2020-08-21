import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USERS } from "../types";

// Create initial state
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search User
  // Get User
  // Clear Users
  // Set Loading

  return (
    <GithubContext.Provider
      value={{ users: state.users, user: state.user, loading: state.loading }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
