const randomItems = [
    {name: 'Mercury', info: 'Your weight on Mercury would be 38% of your weight on Earth.'},
    {name: 'Venus', info: 'A year on Venus takes 225 Earth days.'},
    {name: 'Earth', info: 'The Earth was once believed to be the centre of the universe.'},
    {name: 'Mars', info: 'On Mars the Sun appears about half the size as it does on Earth.'},
    {name: 'Jupiter', info: 'Jupiter’s moon Ganymede is the largest moon in the solar system.'},
    {name: 'Saturn', info: 'Saturn has 150 moons and smaller moonlets.'},
    {name: 'Uranus', info: 'Uranus makes one trip around the Sun every 84 Earth years.'},
    {name: 'Neptune', info: 'Neptune is the most distant planet from the Sun.'},
];

const randomNumber = Math.floor(Math.random() * 8);

console.log(`\nPLANET: ${randomItems[randomNumber].name}`);
console.log(`INFO: ${randomItems[randomNumber].info}`);