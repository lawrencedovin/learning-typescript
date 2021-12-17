export {};

type NumString = number | string;

const combine = (input1: NumString, input2: NumString, resultConversion: 'as-number' | 'as-text') => {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') result = (+input1) + (+input2);
    else result = input1.toString() + input2.toString();
    return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('78', '45', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine(30, 26, 'as-text');
console.log(combinedNames);