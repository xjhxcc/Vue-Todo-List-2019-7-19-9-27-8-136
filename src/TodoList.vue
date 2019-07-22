<template>
  <div id="app">
    <div class="mainPanel">
      <Header></Header>
      <Body :showType="showType"></Body>
      <Footer @get-show-type="getShowType"></Footer>
      <div></div>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Body,
    Footer
  },
  data() {
    return {
      showType: "ALL"
    };
  },
  methods: {
    getShowType: function(showType) {
      this.showType = showType;
    }
  }
};
</script>