class UFO{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = rnd(1,4)/10; 
        this.obj = document.createElement("a-entity");
        let inside = document.createElement("a-sphere");
        inside.setAttribute("position", "0 1 -3");
        inside.setAttribute("radius", "2");
        inside.setAttribute("color", "cyan");
        this.obj.append(inside);
        let outer = document.createElement("a-torus");
        outer.setAttribute("position", "0 1 -3");
        outer.setAttribute("radius", "3")
        outer.setAttribute("radius-tubular", "0.5");
        outer.setAttribute("rotation", "90 0 0");
        outer.setAttribute("color", "white");
        this.obj.append(outer);
        this.obj.setAttribute("position", {x:x,y:y,z:z});
        scene.append(this.obj);
    }
    invade(){
        this.y -= this.dy;
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
        if(this.y < 0){
          this.y = 0;  
        }
    }
}