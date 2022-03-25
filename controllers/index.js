//async函数处理首页URL
module.exports = {
    'GET /': async(ctx, next)=>{
        ctx.render('index.html',{
            title: 'Welcome'
        });
    }
};