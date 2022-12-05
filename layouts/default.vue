<template>
  <div id="app">
    <b-sidebar
      v-model="open"
      type="is-light"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay="overlay"
      :right="right"
    >
      <SideBarMenu @closeSidebar="handleSidebarClose"></SideBarMenu>
    </b-sidebar>
    <div class="app-wrapper">
      <Header @toogleSidebar="handleSidebarToogle" />
      <main class="app-content">
        <Nuxt />
      </main>
      <LazyFooter />
    </div>
  </div>
</template>
<script>
import SideBarMenu from '../components/SideBarMenu.vue';

export default {
  components: { SideBarMenu },
  data() {
    return {
      open: false,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: false,
    };
  },
  methods: {
    handleSidebarToogle() {
      this.open = !this.open;
    },
    handleSidebarOpen() {
      this.open = true;
    },
    handleSidebarClose() {
      this.open = false;
    },
  },
};
</script>
<style lang="scss">
@import './../assets/css/variables';
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .app-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
