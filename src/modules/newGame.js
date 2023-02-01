import { method } from "lodash";

const newGame = async () => {
  const response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games",
    {
      method: "POST",
      body: JSON.stringify({
        name: "My cool new game",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const result = await response.json();
  console.log(result);
};

export default newGame;
