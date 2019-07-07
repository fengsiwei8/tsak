<template>
    <div class="login">
        <el-row type="flex" justify="center" align="middle" class="height">
<!--            <v-layout row wrap  align-center justify-center fill-height ></v-layout>-->
            <el-col :span="6" >
                    <p>后台登录</p>
                <el-form :model="login" :rules="rules">
                    <el-form-item  prop="name">
                        <el-input v-model="login.name" placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item  prop="pwd">
                        <el-input v-model="login.pwd" placeholder="请输入密码" show-password></el-input>
                    </el-form-item>
                </el-form>
                    <div class="tip" ref="tips"></div>
                <el-button @click="requestData">登录</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                login:{
                    name: '',
                    pwd: '',
                },
                rules:{
                    name:[
                        {required: true, message: '请输入账号', trigger: 'blur'},
                        {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
                    ],
                    pwd:[
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
                    ]
                }
            }
        },methods:{
            requestData(){
                var data=this.login;// post有两个参数参数1:请求的路径,参数2:提交的参数login代表的是输入框里面的内容

                this.$axios.post('/api/a/login',data,//第一个是请求的地址，data使我们所要发送的数据上面已经定义
                    // {headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
                    {transformRequest: function(obj) {//固定写法数据转换
                            var str = [];
                            for(var p in obj){str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));}
                            return str.join("&");//
                        }
                    },)
                    .then((response) => {console.log(response);

                        console.log(response.data.code);
                        if(response.data.code == -5003){
                            this.$refs.tips.innerHTML= "用户不存在"
                        }else {
                            this.$router.push('/back/list');
                        }
                    })//返回函数箭头函数
                    .catch((error) => {console.log(error);});

            }

        }

    }
</script>

<style  lang="scss">
    .login {
        margin: 0;
        text-align: -webkit-center;
        height: 97vh;
        background: url("../timg (1).jpg");
        background-size: cover;

        .height {
            height: 90vh;
            .el-input{
                opacity: .4;
                margin: 10px 0 0 0;
                max-width: 200px;
            }

            button {
                margin: 20px 0 0 0;
                width: 100px;
                opacity: .4;
            }

        }
    }
</style>