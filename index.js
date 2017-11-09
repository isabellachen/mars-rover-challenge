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
        //e.g. if rover orientation is 'N', the rover's position y property should be y+1
        const x = currentRover.position.x;
        const y = currentRover.position.y;
        currentRover.position = cardinals[orientation]['move'](x, y);
      }
    }
  }
  return rovers;
};

const input = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';

const result = mission(input);

console.log(result);
