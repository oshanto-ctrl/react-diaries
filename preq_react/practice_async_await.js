// Practice async-await with examples z.ai

/*
Problem 1: Fetching Data and Handling States (The Most Common Task)
Scenario: You need to fetch a list of products from an API and display 
them on a webpage. You must show a "Loading..." message while fetching
and an error message if it fails.
*/
// Always handle loading & error states

// A function to simulate an API call that might fail
function fetchProductsFromAPI() {
    
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (Math.random() > 0.2) {
                resolve([
                    {id: 1, name: 'Laptop'},
                    {id: 2, name: 'Mouse'},
                ]);
            } else {
                reject('Network Error: Could not reach the server.');
            }
        }, 1500);
    });
}


// Our main application logic
async function displayProducts() {
    
    // Initialize UI state
    const productListElement = document.getElementById('product-list');
    productListElement.innerHTML = '<li>Loading...<li>';

    try {
        // Awit the data, UI showing "Loading ... at this point"
        const products = await fetchProductsFromAPI();

        // Success => Clear loading message and render the products
        productListElement.innerHTML = ''; // clear loading text
        products.forEach(product => {
            const li = document.createElement('li');
            li.textContent = product.name;
            productListElement.appendChild(li);
        });
    
    } catch(Error) {
        console.log("Error: ", error.message);
        productListElement.innerHTML = `<li style="color:red;"Error: ${error}</li>`;
    }

}

// Invoke products
displayProducts();
