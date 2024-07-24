import { Meta , StoryObj } from "@storybook/react";
import { Inputlabel } from "../../../components/atoms/label/label";
const meta: Meta<typeof Inputlabel> = {
  title: "atoms/label/Inputlabel",
  component: Inputlabel,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const todo: Story = {
  args: {
    label: "Name",
    id: "todo",
  },
};
