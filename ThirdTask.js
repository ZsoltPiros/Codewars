// Given an array, find the int that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  var len = A.length;
    var A_sort = A.slice().sort();

    var count = {};

    A_sort.forEach(function(i) {
        count[i] = (count[i] || 0) + 1;
    });
    for (var key in count) {
        if (count.hasOwnProperty(key)) {

            if (count[key] % 2 !== 0) {
                return Number(key);
            }
        }
    }
}
console.log(findOdd([1, 1, 9, 2]));
