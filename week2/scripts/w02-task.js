/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Braden Holgate";
let currentYear = new Date().getFullYear();
let profilePicture = "images/weddingday.jpg";

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
const favoriteFoods = [' Steak', ' Chicken Wings', ' Beef Jerky'];
const additionalFavoriteFood = ' Salami sticks';

favoriteFoods.push(additionalFavoriteFood);
// foodElement.innerHTML += `<br>${favoriteFoods}`
// favoriteFoods.shift();
// foodElement.innerHTML += `<br>${favoriteFoods}`
// favoriteFoods.pop();
// foodElement.innerHTML += `<br>${favoriteFoods}`

foodElement.innerHTML += `<br>${favoriteFoods}`;
// foodElement.textContent = favoriteFoods;
console.log(favoriteFoods);

