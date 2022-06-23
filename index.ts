import { httpServer } from './src/http_server';
import { WebSocketServer } from 'ws';
import { parseCommand } from './src/modules/parse-command';
import { isString } from './src/utils/is-string';

const HTTP_PORT = 3000;

console.log(`Start static http-server on the ${HTTP_PORT} port!`);
console.log(`Open link http://localhost:${HTTP_PORT}/`);
httpServer.listen(HTTP_PORT);

const WS_PORT = 8080;

const websocketServer = new WebSocketServer({
  port: WS_PORT,
});

websocketServer.on('connection', (ws) => {
  ws.on('message', async (rawData, isBinary) => {
    console.log('received: %s', rawData);
    const command: string = '' + rawData;
    const data = await parseCommand(command);

    if (isString(data)) {
      ws.send(`${data}\0`);
    }
  });
});
