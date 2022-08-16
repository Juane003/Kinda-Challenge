import { useState, useEffect } from "react";
import { getData } from "../api";

const useFetchData = (URL) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData(URL);
      setData(fetchedData);
    }                                 
    fetchData();
  }, []);

  return { data };
}

export { useFetchData };