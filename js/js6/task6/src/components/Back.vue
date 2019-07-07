<template>
    <div class="back">
        <div>
            <el-row class="ta">
                <el-col  :md="5"  class="backstage" >
                    <h1>罗布泊后台修仙系统</h1>
                </el-col>
                <el-col  :md="19"  class="administrator" >
                    <div class="name">
                        <span>管理员</span>
                        <span>admin</span>
                        <el-button icon="el-icon-switch-button" circle></el-button>
                    </div>

                </el-col>
            </el-row>
            <el-row class="tac">
                <el-col  :md="5"  class="Sidebar">
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="transparent">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-edit"></i>
                                <span>后台管理</span>
                            </template>
                            <el-menu-item-group>
                                <template slot="title"></template>
                                <el-menu-item index="1-1">模块管理</el-menu-item>
                                <el-menu-item index="1-2">角色管理</el-menu-item>
                                <el-menu-item index="1-3">密码修改</el-menu-item>
                                <el-menu-item index="1-4">账户修改</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-edit"></i>
                                <span>信息管理</span>
                            </template>
                            <el-menu-item-group>
                                <template slot="title"></template>
                                <el-menu-item index="2-1">公司列表</el-menu-item>
                                <el-menu-item index="2-2">职位列表</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-edit"></i>
                                <span>内容管理</span>
                            </template>
                            <el-menu-item-group>
                                <template slot="title"></template>
                                <el-menu-item index="3-1">
                                    <router-link to="/back/list"> Article列表</router-link>
                                </el-menu-item>

                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-col>
                <el-col :md="19">
                    <div class="greet">
                        <router-view></router-view>
                    </div>
                </el-col>
            </el-row>






        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    }
</script>

<style lang="scss">
    .back {
        background: url("../bg.jpg") no-repeat;
        background-size: cover;
        overflow: hidden;
        min-height: 100vh;
        .backstage{
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom:1px solid #fdbb6b;
            h1{
                color: white;
                font-size: 16px;
            }
        }
        .administrator{
            background: #ffffff;
            color: #ffffff;
            font-size: 20px;
            height: 45px;
            .name {
                float: right;
                min-width: 150px;
                color: #1a9ee4;
                font-size: 13px;
                padding-right: 44px;
                span{
                    padding-right: 10%;
                }
                button{
                    border: none;
                    padding: 12px;
                    color: orange;
                }
            }
        }
        .tac{
            padding-bottom: 3000px;
            margin-bottom: -3000px;
            li{
                color: #ffffff;
                border: none!important;
                .el-submenu__title i {
                    color: #ffffff!important;
                }
            }
            .el-menu--horizontal>.el-menu-item.is-active {
                color: #ffffff;
                font-size: 16px;
            }

            .el-submenu__title{
                color: #ffffff;
            }
            .el-submenu .el-menu-item{
                min-width: 0;
            }
            .el-menu {
                /*background-color:transparent;*/
                border-right: none;
            }

            .greet{
                padding: 30px 30px 3000px 30px;
                margin-bottom: -3000px;
                background: #f5f5f5;
            }
        }
        .el-submenu__title {
            &:hover {
                background: transparent!important;
            }
        }
        .el-menu-item:hover{
            background-color: transparent!important;
        }

        a{
            color: #ffffff;
            text-decoration: none;
        };
    }
</style>