import { Country } from "../../../types/types";

type CountryCardProps = {
    country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
    return (
        <article>
            <header>
                <img src={country.flag} alt={`Flag of ${country.name}`} />
            </header>
            <div>
                <h2>{country.name}</h2>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
            </div>
            {/* Add more details as needed */}
        </article>
    );
}
