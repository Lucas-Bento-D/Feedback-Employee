import AddEmployee from "../../Components/AddEmployee"
import ListEmployee from "../../Components/ListEmployee"
import SearchBar from "../../Components/SearchBar"

const Home = () => {
    return(
        <>
            <h2>Equipe</h2>
            <div>
                <SearchBar />
                <button className="bg-green-600 p-2 rounded-md text-white">adicionar colaborador</button>
            </div>
            <ListEmployee />
            <AddEmployee />
        </>
    )
}
export default Home