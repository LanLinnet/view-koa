//处理静态文件的middleware
const path = require('path');
const mime = require('mime');
//mz提供的API和Node.js的fs模块完全相同，但fs模块使用回调，而mz封装了fs对应的函数，并改为Promise
//我们就可以非常简单的用await调用mz的函数，而不需要任何回调
const fs = require('mz/fs');

/**
 *@Description:判断文件地址是否正确，并发送文件内容 
 *@Input: url: 类似 '/static/'
          dir: 类似 __dirname + '/static'
 *@Output: async函数
 *@Date: 2022-03-23 17:47:26
*/
function staticFiles(url, dir){
    return async(ctx, next)=>{
        let rpath = ctx.request.path;
        // 判断是否以指定的url开头:
        if(rpath.startsWith(url)){
            // 获取文件完整路径:
            let fp = path.join(dir, rpath.substring(url.length));
            //判断文件是否存在:
            if(await fs.exists(fp)){
               // 查找文件的mime:
               ctx.response.type = mime.lookup(rpath);
                // 读取文件内容并赋值给response.body:
               ctx.response.body= await fs.readFile(fp);
            }else {
                ctx.response.status = 404;
            }
        } else {
            await next();
        }
    };
}

module.exports = staticFiles;