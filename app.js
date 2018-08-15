const koa = require('koa');
const views = require('koa-views');
const serve = require('koa-static');
const path = require('path');

const app = new koa();

app.use(views(__dirname+'/client', {map:{html: 'ejs'}}))
.use(serve(__dirname + '/client'));

app.use(async(ctx, next)=>{
    console.log('ctx', ctx.request.url);
    
    ctx.request.url === '/' &&  await ctx.render('index');

    next();
})

console.log('server listen to port 3001!');
app.listen(3001);