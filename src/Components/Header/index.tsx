import Container from "../Container"
import Menu from "../Menu "

const Header = () => {
    return(
        <header className="p-2 shadow shadow-gray-500/70">
            <Container className=" flex flex-col gap-2">
                <div className="flex justify-start">
                    <h1 className="logo">
                        Gerenciamento de Equipe
                    </h1>
                </div>
            </Container>
        </header>
    )
}

export default Header