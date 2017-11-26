const cardinals = require('./cardinals');
const failures = require('./failures');

const executeDirections = (directions, rover, movedRoversArr) => {
  //deep clone the rover
  const movedRover = JSON.parse(JSON.stringify(rover));
  //improvements - instead of hard coding conditions for 'L', 'R' and 'M', if 'M' ... else all other letters.
  for (let i=0; i<directions.length; i++) {
    const orientation = movedRover.orientation;
    if (directions[i] === 'L') {
      //turn the movedRover left from the cardinal it is currently pointing at
      movedRover.orientation = cardinals[orientation]['L'];
    }
    if (directions[i] === 'R') {
      //turn the movedRover right from the cardinal it is currently pointing at
      movedRover.orientation = cardinals[orientation]['R'];
    }
    if (directions[i] === 'M') {
      //move movedRover forward according to current position
      movedRover.position = cardinals[orientation]['move'](movedRover.position.x, movedRover.position.y);
      failures.checkCollisions(movedRover.position.x, movedRover.position.y, movedRoversArr);
      //improvements - check rover is not out of bounds here; need to pass in additional arg - the plateauBounds object
      //but then this func takes FOUR arguments ... use an object {directions, rover, moverRoversArr, plateauBounds}
    }
  }
  return movedRover;
};

module.exports = executeDirections;
