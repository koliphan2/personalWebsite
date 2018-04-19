<template>
  <div>
   <div class="main">
          <div class="quotePic">
              <div class="quoteHolder">
                  <img class="background" src="static/images/SunsetUtahSkinny.jpg" alt="sunset">
                  <div class="words"><strong>Welcome to my online portfolio! Feel free to look around, and I hope you enjoy my work.</strong> <br><br>
                      The creative adult is the child who has survived.
                  <br> <em>-Ursula K. Le Guin</em></div>
              </div>
          </div>
      </div>
      <div class="footer"><a href="https://github.com/koliphan2/personalWebsite">Github Classroom - koliphan2</a></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main{
  width: 100%;
}
p{
    text-align: left;
    line-height: 25px;
}


.title{
    font-family: fantasy;
    font-weight: bold;
    font-size: 32px;
}

body{
    background-color: #E1FFE9;
}

img {
    width: 130%;
    height: 100%;
}





.container{
    margin-top: -10px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: 
        "header header"
        "main main"
        "footer footer";

    max-height: 260px;
}


#name{
    font-size: 30px;
    margin-top: 20px;
}


.quotePic{
    grid-column: span 12;
    grid-row-start: 2;
    position: relative;
    text-align: center;
    color: white;
    
}

.quoteHolder{
    margin: -8px;
    grid-area: main;
    width: 100%;
    min-width: 1200px;
    min-height: 400px;
}

.words{
    min-width: 600px;
    position: absolute;
    top: 40vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    font-size: 3vmax;
    font-family: fantasy;
    background-color: rgba(0, 0, 0, 0.15);
    border: 2px inset rgba(0, 0, 0, 0.2);
    padding: 15px;
}

.footer{
    grid-area: footer;
    background-color: rgba(0, 0, 0, 0.15);
    border: 2px inset rgba(0, 0, 0, 0.2);
    position: static;
    bottom: 0%;
    color: white;
}
a:link{
    text-decoration-style: none;
    text-decoration-color: white;
    text-decoration-line: none;
}
</style>
