<template>
    <div class="login">
                <p class="words">This page is for authorized personnel only. If you have come to this page on accident, please return to the website by clicking on any of menu options.</p>
                <div id='loginForm' ref='loginButton'>
                    <form v-on:submit="login">
                        <div class="formBox">
                            <label for="userName">Username: </label>
                            <input type="text" v-model="userName" id="userName" name="User Name">
                        </div>
                        <div class="formBox">
                            <label for="password">Password: </label>
                            <input type="password" v-model="password" id="password" name="Password">
                        </div>
                        <div class="formBox">
                            <input type="submit" value="Login">
                        </div>
                    </form>
                </div>
                <button ref="logout" id="logout" v-on:click="logout">Logout {{ changeStatus()}}</button>
                <p class="words">*Temporary Note - Most actions in boxes surrounded by this border will only been seen by a logged-in user. <br> Also, to return to this page, click on the top-left icon surrounded in this background at anytime. The background will also disappear in the final version*</p>

            <div class="footer">
                <a href="https://github.com/koliphan2/personalWebsite">Github Classroom - koliphan2</a>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Login',
  data () {
    return {
        userName: "",
        password: "",

    }
  },
  methods:{
    login: function(){
        this.$store.dispatch('login', {
            userName: this.userName,
            password: this.password,
        }).then(response => {
            this.$store.dispatch('getStatus');
        });

        this.userName = "";
        this.password = "";
        //if(this.$store.getters.logedIn === true){this.$router.push('/'); }
        return;
    },
    changeStatus: function(){
        console.log("INSIDE CHANGESTATUS");
        console.log(this.$store.getters.logedIn + " is the status");
          if(this.$store.getters.logedIn == false){
              //  CLASS BINDINGS //
              //this.$refs.logout.style.display = 'none';
              //this.$refs.loginButton.style.display = 'block';
          }
          else if(this.$store.getters.logedIn == true){
              //console.log(this.$refs);
              this.$refs.logout.style.display = 'block';
          }
      },
    
    logout: function(){
        this.$store.dispatch('logout');
        this.$refs.loginButton.setAttribute("style", 'display: block')
        this.$refs.logout.setAttribute("style", 'display: none')
        //'reload' the page after pushin it so AppHeader reloads
        
    },
  }
}
</script>



<style scoped>
.login{
    width: 800px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    margin: 10px;
    margin-bottom: 280px;
    display: block;
}

#logout{
    display: block;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    margin: 10px;
    display:none;
}

.words{
    
    text-align: center;
    background-color: rgba(0, 0, 0, 0.15);
    border: 2px inset rgba(0, 0, 0, 0.2);
    padding: 15px;


}
.formBox{
    width: 80%;
    text-align: center;
    margin: 20px;
}

</style>



