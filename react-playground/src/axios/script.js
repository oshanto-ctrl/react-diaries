// // GET
axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    })

// POST
// const newUser = {
//     name: "Tommy Sice",
//     customer: true,
// };

// axios.post("https://jsonplaceholder.typicode.com/users", newUser)
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

/* PUT */
// axios.put("https://jsonplaceholder.typicode.com/users/1", newUser)
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.log(error);
//     });


/* Delete */

// axios.put("https://jsonplaceholder.typicode.com/users/1", newUser)
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

