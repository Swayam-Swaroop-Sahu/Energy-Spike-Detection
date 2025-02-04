function loadDataset(month) {
    let filename = '';
    switch (month) {
        case 1:
            filename = 'jan.csv';
            break;
        case 2:
            filename = 'feb.csv';
            break;
        case 3:
            filename = 'mar.csv';
            break;
        case 4:
            filename = 'apr.csv';
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
                if (parseFloat(usage) > 95) {  // Assuming above 80 is a spike
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
            document.body.appendChild(link);
        })
        .catch(error => console.error("Error loading dataset:", error));
}
