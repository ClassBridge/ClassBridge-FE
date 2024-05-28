import type { Meta, StoryObj } from "@storybook/react";
import ClassBridgeButton from "./ClassBridgeButton";

const meta: Meta<typeof ClassBridgeButton> = {
  title: "Example/ClassBridgeButton",
  component: ClassBridgeButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ClassBridgeButton>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
