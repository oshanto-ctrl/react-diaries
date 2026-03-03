
export default function ConditionalRendering() {

    /* Filter an fruit array.
       Display who have letter 'a' in them */
    const fruits = ["Apple", "Banana", "Cherry", "kiwi", "Orange", "Jackfruit", "Coconut"];

    return (
        <div>
           {
                fruits.map((fruit, id) =>
                    fruit.toLowerCase().includes("a") ? <p key={id}>{fruit}</p> : null
                )
            }
        </div>
    )
   

} // ConditionalRendering() Ends.