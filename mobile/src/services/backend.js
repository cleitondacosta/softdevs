import axios from 'axios';
import { ipAdress, port } from '../../server';

const api = axios.create({ baseURL: `http://${ipAdress}:${port}` });

async function loginAsAny(login, route) {
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

export async function updateReposMarkedAsPublic(login, newReposMarkedAsPublic) {
  try {
    await api.put(
      '/dev', 
      { reposMarkedAsPublic: newReposMarkedAsPublic }, 
      { headers: { user: login }},
    );
  }
  catch(err) {
    throw err;
  }
}

export async function getDev(login) {
  try {
    const response = await api.get(`/dev/${login}`);
    return response.data;
  }
  catch(err) {
    throw err;
  }
}

export async function getDevs() {
  try {
    const response = await api.get('/devs');
    return response.data;
  }
  catch(err) {
    throw err;
  }
}
