const createRover = require('./rover');

const establishBounds = (input) => {
  const bounds = {};
  input = input.split('\n')[0].split(' ');
  bounds.x = input[0];
  bounds.y = input[1];
  return bounds;
};

const createRovers = (input) => {
  const rovers = [];
  input = input.split('\n');
  for (let i=1; i<input.length; i=i+2) {
    rovers.push(createRover(input[i]));
  }
  return rovers;
};

const listDirections = (input) => {
  const directions = [];
  input = input.split('\n');
  for (let i=1; i<input.length; i=i+2) {
    directions.push(input[i+1]);
  }
  return directions;
};

module.exports = {
  establishBounds,
  createRovers,
  listDirections,
};
