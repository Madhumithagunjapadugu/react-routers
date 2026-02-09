import data from "../../../data"
import "./Receipe.css"
import {useNavigate} from 'react-router-dom'
function Receipe(){
  const nav=useNavigate();
  return (
    
    <div id="one">
      
      {data.recipes.map((val,index)=>{
        return(
         
          <div id="two" key={index}
            onClick={()=>{
              nav(`${val.id}`)
            }} >
              
            <h1>{val.name}</h1>
            <img src={val.image} alt=" " width="200" />
            </div>
        )
      })}
    </div>
  )
}
export default Receipe