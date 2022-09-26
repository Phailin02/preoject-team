<template>
  <v-app>
    <div>
        <v-content>
    <v-img max-height="" src="../assets/Rectangle 77.png"> </v-img>
  </v-content>
  <v-container style="padding:50px" >
    
    <v-col>
        <v-row >
        
        <v-col cols="6"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="ຄົ້ນຫາ ຫົວຂໍ້, ວັນທີ່..."
          ></v-text-field>
         
            <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="410"
                  >
                   
                    <v-img
                      height="250"
                      src="../assets/news/new1.png"
                    ></v-img>

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      

                      <div>
                        Small plates, salads & sandwiches - an intimate setting
                        with 12 indoor seats plus patio seating.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="reserve"
                      >
                        Reserve
                      </v-btn>
                    </v-card-actions>
                  </v-card>
          
                  <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="410"
                  >
                   
                    <v-img
                      height="250"
                      src="../assets/news/new2.png"
                    ></v-img>

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      

                      <div>
                        Small plates, salads & sandwiches - an intimate setting
                        with 12 indoor seats plus patio seating.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="reserve"
                      >
                        Reserve
                      </v-btn>
                    </v-card-actions>
                  </v-card>
           
                  <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="410"
                  >
                   
                    <v-img
                      height="250"
                      src="../assets/news/new3.png"
                    ></v-img>

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      

                      <div>
                        Small plates, salads & sandwiches - an intimate setting
                        with 12 indoor seats plus patio seating.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="reserve"
                      >
                        Reserve
                      </v-btn>
                    </v-card-actions>
                  </v-card>
      
                  <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="410"
                  >
                   
                    <v-img
                      height="250"
                      src="../assets/news/new1.png"
                    ></v-img>

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      

                      <div>
                        Small plates, salads & sandwiches - an intimate setting
                        with 12 indoor seats plus patio seating.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="reserve"
                      >
                        Reserve
                      </v-btn>
                    </v-card-actions>
                  </v-card>
           
        </v-col>
        
        <v-col cols="6" class="text-center">
            <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="410"
                  >
                   
                    <v-img
                      height="250"
                      src="../assets/news/new4.png"
                    ></v-img>

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      

                      <div>
                        Small plates, salads & sandwiches - an intimate setting
                        with 12 indoor seats plus patio seating.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="reserve"
                      >
                        Reserve
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="410"
                  >
                   
                    <v-img
                      height="250"
                      src="../assets/news/new5.png"
                    ></v-img>

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      

                      <div>
                        Small plates, salads & sandwiches - an intimate setting
                        with 12 indoor seats plus patio seating.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="reserve"
                      >
                        Reserve
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="410"
                  >
                   
                    <v-img
                      height="250"
                      src="../assets/news/new6.png"
                    ></v-img>

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      

                      <div>
                        Small plates, salads & sandwiches - an intimate setting
                        with 12 indoor seats plus patio seating.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="reserve"
                      >
                        Reserve
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="410"
                  >
                   
                    <v-img
                      height="250"
                      src="../assets/news/new2.png"
                    ></v-img>

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      

                      <div>
                        Small plates, salads & sandwiches - an intimate setting
                        with 12 indoor seats plus patio seating.
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="reserve"
                      >
                        Reserve
                      </v-btn>
                    </v-card-actions>
                  </v-card>

        </v-col>
        
    </v-row>
    </v-col>
  
    <div class="text-center">
    <v-pagination
      v-model="page"
      :length="4"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
    
    
  </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  data () {
      return {
        page: 1,
      }
    },
}
</script>

<style>

</style>