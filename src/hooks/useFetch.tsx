import { useEffect, useState, useCallback } from "react";
import { SuccessResponse } from "../api-response";

interface UseFetchResult<T> {
  data: T | undefined;
  loading: boolean;
  error: string;
  fetchData: (query?: URLSearchParams)=> void;
}

export default function useFetch<T = unknown>({url, queryParams = '', shouldLazyFetch = false}: {url: string; queryParams?: string; shouldLazyFetch?: boolean}): UseFetchResult<T> {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
 //avoided creating abortController ref for now

 const fetchData = useCallback(async (queryParam?: URLSearchParams) => {
      console.log('fetching...')
      setLoading(true);
      setError("");
      try {
        const requestUrl = new URL(url);
        if (queryParam) {
          queryParam.forEach((value, key) => requestUrl.searchParams.set(key, value));
        } else if (queryParams) {
          new URLSearchParams(queryParams).forEach((value, key) => requestUrl.searchParams.set(key, value));
        }
        const response = await fetch(requestUrl);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const result: SuccessResponse<T> = await response.json();
        console.log('data from fetching', result.data)
        setData(result.data);
      } catch (err) {
        console.log('error fetching: ', err)
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    }, [url, queryParams]);
  
  useEffect(() => {    
    if(shouldLazyFetch) return;
    fetchData();
  }, [url]);

  return { data, loading, error, fetchData };
}