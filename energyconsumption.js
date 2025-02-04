// Retrieve stored inputs
const bedroomType = sessionStorage.getItem("bedroomType");
const selectedMonth = sessionStorage.getItem("selectedMonth");
const selectedDate = sessionStorage.getItem("selectedDate");

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Create and apply styles
const style = document.createElement("style");
style.innerHTML = `
    body {
        background: #f9f9f9;
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 20px;
    }
    h1, h2 {
        color: #333;
    }
    #graph-image, #table-image {
        margin-top: 20px;
        width: 80%;
        max-width: 800px;
        border-radius: 10px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
    .image-container {
        margin-top: 20px;
    }
`;
document.head.appendChild(style);

// Display Selected Inputs
document.body.innerHTML = `
    <h1>Energy Consumption Data</h1>
    <h2>${monthNames[selectedMonth - 1]} ${selectedDate}, 2025 - ${bedroomType}-Bedroom</h2>
`;

// **Select Correct Images**
const graphImg = document.createElement("img");
graphImg.src = `${bedroomType}${monthNames[selectedMonth - 1].toLowerCase()}${selectedDate}graph.jpg`;
graphImg.id = "graph-image";
graphImg.alt = "Energy Graph";

const tableImg = document.createElement("img");
tableImg.src = `${bedroomType}${monthNames[selectedMonth - 1].toLowerCase()}${selectedDate}table.jpg`;
tableImg.id = "table-image";
tableImg.alt = "Energy Table";

// Append images
const imageContainer = document.createElement("div");
imageContainer.classList.add("image-container");
imageContainer.appendChild(graphImg);
imageContainer.appendChild(tableImg);

document.body.appendChild(imageContainer);
