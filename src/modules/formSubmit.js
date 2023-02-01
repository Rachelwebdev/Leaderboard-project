const postUserScore = async () => {
  const nameInputValue = document.querySelector("#name").value;
  const scoreInputValue = document.querySelector("#score").value;
  if (!nameInputValue && !scoreInputValue) {
    alert("Please fill all input fields");
    return;
  }
  const response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QTfdB0h9KWr1chJOORpg/scores/",
    {
      method: "POST",
      body: JSON.stringify({
        user: document.querySelector("#name").value,
        score: document.querySelector("#score").value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const scoreDataPosted = await response.json();
  return scoreDataPosted;
};

export default postUserScore;
