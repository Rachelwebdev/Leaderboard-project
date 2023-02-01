const getUserScore = async () => {
  const response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QTfdB0h9KWr1chJOORpg/scores/"
  );
  const data = await response.json();
  console.log(data);
};

export default getUserScore;