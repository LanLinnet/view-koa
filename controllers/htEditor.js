//async函数处理ht中的URL
module.exports = {
    'GET /htEditor': async(ctx, next)=>{
        ctx.render('htEditor.html',{
            title: 'HT Editor'
        });
    }
};