import { RouterState } from "connected-react-router";

export interface ApplicationState {
  router: RouterState;
  settings: Settings;
  messages: Message[];
}

export interface Message {
  from: string;
  text: string;
  date: Date;
}

export interface Settings {
  name: string;
  theme: Theme[];
  clock: Clock[];
  sendbb: SendByButton[];
  language: Language[];
}

export interface Translations {}

export interface Theme {
  id: string;
  value: string;
}

export interface Clock extends Theme {}

export interface SendByButton extends Theme {}

export interface Language extends Partial<Theme> {}

export interface ThemeMode {
  mode: "light" | "dark";
}

type FunctionType = (...args: any[]) => any;
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType };

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;
