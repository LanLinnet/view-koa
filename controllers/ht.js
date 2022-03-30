//async函数处理ht中的URL
module.exports = {
    'GET /ht': async(ctx, next)=>{
        ctx.render('ht.html',{
            title: 'HT Model'
        });
    }
};
