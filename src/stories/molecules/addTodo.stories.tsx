import type { Meta, StoryObj } from "@storybook/react";
import TodoInput from '../../components/molucules/addTodo';
const meta: Meta<typeof TodoInput> = {
  title: 'molecules/TodoInput',
  component: TodoInput,
  tags:['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
