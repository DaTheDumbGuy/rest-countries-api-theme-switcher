import { useState, useEffect } from "react";
import { Country } from "../../types/types";
import { getCountry } from "../../services/api";
import CountryCard from "./CountryCard/CountryCard";
import SearchFilter from "./SearchFilter/SearchFilter";
import styles from './main.module.scss';
export default function Main() {
    const [data, setData] = useState<Country[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [filteredData, setFilteredData] = useState<Country[]>([]);

    useEffect(() => {
        getCountry()
          .then(data => {
            setData(data);
            setFilteredData(data); // Initialize filtered data
          })
          .catch(error => {
            setError(error.message);
          });
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value.toLowerCase();
      setFilteredData(data.filter(country => country.name.toLowerCase().includes(query)));
  };

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const region = event.target.value;
      setFilteredData(region ? data.filter(country => country.region === region) : data);
  };


    console.log(error);
    console.log(data);

    return (
        <main className={styles['b-main']}>
            <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
            {error && <p>{error}</p>}
            {filteredData.map((country, index) => (
                <CountryCard key={index} country={country} />
            ))}
        </main>
    );
}
