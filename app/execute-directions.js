const cardinals = require('./cardinals');

const executeDirections = (directions, rover) => {
  //deep clone the rover
  const movedRover = JSON.parse(JSON.stringify(rover));
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
      const x = movedRover.position.x;
      const y = movedRover.position.y;
      movedRover.position = cardinals[orientation]['move'](x, y);
    }
  }
  return movedRover;
};

module.exports = executeDirections;
