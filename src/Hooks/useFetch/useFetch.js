import { useEffect, useState } from "react";
import axios from "axios";

function useFetch (url){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // API'den veriyi çekmek için Axios'u kullanıyoruz
        axios.get(url)
          .then(response => {
            // API'den gelen veriyi işliyoruz
            setData(response.data);
            setLoading(false);
          })
          .catch(err => {
            setError(err.message);
            setLoading(false);
          });
      }, []);

      return {error, loading, data}
    
}

export default useFetch;