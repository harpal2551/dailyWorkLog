let totalMinutes = 0;

function getMinutes(time) {
  let [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function addWork() {
  let text = document.getElementById("workText").value.trim();
  let startTime = document.getElementById("startTime").value;
  let endTime = document.getElementById("endTime").value;

  if (!text || !startTime || !endTime) {
    alert("Please fill all fields!");
    return;
  }

  let start = getMinutes(startTime);
  let end = getMinutes(endTime);

  let diff = end - start;

  if (diff < 0) {
    alert("End time must be after start time");
    return;
  }

  totalMinutes += diff;

  let hrs = Math.floor(diff / 60);
  let mins = diff % 60;

  let displayTime = hrs > 0
    ? `${hrs} hrs ${mins} mins`
    : `${mins} mins`;

  let output = document.getElementById("output");

  output.textContent += `${text} → ${displayTime}\n`;

  document.getElementById("total").innerText =
    totalMinutes >= 60
      ? `Total: ${Math.floor(totalMinutes / 60)} hrs ${totalMinutes % 60} mins`
      : `Total: ${totalMinutes} mins`;

  // clear inputs
  document.getElementById("workText").value = "";
  document.getElementById("startTime").value = "";
  document.getElementById("endTime").value = "";

  // 👇 auto scroll bottom
  output.scrollTop = output.scrollHeight;
}

function clearAll() {
  document.getElementById("workText").value = "";
  document.getElementById("startTime").value = "";
  document.getElementById("endTime").value = "";
}

function deleteAll() {
  document.getElementById("output").textContent = "";
  totalMinutes = 0;
  document.getElementById("total").innerText = "Total: 0 mins";
}