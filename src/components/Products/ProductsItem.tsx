import React from "react";
import { Product } from "../../store/productsStore";
import cl from './Products.module.scss';
import products from './../../store/productsStore';
interface Props{
    product:Product
}
const ProductsItem:React.FC<Props> = ({product}:Props):JSX.Element => {
    const complete = ():void => {
        products.complete(product.id);
    }
    const decremment = ():void => {
        products.decremment(product.id);
        if(product.completed){
            complete();
        }
    }
    const incremment = ():void => {
        products.incremment(product.id);
        if(product.completed){
            complete();
        }
    }
    const deleteItem = ():void => {
        products.deleteOne(product.id);
    }
    return (
        <div className={[cl.item].join(" ")}>
            <p className={[cl.name].join(" ")}>{product.name} {product.count}.</p>
            <div className={[cl.tools].join(" ")}>
                <div onClick={complete} className={[cl.complete, product.completed ? cl.completed : ""].join(" ")}></div>
                <div onClick={decremment} className={[cl.count, cl.decremment].join(" ")}></div>
                <div onClick={incremment} className={[cl.count, cl.incremment].join(" ")}></div>
                <div onClick={deleteItem} className={[cl.delete].join(" ")}>
                </div>
            </div>
        </div>
    )
}
export default ProductsItem;