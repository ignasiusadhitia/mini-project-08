import useSWR from 'swr';

import apiClient from '@services/apiClient';

const fetcher = (url) => apiClient.get(url).then((res) => res.data);

const usePosts = () => {
  const { data, error, mutate } = useSWR('/games/news', fetcher, {
    revalidateOnFocus: true,
  });

  return { data, error, mutate };
};

export default usePosts;
