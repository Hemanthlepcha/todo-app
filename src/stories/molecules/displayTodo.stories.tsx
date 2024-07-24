import type { Meta, StoryObj } from "@storybook/react";
import displayTodo from "../../components/molucules/displayTodo";
const meta: Meta<typeof displayTodo> = {
  title: 'molecules/DisplayTodo',
  component: displayTodo,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
