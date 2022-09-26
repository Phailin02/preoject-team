<template>
  <div class="body">
    <slide />
    <v-container>
      <v-row>
        <v-col style="padding-top: 80px; padding-bottom: 75px">
          <h2 class="mb-5" style="font-weight: 500">ສິດທິມະນຸດຂອງຄົນຫູໜວກ:</h2>

          <p>
            ສິດ​ທິ​ມະ​ນຸດ​ແມ່ນ​ທົ່ວ​ໄປ, ບໍ່​ແບ່ງ​ແຍກ​ແລະ​ເຊື່ອມ​ຕໍ່​ກັນ.
            ເຂົາເຈົ້າເປັນຂອງທຸກຄົນ, ໂດຍບໍ່ຄໍານຶງເຖິງເພດ, ຊາດ ຫຼືຊົນເຜົ່າ, ສີຜິວ,
            ສາສະຫນາ, ພາສາ,ຫຼືສະຖານະພາບ ອື່ນໆເຊັ່ນ:
            ຄວາມພິການຫຼືຫູໜວກ.ແຕ່ຫນ້າເສຍດາຍ,ເນື່ອງຈາກຄວາມລໍາອຽງຂອງສັງຄົມແລະການສົມມຸດຕິຖານທີ່ບໍ່ຖືກຕ້ອງສິດທິຂອງຄົນຫູຫນວກມັກຈະຖືກມອງຂ້າມຫຼືຖືກປະຕິເສດ-ໂດຍສະເພາະ
            ໃນປະເທດທີ່ກໍາລັງພັດທະນາ.WFDເຮັດວຽກເພື່ອສົ່ງເສີມແລະສົ່ງເສີມສິດທິມະນຸດຂອງຄົນຫູໜວກ
            ໂດຍສະເພາະໃນຂົງເຂດຕໍ່ໄປນີ້:
          </p>
        </v-col>
        <v-col style="padding: 30px; padding-top: 70px">
          <v-card class="d-inline-flex pa-2 mb-2" color="#297FCA" outlined>
            <div>
              <h2 class="white--text mb-1" style="font-weight: 500">
                ພວກເຮົາແມ່ນໃຜ?
              </h2>
            </div>
          </v-card>
          <p>
            ມູນນິທິຄົນຫູໜວກເປັນອົງການສາກົນທີ່ບໍ່ຫວັງຜົນກຳໄລ
            ແລະບໍ່ຂຶ້ນກັບລັດຖະບານ ຂອງສະມາຄົມຄົນຫູໜວກ ທີ່ມາຈາກ 133
            ປະເທດ.ນອກເຫນືອໄປຈາກນີ້,ສະມາຊິກ ຂອງຕົນປະກອບມີສະມາຊິກສະມາຄົມ,
            ສະມາຊິກສາກົນແລະສະມາຊິກສ່ວນບຸກຄົນ
            ເຊັ່ນດຽວກັນກັບສອງປະເພດຂອງສະມາຊິກຊາວໜຸ່ມ. WFD ມີ 8 ກອງ​ເລຂາ​ພາກ​ພື້ນ
            ​ແລະ ສະມາຊິກ​ຮ່ວມ​ມື 1 ທ່ານ. ບ່ອນນັ່ງທາງດ້ານກົດໝາຍແມ່ນຢູ່ໃນ
            Helsinki, Finland ບ່ອນທີ່ກອງເລຂາ WFD ດໍາເນີນການ.
          </p>
        </v-col>
      </v-row>

      <!-- <v-row justify="center" style="padding: 30px"> 
        <v-img
          style="padding-top: 25px"
          max-height="300"
          max-width="1100"
          src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        >
          <v-btn class="d-inline-flex pa-5 blue" outlined tile>
            <div>
              <h2 class="white--text">
                ກ່ຽວກັບການສູນເສຍການໄດ້ຍິນ&ສາເຫດຂອງການສູນເສຍການໄດ້ຍິນ
              </h2>
            </div>
          </v-btn>
        </v-img>
      </v-row> -->

      <div class="pic">
        <v-img
          class="image-cover"
          style="padding-top: 25px"
          src="../assets/Rectangle 7.png"
        ></v-img>
        <div class="btn-link">
          <a>
            <h2 class="white--text" style="font-weight: 500; padding-top: 5px">
              ກ່ຽວກັບການສູນເສຍການໄດ້ຍິນ&ສາເຫດຂອງການສູນເສຍການໄດ້ຍິນ
            </h2>
          </a>
        </div>
      </div>

      <v-row>
        <v-col style="padding-top: 80px">
          <h2 class="mb-5" style="font-weight: 500">ກິດຈະກຳລ່າສຸດ:</h2>
        </v-col>
      </v-row>
      <!-- slide card -->
      <!-- <v-col>
        <div class="slide-container swiper">
          <div class="slide-content">
            <div class="card-wrapper swiper-wrapper">
              <v-row>
                <v-col>
                  <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="374"
                  >
                    <template slot="progress">
                      <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                      ></v-progress-linear>
                    </template>

                    <v-img
                      height="250"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      <v-row align="center" class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                        ></v-rating>

                        <div class="grey--text ms-4">4.5 (413)</div>
                      </v-row>

                      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

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
                <v-col>
                  <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="374"
                  >
                    <template slot="progress">
                      <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                      ></v-progress-linear>
                    </template>

                    <v-img
                      height="250"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      <v-row align="center" class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                        ></v-rating>

                        <div class="grey--text ms-4">4.5 (413)</div>
                      </v-row>

                      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

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
            </div>
          </div>
          <div class="swiper-button-next swiper-navBtn"></div>
          <div class="swiper-button-prev swiper-navBtn"></div>
          <div class="swiper-pagination"></div>
        </div>
      </v-col> -->
      <v-col style="padding-top: 50px">
        <v-sheet class="mx-auto" elevation="8" max-width="1135" height="400">
          <v-slide-group v-model="model" class="pa-4" show-arrows>
            <v-slide-item>
              <v-card class="ma-4" height="330" width="300">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img height="200" src="../assets/news/new1.png"></v-img>

                <v-card-text>
                  <div>
                    ຜູ້ຮັບທຶນຊ່ວຍເຫຼືອຄົນຫູໜວກ 2020 Usher Kids
                    ສະໜອງການອັບເດດອັນມີຄ່າຂອງໂຄງການ Usher Kids Australia
                    Educational Video Series ຂອງເຂົາເຈົ້າ
                    <a class="text-decoration-underline">ອ່ານເພີ່ມ></a>
                  </div>
                </v-card-text>
              </v-card>
            </v-slide-item>
            <v-slide-item v-for="n in 1" :key="n">
              <v-card class="ma-4" height="330" width="300">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img height="200" src="../assets/Banner1 1.png"></v-img>

                <v-card-text>
                  <div>
                    ເປັນການກຸສົນສະໜັບສະໜູນນັກຮົບເກົ່າ ຂອງ​ກອງ​ທັບ​ອາ​ວຸດ​,
                    ສະ​ຖາ​ນະ​ການ​ ຢູ່​ໃນ​ອັຟກາ​ນິສຖານ
                    ​ເປັນ​ການ​ເສຍ​ໃຈ​ຢ່າງ​ເລິກ​ເຊິ່ງສຳລັບ​ພວກ​ເຮົາ
                    ​ແລະ​ພວກ​ທີ່​ພວກ​ເຮົາ​ສະໜັບສະໜູນ
                    <a class="text-decoration-underline">ອ່ານເພີ່ມ></a>
                  </div>
                </v-card-text>
              </v-card>
            </v-slide-item>
            <v-slide-item v-for="n in 1" :key="n" v-slot="{ toggle }">
              <v-card class="ma-4" height="330" width="300" @click="toggle">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img height="200" src="../assets/banner 2 1.png"></v-img>

                <v-card-text>
                  <div>
                    ອັນນີ້ຂຶ້ນກັບຄວາມດັງຂອງສຽງ, ດົນປານ ໃດທີ່ເຈົ້າຖືກເປີດເຜີຍ
                    ແລະວ່າສຽງນັ້ນມີ ຄວາມແຮງປານໃດ
                    <a class="text-decoration-underline">ອ່ານເພີ່ມ></a>
                  </div>
                </v-card-text>
              </v-card>
            </v-slide-item>
            <v-slide-item v-for="n in 1" :key="n" v-slot="{ toggle }">
              <v-card class="ma-4" height="330" width="300" @click="toggle">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img height="200" src="../assets/news/new1.png"></v-img>

                <v-card-text>
                  <div>
                    ປະເພດຂອງການສູນເສຍການໄດ້ຍິນການສູນເສຍການໄດ້ຍິນມີສີ່ປະເພດ:
<a class="text-decoration-underline">ອ່ານເພີ່ມ></a>
                  </div>
                </v-card-text>
              </v-card>
            </v-slide-item>
            <v-slide-item v-for="n in 1" :key="n" v-slot="{ toggle }">
              <v-card class="ma-4" height="330" width="300" @click="toggle">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img height="200" src="../assets/news/new2.png"></v-img>

                <v-card-text>
                  <div>
                    Small plates, salads & sandwiches - an intimate setting with
                    12 indoor seats plus patio seating.
                  </div>
                </v-card-text>
              </v-card>
            </v-slide-item>
            <v-slide-item v-for="n in 1" :key="n" v-slot="{ toggle }">
              <v-card class="ma-4" height="330" width="300" @click="toggle">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img height="200" src="../assets/news/new3.png"></v-img>

                <v-card-text>
                  <div>
                    Small plates, salads & sandwiches - an intimate setting with
                    12 indoor seats plus patio seating.
                  </div>
                </v-card-text>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>

<<<<<<< HEAD
=======
      <v-sheet class="mx-auto" elevation="8" max-width="1135" height="400">
        <v-slide-group
          v-model="model"
          class="pa-4"
          active-class="primary"
          show-arrows
        >
          <v-slide-item v-for="n in 1" :key="n" v-slot="{ toggle }">
            <v-card class="ma-4" height="330" width="300" @click="toggle">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="200" src="../assets/news/new4.png"></v-img>

              <v-card-text>
                <div>
                  Small plates, salads & sandwiches - an intimate setting with
                  12 indoor seats plus patio seating.
                </div>
              </v-card-text>
            </v-card>
          </v-slide-item>
          <v-slide-item v-for="n in 1" :key="n" v-slot="{ toggle }">
            <v-card class="ma-4" height="330" width="300" @click="toggle">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="200" src="../assets/Banner1 1.png"></v-img>

              <v-card-text>
                <div>
                  Small plates, salads & sandwiches - an intimate setting with
                  12 indoor seats plus patio seating.
                </div>
              </v-card-text>
            </v-card>
          </v-slide-item>
          <v-slide-item v-for="n in 1" :key="n" v-slot="{ toggle }">
            <v-card class="ma-4" height="330" width="300" @click="toggle">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="200" src="../assets/banner 2 1.png"></v-img>

              <v-card-text>
                <div>
                  Small plates, salads & sandwiches - an intimate setting with
                  12 indoor seats plus patio seating.
                </div>
              </v-card-text>
            </v-card>
          </v-slide-item>
          <v-slide-item v-for="n in 1" :key="n" v-slot="{ toggle }">
            <v-card class="ma-4" height="330" width="300" @click="toggle">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="200" src="../assets/news/new1.png"></v-img>

              <v-card-text>
                <div>
                  Small plates, salads & sandwiches - an intimate setting with
                  12 indoor seats plus patio seating.
                </div>
              </v-card-text>
            </v-card>
          </v-slide-item>
          <v-slide-item v-for="n in 1" :key="n" v-slot="{ toggle }">
            <v-card class="ma-4" height="330" width="300" @click="toggle">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="200" src="../assets/news/new2.png"></v-img>

              <v-card-text>
                <div>
                  Small plates, salads & sandwiches - an intimate setting with
                  12 indoor seats plus patio seating.
                </div>
              </v-card-text>
            </v-card>
          </v-slide-item>
          <v-slide-item v-for="n in 1" :key="n" v-slot="{ toggle }">
            <v-card class="ma-4" height="330" width="300" @click="toggle">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="200" src="../assets/news/new3.png"></v-img>

              <v-card-text>
                <div>
                  Small plates, salads & sandwiches - an intimate setting with
                  12 indoor seats plus patio seating.
                </div>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>

>>>>>>> annie
      <v-row justify="center" style="padding: 50px">
        <v-btn class="pa-8" color="#297FCA">
          <h1 class="white--text" style="font-weight: 500">ເບິ່ງຂ່າວທັງໝົດ></h1>
        </v-btn>
      </v-row>
    </v-container>
    <v-img max-height="300" src="../assets/banner 2 1.png"> </v-img>
    <v-container>
      <v-row>
        <v-col style="padding: 50px">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="550"
            max-width="550"
            src="../assets/pic2.png"
          ></v-img>
        </v-col>
        <v-col style="padding: 85px">
          <p>
            ປະ​ມານ 56 ລ້ານ​ຄົນ​ຫູ​ໜວກ, 80% ຂອງ​ຄົນ​ຫູ​ໜວກ 70
            ລ້ານ​ຄົນ​ໃນ​ໂລກ​ຂອງ​ເຮົາ​ທຸກ​ມື້​ນີ້, ບໍ່​ໄດ້​ຮັບ​ການ​ສຶກ​ສາ​ເລີຍ.
            ນີ້​ແມ່ນ​ເປັນ​ຄວາມ​ຈິງ​ໂດຍ​ສະ​ເພາະ​ໃນ​ບັນດາ​ແມ່ຍິງ​ຫູໜວກ, ​ເດັກ​ຍິງ,
            ​ແລະ ປະຊາຊົນ​ໃນ​ບັນດາ​ປະ​ເທດ​ທີ່​ກຳລັງ​ພັດທະນາ.
            ນີ້​ແມ່ນ​ການ​ລະ​ເມີດ​ສິດທິ​ທົ່ວ​ໄປ​ໃນ​ການ​ສຶກສາ.
            ເຖິງແມ່ນວ່າຈະມີການສຶກສາໃຫ້ແກ່ຄົນຫູໜວກ, ແຕ່ມັນຍັງຕໍ່າກວ່າມາດຕະຖານ
            ການສຶກສາແລະໂອກາດທີ່ສະໜອງໃຫ້ຄົນຫູໜວກສະເໝີ.ດັ່ງທີ່ການຄົ້ນຄວ້າໄດ້ສະ
            ແດງໃຫ້ເຫັນເລື້ອຍໆ,ຄວາມສຳຄັນຂອງການສຶກສາຊັ້ນຕົ້ນແລະປະຖົມທີ່ມີຄຸນນະພາບໃນໄວເດັກເຊັ່ນດຽວກັບການຮຽນຮູ້ຊັ້ນມັດທະຍົມ,ຊັ້ນປະຖົມແລະຕະຫຼອດຊີວິດແມ່ນບໍ່ສາມາດເຂົ້າໃຈໄດ້.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<!-- Swiper JS -->
<!-- <script src="../js/swiper-bundle.min.js"></script> -->
<!-- JavaScript -->
<!-- <script src="../js/script.js"></script> -->

<script>
// import "../js/script";
import "../js/swiper-bundle.min.js";
import "../css/swiper-bundle.min.css";
import Slide from "../components/Slide.vue";
export default {
  name: "App",
  name: "SliderImage",
  data() {
    return {
      items: [
        {
          src: require("../assets/pic2.png"),
          title: "Wellcome",
          description: "Keolanee hotel",
        },
        {
          src: "https://i.pinimg.com/564x/f3/22/16/f3221654dffe218d2502fadaa79c40f1.jpg",
          title: "Wellcome 2",
          description: "Keolanee hotel",
        },
        {
          src: "https://media.discordapp.net/attachments/826834529435648000/1007140013152153640/banner-2.png?width=1208&height=662",
          title: "Wellcome 3",
          description: "Keolanee hotel",
        },
      ],
    };
  },
  components: { Slide },
};
</script>
<style>
v-col {
  padding: 20px;
}
.test {
  width: 80%;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  background: red;
}
.pic {
  display: flex;
  position: relative;
  background: blue;
  height: 400px;
  position: relative;
}
.image-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.btn-link {
  background: #297fca;
  padding: 5px;
  display: flex;
  position: absolute;
  z-index: 1;
  left: -20px;
  /* margin-left: 20px; */
  margin-top: 20px;
  /* top: 2px; */
}
/* .btn{
  
  display: flex;
  background:#297FCA;
  padding: 10px;
} */
h2 {
  margin-bottom: 20px;
  color: #246299;
}
/* @import url(""); */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

/* body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blanchedalmond;
} */

.slide-container {
  max-width: 1120px;
  width: 100%;

  padding: 40px 0;
}

.slide-content {
  margin: 0 40px;

  overflow: hidden;
  border-radius: 25px;
}

.image-content,
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 24px;
}

.image-content {
  position: relative;
  row-gap: 5px;
  border-radius: 25px 25px 0 25px;
}

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: aquamarine;
  border-radius: 25px 25px 0 25px;
}

.card {
  border-radius: 25px;
  background-color: #fff;
}

.card-image {
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: #fff;
  padding: 3px;
}

.card-image .card-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #407;
}

.name {
  font: 18px;
  font-weight: 500;
  color: darkgoldenrod;
  text-align: center;
}

.description {
  font-size: 14px;
  color: #707070;
  text-align: center;
}

.button {
  border: none;
  font-size: 16px;
  color: #fff;
  padding: 8px 26px;
  background-color: aqua;
  border-radius: 6px;
  margin: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: cornflowerblue;
}

.swiper-navBtn {
  color: aquamarine;
  transition: color 0.3s ease;
}

.swiper-navBtn:hover {
  color: dodgerblue;
}

.swiper-navBtn:before {
}

.swiper-navBtn:after {
  font-size: 40px;
}

.swiper-button-next {
  right: 0;
}

.swiper-button-prev {
  left: 0;
}

.swiper-pagination-bullet {
  background-color: cornflowerblue;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background-color: #6e93f7;
}

@media screen and (max-width: 768px) {
  .slide-content {
    margin: 0 10px;
  }

  .swiper-navBtn {
    display: none;
  }
}
* {
  font-family: "Noto Sans Lao", sans-serif;
}
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap");
</style>
