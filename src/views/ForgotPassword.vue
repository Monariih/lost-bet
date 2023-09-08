<template>
  <v-main
    class="bg-grey-darken-4 h-100"
  >
    <v-container>
      <v-row>
        <v-col>
          <router-link to="/">
            <v-img
              width="200"
              src="src/assets/logoSemFundoDeitada.png"
              class="mx-auto"
              
            >
            </v-img>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-spacer>

          </v-spacer>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="mx-auto text-center"
        >
          <v-card
            class="bg-grey-darken-3 elevation-2 w-50 mx-auto"
          >
            <v-card-title>
              Esqueçeu a senha ?
            </v-card-title>
            <v-card-subtitle>
              <hr class="my-1">
              Sem problemas! a gente resolve.
              <hr class="my-1">
            </v-card-subtitle>
            <v-card-item>
              <v-form
                v-model="form"
                @submit.prevent="onSubmit"
              >
                <v-text-field
                  v-model="email"
                  type="email"
                  :readonly="loading"
                  :rules="[required]"
                  class="my-2"
                  clearable
                  variant="outlined"
                  label="Email"
                ></v-text-field>
                <v-text-field
                  v-model="cpf"
                  :readonly="loading"
                  :rules="[required]"
                  class="my-2"
                  clearable
                  variant="outlined"
                  label="CPF"
                ></v-text-field>
                <v-btn
                  :loading="loading"
                  :disabled="loading"
                  type="submit"
                  class="my-2"
                  color="primary"
                  block
                >
                  Enviar
                </v-btn>
              </v-form>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer,
  },
  data() {
    return {
      form: false,
      email: '',
      cpf: '',
      loading: false,
      required: value => !!value || 'Required.',
    }
  },
    methods: {
    onSubmit() {
      if (!this.form) return

      this.loading = true

      console.log(this.email, this.cpf)

      setTimeout(() => (this.loading = false), 2000)
    },
    required(v) {
      return !!v || 'Field is required'
    },
  },
}
</script>

<style>

</style>