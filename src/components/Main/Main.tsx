import { useState, useEffect, useRef, useCallback } from "react";
import { Country } from "../../types/types";
import CountryCard from "./CountryCard/CountryCard";
import SearchFilter from "./SearchFilter/SearchFilter";
import styles from './main.module.scss';
import { useCountry } from "../../hooks/CountryProvider";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function Main() {
  const { countries, error } = useCountry();
  const [filteredData, setFilteredData] = useState<Country[]>(countries);
  const [visibleCount, setVisibleCount] = useState(Math.ceil(countries.length / 4));
  const [loading, setLoading] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver>();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    const filtered = countries.filter(country => country.name.toLowerCase().includes(query));
    setFilteredData(filtered);
    setVisibleCount(Math.max(Math.ceil(filtered.length / 4), 1)); // Ensure visibleCount is at least 1
    setLoading(false); // Reset loading state
  };
  
  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const region = event.target.value;
    const filtered = region ? countries.filter(country => country.region === region) : countries;
    setFilteredData(filtered);
    setVisibleCount(Math.max(Math.ceil(filtered.length / 4), 1)); // Ensure visibleCount is at least 1
    setLoading(false); // Reset loading state
  };
  
  // Initial setup
  useEffect(() => {
    setFilteredData(countries);
    setVisibleCount(Math.max(Math.ceil(countries.length / 4), 1)); // Ensure visibleCount is at least 1
  }, [countries]);
  

  const lastElementRef = useCallback((node: HTMLDivElement) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setLoading(true);
        setVisibleCount(prevCount => {
          const newVisibleCount = Math.min(prevCount + Math.ceil(filteredData.length / 4), filteredData.length);
          if (newVisibleCount >= filteredData.length) {
            setLoading(false); // No more data to load
          }
          return newVisibleCount;
        });
      }
    });
    if (node) observer.current.observe(node);
  }, [filteredData.length]);

  return (
    <main className={styles['b-main']}>
      <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
      {error && <p>{error}</p>}
      <section className={styles['b-main__countries']}>
        {filteredData.slice(0, visibleCount).map((country, index) => {
          if (index === visibleCount - 1) {
            return (
              <div ref={lastElementRef} key={index}>
                <CountryCard country={country} />
              </div>
            );
          } else {
            return <CountryCard key={index} country={country} />;
          }
        })}
      </section>
        {loading && <LoadingSpinner />} {/* Show loading spinner while loading */}
    </main>
  );
}
