import React from "react";

interface Props{
    style?: React.CSSProperties;
    id: string
    todoInput: string
}

const displayPara: React.FC<Props> =({style, id, todoInput})=>{
    return(
        <p style={style} id={id}>{todoInput}</p>
        
    )
}
export default displayPara
