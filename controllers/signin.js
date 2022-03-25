//定义async函数处理登录请求/signin
module.exports = {
    'POST /signin': async(ctx, next)=>{
        var 
            email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';
        if(email==='admin@example.com' && password === '123456'){
            console.log('signin ok!');
            //登录成功
            ctx.render('signin-ok.html',{
                title: 'Sign In OK',
                name: 'Mr Node'
            });
        }else{
            console.log('signin failed!');
            //登录失败
            ctx.render('signin-failed.html',{
                title: 'Sign In Failed'
            });
        }
    }
};