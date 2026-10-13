let score = 0;

// Question 1
let answer1 = prompt("1. What is the capital of France? (a) London (b) Paris");
if (answer1 === "a" || answer1 === "A") {
  console.log("Incorrect. The answer is Paris.");
} else if (answer1 === "b" || answer1 === "B") {
  console.log("Correct!");
  score++;
} else {
  console.log("Invalid input. The answer is Paris.");
}

// Question 2
let answer2 = prompt(
  "2. Which planet is known as the Red Planet? (a) Venus (b) Mars",
);
if (answer2 === "a" || answer2 === "A") {
  console.log("Incorrect. The answer is Mars.");
} else if (answer2 === "b" || answer2 === "B") {
  console.log("Correct!");
  score++;
} else {
  console.log("Invalid input. The answer is Mars.");
}

// Question 3
let answer3 = prompt("3. What is 5 + 3? (a) 7 (b) 8");
if (answer3 === "a" || answer3 === "A") {
  console.log("Incorrect. The answer is 8.");
} else if (answer3 === "b" || answer3 === "B") {
  console.log("Correct!");
  score++;
} else {
  console.log("Invalid input. The answer is 8.");
}

// Final results
if (score === 0) {
  console.log("You answered 0 out of 3 correctly. Keep practicing!");
} else if (score === 3) {
  console.log(
    "Perfect score! You answered all 3 questions correctly. Amazing!",
  );
} else {
  console.log("You answered " + score + " out of 3 correctly. Good effort!");
}
