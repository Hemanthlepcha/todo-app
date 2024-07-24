import React from "react"

interface Props{
    img:string
    style?:React.CSSProperties
}

const logo: React.FC<Props> =({img, style})=>{
    return(
        <img src={img} alt="logo" style={style}/>
    )
}
export default logo