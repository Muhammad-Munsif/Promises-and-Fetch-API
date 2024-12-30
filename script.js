// script.js

// Select the button and card elements
const fetchUserButton = document.getElementById('fetchUser');
const userCard = document.getElementById('userCard');

// Function to fetch user data
function fetchUserData() {
    fetch("https://jsonplaceholder.typicode.com/users/1") // Fetch from API
        .then(response => {
            if (!response.ok) { 
                // Check if response is successful
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then(user => {
            // Pass the user data to another function to display it
            displayUser(user);
        })
        .catch(error => {
            // Handle errors
            console.error("Error fetching user:", error);
            userCard.innerHTML = `<p style="color: red;">Failed to load user data.</p>`;
            userCard.style.display = 'block'; // Show the error message
        });
}

// Function to display user data
function displayUser(user) {
    userCard.innerHTML = `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> ${user.website}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
        <p><strong>geo:</strong> ${user.address.geo.lng}</p>
    `;
    userCard.style.display = 'block'; // Make the card visible
}

// Attach event listener to the button
fetchUserButton.addEventListener('click', fetchUserData);






function timeDelay(password) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            if(password == "m.munsif4375@gmail.com"){
                resolve("login is successful");
            }
            else{
                reject('login is fialure')
            }
        }, 3000);
    })
}
timeDelay('m.munsi4375@gmail.com')
.then(function (data){
    console.log(data);
})
.catch(function(err){
console.log(err)
})