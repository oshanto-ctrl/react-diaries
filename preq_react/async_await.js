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

/* Understand async/await with another example */

// The "New Way" with async/await (The Solution)
async function getUserPermissions() {
  try {
    // 1. Await the user data. The function pauses here until it's ready.
    const userResponse = await fetch('/api/user/1');
    const user = await userResponse.json();

    // 2. Now that we have the user, await the profile data.
    const profileResponse = await fetch(`/api/profiles/${user.profileId}`);
    const profile = await profileResponse.json();

    // 3. Now that we have the profile, await the permissions.
    const permissionsResponse = await fetch(`/api/permissions/${profile.roleId}`);
    const permissions = await permissionsResponse.json();

    console.log('Final Permissions:', permissions);
    return permissions; // The whole function returns a promise that resolves with 'permissions'

  } catch (error) {
    // A single catch block for any error in the entire chain!
    console.error('An error occurred!', error);
  }
}

// To run it:
getUserPermissions();