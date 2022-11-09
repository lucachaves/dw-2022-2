import express from 'express';
import morgan from 'morgan';
import { createServer } from 'http';
import { Server } from 'socket.io';

import { loadSocket } from './lib/socket.js';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(morgan('tiny'));

app.use(express.json());

app.use(express.static('public'));

app.post('/terminal', async (req, res) => {
  const host = req.body;

  await loadSocket(io, host);

  res.json({ message: 'terminal opened' });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});