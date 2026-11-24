class UFO {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.dx = rnd(1,2)/1000;
        this.dz = rnd(1,2)/1000;
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
        light.setAttribute("position", "0 -10 -3");
        light.setAttribute("radius-bottom", "3");
        light.setAttribute("radius-top", "0.5");
        light.setAttribute("height", "20");
        light.setAttribute("color", "green");
        light.setAttribute("opacity", this.op);
        this.obj.append(light);
        this.obj.setAttribute("scale",{x:0.5,y:0.5,z:0.5});
        scene.append(this.obj);
    }
    invade(){
        this.x += this.dx;
        this.z += this.dz;
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
        if(this.x > 47||this.x<0){
            this.dx = -this.dx;
        }
        if(this.z > 25||this.z<1){
            this.dz = -this.dz;
        }
    }
}
