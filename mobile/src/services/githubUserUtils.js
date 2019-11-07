import api from './githubApi';

async function get_response_data(route) {
  try {
    const response = await api.get(route);
    return response.data;
  }
  catch(err) {
    return null;
  }
}

export async function getUser(username) {
  return await get_response_data(`/users/${username}`);
}

export async function getRepos(username) {
  return await get_response_data(`/users/${username}/repos`);
}
