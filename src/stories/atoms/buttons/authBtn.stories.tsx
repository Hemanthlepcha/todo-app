import type { Meta, StoryObj } from "@storybook/react";

import authBtn from "../../../components/atoms/buttons/authBtn";
const meta: Meta<typeof authBtn> = {
    title: "atoms/buttons/authBtn",
    component: authBtn,
};

export default meta;

type Story = StoryObj<typeof meta>

export const SignIn: Story={
    args:{
        label:"Sign In",
        style:{background:"black", color:"white"}
        
    }
}

export const Login: Story={
    args:{
        label: "Log In",
        style:{background:"blue", color:"white"}
    }
}