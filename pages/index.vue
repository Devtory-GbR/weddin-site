<template>
  <div>
    <section class="center intro">
      <div class="app-container center">
        <div class="svg">
          <nuxt-img src="/images/couple.png" />
        </div>

        <h1
          class="title font-pretty is-1 has-text-primary"
          style="margin-bottom: 0"
        >
          Organisiere dein Hochzeitsevent und Gästeliste.
        </h1>
        <h1 class="title font-pretty is-1 has-text-primary">
          Einfach. Papierlos. Nachhhaltig.
        </h1>
        <div class="intro-text">
          Erstelle mit WeddIn eine digitale individuelle Einladungskarte für
          deine Hochzeit und sende den Link deinen Gästen zu. Baue spielerisch
          eine Webseite mit allen Inhalten um dein Event auf, ohne jegliche
          Programmierkenntnisse .
        </div>
        <div class="action-btn">
          <NuxtLink
            class="button is-primary is-medium btn-lets-go"
            to="/pricing"
            >Los gehts
          </NuxtLink>
          <NuxtLink class="button is-accent is-medium btn-lets-go" to="/demo"
            >Live Demo
          </NuxtLink>
        </div>
        <div class="intro-gif">
          <nuxt-img
            src="/images/gif/intro.gif"
            sizes="sm:100vw md:80vw lg:750px"
          />
        </div>
      </div>
    </section>
    <section class="center features">
      <div class="app-container center">
        <h3 class="title is-3">Top Features</h3>
        <h5 class="subtitle is-5 has-text-accent">
          Erstelle deine Hochzeits-Webseite ganz einfach
        </h5>
        <div class="feature-wrapper">
          <div class="feature">
            <div class="feature-icon">
              <b-icon
                icon="clipboard-edit-outline"
                size="is-large"
                type="is-primary"
              >
              </b-icon>
            </div>
            <div class="feature-content">
              <div class="feature-title">Anpassbar</div>
              <div class="feature-text">
                Der gesamte Inhalt sowie das Aussehen kann online einfach
                angepasst werden - ohne Programmierung, dank
                <a href="https://strapi.io/" target="_blank">strapi</a>.
              </div>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <b-icon
                icon="account-check-outline"
                size="is-large"
                type="is-primary"
              >
              </b-icon>
            </div>
            <div class="feature-content">
              <div class="feature-title">Direkte Rückmeldung</div>
              <div class="feature-text">
                Deine Gäste können direkt über die Webseite zu-/absagen,
                Präfenzen bei Speis & Trank sowie Hotel oder Shuttle angeben.
              </div>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <b-icon icon="view-dashboard" size="is-large" type="is-primary">
              </b-icon>
            </div>
            <div class="feature-content">
              <div class="feature-title">Dashboard</div>
              <div class="feature-text">
                Behalte alles im Überblick - Anzahl der Gäste, Einladungen ohne
                Rückmeldungen, Präferenzen uvm.
              </div>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <b-icon icon="web" size="is-large" type="is-primary"> </b-icon>
            </div>
            <div class="feature-content">
              <div class="feature-title">Multi-Language</div>
              <div class="feature-text">
                Egal ob Deutsch, Englisch, Tschechisch... Stell den Inhalt in
                allen möglichen Sprachen bereit.
              </div>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <b-icon icon="cellphone" size="is-large" type="is-primary">
              </b-icon>
            </div>
            <div class="feature-content">
              <div class="feature-title">Full Responsive</div>
              <div class="feature-text">
                WeddIn ist für das Smartphone optimiert und passt sich komplett
                an die Bildschirmgröße an.
              </div>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <b-icon icon="cash-remove" size="is-large" type="is-primary">
              </b-icon>
            </div>
            <div class="feature-content">
              <div class="feature-title">Kostenlos</div>
              <div class="feature-text">
                Der gesamte Quell-Code ist kostenlos erhältlich und kann selbst
                auf einem Server gehosted und angepasst werden.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="center how-it-works">
      <div class="app-container center">
        <h3 class="title is-3">Schritt für Schritt</h3>
        <h5 class="subtitle is-5 has-text-accent">Wie funktionert es?</h5>
        <div class="how-it-works-wrapper">
          <div class="how-it-work">
            <div class="how-it-work-gif">
              <img src="/images/gif/step_1.gif" />
            </div>
            <div class="how-it-work-content">
              <div class="how-it-work-step">Schritt 1</div>
              <div class="how-it-work-title">Inhalt und Aussehen anpassen</div>
              <div class="how-it-work-text">
                Passe über das Admin-Backend den gesamten Inhalt sowie das
                Aussehen deiner Hochzeitswebseite an. Es gibt auch schon
                spiezielle Objekte für den Inhalt, damit deine Seite
                professionell aussieht.
              </div>
            </div>
          </div>
          <div class="how-it-work even">
            <div class="how-it-work-gif">
              <img src="/images/gif/step_2.gif" />
            </div>
            <div class="how-it-work-content">
              <div class="how-it-work-step">Schritt 2</div>
              <div class="how-it-work-title">Einladungen und Gäste anlegen</div>
              <div class="how-it-work-text">
                Lege im Backend die einzelnen Einladungen mit jeweils einem
                persönlichen Code an. Ordne dieser Einladung dann Gästen hinzu.
                Am Ende versende den Link zur deiner Hochzeitsseite mit dem
                jeweiligen Code.
              </div>
            </div>
          </div>
          <div class="how-it-work">
            <div class="how-it-work-gif">
              <img src="/images/gif/step_3.gif" />
            </div>
            <div class="how-it-work-content">
              <div class="how-it-work-step">Schritt 3</div>
              <div class="how-it-work-title">
                Rückmeldungen im Dashbaord ansehen
              </div>
              <div class="how-it-work-text">
                Lehn dich nun zurück und schaue dir später die Rückmeldungen im
                Dashboard an. Hier kannst du auch überprüfen, wer noch keine
                Rückmeldung gegeben hat und eine extra Erinnerung braucht. 😅
              </div>
            </div>
          </div>
        </div>
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

<style lang="scss">
@import './../assets/css/variables';
section.intro .app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .font-pretty {
    font-weight: 400;
  }
  .svg {
    padding-top: $spacing-M;
    padding-bottom: $spacing-M;
    width: 175px;

    @media (max-width: $breakpoint-xs) {
      padding-top: $spacing-S;
      padding-bottom: $spacing-S;
    }
  }
  .intro-text {
    color: $default-secondary2;
    max-width: 860px;
  }

  .action-btn {
    margin-top: $spacing-L;
    margin-bottom: $spacing-L;
    display: flex;
    gap: $spacing-L;
  }
  .intro-gif img {
    border: 5px solid lighten($accent-color, 25%);
    border-radius: 8px;
  }
}
section.features {
  .feature-wrapper {
    margin-top: $spacing-XL;
    display: flex;
    gap: $spacing-L;
    justify-content: center;
    flex-wrap: wrap;
  }

  .feature {
    display: flex;
    gap: $spacing-M;
  }

  .feature-content {
    align-items: flex-start;
    justify-content: left;
    display: flex;
    flex-direction: column;
    gap: $spacing-S;
    text-align: left;
    min-width: 250px;
    max-width: 350px;
  }

  .feature-title {
    font-size: $typography-headline5;
    font-weight: 400;
    line-height: calc($typography-headline5 + 10px);
  }
  .feature-text {
    font-size: $typography-body1;
    line-height: calc($typography-body1 + 10px);
  }
}

section.how-it-works {
  .how-it-works-wrapper {
    margin-top: $spacing-XL;
    display: flex;
    flex-direction: column;
    gap: $spacing-XXXL;
    width: 100%;
    justify-content: center;

    @media (max-width: $breakpoint-sm) {
      gap: $spacing-XL;
    }
  }
  .how-it-work {
    display: flex;
    gap: $spacing-XXL;
    flex-direction: row;

    &.even {
      flex-direction: row-reverse;
    }

    @media (max-width: $breakpoint-sm) {
      flex-direction: column-reverse !important;
      gap: $spacing-L;
    }
  }
  .how-it-work-gif {
    flex: 2;
    @media (max-width: $breakpoint-sm) {
      margin: auto;
      max-width: 500px;
    }

    img {
      border: 5px solid lighten($accent-color, 25%);
      border-radius: 8px;
    }
  }
  .how-it-work-content {
    flex: 1;
    text-align: left;
  }
  .how-it-work-step {
    margin-top: $spacing-XL;
    color: $primary-color;

    @media (max-width: $breakpoint-sm) {
      margin-top: unset;
    }
  }
  .how-it-work-title {
    margin-top: $spacing-L;

    font-size: $typography-headline5;
    font-weight: 400;
    line-height: calc($typography-headline5 + 10px);

    @media (max-width: $breakpoint-sm) {
      margin-top: $spacing-M;
    }
  }
  .how-it-work-text {
    margin-top: $spacing-M;

    font-size: $typography-body1;
    line-height: calc($typography-body1 + 10px);
    @media (max-width: $breakpoint-sm) {
      margin-top: unset;
    }
  }
}
</style>
