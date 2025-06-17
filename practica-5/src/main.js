const users = [
  { id: 1, name: "Ana", age: 28, active: true },
  { id: 2, name: "Luis", age: 34, active: false },
  { id: 3, name: "Carlos", age: 22, active: true },
  { id: 4, name: "Laura", age: 19, active: true },
  { id: 5, name: "Marta", age: 40, active: false },
];

// get an array of all usernames
const userNames = users.map((element) => element.name);
// console.log(userNames);

// filter all active users
const userActive = users.filter((element) => element.active);
// console.log(userActive);

// calculates the average age of all users
const averageAge =
  users.reduce(
    (accumulator, currentValue) => accumulator + currentValue.age,
    0
  ) / users.length;

// console.log(averageAge);

// search for the user with id 3
const userId3 = users.find((element) => element.id === 3);
// console.log(userId3);

// check if any of the users is under 21
const isUnder21 = users.some((element) => element.age < 21);
// console.log(isUnder21);

// order from youngest to oldest users
const youngToOld = users.sort((a, b) => a.age - b.age);
// console.log(youngToOld);

// create an array of active users including name and age
const activeReduced = users
  .filter((element) => element.active)
  .map((element) => ({ name: element.name, age: element.age }));

// console.log(activeReduced);

// add a new user without changing the original array
const newUser = { id: 6, name: "Pedro", age: 180, active: false };
//let newArray = [...users, newUser]; // -> copia el array pero no los objetos, estos siguen siendo ref del original
// newArray = newArray.map((elemento) => (elemento.name = "María"));

let newArray = structuredClone(users);
newArray.push(newUser);

// console.log(newArray);
// console.log(users);

// update the user with id 2 to be active

let updatedUser = newArray.find((element) => element.id === 2);
updatedUser.active = true;

// console.log(updatedUser);
// console.log(newArray);

// remove the user with id 5
newArray.splice(
  newArray.findIndex((element) => element.id === 5),
  1
);

// newArray = newArray.filter((element) => element.id !== 5);

// console.log(newArray);

// group users in two separate arrays, one for active users and other one for inactive users
// let activeUsers = newArray.filter((user) => user.active);
// let inactiveUsers = newArray.filter((user) => !user.active);

// let userStatus = { active: activeUsers, inactive: inactiveUsers };
// console.log(userStatus);

// let userStatusReturns = Object.groupBy(newArray, ({ active }) =>
//   active ? "activeUsers" : "inactiveUsers"
// );

// console.log(userStatusReturns);

const groupUsers = newArray.reduce(
  (acc, curr) => {
    if (curr.active) {
      acc.active.push(curr);
    } else {
      acc.inactive.push(curr);
    }

    return acc;
  },
  { active: [], inactive: [] }
);

// console.log(groupUsers);

// PETICIONES HTTP

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("server answer:", data);
//   })
//   .catch((error) => {
//     console.error("request error", error);
//   });

// AYSNC AWAIT

// async function getAllPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getAllPosts();

// Fake syncronous request

// console.log("Start");

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", false);
// xhr.send();

// if (xhr.status === 200) {
//   const data = JSON.parse(xhr.responseText);
//   console.log("received data", data);
// }

// console.log("End");

async function getAPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/slowpoke");
    console.log(response);

    if (!response.ok) {
      throw new Error("error");
    }

    const data = await response.json();
    console.log(data);

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getAPokemon();
