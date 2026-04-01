// Initialize empty users array:
let users = [];

// load users function - AJAX request
const loadUsers = () => {
    // xhr object creation
    const xhr = new XMLHttpRequest();
    // Request configuraton
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    // Response handling
    xhr.onload = () => {
        // Check api response status
        if (xhr.status === 200) {
            // Append response to users array
            users = JSON.parse(xhr.responseText);
            // Log array of parsed JSON
            console.log(users);
            // Pass populated array into display users function - call function
            displayUsers(users);
        }
        // If response is anything other than 200
        else {
            // Log the error to the console
            console.error('Error fetching data');
        }
    }
    // Error handling if request cannot be made at all
    xhr.onerror = () => {
        console.error('Request failed - check network connection');
    }
    // Send AJAX request
    xhr.send();
}

// Display users function
const displayUsers = (users) => {
    // Select user-list element from the DOM
    const container = document.getElementById('user-list');
    // Clear previous list content
    container.innerHTML = '';
    // Loop through each user in the populated users array
    users.forEach((user) => {
        // Create a sub container for each array element
        const div = document.createElement('div');
        // Append user info into each new div
        div.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>City: ${user.address.city}</p>
        `;
        // Append these new divs into the user list
        container.appendChild(div);
    });
}

// Search feature funcionality::
// Select the search box and listen for an input event
document.getElementById('search').addEventListener('input', function() {
    // Convert value of user query to lower case
    const value = this.value.toLowerCase();
    // Loop through each user and find matches
    const filtered = users.filter((user) => {
        // Return filtered value
        return user.name.toLowerCase().includes(value);
    });
    // Call displayUsers() and pass in filtered list
    displayUsers(filtered);
});