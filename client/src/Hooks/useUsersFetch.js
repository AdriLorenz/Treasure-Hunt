import { useState, useEffect } from "react";
// API
import API from "../API";

const initialState = { results: [] }


export const useUsersFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchUsers = async () => {
    try {
      setError(false);
      setLoading(true);

      const users = await API.getUsers();

      if (users) {
        setState(prev => ({
          ...users,
          results:
            [...users]
        }))
      }

    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    setState(initialState);
    fetchUsers();
  }, []);

  return { state, loading, error };

}