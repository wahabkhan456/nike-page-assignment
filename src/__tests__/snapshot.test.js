import React from "react";
import renderer from "react-test-renderer";
import { ShoeInfo, SizeSelection } from "../components/organism";
import { Size, Image } from "../components/atoms";

it("Show Info Component", () => {
  const tree = renderer.create(<ShoeInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Size Selection Component", () => {
  const tree = renderer.create(<SizeSelection />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Size Component", () => {
  const tree = renderer.create(<Size />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Image Component", () => {
  const tree = renderer.create(<Image />).toJSON();
  expect(tree).toMatchSnapshot();
});
