import { useState, useEffect } from "react";
// API
import API from "../API";

export const useUserFetch = userEmail => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(false);

        const user = await API.getUser(userEmail);

        setState(...user);

        setLoading(false);

      } catch (error) {
        setError(true);
      }
    }

    fetchUser()
  }, [userEmail]);

  return { state, loading, error };
}