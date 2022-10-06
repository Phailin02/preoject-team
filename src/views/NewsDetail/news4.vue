<template>
  <v-app>
    <v-main>
      <v-container class="pa-10">
        <v-row class="pt-10">
          <v-col class="txt-color font-weight-bold text-h4"
            ><span>ມີສຽງລົບກວນຫຼາຍເທົ່າໃດ? </span></v-col
          >
          <v-col></v-col>
        </v-row>
        <div class="mt-5">
          <div class="txt-size" align="center">
            <p>
              ນີ້ແມ່ນຂຶ້ນກັບຄວາມດັງຂອງສຽງ, ດົນປານໃດ exposed ຂອງທ່ານແລະໃນຂອບເຂດໃດ
              w impulsive ສຽງແມ່ນ. ສຽງເລີ່ມຕົ້ນກາຍເປັນອັນຕະລາຍ aro und 80
              decibels.
            </p>
            <p>ຕາຕະລາງ decibel ຕໍ່ໄປນີ້ໃຫ້ລະດັບສຽງໂດຍປະມານຂອງບາງສຽງທົ່ວໄປ.</p>
          </div>
          <v-row class="mt-13">
            <v-col cols="7">
              <v-img
                style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
                alt="news1"
                src="https://media.discordapp.net/attachments/899150665358655518/1023974870884819004/image_14.png"
              ></v-img
            ></v-col>
            <v-col class="txt" cols="5">
              <p>
                ຕາຕະລາງdecibelສະແດງໃຫ້ເຫັນຫຼາຍສຽງທີ່ມີປະສົບການທົ່ວໄປໃນເຮືອນ,ຢູ່ບ່ອນເຮັດວຽກຫຼືໃນກິດຈະກໍາການພັກຜ່ອນທີ່ສາມາດເປັນອັນຕະລາຍ.
              </p>
              <p>
                ອັນຕະລາຍຫຼາຍປານໃດແມ່ນຂຶ້ນກັບໄລຍະເວລາທີ່ທ່ານເປີດເຜີຍ.85decibelsເປັນເວລາແປດຊົ່ວໂມງແມ່ນມາດຕະຖານການເປີດເຜີຍໃນອົດສະຕາລີໃນປະຈຸບັນ.ນີ້ແມ່ນການເປີດເຜີຍເຊັ່ນດຽວກັນກັບ
                88 decibels ສໍາລັບສີ່ຊົ່ວໂມງຫຼື 91 decibels ສໍາລັບສອງຊົ່ວໂມງ.
              </p>
              <p>
                ແນວໃດກໍ່ຕາມສຽງທີ່ສູງກວ່າ 140 decibels
                ແມ່ນອັນຕະລາຍຕໍ່ການໄດ້ຮັບແສງໃດໆກໍຕາມ.
                ການສູນເສຍການໄດ້ຍິນທີ່ເຮັດໃຫ້ເກີດສຽງລົບກວນສາມາດເປັນຜົນມາຈາກການໄດ້ຮັບສຽງດັງຢູ່ໃນເຮືອນ,
                ຢູ່ບ່ອນເຮັດວຽກ ແລະຢູ່ບ່ອນເຮັດວຽກ.
              </p>
            </v-col>
          </v-row>
        </div>
        <div class="mt-10">
          <span class="d-flex justify-end txt-color text-caption"
            >16/8/2022</span
          >
          <hr
            class="my-10"
            style="height: 1px; border-width: 0; background-color: #246299"
          />
        </div>

        <div >
          <v-row >
          <v-col v-for="(item, i) in items" :key="i" cols="4">
            <v-img :src="item.src" class="display-2 white--text align-end pa-5">
              <p class="text-h5">
                <span>{{ item.title }}</span>
              </p>
              <v-btn
                color="#246299"
                tag="a"
                :href="item.href"
                class="text-h6 white--text text-decoration-none"
                ><span>{{ item.btn }}</span></v-btn
              >
            </v-img></v-col
          >
        </v-row>
        </div>
        <div justify="center" align="center" class="py-15">
          <v-btn
            color="#246299"
            tag="a"
            href="/news"
            class="text-decoration-none text-h6 white--text py-5"
          >
            <span> ເບິ່ງເພີ່ມເຕີມ </span>
          </v-btn>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://media.discordapp.net/attachments/899150665358655518/1023856337903423498/Rectangle_78.png",
          title: "ການອຸທອນສຸກເສີນ",
          btn: "ເພີ່ມເຕີມ",
          href: "/",
        },
        {
          src: "https://media.discordapp.net/attachments/899150665358655518/1023860370357616780/Rectangle_93.png",
          title: "Gary Heys ໄດ້ແຕ່ງຕັ້ງພະນັກງານຊ່ວຍເຫຼືອຢູ່ Lancaster Hub",
          btn: "ເພີ່ມເຕີມ",
          href: "/",
        },
        {
          src: "https://media.discordapp.net/attachments/899150665358655518/1023860370860949524/Rectangle_94.png",
          title: "ແກະສະຫຼັກຜັກເພື່ອສຸຂະພາບຈິດ",
          btn: "ເພີ່ມເຕີມ",
          href: "/",
        },
      ],
    };
  },
};
</script>

<style>
.txt-color {
  color: #246299;
}
.txt-size {
  font-size: 21px;
  color: #5b5b5b;
}
.txt {
  font-size: 20px;
  color: #5b5b5b;
}
</style>
