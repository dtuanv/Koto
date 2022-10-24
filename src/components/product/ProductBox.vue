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
              <div  v-if="product.imageUrl != ''">
            <img :src="'/img/' + product.imageUrl" alt="" style="height: 25vw; width: 25vw" />
              </div>
            <div v-if="product.price == '' ">
              <q-btn class="q-mt-sm" color="green" @click="dialog_zutat=true" label="Zutat Anzeigen"></q-btn>
            </div>
            <div v-if="product.price !== '' && product.imageUrl == '' ">
              <q-btn class="q-mt-sm" color="green" @click="dialog_zutat=true" label="Zutat Anzeigen"></q-btn>
            </div>
          </div>
          <q-dialog v-model="dialog_zutat">
            <q-card>
              <q-card-selection>
                <div class="flex justify-center q-mt-xs " style="color:red;">
                  ALLE GERICHTE OHNE GLUTAMAT

                </div>
              </q-card-selection>
              <q-card-actions>
                <div class="">
                  <div style="color:red;">
                    Zusatzstoffe :
                  </div>
                  <ol>
                    <li>
                      mit Konservierungsstoff.
                    </li>
                    <li>mit Geschmacksverstärkern</li>
                  </ol>

                </div>

                <div class="row">
                  <div style="color:red;">
                    Allergene :
                  </div>
                  <ol style="list-style-type: lower-alpha;">
                    <li>
                      Glutenhaltiges Getreide:weizen.
                    </li>
                    <li>Krebstiere</li>
                    <li>Eier und Eiererzeugnisse </li>
                    <li>Fisch und Fischererzeugnisse</li>
                    <li>Erdnüsse und Erdnusserzeugnisse</li>
                    <li>Soja und Sojaerzeugnisse</li>
                    <li>Milch und Milchererzeugnisse</li>
                    <div class="row">

                      <li></li>
                      <li></li>
                      <li></li>
                    </div>

                    <li>Sesamsamenerzeugnisse</li>
                    <li></li>
                    <li></li>


                    <li>Weichtiere( Muscheln, Kalamri, Austern,Schnecken)</li>
                  </ol>

                </div>


                <div>



                </div>
              </q-card-actions>
            </q-card>
          </q-dialog>

          <div style="margin-left:12px" class="col-8 text-subtitle2">
            <div class="float-right" v-if="product.checkSubFood ==2">{{product.price}}</div>

            {{ product.name }}

            <div class="q-ml-sm " style="font-size: 12px;">{{ product.decription }}</div>
            <!-- button zutat begin -->
            <div v-if="product.price !== '' && product.imageUrl != '' " style="width: 70px;" class="q-mt-sm float-right">
              <q-btn class="" color="green" @click="dialog_zutat=true" label="Zutat Anzeigen"></q-btn>
            </div>
            <!-- button zutat end -->

            <div class="row" style="width:80vw" v-for="subF in product.subFoods" :key="subF">
              <div class="q-ml-sm text-caption col-8">

                {{subF.nameF}}
                <q-badge v-if="subF.ingredient != undefined" color="red" align="top">
                  {{ subF.ingredient }}
                </q-badge>

              </div>
              <!-- <div class="col-1"></div> -->
              <div style="" class="text-caption col-1.5">
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


            <!-- <div class="col-9"></div> -->




          </div>


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
      dialog_zutat: ref(false),
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
          avatar: "/img/icon/hAnh.png",
        });
      } else {
        this.$q.notify({
          message: "Number of Item must be grater than 0.",
          color: "negative",
          avatar: "/img/icon/hAnh.png",

        });
      }
    },
  },
  computed: {},
};
</script>

