/* LESSON 3 - Programming Tasks */

let myProfile = {
    name: "Braden Holgate",
    photo: "images/weddingday.jpg",
    favoriteFoods: [
      'Steak',
      'Chicken Wings',
      'Beef Jerky',
      'Bacon Cheeseburger'
    ],
    hobbies: [
        'Video Games',
        'Dungeons & Dragons',
        'Quality Time with Wife',
        'Camping',
        'Making Homemade Jerky'
    ],
    placesLived: []
  };
  
  myProfile.placesLived.push(
    {
        place: 'Ogden, Utah',
        length: '28 years'
    },
    {
        place: 'Draper, Utah',
        length: '13 years'
    },
    {
        place: 'Asuncion, Paraguay',
        length: '2 years'
    }
  );
  
  document.querySelector('#name').textContent = myProfile.name;
  document.querySelector('#photo').src = myProfile.photo;
  document.querySelector('#photo').alt = myProfile.name;
  
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  /* Hobbies List */
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  
  /* Places Lived DataList */
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });