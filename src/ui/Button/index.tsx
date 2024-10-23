import { ReactNode } from "react"

interface IButton {
    children?: string
    type: "success" | "warning" | "danger"
    text?: string
    className?: string
    submit: boolean
    callBack?: Function
    callBackAction?: "onClick" | "onFocus" | "onChange"
}
const Button = ({children, type, text, className: classes, submit, callBack, callBackAction}: IButton) => {
    return <button 
                className={`${type} ${classes ? classes: ""}`} 
                type={ submit ? "submit" : "button"}
                >
                    {children ? children : text}        
            </button>
}
export default Button