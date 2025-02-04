// Create and apply styles dynamically
const style = document.createElement("style");
style.innerHTML = `
    body {
        background: linear-gradient(to right, #9fedff, #0066ff);
        font-family: Arial, sans-serif;
        text-align: center;
        color: white;
        padding: 20px;
    }
    h1 {
        font-size: 28px;
        margin-bottom: 20px;
    }
    .btn {
        display: block;
        width: 60%;
        margin: 15px auto;
        padding: 20px;
        font-size: 20px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s;
        font-weight: bold;
    }
    .btn:hover {
        transform: scale(1.05);
    }
    .btn-2 {
        background-color: #ffcc00;
        color: #333;
    }
    .btn-4 {
        background-color: #28a745;
        color: white;
    }
    .btn-6 {
        background-color: #dc3545;
        color: white;
    }
`;
document.head.appendChild(style);

// Create main heading
const heading = document.createElement("h1");
heading.textContent = "Select Your Room Type";
document.body.appendChild(heading);

// Function to create buttons
function createButton(className, text, value) {
    const button = document.createElement("button");
    button.classList.add("btn", className);
    button.textContent = text;
    button.onclick = function () {
        sessionStorage.setItem("bedroomType", value); // Store input 1
        window.location.href = "month.html"; // Redirect to month selection
    };
    document.body.appendChild(button);
}

// Add buttons dynamically
createButton("btn-2", "2-Bedroom", "2");
createButton("btn-4", "4-Bedroom", "4");
createButton("btn-6", "6-Bedroom", "6");
