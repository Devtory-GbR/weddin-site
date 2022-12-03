<template>
  <div class="menu-wrapper">
    <div class="title-wrapper">
      <div class="font-pretty title">Weddin</div>
      <div class="font-pretty subtitle">Deine digitale Hochzeitseinladung</div>
      <div class="spacer"></div>
      <NuxtLink
        class="button is-primary is-inverted"
        to="/pricing"
        inverted
        @click.native="chooseItem()"
        >Los gehts
      </NuxtLink>
    </div>
    <b-menu>
      <b-menu-list label="Menu">
        <b-menu-item
          tag="nuxt-link"
          to="/"
          label="Home"
          @click.native="chooseItem()"
        ></b-menu-item>
        <b-menu-item
          tag="nuxt-link"
          to="/doc"
          label="Anleitung"
          @click.native="chooseItem()"
        ></b-menu-item>
        <b-menu-item
          tag="nuxt-link"
          to="/demo"
          label="Live Demo"
          @click.native="chooseItem()"
        ></b-menu-item>
      </b-menu-list>
    </b-menu>
  </div>
</template>

<script>
export default {
  name: 'SideBarMenuComponent',
  methods: {
    chooseItem() {
      this.$emit('closeSidebar');
    },
  },
};
</script>

<style lang="scss">
@import './../assets/css/variables';

.menu-wrapper {
  padding: $spacing-S;

  .title-wrapper {
    display: flex;
    flex-direction: column;
    border-radius: $border-radius * 2;
    width: 100%;
    min-height: 140px;
    background: $primary-color;
    margin-bottom: $spacing-M;

    padding-left: $spacing-XS;
    padding-right: $spacing-XS;
    padding-top: $spacing-S;
    padding-bottom: $spacing-S;

    .title {
      font-size: $typography-headline3;
      font-weight: unset;
      color: #fff;
    }
    .subtitle {
      font-size: $typography-headline5;
      color: #fff;
    }

    .spacer {
      flex: 1;
    }

    .button {
    }
  }

  .nuxt-link-exact-active {
    color: $primary-color;
  }
}
</style>