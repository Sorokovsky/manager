import { observer } from "mobx-react-lite";
import React from "react";
import { Buttons } from "../../utils/Buttons";
import { Type } from "../../utils/Types";
import MyButton from "./MyButton";
import cl from './MyForm.module.scss';
import MyInput from "./MyInput";
import products from '../../store/productsStore';
const MyForm:React.FC = observer(():JSX.Element => {
    const deleteAll = (e: React.MouseEvent):void => {
        e.preventDefault();
        products.deleteAll();
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        const form:HTMLFormElement = e.target as HTMLFormElement
        const data:FormData = new FormData(form);
        const name:string = data.get("name") as string;
        const count:number = Number(data.get("count")) as number;
        if(count === 0 || name === ""){
            if(name === ""){
                alert("Введіть назву продукту");
            }
            if(count === 0){
                alert("Введіть кількість продукту");
            }
            return;
        }
        if(count <= 0){
            alert("Кількість продуктів має бути більше нуля");
            return;
        }
        products.create(name, count);
    }
    return(
        <form onSubmit={onSubmit} action="#" className={[cl.form].join(" ")}>
            <MyInput placeholder="Введіть назву продукту" 
                    name="name" />
            <MyInput placeholder="Введіть кількість продуктів" 
                     type={Type.number} 
                     name="count" />
            <MyButton>Додати продукт</MyButton>
            <MyButton
             type="button"
             buttonStyle={Buttons.delete} onClick={deleteAll} >Очистити список</MyButton>
        </form>
    )
});
export default MyForm;