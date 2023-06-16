<script>
  export default {
    name: "ExpandingComponent",
  
    data() {
        return {
      options: [
        {
          backgroundImage: 'url(./public/img/IMG_4463_Original.jpg)',
          iconClass: 'user',
          main: 'This is me',
          sub: 'An aspiring individual',
          active: true,
        },
        {
          backgroundImage: 'url(./public/img/creativity.jpg)',
          iconClass: 'spray-can',
          main: 'Creativity',
          sub: 'Like the air, it flows in me',
          active: false,
        },
        {
          backgroundImage: 'url(./public/img/dev.jpg)',
          iconClass: 'code',
          main: 'Developer',
          sub: 'There’s no place like 127.0.0.1',
          active: false,
        },
        {
          backgroundImage: 'url(./public/img/student.jpg)',
          iconClass: 'chalkboard',
          main: 'Student',
          sub: 'You see this? that\'s where you can find me',
          active: false,
        },
        {
          backgroundImage: 'url(./public/img/meme.png)',
          iconClass: 'face-grin-squint-tears',
          main: '???',
          sub: '',
          active: false,
        },
      ],
    };
  },
  methods: {
    selectOption(index) {
      this.options.forEach((option, i) => {
        option.active = i === index;
      });
    },
  },
    
  };
  </script>


<template>
    <div class="card d-flex justify-content-center align-items-center p-5">
        <div>
      <div class="options">
        <div
          v-for="(option, index) in options"
          :key="index"
          :class="['option', { active: option.active }]"
          :style="{ '--optionBackground': option.backgroundImage }"
          @click="selectOption(index)"
        >
          <div class="shadow"></div>
          <div class="label">
            <div class="icon">
              <font-awesome-icon class="text-black" :icon="['fas', option.iconClass]"></font-awesome-icon>
            </div>
            <div class="info">
              <div class="main">{{ option.main }}</div>
              <div class="sub">{{ option.sub }}</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
    $optionDefaultColours: #ED5565,#FC6E51,#FFCE54,#2ECC71,#5D9CEC,#AC92EC;

body {
    .card{
        margin-bottom: 6rem;
        background-color: black;
        border-radius: 45px;
        -webkit-box-shadow: 5px 5px 15px 5px #000000; 
        -webkit-box-shadow: 7px 7px 22px 3px rgba(0,0,0,0.75); 
box-shadow: 7px 7px 22px 3px rgba(0,0,0,0.75);
    }
   .options {
      display:flex;
      flex-direction:row;
      align-items:stretch;
      overflow:hidden;

      min-width:600px;
      max-width:1300px;
      width:900px;
      
      height:600px;
      
      @for $i from 1 through 4 {
         @media screen and (max-width:798px - $i*80) {
            min-width:600px - $i*80;
            .option:nth-child(#{6-$i}) {
               display:none;
            }
         }
      }
      
      .option {
         position: relative;
         overflow:hidden;

         min-width:60px;
         margin:10px;
         //border:0px solid --defaultColor;

         background:var(--optionBackground, var(--defaultBackground, #E6E9ED));
         background-size:auto 120%;
         background-position:center;

         cursor: pointer;

         transition:.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

         @for $i from 1 through length($optionDefaultColours) {
            &:nth-child(#{$i}) {
               --defaultBackground:#{nth($optionDefaultColours, $i)};
            }
         }
         &.active {
            flex-grow:10000;
            transform:scale(1);
            
            max-width:600px;
            margin:0px;
            border-radius:40px;
            
            background-size:auto 100%;
            .shadow {
               box-shadow:inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black;
            }
            .label {
               bottom:20px;
               left:20px;
               .info >div {
                  left:0px;
                  opacity:1;
               }
            }
            /*&:active {
               transform:scale(0.9);
            }*/
         }
         &:not(.active) {
            flex-grow:1;
            
            border-radius:30px;
            .shadow {
               bottom:-40px;
               box-shadow:inset 0 -120px 0px -120px black, inset 0 -120px 0px -100px black;
            }
            .label {
               bottom:10px;
               left:10px;
               .info >div {
                  left:20px;
                  opacity:0;
               }
            }
         }
         .shadow {
            position: absolute;
            bottom:0px;
            left:0px;
            right:0px;
            
            height:120px;
            
            transition:.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
         }
         .label {
            display:flex;
            position: absolute;
            right:0px;

            height:40px;
            transition:.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
            .icon {
               display:flex;
               flex-direction:row;
               justify-content:center;
               align-items:center;
               
               min-width:40px;
               max-width:40px;
               height:40px;
               border-radius:100%;

               background-color:white;
               color:var(--defaultBackground);
            }
            .info {
               display:flex;
               flex-direction:column;
               justify-content:center;
               
               margin-left:10px;
               
               color:white;
               
               white-space: pre;
               >div {
                  position: relative;
                  
                  transition:.5s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity .5s ease-out;
               }
               .main {
                  font-weight:bold;
                  font-size:1.2rem;
               }
               .sub {
                  transition-delay:.1s;
               }
            }
         }
      }
   }
}
  </style>
  