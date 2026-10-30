class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    let cl=document.createElement("a-sphere");
    cl.setAttribute("color","white");
    cl.setAttribute("radius","0.5")
    this.obj.append(cl);
    let ou=document.createElement("a-sphere");
    ou.setAttribute("color","white");
    ou.setAttribute("position","0 0.5 0");
    ou.setAttribute("radius","0.5")
    this.obj.append(ou);
    let d=document.createElement("a-sphere");
    d.setAttribute("color","white");
    d.setAttribute("position","0 0.5 0.5");
    d.setAttribute("radius","0.5")
    this.obj.append(d);
    this.obj.setAttribute("position",{x:x, y:y, z:z-0.3});
    this.obj.setAttribute("rotation","45 0 0")
    scene.append( this.obj )
  }
}