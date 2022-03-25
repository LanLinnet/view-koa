//async函数处理base模板中的URL
module.exports = {
    'GET /threejs': async(ctx, next)=>{
        ctx.render('threejs.html',{
            title: 'Threejs Model'
        });
    }
};