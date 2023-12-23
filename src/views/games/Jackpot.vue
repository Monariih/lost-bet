<template>
    <v-app>
        <Header/>
        <v-main class="bg-grey-darken-3 h-100">
          <body>
            
            <v-alert
              v-if="errorAlert1"
              density=“compact”
              type="error"
              title="ERRO"
              text="Você não possui saldo suficiente, O valor minimo para apostas é de R$10"
            ></v-alert>

            <v-alert
              v-if="loseAlert"
              density=“compact”
              type="error"
              title="Você PERDEU!"
              text="O valor de aposta foi debitado do seu saldo!"
            ></v-alert>

            <v-alert
              v-if="winAlert1"
              density=“compact”
              type="success"
              title="Você GANHOU a aposta!"
              text="O valor de ganho foi incrementado no seu saldo!"
            ></v-alert>
            <div>

              <audio ref="slotAudio">
                <source src="./sound/slot_sound.mp3" type="audio/mpeg">
              </audio>

              <audio ref="winAudio">
                <source src="./sound/win_sound.mp3" type="audio/mpeg">
              </audio>

              <audio ref="loseAudio">
                <source src="./sound/lose_sound.mp3" type="audio/mpeg">
              </audio>
              
              <p id="balance">Saldo Atual: R$ {{ balance }}</p>
              
              <div id="app">
                <h1>JACKPOT</h1>
                <h5>máquina de slots</h5>
                <br>

                  <div class="doors">
                  <div class="door">
                      <div class="boxes" id="slot1">
                        <v-img class="img" src="@/assets/logoFundoPreto.png" ></v-img>
                      <!-- <div class="box">?</div> -->
                      </div>
                  </div>
                  <div class="door">
                      <div class="boxes">
                        <v-img class="img" src="@/assets/logoFundoPreto.png"></v-img>
                      </div>
                  </div>
                  <div class="door">
                      <div class="boxes" id="slot3">
                        <v-img class="img" src="@/assets/logoFundoPreto.png" ></v-img>
                      </div>
                  </div>
                  </div>
                  <br>
                  <div class="buttons">
                    <v-btn class="btnPlay" :disabled="playDisabled" height="120" @click="cleanAlert(), validateValue()">
                      <h3>Jogar - R$ 10</h3>
                    </v-btn>
                  </div>
              </div>
            </div>

            <v-row>
              <v-col>
                <br><br>
                <v-card
                  class="ma-auto bg-grey-darken-4 elevation-2"
                  theme="dark"
                  
                >
                  <v-card-title>
                    <h3>Como jogar?</h3>
                  </v-card-title>
                  <v-card-text
                    class="text-justify"
                    
                  >
                  <p>
                    <b>1. Faça sua Aposta:</b><br>
                    Para começar, insira R$ 10 e dê um giro na máquina.(Lembre-se de jogar de maneira responsável e dentro de seus limites).
                  </p><br>
                  
                  <p>
                    <b>2. Os simbolos Positivos:</b><br>
                    <v-list>
                      <li>
                        <b>Número 7:</b> 
                        Se os três símbolos coincidirem, e todos forem iguais a '7's, prepare-se para um prêmio extraordinário de R$ 1000 <b>(10% de chance de um slot receber um Número 7)</b>
                      </li>

                      <li>
                        <b>Diamante💎:</b> Se os três símbolos exibirem a beleza reluzente de um diamante, você será recompensado com um prêmio de R$ 500 <b>(12% de chance de um dos slots receber um Diamante💎 e)</b>
                      </li>

                      <li>
                        <b>Bolsa de Dinheiro💰 :</b> Se os três símbolos exibirem uma bolsa de dinheiro, você receberá uma recompensa de R$ 250 <b>(165% de chance de um dos slots receber uma Bolsa de Dinheiro💰)</b>
                      </li>

                      <li>
                        <b>Nota de Dinheiro💵 : </b>Se a máquina decidir conceder três notas de dinheiro, você ganhará R$ 100. Um prêmio que fará sua carteira sorrir. <b>(365% de chance de um dos slots receber uma Nota de Dinheiro💵)</b>
                      </li>

                      <li>
                        <b>Combinação de Símbolos: </b>Se os três símbolos forem diferentes entre os mencionados acima, ainda há uma vitória em seu caminho. Ganhe R$ 30 por essa combinação única!
                      </li>

                    </v-list>
                  </p>

                  <p>
                    <b> 3. Os simbolos Negativos:</b><br>
                      A aposta será perdida se algum dos 3 slots receber os simbolos de
                      <v-list>
                        <li>
                          <b>Caveira:☠ </b>
                        </li>
                        <li>
                          <b>Letra X:❌</b>
                        </li>
                      </v-list>
                  </p>

                  <p>
                    <b>6. Divirta-se com resposabilidade:</b><br>
                    A Máquina de Jackpot é um jogo de azar. É crucial manter a diversão e o entretenimento como prioridade. A sorte pode sorrir para qualquer um, então aproveite a experiência e divirta-se de maneira responsável. 
                  </p><br>
                  <h3>LEMBRE-SE</h3>
                  <p>Nunca aposte aquilo que você não pode perder.</p>
                  </v-card-text>	
                </v-card>	
              </v-col>
            </v-row>
          </body>
        </v-main>
    </v-app>
    
    
</template>

<script setup>

  import Header from '@/components/Header.vue';
  
</script>




<script>
import api from '@/configs/api';
import store from '@/store';
export default {
  
  data() {
    return {

      user: store.state.user,

      items: [
      '☠', '☠', '☠', '☠', '☠', '☠', '☠', '☠', '☠', '☠',
      '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌',
      '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌',
      '💵', '💵', '💵', '💵', '💵', '💵', '💵', '💵', '💵', 
      '💵', '💵', '💵', '💵', '💵', '💵', '💵', '💵', '💵', 
      '💰', '💰', '💰', '💰', '💰', '💰', '💰','💰',
      '💎', '💎', '💎', '💎','💎','💎',
      '7', '7', '7', '7', '7', '7','7',
        
      ],
      doors: null,
      slotSound: null,
      loseSound: null,
      winSound: null,

      playDisabled: false,
      errorAlert1: false,
      winAlert1: false,
      loseAlert: false,
      
      betValue: 10,
      
      slot1: null,
      slot2: null,
      slot3: null,
      
      balance: 0,
      newBalance:0,
      
    };
  },
  methods: {
    cleanAlert(){
      this.errorAlert1 = false;
      this.loseAlert = false;
      this.winAlert1 = false;
      
    },

    slotAudio() {
      this.$refs.slotAudio.play();
    },
    winAudio() {
      this.$refs.winAudio.play();
    },
    loseAudio() {
      this.$refs.loseAudio.play();
    },

    async updateBalance(){

      try {
        const response = await api.put(`/v1/user/${this.user.usercpf}`, {
          usercpf: this.user.usercpf,
          username: this.user.username,
          useremail: this.user.useremail,
          userpassword: this.user.userpassword,
          userbalance: this.newBalance,
      })
      .then((response) => {
        store.commit('storeUser', response.data);
      });
      this.loading = false;
      } catch (error) {
      this.loading = false;

      console.log(error);
      }


    },

    verifyRoundItems() {
      if (this.slot1 === this.slot2 && this.slot2 === this.slot3) {

        
        if(this.slot1 ==='7'){

          this.balance = parseFloat(this.balance)+ 1000;
          this.winAlert1 = true;
          this.winAudio();
        }

        else if(this.slot1 ==='💎'){

          this.balance = parseFloat(this.balance)+ 500;
          this.winAlert1 = true;
          this.winAudio();

        }

        else if(this.slot1 ==='💰'){
          this.balance = parseFloat(this.balance)+ 250;
          this.winAlert1 = true;
          this.winAudio();
        }

        else if(this.slot1 ==='💵'){
          this.balance = parseFloat(this.balance)+ 100;
          this.winAlert1 = true;
          this.winAudio();
        }

        else{

          this.loseAlert=true;
          this.loseAudio();

        }

      }

      else if(
        this.slot1 ==='❌' || this.slot2 === '❌' || this.slot3 ==='❌' ||
        this.slot1 ==='☠' || this.slot2 === '☠' || this.slot3 ==='☠' ){
        this.loseAlert=true;
        this.loseAudio();
      }

      else{
          this.balance = parseFloat(this.balance)+ 30;
          this.winAlert1 = true;
          this.winAudio();
      }

      setTimeout(() =>{
       ;
      },3000)

      
    },
    
    init(groups = 1, duration = 1) {
      for (const door of this.doors) {
        door.dataset.spinned = '0';
        const boxes = door.querySelector('.boxes');
        const boxesClone = boxes.cloneNode(false);
        const pool = ['❓'];
        const arr = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...this.items);
        }
        pool.push(...this.shuffle(arr));
        boxesClone.addEventListener(
          'transitionstart',
          function () {
            door.dataset.spinned = '1';
            this.querySelectorAll('.box').forEach((box) => {
              box.style.filter = 'blur(1px)';
            });
          },
          { once: true }
        );
        boxesClone.addEventListener(
          'transitionend',
          function () {
            this.querySelectorAll('.box').forEach((box, index) => {
              box.style.filter = 'blur(0)';
              if (index > 0) this.removeChild(box);
            });
          },
          { once: true }
        );
        for (let i = pool.length - 1; i >= 0; i--) {
          const box = document.createElement('div');
          box.classList.add('box');
          box.style.width = door.clientWidth + 'px';
          box.style.height = door.clientHeight + 'px';
          box.textContent = pool[i];
          boxesClone.appendChild(box);
        }
        boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
        boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
        door.replaceChild(boxesClone, boxes);
      }
    },

    validateValue(){

      if(this.balance<10){
        this.errorAlert1 = true;
        setTimeout(() => {
        this.errorAlert1 = false;
      }, 3000);
      }

      else{
        this.cleanAlert();
        this.spin();
        this.playDisabled = true;
        setTimeout(() => { 
          this.playDisabled = false;
        }, 3000);
      }
    },

    async spin() {

      this.init(1, 2);
      setTimeout(this.slotAudio, 250);
      this.balance = parseFloat(this.balance)-parseFloat(this.betValue);

      this.newBalance = this.balance;
      this.updateBalance();
      
      for (let i = 0; i < this.doors.length; i++) {
        const door = this.doors[i];
        const boxes = door.querySelector('.boxes');
        const duration = parseInt(boxes.style.transitionDuration);
        boxes.style.transform = 'translateY(0)';
        await new Promise((resolve) => setTimeout(resolve, duration * 100));
        const currentValue = door.querySelector('.box').textContent;
        if (i === 0) {
          this.slot1 = currentValue;
        } else if (i === 1) {
          this.slot2 = currentValue;
        } else if (i === 2) {
          this.slot3 = currentValue;
        }
      }
      setTimeout(this.verifyRoundItems, 1750);
    },
    shuffle([...arr]) {
      let m = arr.length;
      while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
      }
      return arr;
    },
  },
  mounted() {
    
    this.balance = this.user.userbalance
    this.doors = document.querySelectorAll('.door');
    this.slotSound = document.getElementById('slotSound');
    this.loseSound = document.getElementById('loseSound');
    this.winSound = document.getElementById('winSound');
    
  },

  
};
</script>
<style scoped>
/* Estilos CSS específicos para este componente */

body {
  font-family: 'Titillium Web', sans-serif;
  padding: 15px
  
}

  
#app {
  border-radius: 15px;
  height: 550px;
  width: 550px;
  background-color:#161616;;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  
}

</style>

<style src="@/styles/jackpotStyle.css"></style>
  
