module.exports = {
    'GET /threejsEditor': async(ctx, next)=>{
        ctx.render('threejsEditor.html',{
            title: 'Threejs Model'
        });
    }
};