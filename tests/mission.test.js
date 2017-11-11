const runMission = require('../app/index');
const processInput = require('../app/process-input');
const processOutput = require('../app/process-output');
const executeDirections = require('../app/execute-directions');
const failures = require('../app/failures');
const rover = require('../app/rover');

test('test input matches expected output', () => {
  expect(runMission('5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM')).toBe('1 3 N\n5 1 E\n');
});

describe('functions to process string input', () => {
  test('establishes bounds with with keys x, y', () => {
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

describe('checks for failures like collisions and out of bounds', () => {
  test('checks for collisions', () => {
    const runCollision = () => {
      failures.checkCollisions(1, 3, [{position:{x:1, y:3}}]);
    };
    expect(runCollision).toThrow();
  });

  test('check bounds returns false when out of bounds', () => {
    expect(failures.checkBounds({position:{x:5, y:6}}, {x:5, y:5})).toBe(false);
  });

  test('check bounds returns true when rover is in bounds', () => {
    expect(failures.checkBounds({position:{x:3, y:3}}, {x:5, y:5})).toBe(true);
  });
});

describe('execute directions and outputs the final position of the rover', () => {
  test('should not modify original rover', () => {
    const rover = {position: { x: 1, y: 2 }, orientation: 'N'};
    executeDirections('LMLMLMLMM', rover, []);
    expect(rover).toEqual(rover);
  });

  test('turns rover right and left', () => {
    const rover = {position: { x: 1, y: 2 }, orientation: 'N'};
    expect(executeDirections('L', rover, [])).toEqual({position: { x: 1, y: 2 }, orientation: 'W'});
    expect(executeDirections('R', rover, [])).toEqual({position: { x: 1, y: 2 }, orientation: 'E'});
  });

  test('moves rover forward according to current orientation', () => {
    const rover = {position: { x: 1, y: 2 }, orientation: 'N'};
    expect(executeDirections('M', rover, [])).toEqual({position: { x: 1, y: 3 }, orientation: 'N'});
  });
});
