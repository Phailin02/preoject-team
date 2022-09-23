<template>
    
    <v-app>
        
            <div class="contact" >
        <v-content>
    <v-img max-height="" src="../assets/bgcont.png"> </v-img>
  </v-content>
  <v-container style="padding-left:50px; padding-right:50px">
    <p class="text-center pa-3 " >ພວກເຮົາຍິນດີຕ້ອນຮັບການປ້ອນຂໍ້ມູນຂອງທ່ານກ່ຽວກັບຫົວຂໍ້ທີ່ກ່ຽວຂ້ອງກັບວຽກງານຂອງພວກເຮົາ.ຂໍ້ມູນຂອງທ່ານຈະຖືກເກັບຮັກສາໄວ້ເປັນຄວາມລັບຢ່າງເຂັ້ມງວດ. ການຍື່ນສະເຫນີທັງຫມົດຈະຖືກທົບທວນແລະພິຈາລະນາ. ກະລຸນາຮັບຊາບວ່າເນື່ອງຈາກຂໍ້ຈຳກັດດ້ານຊັບພະຍາກອນ, ພວກເຮົາຈະຕອບຄຳຖາມຕາມຄວາມເໝາະສົມ. ຂໍ​ຂອບ​ໃຈ​ທ່ານ​ສໍາ​ລັບ​ຄວາມ​ສົນ​ໃຈ​ຂອງ​ທ່ານ​ໃນ​ສະ​ຫະ​ພັນ​ຄົນ​ຫູ​ຫນວກ​.</p>
    <v-divider class="mb-5 weight-black"></v-divider>
    <v-col>
        <v-row >
        
        <v-col cols="7">
            
         
            <v-text-field v-model="message4" outlined clearable placeholder="ຊື່"></v-text-field>
          
            <v-text-field v-model="message4" outlined clearable placeholder="ອີເມວ"></v-text-field>
           
            <v-text-field v-model="message4" outlined clearable placeholder="ເບີໂທ"></v-text-field>
      
            <v-textarea v-model="message4" outlined clearable placeholder="ຂໍ້ຄວາມ"></v-textarea>
            <v-btn  block class="pa-7 white--text text-h5" color="#297FCA"> ຕົກລົງ
         
        </v-btn>
        </v-col>
        <v-col cols="5" class="text-center">
            <h1 > 
                ຂໍ້ມູນການຕິດຕໍ່
            </h1>
            <p>ເບີໂທ: </p>
            <p>20 59596262</p>
            <p>Email: </p>
            <p>ContactInfo@gmail.la.eu</p>
            <p>Whatapp: </p>
            <p>+856 20 5599 5599</p>
            <p>ສະຖານທີ່:</p>
            <p>ເລກທີ່ເຮືອນ, ເລກທີ່ຖະໜົນ, </p>
            <p>ບ້ານ, ເມື່ອງ, ແຂວງ</p>

        </v-col>
        
    </v-row>
    </v-col>
  
    <v-divider class="mt-3 weight-black"></v-divider>
    
    
  </v-container>
  
    </div>
     
        
    </v-app>
    
  
</template>

<script>
export default {

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap");
* {
  font-family: "Noto Sans Lao", sans-serif;
}
</style>