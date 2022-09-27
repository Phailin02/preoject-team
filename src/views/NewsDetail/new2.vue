<template>
  <v-app>
    <v-main>
      <v-container class="pa-10">
        <v-row class="pt-10">
          <v-col class="txt-color font-weight-bold text-h4"
            ><span
              >ການອຸທອນສຸກເສີນ:
              <br />ສໍາລັບຜູ້ທີ່ໄດ້ຮັບຜົນກະທົບຈາກອັຟການິສຖານແລະຂໍ້ຂັດແຍ່ງອື່ນໆ</span
            ></v-col
          >
          <v-col>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ຄົ້ນຫາ ຫົວຂໍ້, ວັນທີ່..."
            ></v-text-field
          ></v-col>
        </v-row>
        <div>
          <v-row class="mt-5">
            <v-col class="txt-size" cols="7">
              <p>
                ໃນຖານະເປັນການກຸສົນທີ່ສະຫນັບສະຫນູນນັກຮົບເກົ່າຂອງກໍາລັງປະກອບອາວຸດ,
                ສະຖານະການໃນອັຟການິສຖານແມ່ນເຮັດໃຫ້ເສຍໃຈຢ່າງເລິກເຊິ່ງສໍາລັບພວກເຮົາແລະຜູ້ທີ່ພວກເຮົາສະຫນັບສະຫນູນແມ່ນການອຸທອນສຸກເສີນທີ່ຂ້ອນຂ້າງພຽງແຕ່ເນື່ອງຈາກວ່າພວກເຮົາໄດ້ຮັບການໂທຫາສະຫນັບສະຫນູນຫຼາຍກ່ວາທີ່ເຄີຍມີ,ການຮຽກຮ້ອງຂອງຫມົດຫວັງແລະສິ້ນຫວັງ.
              </p>
              <p>
                ຄວາມຮູ້ສຶກຂອງຄວາມໂກດແຄ້ນ,ຄວາມຄຽດແຄ້ນ,ຄວາມຮູ້ສຶກຜິດ,ຄວາມຢ້ານກົວແລະຄວາມໂສກເສົ້າໄດ້ຖືກກະຕຸ້ນໂດຍຮູບພາບທີ່ຮ້າຍກາດຈາກອັຟການິສຖານ.ຮູບ​ພາບ​ທີ່​ໄດ້​ນໍາ​ເອົາ​ຄວາມ​ຊົງ​ຈໍາ​ແລະ​ຄວາມ​ບາດ​ເຈັບ​ສໍາ​ລັບ​ຜູ້​ທີ່​ຕໍ່​ສູ້​ໃນ​ຄວາມ​ຂັດ​ແຍ່ງ​ຈໍາ​ນວນ​ຫຼາຍ​,
                ບໍ່​ວ່າ​ຈະ​ເປັນ
                Afghanistan​,Falklands​,Bosnia​,ໄອ​ແລນ​ເຫນືອ​,SierraLeone
                ແລະສະມາຊິກຄອບຄົວຂອງເຂົາເຈົ້າ.
              </p>
            </v-col>
            <v-col cols="5">
              <v-img
                alt="news1"
                src="https://media.discordapp.net/attachments/899150665358655518/1023883432230649916/Rectangle_92.png"
              ></v-img
            ></v-col>
          </v-row>
        </div>
        <div class="mt-10">
          <span class="txt-size">
            <p>
              ຖະແຫຼງການຈາກCEOຂອງFirstLightTrust,DorindaWolfe"ໃນຂະນະທີ່ຂ່າວອອກມາຈາກອັຟການິສຖານແລະຮູບພາບຂອງພໍ່ແມ່ທີ່ພະຍາຍາມຊ່ວຍເດັກນ້ອຍຂອງເຂົາເຈົ້າ,ຄວາມຢ້ານກົວກ່ຽວກັບສິ່ງທີ່ຈະເກີດຂຶ້ນກັບແມ່ຍິງແລະເດັກນ້ອຍ,
              ຫຼາຍຄົນທີ່ເຫັນຄວາມແຕກຕ່າງທີ່.
              ພວກ​ເຮົາ​ໄດ້​ເຮັດ​ໃຫ້​ຢູ່​ໃນ​ອັ​ຟ​ກາ​ນິ​ສ​ຖານ, ຮູ້​ສຶກ​ເສຍ​ຫາຍ.
              ແລະພວກເຂົາບໍ່ແມ່ນຄົນດຽວ. ຜົນ​ກະ​ທົບ​ຂອງ​ຄວາມ​ຜິດ,
              ຄວາມ​ໂກດ​ແຄ້ນ​ຂອງ​ຜູ້​ທີ່​ຮັບ​ໃຊ້
              ແລະ​ຄອບ​ຄົວ​ທີ່​ສະ​ໜັບ​ສະ​ໜູນ​ເຂົາ​ເຈົ້າ​ແມ່ນ​ແທ້​ຈິງ.
              ພວກ​ເຮົາ​ໄດ້​ເຫັນ​ການ​ເພີ່ມ​ຂຶ້ນ​ຢ່າງ​ຫຼວງ​ຫຼາຍ​ໃນ​ການ​ຮ້ອງ​ຂໍ​ການ​ສະ​ຫນັບ​ສະ​ຫນູນ
              –
              ໂດຍ​ປົກ​ກະ​ຕິ​ເປັນ​ການ​ອ້າງ​ອີງ​ຕົນ​ເອງ​ໂດຍ​ຜູ້​ທີ່​ຄິດ​ວ່າ​ບໍ່​ມີ​ໃຜ​ກຽມ​ພ້ອມ​ທີ່​ຈະ​ຮັບ​ຟັງ​ຫຼື​ການ​ຊ່ວຍ​ເຫຼືອ.
              ພວກເຮົາກໍາລັງຟັງ, ແລະພວກເຮົາຊ່ວຍ - ໄວເທົ່າທີ່ພວກເຮົາສາມາດເຮັດໄດ້.
              ພວກເຮົາກໍາລັງຖືກຄອບຄຸມໂດຍ 'ຂໍ' ແລະພວກເຮົາຈະບໍ່ຫັນໄປຫາໃຜ.
              ກະລຸນາຊ່ວຍພວກເຮົາໃຫ້ການສະຫນັບສະຫນຸນຕົວຈິງ, ໃບຫນ້າຕໍ່ຫນ້າ;
              ຊ່ວຍ​ໃຫ້​ພວກ​ເຮົາ​ແກ້​ໄຂ​ບັນ​ຫາ​,
            </p>
            <br />
            <p>
              FirstLight Trust
              ມີຊື່ຕາມແສງສະຫວ່າງທີ່ທ່ານເຫັນໃນຕອນເຊົ້າໃນເວລາທີ່ທ່ານໄດ້ຢູ່ລອດຄືນອີກ;
              ແສງສະຫວ່າງທີ່ເປັນຕົວແທນຂອງຄວາມຫວັງ.
              ພວກເຮົາຢູ່ໃນທ່າມກາງວິກິດການ,ຫນຶ່ງທີ່ຈໍານວນຫຼາຍສະນັ້ນຕໍ່ສູ້ເພື່ອຫຼີກເວັ້ນການ.ກະລຸນາຊ່ວຍພວກເຮົາສະຫນັບສະຫນູນກອງກໍາລັງປະກອບອາວຸດອັງກິດ,
              ບໍລິການສຸກເສີນແລະຄອບຄົວທີ່ໄດ້ຮັບຜົນກະທົບຈາກອັຟການິສຖານແລະຂໍ້ຂັດແຍ່ງອື່ນໆໂດຍການບໍລິຈາກໃຫ້
              FirstLight Trust ໃນມື້ນີ້.
            </p>
            <br />
          </span>
          <span class="d-flex justify-end txt-color text-caption"
            >16/8/2022</span
          >
          <hr
            class="my-10"
            style="height: 1px; border-width: 0; background-color: #246299"
          />
        </div>

        <v-row class="fill-height" align="center">
          <v-col v-for="(item, i) in items" :key="i" cols="6" sm="4">
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
        <div justify="center" align="center" class="py-15">
          <v-btn
            color="#246299"
            tag="a"
            href="/news"
            class="text-decoration-none text-h5 white--text"
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
</style>
