const cardinals = require('./cardinals');
const processInput = require('./process-input');
const processOutput = require('./process-output');

const executeDirections = (directions, rover) => {
  for (let i=0; i<directions.length; i++) {
    const orientation = rover.orientation;
    if (directions[i] === 'L') {
      //turn the rover left from the cardinal it is currently pointing at
      rover.orientation = cardinals[orientation]['L'];
    }
    if (directions[i] === 'R') {
      //turn the rover right from the cardinal it is currently pointing at
      rover.orientation = cardinals[orientation]['R'];
    }
    if (directions[i] === 'M') {
      //move rover forward according to current position
      const x = rover.position.x;
      const y = rover.position.y;
      rover.position = cardinals[orientation]['move'](x, y);
    }
  }
  return rover;
};

const runMission = (input) => {
  const plateauBounds = processInput.establishBounds(input);
  const rovers = processInput.createRovers(input);
  const directions = processInput.listDirections(input);
  const movedRovers = [];
  //iterate over the rovers and each rover's corresponding directions
  for (let j=0; j<directions.length; j++) {
    movedRovers.push(executeDirections(directions[j], rovers[j]));
  }
  const result = processOutput(movedRovers);
  return result;
};

module.exports = runMission;

const input = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';

const result = runMission(input);

console.log(result);
