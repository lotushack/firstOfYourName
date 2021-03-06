const _ = require('lodash')
const titles =
[ { title: 'Ser', level: "low", id: 1 },
  { title: 'Maester', level: "low", id: 2 },
  { title: 'Prince', level: "low", id: 3 },
  { title: 'Protector of the Realm', level: "high", id: 4 },
  { title: 'Prince Regent', level: "low", id: 5 },
  { title: 'King of the Andals, the Rhoynar and the First Men', level: "high", id: 6 },
  { title: 'Lord of the Seven Kingdoms', level: "high", id: 7 },
  { title: 'Lord of Dragonstone', level: "high", id: 8 },
  { title: 'Priest', level: "low", id: 9 },
  { title: 'Captain of the Golden Storm', level: "high", id: 10 },
  { title: 'King of the Andals, the Rhoynar, and the First Men', level: "high", id: 11 },
  { title: 'Septa', level: "low", id: 12 },
  { title: 'Queen of the Iron Islands', level: "high", id: 13 },
  { title: 'Lord of Brightwater', level: "high", id: 14 },
  { title: 'Lady of Highgarden', level: "low", id: 15 },
  { title: 'Lord of Brightwater', level: "high", id: 16 },
  { title: 'Hand of the King', level: "high", id: 17 },
  { title: 'Lady', level: "low", id: 18 },
  { title: 'Queen', level: "high", id: 19 },
  { title: 'Lord', level: "low", id: 20 },
  { title: 'Lord Commander of the Kingsguard', level: "high", id: 21 },
  { title: 'Lord of Tarbeck Hall', level: "low", id: 22 },
  { title: 'Lord of the Tides', level: "high", id: 23 },
  { title: 'Master of Driftmark', level: "high", id: 24 },
  { title: 'Admiral', level: "low", id: 25 },
  { title: 'Master of ships', level: "low", id: 26 },
  { title: 'Lady of Winterfell', level: "high", id: 27 },
  { title: 'Lady of Blackcrown', level: "high", id: 28 },
  { title: 'Iron King', level: "high", id: 29 },
  { title: 'King of the Isles and the North', level: "high", id: 30 },
  { title: 'King of Salt and Rock', level: "high", id: 31 },
  { title: 'Son of the Sea Wind', level: "low", id: 32 },
  { title: 'Lord Reaper of Pyke', level: "high", id: 33 },
  { title: 'The Greyjoy', level: "low", id: 34 },
  { title: 'Captain of the Great Kraken', level: "low", id: 35 },
 { title: 'Septon', level: "low", id: 36 },
 { title: 'Brother', level: "low", id: 37 },
 { title: 'High Septon', level: "high", id: 38 },
 { title: 'His High Holiness', level: "high", id: 39 },
 { title: 'Father of the Faithful', level: "low", id: 40 },
 { title: 'Voice of the Seven on Earth', level: "low", id: 41 },
 { title: 'Queen of the Seven Kingdoms', level: "high", id: 42 },
 { title: 'Septa', level: "low", id: 43 },
 { title: 'Lord of Casterly Rock', level: "high", id: 44 },
 { title: 'Shield of Lannisport', level: "low", id: 45 },
 { title: 'Warden of the West', level: "low", id: 46 },
 { title: 'Hand of the King', level: "low", id: 47 },
 { title: 'Savior of the City of King\'s Landing', level: "high", id: 48 },
 { title: 'Ser', level: "low", id: 49 },
 { title: 'Commander of the City Watch', level: "low", id: 50 },
 { title: 'Lord Commander of the Kingsguard', level: "high", id: 51 },
 { title: 'King of All Westeros', level: "high", id: 52 },
 { title: 'Shield of His People', level: "high", id: 53 },
 { title: 'King of the Andals, the Rhoynar and the First Men', level: "high", id: 54 },
 { title: 'Lord of the Seven Kingdoms', level: "high", id: 55 },
 { title: 'Protector of the Realm', level: "high", id: 56 },
 { title: 'Lady of Dragonstone', level: "high", id: 57 },
 { title: 'Prince', level: "low", id: 58 },
 { title: 'Lady', level: "low", id: 59 } ]

export function getRandomTitle () {
   let randomIndex = _.random(0, titles.length);
   return titles[randomIndex];
 }
