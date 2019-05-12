var x =document.getElementsByClassName("box");

function shuffle() {
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    //定义一个空数组。
     copy = [];
    //n=数组长度
    n = array.length;
    var i;//i就是一个变量名字
    // 如果还剩有元素则继续。。。
    while (n) {
        //
        i = Math.floor(Math.random() * array.length);
        // 如果这个元素之前没有被选中过。。
        // if (i in array) {
        copy.push(array[i]);
        // delete array[i];   //没用
        array.splice(i, 1);
        n--;
        // }
    }
    console.log(copy);
    return copy;
}

function colors(){
    var color="#";
    for(var i=0;i<6;i++){
        color += (Math.random()*16 | 0).toString(16);
    };
    console.log(color);
    return color;
}
var  time;
function change() {
    time = setInterval(function () {
        shuffle();
        for (var i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "#ffa500"; //每次获取随机颜色后恢复默认颜色
        }

        x[copy[0]].style.background = colors();
        x[copy[1]].style.background = colors();
        x[copy[3]].style.background = colors();
    }, 1000);
    document.getElementById("start").disabled=true;
};
//
function end() {
    for (var d= 0; d < x.length; d++) {
        x[d].style.backgroundColor = "#ffa500"; //恢复默认颜色
    };
    clearInterval(time); //去除延时
    document.getElementById("start").disabled = false;
}