import { ActionTypes, Actions } from "../actions";
const name = localStorage.getItem("name");
const theme = localStorage.getItem("theme");
const clock = localStorage.getItem("clock");
const sendbb = localStorage.getItem("sendbb");
const language = localStorage.getItem("language");
const initialState = {
  name: name || "",
  theme,
  clock,
  sendbb,
  language: language || "en", // default language
  users: [] as string[]
};

export const SettingsReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SET_DEFAULT_SETTINGS:
      const defState = getDefaultState();
      return { ...state, ...defState };
    case ActionTypes.SET_NAME_REQUEST:
      const { payload: name } = action;
      return { ...state, name };
    case ActionTypes.SET_NAME:
      const { payload } = action;
      const users = [...state.users, payload];
      return { ...state, users };
    case ActionTypes.UPDATE_SETTINGS:
      const {
        payload: { key, value }
      } = action;
      const setting = { [key]: value };
      return { ...state, ...setting };
    default:
      return state;
  }
};

function getDefaultState() {
  return {
    name: name || "",
    theme: "",
    clock: "",
    sendbb: "",
    language: language || "en" // default language
  };
}
