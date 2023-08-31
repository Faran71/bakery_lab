import { useState } from "react";
import Cake from "../components/Cake";

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
           rating: 5
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
         rating: 3
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
          rating: 5
   })


    return(
        <>
           <Cake cakeName={victoriaSponge.cakeName} 
           ingredients={victoriaSponge.ingredients} 
           price={victoriaSponge.price} 
           rating={victoriaSponge.rating}/>
           <Cake cakeName={teaLoaf.cakeName} 
           ingredients={teaLoaf.ingredients} 
           price={teaLoaf.price} 
           rating={teaLoaf.rating}/>
           <Cake cakeName={carrotCake.cakeName} 
           ingredients={carrotCake.ingredients} 
           price={carrotCake.price} 
           rating={carrotCake.rating}/>
           <p>Average Rating: {(victoriaSponge.rating+ teaLoaf.rating+ carrotCake.rating)/3}</p>
        </>
    )
}

export default CakeContainer;