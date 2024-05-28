import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import Header from "@/components/common/Header";

const meta = {
  title: "Common/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // args: {
  //   onLogin: fn(),
  //   onLogout: fn(),
  //   onCreateAccount: fn(),
  // },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Header",
  },
};
// export const LoggedIn: Story = {
//   args: {
//     user: {
//       name: "Jane Doe",
//     },
//   },
// };

// export const LoggedOut: Story = {};
