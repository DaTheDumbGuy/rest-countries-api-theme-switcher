import { useState, useEffect } from "react";
import { Country } from "../../types/types";
import CountryCard from "./CountryCard/CountryCard";
import SearchFilter from "./SearchFilter/SearchFilter";
import styles from './main.module.scss';
import { useCountry } from "../../hooks/CountryProvider";

export default function Main() {
  const {countries, error} = useCountry();
    const [filteredData, setFilteredData] = useState<Country[]>(countries);

    useEffect(() => {
      setFilteredData(countries);
    }, [countries]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value.toLowerCase();
      setFilteredData(filteredData.filter(country => country.name.toLowerCase().includes(query)));
  };

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const region = event.target.value;
      setFilteredData(region ? filteredData.filter(country => country.region === region) : countries);
  };

  console.log("You are in Main");
    return (
        <main className={styles['b-main']}>
            <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
            {error && <p>{error}</p>}
            <section className={styles['b-main__countries']}>
              {filteredData.map((country, index) => (
                  <CountryCard key={index} country={country} />
              ))}
            </section>
        </main>
    );
}
