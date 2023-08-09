const animationBox = document.getElementById("animation-box");
const animationControls = document.getElementById("animation-controls");


function updateAnimation() {
const animX = parseFloat(animationControls["anim-x"].value);
const animY = parseFloat(animationControls["anim-y"].value);
const animScale = parseFloat(animationControls["anim-scale"].value);
const animRotation = parseFloat(animationControls["anim-rotation"].value);
const animDuration = parseFloat(animationControls["anim-duration"].value);

animationBox.style.transform = `
  translate(${animX}px, ${animY}px)
  scale(${animScale})
  rotate(${animRotation}deg)
`;

animationBox.style.transition = `transform ${animDuration}s ease-in-out`;
}

//onclick funtion update keliya using kiya hei 

function changeHandler(event) {
updateAnimation();
}

updateAnimation();