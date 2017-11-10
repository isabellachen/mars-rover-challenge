const mission = require('../app/index');

test('moves rovers into final position', () => {
  expect(mission('5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM').toBe('1 3 N\n5 1 E'));
});
