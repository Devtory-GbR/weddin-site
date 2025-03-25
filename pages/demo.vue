<template>
  <div>
    <section>
      <div class="app-container">
        <h3 class="title is-3">Live Demo</h3>
        <h5 class="subtitle is-5 has-text-accent">Aus der Sicht eurer Gäste</h5>

        <div class="demo-card-wrapper">
          <div class="card">
            <div class="card-content">
              <div>FEIERT MIT UNS UNSERE HOCHZEIT</div>
              <div class="demo-title font-pretty has-text-accent">
                Sandra & Martin
              </div>
              <div class="demo-date">
                <div class="weekdate">Mittwoch</div>
                <div class="date">
                  <div class="month">April</div>
                  <div class="day">24</div>
                  <div class="year">2024</div>
                </div>
                <div class="time">13 UHR</div>
              </div>
              <div class="qr-code">
                <nuxt-img src="/images/qr-code-1.png" />
              </div>
              <div class="url">
                <a href="https://demo.weddin.site" target="_blank">https://demo.weddin.site</a>
              </div>
              <div class="code">Code: <span>test</span></div>
              <div class="info">
                Bitte bis zum 31.12.2023 über die Webseite zu/-absagen
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="app-container">
        <h4 class="title is-4">Zugangsdaten Brautpaar</h4>
        <h6 class="subtitle is-6 has-text-accent">
          Eure Sicht mit Dashboard um alles im Blick zu haben
        </h6>
        <p>
          <b>URL:</b>
          <a href="https://demo.weddin.site" target="_blank">https://demo.weddin.site</a>
        </p>
        <p><b>Code:</b> brautpaar</p>
      </div>
    </section>
    <section>
      <div class="app-container">
        <h4 class="title is-4">Zugangsdaten Administration - Strapi</h4>
        <h6 class="subtitle is-6 has-text-accent">
          Probiere dich aus und passe Design u. Inhalte spielend an
        </h6>
        <p>
          <b>URL:</b>
          <a href="https://demo.content.weddin.site/admin" target="_blank">https://demo.content.weddin.site/admin</a>
        </p>
        <p><b>Email:</b> demo@weddin.site</p>
        <p><b>Password:</b> DemoWeddin1</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DemoPage',
  transition: 'slide-bottom',
};
</script>

<style lang="scss">
@import '/assets/css/variables';

.demo-card-wrapper {
  margin-top: $spacing-L;
  margin-bottom: $spacing-L;
  display: flex;
  gap: $spacing-M;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  .card {
    min-width: 400px;
    max-width: 420px;

    @media (max-width: $breakpoint-sm) {
      min-width: unset;
      width: 100%;
    }

    display: flex;

    .card-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      .demo-title {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        font-size: $typography-headline3;
      }

      .demo-date {
        margin-bottom: 0.5em;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        .weekdate,
        .time {
          padding-top: 0.5em;
          padding-bottom: 0.5em;
          padding-left: 1.5em;
          padding-right: 1.5em;
          border-top: 1px solid $primary-color;
          border-bottom: 1px solid $primary-color;
        }

        .date {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .day {
            font-size: $typography-headline4;
          }
        }
      }

      .qr-code {
        max-width: 175px;
      }

      .url {
        margin-bottom: 0.5em;
      }

      .code {
        span {
          padding-left: 0.5em;
          padding-right: 0.5em;
          color: $accent-color;
          border-bottom: 1px solid $default-secondary;
        }

        margin-bottom: 1em;
      }

      .info {
        color: $default-secondary2;
        text-align: center;
        font-size: $typography-body2;
      }
    }
  }
}
</style>
