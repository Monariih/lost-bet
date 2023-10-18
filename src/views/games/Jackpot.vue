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
              
              <p id="balance">Saldo: {{ balance }}</p>
              
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
                    <v-btn class="btnPlay" height="120" @click="cleanAlert(), validateValue()">
                      <h3>Jogar - R$ 10</h3>
                    </v-btn>
                  </div>
              </div>
            </div>
          </body>
        </v-main>
    </v-app>
    
    
</template>

<script setup>
  import Header from '@/components/Header.vue';
</script>
  
  <script>
  export default {
    data() {
      return {
        items: [
        '☠', '☠', '☠', '☠', '☠', '☠', '☠', '☠', '☠', '☠',
        '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌',
        '💵', '💵', '💵', '💵', '💵', '💵', '💵', '💵', '💵', 
        '💵', '💵', '💵', '💵', '💵', '💵', '💵', '💵', '💵', 
        '💰', '💰', '💰', '💰', '💰', '💰', '💰','💰',
        '💎', '💎', '💎', '💎','💎','💎',
        '7', '7', '7', '7', '7', '7','7', '7', 
         
        ],
        doors: null,
        slotSound: null,
        loseSound: null,
        winSound: null,


        errorAlert1: false,
        winAlert1: false,
        loseAlert: false,
        
        betValue: 10,
        
        slot1: null,
        slot2: null,
        slot3: null,
        
        balance: 1000,
        
      };
    },
    methods: {
      cleanAlert(){
        this.errorAlert1 = false;
        this.loseAlert = false;
        this.winAlert1= false;
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
        }
      },

      async spin() {

        this.init(1, 2);
        setTimeout(this.slotAudio, 250);
        this.balance = parseFloat(this.balance) - 10;
        
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
  
  .doors {
    display: flex;
  }
  
  .door {
    padding-top: 20px;
    background: #fafafa;
    width: 100px;
    height: 110px;
    overflow: hidden;
    border-radius: 5px;
    margin: 5px;
    color: black;
    font-size: 3rem;
    text-align: center;
  }
  
  .boxes {
    
    text-align: center;
    /* transform: translateY(0); */
    transition: transform 1s ease-in-out;
  }

.img{
  width: 90px;
  margin-left: 5px;
}
  
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
  }
  
  .buttons {
    margin: 1rem 0 2rem 0;
  }
  
  .btnPlay{
    color: #FFFF;
    background-color: #FF9900;
  }

  button {
    cursor: pointer;
    font-size: 1.2rem;
    margin: 0 0.2rem;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    text-align: center;
    padding: 8px;
    color: black;
    width: 325px;
    height: 74.67px;
    border-radius: 10px;
    
  }
  
  button:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  
  .info {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
  
  #balance {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    text-align: center;
    color: #FFFF;
  }
  
  #message {
    font-weight: bold;
    text-align: center;
  }
  </style>
  
