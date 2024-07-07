import CountryCard from "./CountryCard/CountryCard";
import { useState, useEffect } from "react";
import axios from '../services/axios';

type Data =  {
    country: {
        name: string;
        population: number;
        region: string;
        capital: string;
        flag: string;
    };
}

export default function Main(){
    const [data, setData] = useState<Data[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get<Data[]>('/data.json')
          .then(response => {
            setData(response.data);
            console.log(response);
          })
          .catch(error => {
            setError(error.message);
          });
      }, []);
      console.log(error);
      console.log(data);
    return(
        <main>
            <CountryCard/>
        </main>
    )
}