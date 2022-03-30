//修改！！！
//直接放到app.js中写？
//或在app.js中通过某种方式调用upload.js
//async函数处理文件上传


// module.exports = {
//     'POST /uploadmodels': async(ctx, next)=>{
//         ctx.render('index.html',{
//             title: 'upload success'
//         });
//     }
// };

//定义async函数处理文件上传请求/uploadmodels
module.exports = {
    'POST /uploadmodels': async(ctx)=>{
       console.log(ctx.request.body);  //根据Koa文档，ctx.body等同于ctx.res.body，所以从ctx.body取出来的是空的响应报文，而不是请求报文的实体
       ctx.body = ctx.request.body;  //获取表单提交的数据
       //const file = ctx.request.files.file
       //ctx.body = {path: file.path}
    }
};
