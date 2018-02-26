// Array Steamroller
// Flatten a nested array. You must account for varying levels of nesting.
// function steamrollArray(arr) {
//   // I'm a steamroller, baby
//   return arr;
// }
// steamrollArray([1, [2], [3, [[4]]]])

// function steamrollArray(arr) {
//     return arr.reduce(function (flat, toFlatten) {
//       return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
//     }, []);
//   }
//   steamrollArray([1, [2], [3, [[4]]]]);
  
function steamrollArray(arr) {
  var str = arr.join('');
  str = str.slice(4, 1);
  console.log(str);
  var newarr;


  return newarr;
}
  steamrollArray([1, [2], [3, [[4]]]]);