const http = require('http')

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': "text/html"});
    // 상태 번호
    res.end("<p>Hello World</p>")
}).listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료")
})

//localhost: 현재 컴퓨터의 내부 주소 => 서버 개발할떄 테스트용으로 많이쓰임
// ex) localhost: 127.0.0.1 => ip 주소 (internet protocol)

//port는 서버내의 프로세스를 구분하는 번호
