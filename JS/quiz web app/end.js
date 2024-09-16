const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORE = 5;
console.log("highScores");

username.addEventListener("keyup", () => {
  console.log(username.value);
  saveScoreBtn.disabled = !username.value;
  // if there's nothing in the username, the save score button will be disabled
})

saveHighScore = (e) => {
  console.log("clicked the saved button");
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
  }
  highScores.push(score);
  highScores.sort((a,b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("index.html");
  console.log(highScores);
}