<template>
  <div class="main-nav">
    <router-link to="/">Projects</router-link>
    <router-link to="/addProject">Add Projects</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .main-nav {
        text-align: center;
        margin: 40px auto;
    }

    .main-nav a {
        display: inline-block;
        text-decoration: none;
        margin: 10px;
        color: #999;
        font-size: 18px;
    }

    a.router-link-active {
        border-bottom: 3px solid #00ce89;
        padding-bottom: 4px;
    }
</style>