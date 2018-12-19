var names = [
  "Mr. Arsyad",
  "Mr. Cristian",
  "Mrs. Dheta",
  "Mr. Furqon",
  "Mr. Gatot",
  "Mrs. Manda",
  "Mr. Yusuf"
];

console.log('LEVEL 0 : Display every single name on console.log');

names.forEach(name => console.log(name));

console.log('LEVEL 1 : Display all names with Mr.title');

var mr = names.filter(word => word.startsWith('Mr.'))

mr.forEach(name => console.log(name))

console.log('LEVEL 2 : Identify every name (male/female) based on Mr. / Mrs. title ');

var mrs = names.filter(word => word.startsWith('Mrs.'))

names.forEach(name => {
  if(name.startsWith('Mrs.')){
    console.log(name + " (female)");
  } else {
    console.log(name + " (male)");
  }
})

console.log('LEVEL 3 : Build a function to search array value');

function search_name(keyword){
  var findWord = names.find(word => word.includes(keyword));
  return findWord
}

console.log(search_name('Arsyad'));

console.log('LEVEL 4 : Merge 2 arrays into 1 array and then display all names.');

var names1 = ["Mr. Arsyad", "Mr. Cristian", "Mrs. Dheta"];
var names2 = ["Mr. Furqon", "Mr. Gatot", "Mrs. Manda", "Mr. Yusuf"];

names = names1.concat(names2);
console.log(names)

console.log('LEVEL 5 : Modify names and remove non String array value ');

names = [
  "Mr. Arsyad",
  null,
  undefined,
  "Mr. Cristian",
  24,
  "Mrs. Dheta",
  "Mr. Furqon",
  "Mr. Gatot",
  32,
  "Mrs. Manda",
  7,
  22,
  "Mr. Yusuf"
];

var showString = names.filter(word => typeof word == 'string')
console.log(showString.join(', '))
