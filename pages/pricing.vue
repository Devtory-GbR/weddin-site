<template>
  <section>
    <div class="app-container">
      <h3 class="title is-3">Los gehts</h3>
      <h5 class="subtitle is-5 has-text-accent">
        Wähle dein passendes Paket aus
      </h5>

      <nuxt-content :document="pricingContent" />
      <div class="pricing-card-wrapper">
        <div class="card">
          <div class="card-content">
            <div class="title is-5 has-text-primary">Self-hosting</div>
            <div class="pricing-title">
              <div class="price subtitle is-1">0 €</div>
            </div>
            <div class="package-info">
              For the Nerds: Den gesamten Code zum anpasen und selbsthosten.
            </div>
            <div class="divider"></div>
            <div class="feature">vorkonfigurierte Datenbank mit Beispielen</div>
            <div class="feature">Sourcecode FrontEnd und Backend</div>
            <div class="spacer"></div>
            <NuxtLink class="action button is-accent is-fullwidth" to="/card1"
              >Code anfragen
            </NuxtLink>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="title is-5 has-text-primary">⭐ Premium ⭐</div>
            <div class="pricing-title">
              <div class="price subtitle is-1">149 €</div>

              <div class="price-info subtitle is-6">im ersten Jahr</div>
              <div class="price-2 subtitle is-3">
                49 €
                <b-tooltip
                  type="is-light"
                  :triggers="['click']"
                  :auto-close="['outside', 'escape']"
                  :multilined="true"
                >
                  <template v-slot:content>
                    Kein Abo und keine Kündigung notwendig. <br />Nach jedem
                    Jahr erfolgt eine Erinnerung zur Zahlung. Erfolgt keine
                    Zahlung nach 30 Tagen wird die Seite automatisch gelöscht.
                  </template>
                  <b-button type="is-text">
                    <b-icon icon="information-outline"></b-icon>
                  </b-button>
                </b-tooltip>
              </div>
              <div class="price-2-info subtitle is-6">jedes weitere Jahr</div>
            </div>
            <div class="package-info">
              Bereitstellung der gesamten Anwendung mit Wartung und Wunsch
              Sub-Domain.
            </div>
            <div class="divider"></div>
            <div class="feature">vorkonfigurierte Datenbank mit Beispielen</div>
            <div class="feature">
              eingerichtete Anwendung zum direkt loslegen
            </div>
            <div class="feature">Wunsch Sub-Domain XXX.weddin.site</div>
            <div class="feature">kein Abo - mit 14-tätigen Test</div>
            <div class="feature">
              Wartung und evtl. neue Features auf Wunsch
            </div>
            <div class="spacer"></div>
            <NuxtLink class="action button is-accent is-fullwidth" to="/card2"
              >14-tägigen Test bestellen
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingPage',
  transition: 'slide-bottom',
  async asyncData({ $content }) {
    const pricingContent = await $content('pricing').fetch();
    return {
      pricingContent,
    };
  },
};
</script>

<style lang="scss">
@import './../assets/css/variables';

.pricing-card-wrapper {
  margin-top: $spacing-L;
  display: flex;
  gap: $spacing-M;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  .card {
    min-width: 400px;
    max-width: 420px;

    @media (max-width: $breakpoint-sm) {
      max-width: 750px;
      width: 100%;
    }
    display: flex;
    .card-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        margin-bottom: 0;
      }

      .pricing-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 215px;
      }
      .price.subtitle,
      .price-2.subtitle {
        margin-bottom: 0;

        .b-tooltip {
          position: absolute;
        }
      }

      .package-info {
        text-align: center;
      }

      .divider {
        margin-top: $spacing-L;
      }

      .feature {
        width: 100%;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        text-align: center;
        padding-top: $spacing-M;
        padding-bottom: $spacing-M;
        color: $default-secondary2;
      }

      .spacer {
        flex: 1;
      }

      .action {
        margin-top: $spacing-L;
      }
    }
  }
}
</style>


