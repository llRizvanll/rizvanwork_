"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';

type Theme = 'default' | 'hacker';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('default');

  // Load theme from localStorage when component mounts (client-side only)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Add/remove class from body based on theme
    if (theme === 'hacker') {
      document.body.classList.add('hacker-theme');
    } else {
      document.body.classList.remove('hacker-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'default' ? 'hacker' : 'default');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 