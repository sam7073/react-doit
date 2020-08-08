import React from "react";
import Input from "../Input";
import { shallow } from "enzyme";

describe("<Input/>", () => {
  it("renders without crashing", () => {
    expect(() => {
      shallow(<Input name="test_name" />);
    }).not.toThrow();
  });
  it("renders without crashing", () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toHaveLength(1);
  });
});