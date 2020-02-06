// "Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size
// = 8 and change the program so that it works for any size, outputting a grid
// of the given width and height."
line = ""

for (let x = 0; x < 8; x++) {           // first for loop works on the rows so add \n at the end
    for ( let y = 0; y < 8; y++) {      // inner loop works on columns 
        if ((x + y) % 2 === 0) {        // think of as x & y coordinates of the index? first index is 0 and 0 so modulo 2 ("#"), second index is 1 and 0 so not modulo 2 (" ")
            line += "#"
        } else {
            line += " "
        } 
    }
    line += "\n"
}