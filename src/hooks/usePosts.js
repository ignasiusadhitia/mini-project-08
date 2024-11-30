import { useState } from 'react';

import useSWR from 'swr';

import apiClient from '@services/apiClient';

const fetcher = (url) => apiClient.get(url).then((res) => res.data);

const usePosts = (url) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data, isLoading, error, mutate } = useSWR(url, fetcher, {
    revalidateOnFocus: true,
  });

  const postData = async (dataToPost) => {
    setIsSubmitting(true);
    try {
      const response = await apiClient.post(url, dataToPost);
      mutate();
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { data, isLoading, error, mutate, postData, isSubmitting };
};

export default usePosts;
