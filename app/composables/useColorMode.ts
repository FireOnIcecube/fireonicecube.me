export function useColor() {
  const colorMode = useColorMode();

  const toggleDarkMode = () =>
    colorMode.preference == "dark" ? "light" : "dark";

  return {
    colorMode,
    toggleDarkMode,
  };
}
