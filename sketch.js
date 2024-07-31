function setup() {
    createCanvas(400, 400);
    background("#87CEEB");
  }
  
  function draw() {
    fill("#F5DEB3");
    stroke("#F5DEB3");
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }