<template>
  <section>
    <div class="app-container">
      <h3 class="title is-3">Datenschutzerklärung</h3>
      <nuxt-content :document="privacyContent" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'PrivacyPage',
  transition: 'slide-bottom',
  async asyncData({ $content }) {
    const privacyContent = await $content('privacy').fetch();
    return {
      privacyContent,
    };
  },
};
</script>

<style lang="scss">
@use '/assets/css/variables';
</style>
