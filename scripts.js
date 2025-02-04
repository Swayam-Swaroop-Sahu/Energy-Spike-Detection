// Create the main HTML structure
document.body.style.backgroundColor = "#ffffb0";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "Arial, sans-serif";

// Add the main heading
const mainHeading = document.createElement("h1");
mainHeading.style.color = "#ff0000";
mainHeading.style.padding = "20px";
mainHeading.textContent = "Select Block";
document.body.appendChild(mainHeading);

// Create the main container for the hostels
const container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.gap = "50px";
document.body.appendChild(container);

// Function to create a hostel section
function createHostelSection(title, color, blocks, isMensHostel = false) {
    const section = document.createElement("div");
    const heading = document.createElement("h2");
    heading.style.color = color;
    heading.textContent = title;
    section.appendChild(heading);

    const buttonContainer = document.createElement("div");
    blocks.forEach((block) => {
        const button = document.createElement("button");
        button.style.margin = "5px";
        button.style.padding = "10px 20px";
        button.textContent = block;

        if (isMensHostel && block === "A-Block") {
            button.onclick = () => window.open("bedtype.html", "_blank");
        }

        buttonContainer.appendChild(button);
    });

    section.appendChild(buttonContainer);
    container.appendChild(section);
}

// Ladies Hostels
createHostelSection("Ladies Hostels", "#d63384", [
    "A-Block",
    "B-Block",
    "C-Block",
    "D-Block",
    "E-Block",
    "F-Block",
    "G-Block",
    "H-Block",
    "I-Block",
    "J-Block",
]);

// Mens Hostels
createHostelSection("Mens Hostels", "#0d6efd", [
    "A-Block",
    "B-Block",
    "C-Block",
    "D-Block",
    "E-Block",
    "F-Block",
    "G-Block",
    "H-Block",
    "I-Block",
    "J-Block",
], true);
