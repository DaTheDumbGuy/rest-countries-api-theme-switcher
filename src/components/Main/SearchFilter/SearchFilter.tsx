import { SearchFilterProps } from "../../../types/types";

export default function SearchFilter({onSearch, onFilter}:SearchFilterProps) {
    return (
      <section>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={onSearch}
        />
        <select onChange={onFilter}>
          <option value="">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>
    );
  }
  