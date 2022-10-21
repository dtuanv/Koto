<template>
  <div class="">
    <q-card v-if="$q.screen.gt.sm">
      <q-card-actions style=" width: 20vw; height:11vw">
        <div>
          <img :src="'/img/' + product.imageUrl" alt="" style="height: 10vw; width: 10vw" />
        </div>
        <div class="q-ml-sm text-h5">
          {{ product.name }}

          <div class="q-ml-lg text-body1">{{ product.decription }}</div>
        </div>
      </q-card-actions>
    </q-card>

    <!-- Mobil -->
    <q-card v-else>
      <q-card-actions>
        <div class="row">
          <div class="col-3">
            <img :src="'/img/' + product.imageUrl" alt="" style="height: 22vw; width: 25vw" />
          </div>

          <div class="q-ml-lg col-8 text-h6">
            {{ product.name }}


            <div class="q-ml-sm text-body1">{{ product.decription }}</div>
              <div class="row" style="width:64vw" v-for="subF in product.subFoods" :key="subF">
                <div class="q-ml-lg text-body2 col-4">
                  {{subF.nameF}}
                </div>
                <div class="col-5"></div>
                <div  class="text-body2">
                 {{subF.price}}
                </div>
              </div>
              <!-- sub food 2 -->
              <!-- <div class="row" style="width:64vw">
                <div class="q-ml-sm text-body2 col-4">
                  b.  Huhn
                </div>
                <div class="col-5"></div>
                <div class="text-body2">
                  6.00$
                </div>
              </div> -->
              <!-- end sub 2 -->
              <!-- sub food 3 -->
              <!-- <div class="row" style="width:64vw">
                <div class="q-ml-sm text-body2 col-4">
                 c.  Garnelen
                </div>
                <div class="col-5"></div>
                <div class="text-body2">
                  15.00$
                </div>
              </div> -->
              <!-- end sub food  3 -->
              <!-- sub food 4 -->
              <!-- <div class="row" style="width:64vw">
                <div class="q-ml-sm text-body2 col-4">
                 c.  Garnelen
                </div>
                <div class="col-5"></div>
                <div class="text-body2">
                  15.00$
                </div>
              </div> -->
              <!--end sub food 4 -->


          </div>
        </div>
        <div class="row" style="width:100%">
          <div class="col-9"></div>
          <div class="" v-if="product.checkSubFood ==2">Preis: {{product.price}}</div>


        </div>
      </q-card-actions>

    </q-card>
  </div>
</template>
<script>
// import { count } from 'console';
import { ref } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
const $q = useQuasar();
export default {
  name: "productBox",
  props: ["product"],
  setup() {
    const $store = useStore();

    let countItem = ref(0);
    let countCart = ref(0);
    // $store.state.cart.products.quantity
    // const test = $store.state.cart.quantity
    function addItem() {
      this.countItem++;
    }

    function subtractItem() {
      if (countItem.value === 0) {
        this.countItem = 0;
        return;
      }
      if (countItem.value > 0) {
        this.countItem--;
      }
    }
    if ($store.state.cache.cart.length > 1) {
      let productInCart = $store.state.cache.cart.find((item) => {
        return item.product.id != undefined;
      });
      if (productInCart) {
        // productInCart.forEach(myFunction)
        // function myFunction(item) {
        // // arr[index] = item * 10;
        // console.log("Show quantity",item.quantity)
        // console.log("quantity ",JSON.parse(JSON.stringify( $store.state.cache.cart))[index].quantity)
        // countItem = ref(JSON.parse(JSON.stringify( $store.state.cache.cart))[index].quantity)
        // console.log("quantity ",JSON.parse(JSON.stringify( $store.state.cache.cart))[1].quantity)
        // countItem = ref(JSON.parse(JSON.stringify( $store.state.cache.cart))[1].quantity)
      }
    }
    //  function addToCart(){
    //   this.$store.dispatch('cache/addProductToCart', {
    //     product: this.product,
    //     quantity: 1,
    //   })
    //  };
    return {
      stars: ref(4),
      addItem,
      countItem,
      subtractItem,
      countCart,
      // addToCart,
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("cache/addProductToCart", {
        product: this.product,
        quantity: this.countItem,
      });
      if (this.countItem > 0) {
        this.$q.notify({
          message: "Added to cart.",
          color: "positive",
          avatar: "/img/trangTi.png",
        });
      } else {
        this.$q.notify({
          message: "Number of Item must be grater than 0.",
          color: "negative",
          avatar: "/img/trangTi.png",
        });
      }
    },
  },
  computed: {},
};
</script>

