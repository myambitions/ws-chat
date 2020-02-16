import React from "react";
import { Provider } from "react-redux";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Message from "components/Message";
import { Message as IMessage } from "app/types";
import configureStore from "app/store/configureStore";
import Chat from "./index";
import Input from "components/Input";
import Fab from "@material-ui/core/Fab";
import sinon from "sinon";
configure({ adapter: new Adapter() });
const store = configureStore();

const messages: IMessage[] = [
  {
    from: "test",
    text: "test test",
    date: new Date()
  },
  { from: "test1", text: "test1 test1", date: new Date() }
];

const setup = () => {
  return shallow(
    <Provider store={store}>
      <Chat>
        {messages.map((m, i) => (
          <Message
            {...m}
            key={i}
            handleTime={() => {}}
            name="test"
            translations={{}}
          />
        ))}

        <Input
          placeholder=""
          value="123"
          onChange={() => {}}
          keyPressed={() => {}}
          focus
        />
        <Fab size="small" color="primary" onClick={jest.fn()}></Fab>
      </Chat>
    </Provider>
  );
};

describe("Chat component", () => {
  it("renders without crashing", () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null);
  });

  it("should render correct number of messages", () => {
    const wrapper = setup();
    expect(wrapper.find(Message).length).toEqual(2);
  });
  it("should Input renders correctly", () => {
    const wrapper = setup();

    expect(wrapper.find(Input).props().value).toEqual("123");
  });
});
