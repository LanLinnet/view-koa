//koa-multer  文件上传
const multer = require('@koa/multer');

//借助 multer.diskStorage({}) 方法，实现自定义上传目录和文件名
const storage = multer.diskStorage({
    destination:'static/models/'+new Date().getFullYear() + (new Date().getMonth()+1) + new Date().getDate(),
    // filename(ctx, file, cb){
    //     const filenameArr = file.originalname.split('.');
    //     cb(null, Date.now() + '.' +filenameArr[filenameArr.length - 1]);
    // }
    filename: function(req, file, cb){
        let type = file.originalname.split('.')[1];
        cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`)
    }
});
const upload = multer({storage});

//定义async函数处理文件上传请求/uploadmodels
module.exports = {
    'POST /uploadmodels': async(ctx) => {
       //console.log(ctx.request.body);  //根据Koa文档，ctx.body等同于ctx.res.body，所以从ctx.body取出来的是空的响应报文，而不是请求报文的实体
       //ctx.body = ctx.request.body;  //获取表单提交的数据
       upload.single('file');
       console.log(ctx.req.file);
       //ctx.body = ctx.request.body;
       ctx.body = ctx.body = {
            code: 1,
            data: ctx.file
        };
    }
};

//前端显示的文件有一些问题
//文件没有正确保存