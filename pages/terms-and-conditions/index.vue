<template>
  <section>
    <div class="app-container">
      <h3 class="title is-3">Allgemeine Geschäftsbedingungen</h3>
      <b-menu>
        <b-menu-list label="Menu">
          <b-menu-item
            tag="nuxt-link"
            to="/terms-and-conditions/code"
            label="Code"
          ></b-menu-item>
          <b-menu-item
            tag="nuxt-link"
            to="/terms-and-conditions/service"
            label="Premium Service"
          ></b-menu-item>
        </b-menu-list>
      </b-menu>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TermsAndConditionsPage',
  transition: 'slide-bottom',
};
</script>

<style lang="scss">
@import '../../assets/css/variables';
</style>


