class UFO {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.dx = rnd(1,4)/5;
        this.time = 0;
        this.op = 0.6;
        this.obj = document.createElement("a-entity");
        let inside = document.createElement("a-sphere");
        inside.setAttribute("position", "0 1.5 -3");
        inside.setAttribute("radius", "1.5");
        inside.setAttribute("color", "#6CC417");
        this.obj.append(inside);
        let outer = document.createElement("a-sphere");
        outer.setAttribute("position", "0 1 -3");
        outer.setAttribute("scale", "4 1 4");
        outer.setAttribute("color", "grey");
        this.obj.append(outer);
        this.obj.setAttribute("position", { x: x, y: y, z: z });
        let light = document.createElement("a-cone");
        light.setAttribute("position", "0 -5 -3");
        light.setAttribute("radius-bottom", "2");
        light.setAttribute("radius-top", "0.5");
        light.setAttribute("height", "10");
        light.setAttribute("color", "green");
        light.setAttribute("opacity", this.op);
        this.obj.append(light);
        scene.append(this.obj);
    }
    invade(){
        this.x += this.dx;
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
        if(this.x > 47){
            this.dx = -this.dx;
        }
    }
}
