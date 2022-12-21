<template>
  <q-page class="flex flex-center">
    <div style=" padding: 10px 0px 10px 0px; background-color: blanchedalmond; width:100%;color: green;" class="flex justify-center text-h5">Herzlich willkommen</div>
    <!-- <q-img src="/img/koto/home.png"></q-img> -->
    <q-img src="/img/koto/hometisch.png"></q-img>
    <!-- <q-img src="/img/koto/tish5.png"></q-img> -->

    <!-- <q-img src="/img/koto/tish.png" style="max-height: 300px; max-width: 100%" /> -->
    <q-img src="/img/koto/menudecor.png"></q-img>
    <q-img src="/img/koto/sushimenu.png"></q-img>
    <q-img src="/img/koto/warmEssen.png"></q-img>


<!--
    <q-dialog v-model="dialog_hinweis">
        <q-card style="" >
          <q-card-section>
          <div class="text-h5 flex flex-center" style="color:brown">
          Hinweis
          </div>
          </q-card-section>
          <q-card-actions >
          <div class="flex flex-center">
            <div style=" width: 57vw;">
            Im Rahmen der Neueröffnung wartet eine Überraschung auf Sie !
          </div>

          <div class="q-mt-sm">10% Rabatt für Selbstabholung !</div>
          <div>
          Bitte konaktieren Sie uns per Telefon
          </div>
          <div class="row">
          <div>
          <a href="tel:+4968315053643" >0683 1505 3643</a>

          </div>
          <div class="q-ml-xs">
              um zu bestellen.
          </div>
        </div>

          </div>
          <div style="width:100%" class="flex flex-center q-mt-sm">Vielen Dank!</div>


          </q-card-actions>
        </q-card>
    </q-dialog> -->


    <!-- new -->
    <q-dialog v-model="hinweis_dialog" v-if="notice.status == 'on'">
      <q-card style="width: 65vw; ">
        <q-card-action>
          <div class="flex flex-center text-h5" style="color:cadetblue;">Hinweis</div>

        </q-card-action>
        <q-separator></q-separator>
        <q-card-selections>
          <div class="q-pa-lg flex flex-center" >
            <div>
              <q-card-section  v-html="notice.description" />
              </div>
          </div>
        </q-card-selections>
      </q-card>

    </q-dialog>


  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref, computed, nextTick } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { WebApi } from "/src/apis/WebApi";

import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";

export default {
  name: 'IndexPage',
  setup(){
    const notice = ref({})
    axios.get(`${WebApi.server}/getNotice/homePage`).then((response) =>{
      notice.value = response.data
    })
    return{
      hinweis_dialog:ref(true),
      notice,
    }
  }
}
</script>
