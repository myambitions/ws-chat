import { Actions, ActionTypes } from "../actions";

interface State {
  isConnected: boolean;
}

const initialState: State = {
  isConnected: false
};

export const SocketReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.WS_CONNECTED:
      return { ...state, isConnected: true };
    case ActionTypes.WS_DISCONNECTED:
      return { ...state, isConnected: false };
    default:
      return state;
  }
};
