import type { Meta, StoryObj } from "@storybook/react";
import logo from "../../../components/atoms/logo/logo";
const meta: Meta<typeof logo> = {
    title: 'atoms/Logo',
    component: logo,
    argTypes: {
        img: { control: 'text' },
        style: { control: 'object' },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        img: 'https://via.placeholder.com/150', // Example image URL
        style: { width: '150px', height: '150px' },
    },
};

export const SmallLogo: Story = {
    args: {
        img:"src/assets/logo.png", // Example image URL
        style: { width: '100px', height: '50px', borderRadius:"8px" },
    },
};

export const LargeLogo: Story = {
    args: {
        img: 'https://via.placeholder.com/300', // Example image URL
        style: { width: '300px', height: '300px' },
    },
};
