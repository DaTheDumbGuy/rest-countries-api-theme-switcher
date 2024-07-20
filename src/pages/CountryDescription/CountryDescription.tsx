import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Country } from '../../types/types';
import styles from './countryDescription.module.scss';
import { Link } from 'react-router-dom';
import { useCountry } from '../../hooks/CountryProvider';

export default function CountryDescription() {
  const { countries, error, loading } = useCountry();
  const { alpha3Code } = useParams<{ alpha3Code: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [borderCountryNames, setBorderCountryNames] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string>('');

  useEffect(() => {
    const foundCountry = countries.find((c) => c.alpha3Code === alpha3Code);
    setCountry(foundCountry || null);
  }, [alpha3Code, countries]);

  useEffect(() => {
    if (country) {
      // Ensure borders is an array and countries is not empty
      if (Array.isArray(country.borders)) {
        const borderCountryNames = country.borders
          .map(borderAlpha3Code => countries.find(c => c.alpha3Code === borderAlpha3Code)?.name)
          .filter((name): name is string => Boolean(name)); // Type guard to filter out undefined values
        setBorderCountryNames(borderCountryNames);
      } else {
        setBorderCountryNames([]);
      }

      const getLanguages = country.languages?.map(language => language.name).join(', ') || '';
      setLanguages(getLanguages);
    }
  }, [country, countries]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className={styles['b-main']}>
      <Link to="/" className={styles['b-main__backLink']}>
        <button className={styles['b-main__backLink__backButton']}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>Back
        </button>
      </Link>
      <article className={styles['b-main__countryDescription']}>
        <header className={styles['b-main__countryDescription__header']}>
          <img src={country?.flag} alt={`Flag of ${country?.name}`} className={styles['b-main__countryDescription__header__flag']} />  
        </header>
        <div className={styles['b-main__countryDescription__body']}>
          <h1>{country?.name}</h1>
          <section className={styles['b-main__countryDescription__body__section']}>
            <p><strong>Native Name:</strong> {country?.nativeName}</p>
            <p><strong>Subregion:</strong> {country?.subregion}</p>
            <p><strong>Population:</strong> {country?.population}</p>
            <p><strong>Region:</strong> {country?.region}</p>
            <p><strong>Capital:</strong> {country?.capital}</p>
          </section>
          <section className={styles['b-main__countryDescription__body__section']}>
            <p><strong>Top Level Domain:</strong> {country?.topLevelDomain}</p>
            <p><strong>Currencies:</strong> {country?.currencies?.[0]?.name || 'N/A'}</p>
            <p><strong>Languages:</strong> {languages}</p>
          </section>
          <section className={styles['b-main__countryDescription__body__section']}>
          <p><strong>Border Countries: {borderCountryNames.length === 0 ? 'N/A': ""}</strong></p>
          {borderCountryNames.length > 0 && (
              <ul className={styles['b-main__countryDescription__body__section__borderCountries']}>
                {borderCountryNames.map((borderCountry) => (
                  <li key={borderCountry} className={styles['b-main__countryDescription__body__section__borderCountries__country']}>
                    {borderCountry}
                  </li>
                ))}
              </ul>
          )}
          </section>
        </div>
      </article>
    </main>
  );
};
