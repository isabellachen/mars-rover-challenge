const processInput = require('./process-input');
const processOutput = require('./process-output');
const executeDirections = require('./execute-directions');
const failures = require('./failures');

const runMission = (input) => {
  const plateauBounds = processInput.establishBounds(input);
  const rovers = processInput.createRovers(input);
  const directions = processInput.listDirections(input);
  const movedRoversArr = [];
  //iterate over the rovers and each rover's corresponding directions
  for (let i=0; i<directions.length; i++) {
    movedRoversArr.push(executeDirections(directions[i], rovers[i], movedRoversArr));
  }
  for (let j=0; j<movedRoversArr.length; j++) {
    const inBounds = failures.checkBounds(movedRoversArr[j], plateauBounds);
    if (!inBounds) throw 'rover at position ' + j + ' is out of bounds.';
  }

  const result = processOutput(movedRoversArr);
  return result;
};

module.exports = runMission;
