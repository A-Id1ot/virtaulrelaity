class Rocket {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = rnd(2, 4) / 10;
        this.obj = document.createElement("a-entity");
        this.rocketBody = document.createElement("a-entity");
        let base = document.createElement("a-cylinder");
        base.setAttribute("color", "gray");
        base.setAttribute("position", "0 -5 0");
        base.setAttribute("height", "4");
        this.rocketBody.append(base);
        let tip = document.createElement("a-cone");
        tip.setAttribute("color", "red");
        tip.setAttribute("position", "0 -2 0");
        tip.setAttribute("rotation", "0 90 0");
        tip.setAttribute("height", "2");
        this.rocketBody.append(tip);
        let fire = document.createElement("a-cone");
        fire.setAttribute("color", "orange");
        fire.setAttribute("position", "0 -9 0");
        fire.setAttribute("rotation", "180 0 0");
        fire.setAttribute("radius-top", "0");
        fire.setAttribute("radius-bottom", "0.5");
        fire.setAttribute("height", "4");
        this.rocketBody.append(fire);
        let fin1 = document.createElement("a-cone");
        fin1.setAttribute("color", "red");
        fin1.setAttribute("position", "0 -5.995 0");
        fin1.setAttribute("rotation", "0 90 0");
        fin1.setAttribute("scale", "0.25 1 2");
        fin1.setAttribute("height", "2");
        this.rocketBody.append(fin1);
        let fin2 = document.createElement("a-cone");
        fin2.setAttribute("color", "red");
        fin2.setAttribute("position", "0 -5.995 0");
        fin2.setAttribute("rotation", "0 180 0");
        fin2.setAttribute("scale", "0.25 1 2");
        fin2.setAttribute("height", "2");
        this.rocketBody.append(fin2);
        let sign = document.createElement("a-image");
        sign.setAttribute("src", "#rad");
        sign.setAttribute("position", "0 -4.5 1");
        sign.setAttribute("scale", "1 1 1");
        this.rocketBody.append(sign);
        let sign2 = document.createElement("a-image");
        sign2.setAttribute("src", "#rad");
        sign2.setAttribute("rotation", "0 180 0");
        sign2.setAttribute("position", "0 -4.5 -1");
        sign2.setAttribute("scale", "1 1 1");
        this.rocketBody.append(sign2);
        this.obj.append(this.rocketBody);
        this.explosion = document.createElement("a-sphere");
        this.explosion.setAttribute("color", "orange");
        this.explosion.setAttribute("position", "0 -2.5 0");
        this.explosion.setAttribute("scale", "5 5 5");
        this.explosion.setAttribute("visible", "false");
        this.obj.append(this.explosion);
        this.obj.setAttribute("position", { x: x, y: y, z: z });
        scene.append(this.obj);
    }
    launch() {
        this.dy = this.dy*1.005;
        this.y += this.dy;
        this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
        if (this.y > 150) {
            this.dy += rnd(1,3)/25;
            this.obj.setAttribute("rotation", { x: 0, y: 0, z: 180 });
            this.dy = this.dy*-1;
        }
        if (this.y < -2) {
            this.rocketBody.setAttribute("visible", "false");
            this.explosion.setAttribute("visible", "true");
            this.explosion.setAttribute("opacity", "0.9");
            this.dy = 0;
            this.y = 0;
        }
    }
}