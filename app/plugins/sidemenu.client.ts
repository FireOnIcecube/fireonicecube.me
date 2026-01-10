export default defineNuxtPlugin(() => {
  const router = useRouter();
  const { close } = useSidemenu();

  router.afterEach((to, from) => {
    if (to.path !== from.path) {
      close();
    }
  });
});
