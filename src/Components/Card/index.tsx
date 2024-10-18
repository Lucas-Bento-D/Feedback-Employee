import { Link } from "react-router-dom"

interface ICard {
    index: number, 
    id: number, 
    userImg: string, 
    name: string, 
    mentalState: number, 
    stars: number
}

const Card = ({index, id, userImg, name, mentalState, stars}: ICard) => {
    return (
        <li key={index} className="border w-1/6 bg-violet-500 rounded-md">
            <Link to={`/employee/${id}`} className="block p-4 text-center">
                <img className="rounded-full mb-4" src={userImg} />
                <h2 className="text-color text-md mb-4">{name}</h2>
                <div className="flex justify-around">
                    <h3>{mentalState}</h3>
                    <h4>{stars}</h4>
                </div>
            </Link>
        </li>
    )
}

export default Card