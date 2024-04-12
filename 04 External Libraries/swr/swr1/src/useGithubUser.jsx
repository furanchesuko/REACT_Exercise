import useSWR, { mutate } from 'swr';

function fetcher(url) {
  return fetch(url).then(res => res.json());
}

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR((username ? `https://api.github.com/users/${username}` : null), fetcher);

  function refreshUser() {
    mutate();
  }

  return { data, error, refreshUser };
}