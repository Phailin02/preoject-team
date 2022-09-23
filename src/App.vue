<template>
  <div class="body">
    <v-app>
    
        <NavBar/>
 

   <p>Hello Annie</p>
   <h1>heo</h1>

   <p>Hello Annie</p>



      <router-view/>
   <FooTer/>
     
    </v-app>
  </div>
</template>

<script>
import NavBar from './views/NavBar.vue';
import DoNate from './views/DoNate.vue';
import FooTer from './views/FooTer.vue';


export default {
  name: "App",
  data() {
    {
      //
    }
  },
  components: { NavBar, DoNate, FooTer },
};
</script>
<style >
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap");
* {
  font-family: "Noto Sans Lao", sans-serif;
}
</style>