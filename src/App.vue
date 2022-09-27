<template>
  <div class="body">
    <v-app>
      <NavBar/>
   <!-- <p>Hello Annie</p>
   <h1>heo</h1> -->
      <router-view/>
      <FooTer/>
     
    </v-app>
  </div>
</template>

<script>
import NavBar from './views/NavBar.vue';
import FooTer from './views/FooTer.vue';


export default {
  name: "App",
  data() {
    {
      //
    }
  },
  components: { NavBar, FooTer },
};
</script>
<style >
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap");
* {
  font-family: "Noto Sans Lao", sans-serif;
}
</style>