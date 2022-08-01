import React, { FC } from "react";
import cl from './Container.module.scss';
interface Props {
    children: React.ReactNode
}
const Container:FC<Props> = ({children}:Props):JSX.Element => {
    return (
        <div className={[cl.container].join(" ")}>
            {children}
        </div>
    )
}
export default Container;