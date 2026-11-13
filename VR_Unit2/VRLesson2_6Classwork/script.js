let scene,mechs=[];
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
window.addEventListener("DOMContentLoaded",function(){
  scene = document.querySelector("a-scene");
  mech = document.getElementById("mech-1");
  for (let i=0;i<25;i++){
    let x = rnd(-50,50);
    let z = rnd(-50,50);
    let mech=new Mech(x,13,z);
    mechs.push(mech);
  }
  loop();
})
function loop(){
  for(let mech of mechs){
    mech.launch();
  }
  window.requestAnimationFrame(loop);
}
