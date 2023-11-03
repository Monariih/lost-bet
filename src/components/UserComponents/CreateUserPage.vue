<template>
  <v-main class="bg-grey-darken-3 h-100">
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
          <v-spacer> </v-spacer>
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
          <v-card class="bg-grey-darken-4 elevation-2">
            <v-card-title> LOGIN </v-card-title>
            <v-card-item class="my-2">
              <v-form v-model="form" @submit.prevent="onSubmit">
                <v-text-field
                  v-model="userName"
                  density="compact"
                  prepend-inner-icon="mdi-information-outline"
                  :readonly="loading"
                  :rules="[required]"
                  class="my-2"
                  clearable
                  variant="outlined"
                  placeholder="Enter your name"
                ></v-text-field>

                <v-text-field
                  v-model="userEmail"
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
                  v-model="password"
                  density="compact"
                  placeholder="Enter your password"
                  prepend-inner-icon="mdi-lock-outline"
                  variant="outlined"
                  @click:append-inner="visible = !visible"
                ></v-text-field>

                <v-text-field
                  :readonly="loading"
                  :rules="[required]"
                  v-model="userCpf"
                  density="compact"
                  placeholder="Please insert your CPF"
                  prepend-inner-icon="mdi-account-box-outline"
                  variant="outlined"
                  @click:append-inner="visible = !visible"
                ></v-text-field>

                <!-- <v-text-field
                  :readonly="loading"
                  :rules="[required]"
                  v-model="userAge"
                  density="compact"
                  placeholder="Please insert your age"
                  prepend-inner-icon="mdi-check-circle-outline"
                  variant="outlined"
                  @click:append-inner="visible = !visible"
                ></v-text-field> -->

                <br />

                <v-btn
                  :disabled="!form"
                  :loading="loading"
                  block
                  color="success"
                  size="large"
                  type="submit"
                  variant="elevated"
                >
                  CREATE ACCOUNT
                </v-btn>
              </v-form>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  <Footer />
  <v-dialog
    v-model="modalError"
    transition="dialog-top-transition"
    theme="dark"
    width="auto"
  >
    <v-card>
      <v-toolbar color="red" title="ALERTA!"></v-toolbar>
      <v-card-text>
        <div class="text-h3 text-center pa-12">
          Nós da LOST-BET.inc não permitimos que menores de 18 anos se cadastrem
        </div>
      </v-card-text>
      <v-card-actions class="justify-end">
      </v-card-actions>
      <v-btn variant="text" @click="modalError = false" to="/">Close</v-btn>
    </v-card>
  </v-dialog>
  <v-dialog
    v-model="modalSuccess"
    transition="dialog-top-transition"
    theme="dark"
    width="auto"
  >
    <v-card>
      <v-toolbar color="red" title="Parabéns!"></v-toolbar>
      <v-card-text>
        <div class="text-h3 text-center pa-12">
          Seu perfil foi Registrado na LOST-BET.inc, agora volte para a pagina inicial e faça login com o seu usuário. <br>
          Obrigado por se cadastrar! e boa sorte nas apostas.
        </div>
      </v-card-text>
      <v-card-actions class="justify-end">
      </v-card-actions>
      <v-btn variant="text" @click="modalSuccess = false" to="/">Close</v-btn>
    </v-card>
  </v-dialog>
</template>
<script>
import Footer from "@/components/Footer.vue";
import api from "@/configs/api";

export default {
  components: {
    Footer,
  },
  data: () => ({
    form: false,
    userEmail: null,
    password: null,
    userCpf: null,
    userAge: null,
    userName: null,
    modalError: false,
    modalSuccess: false,
    loading: false,
    visible: false,
  }),
  methods: {
    async createUser(){
      try {
        const response = await api.post("/v1/create", {
          name: this.userName,
          email: this.userEmail,
          password: this.password,
          cpf: this.userCpf,
          balance: 0,
          // age: this.userAge,
          // birth: this.userBirth,
        });
        console.log(response);
        this.modalSuccess = true;
      } catch (error) {
        console.log(error);
        this.modalError = true;
      }
    },
    onSubmit() {

      this.createUser()

      console.log("onsubmit")
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>
  