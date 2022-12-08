let numbers: number[] = [0,2,3,5,7,9,10];

function LackNumberinArray(inputArr){
    let NotFindNumbers:number[]= [];
    for (let i=0;i<10;i++){
        if(inputArr.indexOf(i)===-1){
            NotFindNumbers.push(i);
        }
    }
    return NotFindNumbers;
}
let output= LackNumberinArray(numbers);

console.log(output);

