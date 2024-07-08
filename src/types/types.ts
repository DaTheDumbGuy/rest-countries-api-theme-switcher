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
};

export type SearchFilterProps = { 
    onSearch:(event: React.ChangeEvent<HTMLInputElement>) => void;
    onFilter:(event: React.ChangeEvent<HTMLSelectElement>) => void;
}