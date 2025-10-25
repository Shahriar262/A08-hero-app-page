import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../appsData.json")
      .then((data) => {
        setTimeout(() => setApps(data.data), 800)
      })
      .catch((err) => setError(err))
      .finally(() => setTimeout(() => setLoading(false), 800))
  }, []);

  return { apps, loading, error };
};

export default useApps;
