<template>
    <div>
      <img src="@/assets/logo_2.png" alt="">
      <p id="balance">Saldo atual: {{ saldo }}</p>
      <p id="message">{{ message }}</p>
      <div id="app">
        <audio id="slotSound" src="@/assets/sound/slot_sound.mp3"></audio>
        <audio id="loseSound" src="@/assets/sound/lose_sound.mp3"></audio>
        <audio id="winSound" src="@/assets/sound/win_sound.mp3"></audio>
        <div class="doors">
          <div class="door">
            <div class="boxes" id="slot1">
              <!-- <div class="box">?</div> -->
            </div>
          </div>
          <div class="door">
            <div class="boxes">
              <!-- <div class="box">?</div> -->
            </div>
          </div>
          <div class="door">
            <div class="boxes" id="slot3">
              <!-- <div class="box">?</div> -->
            </div>
          </div>
        </div>
        <div class="buttons">
          <button @click="spin">Jogar - R$10</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          '❌', '💰', '☠', '💵', '🤡', '7', '💎',
          '❌', '💰', '☠', '💵', '🤡', '7', '💎',
          '❌', '💰', '☠', '💵', '🤡', '7', '💎',
        ],
        doors: null,
        slotSound: null,
        loseSound: null,
        winSound: null,
        balance: 1000,
        betValue: 10,
        message: '',
        slot1: null,
        slot2: null,
        slot3: null,
        saldo: 0,
      };
    },
    methods: {
      slotAudio() {
        this.slotSound.play();
      },
      winAudio() {
        this.winSound.play();
      },
      loseAudio() {
        this.loseSound.play();
      },
      verifyRoundItems() {
        if (this.slot1 === this.slot2 && this.slot2 === this.slot3) {
          this.message = 'Você VENCEU a aposta!';
          this.message.style.color = 'green';
          this.saldo += 100;
          this.balance = this.saldo;
          this.winAudio();
        } else {
          this.message = 'Você PERDEU a aposta!';
          this.message.style.color = 'red';
          this.balance = this.saldo;
          this.loseAudio();
        }
      },
      cleanMessage() {
        this.message = '';
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
      async spin() {
        this.init(1, 2);
        setTimeout(this.slotAudio, 250);
        this.saldo = parseFloat(this.saldo) - parseFloat(this.betValue);
        this.balance = this.saldo;
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
      this.balance = this.saldo;
    },
  };
  </script>
  <style scoped>
  /* Estilos CSS específicos para este componente */
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Titillium Web', sans-serif;
    background-color: #111111;
  }
  
  img {
    width: 200px;
    height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  
  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .doors {
    display: flex;
  }
  
  .door {
    background: #fafafa;
    width: 100px;
    height: 110px;
    overflow: hidden;
    border-radius: 5px;
    margin: 5px;
  }
  
  .boxes {
    /* transform: translateY(0); */
    transition: transform 1s ease-in-out;
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
  
  button {
    cursor: pointer;
    font-size: 1.2rem;
    margin: 0 0.2rem;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    text-align: center;
    padding: 8px;
    color: #FFFF;
    width: 325px;
    height: 74.67px;
    border-radius: 10px;
    background-color: #FF9900;
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
  