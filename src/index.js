import "./style.css";
import postUserScore from "./modules/formSubmit.js";
import renderUserScores from "./modules/renderScore.js";
import getUserScore from "./modules/refresh.js";

const nameInputField = document.querySelector("#name");
const scoreInputField = document.querySelector("#score");
const formSubmitBtn = document.querySelector("#form-submit-btn");
const refreshButton = document.getElementById("refresh-btn");

window.addEventListener("load", () => {
  renderUserScores();
});

formSubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  postUserScore();
  nameInputField.value = "";
  scoreInputField.value = "";
});

refreshButton.addEventListener("click", (e) => {
  e.preventDefault();
  getUserScore();
  renderUserScores();
});
