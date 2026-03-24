import { useEffect, useState } from 'react';

/* Basic useeffect practice with clean-up function */

// const UseEffectPractice = () => {
//     const [count, setCount] = useState(0);

//     /* Practice useEffect here. */

//     // useEffect( () => {
//     //     console.log("This count is: ", count);
//     // }, [count]);

//     useEffect(() =>{
//         // Code
//         const listener = (e) => {
//             if(e.key === 'ArrowDown') {
//                 console.log(count);
//             }
//         }

//         window.addEventListener('keydown', listener);

//         // Cleanup function here
//         return () => {
//             window.removeEventListener('keydown', listener);
//         }
//     }, [count]);


//     // UI
//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <div style={ {flexDirection:'row'} }>
//                 <button onClick={() => setCount(count + 1)}>Increment</button>
//                 <button onClick={() => setCount(count - 1)}>Decrement</button>
//             </div>
//         </div>
//     );
// };

// // return the UI component
// export default UseEffectPractice;

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // API call - (This is a side-effect)
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []); // run once


    // UI
    return (
        <div>
            <h2>User List</h2>
            {users.map(users => (
                <li key={users.id}>{users.name}</li>
            ))}
        </div>
    )
};

// export the UI component
export default UserList;







