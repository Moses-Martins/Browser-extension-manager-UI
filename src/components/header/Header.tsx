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
    <header className="flex items-center justify-between w-[90vw] h-[8vh] mt-[4vh] mx-auto rounded-[10px] bg-white dark:bg-gray-900 transition">
      <img className="mx-[9px] h-[80%]" src={Logo} alt="Logo" />

      {/* Toggle Button */}
      <img
        className="mx-[9px] rounded-[9px] p-[5px] bg-[hsl(0_0%_93%)] dark:bg-gray-700 cursor-pointer transition"
        src={isDark ? LightMode : DarkMode}
        alt="Toggle theme"
        onClick={() => setIsDark(!isDark)}
      />
    </header>
  );
}

export default Header;
