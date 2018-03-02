// Complete the solution so that it splits the string into pairs of two characters.
//  If the string contains an odd number of characters
//  then it should replace the missing second character of
//  the final pair with an underscore ('_').

function solution(string) {
	var array = string.split("");
	var collector = [];
	var result = [];
	for (var i = 0 ; i < array.length; i = i +2) {
		var pair = [];
		pair.push(array[i], array[i+1])
		collector.push(pair)
	}
	for (var i = 0; i < collector.length; i++) {
	  var pairString = ""
	  pairString = collector[i].join("")
	  result.push(pairString)
	}
	if (result[result.length-1].length%2 !== 0) {
	  result[result.length-1]+= "_"
	}
	return result;
}
