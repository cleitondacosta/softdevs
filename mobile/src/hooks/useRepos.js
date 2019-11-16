import { useState, useEffect } from 'react';
import { getRepos } from '../services/githubUserUtils';
import { getDev } from '../services/backend';
import { updateReposMarkedAsPublic } from '../services/backend';

export default function useRepos(dev) {
  const [repositories, setRepositories] = useState([]);
  const [repoError, setRepoError] = useState(null);

  function handleRepoToggle(repoToggled, value) {
    let newReposMarkedAsPublic = [];

    setRepositories(repositories.map(repo => {
      if(repo.id === repoToggled.id) {
        repo.isMarkedAsPublic = value;
      }

      if(repo.isMarkedAsPublic)
        newReposMarkedAsPublic.push(repo.id);

      return repo;
    }));

    try {
      updateReposMarkedAsPublic(dev.login, newReposMarkedAsPublic);
    } 
    catch(err) {
      setRepoError(
        `Could not update repositories state: ${err.message}. `
        + "Try logging in again."
      );
    }
  }

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const repos = await getRepos(dev.login);
        const reposWithPublicInfo = await addPublicInformation(repos, dev.login);

        if(repos)
          setRepositories(reposWithPublicInfo);
        else
          setRepoError(`Could not fetch repositories from github for ${username}`);
      }
      catch(err) {
        setRepoError(`${err.message}`);
      }
    }

    fetchRepositories();
  }, []);


  return { repositories, handleRepoToggle, repoError };
}

async function addPublicInformation(repos, login) {
  try {
    const { reposMarkedAsPublic } = await getDev(login);

    const newRepos = repos.map(repo => {
      repo.isMarkedAsPublic = reposMarkedAsPublic.includes(repo.id);
      return repo;
    });

    return newRepos;
  }
  catch(err) {
    throw err;
  }
}
