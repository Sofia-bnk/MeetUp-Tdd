import EventView from "./EventView";
import { render } from "@testing-library/react";
import { mount } from "enzyme";
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
    localStorage.clear();
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
    joinBtn.simulate("click");
    joinBtn.simulate("click");
    const second = wrapper.find(".going").text();
    expect(second).toBe("1 going");
  });
});
