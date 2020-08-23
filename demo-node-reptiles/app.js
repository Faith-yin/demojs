/*
 * @Date: 2020-07-24 16:52:31
 * @information: 抓取百度热点新闻模块
 */ 
// 搭建本地服务所用
const express = require('express')
// 请求接口所用
const superagent = require('superagent')
// 使用cheerio模块的cherrio.load()方法，将HTMLdocument作为参数传入函数以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素
const cheerio = require('cheerio')
// 调用文件的模块
const fs = require('fs')


let uid = 0
let url = `http://news.baidu.com/` //接口
let hotNews = []  //热点新闻


/**
 * 请求接口
 */
superagent.get(url).end((err, res) => {
  if(err) {
    console.log('请求失败', err)
  }else {
    // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res.text中
    console.log('请求成功！')
    hotNews = getHotNews(res)
  }
})

/**
 * 获取数据
 */
let getHotNews = (val) => {
  let data = []

  let $ = cheerio.load(val.text)
  $('div#pane-news ul li a').each((idx, ele) => {
    // cherrio中$('selector').each()用来遍历所有匹配到的DOM元素
    // 参数idx是当前遍历的元素的索引，ele就是当前便利的DOM元素
    let news = {
      id: ++uid,
      title: $(ele).text(), // 获取新闻标题
      href: $(ele).attr('href') // 获取新闻网页链接
    }
    // 存入最终结果数组
    data.push(news)
  })
  console.log('保存成功！')
  return data
}




/**
 * 启动本地服务
 */
let app = express()

let server = app.listen(3000, () => {
  let host = server.address().address
  let port = server.address().port
  console.log(`服务启动了:http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send(hotNews)
})


/**
 * 数据保存至本地
 */
setTimeout(() => {
  // 创建写入文件(会覆盖原有内容)
  fs.writeFile('./db.json', JSON.stringify(hotNews), (err) => {
    if(err) {
      console.log('写入失败')
    }else {
      console.log('写入成功')
    }
  })

  // 读取文件
  fs.readFile('./db.json', (err, res) => {
    if(err) {
      console.log('读取文件失败',err)
    }else {
      // console.log('读取：',res.toString())
      console.log('读取文件完成')
    }
  })

}, 1000)



















