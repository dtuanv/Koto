<template>
  <!-- <div >{{products}}</div> -->
  <q-page>
    <div class="wallpaper">
      <!-- <img
        v-if="$q.screen.gt.sm"
        src="/img/dalat.jpg"
        style="width: 100%; height: 40vh"
      />
      <img v-else src="/img/dalat.jpg" style="width: 100%; height: 15vh" /> -->
      <!-- make form in center -->

      <div class="q-mt-lg" v-if="true">
        <div class="row shadow-15" :style="
          $q.screen.width > 400 && $q.screen.height > 700
            ? 'position: fixed; z-index: 200; background-color: blanchedalmond; padding: 10px;top: 6vh; width: 100%;'
            : 'position: fixed; z-index: 200; background-color: blanchedalmond; padding: 4px 0px 10px;top: 56px; height:100px; width: 100%;'
        ">
          <div class="col-12 flex justify-center q-mt-sm">
            <q-btn class="" style="font-family: inherit; color:darkblue" label="Vorspeisen"
              @click="goToVorspeisen"></q-btn>
            <q-btn class="q-ml-sm" label="Haupgang" style="font-family: inherit; color: chocolate"
              @click="goToHauptgang"></q-btn>

            <q-btn class="q-ml-sm" label="Sushi Menü" style="font-family: inherit; color: blue" @click="goToSushiMix">
            </q-btn>
          </div>
          <div class="col-12 flex justify-center q-mt-sm">
            <q-btn class="q-ml-sm" style="font-family: inherit; color: lightseagreen" label="Sushi" @click="goToSushi">
            </q-btn>
          </div>
        </div>
      </div>

      <!-- Vorspeisen -->
      <div :style="$q.screen.width > 400 && $q.screen.height > 700 ? 'margin-top: 13vh;':'margin-top:120px'">
        <q-card class="q-mb-lg q-ml-sm q-mr-sm">
          <q-card-actions class="flex justify-center text-h4" style="background-color: aquamarine;">
            <div ref="vorspeisen" style="font-family: cursive; color: coral;">
              Vorspeisen
            </div>
          </q-card-actions>
        </q-card>
      </div>
      <!-- <div>vorspeiseProducts{{vorspeiseProducts.subFoods}}</div> -->
      <div v-if="$q.screen.gt.sm" class="full-width row wrap justify-center items-start content-center">
        <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
          <div v-for="(product,index) in vorspeiseProducts" :key="index">

            <productBox :product="product"></productBox>
            <!-- <div>{{product.subFoods}} </div> -->
          </div>

        </div>
      </div>

      <!-- mobil -->
      <div v-else class="full-width row wrap justify-center items-start content-center">
        <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
          <div v-for="(product,index) in vorspeiseProducts" :key="index">
            <productBox :product="product"></productBox>
          </div>
        </div>
      </div>
      <!-- Vorspeisen end -->
      <q-separator></q-separator>

      <!-- <div class="row"> -->
      <!-- <div class="full-width row wrap justify-center items-start content-center">
        <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
          <div v-for="(product,index) in products" :key="index">
            <productBox :product="product"></productBox>
          </div>
        </div>
      </div> -->
      <!-- hauptgnag -->
      <div class="">
        <q-card class="q-mt-sm q-mb-lg q-ml-sm q-mr-sm">
          <q-card-actions class="flex justify-center text-h4" style="background-color: antiquewhite;">
            <div ref="hauptgang" style="font-family: cursive; color: coral">
              Hauptgang
            </div>
          </q-card-actions>
        </q-card>
      </div>
      <div class="full-width row wrap justify-center items-start content-center">
        <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
          <div v-for="(product,index) in hauptgangProducts" :key="index">
            <productBox :product="product"></productBox>
          </div>
        </div>
      </div>
    </div>
    <!-- hauptgnag -->


    <div class="">
      <q-card class="q-mt-sm q-mb-lg q-ml-sm q-mr-sm">
        <q-card-actions class="flex justify-center text-h4" style="background-color: steelblue;">
          <div ref="sushi" style="font-family: cursive; color: coral">
            Sushi
          </div>
        </q-card-actions>
      </q-card>
    </div>

    <!-- <div>sushiProducts..{{sushiProducts}}</div> -->
    <!-- <div class="full-width row wrap justify-center items-start content-center">
      <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
        <div v-for="(product,index) in sushiProducts" :key="index">

          <productBox :product="product"></productBox>
        </div>
      </div>
    </div> -->

    <!-- <div class="col-6"></div> -->
    <!-- nigiri product -->
    <div>
      <div class="">
        <q-card class="q-mt-sm q-mb-lg q-ml-sm q-mr-sm">
          <q-card-actions class="flex justify-center " style="background-color: honeydew;">
            <div  style="font-family: emoji; color: coral;font-size: 18px;">
              Nigiri-SuShi( geformte Sushi, je 2 St.)
            </div>
          </q-card-actions>
        </q-card>
      </div>
      <div class="full-width row wrap justify-center items-start content-center">
        <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
          <div v-for="(product,index) in nigiriProducts" :key="index">

            <productBox :product="product"></productBox>
          </div>
        </div>
      </div>

    </div>

    <!-- nigiri product -->


    <!-- maki product -->
    <div>
      <div class="">
        <q-card class="q-mt-sm q-mb-lg q-ml-sm q-mr-sm">
          <q-card-actions class="flex justify-center text-h6" style="background-color: antiquewhite">
            <div ref="maki" style="font-family: emoji; color: coral">
              Maki-Sushi( je 8 St.)
            </div>
          </q-card-actions>
        </q-card>
      </div>
      <div class="full-width row wrap justify-center items-start content-center">
        <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
          <div v-for="(product,index) in makiProducts" :key="index">

            <productBox :product="product"></productBox>
          </div>
        </div>
      </div>

    </div>

    <!-- maki product -->
    <!-- Inside Out Roll -->
    <div>
      <div class="">
        <q-card class="q-mt-sm q-mb-lg q-ml-sm q-mr-sm">
          <q-card-actions class="flex justify-center text-h6" style="background-color: antiquewhite">
            <div ref="insideOut" style="font-family: emoji; color: coral">
              Inside Out Roll( je 8St.)
            </div>
          </q-card-actions>
        </q-card>
      </div>
      <div class="full-width row wrap justify-center items-start content-center">
        <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
          <div v-for="(product,index) in insideOutProducts" :key="index">
            <productBox :product="product"></productBox>
          </div>
        </div>
      </div>

    </div>
    <!-- Inside Out Roll end-->
    <!-- Tempura Roll -->
    <div>
      <div class="">
        <q-card class="q-mt-sm q-mb-lg q-ml-sm q-mr-sm">
          <q-card-actions class="flex justify-center text-h6" style="background-color: antiquewhite">
            <div style="font-family: emoji; color: coral">
              Tempura roll Sushi (je 6 St.)
            </div>
          </q-card-actions>
        </q-card>
      </div>
      <div class="full-width row wrap justify-center items-start content-center">
        <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
          <div v-for="(product,index) in tempuraProducts" :key="index">
            <productBox :product="product"></productBox>
          </div>
        </div>
      </div>
    </div>
    <!-- Tempura Roll end -->

    <!-- Spezial Koto -->
    <div>
      <div class="">
        <q-card class="q-mt-sm q-mb-lg q-ml-sm q-mr-sm">
          <q-card-actions class="flex justify-center text-h6" style="background-color: antiquewhite">
            <div  style="font-family: emoji; color: coral">
              Spezial Koto Sushi (je 8 St.)
            </div>
          </q-card-actions>
        </q-card>
      </div>
      <div class="full-width row wrap justify-center items-start content-center">
        <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
          <div v-for="(product,index) in spezialProducts" :key="index">
            <productBox :product="product"></productBox>
          </div>
        </div>
      </div>
    </div>
    <!-- Spezial Koto end -->

       <!-- product Sushi menü -->
       <div class="">
      <q-card class="q-mt-sm q-mb-lg q-ml-sm q-mr-sm">
        <q-card-actions class="flex justify-center text-h4" style="background-color: cadetblue;">
          <div ref="sushiMix" style="font-family: cursive; color: coral">
            Sushi Menü
          </div>
        </q-card-actions>
      </q-card>
    </div>
    <div class="full-width row wrap justify-center items-start content-center">
      <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
        <div v-for="(product,index) in sushiMixProducts" :key="index">
          <productBox :product="product"></productBox>
        </div>
      </div>
    </div>

    <!-- product Sushi  menü end -->

    <!-- sashimi  -->
    <div>
      <div class="">
        <q-card class="q-mt-sm q-mb-lg q-ml-sm q-mr-sm">
          <q-card-actions class="flex justify-center text-h6" style="background-color: antiquewhite">
            <div ref="maki" style="font-family: emoji; color: coral">
              Sashimi
            </div>
          </q-card-actions>
        </q-card>
      </div>
      <div class="full-width row wrap justify-center items-start content-center">
        <div class="col-xs-12 col-md-4 q-col-gutter-md wrap">
          <div v-for="(product,index) in sashimiProducts" :key="index">

            <productBox :product="product"></productBox>
          </div>
        </div>
      </div>

    </div>
    <!-- sashimi end -->

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
// import productBox from '@/path/to/product/ProductBox.vue'
import productBox from "src/components/product/ProductBox.vue";
import Product from "/src/apis/Product.js";
import { WebApi } from "/src/apis/WebApi";

// const products = ref([]);
export default {
  components: { productBox },
  setup() {
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

    // new
    const nigiriProducts = computed({
      get: () => $store.state.cache.nigiriProducts,
    });
    const makiProducts = computed({
      get: () => $store.state.cache.makiProducts,
    });
    const insideOutProducts = computed({
      get: () => $store.state.cache.insideOutProducts,
    });
    const tempuraProducts = computed({
      get: () => $store.state.cache.tempuraProducts,
    });

    const spezialProducts = computed({
      get: () => $store.state.cache.spezialProducts,
    });

    const sashimiProducts = computed({
      get: () => $store.state.cache.sashimiProducts,
    });
    // console.log("sushiProducts", sushiProducts);
    return {
      makiProducts,
      nigiriProducts,
      insideOutProducts,
      tempuraProducts,
      spezialProducts,
      sashimiProducts,
      sushi,
      vorspeisen,
      hauptgang,
      sushiMix,
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
