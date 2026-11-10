class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = rnd(2,4)/10;
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
        let fin1 = document.createElement("a-cone");
        fin1.setAttribute("color", "red");
        fin1.setAttribute("position", "0 -5.995 0");
        fin1.setAttribute("rotation", "0 90 0");
        fin1.setAttribute("scale","0.25 1 2");
        fin1.setAttribute("height", "2");
        this.obj.append(fin1);
        let fin2 = document.createElement("a-cone");
        fin2.setAttribute("color", "red");
        fin2.setAttribute("position", "0 -5.995 0");
        fin2.setAttribute("rotation", "0 180 0");
        fin2.setAttribute("scale","0.25 1 2");
        fin2.setAttribute("height", "2");
        this.obj.append(fin2);
        let sign = document.createElement("a-image");
        sign.setAttribute("src","#rad");
        sign.setAttribute("position","0 -4.5 1");
        sign.setAttribute("scale","1 1 1");
        this.obj.append(sign);
        let sign2 = document.createElement("a-image");
        sign2.setAttribute("src","#rad");
        sign2.setAttribute("rotation","0 180 0");
        sign2.setAttribute("position","0 -4.5 -1");
        sign2.setAttribute("scale","1 1 1");
        this.obj.append(sign2);
        this.obj.setAttribute("position", {x:x,y:y,z:z});
        scene.append(this.obj)
    }
    launch(){
        this.y += this.dy;
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
        if(this.y > 75){
            this.y = -10;
            this.dy+= rnd(1,3)/25;
        }
    }
}