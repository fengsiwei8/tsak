


const dateFilter= (time) => {
    if (!time) { // 当时间是null或者无效格式时我们返回空
        return ' '
    } else {
        const date = new Date(time);// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
        const dateNumFun = (num) => num < 10 ? `0${num}` : num // 使用箭头函数和三目运算以及es6字符串的简单操作。因为只有一个操作不需要{} ，目的就是数字小于10，例如9那么就加上一个0，变成09，否则就返回本身。
        // 这是es6的解构赋值。
        const [Y, M, D, h, m, s] = [
            date.getFullYear(),
            dateNumFun(date.getMonth() + 1),
            dateNumFun(date.getDate()),
            dateNumFun(date.getHours()),
            dateNumFun(date.getMinutes()),
            dateNumFun(date.getSeconds())
        ];
        return `${Y}-${M}-${D} ${h}:${m}:${s}` // 一定要注意是反引号，否则无效。
    }
};
export {dateFilter};
const industryFilter = (industry)=>{
    switch (industry) {
        case 0:industry="移动互联网";
            break;
        case 1:industry="电子商务";
            break;
        case 2:industry="企业服务";
            break;
        case 3:industry="020";
            break;
        case 4:industry="教育";
            break;
        case 5:industry="金融";
            break;
        case 6:industry="游戏";
            break;

    }
};
export {industryFilter};


const typeFilter= (type) => {
    switch (type)
    {
        case 0:type="首页";
            break;
        case 1:type="找职位";
            break;
        case 2:type="找精英";
            break;
        case 3:type="行业大图";
            break;
    }
    return type;

}
export {typeFilter};






const statusFilter= (status) => {
    switch (status)
    {
        case 0:status="";
            break;
        case 1:status="草稿";
            break;
        case 2:status="上线";
            break;
        case 3:status="草稿";
            break;
        case 4:status="上线";
            break;
        case 5:status="草稿";
            break;
    }
    return status;

}
export {statusFilter};
