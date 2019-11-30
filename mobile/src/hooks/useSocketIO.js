import socketIOClient from 'socket.io-client';
import { ipAdress, port } from '../../server';

export default function useSocketIO(username) {
  let socket;
  let error;

  console.log(`User id: ${username}`);

  try {
    socket = socketIOClient(`http://${ipAdress}:${port}`, { query: { username } });
  }
  catch(err) {
    error = err.message;
  }

  return { socket, error };
}
