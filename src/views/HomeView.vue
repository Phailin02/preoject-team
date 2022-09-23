<template>
  <main>
    <HomePage/>
    
  </main>
   
  
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import HomePage from '../views/HomePage.vue';

  export default {
    name: 'Home', 

    components: {
    HelloWorld,
    HomePage,
},
  }
</script>
