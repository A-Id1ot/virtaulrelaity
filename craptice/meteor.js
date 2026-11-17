class Meteor{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.a = 0;
    this.da = 0.01;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("wireframe",true);

    let meteor = document.createElement("a-dodecahedron");
    //Shift the dodecahedrom relative to the <a-box>
    meteor.setAttribute("position",{x:0,y:3,z:0});
    this.obj.append(meteor);

    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
  }
  rotate(){
    this.a += this.da;
    // Angle's are measure in radians when using the following approach
    this.obj.object3D.rotation.x = this.a;
  }
}