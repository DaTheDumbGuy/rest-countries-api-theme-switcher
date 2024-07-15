
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
  // const [languageNames, setLanguageNames] = useState<string | undefined>('');
  // const [borderCountryNames, setBorderCountryNames] = useState<string[] | undefined >([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const fetchedCountries = await getCountry();
        setCountries(fetchedCountries);

        const foundCountry =  fetchedCountries.find((c) => c.alpha3Code === alpha3Code);
        setCountry(foundCountry || null);

        // const foundLanguageNames = foundCountry?.languages.map(language => language.name).join(', ');
        // setLanguageNames(foundLanguageNames);

        // const foundBorderCountries = foundCountry?.borders
        // .map(borderCioc => countries.find(c => c.alpha3Code === borderCioc)?.name)
        // .filter(Boolean);

        // setBorderCountryNames(foundBorderCountries);
      } catch (err) {
        setError('Failed to fetch country data');
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [alpha3Code]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

//  setLanguageNames(country?.languages.map(language => language.name).join(', ')); 
// setBorderCountryNames(
  
// )
  // const borderCountryNames = country?.borders
  // .map(borderCioc => countries.find(c => c.alpha3Code === borderCioc)?.name)
  // .filter(Boolean);
  // console.log(borderCountryNames);
  console.log(countries);


  return (
    <main className={styles['b-main']}>
    <Link to="/"><button>Back</button></Link>
    <article className={styles['b-main__countryDescription']}>
      <header className={styles['b-main__countryDescription__header']}>
        <h1>{country?.name}</h1>
      </header>
      <div className={styles['b-main__countryDescription__body']}>
        <img src={country?.flag} alt={`Flag of ${country?.name}`} className={styles['b-main__countryDescription__body__flag']} />
        <section className={styles['b-main__countryDescription__body__section']}>
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
          {/* <p><strong>Languages:</strong> {languageNames}</p> */}
        </section>
        <section className={styles['b-main__countryDescription__body__section']}>
          <p><strong>Border Countries:</strong></p>
          {/* <ul className={styles['b-main__countryDescription__body__borderCountries']}>
            {!loading && borderCountryNames.map((borderCountry) => (
              <li key={borderCountry} className={styles['b-main__countryDescription__body__borderCountry']}>
                {borderCountry}
              </li>
            ))}  
          </ul> */}
        </section>
      </div>
    </article>
  </main>
  );
};

