<template>
  <div style="

      position: relative;

      bottom: 0vh;
      padding: 2vh 0px 5px 10px;
      background-color: #342a2a;
    ">
    <div class="row">
      <div class="col-6">
        <div>
          <div style="color:blanchedalmond" class="text-h6 ">
            Kontakt :
          </div>
          <div style="color:aliceblue">
            <div>
              Koto Asian Kitchen
            </div>
            <div>
              Stummstraße 8

            </div>
            <div>
              66763 Dillingen/Saar
            </div>

          </div>
        </div>
      </div>
      <div class="col-6  " style="">
        <div class="row " style="margin-left: 16px;">
          <div style="color:blanchedalmond;font-size: 14px;padding-top: 16px;">Follow us:</div>
          <div>
            <q-btn flat style="    padding: 0px 0px 0px 0px;">
              <q-avatar><img src="/img/icon/facebook.png " alt=""
                  :style=" $q.screen.width > 500 && $q.screen.height > 700 ? 'height: 35px; width: 36px;margin-left: 9px;':'height: 8vw; width: 8vw'" />
              </q-avatar>
            </q-btn>
          </div>
          <div>
            <q-btn flat style="    padding: 0px 0px 0px 0px;">
              <q-avatar><img src="/img/icon/instagram.png " alt=""
                  :style=" $q.screen.width > 500 && $q.screen.height > 700 ? 'height: 35px; width: 36px;margin-left: 9px;':'height: 8vw; width: 8vw'" />
              </q-avatar>
            </q-btn>
          </div>
        </div>

        <div class="">
          <q-btn flat style="text-decoration-line: underline;color:blanchedalmond;font-size: 11px;" label="Impressung"
            class="" @click="dialog_impressung = true"></q-btn>

          <q-btn flat style="text-decoration-line: underline;color:blanchedalmond;font-size: 11px;"
            label="Datenschutzerklärung" class=" " to="/datenschutzErklaerung"></q-btn>
        </div>
      </div>
    </div>
    <div class="flex justify-center" style="margin-top: 2vh;margin-bottom: 5px;color:red;">
      Copyright © 2022 Jasmin
    </div>
  </div>
  <!-- dialog_impressung -->
  <q-dialog v-model="dialog_impressung">
    <q-card
      :style="$q.screen.width > 400 && $q.screen.height > 700 ? 'width: 90vw; height: 35vh' : 'width: 90vw; height: 350px'">
      <q-card-section class="text-h4 flex justify-center">
        Impressung</q-card-section>

      <div class="" style="width: 100%">
        <div class="text-h6 flex justify-center">Koto Asian Kitchen</div>
        <div class="row q-mt-lg">
          <div v-if="$q.screen.width > 400 && $q.screen.height > 700" class="col-3"></div>
          <div v-else class="q-ml-sm"></div>
          <div class="">Adresse:</div>
          <div class="q-ml-xs">Stummstraße 8, 66763 Dillingen/Saar</div>
        </div>
        <div class="row q-mt-sm">
          <div class="col-3"></div>
          <div>Email:</div>
          <div class="q-ml-xs">koto@gmail.com</div>
        </div>
        <div class="row q-mt-sm">
          <div class="col-3"></div>

          <div>Telefon:</div>
          <div class="q-ml-xs">06831 5053 643</div>
        </div>
        <div class="row q-mt-sm">
          <div class="col-3"></div>

          <div>Steuer-Nr:</div>
          <div class="q-ml-xs">010/232/18131</div>
        </div>
        <div class="row">
          <div v-if="$q.screen.width > 400 && $q.screen.height > 700" class="col-3"></div>
          <div v-else class="q-ml-sm"></div>
          <div class="q-mt-sm">Gesetzlicher Vertreter: Inh. Huu Hoang Anh Hoang</div>
        </div>
        <div class="q-ml-lg q-mt-sm">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen</div>
      </div>
    </q-card>
  </q-dialog>
  <!-- dialog_impressung -->

</template>
<script>
import { ref } from "vue";

export default {
  name: "Header",
  setup() {
    return {
      dialog_impressung: ref(false),
    };
  },
};
</script>
