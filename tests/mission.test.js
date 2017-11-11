const runMission = require('../app/index');
const cardinals = require('../app/cardinals');
const processInput = require('../app/process-input');
const processOutput = require('../app/process-output');
const createRover = require('../app/rover');

test('test input matches expected output', () => {
  expect(runMission('5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM')).toBe('1 3 N\n5 1 E\n');
});
