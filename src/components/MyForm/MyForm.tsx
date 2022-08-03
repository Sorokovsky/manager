import { observer } from "mobx-react-lite";
import React from "react";
import { Type } from "../../utils/Types";
import cl from './MyForm.module.scss';
import MyInput from "./MyInput";
const MyForm:React.FC = observer(():JSX.Element => {
    return(
        <form action="#" className={[cl.form].join(" ")}>
            <MyInput placeholder="Введіть назву продукту"/>
            <MyInput placeholder="Введіть кількість продуктів" type={Type.number}/>
        </form>
    )
});
export default MyForm;