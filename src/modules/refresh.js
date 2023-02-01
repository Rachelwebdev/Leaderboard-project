const getUserScore = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QTfdB0h9KWr1chJOORpg/scores/',
  );
  const getScore = await response.json();
  return getScore.result;
};

export default getUserScore;
