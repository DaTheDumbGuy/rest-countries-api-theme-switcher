// src/types/types.ts

export type Country = {
    name: string;
    nativeName: string;
    subregion: string;
    topLevelDomain: string[];
    currencies: {
        code: string;
        name: string;
        symbol: string;
    }[];
    languages: {
        iso639_1: string;
        iso639_2: string;
        name: string;
        nativeName: string;
    }[];
    borders: string[];
    population: number;
    region: string;
    capital: string;
    flag: string;
    alpha3Code:string;
};

export type SearchFilterProps = { 
    onSearch:(event: React.ChangeEvent<HTMLInputElement>) => void;
    onFilter:(event: React.ChangeEvent<HTMLSelectElement>) => void;
}
export interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}
  
export interface CountryProviderProps {
    children: React.ReactElement;
}
export interface CountryContextType {
    countries: Country[];
    error: string | null;
    loading:boolean;
}