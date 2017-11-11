const runMission = require('../app/index');
const cardinals = require('../app/cardinals');
const processInput = require('../app/process-input');
const processOutput = require('../app/process-output');
const rover = require('../app/rover');

test('test input matches expected output', () => {
  expect(runMission('5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM')).toBe('1 3 N\n5 1 E\n');
});

describe('functions to process string input', () => {
  test('establishing bounds with bounds object with keys x, y', () => {
    expect(processInput.establishBounds('5 5\n1 2 N\nLMLMLMLMM')).toEqual({'x': 5, 'y': 5});
  });

  test('outputs an array with the correct number of rovers', () => {
    expect(processInput.createRovers('5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM')).toHaveLength(2);
  });

  test('outputs an array with the correct number of direction sets', () => {
    expect(processInput.createRovers('5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM')).toHaveLength(2);
  });
});

describe('create rover object from input string', () => {
  test('extracting coordinates as integers and orientation from input', () => {
    expect(rover.getLocationValues('1 2 N')).toEqual({'x': 1, 'y': 2, 'orientation': 'N'});
  });

  test('creates rover object with nested position object and orientation', () => {
    expect(rover.createRover('1 2 N')).toEqual({position: {'x': 1, 'y': 2}, 'orientation': 'N'});
  });
});
