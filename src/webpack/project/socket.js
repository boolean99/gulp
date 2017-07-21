export function socketFunc(socket) {
  socket.on('test', (param) => {
    // 게시글 화면전환 웹소켓 클라이언트 사이드 이벤트
    console.log('client socket event test');
  });
}