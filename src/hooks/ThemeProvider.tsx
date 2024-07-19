// src/ThemeProvider.tsx

import { createContext, useContext, useState } from 'react';
import { ThemeContextType } from '../types/types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  console.log("Theme Provider Rendered")
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
