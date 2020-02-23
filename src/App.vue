<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon/>

      <v-spacer></v-spacer>

      <v-btn
        text
      >
        <v-icon>mdi-account</v-icon>
        <span class="ml-2">Alan Lira</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from '@/pages/Home';

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  .v-content {
    background-color: #D3D3D3;
  }
</style>
