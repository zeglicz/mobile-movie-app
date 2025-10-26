import { useEffect, useState } from 'react';

interface UseFetchReturn<T> {
  data: T | undefined;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
  reset: () => void;
}

function useFetch<T>(
  fetchFunction: () => Promise<T>,
  autoFetch = true,
): UseFetchReturn<T> {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  async function fetchData() {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setData(undefined);
    setLoading(false);
    setError(null);
  }

  useEffect(() => {
    if (autoFetch) fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData, reset };
}

export default useFetch;
