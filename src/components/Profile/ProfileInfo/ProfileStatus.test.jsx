import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="it-kamasutra" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("it-kamasutra");
  });

  // test("status from props should be in the state", () => {
  //   const component = create(<ProfileStatusHooks status="it-kamasutra" />);
  //   const root = component.getInstance();
  //   let span = root.findByType("span");

  //   expect(span.children.length).toBe(1);
  // });
});
