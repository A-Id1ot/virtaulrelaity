let scene;
window.addEventListener("DOMContentLoaded",function() {
    scene= document.querySelector("a-scene");
    car=document.querySelector("#car");
    car.x=0;
    car.xadd=-0.01;
    carloop();
    ball = document.querySelector("#pokemonball");
    ball.r=0;
    ball.ro=2;
    ball.a=0;
    ball.m=0.01;
    ballloop();
    ballmove();
    rocket=document.querySelector("#rocket");
    rocket.y=1;
    rocket.yadd=0.01;
    rocketloop();
    dude=document.querySelector("#dude");
    dude.reg=1;
    dude.grow=0.005;
    dudeloop();
    sun=document.querySelector("#sun");
    sun.a=0;
    sun.aa=0.001;
    sunloop();
})
function ballloop(){
  ball.r += ball.ro;
  ball.setAttribute("rotation",{x:ball.r, y:0, z:0});
  window.requestAnimationFrame(ballloop);
}
function ballmove(){
  ball.a += ball.m;
  ball.setAttribute("position",{x:0, y:1, z:ball.a});
  window.requestAnimationFrame(ballmove);
}
function carloop(){
  car.x += car.xadd;
  car.setAttribute("position",`${car.x} 0 -8`);
  window.requestAnimationFrame(carloop);
}
function rocketloop(){
  rocket.y += rocket.yadd;
  rocket.setAttribute("position",{x:3, y:rocket.y, z:-4});
  window.requestAnimationFrame(rocketloop);
}
function dudeloop(){
  dude.reg += dude.grow;
  dude.setAttribute("scale",{x:dude.reg, y:dude.reg, z:dude.reg});
  window.requestAnimationFrame(dudeloop);
}
function sunloop(){
  sun.a+=sun.aa;
  sun.setAttribute("opacity",sun.a);
  window.requestAnimationFrame(sunloop);
}