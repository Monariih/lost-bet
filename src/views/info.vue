<template>
  <v-app>
    <Header />
    <v-main class="bg-grey-darken-3 h-100">
      <v-sheet class="mx-2 my-2 w-full bg-grey-darken-4 bg-opacity rounded elevation-3 h-50">
        <v-container>
          <v-row>
            <v-col>
              <v-card class="d-flex flex-nowrap text-justify">
                <v-card-text> ESTA TELA VIRÃO INFORMAÇÕES SOBRE O PROJETO EM SI </v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="d-flex flex-nowrap text-justify">
                <v-card-text> INFORMAÇÕES ESSAS, OS NOMES DOS RESPONSÁVEIS A HISTÓRIA DE COMO FOI FEITO EM PASSOS DO PROJETO POR EXEMPLO, E POR AI VAI! </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-main>
  </v-app>  
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>
