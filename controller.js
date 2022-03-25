const fs = require('fs');

function addMapping(router, mapping) {
    for (var url in mapping) {
       // 如果url类似"GET xxx":
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
          // 如果url类似"POST xxx":
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        }else if (url.startsWith('PUT ')) {
          // 如果url类似"PUT xxx":
            var path = url.substring(4);
            router.put(path, mapping[url]);
            console.log(`register URL mapping: PUT ${path}`);
        }else if (url.startsWith('DELETE ')) {
          // 如果url类似"DELETE xxx":
            var path = url.substring(7);
            router.del(path, mapping[url]);
            console.log(`register URL mapping: DELETE ${path}`);
        }else {
          // 无效的URL:
            console.log(`invalid URL: ${url}`);
        }
    }
  }
  
  // 先导入fs模块，然后用readdirSync列出文件
  // 这里可以用sync是因为启动时只运行一次，不存在性能问题:
function addControllers(router, dir) {
    // 过滤出.js文件、处理每个js文件:
    fs.readdirSync(__dirname+'/'+dir).filter((f) => {
        return f.endsWith('.js');
    }).forEach ((f)=>{
        console.log(`process controller: ${f}...`);
        // 导入js文件:
        let mapping = require(__dirname + '/' + dir + '/' + f);
        addMapping(router, mapping);
    });
}

module.exports = function (dir) {
    let
        controllers_dir = dir || 'controllers', // 如果不传参数，扫描目录默认为'controllers'
        router = require('koa-router')();
    addControllers(router, controllers_dir);
    return router.routes();
};
