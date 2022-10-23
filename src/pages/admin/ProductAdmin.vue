<template>
  <!-- <div >{{products}}</div> -->
  <q-page>
    <!-- adminn -->
    <div style=" position:fixed; z-index:150; width:100%;top: 58px;">
      <!-- <div class="row">
        <div class=" text-h5 flex justify-center " style="background-color:cornflowerblue;width:100%">Our Product</div>
      </div> -->
      <div class="row">
        <q-btn dense to="/admin/product/add/0" color="secondary" label="Add product" class="col-5" />
        <div class="col-2" style="background-color:aqua"></div>
        <q-btn to="/admin/product/editResource" color="secondary"  label="Edit Resource" class="col-5">
        </q-btn>
      </div>


      <!-- <q-select filled  label="Category" :options="productCategory" map-options
            emit-value></q-select> -->
    </div>


    <!-- adminn  end-->
    <div class="wallpaper " style="margin-top: 164px;">
      <!-- make form in center -->

      <!-- select part begin -->

      <div class="q-mt-lg"  v-if="true">
        <div class="row shadow-15" :style="
          $q.screen.width > 400 && $q.screen.height > 700
            ? 'position: fixed; z-index: 200; background-color: khaki; padding: 10px;top: 95px; width: 100%;'
            : 'position: fixed; z-index: 400; background-color: khaki; padding: 4px 0px 10px;top: 94px; height:100px; width: 100%;'
        ">
          <div class="col-12 flex justify-center q-mt-sm">
            <q-btn class="" style="font-family: inherit; color: darkseagreen" label="Vorspeisen"
              @click="goToVorspeisen"></q-btn>
            <q-btn class="q-ml-sm" label="Haupgang" style="font-family: inherit; color: chocolate"
              @click="goToHauptgang"></q-btn>

            <q-btn class="q-ml-sm" label="Sushi Mix" style="font-family: inherit; color: blue" @click="goToSushiMix">
            </q-btn>
          </div>
          <div class="col-12 flex justify-center q-mt-sm">
            <q-btn class="q-ml-sm" style="font-family: inherit; color: lightseagreen" label="Sushi" @click="goToSushi">
            </q-btn>
          </div>
        </div>
      </div>
      <!-- select part end -->


      <!-- Vorspeisen -->
      <div :style="$q.screen.width > 400 && $q.screen.height > 700 ? 'margin-top: 13vh;':'margin-top:50px'">
        <q-card class="q-mb-lg q-ml-sm q-mr-sm">
          <q-card-actions class="flex justify-center text-h4">
            <div ref="vorspeisen" style="font-family: cursive; color: coral">
              Vorspeisen
            </div>
          </q-card-actions>
        </q-card>
      </div>
      <!-- <div>vorspeiseProducts{{vorspeiseProducts.subFoods}}</div> -->
      <div v-if="$q.screen.gt.sm">
        <div class="q-col-gutter-md row">
          <div v-for="product in vorspeiseProducts" :key="product.id">

            <productBox :product="product"></productBox>
            <div>{{product.subFoods}} </div>
          </div>

        </div>
      </div>

      <!-- mobil -->
      <div v-else class="full-width row wrap justify-center items-start content-center">
        <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
          <div v-for="product in vorspeiseProducts" :key="product.id">
            <productBox :product="product"></productBox>
          </div>
        </div>
      </div>
      <!-- Vorspeisen end -->
      <q-separator></q-separator>

      <!-- <div class="row"> -->
      <!-- <div class="full-width row wrap justify-center items-start content-center">
        <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
          <div v-for="product in products" :key="product.id">
            <productBox :product="product"></productBox>
          </div>
        </div>
      </div> -->
      <!-- hauptgnag -->
      <div class="">
        <q-card class="q-mt-sm q-mb-lg q-ml-sm q-mr-sm">
          <q-card-actions class="flex justify-center text-h4">
            <div ref="hauptgang" style="font-family: cursive; color: coral">
              Hauptgang
            </div>
          </q-card-actions>
        </q-card>
      </div>
      <div class="full-width row wrap justify-center items-start content-center">
        <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
          <div v-for="product in hauptgangProducts" :key="product.id">
            <productBox :product="product"></productBox>
          </div>
        </div>
      </div>
    </div>
    <!-- hauptgnag -->

    <!-- product Sushi -->
    <div class="">
      <q-card class="q-mt-sm q-mb-lg q-ml-sm q-mr-sm">
        <q-card-actions class="flex justify-center text-h4">
          <div ref="sushiMix" style="font-family: cursive; color: coral">
            Sushi Mix
          </div>
        </q-card-actions>
      </q-card>
    </div>
    <div class="full-width row wrap justify-center items-start content-center">
      <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
        <div v-for="product in sushiMixProducts" :key="product.id">
          <productBox :product="product"></productBox>
        </div>
      </div>
    </div>

    <!-- product Sushi -->
    <div class="">
      <q-card class="q-mt-sm q-mb-lg q-ml-sm q-mr-sm">
        <q-card-actions class="flex justify-center text-h4">
          <div ref="sushi" style="font-family: cursive; color: coral">
            Sushi
          </div>
        </q-card-actions>
      </q-card>
    </div>

    <!-- <div>sushiProducts..{{sushiProducts}}</div> -->
<!-- maki product -->  <div class="">
      <q-card class="q-mt-sm q-mb-lg q-ml-sm q-mr-sm">
        <q-card-actions class="flex justify-center text-h4">
          <div ref="sushi" style="font-family: cursive; color: coral">
             Maki Sushi
          </div>
        </q-card-actions>
      </q-card>
    </div>

<!-- maki product -->

    <div class="full-width row wrap justify-center items-start content-center">
      <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
        <div v-for="product in makiProducts" :key="product.id">

          <productBox :product="product"></productBox>
        </div>
      </div>
    </div>

    <!-- <div class="col-6"></div> -->
    <!-- <div class="col-6"></div> -->
  </q-page>
</template>
<script >
import { ref, computed, nextTick } from "vue";
import axios from "axios";
import { useStore } from "vuex";

import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import Detail from "../customer/Detail.vue";
// import productBox from "src/components/product/ProductBoxOrig.vue";
import productBox from "src/components/product/ProductBox.vue";
import Product from "/src/apis/Product.js";
import { WebApi } from "/src/apis/WebApi";

// const products = ref([]);
export default {
  component: { productBox },
  setup() {

    const productCategory = [
      {label:'Vorspeise', clickTo:"goToVorspeisen"},
      {label:'Hauptgang'},
    ]
    const category = ref('')

    const $q = useQuasar();
    $q.screen.setSizes({ xs: 100 });
    // scroll To element
    const sushi = ref(null);
    const vorspeisen = ref(null);
    const hauptgang = ref(null);
    const sushiMix = ref(null);
    const goToSushi = () => {
      sushi.value?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    const goToVorspeisen = () => {
      vorspeisen.value?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    const goToHauptgang = () => {
      hauptgang.value?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    const goToSushiMix = () => {
      sushiMix.value?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    // End Scroll to Element
    const $store = useStore();

    const router = useRouter();
    // axios.get("http://localhost:8686/product")
    //     .then(response => {
    //     products.value = response.data;
    //     console.log(products.value);
    // })
    //     .catch(err => {
    //     console.log(err);
    // });

    const products = computed({
      get: () => $store.state.cache.products,
    });
    console.log("PR", products.value);

    const vorspeiseProducts = computed({
      get: () => $store.state.cache.vorspeiseProducts,
    });
    // const sushiProducts = []
    // const vorspeiseProducts = products.value.filter((pr) => {
    //   return pr.category === "vorspeise";
    // });
    const hauptgangProducts = computed({
      get: () => $store.state.cache.hauptgangProducts,
    });
    const sushiMixProducts = computed({
      get: () => $store.state.cache.sushiMixProducts,
    });
    const sushiProducts = computed({
      get: () => $store.state.cache.sushiProducts,
    });

    const makiProducts = computed({
      get: () => $store.state.cache.makiProducts,
    });
    const nigiriProducts = computed({
      get: () => $store.state.cache.nigiriProducts,
    });
    // console.log("sushiProducts", sushiProducts);
    return {
      productCategory,
    category,

      sushi,
      vorspeisen,
      hauptgang,
      sushiMix,
      makiProducts,
      nigiriProducts,
      goToSushi,
      goToSushiMix,
      goToHauptgang,
      goToVorspeisen,
      products,
      sushiProducts,
      vorspeiseProducts,
      hauptgangProducts,
      sushiMixProducts,
    };
  },
  mounted() {
    this.$store.dispatch("cache/getProduct");
  },
  data() { },
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
      console.log("move");
    },
  },
  components: { Detail, productBox },
};
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
  height: 100%;
}
</style>
