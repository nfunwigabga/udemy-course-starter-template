<template>
  <v-app>
    <TopNav></TopNav>
    <v-main>
      <Child />
    </v-main>
    <SiteFooter />
  </v-app>
</template> 

<script>
import Child from "./partials/Child";
import TopNav from "./partials/TopNav";
import SiteFooter from "./partials/SiteFooter";
export default {
  name: "MainLayout",
  components: {
    Child,
    TopNav,
    SiteFooter,
  },
};
</script>