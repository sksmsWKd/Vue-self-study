

<template>
  <v-container mt-5>
    <v-flex xs6>
      <v-card width="600">
        <img v-bind:src="this.product.img" width="600" />

        <v-list m-3>
          <v-list-item-group>
            <v-subheader>
              <h1 v-text="product.name"></h1>
            </v-subheader>
            <v-subheader>
              <p v-text="product.price"></p>
            </v-subheader>
            <v-subheader>
              <p v-text="product.discription"></p>
            </v-subheader>

            <v-btn elevation="2" v-on:click="addCart" v-show="canAddToCart"
              >추가</v-btn
            >

            <v-subheader>
              <p v-show="!canAddToCart">매진</p>
            </v-subheader>
            <v-subheader> 장바구니에 담긴 갯수 {{ counting }} 개 </v-subheader>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-container>
</template>

  
<script>
export default {
  data() {
    return {
      siteName: "구매사이트",
      product: {
        id: 1,
        name: "사전",
        price: 10000,
        discription: "perfect choice for studying",
        img: "https://bphotokr.files.wordpress.com/2017/01/m7_05.jpg?w=685",
        available: 5,
      },
      cart: [],
    };
  },

  methods: {
    addCart: function () {
      this.cart.push(this.product.id);
    },
    deleteCart: function () {},
  },

  computed: {
    counting: function () {
      return this.cart.length;
    },
    canAddToCart: function () {
      return this.product.available > this.cartExist;
    },
    cartExist: function () {
      return this.cart.length;
    },
  },
};
</script>