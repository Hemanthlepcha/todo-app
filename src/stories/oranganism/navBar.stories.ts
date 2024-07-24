import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "../../components/organisms/navBar";
const meta: Meta<typeof NavBar> = {
    title: 'organisms/NavBar',
    component: NavBar,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
