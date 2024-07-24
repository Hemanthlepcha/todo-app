import type { Meta, StoryObj } from "@storybook/react";
import displayPara from "../../../components/atoms/displayPara/displayPara";
const meta: Meta<typeof displayPara> = {
    title: 'atoms/DisplayPara',
    component: displayPara,
    argTypes: {
        style: { control: 'object' },
        id: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        style: { color: 'black', fontSize: '16px' },
        id: 'default',
        todoInput:"Molecules: Molecules are combinations of atoms that form more complex components."
    },
};

export const RedText: Story = {
    args: {
        style: { color: 'red', fontSize: '20px' },
        id: 'red-text',
        todoInput: "Molecules: Molecules are combinations of atoms that form more complex components."
    },
};

export const LargeFont: Story = {
    args: {
        style: { color: 'blue', fontSize: '24px' },
        id: 'large-font',
        todoInput:"Molecules: Molecules are combinations of atoms that form more complex components."
    },
};
