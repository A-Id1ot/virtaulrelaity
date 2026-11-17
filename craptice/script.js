let scene, leg, orbit, orbit2;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  leg = document.querySelector("#leg");
  leg.a = 0;
  leg.da = 0.01;
  orbit = document.querySelector("#orbit");
  orbit.a = 0;
  orbit.da = 0.01;

  orbit2 = new Meteor(0, 4, 0);
  loop();
})

function loop(){
  leg.a += leg.da;
  if(leg.a < -Math.PI / 4 || leg.a > Math.PI / 4){
    leg.da = -leg.da;
  }
  leg.object3D.rotation.x = leg.a;

  orbit.a += orbit.da;
  orbit.object3D.rotation.y = orbit.a;

  orbit2.rotate()
  window.requestAnimationFrame(loop);
}