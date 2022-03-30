//async函数处理threejs中的URL
module.exports = {
    'GET /threejs': async(ctx, next)=>{
        ctx.render('threejs.html',{
            title: 'Threejs Model'
        });
    }
};
