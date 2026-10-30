class House{
    constructor(x,y,z){
    this.obj=document.createElement("a-entity");
    let hou=document.createElement("a-box");
    hou.setAttribute("position","0 0.5 0");
    hou.setAttribute("color","#E9CDAB");
    this.obj.append(hou);
    let se=document.createElement("a-cylinder");
    se.setAttribute("segments-radial","3");
    se.setAttribute("position","0 1.3 0");
    se.setAttribute("rotation","-90 0 0");
    se.setAttribute("scale","0.8 1 0.6");
    se.setAttribute("color","black");
    this.obj.append(se);
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    }
}