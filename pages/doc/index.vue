<template>
  <section>
    <div class="app-container">
      <h3 class="title is-3">Anleitung</h3>
      <h5 class="subtitle is-5 has-text-accent">
        So richtest du deine Webseite ein
      </h5>

      <nuxt-content :document="content" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'DocPage',
  transition: 'slide-bottom',
  async asyncData({ $content }) {
    const content = await $content('docs/doc').fetch();
    return {
      content,
    };
  },
};
</script>

<style lang="scss">
@use '/assets/css/variables';
</style>
