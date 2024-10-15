import { useParams } from "react-router-dom"

const EMPLOYE_EXAMPLE = {
    id: 1, email: "jhonDoe@exemple.com", name: "Jhon Doe", mentalState: 5, stars: 3
}

const Employee = () => {
    
    const { id } = useParams()
    console.log({id})

    return(
        <div>
            <h2>
                {EMPLOYE_EXAMPLE.name}
            </h2>
            <span>
                como está se sentindo?
                <span>{EMPLOYE_EXAMPLE.mentalState}/5</span>
            </span>
            <br />
            <span>
                Nivel de habilidade
                <span>{EMPLOYE_EXAMPLE.stars}/5</span>
            </span>
        </div>
    )
}
export default Employee