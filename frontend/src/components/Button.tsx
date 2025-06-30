import type { ReactElement } from "react";


interface buttonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    fullWidth:boolean
    onClick?: () => void
    loading:boolean

}

const variantStyle = {
    "primary": "bg-purple-200 text-purple-600",
    "secondary": "bg-purple-600 text-white"
}

const defaultStyles = "rounded-md flex items-center cursor-pointer"

const sizeStyles = {
    "sm":"py-1 px-2",
    "md":"py-2 px-3",
    "lg":"py-4 px-6"
}
export const Button = (props: buttonProps) => {
            
    return <button onClick={props.onClick} className={`${variantStyle[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}  ${props.fullWidth ? "w-full flex justify-center items-center" : ""}
    ${props.loading ? "opacity-50 pointer-events-none" : ""}
    disabled={props.loading}
    `}>
       {props.startIcon ? <div className=" pr-2">{props.startIcon}</div>:null} {props.text} {props.endIcon}
        </button>
}
