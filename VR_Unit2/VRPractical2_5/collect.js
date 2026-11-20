class Ball{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.obj = document.createElement("a-entity");
        let balls = document.createElement("a-sphere");
        balls.setAttribute("position",{x:0,y:0,z:0});
        balls.setAttribute("color","white");
        balls.setAttribute("scale",{x:0.25,y:0.25,z:0.25});
        balls.setAttribute("opacity","0.985");
        this.obj.append(balls);
        let top = document.createElement("a-box");
        top.setAttribute("position",{x:0,y:8.5,z:0});
        top.setAttribute("color","#2121DE");
        top.setAttribute("opacity","0.8");
        this.obj.append(top);
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);
    }
}