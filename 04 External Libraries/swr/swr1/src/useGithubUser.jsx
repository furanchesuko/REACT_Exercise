import useSWR, {mutate} from 'swr';

function fetcher(url) {
  return fetch(url).then(res => res.json());
}

export function useGithubUser(username) {
    const fetchGithubUser = username ? () => `https://api.github.com/users/${username}` : null;
    const { data, error } = useSWR(fetchGithubUser, fetcher);

    function refreshUser () {
        mutate()
    }

    return { data, error, onFetchUser: fetchGithubUser, refreshUser };
}