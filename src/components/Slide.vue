<template>
  <div style="padding: 0px 0px; background-color: #2a2a2a">
    <v-main>
      <v-carousel cycle>
        
        <!--Src image-->
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,0.7)"
        >
          <!--title-->
          <v-row class="fill-height" justify="" align="center">
            <v-col>
              <div class="display-2 white--text">
                <h6 class="font-weight-light">{{ item.description }}</h6>
                <h2>{{ item.title }}</h2>
                <!-- <v-row justify="space-between">
                  <v-col cols="12" md="6" lg="3">
                    <v-btn outline block class="primary">1</v-btn>
                  </v-col>

                  <v-col cols="12" md="6" lg="3">
                    <v-btn outline block class="primary">1</v-btn>
                  </v-col>
                </v-row> -->

                <!-- <p style="font-weight: 300">
                  ທີ່ມູນນິທິຄົນຫູໜວກ,ສະຫວັດດີການແລະຄວາມສະເໝີພາບແມ່ນຢູ່ແຖວໜ້າຂອງສິ່ງທີ່ພວກເຮົາກຳລັງເຮັດວຽກຮ່ວມກັນ.ພວກ​ເຮົາ​ເຮັດ​ວຽກ​ຮ່ວມ​ກັບ​ຄົນ​ຫູ​ໜວກ
                  ແລະ​ຫູ​ແຂງ ເພື່ອ​ອຳ​ນວຍ​ຄວາມ​ສະ​ດວກ: ການເຂົ້າເຖິງ, ການຮັບຮູ້,
                  ການບົ່ງມະຕິ, ການປິ່ນປົວແລະການປ້ອງກັນ.
                  ຮຽນຮູ້ເພີ່ມເຕີມກ່ຽວກັບຜົນກະທົບທາງບວກທີ່ພວກເຮົາມີແລະເຂົ້າຮ່ວມກັບພວກເຮົາໃນການນໍາເອົາການປ່ຽນແປງໃນທາງບວກ.
                </p> -->
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
          src: require("../assets/image 11.png"),
          title: "Wellcome",
          description: " ທີ່ມູນນິທິຄົນຫູໜວກ,ສະຫວັດດີການແລະຄວາມສະເໝີພາບແມ່ນຢູ່ແຖວໜ້າຂອງສິ່ງທີ່ພວກເຮົາກຳລັງເຮັດວຽກຮ່ວມກັນ.ພວກ​ເຮົາ​ເຮັດ​ວຽກ​ຮ່ວມ​ກັບ​ຄົນ​ຫູ​ໜວກ ແລະ​ຫູ​ແຂງ ເພື່ອ​ອຳ​ນວຍ​ຄວາມ​ສະ​ດວກ: ການເຂົ້າເຖິງ, ການຮັບຮູ້, ການບົ່ງມະຕິ, ການປິ່ນປົວແລະການປ້ອງກັນ ຮຽນຮູ້ເພີ່ມເຕີມກ່ຽວກັບຜົນກະທົບທາງບວກທີ່ພວກເຮົາມີແລະເຂົ້າຮ່ວມກັບພວກເຮົາໃນການນໍາເອົາການປ່ຽນແປງໃນທາງບວກ.",
        },
        {
          src: require("../assets/Banner1 1.png"),
          title: "Foundation of the Deaf",
        },
        {
          src: require("../assets/image 12.png"),
          title: "ຄົນຫູໜວກໃນສັງຄົມ",
        },
      ],
    };
  },
};
</script>