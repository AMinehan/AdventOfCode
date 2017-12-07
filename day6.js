function partOne(arr){
  var total = 0;
  var iSeenTrie = new Trie();
  var currentIndex, distribute;

  while (true){
    iSeenTrie.add(arr, total);

    currentIndex = findLargestIndex(arr);
    distribute = arr[currentIndex];
    arr[currentIndex] = 0;

    for (; distribute > 0; distribute --){
      currentIndex += 1;
      if (currentIndex === arr.length){
        currentIndex = 0;
      }
      arr[currentIndex] += 1;
    }

    total += 1;

    if (iSeenTrie.has(arr)){
      return total;
    }
  }
}

function partTwo(arr){
  var total = 0;
  var currentIndex, distribute;
  var seen = JSON.stringify(arr);

  while (true){

    currentIndex = findLargestIndex(arr);
    distribute = arr[currentIndex];
    arr[currentIndex] = 0;

    for (; distribute > 0; distribute --){
      currentIndex += 1;
      if (currentIndex === arr.length){
        currentIndex = 0;
      }
      arr[currentIndex] += 1;
    }

    total += 1;

    if (seen === JSON.stringify(arr)){
      return total;
    }
  }
}

function findLargestIndex (array){
  var largest = array[0];
  var index = 0
  for (var i = 1; i < array.length; i++){
    if (array[i] > largest){
      index = i;
      largest = array[i];
    }
  }
  return index
}

function Trie(){
  this.root = {};
}

Trie.prototype.add = function(sequence, count){
  var current = this.root;
  for (var i = 0; i < sequence.length; i++){
    if (current.hasOwnProperty(sequence[i])){
      current = current[sequence[i]];
    } else {
      current[sequence[i]] = {};
      current = current[sequence[i]];
    }
  }
  current.end = count;
}

Trie.prototype.has = function(sequence){
  var current = this.root;
  for (var i = 0; i < sequence.length; i++){
    current = current[sequence[i]];
    if (current === undefined){
      return false;
    }
  }
  return current.end;
}


var input = [10, 3, 15, 10, 5, 15, 5, 15, 9, 2, 5, 8, 5, 2, 3, 6];


console.log(partOne(input));
console.log(partTwo(input));
