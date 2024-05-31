import type { Meta, StoryObj } from "@storybook/react";
import ClassCard from "@/components/common/ClassCard";
import { mockClassCardContent } from "@/lib/mock";

const meta: Meta<typeof ClassCard> = {
  title: "Common/ClassCard",
  component: ClassCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ClassCard>;

export const Small: Story = {
  args: { size: "small", content: mockClassCardContent },
};

export const Large: Story = {
  args: { size: "large", content: mockClassCardContent },
};
