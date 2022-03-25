//所有处理URL的函数按功能组存放在controllers目录,，app.js保持不变
const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');


const app = new Koa();

//判断当前环境是否是production环境,如果是，就使用缓存，如果不是，就关闭缓存。(在launch.json中设置)
const isProduction = process.env.NODE_ENV === 'production';

// log request URL:记录URL以及页面执行时间
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});


//处理静态文件
if(! isProduction){  //不是生产环境时
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

// parse request body:解析POST请求
app.use(bodyParser());

//add nunjucks as view:给ctx加上render()来使用Nunjucks
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// add controller:处理URL路由
app.use(controller());


app.listen(3000);
console.log('app started at port 3000...');