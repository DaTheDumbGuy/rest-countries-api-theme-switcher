import { useState, useEffect } from "react";
import { Country } from "../../types/types";
import { getCountry } from "../../services/api";
import CountryCard from "./CountryCard/CountryCard";

export default function Main() {
    const [data, setData] = useState<Country[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getCountry()
          .then(data => {
            setData(data);
          })
          .catch(error => {
            setError(error.message);
          });
    }, []);

    console.log(error);
    console.log(data);

    return (
        <main>
            {error && <p>{error}</p>}
            {data.map((country, index) => (
                <CountryCard key={index} country={country} />
            ))}
        </main>
    );
}
