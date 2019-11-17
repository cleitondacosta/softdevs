import { useState, useEffect } from 'react';
import { getDevs } from '../services/backend';
import { getUser } from '../services/githubUserUtils';

export default function useDevs() {
  const [devs, setDevs] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    async function fetchDevs() {
      try {
        const devsFromBackend = await getDevs();
        const devsFromGithub = [];

        for(let backendDev of devsFromBackend)
          devsFromGithub.push(await getUser(backendDev.login));

        setDevs(devsFromGithub);
      }
      catch(err) {
        setFetchError(err.message);
      }
    }

    fetchDevs();
  }, []);

  return { devs, fetchError };
}
