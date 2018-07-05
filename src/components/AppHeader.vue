<template>
 <nav>
    <div class="header">
                <ul class="menu">
                    <li><router-link class="symbol" to="/login"><img src="static/images/SymbolColor.png" alt="symbol"></router-link></li>
                    <li><p id="name">Katie Oliphant</p></li>
                    <li class="mini-menu">
                    <ul class="mini-menu">
                        <li><router-link class="main" to="/">Home</router-link></li>
                        <li>
                            <div class="dropdown">
                                <span>Portfolio</span>
                                <div class="dropdown-content">
                                    <router-link to="/Portfolio">Original Work</router-link>
                                    <router-link to="/fanart">Fanart</router-link>
                                    <router-link to="/sketchbook">Sketchbook</router-link>
                                </div>
                            </div>
                        </li>
                        <li><router-link to="/about">About</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                        <li v-bind:class="{loggedIn: login, loggedOut: !login}"><router-link to="/Upload">Upload</router-link></li>
                    </ul>
                    </li>
                </ul>
            </div>  
    </nav>
</template>

<script>
 export default {
     name: 'AppHeader',
     data(){
         return{
             loginStatus: false,
         }
     },
     computed:{
         //Computed function never runs
        login: function(){
             this.loginStatus = this.$store.getters.logedIn;
             return this.loginStatus;
         },
     }
 }
</script>

<style scoped>

.loggedOut{
    display: none;
}
.loggedIn{
    display: block;
}

#name{
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 0px;
}

 ul.menu{
    width: 100%;
    min-width: 1000px;
    padding:10px;
    list-style-type: none;
    align-content: center;
    height: 50px;

}
li{
    float: left;
    margin-left: 10px;
    margin-right: 10px;
    font-family: fantasy;
    font-size: 20px;
}

li.mini-menu{
    /*when window is 850px wide it needs to stop*/
    min-width: 600px;
    position: absolute;
    right: 0;
    max-width: 70%;
    margin-top: 10px;
}

li .mini-menu{
    max-width: 100%;
    float: right;
    list-style-type: none;
}

.mini-menu a:hover{
    font-size: 23px;
}

.symbol img{
    height: 40px;
    width: auto;
}

.symbol{
    cursor: default;
}

.block{
    margin: 5px;
    margin-left: 70px;
    margin-right:70px;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color:  rgb(199, 226, 207);

    border: 2px inset rgba(0, 0, 0, 0.2);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: block;
}

a{
    text-decoration-line:none;
    text-decoration-color: black;
}
a:visited{
    text-decoration-color: black
}

</style>