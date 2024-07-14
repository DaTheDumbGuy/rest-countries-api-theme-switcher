import { Link } from "react-router-dom";
import { Country } from "../../../types/types";
import styles from './coutryCard.module.scss';

type CountryCardProps = {
    country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
    return (
        <Link to={`/country-description/${country.cioc}`} >
        <article className={styles['b-countryCard']} >
            <header className={styles['b-countryCard__header']}>
                <img src={country.flag} alt={`Flag of ${country.name}`}  className={styles['b-countryCard__header__flag']}/>
            </header>
            <div className={styles['b-countryCard__body']}>
                <h2 className={styles['b-countryCard__body__title']}>{country.name}</h2>
                <p className={styles['b-countryCard__body__population']}><strong>Population:</strong> {country.population}</p>
                <p className={styles['b-countryCard__body__region']}><strong>Region:</strong> {country.region}</p>
                <p className={styles['b-countryCard__body__capital']}><strong>Capital:</strong> {country.capital}</p>
            </div>
            {/* Add more details as needed */}
        </article>
        </Link>
    );
}
