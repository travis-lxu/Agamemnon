import http, { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse): void => {
  res.writeHead(200);
  res.end('hello, world');
});


if (require.main === module) {
  server.listen(3000, () => {
    console.log('server created');
  });
}

export default server;
