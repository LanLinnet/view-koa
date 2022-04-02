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
    'POST /uploadmodels': async(ctx, next) => {
       //console.log(ctx.request.body);  //根据Koa文档，ctx.body等同于ctx.res.body，所以从ctx.body取出来的是空的响应报文，而不是请求报文的实体
       //ctx.body = ctx.request.body;  //获取表单提交的数据
       //upload.single('file');
       let err = await upload.single('file')(ctx, next)
                    .then(res=>res)
                    .catch(err=>err)
        if(err){
            ctx.body = {
            code:0,
            msg : err.message
            }
        }else{
            ctx.body = {
            code:1,
            data:ctx.file
            }
        }
    }
};