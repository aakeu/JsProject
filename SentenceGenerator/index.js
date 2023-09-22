// Define a function called "generateSentence" that takes two parameters: "desc" (a description) and "arr" (an array of items).
function generateSentence(desc, arr) {
    // Initialize a base string with a template literal, including the description and the number of items in the array.
    let baseString = `The ${arr.length} ${desc} are `;

    // Calculate the last index of the array.
    const lastIndex = arr.length - 1;

    // Iterate through the "arr" array to build the sentence.
    for (let i = 0; i < arr.length; i++) {
        // Check if the current item is the last item in the array.
        if (i === lastIndex) {
            // If it's the last item, add it to the base string with a period.
            baseString += arr[i] + ".";
        } else {
            // If it's not the last item, add it to the base string with a comma and space.
            baseString += arr[i] + ", ";
        }
    }

    // Return the complete sentence.
    return baseString;
}

// Call the "generateSentence" function with the description "highest mountains" and an array of mountain names.
const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"]);

// Log the generated sentence to the console.
console.log(sentence);
