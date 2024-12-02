var adjj = ["客戶那邊的", "我們的", "負責談需求的", "負責這個部分的", "直到上線前一天", "(雙手一攤)"];
var nounn = ["專案經理", "主管", "工程師", "設計師", "外包", "User", "聯絡窗口"];
var verbb = ["當初沒有講清楚", "一直換", "說他肚子不舒服", "擺爛不想做了", "突然開始放長假", "去生小孩了", "離職了", "都沒甚麼 sense", "都沒有跟我講", "以為這些不用做", "一直在狀況外", "做事拖拖拉拉", "還搞不清楚狀況", "Quality 有問題", "東西一直改", "在整我", "突然就沒來了"];
var picc = ["Jacky","Harry","Yao","Cat"];
var leff = ["margin-left:33.5%","margin-left:32.5%","margin-left:40%","margin-left:40%"]

function start() {
    pickadj();
    picknoun();
    pickverbb();
    pickpic();
    const buttona = document.getElementById("pic1");
    buttona.addEventListener("click",start,false);
}

function pickadj() {
    let inde = Math.floor(Math.random() * adjj.length);
    let adjjj = document.getElementById("adj")
    adjjj.innerHTML = adjj[inde];
}

function picknoun() {
    let inde = Math.floor(Math.random() * nounn.length);
    document.getElementById("noun").innerHTML = nounn[inde];
}

function pickverbb() {
    let inde = Math.floor(Math.random() * verbb.length);
    document.getElementById("verb").innerHTML = verbb[inde] + "!";
}

function pickpic() {
    let inde = Math.floor(Math.random() * picc.length);
    let pic = document.getElementById("pic1");
    pic.setAttribute("src",picc[inde] + ".jpg");
    pic.setAttribute("alt",picc[inde]);
}
window.addEventListener("load",start,false);