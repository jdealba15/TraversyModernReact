let value = null;
let result = value ?? 'Default Value';

console.log(result);

let valueE = '';
let resultE = value || 'Default Value';

console.log(resultE);

//Null is intentional, undefined is unassigned
let other;
console.log(other);

//Optional chaining combined with 'Nullish Coalescing Operator...'.

const user = {
    name: 'Brad',
};

console.log(user.address?.city ?? 'Unknown');