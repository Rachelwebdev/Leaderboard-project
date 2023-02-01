import "./style.css";
import newGame from "./modules/newGame.js";
import getUserScore from "./modules/formSubmit.js";

const formSubmitBtn = document.querySelector("#form-submit-btn");

newGame();

formSubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  getUserScore();
});
