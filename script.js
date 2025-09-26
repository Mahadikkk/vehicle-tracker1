document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("trackerForm");
  const tableBody = document.querySelector("#recordsTable tbody");

  // Load previous records from localStorage
  let records = JSON.parse(localStorage.getItem("carRecords")) || [];
  renderTable();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const date = document.getElementById("date").value;
    const car = document.getElementById("car").value;
    const distance = document.getElementById("distance").value;
    const petrol = document.getElementById("petrol").value;

    if (date && car && distance && petrol) {
      const record = { date, car, distance, petrol };
      records.push(record);

      // Save to localStorage
      localStorage.setItem("carRecords", JSON.stringify(records));
      renderTable();

      form.reset();
    }
  });

  function renderTable() {
    tableBody.innerHTML = "";
    records.forEach(r => {
      const row = `<tr>
        <td>${r.date}</td>
        <td>${r.car}</td>
        <td>${r.distance}</td>
        <td>${r.petrol}</td>
      </tr>`;
      tableBody.innerHTML += row;
    });
  }
});
