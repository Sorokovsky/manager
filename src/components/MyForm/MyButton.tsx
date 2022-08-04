import React from "react";
import { Buttons } from "../../utils/Buttons";
import cl from './MyForm.module.scss';
interface Props{
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset' | undefined;
    buttonStyle?: Buttons;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const MyButton:React.FC<Props> = (
    {children, 
     type = Buttons.submit,
     onClick = (e) => {}, 
     buttonStyle = Buttons.submit}:Props
    ):JSX.Element => {
    return(
        <button 
        className={[cl.btn, cl[buttonStyle]].join(" ")}
        onClick={onClick} 
        type={type}>
            {children}
        </button>
    )
}
export default MyButton;