import { useState, useEffect } from 'react';
import { getRepos } from '../services/githubUserUtils';
import { getDev } from '../services/backend';

export default function usePublicRepos(user) {
  const [repositories, setRepositories] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const repos = await getRepos(user);
        const { reposMarkedAsPublic } = await getDev(user);

        setRepositories(
          repos.filter(repo => reposMarkedAsPublic.includes(repo.id))
        );
      }
      catch(err) {
        setFetchError(err.message);
      }
    }

    fetchRepos();
  }, []);

  return { repositories, fetchError };
}
