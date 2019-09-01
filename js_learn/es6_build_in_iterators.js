// Map
let map = new Map();
map.set('lucy', 20);
map.set('lily', 21);

// using entries
for(entry of map.entries()){
  // console.log(entry);
}
// using keys
for (key of map.keys()) {
  // console.log(key);
}
// values
for (value of map.values()) {
  // console.log(value);
}

let set = new Set();
set.add('apple');
set.add('google');
set.add('alibaba');

for (entry of set.entries()) {
  // console.log(entry);
}
// using keys
for (key of set.keys()) {
  // console.log(key);
}
// values
for (value of set.values()) {
  // console.log(value);
}

const array = [100, 200, 300];
for (entry of array.entries()) {
  console.log(entry);
}
// using keys
for (key of array.keys()) {
  console.log(key);
}
// values
for (value of array) {
  console.log(value);
}