
// 引入express
const express = require('express')
// 引入cors，解决跨域
const cors = require('cors')
//引入音乐查找路由
const musicRouter = require('./router/getmusic')

const app = express()
// 重新封装的res.send()
app.use(function (req, res, next) {
    // status=0为成功 status=1为失败，默认为1
    res.cc = function (err, status = 1) {
        res.send({
            //    状态
            status,
            // 状态描述，判断err是错误对象还是字符串
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})

// cors跨越
app.use(cors())
// ，配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
app.use(express.urlencoded({ extended: false }))
//注册路由
app.use('/api', musicRouter)

app.listen(3007, function () {
    console.log('api server running at http://127.0.0.1:3007')
})