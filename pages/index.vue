<template>
  <div>
    <section class="full-height center">
      <div class="app-container center" data-sal="slide-up">
        <h1>Hello World</h1>
        <p>Das ist ein Test</p>
      </div>
    </section>
    <section class="full-height center">
      <div
        class="app-container center"
        data-sal="slide-up"
        data-sal-delay="300"
      >
        <h1>Hello World 2</h1>
        <p>Das ist ein Test 2</p>
      </div>
    </section>
    <section class="full-height center">
      <div
        class="app-container center"
        data-sal="slide-up"
        data-sal-delay="300"
      >
        <h1>Hello World 3</h1>
        <p>Das ist ein Test 3</p>
      </div>
    </section>
    <section class="full-height center">
      <div
        class="app-container center"
        data-sal="slide-up"
        data-sal-delay="300"
      >
        <h1>Hello World 4</h1>
        <p>Das ist ein Test 4</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  transition: 'slide-bottom',
  mounted() {
    this.$updateSal();
  },
};
</script>

<style></style>
