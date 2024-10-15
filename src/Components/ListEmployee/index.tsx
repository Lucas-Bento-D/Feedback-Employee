const list = [
    { id: 1, email: "jhonDoe@exemple.com", name: "Jhon Doe", mentalState: 5, stars: 3 },
    { id: 1, email: "jhonDoe@exemple.com", name: "Jhon Doe", mentalState: 5, stars: 3 },
    { id: 1, email: "jhonDoe@exemple.com", name: "Jhon Doe", mentalState: 5, stars: 3 },
    { id: 1, email: "jhonDoe@exemple.com", name: "Jhon Doe", mentalState: 5, stars: 3 },
    { id: 1, email: "jhonDoe@exemple.com", name: "Jhon Doe", mentalState: 5, stars: 3 },
]
const ListEmployee = () => {
    return (
        <ul>
            {
                list.map(({name, mentalState, stars}, index) => {

                    return (
                        <li key={index} className="border">
                            <h2>{name}</h2>
                            <h3>{mentalState}</h3>
                            <h4>{stars}</h4>
                        </li>
                    )
                })
            }
        </ul>
    )

}
export default ListEmployee