/* Step 2 - Variables */
let fullName = 'Braden Holgate';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/weddingday.jpg'; // Adjust with your actual image name

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const foodElement = document.getElementById('food');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
// Declare an array variable to hold my favorite foods.
const favoriteFoods = ['Steak', 'Chicken Wings', 'Beef Jerky'];

// Declare and instantiate a variable to hold another single favorite food item.
const additionalFavoriteFood = 'Bacon Cheeseburger';

// Add the value stored in this new variable to your favorite food array.
favoriteFoods.push(additionalFavoriteFood);

// Append the new array values onto the displayed content of the HTML element with the id of food using a <br> for line breaks.
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

// Remove the first element in the favorite food array.
const removedFirst = favoriteFoods.shift();
// Append the array output showing the modified array, using a line break.
foodElement.innerHTML += `<br>${removedFirst}<br>${favoriteFoods.join('<br>')}`;

// Remove the last element in the favorite food array.
const removedLast = favoriteFoods.pop();
// Append the array output with this final modified favorite foods array using a line break.
foodElement.innerHTML += `<br>${removedLast}<br>${favoriteFoods.join('<br>')}`;

// Log the modified array to the console.
console.log(favoriteFoods);
