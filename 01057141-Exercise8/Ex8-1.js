function start() {
    const buttona = document.getElementById("addButton");
    buttona.addEventListener("click",addbook,false);
    const buttonc = document.getElementById("removeAllButton");
    buttonc.addEventListener("click",removeall,false);
    loadSearches();
}

function addbook() {
    
    var title = document.getElementById("title");
    var author = document.getElementById("author");
    var year = document.getElementById("year");
    var burl = document.getElementById("burl");
    var str = "";
    str = '{"title":"'+ title.value +'", "author":"'+ author.value + '", "year":"' + year.value + '", "bookURL":"' + burl.value + '"}';
    var d = new Date();
    var t = d.getTime();
    var name = "ntou-" + t;
    localStorage.setItem(name,str);
    title.value = "";
    author.value = "";
    year.value = "";
    burl.value = "";
    loadSearches();
}

function removeall() {;
    for (i = localStorage.length-1; i >= 0 ;i--) {
        if (localStorage.key(i)[0] == 'n' && localStorage.key(i)[1] == 't' && localStorage.key(i)[2] == 'o' && localStorage.key(i)[3] == 'u' && localStorage.key(i)[4] == '-') {
            var a = localStorage.key(i);
            localStorage.removeItem(a);
        }
    }
    window.confirm("All items were removed!");
    loadSearches();
}

function loadSearches() {
    var obj = [];
    var text = document.getElementById("display");
    var cal = -1;
    var dis = "";
    for (i = 0; i < localStorage.length ;i++) {
        var a = localStorage.key(i);
        if (a[0] == "n" && a[1] == "t" && a[2] == "o" && a[3] == "u" && a[4] == "-") {
            obj[++cal] = JSON.parse(localStorage.getItem(a));  
        }
        else{
            obj[++cal] = localStorage.getItem(a); 
        }
        // console.log(a[3]);
    }
    dis += "<table><tr><th>Title</th><th>Author</th><th>Year</th><th>URL</th></tr>";
    // console.log(obj[0])
    if (obj.length >= 1) {
        var countrow = 0;
        for (let i = 0; i < obj.length; i++) {
            if (localStorage.key(i)[0] == 'n' && localStorage.key(i)[1] == 't' && localStorage.key(i)[2] == 'o' && localStorage.key(i)[3] == 'u' && localStorage.key(i)[4] == '-' && countrow%2 == 1) {
                dis += "<tr><td>" + obj[i].title + "</td><td>" + obj[i].author + "</td><td>" + obj[i].year + "</td><td><a href='" + obj[i].bookURL + "' target = '_blank'>" + obj[i].bookURL +"</a></td></tr>";  
                countrow++;
            }
            else if (localStorage.key(i)[0] == 'n' && localStorage.key(i)[1] == 't' && localStorage.key(i)[2] == 'o' && localStorage.key(i)[3] == 'u' && localStorage.key(i)[4] == '-') {
                dis += "<tr class = 'oddrow'><td>" + obj[i].title + "</td><td>" + obj[i].author + "</td><td>" + obj[i].year + "</td><td><a href='" + obj[i].bookURL + "' target = '_blank'>" + obj[i].bookURL +"</a></td></tr>";  
                countrow++;
            }
        }
    }
    console.log(dis);
    dis += "</table>";
    text.innerHTML = dis;
}
window.addEventListener("load",start,false);