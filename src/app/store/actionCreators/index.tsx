export interface Action<T extends string> {
  type: T;
}
export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P;
}
// type ActionFn<T extends string> = () => Action<T>;
// type ActionWithPayloadFn<T extends string, P> = (
//   payload: P
// ) => ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}
