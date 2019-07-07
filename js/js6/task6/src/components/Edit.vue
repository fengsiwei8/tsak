<template>
    <div class="edit">

          <el-row>
            <el-col :md="24" class="new">
                新增Article
            </el-col>
        </el-row>
        <form>
        <el-row class="commonality">
            <el-col :md="6" class="public">标题列表</el-col>
            <el-col :md="18" class="public ">
                <el-input v-model="search.title" placeholder="请输入内容">
                </el-input>
            </el-col>
        </el-row>
        <el-row class="commonality">
            <el-col :md="6" class="public">
                类&emsp;&emsp;型
            </el-col>
            <el-col :md="18">
                <el-col :md="6">
                    <el-select v-model="search.type" placeholder="全部">
                        <el-option
                                v-for="item in typeOptions"
                                :key="item.type"
                                :label="item.label"
                                :value="item.type">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :md="6" class="trade">
                    <el-select v-model="search.industry" placeholder="请选择" v-show="search.type==3">
                        <el-option v-for="item in typeIndustry"
                                   :key="item.industry"
                                   :label="item.label"
                                   :value="item.industry">
                        </el-option>
                    </el-select>

                </el-col>
            </el-col>
        </el-row>
        <el-row class="commonality">
            <el-col :md="6" class="public">跳转链接</el-col>
            <el-col :md="18">
                <el-input v-model="search.url" placeholder="请输入内容">
                </el-input>
            </el-col>
        </el-row>
        <el-row class="commonality">
            <el-col :md="6" class="public">说&emsp;&emsp;明</el-col>
            <el-col :md="18">

<!--                第一步-->
                <div id="editorElem"  style="text-align:left">

            </div>


<!--                <el-input v-model="search.content" placeholder="请输入内容">-->
<!--                </el-input>-->
            </el-col>
        </el-row>
        <el-row class="commonality">
            <el-col :md="6" class="public">配&emsp;&emsp;图</el-col>
            <el-col :md="18">
                <!--
                -->
                <input type="file"  @change="changepic()" accept="image/jpeg,image/jpg,image/png"  ref="clearFile">
                <img :src="search.img" >
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>图片命</th>
                            <th>文件大小</th>
                            <th>&ensp;&ensp;进度</th>
                            <th>操作&ensp;&ensp;&ensp;</th>
                            <th>操作&ensp;&ensp;&ensp;</th>
                        </tr>
                        </thead>
                        <tbody >
                        <tr style="text-align: center;">
                            <td>{{imgListInfo.name}}</td>
                            <td>{{imgListInfo.size }}</td>
                            <td>
                                    <div class="progress" v-show="imgListInfo.name !==''">
                                    <div class="progressBar" v-show="imgListInfo.name && search.img !==''">
                                    </div>
                                </div>
                            </td>
                            <!--                        <td> </td>-->
                            <td style="min-width: 117px">
                                <i class="el-icon-close" v-show="!uploadImgTip && search.img !=='' && id !==undefined  "></i>
                                <i class="el-icon-check" v-show="uploadImgTip && search.img !=='' "></i>
                            </td>

                            <td v-show="imgListInfo.name !=='' ">
                                <el-button  size="small" type="success" icon="el-icon-upload" @click="uploadImg()" :disabled="search.img !==''">上传</el-button>
                                <el-button  size="small" type="danger" icon="el-icon-delete" @click="deleteImg()">删除</el-button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>


                <el-button type="success"  @click="upLine"
                           :disabled="search.title ===''||search.img ===''||search.content===''|| search.type ===''|| search.url ===''">
                    立即上线</el-button>
                <el-button type="success">存为草稿</el-button>
                <el-button id="cancel" @click="cancel()">取消</el-button>

            </el-col>
        </el-row>
        </form>
    </div>
</template>

<script>
// <!--    第二步-->
    import E from 'wangeditor'
    export default {
        data() {
            return {
                search: {
                    title: '',
                    type: '',
                    content: '',
                    url: "",
                    img: "",
                    status: "",
                    createAt:"",
                    industry:"",
                },
                typeOptions: [
                    {type:'', label: '请选择'},
                    {type: 0, label: '找首页banner'},
                    {type: 1, label: '找职位banner'},
                    {type: 2, label: '找精英banner'},
                    {type: 3, label: '行业大图'},],
                typeIndustry: [
                    {industry: '', label: '请选择'},
                    {industry: 0, label: '移动互联网'},
                    {industry: 1, label: '电子商务'},
                    {industry: 2, label: '企业服务'},
                    {industry: 3, label: '020'},
                    {industry: 4, label: '教育'},
                    {industry: 5, label: '金融'},
                    {industry: 6, label: '游戏'},
                ],

                imgListInfo: {name: '', size: '',},
                file: '',
                img: "",
                // imgListTitle:this.Select.imgListTitle,
                uploadImgInfo: null,
                uploadImgTip: '',

                id:undefined,

                editor:undefined,
            }




        },
        methods: {

            changepic() {
                var _this = this;
                _this.search.img = '';//清空上传后显示的预览图片，即在第一次选择和上传后，再选择一个文件时，上图片预览为空。
                var file = event.target.files[0];  //获得此次点击选择的文件
                console.log(file);
                //用于获取文件名称和尺寸
                _this.imgListInfo.name = file.name;
                console.log(_this.imgListInfo.name);
                _this.imgListInfo.size = (file.size / 1024000).toFixed(2) + 'MB';
                //用于上传
                let imgFormData = new FormData();
                imgFormData.append('file', file); //通过append向form对象添加数据
                _this.uploadImgInfo = imgFormData;
                console.log(file);
                console.log(imgFormData);
                console.log(imgFormData.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
                //file是请求的字段
            },
            uploadImg() {
                this.$axios.post('/api/a/u/img/task', this.uploadImgInfo,
                    {headers: {'Content-Type': 'multipart/form-data'}},
                    // {transformRequest: function(obj) {
                    //         var str = [];
                    //         for(var p in obj){
                    //             str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    //         }
                    //         return str.join("&");
                    //     }
                    // },
                ).then(
                    (response) => {
                        console.log(response.data.data.url);
                        if (response.data.code == 0) {
                            this.search.img = response.data.data.url;
                            this.uploadImgTip = true
                        } else {
                            this.uploadImgTip = false
                        }
                    }
                );

            },
            upLine() {
                // this.search.title = this.title;
                // this.search.type = this.type;
                // this.search.content = this.content;
                // this.search.url = this.url;
                // this.search.img = this.img;
                this.search.status = 2;//上线的状态是2 我直接给它传了个2
                console.log(this.search);
                this.id=this.$route.params.id;
                let id = this.$route.params.id;//如果是从编辑页面进入的是有值的反之没有
                console.log(id);
                var data = this.search;
                if(id===undefined||id===null){//判断是从哪里进来的如果ID是空的呢么就是从新增 反之则是编辑
                this.$axios.post('/api/a/u/article', data,
                    // {headers: { 'Content-Type': 'multipart/form-data' }}
                    {
                        transformRequest: function (obj) {//固定写法数据转换
                            var str = [];
                            for (var p in obj) {
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            }
                            return str.join("&");//
                        }

                    },)
                // {
                //     transformRequest: function (obj) {//固定写法数据转换
                //         var str = [];
                //         for (var p in obj) {
                //             str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                //         }
                //         return str.join("&");//
                //     }
                // }
                    .then((response) => {
                        console.log(response);
                        this.$router.push('/back/list');

                    })//返回函数箭头函

               } else {//这是从编辑页面进入的
                    this.$axios.put('/api/a/u/article/'+id,data,
                        {
                        transformRequest: function (obj) {//固定写法数据转换
                            var str = [];
                            for (var p in obj) {
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            }
                            return str.join("&");//
                        }
                    }
                        ) .then((response) => {
                        console.log(response);
                        this.$router.push('/back/list');

                    })//返回函数箭头函



                }
                },
            deleteImg() {
                this.$refs.clearFile.value = '';
                // console.log(this.$refs.clearFile.value);
                this.search.img = '';
                this.imgListInfo.name = '';
                this.imgListInfo.size = '';
            },
            cancel(){
                this.$router.push('/back/list');
            },
            start:function() {
                let id = this.$route.params.id;
                if (id === undefined || id === null){
                    console.log('新增');
                } else {
                    // this.$axios.get('/api /a/article/'+id,id,
                    this.$axios.get('/api/a/article/'+id,{prams:{id:id}},
                        console.log(id),
                    ).then(
                        (response) => {
                            console.log(response);
                            // this.search = response.data.data.article;//俩种方法1 吧返回来的数据的artucle赋值给这个数组，然后双向绑定一下这个数组v-model search.title
                            // this.type = response.data.data.article.type;//方法2 直接让type=response.data.data.article.type;返回来的数据type然后绑定他
                            console.log(response.data.data.article.id);
                                // this.compile = response.data.data.article;

                                console.log(response.data.data.article);
                                this.search = response.data.data.article;//俩种方法1 吧返回来的数据的artucle赋值给这个数组，然后双向绑定一下这个数组v-model search.title

                            this.editor.txt.html(this.search.content);
                            console.log(this.search);

                            // this.type = response.data.data.article.type;//方法2 直接让type=response.data.data.article.type;返回来的数据type然后绑定他
                                // this.content= response.data.data.article.content;
                                // this.search.createAt=response.data.data.article.createAt;
                        });

                }


            },

        },
        mounted() {

            //第三步
            this.editor = new E('#editorElem');
            this.editor.customConfig.onchange = (html) => {
                this.search.content = html
            };
            this.editor.create();









            this.start();
            //    console.log('从哪路拿值params', this.$route.params);
            //    console.log(this.$route.params.id);
            //    var id = this.$route.params.id;
            //    // this.$axios.get('/api /a/article/'+id,id,
            // this.$axios.get('/api/a/article/'+id,{prams:{id:id}},
            //    ).then(
            //        (response) => {
            //            console.log(response);
            //            // this.search = response.data.data.article;//俩种方法1 吧返回来的数据的artucle赋值给这个数组，然后双向绑定一下这个数组v-model search.title
            //            // this.type = response.data.data.article.type;//方法2 直接让type=response.data.data.article.type;返回来的数据type然后绑定他
            //            console.log(response.data.data.article.id);
            //            if(response.data.data.article.id!==''){
            //                // this.compile = response.data.data.article;
            //
            //                // console.log(this.compile);
            //                this.search = response.data.data.article;//俩种方法1 吧返回来的数据的artucle赋值给这个数组，然后双向绑定一下这个数组v-model search.title
            //                this.type = response.data.data.article.type;//方法2 直接让type=response.data.data.article.type;返回来的数据type然后绑定他
            //                this.content= response.data.data.article.content;
            //            }
            //        });

        }
    }
</script>

<style lang="scss">
   #editorElem{

   }
    .edit{
        border: 1px solid #dddddd;
    }
    .new{
        padding: 5px 0 5px 15px;
        border: 1px solid #dddddd;
    }
    .commonality{
        padding: 10px 10px;
        background: #ffffff;
        .public{
            line-height: 40px;
            text-align: center;
        }
        #cancel{
            float: right;
        }
    }
    img{
        line-height: normal;
        display: block;
        max-width: 100%;
        height: auto;
    }
.trade{
    margin: 0 0 0 20px;
}
.img-responsive{
        display: block;
        max-width: 100%;
        height: auto;
    }
    /*#file2{*/
    /*    display: none;*/
    /*}*/
    .el-button{
        padding: 5px 5px;
    }
    table>thead>tr>th{
        border-bottom: 2px solid #ddd;
    }
    table {
        border: none;
        border-collapse: collapse;
        margin-bottom: 20px;
    }
    td{
        vertical-align: middle !important;
        max-width: 160px;
        word-wrap: break-word;
        word-break: break-all;
    }
    .progress{
        min-width: 7px;
        height: 16px;
        overflow: hidden;
        background-color: #f5f5f5;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
        /* box-shadow: inset 0 1px 2px rgba(0,0,0,.1); */
    .progressBar{
            /*min-width: 30px;*/
            height: 100%;
            font-size: 12px;
            line-height: 20px;
            color: #fff;
            text-align: center;
            background-color: #337ab7;
            -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
            box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
            -webkit-transition: width 1.6s ease;
            -o-transition: width 1.6s ease;}
    }
</style>