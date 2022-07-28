const express = require('express')
//导入查找处理函数
const getmusic_handler = require('../router_handler/getmusic')
//导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
//导入规则对象
const { search_music } = require('../schema/info')

//创建路由实例
const router = express.Router()

//判断by name还是by id
router.post('/search', expressJoi(search_music), getmusic_handler.sent_search)

//向外暴露
module.exports = router