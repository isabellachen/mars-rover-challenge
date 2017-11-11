const getLocationValues = (startPos) => {
  const locationValues = {};
  locationValues.x = parseInt(startPos.split(' ')[0]);
  locationValues.y = parseInt(startPos.split(' ')[1]);
  locationValues.orientation = startPos.split(' ')[2];
  return locationValues;
};

const createRover = (startPos) => {  
  const locationValues = getLocationValues(startPos);
  const rover = {
    position: {
      x: locationValues.x,
      y: locationValues.y,
    },
    orientation: locationValues.orientation,
  };

  return rover;
};

module.exports = {
  getLocationValues,
  createRover
};
