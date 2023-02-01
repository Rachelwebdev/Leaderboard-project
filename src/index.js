import "./style.css";
import newGame from "./modules/newGame.js";
import postUserScore from "./modules/formSubmit.js";
import renderUserScores from "./modules/renderScore.js";

const formSubmitBtn = document.querySelector("#form-submit-btn");
const refreshButton = document.getElementById("refresh-btn");

window.addEventListener("load", () => {
  renderUserScores();
});

formSubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  postUserScore();
});

refreshButton.addEventListener("click", (e) => {
  e.preventDefault();
  renderUserScores();
});
