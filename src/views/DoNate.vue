<template>
  <v-app>
    <v-main>
      <div class="donate pa-10">
        <v-container class="my-5 px-15">
          <h class="text-h5 font-weight-bold"> <span>ບໍລິຈາກໃຫ້</span></h>
          <h1>ສະຫະພັນຄົນຫູໜວກ</h1>
          <v-divider class="my-5 weight-black"></v-divider>
          <div class="txt-title mb-10">
            <p class="black--text text-h5 pb-3">
              <span>ໃສ່ຂໍ້ມູນຂອງທ່ານ</span>
            </p>
            <v-row >
              <v-col cols="12" sm="6">
                <p>ຊື່</p>
                <v-text-field
                  v-model="message4"
                  outlined
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <p>ນາມສະກຸນ</p>
                <v-text-field
                  v-model="message4"
                  outlined
                  clearable
                ></v-text-field>
              </v-col>
            </v-row>
            <p>ອີເມວ:</p>
            <v-text-field v-model="message4" outlined clearable></v-text-field>
            <v-row>
              <v-col cols="12" sm="6">
                <p>ເລືອກປະເທດ:</p>

                <v-select :items="items" outlined></v-select>

                <p>ທີ່ຢູ່:</p>
                <v-text-field
                  v-model="message4"
                  outlined
                  clearable
                ></v-text-field>
              </v-col>

              <v-col>
                <p>ທີ່ຢູ່ໄປສະນີ:</p>
                <v-text-field
                  v-model="message4"
                  outlined
                  clearable
                ></v-text-field>
                <p>ເມືອງ</p>
                <v-text-field
                  v-model="message4"
                  outlined
                  clearable
                ></v-text-field>
              </v-col>
            </v-row>
            <p>ແຂວງ</p>
            <v-text-field v-model="message4" outlined clearable></v-text-field>
          </div>
          <p class="black--text text-h4 pb-3">
              <span>ບໍລິຈາກ :</span>
            </p>
          <!-- <div class="donatecard">
            <button class="btn">50.000 k</button>
            <button>50.000 k</button>
            <button class="btn">50.000 k</button>
            <button class="btn">50.000 k</button>
            <button>50.000 k</button>
            <button class="btn">50.000 k</button>
        </div> -->

          <!-- <v-row class="d-flex">
          <v-col cols="3">
            <div class="donatecard"><span>50.000 </span></div>
          </v-col>
          <v-col
            ><div class="donatecard"><span>50.000 </span></div></v-col
          >

          <v-col cols="3"
            ><div class="donatecard"><span>50.000 </span></div></v-col
          >
          <v-col cols="3"
            ><div class="donatecard"><span>50.000 </span></div></v-col
          >

          <v-col cols="3"
            ><div class="donatecard"><span>50.000 </span></div></v-col
          >
          <v-col cols="3"
            ><div class="donatecard"><span>50.000 </span></div></v-col
          >
        </v-row> -->
          <v-row class="d-flex">
            <v-col>
              <v-item-group mandatory>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-item v-slot="{ toggle }" active-class="bg-active">
                        <v-card
                          class="d-flex align-center justify-center text-h5"
                          height="100"
                          @click="toggle"
                        >
                          <span>20.000 KIP</span>
                        </v-card>
                      </v-item>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-item v-slot="{ toggle }" active-class="bg-active">
                        <v-card
                          pa-
                          class="d-flex align-center justify-center text-h5"
                          height="100"
                          @click="toggle"
                        >
                          <span>50.000 KIP</span>
                        </v-card>
                      </v-item>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-item v-slot="{ toggle }" active-class="bg-active">
                        <v-card
                          pa-
                          class="d-flex align-center justify-center text-h5"
                          height="100"
                          @click="toggle"
                        >
                          <span>100.000 KIP</span>
                        </v-card>
                      </v-item>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-item v-slot="{ toggle }" active-class="bg-active">
                        <v-card
                          pa-
                          class="d-flex align-center justify-center text-h5"
                          height="100"
                          @click="toggle"
                        >
                          <span>300.000 KIP</span>
                        </v-card>
                      </v-item>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-item v-slot="{ toggle }" active-class="bg-active">
                        <v-card
                          class="d-flex align-center justify-center text-h5"
                          height="100"
                          @click="toggle"
                        >
                          <span>500.000 KIP</span>
                        </v-card>
                      </v-item>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-item v-slot="{ toggle }" active-class="bg-active">
                        <v-card
                        class="d-flex align-center justify-center text-h5"
                          height="100"
                          @click="toggle"
                        >
                          <span>1.000.000 KIP</span>
                        </v-card>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-container>
              </v-item-group>
            </v-col>
          </v-row>

          <!-- <v-col cols="12" sm="12">
          <v-chip-group
            v-model="selection"
            active-class="blue accent-6 white--text "
            column
          >
            <v-chip label x-large class="pa-10">
              <h1 style="font-weight: 500">20,000KIP</h1></v-chip
            >

            <v-chip label x-large class="pa-10">
              <h1 style="font-weight: 500">50,000KIP</h1></v-chip
            >

            <v-chip label x-large class="pa-10">
              <h1 style="font-weight: 500">100,000KIP</h1></v-chip
            >

            <v-chip label x-large class="pa-10">
              <h1 style="font-weight: 500">300,000KIP</h1></v-chip
            >
            <v-chip label x-large class="pa-10">
              <h1 style="font-weight: 500">500,000KIP</h1></v-chip
            >
            <v-chip label x-large class="pa-10">
              <h1 style="font-weight: 500">1,000,000KIP</h1></v-chip
            >
          </v-chip-group>
        </v-col> -->
          <div class="px-3 my-10"  >
            <v-text-field
              outlined
              placeholder="ກຳນົດຈຳນວນເອງ"
              suffix="KIP"
            ></v-text-field>
          </div>
          <div align="center">
            <v-btn class="px-10 py-7 white--text text-h5" color="#297FCA">
              <span>
                ຕໍ່ໄປ <v-icon right size="22"> mdi-arrow-right</v-icon>
              </span>
            </v-btn>
          </div>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      "Lao PDR",
      "Brunei Darussalam",
      "Cambodia",
      "Indonesia",
      "Malaysia",
      "Myanmar",
      "Philippines",
      "Singapore",
      "Thailand",
      "Viet Nam",
    ],
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap");
* {
  font-family: "Noto Sans Lao", sans-serif;
}
/* .donatecard {
  width: 100%;
  display: block;
}
button {
  width: 30%;
  margin-bottom: 30px;
  background: #fff;
  border-radius: 5px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
} */
.donatecard {
  background: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.bg-active {
  background-color: #297fca !important;
  color: white !important;
}
.txt-title {
  font-size: 20px;
}
</style>
