import { shallow, configure } from "enzyme";
import React from "react";
import Menu from "./index";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureStore from "app/store/configureStore";
configure({ adapter: new Adapter() });
const store = configureStore();
const setup = () => {
  return shallow(
    <Provider store={store}>
      <Menu />
    </Provider>
  );
};

describe("Menu component", () => {
  it("renders without crashing", () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null);
  });
});
