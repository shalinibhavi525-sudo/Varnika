const canvas = document.getElementById("artCanvas");
const ctx = canvas.getContext("2d");
function generatePattern() {
 const theme = document.getElementById("theme").value;
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 const colors = {
 warli: ["#4b2e05", "#f5e6ca", "#a67c52"],
 phulkari: ["#ffb6c1", "#fdd835", "#9c27b0"],
 madhubani: ["#ff7043", "#8bc34a", "#e91e63"]
 }[theme];
 for (let i = 0; i < 50; i++) {
 ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
 const x = Math.random() * canvas.width;
 const y = Math.random() * canvas.height;
 const r = Math.random() * 40;
 ctx.beginPath();
 if (theme === "warli") {
 ctx.moveTo(x, y);
 ctx.lineTo(x + r, y + r);
 ctx.lineTo(x - r, y + r);
 ctx.closePath();
 ctx.fill();
 } else if (theme === "phulkari") {
 ctx.arc(x, y, r, 0, Math.PI * 2);
 ctx.fill();
 } else {
 ctx.fillRect(x, y, r, r);
 }
 }
}
function downloadCanvas() {
 const link = document.createElement("a");
 link.download = "Varnika_Pattern.png";
 link.href = canvas.toDataURL();
 link.click();
     }
