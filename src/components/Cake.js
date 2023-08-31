import "./Cake.css"
const Cake = ({cakeName,ingredients,price,rating,quantity,onButtonClick}) => {

    const handleSellCakeButton = () => {
        onButtonClick({cakeName: cakeName,
            ingredients: ingredients,
            price: price,
            rating: rating,
            quantity: quantity+1});
    }
    console.log(ingredients);
    
    const makeList = ingredients.map((ingredient) => 
        <li>{ingredient}</li>
    );

    

    return(
        <div className="each-cake">
            <h3>{cakeName}</h3>
            <p>Ingredients: {makeList}</p>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={handleSellCakeButton}>Sell Cake</button>
            <hr></hr>
        </div>
    )

}

export default Cake;