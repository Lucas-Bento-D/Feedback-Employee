import{ ReactNode } from "react"

interface IProps{
    children: ReactNode
    className?: string
}
const Container = ({className: classes, children}: IProps) => {
    return(
        <main className={` ${classes} container`}>
            {children}
        </main>
    )
}
export default Container