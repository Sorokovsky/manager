import { observer } from "mobx-react-lite";
import React from "react";
import { Product } from "../../store/productsStore";
import cl from './Products.module.scss';
import ProductsItem from "./ProductsItem";
interface Props{
    products: Product[];
}
const ProductsList:React.FC<Props> = observer(
    ({
        products
    }:Props):JSX.Element => {
    return (
        <div className={[cl.box].join(" ")}>
            {products.map(
                (item => <ProductsItem 
                    product={item} 
                    key={item.id} />
                ))
            }
        </div>
    )
})
export default ProductsList;