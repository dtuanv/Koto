<template>
  <q-page>
    <q-btn class="flex flex-center  btn hoverButton" flat label="Admin Category" to="/category" />
    <q-btn class="flex flex-center  btn hoverButton" flat label="Admin Product" to="admin/product" />
    <q-btn class="flex flex-center hoverButton" flat label="Admin Gallery" to="/category" />
    <q-btn class="flex flex-center hoverButton" flat label="Order History" to="/admin/history" />
    <q-btn class="flex flex-center hoverButton " flat label="Reservierung" to="/admin/reservation" />
    <!-- <q-btn  class="absolute-top-right q-mt-sm q-mr-md" flat color="red" label="Log Out"
      @click="logOut" /> -->
  </q-page>

</template>

<script>
import { ref, computed, nextTick } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import { WebApi } from "/src/apis/WebApi";
import {  watch } from "vue";
const loggedIn = localStorage.getItem('user');
export default {

  setup(){
    const route = useRoute();
    const $q = useQuasar();
    const router = useRouter();

    return{
      logOut(){
        localStorage.removeItem('user')
        localStorage.removeItem('onlyAdmin')

        console.log("loggedIn logout",loggedIn)
        $q.notify({
              message: "logout",

              color: "positive",
              avatar: "/img/trangTi.png",
            });

            router.replace("/");


      }
    }
  }

}
</script>
<style>
.btn {
  margin-bottom: 5px;
}
</style>
