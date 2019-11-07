import api from './githubApi';

export async function getUser(username) {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  }
  catch(err) {
    return null;
  }
}
