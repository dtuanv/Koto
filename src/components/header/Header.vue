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
      <div class="col-6 ">
        <q-btn

          label="Impressung"
          class=""
          @click="dialog_impressung = true"
        ></q-btn>
      </div>
    </div>
    <div class="flex justify-center" style="margin-top:5vh">Copyright © 2022 Jasmin</div>
  </div>
  <q-dialog v-model="dialog_impressung">
    <q-card style="width: 90vw; height: 30vh">
      <q-card-section class="text-h4 flex justify-center">
        Impressung</q-card-section
      >
      <q-card-actions style="width:100%">
        <div class="" >
          <div class="text-h6 flex justify-center">Koto Asian Kitchen</div>
          <div class="row q-mt-sm">
            <div class="q-mr-sm">Adresse:</div>
            <div>Stummstraße 8, 66763 Dillingen/Saar</div>
          </div>
          <div class="row q-mt-sm">
            <div>Email:</div>
            <div>koto@gmail.com</div>
          </div>
          <div class="row q-mt-sm">
            <div>Telefon:</div>
            <div>0402654</div>
          </div>

          <div class="q-mt-sm">Gesetzlicher Vertreter: Huu Hoang Anh Hoang</div>
        </div>
      </q-card-actions>
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
