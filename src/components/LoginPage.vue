<template>
  <v-main
    class="bg-grey-darken-4 h-100"
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
            class="bg-grey-darken-3 elevation-2"
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
                  v-model="email"
                  density="compact"
                  prepend-inner-icon="mdi-email-outline"
                  :readonly="loading"
                  :rules="[required]"
                  class="my-2"
                  clearable
                  variant="outlined"
                  placeholder="Enter your email"
                ></v-text-field>

                <v-text-field
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
</template>
<script>
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer,
  },
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false,
    visible: false,
  }),

  methods: {
    onSubmit () {
      if (!this.form) return

      this.loading = true

      console.log(this.email, this.password)

      setTimeout(() => (this.loading = false), 2000)
    },
    required (v) {
      return !!v || 'Field is required'
    },
  },
}
</script>
