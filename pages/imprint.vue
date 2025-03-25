<template>
  <section>
    <div class="app-container">
      <h3 class="title is-3">Impressum</h3>
      <p>
        <b>Martin Weber</b> <br />
        Wesenberger Ring 2 <br />
        12359 Berlin
      </p>
      <br />
      <h5 class="title is-5">Kontakt</h5>
      <p>
        E-Mail:
        <a href="mailto:martinweber.9393@gmail.com">martinweber.9393@gmail.com</a>
      </p>
      <br />
      <h5 class="title is-5">Vertrieb und Verkauf des Premium Pakets</h5>
      <p>
        Der Vertrieb und Verkauf des Premium Pakets wird über die
        <a href="https://www.devtory.io/impressum" target="_blank">Devtory GbR</a>
        abgewickelt. <br />
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImprintPage',
  transition: 'slide-bottom',
};
</script>

<style lang="scss">
@use '/assets/css/variables';
</style>
