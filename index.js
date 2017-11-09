const cardinals = {
  N: {
    L: 'W',
    R: 'E',
    move: (x, y)=>{
      return {x:x, y:y+1};
    },
  },
  E: {
    L: 'N',
    R: 'S',
    move: (x, y)=>{
      return {x:x+1, y:y};
    },
  },
  S: {
    L: 'E',
    R: 'W',
    move: (x, y)=>{
      return {x:x, y:y-1};
    },
  },
  W: {
    L: 'S',
    R: 'N',
    move: (x, y)=>{
      return {x:x-1, y:y};
    },
  },
};

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

const mission = (input) => {
  input = input.split('\n');
  const plateauBounds = input[0];
  const rovers = [];
  const directions = [];
  for (let i=1; i<input.length; i=i+2) {
    rovers.push(createRover(input[i]));
    directions.push(input[i+1]);
  }

  //iterate over the rovers and each rover's corresponding directions
  for (let j=0; j<directions.length; j++) {
    //loop through the direction string, moving the rover
    const currentDirection = directions[j];
    const currentRover = rovers[j];
  }
  return rovers;
};

const input = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';

const result = mission(input);

console.log(result);
