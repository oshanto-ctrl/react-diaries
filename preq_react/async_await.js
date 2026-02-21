// Async/await 
const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
    // Try block
    try {
        const response = await fetch(API_URL);
        // If no response
        if(!response.ok) {
            // Throw a new error
            throw new Error("Failed to fetch posts");
        }

        // convert response data to json format
        const data = await response.json();

        // Console log the data
        console.log("Post recieved: ", data.slice(0, 2));
        return data;
    } catch(error) {
        console.log("Error: ", error.message);
    }
}

// Invoke the getPosts method
getPosts();