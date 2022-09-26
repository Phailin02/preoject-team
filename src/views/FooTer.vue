<template>
  <section>
    <div class="row">
      
     
      <div class="col1" style="padding: 30px 50px">
       
        
        <router-link to="/" style="text-decoration: none"> 
          <v-img
          align="center"
          justify="center"
          alt="logo"
          src="../assets/Rectangle 97.png"
          width="120px"
          
        />
          <label class="logo" style="font-weight: 500" >ສະຫະພັນຄົນຫູໜວກ</label>
        </router-link>
       

      </div>
   
      <div class="col2">
        <h4>ພວກເຮົາເຮັດຫຍັງ</h4>
        <p>ສະມາຊິກຂອງພວກເຮົາ</p>
        <p>ການສະໜັບສະໜຸນລະຫວ່າງປະເທດ</p>
        <p>ຮັບປະກັນການເຂົ້າເຖິງ</p>
      </div>
      <div class="col3">
        <h4>ກ່ຽວກັບການໄດ້ຍິນ & ຫູໜວກ</h4>
        <div class="REVIEWS">
          <p>ວິທີການໄດ້ຍິນ</p>
          <p>ກ່ຽວກັບການສູນເສຍການໄດ້ຍິນ</p>
          <p>ຄົນຫູໜວກໃນສັງຄົມ</p>
          <!-- <p>
            <a
              target="_blank"
              href="https://www.facebook.com/manethong.yabundid.9"
              ><v-icon>mdi-facebook</v-icon></a
            >
          </p>
          <p>
            <a
              target="_blank"
              href="https://www.instagram.com/manethongyabandith/"
              ><v-icon>mdi-instagram</v-icon></a
            >
          </p>
          <p>
            <a
              target="_blank"
              href="https://www.tripadvisor.com/Hotel_Review-g7741494-d1755853-Reviews-Inthira_Thakhek-Thakhek_Khammouane_Province.html"
              >TRIPADVISOR</a
            >
          </p> -->
        </div>
      </div>
      <div class="col4">
        <h4>ການມີສ່ວນຮ່ວມ</h4>
        <p>ຂ່າວ & ເຫດການ</p>
        <p>ການເຄື່ອນໄຫວ</p>
        <p>ບໍລິຈາກ</p>
      </div>
      <div class="col5" align="center" justify="center">
        <h4>ຕິດຕາມພວກເຮົາ</h4>
    

        <a target="blank" href="https://www.facebook.com/"
          ><v-icon size="40px" class="pa-1">mdi-facebook</v-icon></a
        >

        <a target="blank" href="https://www.instagram.com/">
          <v-icon size="40px" class="pa-1">mdi-instagram</v-icon>
        </a>
        <a target="blank" href="https://www.youtube.com/">
          <v-icon size="40px" class="pa-1">mdi-youtube</v-icon>
        </a>
        <a target="blank" href="https://www.twitter.com/">
          <v-icon size="40px" class="pa-1">mdi-twitter</v-icon>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooTer",
  data() {
    return {
      imgs: [
        {
          src: "https://media.discordapp.net/attachments/826834529435648000/1007206321491300352/Keolanee_edited.png?width=662&height=662",
        },
      ],
      // user: null,
      // token: this.$store.state["users/user"],
      items: [{ title1: "ຂໍ້ມູນສວ່ນຕົວ" }, { title2: "ອອກຈາກລະບົບ" }],
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-weight: 500;
  color: #333335;
}
p a {
  text-decoration: none;
  color: #ffffff;
}
.row {
  background: #b6ddff;
  display: flex;
  justify-content: space-around;
  height: auto;
}
label.logo {
  color: #333335;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
}
.col1,
.col2,
.col3,
.col4,
.col5 {
  padding-top: 30px;
  padding-bottom: 15px;
  /* width: 300px; */
}
h4 {
  font-weight: 500;
  margin-bottom: 15px;
  color: #297fca;
}
.REVIEWS p a .v-icon {
  font-size: 50px;
}
.col4 input {
  border: solid white 2px;
  border-radius: 5px;
  padding: 5px;
}
.col4 .v-btn {
  margin-top: 15px;
  color: aliceblue;
  background-color: #ff003c;
}
.row2 {
  background-color: #021d33;
  width: auto;
  text-align: center;
}
.col5 a{
  text-decoration:none;
}
</style>