import { createAction } from "app/store/actionCreators";
import { ActionsUnion, Message } from "app/types";

export enum ActionTypes {
  SET_NAME = "SET_NAME",
  SET_NAME_REQUEST = "SET_NAME_REQUEST",
  SET_DEFAULT_SETTINGS = "SET_DEFAULT_SETTINGS",
  SEND_MESSAGE = "SEND_MESSAGE",
  RECEIVE_MESSAGE = "RECIEVE_MESSAGE",
  UPDATE_SETTINGS = "UPDATE_SETTINGS",
  WS_CONNECTED = "WS_CONNECTED",
  WS_DISCONNECTED = "WS_DISCONNECTED"
}

export const Actions = {
  setName: (name: string) => {
    return createAction(ActionTypes.SET_NAME, name);
  },
  setNameRequest: (name: string) => {
    localStorage.setItem("name", name);
    return createAction(ActionTypes.SET_NAME_REQUEST, name);
  },
  setDefaultSettings: () => {
    localStorage.clear();
    return createAction(ActionTypes.SET_DEFAULT_SETTINGS);
  },
  sendMessage: (message: Message) =>
    createAction(ActionTypes.SEND_MESSAGE, message),
  receiveMessage: (message: Message) =>
    createAction(ActionTypes.RECEIVE_MESSAGE, message),
  updateSettings: (key: string, value: string) => {
    localStorage.setItem(key, value);
    return createAction(ActionTypes.UPDATE_SETTINGS, { key, value });
  },
  wsConnected: () => createAction(ActionTypes.WS_CONNECTED),
  wsDisconnected: () => createAction(ActionTypes.WS_DISCONNECTED)
};

export type Actions = ActionsUnion<typeof Actions>;
