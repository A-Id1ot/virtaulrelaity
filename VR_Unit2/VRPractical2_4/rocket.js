class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = rnd(1,3)/10;
        this.obj = document.createElement("a-entity");
        let base = document.createElement("a-cylinder");
        base.setAttribute("color", "gray");
        base.setAttribute("position", "0 -5 0");
        base.setAttribute("height", "4");
        this.obj.append(base);
        let tip = document.createElement("a-cone");
        tip.setAttribute("color", "red");
        tip.setAttribute("position", "0 -2 0");
        tip.setAttribute("rotation", "0 90 0");
        tip.setAttribute("height", "2");
        this.obj.append(tip);
        let fire = document.createElement("a-cone");
        fire.setAttribute("color","orange");
        fire.setAttribute("position","0 -9 0");
        fire.setAttribute("rotation","180 0 0");
        fire.setAttribute("radius-top", "0");
        fire.setAttribute("radius-bottom","0.5");
        fire.setAttribute("height","4");
        this.obj.append(fire);
        this.obj.setAttribute("position", {x:x,y:y,z:z});
        scene.append(this.obj)
    }
    launch(){
        this.y += this.dy;
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z})
    }
}