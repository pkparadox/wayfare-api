import http from 'http';
import SocketIo from 'socket.io';
import { each } from 'lodash';
import Rooms from './rooms';
import ClientEvents from './clientEvents';
import log from './lib/log';


const server = http.createServer();
const io = SocketIo(server);
const rooms = new Rooms(io);


io.on('connection', (client) => {
  client.removeAllListeners();
  console.log('client connected');
  const { roomId } = client.handshake.query;
  const room = rooms.findOrCreateRoom(roomId || 'default');
  client.join(room.get('id'));

  each(ClientEvents, (handler, event) => {
    client.on(event, handler.bind(null, { io, client, room }));
  });
});

const PORT = process.env.PORT || 4155;
server.listen(PORT, () => {
  console.log(`socket-server listening on port ${PORT}`);
})