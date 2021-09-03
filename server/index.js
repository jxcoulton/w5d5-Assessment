const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
	const compliments = [
		"Gee, you're a smart cookie!",
		"Cool shirt!",
		"Your Javascript skills are stellar.",
	];

	// choose random compliment
	let randomIndex = Math.floor(Math.random() * compliments.length);
	let randomCompliment = compliments[randomIndex];

	res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
	const fortune = [
		"You are going to do great things!",
		"Good job!",
		"You will gain much admiration.",
		"You are stronger then you think.",
		"Dont let anything bring you down.",
	];

	let randomChoice = Math.floor(Math.random() * fortune.length);
	let randomFortune = fortune[randomChoice];

	res.status(200).send(randomFortune);
});

app.get('/api/response', (req,res) => {
  let advice = ["If you get stuck on an error, console.log down your code to find where your response isnt what it is supposed to be."]
  res.status(200).send(advice)
});

app.get('/api/response2', (req,res) => {
  let joke = ["I was wondering why the frisbee was getting bigger, then it hit me."]
  res.status(200).send(joke)
});
app.get('/api/response3', (req,res) => {
  let encourage = ["Your harshest critic is always going to be yourself. Don't ignore that critic but don't give it more attention than it deserves"]
  res.status(200).send(encourage)
});

app.listen(4000, () => console.log("Server running on 4000"));
