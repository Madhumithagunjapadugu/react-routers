
import data from "../../data"
import {useParams} from 'react-router-dom'
import './single.css'
function Singlereceipe(){
    const queryParms=useParams()
    const filteredReceipe=data.recipes.filter(x=>x.id==Number(queryParms.id))

    return (
        <div id="item">
        <h1>Receipe vth Ingredients</h1>
        <h1>{filteredReceipe[0].name}</h1>
        <img src={filteredReceipe[0].image} width="200" />
        <p>{filteredReceipe[0].ingredients}</p>
        <p>You can prepare it in {filteredReceipe[0].prepTimeMinutes} min</p>
        </div>
    )
}
export default Singlereceipe