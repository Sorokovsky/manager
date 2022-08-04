import React from "react";
import { Product } from "../../store/productsStore";
import cl from './Products.module.scss';
interface Props{
    product:Product
}
const ProductsItem:React.FC<Props> = ({product}:Props):JSX.Element => {
    return (
        <div className={[cl.item].join(" ")}>
            {product.name}
        </div>
    )
}
export default ProductsItem;