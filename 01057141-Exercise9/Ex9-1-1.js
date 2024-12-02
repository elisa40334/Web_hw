var count = 1;
var pin = ["red","yellow","blue"];

function start() {
    const buttona = document.getElementById("addButton");
    buttona.addEventListener("click",add,false);
    const buttonb = document.getElementById("removeAllButton");
    buttonb.addEventListener("click",remove,false);
}

function add() {
    var pic = document.getElementById("pic").value;
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var navv = document.getElementById("nav");
    console.log(pic);
    var newnode = document.createElement("img");
    newnode.setAttribute("src","0" + pic + ".png");
    newnode.setAttribute("class","del");
    newnode.setAttribute("style","left:" + x + "ch;top:" + y +"ch;float:left;position:absolute;z-index:" + (++count) +";")
    navv.parentNode.insertBefore(newnode,navv);
    var ram = Math.floor((Math.random() * 3));
    newnode = document.createElement("img");
    newnode.setAttribute("src",pin[ram] + ".png");
    newnode.setAttribute("class","del");
    newnode.setAttribute("style","left:" + (parseInt(x)+85) + "ch;top:" + (y-10) +"ch;float:left;position:absolute;z-index:" + (count) +";")
    newnode.setAttribute("width","30px;")
    navv.parentNode.insertBefore(newnode,navv);
    var del = document.getElementsByClassName("del");
    console.log(del)
}
function remove() {
    var del = document.getElementsByClassName("del");
    console.log(del.length)
    for (let i = del.length-1; i >= 0; i--) {
        
        del[i].remove();
    }
}
window.addEventListener("load",start,false)