class Fall{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.obj = document.createElement("a-box");
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        this.obj.setAttribute("color","#2121DB");
        this.obj.setAttribute("scale",{x:1,y:10,z:1});
        this.obj.setAttribute("opacity","0.99");
        scene.append(this.obj);
    }
}