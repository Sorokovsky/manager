import React from "react";
import cl from './Products.module.scss';
import ProductsItem from "./ProductsItem";
import products from "../../store/productsStore";
import { observer } from "mobx-react-lite";
const ProductsList:React.FC = observer(():JSX.Element => {
    return (
        <div className={[cl.box].join(" ")}>
            {products.products.map(
                (item => <ProductsItem 
                    product={item} 
                    key={item.id} />
                ))
            }
        </div>
    )
})
export default ProductsList;