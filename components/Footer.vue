<template>
  <footer>
    <div class="container">
      <div class="seperator"></div>
      <div class="footer-content">
        <div class="text-p font-pretty title">Weddin</div>
        <div class="spacer"></div>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <NuxtLink to="/imprint">Imprint</NuxtLink>
        <NuxtLink to="/privacy">Privacy</NuxtLink>
      </div>
      <div class="footer-powred-by">
        powered by
        <a href="https://www.devtory.io/" target="_blank">devtory.io</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style lang="scss">
@import './../assets/css/variables';

footer {
  .seperator {
    background-color: #f1e7e7;
    height: 1px;
    border-radius: $border-radius;
    margin-top: $spacing-M;
    margin-bottom: $spacing-L;
  }

  .footer-content {
    display: flex;
    align-items: center;
    gap: $spacing-L;

    font-size: $typography-body2;
    .spacer {
      flex: 1;
    }

    a {
      transition: all 0.3s;
      color: $default-secondary;
      text-decoration: none;

      &:hover {
        color: $accent-color;
      }
    }

    .title {
      font-size: $typography-headline4;
    }
  }

  .footer-powred-by {
    color: $default-secondary2;
    font-size: $typography-caption;

    a {
      text-decoration: none;
      color: $accent-color;
    }
  }
}
</style>
