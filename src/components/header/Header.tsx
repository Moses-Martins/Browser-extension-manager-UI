import { useEffect, useState } from "react";
import DarkMode from "../../assets/images/icon-moon.svg";
import LightMode from "../../assets/images/icon-sun.svg";
import Logo from "../../assets/images/logo.svg";

function Header() {
  const [isDark, setIsDark] = useState(
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  // Apply theme to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      html.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);


  return (
    <header className="flex items-center justify-between w-[95%] h-12 mt-6 mx-auto rounded-md bg-white dark:bg-gray-600 transition max-sm:w-90">
      <img className="mx-2 max-sm:mx-2" src={Logo} alt="Logo" />

      {/* Toggle Button */}
      <img
        className="mx-2 p-1 bg-[hsl(0_0%_93%)] dark:bg-gray-700 cursor-pointer transition w-7 max-sm:w-7 max-sm:mx-2 rounded-md"
        src={isDark ? LightMode : DarkMode}
        alt="Toggle theme"
        onClick={() => setIsDark(!isDark)}
      />
    </header>
  );
}

export default Header;
