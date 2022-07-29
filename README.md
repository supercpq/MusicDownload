# MusicDownload
nodejs调用网易云音乐的API，返回给前端，仅供学习参考
## 安装
首先拷贝vue项目`git clone https://github.com/supercpq/musicdownload-vue-.git`和本nodejs项目 <br>
**将vue项目的/src/store/musiclists.js 的第48行axios请求地址改为您的服务器域名或ip** <br>
然后运行`npm run build`将生成的 **dist** 文件夹的所有内容放入node项目的 **static** 目录下<br>
最后，运行
```
node app.js
```
即可
