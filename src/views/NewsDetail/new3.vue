<template>
  <v-app>
    <v-main>
      <v-container class="pa-10">
        <v-row class="py-10">
          <v-col class="txt-color font-weight-bold text-h4"
            ><span
              >ກ່ຽວກັບການສູນເສຍການໄດ້ຍິນ & ສາເຫດຂອງການສູນເສຍການໄດ້ຍິນ</span
            ></v-col
          >
          <v-col></v-col>
        </v-row>
        <div class="txt-size">
          <span class="text-h5"><span>ກ່ຽວກັບການສູນເສຍການໄດ້ຍິນ</span></span>
          <p>
            <br />
            ການສູນເສຍການໄດ້ຍິນສົ່ງຜົນກະທົບຕໍ່ 1 ໃນ 6 ຄົນໃນສັງຄົມຂອງພວກເຮົາ.
            ພາກນີ້ປະກອບມີ:
          </p>
          <p class="ml-3">
            . ສາເຫດຂອງການສູນເສຍການໄດ້ຍິນ
            <br />. ສິ່ງລົບກວນ induced Hearing Loss <br />.
            ປະເພດຂອງການສູນເສຍການໄດ້ຍິນ
          </p>
        </div>
        <div>
          <v-img
            alt="news1"
            src="https://media.discordapp.net/attachments/899150665358655518/1023893941457784832/image_13.png?width=896&height=242"
          ></v-img>
        </div>
        <div class="mt-15">
          <span class="txt-size">
            <p class="text-h4">
              <span>ສາເຫດຂອງການສູນເສຍການໄດ້ຍິນ</span>
            </p>
            <br />
            <p>
              ສະພາບການສູນເສຍການໄດ້ຍິນສາມາດເກີດຈາກເງື່ອນໄຂທາງການແພດທີ່ຫຼາກຫຼາຍແລະຄວາມຜິດປົກກະຕິທີ່ສາມາດສົ່ງຜົນກະທົບຕໍ່ການໄດ້ຍິນແລະ
              / ຫຼືຄວາມສາມາດໃນການເຂົ້າໃຈຄໍາເວົ້າ.
            </p>
            <br />
            <p>
              ສາເຫດທົ່ວໄປທີ່ສຸດຂອງການສູນເສຍການໄດ້ຍິນແມ່ນ:
              <br /><br />
              • ການສູນເສຍການໄດ້ຍິນແຕ່ກຳເນີດ (ມີໃນຕອນເກີດ ຫຼື ບໍ່ດົນຫຼັງເກີດ)
              <br />
              • ພະຍາດເຫຼືອງ ຫຼື ຂາດອົກຊີໃນເມື່ອເກີດ <br />
              •ຄວາມຜິດປົກກະຕິທາງພັນທຸກຳ (ສືບທອດ)<br />
              • ການຕິດເຊື້ອຫູກາງ<br />
              • ການເຈັບປ່ວຍເຊັ່ນ: ໂຣກໝາກເບີດ, ໂຣກ Rubella
              (ພະຍາດໝາກແດງຂອງເຢຍລະມັນ), ເຍື່ອຫຸ້ມສະໝອງອັກເສບ ຫຼື ພະຍາດ
              Meniere.<br />
              • ຜູ້ສູງອາຍຸ<br />
              • ການຕິດເຊື້ອໃຫຍ່ <br />
              • ການໄດ້ຮັບສຽງດັງ <br />
              • ການບາດເຈັບທີ່ຫົວຫຼືການບາດເຈັບ<br />
              •ານໄດ້ຮັບສານເຄມີບາງຊະນິດແລະ/ຫຼືຢາທີ່ທໍາລາຍຫູ
              ການສູນເສຍການໄດ້ຍິນສ່ວນຫຼາຍແມ່ນ sensorineural
              ແລະດັ່ງນັ້ນຈຶ່ງບໍ່ສາມາດກັບຄືນໄດ້<br /><br />
            </p>
            <p class="mb-10">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ທາງເລືອກໃນການຟື້ນຟູຕ່າງໆແມ່ນມີຢູ່ເພື່ອຊ່ວຍແກ້ໄຂບາງບັນຫາທີ່ເກີດຈາກການສູນເສຍການໄດ້ຍິນ.
              ການສູນເສຍການໄດ້ຍິນໜ້ອຍໜຶ່ງ (ສ່ວນຫຼາຍແມ່ນເປັນສັນຍານ)
              ສາມາດປັບປຸງການຜ່າຕັດໄດ້.
            </p>
          </span>
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
  font-size: 20px;
  color: #5b5b5b;
}
</style>
