<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />

        <q-btn flat no-caps no-wrap class="q-ml-xs" to="/">
          <q-avatar style="    width: 51px;
    height: 39px;"><img src="/img/KotoLogo.png" alt="" /></q-avatar>
          <q-toolbar-title shrink class="text-weight-bold">
            <div class="q-ml-xl" >
              <div style="font-family: cursive; font-size: 27px;color: darkslategray;" >
              Koto
            </div>
            </div>

          </q-toolbar-title>
        </q-btn>

        <q-tabs v-if="$q.screen.gt.sm" class="
            GL__toolbar-link
            q-ml-xs q-gutter-md
            text-body2 text-weight-bold
            row
            items-center
            no-wrap
          ">
          <!-- <q-tabs v-if="true" class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap" > -->
          <q-route-tab :to="'/'" label="Home" />
          <q-route-tab :to="{ name: 'customer' }" label="Customer" />
          <q-route-tab :to="{ name: 'product', params: { id: 1 } }" replace label="Product" />
        </q-tabs>
        <!-- to shoping cart -->
        <!-- <q-btn
          class="absolute-top-right q-mt-sm q-mr-md"
          flat
          icon="shop"
          to="/shopping"
        >
          <q-badge color="red" floating transparent>
            {{ cartItemCount }}
          </q-badge>
        </q-btn> -->
        <q-btn v-if="role === 'ADMIN'" class="absolute-top-right q-mt-sm q-mr-md" flat color="red" label="Log Out"
          @click="logOut" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :mini="!drawer || miniState" @click.capture="drawerClick" :width="200"
      :breakpoint="500" bordered class="bg-grey-3">
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable v-ripple to="/product">
            <q-item-section avatar>
              <q-icon name="shopping_bag" />
            </q-item-section>

            <q-item-section> Menü </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/reservation">
            <q-item-section avatar>
              <q-icon name="book_online" />
            </q-item-section>

            <q-item-section> Reservation </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/contact">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Contact </q-item-section>
          </q-item>

          <q-item v-if="role === 'ADMIN'" clickable v-ripple to="/admin">
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section> Admin </q-item-section>
          </q-item>

          <q-item v-if="role === 'ADMIN'" clickable v-ripple @click="logOut">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section> LogOut </q-item-section>
          </q-item>

          <q-item v-else clickable v-ripple to="/login">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section> Login </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <!--
          in this case, we use a button (can be anything)
          so that user can switch back
          to mini-mode
        -->
      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn dense round unelevated color="accent" icon="chevron_left" @click="miniState = true" />
      </div>
    </q-drawer>

    <!-- (Optional) The Footer -->

    <q-footer>

      <div v-if="card_cookie">
        <q-card style="background-color:aqua;height: 120px;">
          <q-card-section style="padding-bottom:0px">
            <div style="width:100%">
              <div style="color:black" class="flex justify-center">
                Wir verwenden Cookies, um unsere Website und unseren Service zu optimieren.
              </div>
            </div>

          </q-card-section>
          <q-card-actions>

            <div class="row" style="width:100%">
              <div class=""></div>
              <div class="col-2">
                <q-btn @click="card_cookie=false" label="Ablehnen" color="negative"></q-btn>
              </div>
              <div class="col-6"></div>
              <div class="">
                <q-btn class="" @click="card_cookie=false" color="positive" label="Akzeptieren"></q-btn>

              </div>

            </div>
          </q-card-actions>
        </q-card>
      </div>

      <q-tabs switch-indicator>
        <q-route-tab icon="restaurant_menu" :to="{ name: 'product', params: { id: 1 } }" replace label="Menü"
          color="positive" />
        <q-route-tab icon="book_online" to="/reservation" replace label="Reservierung" />
      </q-tabs>
    </q-footer>

    <!-- <q-page-container class="q-mb-xl" style="padding: 16px 0px">
      <router-view />
      <div>HI</div>
    </q-page-container> -->

    <q-page-container>
      <!-- This is where pages get injected -->


      <router-view />
      <!-- <q-page>Hih new</q-page> -->
      <!-- <div>HIhi</div> -->
      <!-- <div class="" style="
          color: red;
          position: relative;
          color: red;
          bottom: 0vh;
          padding: 7vh;
          background-color: #342a2a;
        ">

        <div>Copyright © 2022 Jasmin </div>
      </div> -->

      <Header></Header>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed, nextTick } from "vue";
import { WebApi } from "/src/apis/WebApi";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

import { useQuasar } from "quasar";
import { date } from "quasar";
import Header from "/src/components/header/Header.vue";
export default {
  // name: 'LayoutName',
  // props:{countCart},
  components: {
    Header,
  },

  computed: {
    cartItemCount() {
      return this.$store.getters["cache/cartItemCount"];
    },
  },
  setup() {
    const miniState = ref(false);
    const amountItem = ref(0);
    const leftDrawerOpen = ref(false);
    const route = useRoute();
    const $q = useQuasar();
    const $router = useRouter();
    const $store = useStore();


    const role = computed({
      get: () => $store.state.cache.role,
    });
    console.log("Role", role)


    return {
      amountItem,
      leftDrawerOpen,
      drawer: ref(false),
      miniState,
      card_cookie: ref(true),

      role,
      logOut() {
        localStorage.removeItem('user')
        localStorage.removeItem('onlyAdmin')
        $store.dispatch("cache/logOut")
        $q.notify({
          message: "logOut",

          color: "positive",
          avatar: "/img/icon/hAnh.png",

        });
        $router.replace("/")
      }
      ,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      drawerClick(e) {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (miniState.value) {
          miniState.value = false;

          // notice we have registered an event with capture flag;
          // we need to stop further propagation as this click is
          // intended for switching drawer to "normal" mode only
          e.stopPropagation();
        }
      },
    };
  },
};
</script>
