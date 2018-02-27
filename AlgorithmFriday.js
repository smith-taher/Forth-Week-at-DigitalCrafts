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
  
// // function steamrollArray(arr) {
// //   var str = arr.join('');
// //   str = str.slice(4, 1);
// //   console.log(str);
// //   var newarr;


// //   return newarr;
// }
//   steamrollArray([1, [2], [3, [[4]]]]);


describe("steamRollArray", function() {
  it("Collapses nested arrays into a single array", function() {
    expect(steamRollerArray([1, [2], [3, [[4]]]])).to.equal([1,2,3,4]);
  });
});

var steamRollArray = function(array) {
  var flattened = [];
  array.forEach(function(element) {
    if(Array.isArray(element)) {
      flattened = flattened.concat(steamRollArray(element));
      return flattened;
    } else {
      flattened.push(element);;
    }
  });
  return array;
};
expect(steamRollArray([])).to.equal([]);
expect(steamRollArray([3])).to.deep.equal([]);
expect(steamRollArray(1,2,[3])).to.deep.equal(1,2,3);
expect(steamRollArray([1])).to.deep.equal(1);

