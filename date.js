// Read inputs from sessionStorage
const bedroomType = sessionStorage.getItem("bedroomType");
const selectedMonth = sessionStorage.getItem("selectedMonth");

// Days in each month (Leap year check for February)
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Adjust February for leap year
const year = 2025;
if (year % 4 === 0) {
    daysInMonth[1] = 29;
}

// Create and apply styles
const style = document.createElement("style");
style.innerHTML = `
    body {
        background: #f9f9f9;
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 20px;
    }
    h1 {
        color: #333;
        font-size: 32px;
    }
    #month-image {
        margin-top: 20px;
        width: 600px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .dates {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 10px;
        max-width: 500px;
        margin: 20px auto;
    }
    .date {
        padding: 10px;
        background: #007bff;
        color: white;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
    }
`;
document.head.appendChild(style);

// Display header
document.body.innerHTML = `<h1>${monthNames[selectedMonth - 1]} (${bedroomType}-Bedroom)</h1>`;

// **Select Correct Image**
const img = document.createElement("img");
img.src = `${monthNames[selectedMonth - 1].toLowerCase()}_${bedroomType}.jpg`; // Dynamically choose image
img.id = "month-image";
document.body.appendChild(img);

// Display dates
const dateContainer = document.createElement("div");
dateContainer.classList.add("dates");
document.body.appendChild(dateContainer);

for (let i = 1; i <= daysInMonth[selectedMonth - 1]; i++) {
    let dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    dateDiv.textContent = i;
    dateDiv.onclick = function () {
        sessionStorage.setItem("selectedDate", i); // Store selected date
        window.location.href = "energyconsumption.html"; // Redirect to next page
    };
    dateContainer.appendChild(dateDiv);
}
