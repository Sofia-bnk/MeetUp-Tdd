import Home from "./Home";
import { render } from "@testing-library/react";
import { mount } from "enzyme";

describe("Home component", () => {
  const wrapper = mount(<Home />);

  it("expects component to render", () => {
    render(<Home />);
  });
});
