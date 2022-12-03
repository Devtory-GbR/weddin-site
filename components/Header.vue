<template>
  <header>
    <div class="app-container">
      <b-button
        type="is-text"
        class="is-hidden-desktop"
        @click="toogleSidebar()"
      >
        <b-icon icon="menu" type="is-accent"> </b-icon>
      </b-button>
      <NuxtLink to="/" class="title-wrapper">
        <nuxt-img height="45px" src="/images/logo.svg" />
        <div class="font-pretty title">Weddin</div>
      </NuxtLink>
      <div class="spacer is-hidden-mobile"></div>
      <nav class="is-hidden-mobile">
        <NuxtLink class="link is-hidden-touch" to="/doc">Anleitung</NuxtLink>
        <NuxtLink class="link is-hidden-touch" to="/demo">Live Demo</NuxtLink>
        <NuxtLink class="button is-primary btn-lets-go" to="/pricing"
          >Los gehts
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  methods: {
    toogleSidebar() {
      this.$emit('toogleSidebar');
    },
  },
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
  z-index: 30;
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

  .app-container {
    display: flex;
    align-items: center;
    padding-top: $spacing-XS;
    padding-bottom: $spacing-XS;
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

    img {
      width: 45px;
    }

    @media (max-width: $breakpoint-xs) {
      flex: 1;
      text-align: center;
      margin-left: -60px;
    }
  }
  .title {
    transition: all 0.3s;
    font-size: $typography-headline3;
    font-weight: unset;
    color: $primary-color;
    margin-top: 8px;
  }

  .btn-lets-go {
    min-height: 40px;
  }

  nav {
    transition: all 0.5s;
    display: flex;
    align-items: center;
    gap: $spacing-L;
    font-size: $typography-body1;
    a.link {
      transition: all 0.5s;
      color: $accent-color;

      &.nuxt-link-exact-active {
        color: $primary-color;
      }
      &:hover {
        border-bottom: 1px solid $accent-color;
      }
    }
  }
}
</style>
