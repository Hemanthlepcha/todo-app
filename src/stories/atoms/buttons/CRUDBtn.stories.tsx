import CRUDBtn from "../../../components/atoms/buttons/CrudBtn";
import type { Meta, StoryObj } from "@storybook/react";
import './button.css'


const meta: Meta<typeof CRUDBtn> = {
    title: "atoms/buttons/CRUDBtn",
    component: CRUDBtn,
};

export default meta
type Story = StoryObj<typeof meta>

export const addTodo: Story={
    args:{
        icon: "add",
        label: "Add ",
        

    }
} 

export const edit: Story={
    args:{
        icon: "edit",
        label: "Edit",
        textColor:"blue"

    }
} 
export const deleteTodo: Story={
    args:{
        icon: "delete",
        label: "Remove",
        textColor:"red",
        bgColor: "#00C9#C4FCEFA7"

    }
} 