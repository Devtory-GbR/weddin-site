<template>
  <div class="app-wrapper">
    <Header />
    <main class="app-content">
      <Nuxt />
    </main>
    <LazyFooter />
  </div>
</template>
<style lang="scss">
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .app-content {
    flex: 1;
  }
}
</style>
