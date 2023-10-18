<template>
  <v-main
    class="bg-grey-darken-3 h-100"
  >
    <v-container>
      <v-row>
        <v-col>
          <v-img
            width="200"
            src="src/assets/logoSemFundoDeitada.png"
            class="mx-auto"
          >
          </v-img>
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
          class="text-center"
          ssm="12"
          sm="8"
          md="6"
          lg="6"
          offset-sm="2"
          offset-md="3"
          offset-lg="3"
        >
          <v-card
            class="bg-grey-darken-4 elevation-2"
          >
            <v-card-title>
              LOGIN
            </v-card-title>
            <v-card-item
              class="my-2"
            >
              <v-form
                v-model="form"
                @submit.prevent="onSubmit"
              >
                <v-text-field
                  v-model="userCpf"
                  density="compact"
                  prepend-inner-icon="mdi-email-outline"
                  :readonly="loading"
                  :rules="[required]"
                  class="my-2"
                  clearable
                  variant="outlined"
                  placeholder="Enter your cpf"
                ></v-text-field>

                <v-text-field
                v-model="password"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                :readonly="loading"
                :rules="[required]"
                density="compact"
                placeholder="Enter your password"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                @click:append-inner="visible = !visible"
                ></v-text-field>

                <br>
                <v-row>
                  <v-col
                    class="transparent"
                  >
                  
                    <router-link
                      to="/forgot-password"
                      class="flex text-blue"      
                    >
                        Esqueçeu sua senha? clique aqui.
                    </router-link>
                  
                  </v-col>
                </v-row>
                
                
                <br>

                <v-btn
                  :disabled="!form"
                  :loading="loading"
                  block
                  color="success"
                  size="large"
                  type="submit"
                  variant="elevated"
                >
                  Sign In
                </v-btn>
              </v-form>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
      <v-row
        class="mt-15"
      >
      <v-col>
        <v-spacer></v-spacer>
      </v-col>
        <v-col
          class="text-center"
        >
          <v-btn
            class="bg-orange-darken-2"
            to="/create-user"
          >
            Ainda não a sua conta LOST-ALL?<br>
            Crie uma!
          </v-btn>
        </v-col>
        <v-col>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  <Footer />
  <v-dialog
    v-model="dialogError"
    transition="dialog-top-transition"
    theme="dark"
    width="auto"
  >
    <v-card>
      <v-toolbar color="red" title="ALERTA!"></v-toolbar>
      <v-card-text>
        <div class="text-h3 text-center pa-12">
          {{ errorMsg }}
        </div>  
      </v-card-text>
      <v-card-actions class="justify-end">
      </v-card-actions>
      <v-btn variant="text" @click="dialogError = false">Close</v-btn>
    </v-card>
  </v-dialog>
</template>
<script>
import Footer from '@/components/Footer.vue'
import api from '@/configs/api'
import router from '@/router'



export default {
  components: {
    Footer,
  },
  data: () => ({
    form: false,
    dialogError: false,
    userCpf: null,
    password: null,
    loading: false,
    visible: false,
    errorMsg: null,
  }),

  methods: {
    async login(){
      
    },

    async onSubmit () {
      if (!this.form) return

      const response = await api.get(`/v1/user/${this.userCpf}`, {
        userCpf: this.userCpf,
        password: this.password,
      })

      .then((response) => {
        if (response.data.password === this.password){
          this.loading = true
          setTimeout(() => (this.loading = false), 2000)
          router.push('/home')
          return response
        } else {
          this.errorMsg = "Senha incorreta"
          this.dialogError = true
          this.loading = true
          setTimeout(() => (this.loading = false), 2000)
          return response
        }
      })
      .catch((error) => {
        this.errorMsg = "Usuário não encontrado"
        this.dialogError = true
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
        return error
      })

    },
    required (v) {
      return !!v || 'Field is required'
    },
  },
}
</script>
