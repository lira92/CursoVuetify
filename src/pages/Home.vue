<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-row justify="start" align="start">
          <ObjetivoFinanceiroCard
            :key="objetivo.id"
            v-for="objetivo in objetivos"
            :objetivo="objetivo"
            @editar="editarObjetivo"
            @remover="removerObjetivo"/>
        </v-row>
      </v-col>
    </v-row>
    <v-btn @click="novoObjetivo()" color="primary" fixed large bottom right fab>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <CadastroObjetivoModal
      v-model="dialog"
      :objetivoExistente="objetivoSelecionado"
      @objetivoSalvo="listarObjetivos"/>
  </v-container>
</template>

<script>
import ObjetivoFinanceiroCard from "@/components/ObjetivoFinanceiroCard";
import CadastroObjetivoModal from "@/components/CadastroObjetivoModal";
import database from "@/services/database";

export default {
  components: {
    ObjetivoFinanceiroCard,
    CadastroObjetivoModal
  },
  data() {
    return {
      dialog: false,
      objetivos: [],
      objetivoSelecionado: null
    };
  },
  created() {
    this.listarObjetivos();
  },
  methods: {
    editarObjetivo(objetivo) {
      this.objetivoSelecionado = objetivo;
      this.dialog = true;
    },
    novoObjetivo() {
      this.objetivoSelecionado = null;
      this.dialog = true;
    },
    listarObjetivos() {
      database.listarObjetivos().then(response => {
        this.objetivos = response;
      })
    },
    async removerObjetivo(objetivo) {
      await database.removerObjetivo(objetivo.id);
      this.listarObjetivos();
    }
  }
};
</script>

<style>
</style>