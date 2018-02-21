// var nums = [];

// var sumNumbers = function(numbers) {
//     // var sum = 0;
//     // for (var i = 0; i < nums.length; i++) {
//     //     sum += sum(nums[i]);
//     // }
//     // return sum;
//     // console.log(sum);
//     return numbers.reduce(sumNumbers(a,b) {
//         return a + b
//     });
// };

var sum = [].reduce(sumNumbers, 0);
function sumNumbers(a, b, c) {
    return a + b + c;
}
console.log(sum);