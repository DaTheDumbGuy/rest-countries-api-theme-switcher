import { SearchFilterProps } from "../../../types/types";
import styles from './searchFilter.module.scss';

export default function SearchFilter({onSearch, onFilter}:SearchFilterProps) {
    return (
      <section className={styles['b-searchFilter']}>
        <div className={styles['b-searchFilter__search']}>
          <svg  className={styles['b-searchFilter__search__icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={onSearch}
            className={styles['b-searchFilter__search__input']}
          />
        </div>
        <div className={styles['b-searchFilter__filter']}>
          <select onChange={onFilter} className={styles['b-searchFilter__filter__select']} title="Filter Region">
            <option value="" >Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    );
  }
  