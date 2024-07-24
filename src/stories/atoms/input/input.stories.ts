import Input from "../../../components/atoms/inputs/input";
import { Meta, StoryObj } from "@storybook/react";

 const meta : Meta<typeof Input> ={
    title: "atoms/input/Input",
    component: Input
} 
export default meta

type Story = StoryObj<typeof meta>;

export const input : Story ={
    args:{
        name:"Name",
        type:"text-area",
        placeholder:"name"
    }
}
// export default input
