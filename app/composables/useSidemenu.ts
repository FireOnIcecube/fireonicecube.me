export function useSidemenu() {
  const isOpen = useState<boolean>("sidemenu-open", () => false);

  const open = () => (isOpen.value = true);
  const close = () => (isOpen.value = false);
  const toggle = () => (isOpen.value = !isOpen.value);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}
