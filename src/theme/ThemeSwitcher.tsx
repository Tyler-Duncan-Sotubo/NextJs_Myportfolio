import React from "react";
import { useTheme } from "next-themes";
import { RiToggleLine, RiToggleFill } from "react-icons/ri";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <RiToggleFill
          size={40}
          role="button"
          onClick={() => setTheme("light")}
          className=" text-skin-accent"
        />
      );
    } else {
      return (
        <RiToggleLine
          size={40}
          role="button"
          onClick={() => setTheme("dark")}
          className=" text-skin-accent"
        />
      );
    }
  };

  return <>{handleThemeChange()}</>;
}
