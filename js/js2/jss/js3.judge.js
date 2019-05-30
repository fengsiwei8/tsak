arr=JSON.parse(sessionStorage.getItem("gameplays"));//获得储存值
console.log(arr);

var gameProcess = 0;
sessionStorage.setItem("time",JSON.stringify(gameProcess));
console.log("number");

for(var i=0;i<arr.length; i++){
    $("main").append(`
   <div class="box">
<p class="id">${arr[i]}</p>
<p class="number">${i+1}号</p>
</div>
`
    )
}
$("#btn").click(function () {
    window.location.href="js4.0.html";
});
var playernum = [];
for (var i = 0; i < arr.length; i++) {
    playernum.push(({name: arr[i], state: "live",num: i+1 + "号",whoKill:"none",deathDay:"0"}));
    console.log(playernum);
}
sessionStorage.setItem("gameplayers", JSON.stringify(playernum));


var playDay = 1;
console.log("游戏天数",playDay);
sessionStorage.setItem("playDay",JSON.stringify(playDay));