import GameSavingLoader from '../gamesaveload';

test('GameSavingLoader should work with promise and async/await', async () => {
  const data = await GameSavingLoader.load();
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Save Point',
      level: 14,
      points: 6000,
    },
  };
  await expect(data).toEqual(expected);
});