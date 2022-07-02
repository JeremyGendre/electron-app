import {PropsWithChildren} from "react";

export interface ButtonProps extends Partial<JSX.IntrinsicElements['button']>{

}

export default function Button({children, className, ...other}: PropsWithChildren<ButtonProps>){
    return(
        <button className={`rounded-full px-4 py-2 bg-orange-200 hover:bg-orange-300 cursor-pointer transition duration-150 disabled:hover:bg-orange-200 disabled:opacity-40 active:scale-95 disabled:active:scale-100 ${className}`} {...other}>
            {children}
        </button>
    );
}
