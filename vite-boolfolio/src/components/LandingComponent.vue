<script>

export default {
    name: "LandingComponent",
}
</script>

<template>

    <div class="bg "></div>
      
      <div class="landing">
        <div class="title text-black opacity-100 fs-1 m_left_50 mt-4">
          E.G.
        </div>
        <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
          <label for="menu-icon"></label>
          <nav class="nav"> 		
              <ul class="pt-5">
                  <li>
                    <router-link :to="{ name: 'projects' }">
                        Works
                    </router-link>
                  </li>
                  <li><a href="#">Studio</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </nav>
        
        <div class="wrapper_name">
        <div class="typing-demo text-black">
          Hi, my name is Enrico.
        </div>
    </div>
      <ul class="wrapper d-flex flex-column">
      <li class="icon facebook">
            <span class="tooltip">Facebook</span>
        <span><font-awesome-icon :icon="['fab', 'facebook-f']" /></span>
      </li>
      <li class="icon twitter">
        <span class="tooltip">Twitter</span>
        <span><font-awesome-icon :icon="['fab', 'twitter']" /></span>
      </li>
      <li class="icon instagram">
        <span class="tooltip">Instagram</span>
        <span><font-awesome-icon :icon="['fab', 'instagram']" /></span>
      </li>
      <li class="icon github">
        <span class="tooltip">Github</span>
        <span><font-awesome-icon :icon="['fab', 'github']" /></span>
      </li>
      <li class="icon linkedin">
        <span class="tooltip">LinkedIn</span>
        <span><font-awesome-icon :icon="['fab', 'linkedin-in']" /></span>
      </li>
      </ul>
      
        <div class="title position-absolute">
          <div class="pre_title">
            I'm a
          </div>
          FULL-STACK <br> WEB DEVELOPER
        </div>
      </div>
    
</template>

<style lang="scss" scoped>
    
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700;900&display=swap');

    .bg {
      position: fixed;
      top: -50%;
      left: -50%;
      right: -50%;
      bottom: -50%;
      width: 200%;
      height: 200vh;
      background: transparent url('https://img.freepik.com/free-photo/cement-texture_1194-6511.jpg?w=996&t=st=1684337499~exp=1684338099~hmac=a9c65a6d2afb12db19a7b37b014a9c3f472641a692eddcdd39428e5af74b2982') repeat 0 0;
      background-repeat: repeat;
      animation: bg-animation 50s infinite;
      opacity: .3;
      visibility: visible;
    }
    
    @keyframes bg-animation {
        0% { transform: translate(0,0) }
        10% { transform: translate(-5%,-5%) }
        20% { transform: translate(-10%,5%) }
        30% { transform: translate(5%,-10%) }
        40% { transform: translate(-5%,15%) }
        50% { transform: translate(-10%,5%) }
        60% { transform: translate(15%,0) }
        70% { transform: translate(0,10%) }
        80% { transform: translate(-15%,0) }
        90% { transform: translate(10%,5%) }
        100% { transform: translate(5%,0) }
    }
    
    .m_left_50{
      margin-left: 50px;
    }
    
    .wrapper_name {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
    }
    
    .typing-demo {
      width: 22ch;
      animation: typing 5s steps(22), blink .5s step-end infinite alternate;
      white-space: nowrap;
      overflow: hidden;
      border-right: 3px solid;
      font-family: monospace;
      font-size: 2em;
    }
    
    @keyframes typing {
      from {
        width: 0
      }
    }
        
    @keyframes blink {
      50% {
        border-color: transparent
      }
    }
    
      .title {
        bottom: 15%;
        left: 50px;
        font-size: 5rem;
        line-height: 80px;
        white-space: nowrap;
        overflow: hidden; 
        font-family: 'Frank Ruhl Libre';
    
      }
      .pre_title {
        font-family: 'Frank Ruhl Libre';  
        font-size: 2.75rem;
        color: rgba(0, 0, 0, 0.841);
      }
    
      .landing {
        height: 100vh;
        width: 100%;
        background-color: yellow;
        /* color: white; */
        overflow-x: hidden; 
      }
    
      .wrapper {
        height: 100%;
        justify-content: flex-start;
        position: absolute;
        right: 20px;
        top: 0%;
      list-style: none;
    }
    
    .wrapper .icon {
      position: relative;
      background: #ffffff;
      border-radius: 50%;
      padding: 15px;
      margin: 10px;
      width: 50px;
      height: 50px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    
    .wrapper .tooltip {
      position: absolute;
      top: 0;
      font-size: 14px;
      background: #ffffff;
      color: #ffffff;
      padding: 5px 8px;
      border-radius: 5px;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    
    .wrapper .tooltip::before {
      position: absolute;
      content: "";
      height: 8px;
      width: 8px;
      background: #ffffff;
      bottom: -3px;
      left: 50%;
      transform: translate(-50%) rotate(45deg);
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    
    .wrapper .icon:hover .tooltip {
      top: -45px;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
    
    .wrapper .icon:hover span,
    .wrapper .icon:hover .tooltip {
      text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
    }
    
    .wrapper .facebook:hover,
    .wrapper .facebook:hover .tooltip,
    .wrapper .facebook:hover .tooltip::before {
      background: #1877F2;
      color: #ffffff !important;
    }
    
    .wrapper .twitter:hover,
    .wrapper .twitter:hover .tooltip,
    .wrapper .twitter:hover .tooltip::before {
      background: #1DA1F2;
      color: #ffffff;
    }
    
    .wrapper .instagram:hover,
    .wrapper .instagram:hover .tooltip,
    .wrapper .instagram:hover .tooltip::before {
      background: #cb40e4;
      color: #ffffff;
    }
    
    .wrapper .github:hover,
    .wrapper .github:hover .tooltip,
    .wrapper .github:hover .tooltip::before {
      background: #333333;
      color: #ffffff;
    }
    
    .wrapper .linkedin:hover,
    .wrapper .linkedin:hover .tooltip,
    .wrapper .linkedin:hover .tooltip::before {
      background: #1fa2cd;
      color: #ffffff;
    }
    
    ul{
      margin-top: 20%;
      display: flex;
      align-items: flex-end;
      margin-right: 15px;
    }
    .menu-icon{
      visibility: hidden;
    }
    
    
    .menu-icon:checked + label,
    .menu-icon:not(:checked) + label{
      position: fixed;
      top: 63px;
      right: 75px;
      display: block;
      width: 30px;
      height: 30px;
      padding: 0;
      margin: 0;
      cursor: pointer;
      z-index: 10;
    }
    .menu-icon:checked + label:before,
    .menu-icon:not(:checked) + label:before{
      position: absolute;
      content: '';
      display: block;
      width: 30px;
      height: 20px;
      z-index: 20;
      top: 0;
      left: 0;
      border-top: 2px solid #ececee;
      border-bottom: 2px solid #ececee;
      transition: border-width 100ms 1500ms ease, 
                  top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
                  height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), 
                  background-color 200ms ease,
                  transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    .menu-icon:checked + label:after,
    .menu-icon:not(:checked) + label:after{
      position: absolute;
      content: '';
      display: block;
      width: 22px;
      height: 2px;
      z-index: 20;
      top: 10px;
      right: 4px;
      background-color: #ececee;
      margin-top: -1px;
      transition: width 100ms 1750ms ease, 
                  right 100ms 1750ms ease,
                  margin-top 100ms ease, 
                  transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    .menu-icon:checked + label:before{
      top: 10px;
      transform: rotate(45deg);
      height: 2px;
      background-color: #ececee;
      border-width: 0;
      transition: border-width 100ms 340ms ease, 
                  top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
                  height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), 
                  background-color 200ms 500ms ease,
                  transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    .menu-icon:checked + label:after{
      width: 30px;
      margin-top: 0;
      right: 0;
      transform: rotate(-45deg);
      transition: width 100ms ease,
                  right 100ms ease,  
                  margin-top 100ms 500ms ease, 
                  transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    .nav{
      position: fixed;
      top: 33px;
      right: 50px;
      display: block;
      width: 80px;
      height: 80px;
      padding: 0;
      margin: 0;
      z-index: 9;
      overflow: hidden;
      box-shadow: 0 8px 30px 0 rgba(0,0,0,0.3);
      background-color: black;
      animation: border-transform 7s linear infinite;
      transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),  
                  right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
                  transform 250ms 1100ms ease,
                  width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1),
                  height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    @keyframes border-transform{
        0%,100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; } 
      14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; } 
      28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; } 
      42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; } 
      56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; } 
      70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; } 
      84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; } 
    }
    
    .menu-icon:checked ~ .nav {
      animation-play-state: paused;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      width: 200%;
      height: 200%;
      transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),  
                  right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
                  transform 250ms 700ms ease,
                  width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1),
                  height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    .nav ul{
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      width: 100%;
      padding: 0;
      margin: 0;
      z-index: 6;
      text-align: center;
      transform: translateY(-50%);
      list-style: none;
    }
    .nav ul li{
      position: relative;
      display: block;
      width: 100%;
      padding: 0;
      margin: 10px 0;
      text-align: center;
      list-style: none;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
      transform: translateY(30px);
      transition: all 250ms linear;
    }
    .nav ul li:nth-child(1){
      transition-delay: 200ms;
    }
    .nav ul li:nth-child(2){
      transition-delay: 150ms;
    }
    .nav ul li:nth-child(3){
      transition-delay: 100ms;
    }
    .nav ul li:nth-child(4){
      transition-delay: 50ms;
    }
    .nav ul li a{
      font-family: 'Montserrat', sans-serif;
      font-size: 9vh;
      text-transform: uppercase;
      line-height: 1.2;
      font-weight: 800;
      display: inline-block;
      position: relative;
      color: #ececee;
      transition: all 250ms linear;
    }
    .nav ul li a:hover{
      text-decoration: none;
      color: #ffeba7;
    }
    .nav ul li a:after{
      display: block;
      position: absolute;
      top: 50%;
      content: '';
      height: 2vh;
      margin-top: -1vh;
      width: 0;
      left: 0;
      background-color: #353746;
      opacity: 0.8;
      transition: width 250ms linear;
    }
    .nav ul li a:hover:after{
      width: 100%;
    }
    
    
    .menu-icon:checked ~ .nav  ul li {
      pointer-events: auto;
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
      transition: opacity 350ms ease,
                  transform 250ms ease;
    }
    .menu-icon:checked ~ .nav ul li:nth-child(1){
      transition-delay: 1400ms;
    }
    .menu-icon:checked ~ .nav ul li:nth-child(2){
      transition-delay: 1480ms;
    }
    .menu-icon:checked ~ .nav ul li:nth-child(3){
      transition-delay: 1560ms;
    }
    .menu-icon:checked ~ .nav ul li:nth-child(4){
      transition-delay: 1640ms;
    }
    
    
    
    .logo {
        position: absolute;
        top: 60px;
        left: 50px;
        display: block;
        z-index: 11;
        transition: all 250ms linear;
    }
    .logo img {
        height: 26px;
        width: auto;
        display: block;
    }
    
    
    
    @media screen and (max-width: 991px) {
      .menu-icon:checked + label,
      .menu-icon:not(:checked) + label{
        right: 55px;
      }
      .logo {
        left: 30px;
      }
      .nav{
        right: 30px;
      }
      h1{
        font-size: 9vw;
        -webkit-text-stroke: 2px transparent;
        text-stroke: 2px transparent;
        -webkit-text-fill-color: #ffeba7;
        text-fill-color: #ffeba7;
        color: #ffeba7;
      }
      .nav ul li a{
        font-size: 8vh;
      }
    }
    
    </style>