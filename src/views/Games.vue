<template>
  <v-app>
    <Header />
    <v-main class="bg-grey-darken-3 h-100">
      <v-container class="mx-30">
        <v-row>
          <v-col
          >
            <v-card theme="dark">
              <v-card-title>
                Roleta
              </v-card-title>
              <v-parallax
                src="https://images2.imgbox.com/07/aa/c9QdV4d2_o.jpg"
              ></v-parallax>
              <v-spacer></v-spacer>
              <v-card-text class="d-flex flex-nowrap text-justify">
                Vem jogar na roleta e tentar a sorte! (Não nos resposabilizamos por vícios em ganhar dinheiro!)
              </v-card-text>
              <v-card-item class="d-flex justify-end">
                <router-link to="/roulette">
                  <v-btn class="ma-1" elevation="2" color="#FF9900">Roleta</v-btn>
                </router-link>
              </v-card-item>
            </v-card>
          </v-col>
          <v-col
          >
            <v-card theme="dark">
              <v-card-title>
                Jackpot
              </v-card-title>
              <v-parallax
                src="https://images2.imgbox.com/c3/54/tavd2MV4_o.jpg"
              ></v-parallax>
              <v-card-text class="d-flex flex-nowrap text-justify">
                No Jackpot você vai ter a verdadeira experiência de um cassino! (e de quebra ainda pode ganhar uma grana!) 
              </v-card-text>
              <v-card-item class="d-flex justify-end">
                <router-link  to="/jackpot">
                  <v-btn class="ma-1" elevation="2" color="#FF9900">Jackpot</v-btn>
                </router-link>
              </v-card-item>
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
                src="https://images2.imgbox.com/b1/cb/eR2rJNSa_o.jpg"
              ></v-parallax>
              <v-card-text class="d-flex flex-nowrap text-justify">
                Aqui você pode configurar o site para ficar do seu jeito! (ou não, você que sabe)
              </v-card-text>
              <v-card-item class="d-flex justify-end">
                <router-link to="/config">
                  <v-btn class="ma-1" elevation="2" color="#FF9900">Configurações</v-btn>
                </router-link>
              </v-card-item>
            </v-card>
          </v-col>
          <v-col>
            <v-card theme="dark">
              <v-card-title>
                Informações
              </v-card-title>
              <v-parallax
                src="https://images2.imgbox.com/c5/5f/XefscBZU_o.jpg"
              ></v-parallax>
              <v-card-text class="d-flex flex-nowrap text-justify">
                Aqui você pode ver as informações sobre o site e algo também sobre os criadores e responsáveis!
              </v-card-text>
              <v-card-item class="d-flex justify-end">
                <router-link to="/info">
                  <v-btn class="ma-1" elevation="2" color="#FF9900">Informações</v-btn>
                </router-link>  
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default{
  components: {
    Header,
    Footer,
  },
}
</script>