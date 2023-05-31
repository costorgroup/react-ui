import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components";
import { TButtonProps } from "./button.types";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {
    test: {
      options: ["red", "blue"],
      control: "select",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Red: Story = (args: TButtonProps) => (
  <Button {...args}>This is button</Button>
);
Red.args = {
  test: "red",
};

export const Blue: Story = (args: TButtonProps) => (
  <Button {...args}>This is button</Button>
);
Blue.args = {
  test: "blue",
};
