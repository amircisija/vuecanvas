<template>
  <div id="app">
    <AppNavigation/>
    <FormSection/>
    <el-main class="main__content">
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
import AppNavigation from "./components/AppNavigation.vue";
import FormSection from "./components/FormSection.vue";
export default {
  name: "App",
  components: {
    AppNavigation,
    FormSection
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main__content {
  padding-top: 100px;
}
</style>
