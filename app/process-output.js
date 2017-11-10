const processOutput = (rovers) => {
  let resultString = '';
  rovers.forEach(rover => {
    resultString += `${rover.position.x} ${rover.position.y} ${rover.orientation}\n`;
  });
  return resultString;
};

module.exports = processOutput;
