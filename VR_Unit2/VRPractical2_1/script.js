let scene;
function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
    //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
    createCloud(x,5,z);
  }
  //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createHouse(x,0,z);
  }
})
/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/
function createCloud(x, y, z){
  let cloud=document.createElement("a-entity");
  let cl=document.createElement("a-sphere");
  cl.setAttribute("color","white");
  cl.setAttribute("radius","0.5")
  cloud.append(cl);
  let ou=document.createElement("a-sphere");
  ou.setAttribute("color","white");
  ou.setAttribute("position","0 0.5 0");
  ou.setAttribute("radius","0.5")
  cloud.append(ou);
  let d=document.createElement("a-sphere");
  d.setAttribute("color","white");
  d.setAttribute("position","0 0.5 0.5");
  d.setAttribute("radius","0.5")
  cloud.append(d);
  cloud.setAttribute("position",{x:x, y:y, z:z});
  cloud.setAttribute("rotation","45 0 0")
  scene.append(cloud);
}
/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createHouse(x, y, z){
  let house=document.createElement("a-entity");
  let hou=document.createElement("a-box");
  hou.setAttribute("position","0 0.5 0");
  hou.setAttribute("color","#E9CDAB");
  house.append(hou);
  let se=document.createElement("a-cylinder");
  se.setAttribute("segments-radial","3");
  se.setAttribute("position","0 1.3 0");
  se.setAttribute("rotation","-90 0 0");
  se.setAttribute("scale","0.8 1 0.6");
  se.setAttribute("color","black");
  house.append(se);
  house.setAttribute("position",{x:x, y:y, z:z});
  scene.append(house);
}
function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append(pines);

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append(stump);
  tree.setAttribute("position",{x:x, y:y-0.5, z:z});
  scene.append(tree)
}



