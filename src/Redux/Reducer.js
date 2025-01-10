import {
  FAIL_REQUEST,
  MAKE_REQUEST,
  GET_USER_LIST,
  DELETE_USER,
  UPDATE_USER,
  GET_USER_OBJ
} from "./ActionType";
const initialState = {
  loading: true,
  userlist: [],
  userobj: {},
  errmesaaage: "",
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errmesaaage: action.payload,
      };
    case GET_USER_LIST:
      return {
        errmesaaage: "",
        loading: false,
        userlist: action.payload,
        userobj: {},
      };
    case DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
    case GET_USER_OBJ:
      return {
        ...state,
        loading: false,
        userobj: action.payload,
      };
    default:
      return state;
  }
};
