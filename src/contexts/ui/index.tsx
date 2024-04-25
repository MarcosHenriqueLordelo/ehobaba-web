import React, { createContext, useState, useEffect, useCallback } from "react";
import { DefaultTheme } from "styled-components";
import getStrings from "../../utils/strings";

import themeLight from "../../themes/light";
import themeDark from "../../themes/dark";

import defaultLanguage from "../../utils/strings/pt_br";

interface UiContext {
  strings: Strings;
  theme: DefaultTheme;
  language: string;
  loading: boolean;
  loadingUser: boolean;
  setLoadingUser: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  errors: Errors;
  setErrors: React.Dispatch<React.SetStateAction<Errors>>;
  toggleTheme(): void;
}

const UiContext = createContext<UiContext>({} as UiContext);

export const UiProvider: React.FC<DefaultProps> = ({ children }) => {
  const tokenKey = "@ehobaba:token:theme";

  const [strings, setStrings] = useState<Strings>(defaultLanguage);
  const [theme, setTheme] = useState<DefaultTheme>(themeDark);
  const [language, setLanguage] = useState<string>(navigator.language || "pt-br");
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingUser, setLoadingUser] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
  

    const loadStoragedData = async () => {
      setLoading(true);

      const themeData = localStorage.getItem(tokenKey);

      if (themeData !== null)
        setTheme(themeData === "light" ? themeLight : themeDark);

      setLoading(false);
    };

    loadStoragedData();
  }, []);

  useEffect(() => {
    setStrings(getStrings(language));
  }, [language]);

  useEffect(() => {
    localStorage.setItem(tokenKey, theme.title);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? themeDark : themeLight);
  }, [theme]);

  return (
    <UiContext.Provider
      value={{
        strings,
        theme,
        toggleTheme,
        language,
        loading,
        setLoading,
        errors,
        setErrors,
        loadingUser,
        setLoadingUser,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiContext;
