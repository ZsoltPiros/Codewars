// An isogram is a word that has no repeating letters,
//  consecutive or non-consecutive. Implement a function that
//   determines whether a string that contains only letters is an isogram.
//    Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  var strK = str.toLowerCase();
    for(var i = 0;i<strK.length;i++){
      for(var j = i+1;j<strK.length;j++){
      if(strK[i]===strK[j]) return false;
      }
    }
  return true;
}
