<template>
  <footer>
    <div class="app-container">
      <div class="seperator"></div>
      <div class="footer-content">
        <div class="footer-title-wrapper">
          <div class="text-p font-pretty title">WeddIn</div>
          <div class="footer-powred-by">
            powered by
            <a href="https://www.devtory.io/" target="_blank">devtory.io</a>
          </div>
        </div>
        <div class="spacer is-hidden-mobile"></div>
        <div class="footer-links">
          <NuxtLink to="/contact">Kontakt</NuxtLink>
          <NuxtLink to="/imprint">Impressum</NuxtLink>
          <NuxtLink to="/privacy">Datenschutz</NuxtLink>
          <NuxtLink to="/terms-and-conditions">AGB</NuxtLink>
        </div>
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
  .app-container {
    padding-top: 0;
    padding-bottom: 0;
  }

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

    .footer-links {
      display: flex;
      align-items: center;
      gap: $spacing-L;
      a {
        transition: all 0.3s;
        color: $default-secondary;
        text-decoration: none;

        &:hover {
          color: $accent-color;
        }
      }
    }

    @media (max-width: $breakpoint-xs) {
      flex-direction: column;
      gap: $spacing-M;
      align-items: flex-start;

      .footer-links {
        width: 100%;
        align-items: center;
        justify-content: center;
      }
    }

    .title {
      font-size: $typography-headline4;
      margin-bottom: 0;
      color: $primary-color;
      font-weight: unset;
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
