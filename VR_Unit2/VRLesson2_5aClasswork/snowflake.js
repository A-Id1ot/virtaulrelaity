class Snowflake{
  constructor(x,y,z){
    // Challenge 5: Create animation variables y and dy for the Snowflake to fall.  Set them to appropriate values.
    this.y = y;
    this.dy = 0.05;
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append( this.obj );
  }
  //Challenge 6: Create a function fall() which decreases y by dy and updates the Snowflake object to that y position
  fall(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:0, y:this.y, z:0})
  }
}