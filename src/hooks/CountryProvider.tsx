import { createContext, useState, useEffect, useContext, useMemo } from 'react';
import { getCountry } from '../services/api';
import { CountryContextType, CountryProviderProps, Country } from '../types/types';

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider = ({ children }: CountryProviderProps) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const fetchedCountries = await getCountry();
        setCountries(fetchedCountries);
      } catch (err) {
        setError(`Failed to fetch country data:${err} `);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
    console.log("Country Provider Rendered");
  }, []);
  
  const value = useMemo(() => ({ countries, loading, error }), [countries, loading, error]);


  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = (): CountryContextType => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};
