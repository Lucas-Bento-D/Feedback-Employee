import Container from "../Container"
import Menu from "../Menu "

const Header = () => {
    return(
        <header className="bg-red-700 p-2 shadow shadow-gray-500/70">
            <Container className=" flex flex-col gap-2">
                <div className="flex justify-center">
                    <span>
                        logo
                    </span>
                </div>
                <div className="flex justify-center">
                    <Menu />
                </div>
            </Container>
        </header>
    )
}

export default Header