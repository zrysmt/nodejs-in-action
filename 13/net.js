//创建TCP服务器
//node net.js
//连接 telnet localhost 1337

var net = require('net');

net.createServer(function(socket){
	socket.write("Hello World!\r\n");
	socket.end();
}).listen(1337);

console.log("Listening on port 1337");