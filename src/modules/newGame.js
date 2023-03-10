const newGame = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'My cool new game',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const resultId = await response.json();
  return resultId;
};

export default newGame;
