<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">
          <router-link class="nav__link" to="/">Home</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link class="nav__link" to="/about">About</router-link>
        </el-menu-item>
      </el-menu>
    </el-header>
  </el-container>
</template>
<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      activeIndex: "1"
    };
  }
};
</script>
<style>
.nav__link {
  text-decoration: none;
}
</style>

