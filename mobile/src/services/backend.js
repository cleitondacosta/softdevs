import axios from 'axios';
import { ipAdress, port } from '../../server';

async function loginAsAny(login, route) {
  const api = axios.create({ baseURL: `http://${ipAdress}:${port}` });

  try {
    const response = await api.post(route, { login });
    return response.data;
  }
  catch(err) {
    throw err;
  }
}

export async function loginAsDev(login) {
  try {
    return await loginAsAny(login, '/dev');
  }
  catch(err) {
    throw err;
  }
}

export async function loginAsCompany(login) {
  try {
    return await loginAsAny(login, '/company');
  }
  catch(err) {
    throw err;
  }
}
