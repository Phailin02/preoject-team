<template>
  <v-app>
    <div>
      <v-content>
        <v-img max-height="" src="../assets/Rectangle 77.png"> </v-img>
      </v-content>
      <v-container class="px-10 mt-10">
        <v-row>
          <v-col cols="6" class="px-10">
            <v-text-field
              v-model="search"
              clearable
              flat
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="ຄົ້ນຫາ ຫົວຂໍ້, ວັນທີ່..."
            ></v-text-field>

            <v-card :loading="loading" class="mx-auto mt-10">
              <v-img height="250" src="../assets/news/new1.png"></v-img>

              <v-card-title class="txttop text-h5"
                ><sapn>ເດັກນ້ອຍ Usher</sapn></v-card-title
              >
              <v-card-text class="text-body-1">
                <span>
                  ຜູ້ຮັບທຶນຊ່ວຍເຫຼືອຄົນຫູໜວກ2020UsherKidsສະໜອງການອັບເດດອັນມີຄ່າຂອງໂຄງການ
                  Usher Kids Australia Educational Video Series ຂອງເຂົາເຈົ້າ.
                </span>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  tag="a"
                  to="/new1"
                  class="px-5 ml-2 mb-3 text-body-1 white--text"
                  color="#246299"
                  @click="reserve"
                >
                  <span>ເພີ່ມເຕີມ</span>
                </v-btn>
              </v-card-actions>
            </v-card>

            <v-card :loading="loading" class="mx-auto my-12">
              <v-img height="250" src="../assets/news/new2.png"></v-img>

              <v-card-title class="txttop text-h5"
                ><sapn>ເດັກນ້ອຍຫູໜວກ ອົດສະຕຣາລີ</sapn></v-card-title
              >
              <v-card-text class="text-body-1">
                <span>
                  GetConnectedເປັນວິທີໃໝ່ທີ່ໜ້າຕື່ນຕາຕື່ນໃຈສຳລັບໄວໜຸ່ມອາຍຸ12-15ປີທີ່ຫູໜວກຫຼືໄດ້ຍິນຍາກເພື່ອສ້າງການເຊື່ອມຕໍ່ທາງສັງຄົມ.
                </span>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  tag="a"
                  to="/new5"
                  class="px-5 mb-3 ml-2 text-body-1 white--text"
                  color="#246299"
                  @click="reserve"
                >
                  <span>ເພີ່ມເຕີມ</span>
                </v-btn>
              </v-card-actions>
            </v-card>

            <v-card :loading="loading" class="mx-auto my-12">
              <v-img height="250" src="../assets/news/new3.png"></v-img>

              <v-card-title class="txttop text-h5"
                ><sapn>ກ່ຽວກັບການສູນເສຍການໄດ້ຍິນ</sapn></v-card-title
              >
              <v-card-text class="text-body-1">
                <span>
                  ສະພາບການສູນເສຍການໄດ້ຍິນສາມາດເກີດຈາກເງື່ອນໄຂທາງການແພດທີ່ຫຼາກຫຼາຍແລະຄວາມຜິດປົກກະຕິທີ່ສາມາດສົ່ງຜົນກະທົບຕໍ່ການໄດ້ຍິນ
                </span>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  tag="a"
                  to="/new5"
                  class="px-5 mb-3 ml-2 text-body-1 white--text"
                  color="#246299"
                  @click="reserve"
                >
                  <span>ເພີ່ມເຕີມ</span>
                </v-btn>
              </v-card-actions>
            </v-card>

            <v-card :loading="loading" class="mx-auto my-12">
              <v-img height="250" src="../assets/news/new1.png"></v-img>

              <v-card-title class="txttop text-h5"
                ><sapn>ເດັກນ້ອຍ Usher</sapn></v-card-title
              >
              <v-card-text class="text-body-1">
                <span>
                  ຜູ້ຮັບທຶນຊ່ວຍເຫຼືອຄົນຫູໜວກ 2020 Usher Kids
                  ສະໜອງການອັບເດດອັນມີຄ່າຂອງໂຄງການ Usher Kids Australia
                  Educational Video Series ຂອງເຂົາເຈົ້າ.
                </span>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  tag="a"
                  to="/new1"
                  class="px-5 mb-3 ml-2 text-body-1 white--text"
                  color="#246299"
                  @click="reserve"
                >
                  <span>ເພີ່ມເຕີມ</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="6" class=" px-10">
            <v-card :loading="loading" class="mx-auto my-12">
              <v-img height="250" src="../assets/news/new4.png"></v-img>

              <v-card-title class="txttop text-h5"
                ><sapn>ການອຸທອນສຸກເສີນ</sapn></v-card-title
              >
              <v-card-text class="text-body-1">
                <span>
                  ໃນຖານະເປັນການກຸສົນທີ່ສະຫນັບສະຫນູນນັກຮົບເກົ່າຂອງກໍາລັງປະກອບອາວຸດ,ສະຖານະການໃນອັຟການິສຖານແມ່ນເຮັດໃຫ້ເສຍໃຈຢ່າງເລິກເຊິ່ງສໍາລັບພວກເຮົາ.
                </span>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  tag="a"
                  to="/new2"
                  class="px-5 mb-3 ml-2 text-body-1 white--text"
                  color="#246299"
                  @click="reserve"
                >
                  <span>ເພີ່ມເຕີມ</span>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card :loading="loading" class="mx-auto my-12">
              <v-img height="250" src="../assets/news/new5.png"></v-img>

              <v-card-title class="txttop text-h5"
                ><sapn>ມີສຽງລົບກວນຫຼາຍເທົ່າໃດ?</sapn></v-card-title
              >
              <v-card-text class="text-body-1">
                <span>
                  ອັນນີ້ຂຶ້ນກັບຄວາມດັງຂອງສຽງ, ດົນປານໃດທີ່ເຈົ້າຖືກເປີດເຜີຍ
                  ແລະສຽງທີ່ກະຕຸ້ນໃຫ້ເກີດມີຂະໜາດໃດ.
                </span>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  tag="a"
                  to="/new4"
                  class="px-5 mb-3 ml-2 text-body-1 white--text"
                  color="#246299"
                  @click="reserve"
                >
                  <span>ເພີ່ມເຕີມ</span>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card :loading="loading" class="mx-auto my-12">
              <v-img height="250" src="../assets/news/new6.png"></v-img>

              <v-card-title class="txttop text-h5"
                ><sapn>ເຈົ້າມີຄວາມສ່ຽງບໍ?</sapn></v-card-title
              >
              <v-card-text class="text-body-1">
                <span>
                  ການສູນເສຍການໄດ້ຍິນສາມາດເກີດຂື້ນໄດ້ເມື່ອມີຄວາມເສຍຫາຍຫຼືການອຸດຕັນໃນຫູພາຍນອກແລະ
                  ຫຼືຫູກາງ.
                </span>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  tag="a"
                  to="/new6"
                  class="px-5 mb-3 ml-2 text-body-1 white--text"
                  color="#246299"
                  @click="reserve"
                >
                  <span>ເພີ່ມເຕີມ</span>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card :loading="loading" class="mx-auto my-12">
              <v-img height="250" src="../assets/news/new2.png"></v-img>

              <v-card-title class="txttop text-h5"
                ><sapn>ເດັກນ້ອຍຫູໜວກໃນອົດສະຕຣາລີ</sapn></v-card-title
              >
              <v-card-text class="text-body-1">
                <span>
                  Get Connected ເປັນວິທີໃໝ່ທີ່ໜ້າຕື່ນຕາຕື່ນໃຈສຳລັບໄວໜຸ່ມອາຍຸ
                  12-15 ປີທີ່ຫູໜວກ ຫຼື ໄດ້ຍິນຍາກເພື່ອສ້າງການເຊື່ອມຕໍ່ທາງສັງຄົມ.
                </span>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  tag="a"
                  to="/new5"
                  class="px-5 mb-3 ml-2 text-body-1 white--text"
                  color="#246299"
                  @click="reserve"
                >
                  <span>ເພີ່ມເຕີມ</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="4"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
          ></v-pagination>
        </div>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style scoped>
.txttop {
  color: #246299;
}
</style>
