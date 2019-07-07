<template>


    <div class="list">
        <el-row>
            <el-col :md="8" class="block">
                <el-col :md="8" class="release">
                    选择日期
                </el-col>
                <el-col :md="16">
                    <el-date-picker v-model="startAt"
                                    type="datetime"
                                    default-time="00:00:00"
                                    value-format="timestamp">
                    </el-date-picker>
                </el-col>
            </el-col>
            <el-col :md="8" class="block">
                <el-col :md="8" class="release">
                    ---
                </el-col>
                <el-col :md="16">
                    <el-date-picker  v-model="endAt"
                                     type="datetime"
                                     default-time="23:59:59"
                                     value-format="timestamp"> </el-date-picker>
                </el-col>
            </el-col>
            <el-col  :md="8" class="block">
                <el-col :md="8" class="release">
                  类型
                </el-col>
                <el-col :md="16">
                    <el-select v-model="type" placeholder="全部">
                        <el-option
                                v-for="item in typeOptions"
                                :key="item.type"
                                :label="item.label"
                                :value="item.type">
                        </el-option>
                    </el-select>
                </el-col>
            </el-col>
        </el-row>
        <el-row>
            <el-col  :md="8" class="block">
                <el-col :md="8" class="release">
                状态 &emsp; &emsp;
                </el-col>
                <el-col :md="16">
                    <el-select v-model="status" placeholder="全部">
                        <el-option
                                v-for="item in statusOptions"
                                :key="item.status"
                                :label="item.label"
                                :value="item.status">
                        </el-option>
                    </el-select>
                </el-col>
            </el-col>
        </el-row>
        <el-row>
            <el-col :md="24">
                <div class="btn">
                    <el-button type="danger" @click="clear">清空</el-button>
                    <el-button type="success" @click="request">搜索</el-button>
                </div>

            </el-col>
        </el-row>
        <el-row>
            <el-col :md="24" class="style">
                <div class="article">Article列表
                    <router-link to="/back/edit"><el-button type="success" >+新增</el-button></router-link>
                </div>

                <table >
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>名称</th>
                        <th>类型</th>
                        <th>发布时间</th>
                        <th>修改时间</th>
                        <th>发布者</th>
                        <th>状态</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody >
                    <tr v-for="item in listInfo" :key="item.a">
                        <td>{{item.id}}</td>
                        <td>{{item.title}} </td>
                        <td>{{item.type| typeFilter}}</td>
                        <td>{{item.createAt | dateFilter}}</td>
                        <td>{{item.updateAt| dateFilter}}</td>
                        <td>{{item.author}}</td>
                        <td>{{item.status| statusFilter}}</td>
                        <td>
                            <el-button  @click="upline(item.id,item.status)">{{item.status + 1| statusFilter}}</el-button>
                            <el-button  @click="redact(item.id)">编辑</el-button>
                            <el-button  @click="eliminate(item.id)">删除</el-button> </td>
                    </tr>
                    </tbody>
                </table>
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-size="size"
                        :current-page.sync="currentPage1"
                        layout="total,sizes, prev, pager, next, jumper"
                        :total="parseInt(totalNum)">
                </el-pagination>
            </el-col>
        </el-row>
<!--        <div>-->
<!--            21321321-->
<!--            <p v-for="(item,i) in list" :key="i" v-if="i < a">{{item.text}}</p>-->
<!--        </div>-->
    </div>

</template>

<script>
    export default {

        data() {
            return {
                search: {
                    startAt: "",
                    endAt: "",
                    type: '',
                    status: '',
                    id: '',
                    page: '',
                    size: '',
                },
                // list:[
                //     { text: '学习 JavaScript' },
                //     { text: '学习 Vue' },
                //     { text: '整个牛项目' }
                // ],
                currentPage1: 1
                ,

                listInfo: [],
                totalNum: "",
                size: 10,
                sizes: "",

                typeOptions: [
                    {type: '', label: '请选择'},
                    {type: 0, label: '找首页banner'},
                    {type: 1, label: '找职位banner'},
                    {type: 2, label: '找精英banner'},
                    {type: 3, label: '行业大图'},],
                type: '',
                statusOptions: [

                    {status: '', label: '全部'},
                    {status: 1, label: '草稿'},
                    {status: 2, label: '上线'}],
                status: '',

                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{}]
                },
                endAt: '',
                startAt: '',
            };


        },
        methods: {
            request() {
                this.currentPage1 = 1;
                this.search.page = 1;
                this.seek();
            },
            seek() {
                this.search.startAt = this.startAt;
                console.log(this.startAt);
                this.search.endAt = this.endAt;
                this.search.type = this.type;
                this.search.status = this.status;
                console.log(this.search);
                this.$axios.get('/api/a/article/search', {
                    params: this.search
                    },//gte传参地址 this.search是要传的东西
                ).then(
                    (response) => {
                        console.log(response.data.data);
                        this.totalNum = response.data.data.total;
                        console.log(this);
                        parseInt(this.totalNum);
                        this.listInfo = response.data.data.articleList;
                        console.log(this.listInfo);

                    }
                );
            },

            clear() {
                this.startAt = '';
                this.endAt = '';
                this.type = '';
                this.status = '';
                this.search = '';
                this.$axios.get('/api/a/article/search', {
                    params: this.search
                    },//gte传参地址 this.search是要传的东西
                ).then(
                    (response) => {
                        console.log(response.data.data.articleList);
                        this.listInfo = response.data.data.articleList;
                        console.log(this.listInfo);
                    }
                );

            },//清空
            upline(a, b) {
                var c='';
                if (b === 1) {
                    b = 2;
                     c = "上线"
                } else if (b === 2) {
                    b = 1;
                    c="草稿"
                }

                this.$confirm(
                    '即将进行'+c+"功能"+
                    '\n' +
                    '是否执行操作？?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '操作成功!'
                    });



                    this.$axios.put('/api/a/u/article/status', {id: a, status: b},
                        {
                            transformRequest: function (obj) {//固定写法数据转换
                                var str = [];
                                for (var p in obj) {
                                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                }
                                return str.join("&");//
                            }
                        }
                    )
                        .then(
                            (response) => {
                                console.log(response);
                            }
                        );
                    this.seek();

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            },









        // upLine(a, b) {
        //     console.log(a, b);
        //
        // },//上线

        eliminate(id) {
            this.$axios.delete('/api//a/u/article/' + id, id)
                .then(
                    (response) => {
                        console.log(response);
                    }
                )
            this.seek();

        },//删除

        redact(a) {
            this.$router.push({name: 'edit', params: {id: a},});//a代表的事我们选中的呢的值
        },
        handleSizeChange(val) {//
            console.log(`每页 ${val} 条`);
            this.search.size = val;
            this.seek();
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.search.page = val;    //动态改变
            this.seek();
        },
        },


        mounted() {
            this.seek();
            // this.$axios.get('/api/a/article/search', this.search,//gte传参地址 this.search是要传的东西
            // ).then(
            //     (response) => {
            //         this.listInfo=response.data.data.articleList;
            //         console.log(this.listInfo);
            //     }
            // );
            console.log('模板编译完成4');
        },

    }
</script>

<style lang="scss">
    .block{
        padding: 10px 0 0 0 ;
        line-height: 36px;
        span{
            font-size: 14px;
        }
        input{ padding-right: 15px !important;
      }
    }
    .btn{
        float: right!important;

    }
    .el-message-box{
        display:block;
        margin:20px auto;

    }
    .article{
        position: relative;
        background: #f5f5f5;
        border: 1px solid #dddddd;
        display: flex;
        justify-content: space-between;
        margin: 10px 0 0 0;

        #add{

        }
    }
    table {width: 100%;
        border: 1px solid #dddddd;
        font-size: 13px;
        background: #ffffff;
    }

    .release{
        text-align: center;
        @media (max-width: 991px) {
            text-align: start;
        }
    }

    .style {
        table {
            border-collapse: collapse;
        }

        table > tbody > tr > td {
            padding: 16px 9px;
            line-height: 1.42857143;
            vertical-align: top;
        }
        tr:nth-child(even) {//隔行变色 方法一
            background-color:pink;
        }
    }
    .el-date-editor.el-input, .el-date-editor.el-input__inner {
        width: 100%!important;
    }
    .el-select{
        width: 100%;
    }

    .back .tac li{
        color: pink;
    }

</style>