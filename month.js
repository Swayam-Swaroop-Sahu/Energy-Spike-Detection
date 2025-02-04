// Create and apply styles dynamically
const style = document.createElement("style");
style.innerHTML = `
    body {
        background: linear-gradient(to right, #f4f4f4, #d7e8ff);
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 20px;
    }
    h1 {
        font-size: 36px;
        color: #333;
        margin-bottom: 20px;
    }
    .month-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
        max-width: 600px;
        margin: 0 auto;
    }
    .month-btn {
        background-color: #007bff;
        color: white;
        padding: 15px 20px;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
        text-decoration: none;
        display: inline-block;
        width: 150px;
        text-align: center;
    }
    .month-btn:hover {
        background-color: #0056b3;
        transform: scale(1.05);
    }
`;
document.head.appendChild(style);

// Create header
const header = document.createElement("h1");
header.textContent = "2024";
document.body.appendChild(header);

// Create container for buttons
const container = document.createElement("div");
container.classList.add("month-container");
document.body.appendChild(container);

// List of months and their respective input values
const months = [
    { name: "January", value: "1" },
    { name: "February", value: "2" },
    { name: "March", value: "3" },
    { name: "April", value: "4" },
    { name: "May", value: "5" },
    { name: "June", value: "6" },
    { name: "July", value: "7" },
    { name: "August", value: "8" },
    { name: "September", value: "9" },
    { name: "October", value: "10" },
    { name: "November", value: "11" },
    { name: "December", value: "12" }
];

// Generate buttons dynamically
months.forEach((month) => {
    let btn = document.createElement("a");
    btn.classList.add("month-btn");
    btn.textContent = month.name;
    btn.href = "#";
    btn.onclick = function () {
        sessionStorage.setItem("selectedMonth", month.value); // Store input 2
        window.location.href = "date.html"; // Redirect to date selection
    };
    container.appendChild(btn);
});
