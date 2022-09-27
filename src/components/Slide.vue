<template>
  <div style="padding: 0px 0px; background-color: #2a2a2a">
    <v-main>
      <v-carousel height="100%">
        <!--Src image-->
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
          <!--title-->
          <v-row class="fill-height" align="end">
            <v-col>
              <div class="display-2 white--text">
                <p>{{item.title}}</p>
              </div>
            </v-col>
          </v-row>
          <!--End title-->
        </v-carousel-item>
      </v-carousel>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "SliderImage",
  data() {
    return {
      items: [
        {
          src: "https://media.discordapp.net/attachments/899150665358655518/1024173975477166131/Property_1Banner_Slide_1.png?width=899&height=400",
          title:"",
        },
        {
          src: "https://media.discordapp.net/attachments/899150665358655518/1024176762449559632/Property_1Banner_Slide_2.png?width=899&height=400",
        },
        {
          src: "https://media.discordapp.net/attachments/899150665358655518/1024176762780921876/Property_1Banner_Slide_3.png?width=899&height=400",
        },
      ],
    };
  },
};
</script>
<style>
  .col-sm-4{
    margin-left: 10%;
  }
</style>