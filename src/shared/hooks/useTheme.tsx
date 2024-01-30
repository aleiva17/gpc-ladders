import {useState, useEffect, Dispatch, SetStateAction} from "react";

type Theme = "light" | "dark";

export const useTheme = (): [Theme, Dispatch<SetStateAction<Theme>>] => {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem("theme") as Theme ?? "light");
  const prevTheme: Theme = (theme === "light" ? "dark" : "light");

  useEffect(() => {
    const root = window.document.documentElement;
    const stylesheet = document.getElementById("link-stylesheet")! as HTMLLinkElement;

    root.classList.remove(prevTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);

    stylesheet.href = theme === "light"
      ? "/themes/lara-light-purple/theme.css"
      : "/themes/lara-dark-cyan/theme.css";
  }, [theme, prevTheme]);

  return [theme, setTheme];
}