/*
    Why useRef()
    - A way to store a value that persist across renders
        Without causing re-render. 
    - State -> changes UI (re-render)
    - Ref -> stores value silently (no re-render)

    Basic syntax
    - const myRef = useRef(initialValue)
    access the value using:
    myRef.current
*/

import { useRef, useState } from 'react';

/* Access DOM Elements (MOST COMMON) */

// const FocusInput = () => {
//     const inputRef = useRef(null); // reference to input

//     const handleFocus = () => {
//         inputRef.current.focus(); // access DOM directly
//     }

//     // UI
//    return (
//      <div>
//         <input ref={inputRef} type="text" placeholder='Click button to focus' />

//         <button onClick={handleFocus}>
//             Focus Input
//         </button>
//     </div>
//    );
// }

// // Export the UI component : FocusInput
// export default FocusInput;



const StopWatch = () => {
    const [time, setTime] = useState(0);
    
    const intervalRef = useRef(null); // stores interval ID

    const start = () => {
        if(intervalRef.current !== null) return; // prevent multiple timers

        intervalRef.current = setInterval(() => {
            setTime(t => t + 1);
        }, 1000);
    };

    const stop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    return (
        <div>
            <h2>Time: {time}</h2>

            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    )
};

// Export StopWatch UI Component
export default StopWatch;



