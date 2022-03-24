import JoinBtn from "./JoinBtn";
import { mount } from "enzyme";

describe("JoinBtn component", () => {
  it("test if join btn works correctly", () => {
    let member = 1;
    let setMember = (value: number) => (member = value);
    const btn = mount(
      <JoinBtn member={member} setMember={setMember} joined={false} />
    );
    btn.simulate("click");
    expect(member).toBe(2);
  });

  it("show button text Join on property false", () => {
    const btnWrapper = mount(
      <JoinBtn member={1} setMember={() => {}} joined={false} />
    );

    const actualText = btnWrapper.find(".btnText").text();

    expect(actualText).toBe("Join");
  });

  it("show button text Joined on property true", () => {
    const btnWrapper = mount(
      <JoinBtn member={1} setMember={() => {}} joined={true} />
    );

    const actualText = btnWrapper.find(".btnText").text();

    expect(actualText).toBe("Joined");
  });
});
