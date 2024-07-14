// src/components/CountryDescription/CountryDescription.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Country } from '../../types/types';
import { getCountry } from '../../services/api';
import styles from './countryDescription.module.scss';

const CountryDescription: React.FC = () => {
  const { cioc } = useParams<{ cioc: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const fetchedCountries = await getCountry();
        setCountries(fetchedCountries);
        const foundCountry = fetchedCountries.find((c) => c.cioc === cioc);
        setCountry(foundCountry || null);
      } catch (err) {
        setError('Failed to fetch country data');
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [cioc]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!country) {
    return <div>Country not found</div>;
  }
  // Extract language names
  const languageNames = country.languages.map(language => language.name).join(', ');

    // Extract border country names
    const borderCountryNames = country.borders
    .map(borderCioc => countries.find(c => c.cioc === borderCioc)?.name)
    .filter(Boolean);
    console.log(borderCountryNames);


  return (
    <main className={styles['b-main']}>
      <header className={styles['b-main__header']}>
        <h1>{country.name}</h1>
      </header>
      <div className={styles['b-main__body']}>
        <img src={country.flag} alt={`Flag of ${country.name}`} className={styles['b-main__flag']} />
        <p><strong>Native Name:</strong> {country.nativeName}</p>
        <p><strong>Subregion:</strong> {country.subregion}</p>
        <p><strong>Population:</strong> {country.population}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Suub Region:</strong> {country.subregion}</p>
        <p><strong>Capital:</strong> {country.capital}</p>
        {/* Add more details as needed */}

        <p><strong>Top Level Domain:</strong> {country.topLevelDomain}</p>
        <p><strong>Currencies:</strong> {country.currencies[0].name}</p>
        <p><strong>Languages:</strong> {languageNames}</p>
        <p><strong>Border Countries :</strong> {borderCountryNames}</p>
      </div>
    </main>
  );
};

export default CountryDescription;
