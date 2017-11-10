const checkCollisions = (x, y, movedRovers) => {
  if (movedRovers.length > 0) {
    for (let i=0; i<movedRovers.length; i++) {
      if (movedRovers[i].position.x === x && movedRovers[i].position.y === y) {
        throw 'collision detected with rover at position ' + i;
      }
    }
  }
};

module.exports = checkCollisions;
