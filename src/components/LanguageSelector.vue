<template>
  <v-row class="justify-end ma-0">
    <v-col
      v-on:click="onClick"
      v-click-outside="onClickOutisde"
      cols="2"
      sm="1"
      class="bg-white rounded d-flex justify-center align-center"
    >
      <v-img
        class="ml-2"
        :width="'75%'"
        max-height="30"
        aspect-ratio="16/9"
        src="~/assets/img/es-flag.svg"
      ></v-img>
      <v-icon icon="mdi-chevron-down"></v-icon>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => {
    isOpen: false;
  },
  methods: {
    onClickOutisde: function (e) {
      this.isOpen = false;
      console.log("Is popup open: ", this.isOpen);
    },
    onClick: function (e) {
      this.isOpen = true;
      console.log("Is popup open: ", this.isOpen);
    },
  },
};
</script>

<style>
</style>