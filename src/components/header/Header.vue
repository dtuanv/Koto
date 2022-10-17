<template>
  <div class="" style="
          color: red;
          position: relative;
          color: red;
          bottom: 0vh;
          padding: 7vh;
          background-color: #342a2a;
        ">

    <q-btn label="Impressung" @click="dialog_impressung=true"></q-btn>
    <div>Copyright © 2022 Jasmin </div>
  </div>
  <q-dialog v-model="dialog_impressung">
    <q-card>
      <q-card-section class="text-h4 flex justify-center"> Impressung</q-card-section>
      <q-card-actions>
        <div>
          <div class="text-h6">Koto Asian Kitchen</div>
          <div class="row">
            <div class="q-mr-sm">Adresse: </div>
            <div>Stummstraße 8,
            66763 Dillingen/Saar</div>
          </div>
          <div class="row">
            <div>Email:</div>
            <div>koto@gmail.com</div>
          </div>
          <div class="row">
            <div>Telefon:</div>
            <div>0402654</div>
          </div>

          <div>Gesetzlicher Vertreter: Huu Hoang Anh Hoang</div>

        </div>
      </q-card-actions>
    </q-card>

  </q-dialog>
</template>
<script>
import { ref } from 'vue';

export default {
  name: 'Header',
  setup() {
    return {
      dialog_impressung: ref(false)
    }

  }

}
</script>
