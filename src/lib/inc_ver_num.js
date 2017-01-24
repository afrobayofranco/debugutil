/* Increment Version Number Function */
// Accepts Two Arguments - the current version number, and the change, which is major, minor, or patch
exports.incVerNum = (curVerNum, change) => {
  const verArray = curVerNum.split('.');

  for(let verIndex in verArray) {
    verArray[verIndex] = parseInt(verArray[verIndex]);
  }

  if(change === 'major') {
      verArray[0] += 1;
      verArray[1] = 0;
      verArray[2] = 0;
    } else if(change === 'minor') {
      verArray[1] += 1;
      verArray[2] = 0;
    } else if(change === 'patch') {
      verArray[2] += 1;
    }

    return verArray.join('.');
}
