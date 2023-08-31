import { useState } from "react";
import Cake from "../components/Cake";
import "./CakeContainer.css"

const CakeContainer = () => {

    const [victoriaSponge, setVictoriaSponge] = useState({
        cakeName: "Victoria Sponge",
           ingredients: [
               "eggs",
              "butter",
              "sugar",
              "self-raising flour",
              "baking powder",
              "milk"
          ],
          price: 5,
           rating: 5,
           quantity: 0
        })

    const [teaLoaf, setTeaLoaf] = useState({
        cakeName: "Tea Loaf",
          ingredients: [
              "eggs",
             "oil",
             "dried fruit",
             "sugar",
             "self-raising flour",
             "strong tea",
         ],
         price: 2,
         rating: 3,
         quantity: 0
        })

    const [carrotCake, setCarrotCake] = useState({
        cakeName: "Carrot Cake",
          ingredients: [
           "carrots",
             "walnuts",
             "oil",
             "cream cheese",
             "flour",
             "sugar",
          ],
          price: 8,
          rating: 5,
          quantity: 0
   })


    return(
        <div className="page">
           <Cake cakeName={victoriaSponge.cakeName} 
           ingredients={victoriaSponge.ingredients} 
           price={victoriaSponge.price} 
           rating={victoriaSponge.rating} 
           quantity={victoriaSponge.quantity} 
           onButtonClick={setVictoriaSponge}/>
           <Cake cakeName={teaLoaf.cakeName} 
           ingredients={teaLoaf.ingredients} 
           price={teaLoaf.price} 
           rating={teaLoaf.rating} 
           quantity={teaLoaf.quantity} 
           onButtonClick={setTeaLoaf}/>
           <Cake cakeName={carrotCake.cakeName} 
           ingredients={carrotCake.ingredients} 
           price={carrotCake.price} 
           rating={carrotCake.rating} 
           quantity={carrotCake.quantity} 
           onButtonClick={setCarrotCake}/>
           <p>Average Rating: {(victoriaSponge.rating+ teaLoaf.rating+ carrotCake.rating)/3}</p>
           <h4>Total Cost: {(victoriaSponge.price*victoriaSponge.quantity)+
           (teaLoaf.price*teaLoaf.quantity)+
           (carrotCake.price*carrotCake.quantity)}</h4>
        </div>
    )
}

export default CakeContainer;