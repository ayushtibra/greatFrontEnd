//https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/flatten

const FlattenArray = (arr) => {
    const result = arr.reduce((acc, curr) => {
        if(Array.isArray(curr)){
            acc.push(...FlattenArray(curr));
        } else {
            acc.push(curr);
        }
        return acc;
    },[])

    return result;
}

// or ------------------------------------------------------------------------------------------------

// const FlattenArray = (arr) => {
//     return arr.reduce(
//         (acc, curr) => acc.concat(
//           Array.isArray(curr) ?
//           FlattenArray(curr) : curr),
//         [],
//       );
// }

// or ------------------------------------------------------------------------------------------------

// function flattenArray(arr) {
//     const result = [];
//     arr.forEach(item => {
//         if (Array.isArray(item)) {
//             result.push(...flattenArray(item)); // recursively flatten inner arrays
//         } else {
//             result.push(item);
//         }
//     });
//     return result;
// }

// const nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
// const flattened = flattenArray(nestedArray);
// console.log(flattened); // [1, 2, 3, 4, 5, 6, 7]


const arr = [1,2,3,4, [5,6,7,8, [9,10,[11],12]]];
const result = FlattenArray(arr);
console.log(result); 