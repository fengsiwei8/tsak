

var x = document.getElementsByClassName("box");

function colors() {//rgb颜色随机
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    console.log(rgb);//输出
    return rgb;
    // 把颜色赋值给函数

}
var time;
function change() {
    time = setInterval(function () {

        for (var i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "#ffa500"; //每次获取随机颜色后恢复默认颜色
        }
        for (; a == b || b == c || c == a;) {//当abc有任意两个相等，就开始运行，直到没有相等。选择三个不相同的随机数
            var a = Math.floor(Math.random() * 9);
            var b = Math.floor(Math.random() * 9);
            var c = Math.floor(Math.random() * 9);
            // x[a].style.background =colors();
            // x[b].style.background =colors();
            // x[c].style.background =colors();
        }
        // x[a].style.background =colors();
        // x[b].style.background =colors();
        // x[c].style.background =colors();
        for (; one == two || two == zhree || zhree == one;) {//判断三个盒子背景颜色是否重复，并给随机的三个盒子赋值上随机背景颜色
            var one = x[a].style.background = colors();
            var two = x[b].style.background = colors();
            var zhree = x [c].style.background = colors();
        }
    },1000)
    document.getElementById("start").disabled = "true";
}
// 设置重置
function end() {
    for (var d= 0; d < x.length; d++) {
        x[d].style.backgroundColor = "#ffa500"; //恢复默认颜色
    };
    clearInterval(time); //去除延时
document.getElementById("start").disabled = "false";
}
// var time;
// function change() {
//     time = setInterval(function () {
//         for (var i = 0; i < x.length; i++) {
//             x[i].style.backgroundColor = "#ffa500"; //每次获取随机颜色后恢复默认颜色
//         }
//         for (;a == b || b == c || c == a;) {//当abc有任意两个相等，就开始运行，直到没有相等。选择三个不相同的随机数
//             var a = Math.floor(Math.random() * 9);
//             var b = Math.floor(Math.random() * 9);
//             var c = Math.floor(Math.random() * 9);
//         }
//         for (; one == two || two == three || three == one;) {//判断三个盒子背景颜色是否重复，并给随机的三个盒子赋值上随机背景颜色
//             var one = x[a].style.backgroundColor = colors();
//             var two = x[b].style.backgroundColor = colors();
//             var three = x[c].style.backgroundColor = colors();
//         }
//     }, 1000);
//
// }
// //设置重置
// function end() {
//     for (var l = 0; l < x.length; l++) {
//         x[l].style.backgroundColor = "#ffa500"; //恢复默认颜色
//     }
//     clearInterval(time); //去除延时
//
// }




// function start() {
//     var z=document.getElementsByClassName("box");
//     // console.log(z);
//     for (var i=0; i<9; i++){
//         z[i].style.backgroundColor="red";
//     }
// }
//
// // for (var=i;i<10;i++){
// //
// // // }
// function test() {
//     for (var i=0;i<10;i++){
//         console.log(i);
//     }
//     return i;
// }
// console.log(test());