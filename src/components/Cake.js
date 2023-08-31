const Cake = ({cakeName,ingredients,price,rating}) => {

    console.log(ingredients);
    const makeList = ingredients.map((ingredient) => 
        <li>{ingredient}</li>
    );

    return(
        <>
            <h3>{cakeName}</h3>
            <p>Ingredients: {makeList}</p>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            <hr></hr>
        </>
    )

}

export default Cake;