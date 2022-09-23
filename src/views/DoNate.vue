<template >
  <div class="donate pa-5">
    <v-container class="pa-15">
      <v-col>
        <h class="text-md-h5"> <span>ບໍລິຈາກໃຫ້</span></h>
        <h1>ສະຫະພັນຄົນຫູໜວກ</h1>
      </v-col>

      <v-col>
        <v-divider class="mb-4 weight-black"></v-divider>
        <h1 style="font-weight: 500">ໃສ່ຂໍ້ມູນຂອງທ່ານ</h1>

        <v-row>
          <v-col cols="12" sm="6">
            <p>ຊື່</p>
            <v-text-field v-model="message4" outlined clearable></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <p>ນາມສະກຸນ</p>
            <v-text-field v-model="message4" outlined clearable></v-text-field>
          </v-col>
        </v-row>
        <p>ອີເມວ:</p>
        <v-text-field v-model="message4" outlined clearable></v-text-field>
        <v-row>
          <v-col cols="12" sm="6">
            <p>ເລືອກປະເທດ:</p>

            <v-select :items="items" outlined></v-select>

            <p>ທີ່ຢູ່:</p>
            <v-text-field v-model="message4" outlined clearable></v-text-field>
          </v-col>

          <v-col>
            <p>ທີ່ຢູ່ໄປສະນີ:</p>
            <v-text-field v-model="message4" outlined clearable></v-text-field>
            <p>ເມືອງ</p>
            <v-text-field v-model="message4" outlined clearable></v-text-field>
          </v-col>
        </v-row>
        <p>ແຂວງ</p>
        <v-text-field v-model="message4" outlined clearable></v-text-field>

        <h1 style="font-weight: 500">ບໍລິຈາກ</h1>
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
          <v-col
         
          
    >
   

    <v-item-group mandatory>
    <v-container >
      <v-row >
        <v-col
        
          cols="12"
          md="4"
        >
          <v-item v-slot="{  toggle }"  
          active-class="bg-active"
          >
            
            <v-card
            
      
              class="d-flex align-center pa-15 "
              
              height="100"
              @click="toggle"
            >
             <h1 class="text-center pa-4 ">20.000 KIP</h1>
           
            </v-card>
            
          </v-item>
        </v-col>
        <v-col
        
        cols="12"
        md="4"
      >
        <v-item v-slot="{  toggle }" active-class="bg-active">
          <v-card
            pa-
            class="d-flex align-center pa-15"
         
            height="100"
            @click="toggle"
          >
           <h1 class="text-center pa-4 ">50.000 KIP</h1>
         
          </v-card>
          
        </v-item>
      </v-col>
      <v-col
        
          cols="12"
          md="4"
        >
          <v-item v-slot="{  toggle }" active-class="bg-active">
            <v-card
              pa-
              class="d-flex align-center pa-15"
           
              height="100"
              @click="toggle"
            >
             <h1 class="text-center pa-2 ">100.000 KIP</h1>
           
            </v-card>
            
          </v-item>
        </v-col>
        <v-col
        
          cols="12"
          md="4"
        >
          <v-item v-slot="{  toggle }" active-class="bg-active">
            <v-card
              pa-
              class="d-flex align-center pa-15"
           
              height="100"
              @click="toggle"
            >
             <h1 class="text-center pa-2 ">300.000 KIP</h1>
           
            </v-card>
            
          </v-item>
        </v-col>
        <v-col
        
          cols="12"
          md="4"
        >
          <v-item v-slot="{  toggle }" active-class="bg-active">
            <v-card
         
              class="d-flex align-center pa-15"
           
              height="100"
              @click="toggle"
            >
             <h1 class="text-center pa-2 ">500.000 KIP</h1>
           
            </v-card>
            
          </v-item>
        </v-col>
        <v-col
        
          cols="12"
          md="4"
        >
          <v-item v-slot="{  toggle }" active-class="bg-active">
            <v-card
          
              class="d-flex align-center pa-13"
           
              height="120"
              @click="toggle"
            >
             <h1 class="text-center">1.000.000 KIP</h1>
           
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
        <v-row justify="center" style="padding: 20px">
          <v-text-field
            outlined
            placeholder="ກຳນົດຈຳນວນເອງ"
            suffix="KIP"
          ></v-text-field>
        </v-row>
      </v-col>
      <v-row align="center" justify="space-around" style="padding: 30px">
        <v-btn class="pa-10" color="#297FCA">
          <h1 class="white--text" style="font-weight: 500">
            ຕໍ່ໄປ <v-icon right x-large> mdi-arrow-right</v-icon>
          </h1>
        </v-btn>
      </v-row>
    </v-container>
  </div>
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
  background-color: #297FCA !important;
  color : white !important;
}
</style>
    