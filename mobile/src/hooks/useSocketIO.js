import socketIOClient from 'socket.io-client';
import { ipAdress, port } from '../../server';

export default function useSocketIO() {
  let socket;
  let error;

  try {
    socket = socketIOClient(`http://${ipAdress}:${port}`);
  }
  catch(err) {
    error = err.message;
  }

  return { socket, error };
}
