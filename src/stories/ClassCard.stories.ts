import type { Meta, StoryObj } from "@storybook/react";
import { ClassCard } from "@/components/common/ClassCard";

const mockData: ClassCard = {
  id: "1234",
  name: "초보도 가능한 즐거운 쿠킹 클래스",
  category: "COOKING",
  tutor: { username: "브릿지셰프" },
  address1: "서울",
  address2: "브릿지구",
  price: 30000,
  duration: 60,
  rating_avg: 4.8,
  review_cnt: 5,
};

const meta: Meta<typeof ClassCard> = {
  title: "Common/ClassCard",
  component: ClassCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ClassCard>;

export const Small: Story = {
  args: { size: "small", content: mockData },
};

export const Large: Story = {
  args: { size: "large", content: mockData },
};
