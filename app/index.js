const processInput = require('./process-input');
const processOutput = require('./process-output');
const executeDirections = require('./execute-directions');

const runMission = (input) => {
  const plateauBounds = processInput.establishBounds(input);
  const rovers = processInput.createRovers(input);
  const directions = processInput.listDirections(input);
  const movedRovers = [];
  //iterate over the rovers and each rover's corresponding directions
  for (let i=0; i<directions.length; i++) {
    movedRovers.push(executeDirections(directions[i], rovers[i], movedRovers));
  }

  for (let j=0; j<movedRovers.length; j++) {
    if ((movedRovers[j].position.x > plateauBounds.x || movedRovers[j].position.x < 0)
        ||(movedRovers[j].position.y > plateauBounds.y || movedRovers[j].position.x < 0)) {
      throw 'rover at position ' + j + ' is out of bounds.' ;
    }
  }

  const result = processOutput(movedRovers);
  return result;
};

module.exports = runMission;
