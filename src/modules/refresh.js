const getUserScore = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FhyouDxphP2Kp8D4e3Jj/scores/',
  );
  const getScore = await response.json();
  return getScore.result;
};

export default getUserScore;
