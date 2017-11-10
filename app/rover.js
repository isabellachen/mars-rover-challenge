const createRover = (startPos) => {
  const x = parseInt(startPos.split(' ')[0]);
  const y = parseInt(startPos.split(' ')[1]);
  const orientation = startPos.split(' ')[2];
  const rover = {
    position: {
      x: x,
      y: y,
    },
    orientation: orientation,
  };
  return rover;
};

module.exports = createRover;
