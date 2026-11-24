let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets=[],ufos=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
    for(let i = 0; i < 100; i++){
      let x = rnd(-60,60);
      let z = rnd(-60,60);
      let rocket = new Rocket(x,0,z);
      rockets.push(rocket);
    }
    for(let i = 0; i < 25; i++){
      let x = rnd(-60,60);
      let y = rnd(40,60)
      let z = rnd(-60,60);
      let ufo = new UFO(x,y,z);
      ufos.push(ufo);
    }
  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.launch()
  }
  for(let ufo of ufos){
    ufo.invade()
  }
  window.requestAnimationFrame( loop );
}
