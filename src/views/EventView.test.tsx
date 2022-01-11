import EventView from "./EventView";
import { render } from "@testing-library/react";
import { mount } from "enzyme";
import JoinBtn from "../components/JoinBtn";
import React from "react";

describe("EventView component", () => {
  const event = {
    title: "test",
    description: "testevent",
    id: 1,
    date: new Date("2022-01-25"),
    rating: 0,
    ratings: [],
  };

  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(
      <EventView event={event} onClose={() => {}} onRateEvent={() => {}} />
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("expects component to render without error", () => {
    render(
      <EventView event={event} onClose={() => {}} onRateEvent={() => {}} />
    );
  });

  it("After clicking send button it shows the comment", () => {
    const text = "hello";
    expect(wrapper.contains(text)).toBeFalsy();
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: text } });
    const sendBtn = wrapper.find(".sendBtn");
    sendBtn.simulate("click");
    expect(wrapper.contains(text)).toBeTruthy();
  });
  it("render 1 member initially", () => {
    const actualText = wrapper.find(".going").text();
    const expectedText = "1 going";
    expect(actualText).toBe(expectedText);
  });
  it("render 2 after clicking on join button once", () => {
    const joinBtn = wrapper.find("JoinBtn");
    joinBtn.simulate("click");
    const actualText = wrapper.find(".going").text();
    const expectedText = "2 going";
    expect(actualText).toBe(expectedText);
  });

  it("render 1 aftter clicking on join button twice", () => {
    const joinBtn = wrapper.find("JoinBtn");
    const expectedText = "1 going";
    joinBtn.simulate("click");
    joinBtn.simulate("click");
    const actualText = wrapper.find(".going").text();
    expect(actualText).toBe(expectedText);
  });
  it("test if join btn works correctly", () => {
    let member = 1;
    let setMember = (value: number) => (member = value);
    const btn = mount(<JoinBtn member={member} setMember={setMember} />);
    btn.simulate("click");
    expect(member).toBe(2);
  });

  it("show joined after clicking once on join button", () => {
    const btnWrapper = mount(<JoinBtn member={1} setMember={() => {}} />);
    btnWrapper.simulate("click");

    const actualText = btnWrapper.find(".btnText").text();

    expect(actualText).toBe("Joined");
  });
  it("show join after clicking twice on join button", () => {
    const btnWrapper = mount(<JoinBtn member={2} setMember={() => {}} />);
    btnWrapper.simulate("click");
    btnWrapper.simulate("click");
    const actualText = btnWrapper.find("p").text();
    expect(actualText).toBe("Join");
  });
});
