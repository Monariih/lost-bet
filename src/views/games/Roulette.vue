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
          text="Por gentileza, digite o valor de aposta."
        ></v-alert>

        <v-alert
          v-if="errorAlert2"
          density=“compact”
          type="error"
          title="ERRO"
          text="Por gentileza, selecione a cor em que deseja apostar."
        ></v-alert>

        <v-alert
          v-if="errorAlert3"
          density=“compact”
          type="error"
          title="ERRO"
          text="O valor minimo para apostas é de R$10"
        ></v-alert>

        <v-alert
          v-if="errorAlert4"
          density=“compact”
          type="error"
          title="ERRO"
          text="Você não possui saldo suficiente"
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

        <audio ref="rouletteAudio">
          <source src="./sound/roulette_sound.mp3" type="audio/mpeg">
        </audio>

        <audio ref="winAudio">
          <source src="./sound/win_sound.mp3" type="audio/mpeg">
        </audio>

        <audio ref="loseAudio">
          <source src="./sound/lose_sound.mp3" type="audio/mpeg">
        </audio>

        
        
        <br>
        <div class="roulette-wrapper">
          <div class="selector"></div>
          <div class="wheel" :style="wheelStyle" ref="wheel">

            <div class="row" v-for="row in wheelData">

              <div :class="'card ' + row.color">
              {{ row.value }}
              </div>

            </div>
          </div>
        </div>

        
        

        <v-row>
          <v-col
            class="text-center"
            ssm="12"
            sm="8"
            md="6"
            lg="2"
            offset-lg="5"
          >
            <v-form>
            
              <p>Saldo: {{ balance }}</p> <!--Remover após backend -->
              <v-text-field
                ref="inputBet"
                type="number"
                v-model="betValue"
                label="Valor de aposta:"
                :rules="rules"
                hide-details="auto"
               
                class="my-2 text-center bg-grey-darken-3 h-100 betValue"
              >
              </v-text-field>  
            </v-form>
          </v-col>
        </v-row>

        <h2 class="my-2">Selecione a cor de aposta</h2>
        
        <v-item-group mandatory>
          <v-container>
            <v-row>
              <v-col v-for="(n, index) in 3" :key="n" cols="9" md="4">
                <v-item v-slot="{ isSelected,toggle}">
                  <v-card
                    :color="getButtonColor(n)"
                    class="d-flex  align-center"
                    dark
                    height="200"
                    @click="toggle(), handleButtonClick(n),cleanAlert()"
                  >
                    <v-scroll-y-transition>
                      <div class="text-h3 flex-grow-1 text-center btnText" >
                        {{ isSelected ? 'Selecionado!' : buttonTexts[index] }}
                      </div>
                    </v-scroll-y-transition>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>

        <v-row>
          <v-col
            class="text-center"
            ssm="1"
            sm="1"
            md="8"
            lg="13"
            offset-lg="2"
            offset-sm="1"
            offset-md="1"
            
            >
            
            <v-btn
              class="my-2 btnPlay"
              @click="cleanAlert(),validateValue()"
              block
              size="120"
            >
              <h3>Jogar</h3>
            </v-btn>
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

  export default {
    
    data() {

      return {
        
        errorAlert1: false,
        errorAlert2: false,
        errorAlert3: false,
        errorAlert4: false,

        winAlert1: false,
        loseAlert: false,
        balance: 1000,
        
        rules: [
          value => !!value || 'Obrigatório.',
          value => (value && parseInt(value) >= 10) || 'Valor de aposta minimo - R$10',
        ],
        selectedValue: null,
      
        buttonTexts: ['Preto \n2X', 'Verde \n14X', 'Vermelho\n2X'],
        selectedValues: [], 
        buttons: ['black', 'green' , 'red'], 
        
        outcome: Math.floor(Math.random() * 14),
        cassinoColor:'',
        selectedColor:'',
        betValue:'',

        wheelData: [],
        spinning: false,
        wheelStyle: {
        transitionTimingFunction: '',
        transitionDuration: '',
        transform: '',

        },
      };

    },

    created() {
      
      this.initWheel();
    },

    methods: {

      rouletteAudio(){
        this.$refs.rouletteAudio.currentTime = 4.9;
        this.$refs.rouletteAudio.play();
      },

      winAudio(){
        this.$refs.winAudio.play();
      },

      loseAudio(){
        this.$refs.loseAudio.play();
      },
      
      cleanAlert(){
        this.errorAlert1 = false;
        this.errorAlert2 = false;
        this.errorAlert3 = false;
        this.errorAlert4 = false;

        this.loseAlert = false;
        this.winAlert1= false;
      },
      
      handleButtonClick(value) {
       
        
        this.selectedValue = value;
        
        if(this.selectedValue === 1){
          this.selectedColor = 'black';

        }

        else if(this.selectedValue === 3){
          this.selectedColor = 'red';
        }

        else{
          this.selectedColor = 'green';
        }

        console.log(this.selectedColor)

      },

      getButtonColor(index) {
    
        const colors = ['primary', 'black', 'green', 'red'];
        
        return colors[index % colors.length];
      },

      onButtonClick(index) {
        
        this.selectedValues[index] = 'Valor associado ao botão ' + (index + 1);
        console.log(this.selectedValues);
      },

      initWheel() {
        for (let i = 0; i < 29; i++) {
          this.wheelData = this.wheelData.concat(this.generateRowData());
        }

      },

      generateRowData() {

        return [
          { value: 1, color: 'red' },
          { value: 14, color: 'black' },
          { value: 2, color: 'red' },
          { value: 13, color: 'black' },
          { value: 3, color: 'red' },
          { value: 12, color: 'black' },
          { value: 4, color: 'red' },
          { value: 0, color: 'green' },
          { value: 11, color: 'black' },
          { value: 5, color: 'red' },
          { value: 10, color: 'black' },
          { value: 6, color: 'red' },
          { value: 9, color: 'black' },
          { value: 7, color: 'red' },
          { value: 8, color: 'black' },

        ];

      },

      setOutcomeAndSpin() {
        // Set the outcome to the value entered in the input field
        
        console.log(this.betValue)
      // this.outcome = parseInt(this.outcome);
        this.spinWheel();
        this.rouletteAudio();
        

      },

      validateValue(){
      // this.betValue = parseInt(this.betValue);
        if(this.balance <10){
          this.errorAlert4 = true;

          setTimeout(() => {
          this.errorAlert4 = false;
        }, 3000);
        }

        else if(this.betValue > this.balance){
          this.errorAlert4 = true;
          setTimeout(() => {
          this.errorAlert4 = false;
        }, 3000);

        }

        else{

  
          if(this.betValue === ''){
            this.errorAlert1 = true;
            this.$refs.inputBet.focus();

            setTimeout(() => {
            this.errorAlert1 = false;
          }, 3000);

          }

          else if(this.betValue <10){
            this.errorAlert3 = true;
            this.$refs.inputBet.focus();

            setTimeout(() => {
            this.errorAlert3 = false;
          }, 3000);

        }

        else{
          this.validateColor();
          
        }

        }

        
      },

      validateColor(){

        if(this.selectedColor === ''){
          this.errorAlert2 = true;

          setTimeout(() => {
          this.errorAlert2 = false;
        }, 3000);

        }
        else{
          this.setOutcomeAndSpin();
        }
      },

      

      spinWheel() {
        this.resultColor();
        this.calculateValue();

        if (this.spinning) return;

        this.spinning = true;

        const position = this.wheelData.findIndex((card) => card.value === this.outcome);
        const cardWidth = 75 + 3 * 2;
        const rows = 12;
        const landingPosition = rows * 15 * cardWidth + position * cardWidth;
        const randomize = Math.floor(Math.random() * 75) - 75 / 2;
        const landingPositionWithRandom = landingPosition + randomize;

        const object = {
          x: Math.floor(Math.random() * 50) / 100,
          y: Math.floor(Math.random() * 20) / 100,
        };


        this.wheelStyle.transitionTimingFunction = `cubic-bezier(0, ${object.x}, ${object.y}, 1)`;
        this.wheelStyle.transitionDuration = '6s';
        this.wheelStyle.transform = `translate3d(-${landingPositionWithRandom}px, 0px, 0px`;

        setTimeout(() => {
          this.wheelStyle.transitionTimingFunction = '';
          this.wheelStyle.transitionDuration = '';
          this.wheelStyle.transform = `translate3d(${-position * cardWidth - randomize}px, 0px, 0px)`;
          this.spinning = false;
        }, 6 * 1000);

        

      },


      resultColor(){
      
        if(this.outcome === 2 || this.outcome === 3 || this.outcome === 4 || this.outcome === 8 || this.outcome === 9 || this.outcome === 10 || this.outcome === 11){
          
          this.cassinoColor='red'
          console.log(this.cassinoColor);
          

        }

        else if(this.outcome === 0 || this.outcome === 5 || this.outcome === 6 || this.outcome === 7 ||this.outcome === 12 || this.outcome === 13 || this.outcome === 14 ){
          
          this.cassinoColor='black'
          console.log(this.cassinoColor);
        }

        else if(this.outcome === 1){
          
          this.cassinoColor='green';
          console.log(this.cassinoColor);

        }
        
        
        
      },

      calculateValue(){

        this.balance = parseFloat(this.balance)-parseFloat(this.betValue);

        setTimeout(() =>{

          if(this.selectedColor === 'red' & this.cassinoColor ==='red'){
            this.winAlert1 = true;
            this.balance = parseFloat(this.balance)+(parseFloat(this.betValue)*2);
            this.winAudio();
          }

          else if(this.selectedColor === 'black' & this.cassinoColor ==='black'){
            this.winAlert1 = true;
            this.balance = parseFloat(this.balance)+(parseFloat(this.betValue)*2)
            this.winAudio();
          }

          else if(this.selectedColor === 'green' & this.cassinoColor ==='green'){
            this.winAlert1 = true;
            this.balance = parseFloat(this.balance)+(parseFloat(this.betValue)*14);
            this.winAudio();
          }

          else{
            this.loseAlert = true;
            this.loseAudio();
          }

          this.outcome = Math.floor(Math.random() * 14);

        },6000)


       
      },
      

    },
  };

</script>
<style scoped>

body{
  font-family: 'Titillium Web', sans-serif;
  padding: 15px
};

</style>

<style src="@/styles/rouletteStyle.css"></style>