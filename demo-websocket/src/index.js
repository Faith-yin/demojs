/*
 * @Date: 2020-07-27 14:36:12
 * @information: 服务端
 */ 

const WebSocket = require('ws') // 导入ws模块
const WebSocketServer = WebSocket.Server // 引用Server类
const wss = new WebSocketServer({port: 3000}) // 实例化：端口


wss.on('connection', (ws) => {
  // 接收客户端数据
  ws.on('message', (message) => {
    message = JSON.parse(message)
    if(message.type == 'name') {
      console.log('有用户上线啦:', message.data)
      ws.username = message.data || '未知用户'
      return;
    }
    wss.clients.forEach(client => {
      // 发送消息
      // console.log('客户端发过来消息啦：',ws.username, message.data, message.time)
      client.send(JSON.stringify({
        name: ws.username,
        data: message.data,
        time: message.time
      }))
    })
  })
  // 关闭断开的客户端
  ws.on('close', () => {
    console.log('有客户端断开啦')
  })
})





