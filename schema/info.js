// 导入joi模块，定义效验规则
const { ref, required } = require('joi')
const joi = require('joi')

const music = joi.string().required()

exports.search_music = {
    body: {
        music,
    }
}