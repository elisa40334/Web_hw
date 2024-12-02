var count = 1;
var pin = ["red","yellow","blue"];

function start() {
    const buttona = document.getElementById("addButton");
    buttona.addEventListener("click",add,false);
    const buttonb = document.getElementById("removeAllButton");
    buttonb.addEventListener("click",remove,false);
    loadarray();
}

function add() {
    var ram = Math.floor((Math.random() * 3));
    var cal = localStorage.length;
    var str = '{"pic":"'+ document.getElementById("pic").value + '","x":"'+ document.getElementById("x").value + '","y":"'+ document.getElementById("y").value + '","ram":"'+ ram + '"}';
    localStorage.setItem(cal,str);
    console.log(pic);
    loadarray();
}
function loadarray() {
    var navv = document.getElementById("nav");
    var objj = [];
    for (let i = 0; i < localStorage.length; i++) {
        objj[i] = localStorage.getItem(localStorage.key(i));
    }
    var str = "";
    for (let i = 0; i < objj.length; i++) {
        var obj = JSON.parse(objj[i]);
        console.log(obj)
        str += "<img src = '0" + obj.pic + ".png' class = 'del' style = 'left:" + obj.x + "px;top:" + obj.y +"px;float:left;position:absolute;z-index:" + (parseInt(localStorage.key(i)) + 1) + ";'>";
        str +=  "<img src = '" + pin[obj.ram] + ".png' class = 'del' style = 'left:" + (parseInt(obj.x)+85) + "px;top:" + (obj.y-10) +"px;float:left;position:absolute;z-index:" + (parseInt(localStorage.key(i)) + 1) +";' width = '30px'>"
    }
    document.getElementById("display").innerHTML = str;
    console.log(str)
}
function remove() {
    for (i = localStorage.length-1; i >= 0 ;i--) {
        var a = localStorage.key(i);
        localStorage.removeItem(a);
    }
    loadarray();
}
window.addEventListener("load",start,false)