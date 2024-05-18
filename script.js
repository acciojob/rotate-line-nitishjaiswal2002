//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  // Get the line element
  const line = document.getElementById('line');
  
  // Initial angle
  let angle = 0;
  
  // Function to update rotation
  function rotateLine() {
    // Increment angle by 2 degrees
    angle += 2;
    // Apply rotation to the line
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  }
  
  // Call rotateLine function every 20 milliseconds
  setInterval(rotateLine, 20);
});