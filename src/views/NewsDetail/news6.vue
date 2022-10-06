<template>
  <v-app>
    <v-main>
      <v-container class="pa-10">
        <v-row class="pt-10">
          <v-col class="txt-color font-weight-bold text-h4"
            ><span>ເດັກນ້ອຍ Usher</span></v-col
          >
          <v-col></v-col>
        </v-row>
        <div class="mt-5">
          <v-img
            alt="news6"
            src="https://media.discordapp.net/attachments/899150665358655518/1024165200405999757/image_152x.png?width=899&height=338"
          ></v-img>
        </div>
        <div class="mt-15">
          <span class="txt-size">
            <p>ປະເພດຂອງການສູນເສຍການໄດ້ຍິນ ມີສີ່ປະເພດຂອງການສູນເສຍການໄດ້ຍິນ:</p>
            <p class="pa-5">
              • ການສູນເສຍການໄດ້ຍິນແບບ conductive <br />
              • ການສູນເສຍການໄດ້ຍິນ sensorineural<br />
              • ການສູນເສຍການໄດ້ຍິນປະສົມ<br />
              • neuropathy ທາງດ້ານການໄດ້ຍິນ<br />
            </p>
            <p>CONDUCTIVE HEARING LOSS</p>
            <br />
            <p>
              ການສູນເສຍການໄດ້ຍິນສາມາດເກີດຂື້ນໄດ້ເມື່ອມີຄວາມເສຍຫາຍຫຼືການອຸດຕັນໃນຫູພາຍນອກແລະຫຼືຫູກາງ.ນີ້ສາມາດສົ່ງຜົນໃຫ້ສຽງບໍ່ຖືກປະຕິບັດຢ່າງພຽງພໍຜ່ານຊ່ອງຫູໄປຫາຫູຫູ,
              ຫຼືຈາກແກ້ວຫູຜ່ານ ossicles ຂອງຫູກາງໄປຫາຫູພາຍໃນ.
            </p>
            <br/>
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
  font-size: 22px;
  color: #5b5b5b;
}
</style>
