import { shallow, configure } from "enzyme";
import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import Router from "./index";
import configureStore from "app/store/configureStore";
import { Provider } from "react-redux";
import Menu from "app/Menu";
const store = configureStore();
configure({ adapter: new Adapter() });
const setup = () => {
  return shallow(
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

describe("AppRouter component", () => {
  it("renders without crashing", () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null);
  });
});
