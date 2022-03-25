//Nunjucks模板引擎
const nunjucks = require('nunjucks');

function createEnv(path, opts){
    var
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        //变量evn表示Nunjucks模板引擎对象
        env = new nunjucks.Environment(
            //加载器是一个对象，从资源（如文件系统或网络）中加载模板，FileSystemLoader为内置的加载器,只在 node 端可用
            //new FileSystemLoader([searchPaths], [opt])
            //opt 为一个对象，包含如下属性：
            //watch - 如果为 true，当文件系统上的模板变化了，系统会自动更新他。使用前请确保已安装可选依赖 chokidar。
            //noCache - 如果为 true，不使用缓存，模板每次都会重新编译。
            new nunjucks.FileSystemLoader(path, {
                //给每个参数加上默认值
                noCache: noCache,
                watch: watch,
            }),{
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            }
        );
    if(opts.filters){
        for(var f in opts.filters){
            //添加自定义的过滤器,第一个参数为目标元素，剩下的参数为传入过滤器的参数
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

//Template 是一个模板编译后的对象，然后进行渲染
function templating(path, opts){
    //创建Nunjucks的env对象
    var env = createEnv(path, opts);
    return async(ctx, next)=>{
        //给ctx绑定render函数,render渲染模板
        ctx.render = function(view, model){
            //把render后的内容赋值给response.body
            ctx.response.body = env.render(view, Object.assign({}, ctx.state || {}, model || {}));
            //设置Content-Type
            ctx.response.type = 'text/html';
        };
        //继续处理请求
        await next();
    };
}

module.exports = templating;