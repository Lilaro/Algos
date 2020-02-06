// Take in an array of 2 numbers or just start by declaring an array of 2 numbers
//  starting at 0
// Take in a length?
// Assign the two array elements to variables a & b
// Add the two elements and push that sum onto the array
// Reassign a & b variables to index 1 & 2
// Add variables a & b and push that sum onto the array etc...
// Return the array



function Fibonacci(len) {
    let arr = [0, 1]
    let a = arr[0]
    let b = arr[1]

    for (let i = 0; i <= len; i++) {
       let result = a + b 
        arr.push(result)
        a = b
        b = result
    }

    return arr
}