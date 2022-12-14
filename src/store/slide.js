
Vue.component("carousel", {
    template: "#v-carousel",
    data() {
      return {
        currentOffset: 0,
        windowSize: 3,
        paginationFactor: 220,
        items: [
          {name: 'Kin Khao', tag: ["Thai"]},
          {name: 'Jū-Ni', tag: ["Sushi", "Japanese", "$$$$"]},
          {name: 'Delfina', tag: ["Pizza", "Casual"]},
          {name: 'San Tung', tag: ["Chinese", "$$"]},
          {name: 'Anchor Oyster Bar', tag: ["Seafood", "Cioppino"]},
          {name: 'Locanda', tag: ["Italian"]},
          {name: 'Garden Creamery', tag: ["Ice cream"]},
        ]
      }
    },
    computed: {
      atEndOfList() {
        return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
      },
      atHeadOfList() {
        return this.currentOffset === 0;
      },
    },
    methods: {
      moveCarousel(direction) {
        // Find a more elegant way to express the :style. consider using props to make it truly generic
        if (direction === 1 && !this.atEndOfList) {
          this.currentOffset -= this.paginationFactor;
        } else if (direction === -1 && !this.atHeadOfList) {
          this.currentOffset += this.paginationFactor;
        }
      },
    }
  });
  
  new Vue({
    el:"#app"
  });