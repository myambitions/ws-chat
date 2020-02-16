import { Actions, ActionTypes } from "app/store/actions";
import { Message } from "app/types";

const initialState: Message[] = [];
export const MessagesReducer = (
  state = initialState,
  action: Actions
): Message[] => {
  switch (action.type) {
    case ActionTypes.RECEIVE_MESSAGE:
      const { payload: message } = action;
      return [...state, message];
    default:
      return state;
  }
};
