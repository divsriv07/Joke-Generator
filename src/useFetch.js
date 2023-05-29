/*

// Complete this hook
const useFetch = () => {
  // Function to get joke
  const getJoke = async () => {};
};

export default useFetch;
*/

import { useState, useEffect } from "react";

const useFetch = () => {
  const url = "https://api.chucknorris.io/jokes/random?category=dev";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const jokeData = await response.json();
        setData(jokeData);
      } else {
        setError("Something went wrong");
      }
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return { data, loading, error, fetchJoke };
};

export default useFetch;

