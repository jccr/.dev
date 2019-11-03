const body = document.querySelector("body");
const aside = document.querySelector("aside");

window.addEventListener("mousemove", setPosition, false);
window.addEventListener("deviceorientation", event => {
  const g = event.gamma;
  const b = event.beta;
  setPosition({
    clientX: g * 27,
    clientY: b * 27
  });
});

let initialX = 0;
let initialY = 0;
let positionX = 0;
let positionY = 0;

let xPos = 0;
let yPos = 0;
let dX = 0;
let dY = 0;

function setPosition(e) {
  if (!initialX) {
    initialX = e.clientX;
    initialY = e.clientY;
  }
  positionX = e.clientX - initialX;
  positionY = e.clientY - initialY;
}

function animate() {
  dX = positionX - xPos;
  dY = positionY - yPos;

  xPos += dX / 27;
  yPos += dY / 27;

  body.style.backgroundPositionX = -xPos * 0.07 + "px";
  body.style.backgroundPositionY = -yPos * 0.07 + "px";

  aside.style.right =
    12 + xPos * 0.02 - body.clientWidth / body.clientHeight + "px";
  aside.style.top = 30 + yPos * 0.02 + body.clientHeight / 7 + "px";

  requestAnimationFrame(animate);
}

animate();
