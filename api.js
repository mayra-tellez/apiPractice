const fetch = require("node-fetch");

// // const assert = require('assert');
// // const readline = require('readline');
// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // });

// // // To run on GUI, take out. For production
// // require('dotenv').config()
// // // const prompt = require('prompt-sync')();

// // const api_key = process.env.SECRET_KEY

// // const options = {
// //     method: 'GET',
// //     headers: {
// //         'X-RapidAPI-Key': api_key, // nothing when on dom
// //         'X-RapidAPI-Host': 'dad-jokes7.p.rapidapi.com'
// //     }
// // };


// // let jokes;

// // const fetchJokes = () => {
// //     fetch('https://dad-jokes7.p.rapidapi.com/dad-jokes/random', options)
// //         .then(response => response.json())
// //         .then(response => console.log(response)) // change this to make it display the jokes
// //         .then(data => jokes = data) // change this to make it display the jokes
// //         .catch(err => console.error(err));
// //     }

// // const newJoke = fetchJokes()

// // //I want to display a joke when the user presses enter
// // const dadJoke = () => {
// //     console.log(newJoke.joke)
// //     // console.log(e)
// //     // let key = e.key;
// //     // if (key === "Enter"){
// //     //  fetchJokes()
// //     // console.log(`${newJoke.joke}`)
        
// //     // }
    
// // }

// // const getPrompt = () =>  {
// //     rl.question('Press Enter for random Dad joke ', () => {
// //       dadJoke();
// //       getPrompt();
// //     });
// //   }

// // rl.on('line', () => {
// //     console.log("Hello");
// //   });



// // // const setup = prompt('Press Enter for random Dad Joke')
// // // dadJoke()

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // To run on GUI, take out. For production
// // require('dotenv').config()
// // const prompt = require('prompt-sync')();

// // const api_key = process.env.SECRET_KEY

// // const options = {
// //     method: 'GET',
// //     headers: {
// //         'X-RapidAPI-Key': api_key, // nothing when on dom
// //         'X-RapidAPI-Host': 'dad-jokes7.p.rapidapi.com'
// //     }
// // };


// let jokes;

// const fetchJokes = () => {
//   fetch('https://randomuser.me/api/?results=1')
//     .then(response => response.json())
//     .then(data => jokes = data.results) // change this to make it display the jokes
//     // .then(() => console.log(jokes))
// }

// fetchJokes();


// //I want to display a joke when the user presses enter
// const dadJoke = () => {
//   console.log("hello")
// }

// const getPrompt = () =>  {
//   rl.question('Press Enter for random Dad joke ', () => {
//     // dadJoke();
//     getPrompt();
//   });
// }

// rl.on('line', () => {
//     console.log("Hello");
// });



// // const setup = prompt('Press Enter for random Dad Joke')
// // dadJoke()

// getPrompt()





// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------


const readline = require('readline')
readline.emitKeypressEvents(process.stdin);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Press Enter for a Random Dad Joke`, 
  process.stdin.on('keypress', (str, key) => {
    userInput = key.name
  
    // console.log("user input:", userInput)
    // console.log("str:", str)
    // console.log("key:", key.name)
  
    if (userInput === "return") {
      console.log("", jokes.joke)
    }
  
    process.exit()
  })
  // readline.close();
);

const options = {
	method: 'GET',
	headers: {
		Accept: "application/json"
	}
};

let userInput = "";
let jokes = {};


const fetchJokes = () => {

	fetch('http://icanhazdadjoke.com', options)
		.then(response => response.json())
		// .then(response => console.log(response)) // change this to make it display the jokes
		.then(data => jokes = data) // change this to make it display the jokes
		.catch(err => console.error(err));
}

fetchJokes();



// const getPrompt = () => {
//   printBoard();

//   rl.question('row: ', (row) => {
//       ticTacToe(row, column);
//       getPrompt();
//   });
// }
