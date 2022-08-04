import React from "react";
import { Type } from "../../utils/Types";
import cl from './MyForm.module.scss';
interface Props{
    type?: Type;
    placeholder?: string;
    name: string;
}
const MyInput:React.FC<Props> = ({type = Type.text, placeholder = "", name}:Props):JSX.Element =>{
    return (
        <input type={type}
         placeholder={placeholder} 
         className={[cl.input].join(" ")}
         name={name} />
    )
}
export default MyInput;