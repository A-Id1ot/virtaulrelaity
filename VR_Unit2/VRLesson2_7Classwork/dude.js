class Dude{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = 0;
    //Challenge 1: Add delta variables in order to make the dude walk forward on the z axis and jump up and down on the y axis.
    this.dy = 0.01;
    this.dz = 0.01;
    this.obj = dudeTemplate.cloneNode(true);
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append(this.obj);
  }
  jump(){
    //Challenge 2: Add the accumulators to modify the y and z variables
    this.y += this.dy;
    this.z += this.dz;
    //Challenge 3: Add the decision in order to alternate the delta on the y axis when the dude reaches less then 1 or greater than 2
    if(this.y < 1 || this.y > 2){
      this.dy *= -1;
    }
    if(this.z < -10 || this.z > 10){
      this.dz *= -1;
      this.r += 180;
      this.obj.setAttribute("rotation",{x:0,y:this.r,z:0});
    }
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  }
}