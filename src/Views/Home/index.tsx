import ListEmployee from "../../Components/ListEmployee"
import SearchBar from "../../Components/SearchBar"

const Home = () => {
    return(
        <>
            <h2>Colaboradores</h2>
            <div>
                <SearchBar />
                <button>adicionar colaborador</button>
            </div>
            <ListEmployee />
        </>
    )
}
export default Home