//引入axios
const axios = require('axios')
//查找
exports.sent_search = (req, res) => {
    console.log(req.body.music)
    var name = encodeURI(req.body.music.toString().trim().slice(0, 20))
    var songs = [{ name: '1', id: '1', picUrl: '1' }]
    if (isNaN(name)) {
        axios.get(`https://musicdownload.vercel.app/cloudsearch?keywords=${name}`).then(
            resq => {
                songs.pop()
                resq.data.result.songs.forEach(element => {
                    var a = { name: element.name, id: element.id, picUrl: element.al.picUrl }
                    songs.push(a)
                });
                res.send({ status: 0, ifid: 0, songs })
            },
            err => {
                res.cc(`1错误:${err.message}`)
            }
        )
    } else {
        axios.get(`https://musicdownload.vercel.app/song/url?id=${name}`).then(
            resq => {
                if (resq.data.code == 200) {
                    res.send({ status: 0, ifid: 1, songsUrl: resq.data.data[0].url })
                } else {
                    res.cc(`等会再发`)
                }
            },

            err => {
                res.cc(`2错误:${err.message}`)
            }
        )
    }
}