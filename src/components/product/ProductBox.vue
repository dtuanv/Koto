<template>
  <div class="" >

    <q-card >
      <q-card-actions >
        <div class="row " >
          <div>
            <img :src="'/img/'+product.imageUrl" alt="" style="height: 22vw; width: 25vw;">
          </div>
          <div class="q-ml-sm text-h5">{{product.name}}
            <div class="q-ml-lg text-body1">{{product.decription}}</div>
          </div>
        </div>
      </q-card-actions>
    </q-card>


  </div>

</template>
<script>
// import { count } from 'console';
import { ref } from 'vue'
import { useStore } from 'vuex';
import { useQuasar } from 'quasar'
const $q = useQuasar()
export default {
  name: 'productBox',
  props: ['product'],
  setup() {
    const $store = useStore()

    let countItem = ref(0);
    let countCart = ref(0);
    // $store.state.cart.products.quantity
    // const test = $store.state.cart.quantity
    function addItem() {
      this.countItem++;
    };

    function subtractItem() {
      if (countItem.value === 0) {

        this.countItem = 0;
        return;
      }
      if (countItem.value > 0) {
        this.countItem--;
      }
    };
    if ($store.state.cache.cart.length > 1) {

      let productInCart = $store.state.cache.cart.find(item => {
        return item.product.id != undefined;
      })
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


    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('cache/addProductToCart', {
        product: this.product,
        quantity: this.countItem,
      })
      if (this.countItem > 0) {
        this.$q.notify({
          message: 'Added to cart.',
          color: 'positive',
          avatar: '/img/trangTi.png'
        })
      } else {
        this.$q.notify({
          message: 'Number of Item must be grater than 0.',
          color: 'negative',
          avatar: '/img/trangTi.png'
        })
      }


    }
  },
  computed: {

  }
}
</script>

