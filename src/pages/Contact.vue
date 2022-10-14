<template>
  <q-page padding class="flex justify-center q-mt-xl">
    <!-- content -->
    <q-card style="background-color:bisque; width: 70vw; height: 50vh">
      <q-card-section class="flex justify-center text-h4"
        >Contact</q-card-section
      >
      <q-card-actions>
        <q-form style="width:100%">
          <q-input class="q-ml-sm" label="Name" style="width: 100%"></q-input>
          <q-input
            class="q-ml-sm"
            label="Telefon"
            style="width: 100%"
          ></q-input>
          <q-input
            class="q-mt-lg"
            style="width: 100%"
            v-model="text"
            filled
            type="textarea"
            label="Nachricht"
          />
          <q-btn color="green" class="float-right q-mt-lg" type="submit" label="Submit"></q-btn>
        </q-form>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
