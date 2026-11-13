class Mech{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = rnd(1,3)/10;
        this.obj = mech.cloneNode(true);
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
        scene.append(this.obj)
    }
    launch(){
        this.y += this.dy;
        this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    }
}   