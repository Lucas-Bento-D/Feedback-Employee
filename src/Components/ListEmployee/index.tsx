import { Link } from "react-router-dom"
import userImg from "../../assets/img_avatar.png"
import Card from "../Card"

const list = [
    { id: 1, userImg: userImg, email: "jhonDoe@exemple.com", name: "Jhon Doe", mentalState: 5, stars: 3 },
    { id: 1, userImg: userImg, email: "jhonDoe@exemple.com", name: "Jhon Doe", mentalState: 5, stars: 3 },
    { id: 1, userImg: userImg, email: "jhonDoe@exemple.com", name: "Jhon Doe", mentalState: 5, stars: 3 },
    { id: 1, userImg: userImg, email: "jhonDoe@exemple.com", name: "Jhon Doe", mentalState: 5, stars: 3 },
    { id: 1, userImg: userImg, email: "jhonDoe@exemple.com", name: "Jhon Doe", mentalState: 5, stars: 3 },
    { id: 1, userImg: userImg, email: "jhonDoe@exemple.com", name: "Jhon Doe", mentalState: 5, stars: 3 },
    { id: 1, userImg: userImg, email: "jhonDoe@exemple.com", name: "Jhon Doe", mentalState: 5, stars: 3 },
    { id: 1, userImg: userImg, email: "jhonDoe@exemple.com", name: "Jhon Doe", mentalState: 5, stars: 3 },
    { id: 1, userImg: userImg, email: "jhonDoe@exemple.com", name: "Jhon Doe", mentalState: 5, stars: 3 },
    { id: 1, userImg: userImg, email: "jhonDoe@exemple.com", name: "Jhon Doe", mentalState: 5, stars: 3 },
]
const ListEmployee = () => {
    return (
        <ul className="flex flex-wrap gap-3 my-3">
            {
                list.map(({id, name, mentalState, stars, userImg}, index) => {
                    return (
                        <Card {...{index, id, name, mentalState, stars, userImg}} />
                    )
                })
            }
        </ul>
    )

}
export default ListEmployee