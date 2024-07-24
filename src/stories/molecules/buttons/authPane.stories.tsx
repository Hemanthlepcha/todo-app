import type { Meta, StoryObj } from "@storybook/react";
import authPane from "../../../components/molucules/authPane";
const meta: Meta<typeof authPane> = {
  title: "molecules/buttons/authPane",
  component: authPane,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
