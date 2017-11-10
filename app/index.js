const cardinals = require('./cardinals');
const createRover = require('./rover');
const processInput = require('./process-input');

const mission = (input) => {
  // input = input.split('\n');
  const plateauBounds = processInput.establishBounds(input);
  const rovers = processInput.createRovers(input);
  const directions = processInput.listDirections(input);

  //iterate over the rovers and each rover's corresponding directions
  for (let j=0; j<directions.length; j++) {
    const currentDirection = directions[j];
    const currentRover = rovers[j];
    //loop through the direction string, moving the rover
    for (let cmd=0; cmd<currentDirection.length; cmd++) {
      const orientation = currentRover.orientation;
      if (currentDirection[cmd] === 'L') {
        //turn the rover left from the cardinal it is currently pointing at
        currentRover.orientation = cardinals[orientation]['L'];
      }
      if (currentDirection[cmd] === 'R') {
        //turn the rover right from the cardinal it is currently pointing at
        currentRover.orientation = cardinals[orientation]['R'];
      }
      if (currentDirection[cmd] === 'M') {
        //move rover forward according to current position
        const x = currentRover.position.x;
        const y = currentRover.position.y;
        currentRover.position = cardinals[orientation]['move'](x, y);
      }
    }
  }
  return rovers;
};

module.exports = mission;

const input = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';

const result = mission(input);

console.log('result: ',result);
