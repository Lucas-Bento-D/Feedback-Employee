import{ ReactNode } from "react"

interface IProps{
    children: ReactNode

}
const Container = ({children}: IProps) => {
    return(
        <main className="container border border-solid border-black my-7">
            {children}
        </main>
    )
}
export default Container