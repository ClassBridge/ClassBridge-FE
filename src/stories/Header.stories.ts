import type { Meta, StoryObj } from "@storybook/react";
import Header from "@/components/common/Header";

const meta: Meta<typeof Header> = {
  title: "Common/Header",
  component: Header,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const SignedOut: Story = {
  args: {},
};

export const SignedIn: Story = {
  args: { auth: true },
};
