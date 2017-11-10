const createRover = require('./rover');

const processInput = (input) => {
  const output = {};
  input = input.split('\n');
  output.plateauBounds = input[0];
  output.rovers = [];
  output.directions = [];
  for (let i=1; i<input.length; i=i+2) {
    output.rovers.push(createRover(input[i]));
    output.directions.push(input[i+1]);
  }
  return output;
};

const output = processInput('5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM')
console.log(output);

module.exports = processInput;
