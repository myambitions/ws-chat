import * as React from "react";
import { shallow, configure } from "enzyme";
import Message from "./index";
import YouTubeParser from "components/YouTubeParser";
import { Message as IMessage } from "app/types";
import Adapter from "enzyme-adapter-react-16";
import translations from "translations/en.json";
configure({ adapter: new Adapter() });
const message: IMessage = {
  from: "Dauren",
  text: "https://www.youtube.com/watch?v=SUOeatVNgKY",
  date: new Date()
};
const setup = () => {
  return shallow(
    // @ts-ignore
    <Message {...message} translations={translations} handleTime={() => {}} />
  );
};

describe("Message component", () => {
  it("renders without crashing", () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null);
  });

  it("should render a message with youtube link", () => {
    const wrapper = setup();
    expect(wrapper.find(YouTubeParser).length).toBe(1);
  });
});
