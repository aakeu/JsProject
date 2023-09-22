// Define an array of image file paths
const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
];

// Get a reference to the container element by its ID
const container = document.getElementById("container");

// Define a function to render images inside the container
function renderImage() {
    // Initialize an empty string to store the image elements as HTML
    let imgsDOM = "";

    // Iterate through the array of image paths
    for (let i = 0; i < imgs.length; i++) {
        // Create an HTML string for each image element
        imgsDOM += `
            <img 
                alt="Employee in the company" 
                class="team-img" 
                src="${imgs[i]}"
            />
        `;
    }

    // Set the HTML content of the container to the generated image elements
    container.innerHTML = imgsDOM;
}

// Call the "renderImage" function to render the images
renderImage();
