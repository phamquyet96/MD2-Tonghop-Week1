var numbers = [0, 2, 3, 5, 7, 9, 10];
function LackNumberinArray(inputArr) {
    var NotFindNumbers = [];
    for (var i = 0; i < 15; i++) {
        if (inputArr.indexOf(i) === -1) {
            NotFindNumbers.push(i);
        }
    }
    return NotFindNumbers;
}
var output = LackNumberinArray(numbers);
console.log(output);
