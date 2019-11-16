import { useState, useEffect } from 'react';
import { getRepos } from '../services/githubUserUtils';

export default function useRepos(dev) {
  const [repositories, setRepositories] = useState([]);
  const [repoError, setRepoError] = useState(null);

  useEffect(() => {
    async function fetchRepositories() {
      const repos = await getRepos(dev.login);
      const reposWithPublicInfo = addPublicInformation(repos, dev.reposMarkedAsPublic);

      if(repos)
        setRepositories(reposWithPublicInfo);
      else
        setRepoError(`Could not fetch repositories from github for ${username}`);
    }

    fetchRepositories();
  }, []);


  return { repositories, repoError };
}

function addPublicInformation(repos, reposMarkedAsPublic) {
  const newRepos = repos.map(repo => {
    repo.isMarkedAsPublic = reposMarkedAsPublic.includes(repo.id);
    return repo;
  });

  return newRepos;
}
