<template>
  <v-app>
    <Header />
    <v-main class="bg-grey-darken-3 h-100">
      <v-container>
        <v-row>
          <v-col>
            <v-card theme="dark">
              <v-card-title>
                BlackJack
              </v-card-title>
              <v-parallax
                src="https://images.ctfassets.net/93v9a59si7ol/nLfltjJVpMDpqyHqnlA4B/de4996d55168ef18ef6c921e7904a71f/Blackjack-4.png?w=1160&h=640&fm=webp&q=80&fit=thumb"
              ></v-parallax>
              <v-card-item>
                <v-card-subtitle>
                  Teste a sua sorte e habilidades no nosso jogo de 21
                </v-card-subtitle>
                <v-btn color="primary" href="/games/blackjack">BlackJack</v-btn>
              </v-card-item>
            </v-card>
          </v-col>
          <v-col>
            <v-card theme="dark">
              <v-card-title>
                Roulette
              </v-card-title>
              <v-parallax
                src="https://hotmart.s3.amazonaws.com/product_pictures/a8388ff4-2026-40ab-ab36-17edc4421181/unnamed.jpg"
              ></v-parallax>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card theme="dark">
              <v-card-title>
                Configurações
              </v-card-title>
              <v-parallax
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthirQsNpROQsPeNSjBZTMG9M4P0girsXupQ&usqp=CAU"
              ></v-parallax>
              <v-card-item>
                <v-btn color="primary" href="/configuracoes">Configurações</v-btn>
              </v-card-item>
            </v-card>
          </v-col>
          <v-col>
            <v-card theme="dark">
              <v-card-title>
                Informações
              </v-card-title>
              <v-parallax
                src="https://cdn.icon-icons.com/icons2/1517/PNG/512/infominimono_105818.png"
              ></v-parallax>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>