const { wordcloud } = require('../controllers/wordcloud')

const router = require('koa-router')()
const routerPrefix = '/api'

// 访问后台接口根路径,返回欢迎词语
router.get('/', (ctx, next) => {
    ctx.body = 'wordcloud';
})

// 获取词云借口
router.get(`${routerPrefix}/wordcloud`, wordcloud)

// 所有未匹配的路由返回404状态
router.all('(.*)', (ctx, next) => {
    console.log(111, ctx.request)
    ctx.response.status = 404;
    return ctx.response.message = 'not match url.'
})

module.exports = router