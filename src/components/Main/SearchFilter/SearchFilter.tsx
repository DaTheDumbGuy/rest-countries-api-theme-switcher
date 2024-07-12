import { SearchFilterProps } from "../../../types/types";
import styles from './searchFilter.module.scss';
import searchIcon from '../../../assets/images/searchIcon.svg';

export default function SearchFilter({onSearch, onFilter}:SearchFilterProps) {
    return (
      <section className={styles['b-searchFilter']}>
        <div className={styles['b-searchFilter__search']}>
          <img src={searchIcon} className={styles['b-searchFilter__search__icon']} alt="" />
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
  