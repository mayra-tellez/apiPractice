const fetch = require("node-fetch");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const options = {
	method: 'GET',
	headers: {
		Accept: "application/json"
	}
};

let jokes = {};

const fetchJokes = () => {

	fetch('http://icanhazdadjoke.com', options)
		.then(response => response.json())
		.then(data => jokes = data)
		.catch(err => console.error(err));
}


const getPrompt = () => {

  rl.question('Press Enter for a Random Dad Joke', (key) => {
    // if (key === "j") {
      console.log("-->", jokes.joke)
    // }
      // console.log("key:", key)
      // console.log("-->", jokes.joke)
      getPrompt();
      fetchJokes();
  });
}

fetchJokes();
getPrompt();