// Fake API for test 
/*
JavaScript is single-threaded.
When we call API.
- It takes time
- JS does not block the whole APP
- It continues running other code
- When data arrives it hanldes it.
This mechanism is Asynchonous programming.
*/
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Fetch posts from API
function getPosts(){
    return fetch(API_URL)
        .then(response => {
            // If no response throw new error
            if(!response.ok){
                throw new Error("Failed to fetch posts");
            }
            // If success, return response in json format
            return response.json();
        })
        .then(data => {
            console.log("Posts recieved:", data.slice(0, 5));
            return data;
        })
        .catch(error => {
            console.log("Error: ", error.message);
        });
}

// Call the method
getPosts()