<template>
  <q-page class="q-pa-md">
    <!-- make form in center -->
    <div class="flex justify-center text-h5">Nachricht von Kunden</div>
    <div v-for="contact in contacts" :key="contact.id">
    <q-card>
      <q-card-selection>
        <div class="float-right">
        <div class="q-mr-sm">{{contact.day}}</div>

        <div>{{contact.time}}</div>

        </div>
        <div class="">
          <div class="q-mt-sm q-ml-sm">
            Name : {{contact.name}}
          </div>
          <div class="q-mt-sm q-ml-sm">
            Telefon Nr: {{contact.mobil}}
          </div>
        </div>
        <q-btn :label="contact.status == 2 ?'Đọc':'Đã Xem'" class="float-right" @click="changeStatus(contact)"
            :color="contact.status == 2 ? 'red': 'positive'"></q-btn>
      </q-card-selection>
      <q-card-actions>
        <div>
          Nachricht:{{contact.message}}
        </div>
      </q-card-actions>
    </q-card>
  </div>

    <q-separator></q-separator>
  </q-page>

</template>

<script >
import { ref, computed, nextTick } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import { WebApi } from "/src/apis/WebApi";

const contacts = ref({})
export default {
  // component: {CategoryBox},
  setup() {

    const $q = useQuasar();
    const router = useRouter();
    axios.get(`${WebApi.server}/admin/allContact`)
      .then(response => {
        contacts.value = response.data;
      })
      .catch(err => {
        console.log(err);
      });

    console.log("contyt", contacts.value)
    return {
      contacts,
    };
  },
  data() {
  },
  methods: {
    changeStatus(contact) {
      contact.status = 1
      axios.put(`${WebApi.server}/admin/contact/changeStatus/` + parseInt(contact.id))
    },
  },
  // components: { Detail, CategoryBox }
}
</script>
<style>
.category {
  font-size: large;
  text-align: center;
}

.cate-card {
  width: 100%;
  height: 100%
}
</style>
