/* 
Task:
User types a number, Button Doubles it,
shows the result.
*/

import { useState } from "react";

export default function DoubleNumber() {
    const [num, setNum] = useState("");
    const [result, setResult] = useState(0);

    const handleInput = (e) => {
        setNum(e.target.value);
    }

    const doubleIt = () => {
        setResult(num * 2);
    }

    {/* UI */}
    return(
        <div>
            <input type="number" onChange={handleInput} />
            <button onClick={doubleIt}>Double</button>
            <p>DOUBLED RESULT: {result}</p>
        </div>
    );
}

