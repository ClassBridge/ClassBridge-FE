// import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
// import { Header } from "./Header";

// const meta = {
//   title: "Example/Header",
//   component: Header,
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ["autodocs"],
//   parameters: {
//     // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
//     layout: "fullscreen",
//   },
//   args: {
//     onLogin: fn(),
//     onLogout: fn(),
//     onCreateAccount: fn(),
//   },
// } satisfies Meta<typeof Header>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const LoggedIn: Story = {
//   args: {
//     user: {
//       name: "Jane Doe",
//     },
//   },
// };

// export const LoggedOut: Story = {};

// 아래는 제가 임시로 연습차 만들어 봤어요!
import { Meta, StoryObj } from "@storybook/react";
import Header from "@/components/common/Header";

const meta: Meta<typeof Header> = {
  title: "Common/Header",
  component: Header,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Header",
  },
};
