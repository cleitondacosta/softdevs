import socketIOClient from 'socket.io-client';
import { ipAdress, port } from '../../server';

export default function useSocketIO(userId) {
  let socket;
  let error;

  console.log(`User id: ${userId}`);

  try {
    socket = socketIOClient(`http://${ipAdress}:${port}`, { query: { userId } });
  }
  catch(err) {
    error = err.message;
  }

  return { socket, error };
}
