// Import the built-in 'crypto' module in Node.js, which provides cryptographic functionalities
const crypto = require('crypto');

// Define the input string that needs to be hashed
const input = "100xdevs"; // The string to be hashed. Hashing is a one-way process to convert data into a fixed-length representation.

// Create a SHA-256 hash object, update it with the input string, and generate the hash in hexadecimal format
const hash = crypto.createHash('sha256') // Create a hash object using the SHA-256 algorithm. SHA-256 is part of the secure SHA-2 family.
                   .update(input)        // Add the input data ("100xdevs") to the hash object for processing.
                   .digest('hex');       // Finalize the hash computation and output the result in hexadecimal format. 
                                         // The output is a fixed-length, unique representation of the input string.

// Print the resulting hash to the console
console.log(hash); // Outputs the generated SHA-256 hash as a 64-character hexadecimal string.
