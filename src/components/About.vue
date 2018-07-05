<template>
  <div>
    <section>
        <aside>
            <div class="simpleBorder">
                <img id="aboutMePic" class="about" src="static/images/FixToProfile.jpg" alt="Profile Picture">
            </div>
            <p v-on:click="editPic()" v-bind:class="{editFile: login, noEdit: !login}">edit</p>
                
        </aside>
        <article>
            <div id="loginRequired" class="title">Get to Know Me</div>
            <div id="aboutMe">
                <div v-if="editing == false">
                    <p  id="aboutMeWords">{{ message() }}</p>
                    <p v-on:click="editWords()" v-bind:class="{editFile: login, noEdit: !login}">edit</p>
                </div>
                <div id="gimmeSpace" v-if="editing == true">
                    <textarea id="aboutMeEdit" v-model="currentMessage"></textarea>
                    <div class="formLabels">
                        <input type="button" value="Submit" v-on:click="submit()">
                    </div>
                </div>
            </div>
        </article>
    </section>
    <div class="footer"><a href="https://github.com/koliphan2/personalWebsite">Github Classroom - koliphan2</a></div>
  </div>
</template>


<script>
export default {
    name: 'About',
  data () {
    return {
        editing: false,
        loginStatus: false,
        currentMessage:"",
    }
  },
  created: function(){
    this.$store.dispatch('getBio');
  },
  methods:{
    editWords: function(){
        //sent an api to save this and the picture into the database
        //replace what is there in the current user
        this.editing = true;
    },
    submit: function(){
        console.log(this.currentMessage);
        
        this.editing = false;
        let tempUser = this.$store.getters.user;
        tempUser.aboutMe = this.currentMessage;
        this.$store.dispatch('editBio', tempUser);
    },
    editPic: function(){
        return;
    },
    message: function(){
        this.currentMessage = this.$store.getters.aboutMe;
        return this.$store.getters.aboutMe;
    },

  },
  computed: {
    
    login: function(){
        this.loginStatus = this.$store.getters.logedIn;
        return this.loginStatus;
     },
    
    status: function() {
        return this.editing;
     },
  },
}
</script>




<style scoped>
section{
    display: flex;
    margin: 10px;
}

.simpleBorder{
    margin: 5px;

    background-color: rgba(51, 92, 51, 0.301);
    border: 2px inset rgba(0, 0, 0, 0.2);
    padding: 5px;
}
p.simpleBorder{
    font-family: fantasy;
    font-size: 16px;
    padding: 20px;
    width: 80%;
    margin-left: 10%;
}

aside{
    flex: 1; 
    margin-left: 10px;
}
article{
    flex: 1.7;
    margin-left: 40px;
    text-align: center;
}

.title{
    font-family: fantasy;
    font-weight: bold;
    font-size: 32px;
}

.noEdit{
    display: none;
}
.editFile{
    display: block;
    padding: 2px;
    background-color: rgba(0, 0, 0, 0.15);
    border: 2px inset rgba(0, 0, 0, 0.2);
    font-family: fantasy;
    width: 30px;
    text-decoration-line: underline;
    margin-top: 10px;
}

input[type="file"]#editFile {
    display: none;
}

#aboutMeWords {
    max-width: 1000px;
    font-family: fantasy;
    font-size: 14px;
}

#aboutMeEdit{
    width: 100%;
    height: 200px;
    font-size: 14px;
}
.editFile:hover{
    cursor: pointer;
}
</style>



