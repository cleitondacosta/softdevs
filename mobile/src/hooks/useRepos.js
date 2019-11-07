import { useState, useEffect } from 'react';
import { getRepos } from '../services/githubUserUtils';

export default function useRepos(username) {
  const [repositories, setRepositories] = useState([]);
  const [repoError, setRepoError] = useState(null);

  useEffect(() => {
    async function fetchRepositories() {
      const repos = await getRepos(username);

      if(repos)
        setRepositories(repos);
      else
        setRepoError(`Could not fetch repositories from github for ${username}`);
    }

    fetchRepositories();
  }, []);


  return { repositories, repoError };
}
