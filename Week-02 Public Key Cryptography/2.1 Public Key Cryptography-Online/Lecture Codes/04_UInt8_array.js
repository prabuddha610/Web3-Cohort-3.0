// Create a new Uint8Array to represent an array of unsigned 8-bit integers (bytes)
// Each value must be between 0 and 255 (inclusive), as it represents a single byte
// Binary representations:
//   0   -> 00000000
// 255   -> 11111111
// 127   -> 01111111
// 128   -> 10000000
let bytes = new Uint8Array([0, 255, 127, 128]);

// Log the Uint8Array to the console
// It displays the array in its decimal representation: [0, 255, 127, 128]
console.log(bytes);
