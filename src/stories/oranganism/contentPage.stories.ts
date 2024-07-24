import type { Meta, StoryObj } from "@storybook/react";
import contentPage from "../../components/organisms/content";
const meta: Meta<typeof contentPage> = {
  title: "organisms/contentPage",
  component: contentPage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
