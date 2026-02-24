// export default function MapPractice() {
//   const toys = ["Bus", "Car", "Robot"];

//   return (
//     <ul>
//       {toys.map((toy) => (
//         <li key={toy}>{toy}</li>
//       ))}
//     </ul>
//   );
// }

export default function MapPractice() {
    // fruitBasket varibale
    const fruitBasket = () => {
        // fruits array
        const fruits = ["Apple", "Orange", "Dates", "Peach", "Tamarind"];

        // returns fruits array with .map() function
        return (
            <div style={ {backgroundColor:'oldlace', fontFamily:'cursive', listStyle:'inside', alignItems:'center'} }>
                <h1>My Fruity Basket</h1>
                <ul>{fruits.map((fruit) => (
                    <li key={fruit}>{fruit}</li>
                ))}
                </ul>
            </div>
        );

    };
    // Return the fruitBasket component UI
    return fruitBasket();

} // MapPractice() Ends

