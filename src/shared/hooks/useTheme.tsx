import {useState, useEffect, Dispatch, SetStateAction} from "react";

type Theme = "light" | "dark";

export const useTheme = (): [Theme, Dispatch<SetStateAction<Theme>>] => {
  const [theme, setTheme] = useState<Theme>("light");
  const prevTheme: Theme = (theme === "light" ? "dark" : "light");

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    userTheme && setTheme(userTheme as Theme);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(prevTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, prevTheme]);

  return [theme, setTheme];
}