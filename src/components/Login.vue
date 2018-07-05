<template>
    <div class="mainBody">
                <p class="words">This page is for authorized personnel only. If you have come to this page on accident, please return to the website by clicking on any of menu options.</p>
                <div v-bind:class="{login: !status, unseen: status}">
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
                        <button v-on:click="register">Register - Temporary</button>
                
                    </form>
                </div>
                <div v-bind:class="{logout: status, unseen: !status}">
                    <button v-on:click="logout">Logout</button>
                </div>
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
        loginStatus: false,

    }
  },
  methods:{
    login: function(){
        this.$store.dispatch('login', {
            username: this.userName,
            password: this.password,
        }).then(response => {
        });

        this.userName = "";
        this.password = "";
        return;
    },
    logout: function(){
        this.$store.dispatch('logout');
    },
    register: function(){
        this.$store.dispatch('register', {
            username: this.userName,
            password: this.password,
            email: "test@test.com",
            aboutMe: "Fill this out with your information",
            aboutPic: "This can hold a picture",
        });
        this.userName = "";
        this.password = "";
    }
  },
  computed:{
    status: function(){
        return this.$store.getters.logedIn;

     },
   }
}
</script>



<style scoped>

.mainBody{
    width: 800px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
}
.login{
    margin: 10px;
    margin-bottom: 30px;
    display: block;
}

.unseen{
    display: none;
}

.logout{
    display: block;
    margin: 10px;

    position: relative;
    left: 50%;
    transform: translate(-50%);
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



