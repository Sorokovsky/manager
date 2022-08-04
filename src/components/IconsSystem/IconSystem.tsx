import React from "react";
import cl from './IconsSystem.module.scss';
import tomato from '../../assets/tomato-svgrepo-com.svg';
import apple from '../../assets/apple-svgrepo-com.svg';
interface Icon{
    image:any;
    left:string;
    top:string;
}
const IconsSystem:React.FC = ():JSX.Element => {
    const [icons] = React.useState<Icon[]>([
        {
            image: tomato,
            left: '10%',
            top: '10%'
        },
        {
            image: tomato,
            left: '10%',
            top: '80%'
        },
        {
            image: tomato,
            left: '60%',
            top: '15%'
        },
        {
            image: apple,
            left: '75%',
            top: '80%'
        },
        {
            image: apple,
            left: '30%',
            top: '10%'
        },
        {
            image: apple,
            left: '90%',
            top: '65%'
        },
    ]);
    
    return (
        <React.Fragment>
            {icons.map(icon => <img 
                src={icon.image}
                style={
                    {
                        position: "fixed", 
                        zIndex: 0, 
                        top: icon.top,
                        left: icon.left
                    }}
                alt={icon.image}
                className={[cl.icon].join(" ")}
                key={icon.image}
                />
            )}
        </React.Fragment>
    )
}
export default IconsSystem;