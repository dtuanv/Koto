<template>
  <div
    style="
      color: red;
      position: relative;
      color: red;
      bottom: 0vh;
      padding: 4vh;
      background-color: #342a2a;
    "
  >
    <div class="row">
      <div class="col-6"></div>
      <div class="col-5">
        <q-btn
          style="text-decoration-line: underline"
          label="Impressung"
          class="float-right"
          @click="dialog_impressung = true"
        ></q-btn>
      </div>
    </div>
    <div class="flex justify-center" style="margin-top: 5vh">
      Copyright © 2022 Jasmin
    </div>
  </div>
  <q-dialog v-model="dialog_impressung">
    <q-card :style="$q.screen.width > 400 && $q.screen.height > 700 ? 'width: 90vw; height: 30vh' : 'width: 90vw; height: 300px'" >
      <q-card-section class="text-h4 flex justify-center">
        Impressung</q-card-section
      >

      <div class="" style="width: 100%">
        <div class="text-h6 flex justify-center">Koto Asian Kitchen</div>
        <div class="row q-mt-lg">
          <div v-if="$q.screen.width > 400 && $q.screen.height > 700"  class="col-3"></div>
          <div v-else  class="q-ml-sm"></div>
          <div class="">Adresse:</div>
          <div class="">Stummstraße 8, 66763 Dillingen/Saar</div>
        </div>
        <div class="row q-mt-sm">
          <div class="col-3"></div>
          <div>Email:</div>
          <div>koto@gmail.com</div>
        </div>
        <div class="row q-mt-sm">
          <div class="col-3"></div>

          <div>Telefon:</div>
          <div>0402654</div>
        </div>
        <div class="row">
          <div v-if="$q.screen.width > 400 && $q.screen.height > 700"  class="col-3"></div>
          <div v-else  class="q-ml-sm"></div>
          <div class="q-mt-sm">Gesetzlicher Vertreter: Huu Hoang Anh Hoang</div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref } from "vue";

export default {
  name: "Header",
  setup() {
    return {
      dialog_impressung: ref(true),
    };
  },
};
</script>
