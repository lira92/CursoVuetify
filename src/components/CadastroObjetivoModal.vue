<template>
  <v-dialog v-model="dialog" max-width="600px" transition="dialog-bottom-transition">
    <v-card>
      <v-card-title>
        <span class="headline">Criar objetivo financeiro</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="nome"
                  :rules="rules.nome"
                  label="Nome"
                  required>
                </v-text-field>
              </v-col>

              <v-col cols="12">
                <v-currency-field
                  prefix="R$"
                  v-model="valorAtual"
                  label="Valor atual"
                  required></v-currency-field>
              </v-col>

              <v-col cols="12">
                <v-currency-field
                  prefix="R$"
                  v-model="valorNecessario"
                  :min="0.01"
                  label="Valor necessário"
                  required></v-currency-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">Cancelar</v-btn>
        <v-btn color="primary"
          :disabled="!valid"
          :loading="loading"
          @click="salvar()"
          text>Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import database from '@/services/database';

export default {
  props: {
    value: Boolean,
    objetivoExistente: Object
  },
  data() {
    return {
      loading: false,
      valid: false,
      nome: "",
      valorAtual: 0,
      valorNecessario: 0,
      rules: {
        nome: [v => !!v || "O nome é obrigatório"]
      }
    };
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
        return value;
      }
    }
  },
  methods: {
    limparCampos() {
      this.nome = "";
      this.valorAtual = 0;
      this.valorNecessario = 0;
      this.$refs.form.resetValidation();
    },
    async salvar() {
      this.loading = true;
      if (this.objetivoExistente) {
        await database.atualizarObjetivo(this.objetivoExistente.id, {
          nome: this.nome,
          valorAtual: this.valorAtual,
          valorNecessario: this.valorNecessario
        })
      }
      else {
        await database.adicionarObjetivo({
          nome: this.nome,
          valorAtual: this.valorAtual,
          valorNecessario: this.valorNecessario
        })
      }
      this.limparCampos();
      this.$emit('objetivoSalvo');
      this.loading = false;
      this.dialog = false;
    }
  },
  watch: {
    objetivoExistente(value) {
      this.limparCampos();
      if (value) {
        this.nome = value.nome;
        this.valorAtual = value.valorAtual;
        this.valorNecessario = value.valorNecessario;
      }
    }
  }
};
</script>

<style>
</style>