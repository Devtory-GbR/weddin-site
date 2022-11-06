<template>
  <header>
    <div class="container">
      <NuxtLink to="/" class="title-wrapper">
        <nuxt-img height="45px" src="/images/logo.svg" />
        <div class="font-pretty title">Weddin</div>
      </NuxtLink>
      <div class="spacer"></div>
      <nav>
        <NuxtLink class="link" to="/doc">Anleitung</NuxtLink>
        <NuxtLink class="link" to="/demo">Live Demo</NuxtLink>
        <NuxtLink class="btn primary" to="/pricing">Los gehts</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style lang="scss">
@import './../assets/css/variables';

header {
  position: sticky;
  top: 0;
  background-color: $bg-default;
  opacity: 0.95;
  box-shadow: 1px 1px 12px rgb(0 0 0 / 15%);
  min-height: 65px;
  z-index: 500;
  a {
    transition: all 0.3s;
    text-decoration: none;

    &:hover {
      color: $accent-color;

      .title {
        color: $accent-color;
      }
    }
  }

  .container {
    display: flex;
    align-items: center;
    gap: $spacing-S;

    .spacer {
      flex: 1;
    }
  }
  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $spacing-S;
  }
  .title {
    transition: all 0.3s;
    font-size: $typography-headline3;
    color: $primary-color;
    margin-top: 8px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: $spacing-L;
    font-size: $typography-body1;
    a.link {
      color: $accent-color;

      &:hover {
        border-bottom: 1px solid $accent-color;
      }
    }
  }
}
</style>
