export function useColor() {
  const colorMode = useColorMode();

  const toggleDarkMode = () => {
    const isDark = colorMode.preference === "dark";
    colorMode.preference = isDark ? "light" : "dark";
  };

  return {
    colorMode,
    toggleDarkMode,
  };
}
