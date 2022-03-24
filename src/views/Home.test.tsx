import Home from "./Home";
import { render } from "@testing-library/react";
import { mount } from "enzyme";

describe("Home component", () => {
  it("expects component to render withour error", () => {
    render(<Home events={[]} updateEvent={() => {}} />);
  });
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(<Home events={[]} updateEvent={() => {}} />);
  });

  afterEach(() => {
    wrapper.unmount();
    localStorage.clear();
  });

  it("render events", () => {
    const events = [
      {
        title: "test",
        description: "testevent",
        id: 1,
        date: new Date("2022-02-01"),
        rating: 0,
        ratings: [],
      },
      {
        title: "test2",
        description: "testevent2",
        id: 2,
        date: new Date("2022-01-27"),
        rating: 0,
        ratings: [],
      },
    ];
    const wrapper = mount(<Home events={[]} updateEvent={(event) => {}} />);
    const eventsWrapper = mount(
      <Home events={events} updateEvent={() => {}} />
    );
    expect(wrapper.find(".eventBtn")).toHaveLength(0);
    expect(eventsWrapper.find(".eventBtn")).toHaveLength(2);
  });
  it("render event component after clicking on it", () => {
    const events = [
      {
        title: "test2",
        description: "testevent2",
        id: 2,
        date: new Date("2022-01-25"),
        rating: 0,
        ratings: [],
      },
    ];

    const wrapper = mount(<Home events={events} updateEvent={() => {}} />);

    const eventList = wrapper.find("#event-list");
    const eventViewBefore = wrapper.find("#event-view");
    const button = wrapper.find("button").at(0);
    button.simulate("click");
    const eventViewAfter = wrapper.find("#event-view");

    expect(eventList.exists()).toEqual(true);
    expect(eventViewBefore.exists()).toEqual(false);
    expect(eventViewAfter.exists()).toEqual(true);
  });
  it("see if the events are in order", () => {
    const events = [
      {
        title: "2",
        description: "event2",
        id: 2,
        date: new Date("2022-01-18"),
        rating: 0,
        ratings: [],
      },
      {
        title: "1",
        description: "event1",
        id: 1,
        date: new Date("2022-01-22"),
        rating: 0,
        ratings: [],
      },

      {
        title: "3",
        description: "event3",
        id: 3,
        date: new Date("2022-01-04"),
        rating: 0,
        ratings: [],
      },
    ];
    const wrapper = mount(<Home events={events} updateEvent={() => {}} />);

    const firstBtn = wrapper.find("button").at(0);
    const secondBtn = wrapper.find("button").at(1);
    const thirdBtn = wrapper.find("button").at(2);

    expect(firstBtn.prop("id")).toBe("event-3");
    expect(secondBtn.prop("id")).toBe("event-2");
    expect(thirdBtn.prop("id")).toBe("event-1");
  });
  it("If the date of an event is passed it shows", () => {
    var today = new Date();
    var yesterday = new Date(today.getTime());
    yesterday.setDate(today.getDate() - 1);
    const events = [
      {
        title: "test1",
        description: "none passed event",
        id: 1,
        date: today,
        rating: 0,
        ratings: [],
      },
      {
        title: "test2",
        description: "passed event",
        id: 2,
        date: yesterday,
        rating: 0,
        ratings: [],
      },
    ];

    const wrapper = mount(<Home events={events} updateEvent={() => {}} />);

    const button2 = wrapper.find("#event-2 > .passed-event");
    const button1 = wrapper.find("#event-1 > .passed-event");

    expect(button2.exists()).toEqual(true);
    expect(button1.exists()).toEqual(false);
  });
});
