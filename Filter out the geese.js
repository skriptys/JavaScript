function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  var result = [];
  
  var count = 0;
   
  for (var i = 0; i < birds.length; i++){
  
  for (var j = 0; j < geese.length; j++){
  
  if (birds [i] == geese [j]) {
    count++;
  }
  }
  
  if (count == 0) {
  
  result.push (birds[i]);
  }
  count = 0;
  } 
  
  return result;
};
