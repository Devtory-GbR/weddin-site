<template>
  <section>
    <div class="app-container">
      <h3 class="title is-3">Allgemeine Geschäftsbedingungen</h3>
      <h5 class="subtitle is-5 has-text-accent">Self-hosting</h5>

      <nuxt-content :document="content" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'TermsAndConditionsPage',
  transition: 'slide-bottom',
  async asyncData({ $content }) {
    const content = await $content('terms-and-conditions/code').fetch();
    return {
      content,
    };
  },
};
</script>

<style lang="scss">
@import '../../assets/css/variables';
</style>


