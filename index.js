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

};

const mission = (input) => {
  input = input.split('\n');
  const plateauBounds = input[0];
  const rovers = [];

  for (let i=1; i<input.length; i=i+2) {
    rovers.push(createRover(input[i]));
  }
};

const input = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';

const result = mission(input);

console.log(result);
