<template>
  <!-- <div>{{products}}</div> -->
  <q-page>
    <div class="wallpaper">
      <img v-if="$q.screen.gt.sm" src="/img/dalat.jpg" style="width: 100%;
    height: 40vh;" />
      <img v-else src="/img/dalat.jpg" style="width: 100%;
    height: 15vh;" />
      <!-- make form in center -->
      <div class="row">


        <div class="col-4"></div>
        <!-- <div class="col-4 product" >Our Product</div> -->

        <div class="col-4"></div>
      </div>
      <div class="row">
        <q-btn dense to="/admin/product/add/0" color="secondary" label="Add product" class="col-5" />
        <div class="col-2"></div>
        <q-btn to="/admin/product/edit" color="secondary" icon="edit" label="Edit Resource" class="col-5"></q-btn>
      </div>
      <!-- <a href="/#/product#test_link">Test oben</a> -->
      <q-btn to="product#test_link" label="Oben" color="positive"></q-btn>

      <!-- <div class="float-right"></div> -->
      <q-separator></q-separator>



      <!-- <div class="row"> -->
      <div class="full-width row wrap justify-center items-start content-center ">
        <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">

          <div v-for="product in products" :key="product.id">
            <productBox :product="product"></productBox>
          </div>
        </div>
      </div>

      <!-- product Sushi -->
      <div class="" >

<q-card class="q-mt-sm q-mb-lg q-ml-sm q-mr-sm">
  <q-card-actions class="flex justify-center text-h4">
    <div >Sushi</div>
  </q-card-actions>
</q-card>


</div>
      <div class="full-width row wrap justify-center items-start content-center ">
        <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
          <div v-for="product in sushiProducts" :key="product.id">
            <productBox :product="product"></productBox>
          </div>
        </div>
      </div>

    </div>
    <!-- <div class="col-6"></div> -->
    <!-- <div class="col-6"></div> -->
  </q-page>

  <div name="test_link">oooo</div>

</template>
<script >
import { ref, computed, nextTick } from "vue";
import axios from "axios";
import { useStore } from 'vuex';

import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import Detail from "../customer/Detail.vue";
// import productBox from "src/components/product/ProductBoxOrig.vue";
import productBox from "src/components/product/ProductBox.vue";
import Product from "/src/apis/Product.js"
import { WebApi } from "/src/apis/WebApi";


// const products = ref([]);
export default {
  component: { productBox },
  setup() {
    const $store = useStore()

    const $q = useQuasar();
    const router = useRouter();
    // axios.get("http://localhost:8687/product")
    //     .then(response => {
    //     products.value = response.data;
    //     console.log(products.value);
    // })
    //     .catch(err => {
    //     console.log(err);
    // });
    const products = computed({
      get: () => $store.state.cache.products,
    })
    // const sushiProducts = []
    console.log("PR",products.value)
    const sushiProducts = products.value.filter(pr =>{
     return pr.category === 'sushi'
    })
    console.log("sushiProducts",sushiProducts)
    return {
      products,
      sushiProducts,
    };
  },
  mounted() {
    this.$store.dispatch('cache/getProduct');

  },
  data() {
  },
  methods: {},
  components: { Detail, productBox }
}
</script>
<style>
/* .wallpaper {
     background: url(/img/bgrKoto.png)
        no-repeat center center;
     background-size: cover;
     height: 100%;
     position: absolute;
     width: 100%;
  } */
.product {
  font-size: large;
  text-align: center;
}

.cate-card {
  width: 100%;
  height: 100%
}
</style>
