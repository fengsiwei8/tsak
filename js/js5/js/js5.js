//
// $(".sign").click(function () {
//
// });
// //
//
// $("#btn").click(function () {
// //
// $.getJSON("/ajax/api.php",{
//     key:"free",
//     appid:0,
//     msg:$("#question").val()
//     },function (data) {
//     $("#answer").text(data.content);
//     });
// });
$(".sign").click(function () {
    $(".tip").text("");//把提示设置为空
    var getName = $("#identity").val();//获得input账号的value值
    var getPwd = $("#pass").val();//获得input密码的value值
    console.log(getName);
    console.log(typeof getName);
    if (( getName === "") ||(getPwd==="")) {
        $(".tip").text("请输入账号密码");
    }else {
        $.ajax({//默认使用get方法，如果要使用post方法可以设定Type这个选项也会影响 data 选项中的内容如何发送到服务器。
            type:"Post",//类型有很多一般常用的事get和post get适合超链接不安全 post是封装在数据里比较安全
            url:"carrots-admin-ajax/a/login",//默认值: 当前页地址。发送请求的地址。(请求地址：Post /a/login)；carrots-admin-ajax这里代表着http://dev.admin.carrots.ptteng.com，因为在nginx里配置过。
            contentType: 'application/x-www-form-urlencoded',//默认值: "application/x-www-form-urlencoded"。发送信息至服务器时内容编码类型。application/x-www-form-urlencoded ： <form encType=””>中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）
            data:{//发送到服务器的数据，将自动转换为请求字符串格式。
                name:getName,
                pwd:getPwd,
                        },
            //回调函数还有beforeSend、error、      dataFilter、          success、            complete。当请求完成之后调用这个函数，无论成功或失败
            //发送之前调用           请求出错时调用    在请求成功之后调用  当请求之后调用。传入返回后的数据，以及包含成功代码的字符串。
            success:function (data) {//请求成功后的返回函数，参数是data由服务器返回

                var json = JSON.parse(data);
                console.log(json.code);
                if (json.code === -5003){//当code：-5003对应用户不存在
                    $(".tip").text(json.message)
                } else if(json.code === -5004){//当code：-5004对应密码错误
                   $(".tip").text(json.message)
                }
                else {
                    console.log(json.code)
                }

            }
        })
    }

});


//
// function sign() {
//     console.log("111");
//     document.getElementsByClassName("tip")[0].innerHTML = "";//设置提示为空
//     var getName = document.getElementById("identity").value;//获得value值
//     var getPwd = document.getElementById("pass").value;
//     console.log(getName);
//     console.log(getPwd);
//     var xhr = new XMLHttpRequest();
//     xhr.open("post", "/carrots-admin-ajax/a/login", true);//向服务器发送请求open(method请求的类型,url文件在服务器上的位置,asynctrue（异步）或 false（同步）) $.ajax({type:"Post",url:"carrots-admin-ajax/a/login",}
//     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//请求头;contentType: 'application/x-www-form-urlencoded'
//     xhr.send("name="+getName +"&"+"&pwd="+ getPwd);
//
//     if ((getName === null || getName === "") || (getPwd === null || getPwd === "")) {
//         document.getElementsByClassName("tip")[0].innerHTML = "请输入用户名和密码";
//     } else {
//             xhr.onreadystatechange = function () {//当请求被发送到服务器时，我们需要执行一些基于响应的任务。每当 readyState 改变时，就会触发 onreadystatechange 事件。
//                 if (xhr.readyState === 4) {//存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。0: 请求未初始化1: 服务器连接已建立;2: 请求已接收;3: 请求处理中;4: 请求已完成，且响应已就绪
//                     // if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
//                     if (xhr.status >= 200) {
//                         var data = JSON.parse(xhr.responseText);
//                         console.log(data);
//                         if (data.code === -5003) {//json.code === -5003
//                             document.getElementsByClassName("tip")[0].innerHTML = data.message;//$('#hint').text(json.message)
//                         } else if (data.code === -5004) {//json.code === -5004
//                             document.getElementsByClassName("tip")[0].innerHTML = data.message;//$('#hint').text(json.message)
//                         } else {
//                             console.log(data.code)
//                         }
//                     }
//                 }
//
//             }
//         }
//
//
// }
//
//







// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.readyState ==4 ){
//         if ((xhr.status>=200 && xhr.status<300)|| xhr.status == 304){
//             alert(xhr.responseText);
//         }
//     }
//     else {
//         alert("Request was unsuccessful:" + xhr.status)
//     }
// };
// xhr.open("GET","", true)
// xhr.send(null);
//
//
// $.get("//xxx:jsp", {t:"sd"}, function (data){
//     alert(data);
// });
//
// //
// //
// //







// $.ajax({
//     url:"xxx.jsb",
//     type:"get",
//     data:{t:"sd"},
//     dataType:"json",
//     success:function (data) {
//         $("#content").text(data);
//     }
// });





//
// xhr.open("GET","", false)
// xhr.send(null);
//
// if((xhr.status>=200&& xhr.status<300 ) || xhr.status == 304){
//     alert(xhr.responseText);
// }else{
// alert( "Request was unsuccessful: "+ xhr.status);
// }