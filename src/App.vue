<template>
  <div id="nav">
      <h3 style="display:inline-block; padding-right:10em; text-align:left">National Epics
      
      </h3>
      <router-link to="/" class="nav-item">HOME</router-link> 
      <router-link to="/about" class="nav-item">ABOUT</router-link>
      <router-link to="/teaching" class="nav-item">TEACHING</router-link>
  </div>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-item{
  padding:10px;
  text-decoration:none;
  font-weight:bold;
}

p, ul {
  margin-left:5em;
  margin-right:5em;
  text-align:left;

}



</style>
