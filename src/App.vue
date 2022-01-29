<template>
  <div id="app" style="background-color: #073A3B">
   
    <div class="container-fluid">
      <Menu /> <!-- se añade el menú -->
      <b-breadcrumb :items="items"></b-breadcrumb>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  name: 'App',
  components: {
    Menu,

  },
  data() {
      return {
        items: [
                   {
            text: 'Volver a la',
            active: true
          },
          {
            text: 'Zona',
            href: '/zona',
            to:"/zona"
          }
 
        ]
      }
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
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>