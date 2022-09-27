<template>
  <div id="app">
    <nav class="dark--text body">
      <v-app-bar
        app
        color="#297FCA"
        elevation=""
        style="padding: 0px 100px"
        tile
        height="100px"
      >
        <router-link
          style="color: blue"
          tag="a"
          class="hidden--and-down"
          to="/"
        >
          <v-toolbar-title
            class="text-uppercase d-flex align-center"
            style="color: white"
          >
            <img
              alt="logo"
              v-for="(img, i) in imgs"
              :key="i"
              :src="img.src"
              contain
              width="100px"
              class="ma-3"
            />

            <h class="text-h5 white--text" ><span> ສະຫະພັນຄົນຫູໜວກ </span></h>
          </v-toolbar-title>
        </router-link>

        <v-spacer></v-spacer>

        <ul class="nav">
          <li>
            <router-link class="text-h6" tag="a" to="/"><span>ກ່ຽວກັບ</span></router-link>
          </li>
          <li>
            <router-link class="text-h6" tag="a" to="/news"
              ><span>ຂ່າວ & ເຫດການ</span></router-link
            >
          </li>
          <li>
            <router-link class="text-h6" tag="a" to="/contact"><span>ຕິດຕໍ່</span></router-link>
          </li>
          <li>
            <router-link  tag="a" to="/donate"><v-btn outlined color="white" class="text-h6 px-10" ><span>ບໍລິຈາກ</span></v-btn></router-link>
          </li>
        </ul>
      </v-app-bar>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
li {
  text-align: center;
}
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
#app {
  text-align: center;
}
nav {
  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    padding: 20px;
  }
}
nav ul {
  float: right;
  max-width: 50%;
}
nav ul li {
  display: inline-block;
  line-height: 0px;
  margin: 0 0px;
}
nav ul li a {
  color: white;
  padding: 7px 30px;
  /* text-transform: uppercase; */
}
.checkbtn .v-icon {
  font-size: 30px;
  color: #ffffff;
  float: right;
  line-height: 0px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check {
  display: none;
}
@media (max-width: 952px) {
  nav ul li a {
    font-size: 16px;
  }
}
@media (max-width: 1070px) {
  .checkbtn .v-icon {
    display: block;
  }
  ul {
    position: fixed;
    margin-right: 0;
    width: 100%;
    z-index: 100000000;
    height: 100vh;
    background: #616161;
    opacity: 0.9;
    top: 100%;
    right: -100%;
    text-align: center;
    transition: all 0.3s;
  }
  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li a {
    font-size: 20px;
  }
  #check:checked ~ ul {
    right: 0;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap");
* {
  font-family: "Noto Sans Lao", sans-serif;
}
</style>

<script>
export default {
  name: "NavbarView",
  setup() {},

  data() {
    return {
      imgs: [
        {
          src: require("../assets/Rectangle 97.png"),
        },
      ],
    };
  },
};
</script>
