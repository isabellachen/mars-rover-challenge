const processInput = require('./process-input');
const processOutput = require('./process-output');
const executeDirections = require('./execute-directions');

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
