function partOne(num){

}

function partTwo(num){
  var lines = [[11,23,25,26],[26,54,57,59],[59,122,133,142,147],[147,304,330,351,362]];
  var total = 362;
  var newLine;

  while(true){
    newLine = [total];
    total += lines[3][lines[3].length - 2] + lines[0][0] + lines[0][1];
    if (total > num){
      return total;
    }
    newLine.push(total);
    for (var i = 0; i < lines[0].length; i++){
      for (var j = 0; j < 3; j++){
        if (lines[0].length > j + i){
          total += lines[0][i+ j];
        }
      }
      if (total > num){
        return total;
      }
      newLine.push(total);

    }
    lines.shift();
    lines.push(newLine);
  }
}

var input = 368078

console.log(partOne(input));
console.log(partTwo(input));