class Wall{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.obj = document.createElement("a-box");
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        this.obj.setAttribute("color","#2121DE");
        this.obj.setAttribute("scale",{x:1,y:10,z:1});
        scene.append(this.obj);
    }
}