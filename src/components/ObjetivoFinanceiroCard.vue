<template>
  <v-card class="ma-4" outlined tile elevation="2">
    <v-row class="px-4 py-1 acoes">
      <v-btn text icon>
        <v-icon @click="editarHandle()" class="primary--text">mdi-pencil</v-icon>
      </v-btn>
      <v-btn text icon>
        <v-icon @click="removerHandle()" class="primary--text">mdi-close</v-icon>
      </v-btn>
    </v-row>
    <v-row align="center" class="px-12 py-4">
      <v-progress-circular
        rotate="90"
        size="200"
        :value="objetivo.porcentagem"
        width="20"
        color="primary"
      >
        <span class="title">{{objetivo.valorAtual | currency}}</span>
      </v-progress-circular>
    </v-row>
    <v-divider></v-divider>
    <v-row class="pa-2" justify="center">
      <span class="primary--text font-weight-bold">{{objetivo.nome}}</span>
    </v-row>
  </v-card>
</template>

<script>
import accounting from 'accounting';

export default {
  filters: {
    currency: function(value) {
      return accounting.formatMoney(value, "R$ ", 2, '.', ',');
    }
  },
  props: {
    objetivo: Object
  },
  methods: {
    editarHandle() {
      this.$emit("editar", this.objetivo);
    },
    removerHandle() {
      this.$emit("remover", this.objetivo);
    }
  }
};
</script>

<style scoped>
.acoes {
  z-index: 1;
  position: absolute;
  right: 0;
}
</style>