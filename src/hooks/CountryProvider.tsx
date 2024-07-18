import { createContext, useState, useEffect, useContext } from 'react';
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
        setError('Failed to fetch country data');
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, []);

  return (
    <CountryContext.Provider value={{ countries, loading, error }}>
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
    