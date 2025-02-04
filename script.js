function loadDataset(filename) {
    fetch(`datasets/${filename}`)
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
                }
            }
        })
        .catch(error => console.error("Error loading dataset:", error));
}
