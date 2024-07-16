
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Country } from '../../types/types';
import { getCountry } from '../../services/api';
import styles from './countryDescription.module.scss';
import { Link } from 'react-router-dom';

export default function CountryDescription() {
  const { alpha3Code } = useParams<{ alpha3Code: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [borderCountryNames, setBorderCountryNames] = useState<string[]>();
  const [languages, setLanguages] = useState<string>();
  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const fetchedCountries = await getCountry();
        setCountries(fetchedCountries);

        const foundCountry =  fetchedCountries.find((c) => c.alpha3Code === alpha3Code);
        setCountry(foundCountry || null);

      } catch (err) {
        setError('Failed to fetch country data');
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [alpha3Code]);

  useEffect(() => {
    if (country) {
        // Perform any manipulation with the country data
        const getBorderCountryNames = country.borders
            .map(borderAlpha3Code => countries.find(c => c.alpha3Code === borderAlpha3Code)?.name)
            .filter((name): name is string => Boolean(name)); // Type guard to filter out undefined values
        
        const getLanguages = country?.languages.map(language => language.name).join(', ');
        console.log(getLanguages);
        console.log(getBorderCountryNames);
        console.log('Country data is available:', country);
        setBorderCountryNames(getBorderCountryNames);
        setLanguages(getLanguages);
    }
}, [country, countries]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  console.log(countries);


  return (
    <main className={styles['b-main']}>
    <Link to="/"><button className={styles[`b-main__backButton`]}>Back</button></Link>
    <article className={styles['b-main__countryDescription']}>
      <header className={styles['b-main__countryDescription__header']}>
        <img src={country?.flag} alt={`Flag of ${country?.name}`} className={styles['b-main__countryDescription__header__flag']} />  
      </header>
      <div className={styles['b-main__countryDescription__body']}>
        <section className={styles['b-main__countryDescription__body__section']}>
          <h1>{country?.name}</h1>
          <p><strong>Native Name:</strong> {country?.nativeName}</p>
          <p><strong>Subregion:</strong> {country?.subregion}</p>
          <p><strong>Population:</strong> {country?.population}</p>
          <p><strong>Region:</strong> {country?.region}</p>
          <p><strong>Sub Region:</strong> {country?.subregion}</p>
          <p><strong>Capital:</strong> {country?.capital}</p>
        </section>
        <section className={styles['b-main__countryDescription__body__section']}>
          <p><strong>Top Level Domain:</strong> {country?.topLevelDomain}</p>
          <p><strong>Currencies:</strong> {country?.currencies[0].name}</p>
          <p><strong>Languages:</strong> {languages}</p>
        </section>
        <section className={styles['b-main__countryDescription__body__section']}>
          <p><strong>Border Countries:</strong></p>
          <ul className={styles['b-main__countryDescription__body__section__borderCountries']}>
            { borderCountryNames?.map((borderCountry) => (
              <li key={borderCountry} className={styles['b-main__countryDescription__body__section__borderCountries__country']}>
                {borderCountry}
              </li>
            ))}  
          </ul>
        </section>
      </div>
    </article>
  </main>
  );
};

