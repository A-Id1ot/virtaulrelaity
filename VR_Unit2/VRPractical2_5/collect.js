class Ball{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.obj = document.createElement("a-sphere");
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        this.obj.setAttribute("color","white");
        this.obj.setAttribute("scale",{x:0.25,y:0.25,z:0.25});
        this.obj.setAttribute("opacity","0.985");
        scene.append(this.obj);
    }
}