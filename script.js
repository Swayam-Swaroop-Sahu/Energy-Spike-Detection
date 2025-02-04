function loadDataset(month) {
    let filename = '';
    switch (month) {
        case 1:
            filename = 'datasets/jan.csv';
            break;
        case 2:
            filename = 'datasets/feb.csv';
            break;
        case 3:
            filename = 'datasets/mar.csv';
            break;
        case 4:
            filename = 'datasets/apr.csv';
            break;
        default:
            console.error('Invalid month selection');
            return;
    }

    fetch(filename)
        .then(response => response.text())
        .then(data => {
            let rows = data.split("\n").map(row => row.split(","));
            let table = document.getElementById("spikeTable");

            // Clear previous results
            table.innerHTML = `<tr>
                <th>Day</th>
                <th>Room ID</th>
                <th>Time Interval</th>
                <th>Energy Usage</th>
            </tr>`;

            let anomalyData = [];

            // Process dataset (skip header row)
            for (let i = 1; i < rows.length; i++) {
                let [day, room_id, time_interval, usage] = rows[i];
                if (parseFloat(usage) > 80) {  // Assuming above 80 is a spike
                    let tr = document.createElement("tr");
                    tr.innerHTML = `<td>${day}</td>
                                    <td>${room_id}</td>
                                    <td>${time_interval}</td>
                                    <td>${usage}</td>`;
                    table.appendChild(tr);
                    anomalyData.push([day, room_id, time_interval, usage]);
                }
            }

            // Generate anomaly CSV file
            let csvContent = "data:text/csv;charset=utf-8,Day,Room ID,Time Interval,Energy Usage\n" +
                anomalyData.map(e => e.join(",")).join("\n");
            let encodedUri = encodeURI(csvContent);
            let link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", `anomalies_${filename.split("/")[1]}`);
            link.innerHTML = "Download Anomalies CSV";
            link.style.display = "block";
            link.style.marginTop = "10px";
            link.style.textDecoration = "none";
            link.style.padding = "10px";
            link.style.backgroundColor = "#28a745";
            link.style.color = "white";
            link.style.borderRadius = "5px";
            document.body.appendChild(link);
        })
        .catch(error => console.error("Error loading dataset:", error));
}

// Add some styling to the table
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("spikeTable").style.width = "80%";
    document.getElementById("spikeTable").style.margin = "20px auto";
    document.getElementById("spikeTable").style.borderCollapse = "collapse";
    document.querySelectorAll("#spikeTable th, #spikeTable td").forEach(cell => {
        cell.style.border = "1px solid #ddd";
        cell.style.padding = "10px";
        cell.style.textAlign = "center";
    });
    document.querySelectorAll("#spikeTable th").forEach(header => {
        header.style.backgroundColor = "#007bff";
        header.style.color = "white";
    });
});
