import { useDark, useToggle } from "@vueuse/core";

export function useDarkMode() {
  const isDark = useDark({
    disableTransition: false,
  });

  const switchLightMode = () => useToggle(false);
  const switchDarkMode = () => useToggle(true);
  const toggleMode = useToggle(isDark);

  return {
    isDark,
    switchLightMode,
    switchDarkMode,
    toggleMode,
  };
}
