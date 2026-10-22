window.addEventListener("DOMContentLoaded",function() {
  //Challenge 1: Create a variable scene for the <a-scene> component in the HTML
  let scene = document.querySelector("a-scene");
  //Challenge 2: Create a variable for <a-dodecahedron> and create it.
  let dod = document.createElement("a-dodecahedron");
  //Challenge 3: Change the <a-dodecahedron>'s position, radius and color
  dod.setAttribute("position","0 2 -10");
  dod.setAttribute("color","blue");
  dod.setAttribute("radius","2");
  //Challenge 4: Add the <a-dodecahedron> to the scene
  scene.append(dod);
  /* Challenge Bonus
  1) Use a for loop to create a lot of <a-dodecahedron> 
  2) Change each <a-dodecahedron>'s position to a random x, y, and z location
  3) Change each <a-dodecahedron>'s to a random color.  Hint: Use rgb( ) and string interpolation 
  */
  for (let i = 0; i < 20; i++) {
    let randomDod = document.createElement("a-dodecahedron");
    let x=(Math.random()*20)-10;
    let y=(Math.random()*20);
    let z=(Math.random()*-20);
    randomDod.setAttribute("position",`${x} ${y} ${z}`);
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    randomDod.setAttribute("color",`rgb(${r}, ${g}, ${b})`);
    scene.append(randomDod);
  }
})