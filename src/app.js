const Koa = require('koa')
const Router = require('koa-router')
const json = require('koa-json')

const app = new Koa()
const mainRoutes = new Router()

mainRoutes.get('/', async ( ctx )=>{
  ctx.response.body = '写代码很快乐！';
})
mainRoutes.get('/api/options', async ( ctx )=>{
  ctx.response.body = {
    sexOpts: [
      { text: '男', value: 0 }, 
      { text: '女', value: 1 }, 
    ]
  };
})
mainRoutes.get('*', async ( ctx )=>{
  ctx.response.body = '没有找到页面！';
})
app.use(json());
app.use(mainRoutes.routes())
app.listen(3000)