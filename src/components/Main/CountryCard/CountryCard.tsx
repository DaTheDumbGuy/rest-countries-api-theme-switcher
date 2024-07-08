import { Country } from "../../../types/types";

type CountryCardProps = {
    country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
    return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
            <img src={country.flag} alt={`Flag of ${country.name}`} />
            {/* Add more details as needed */}
        </div>
    );
}
