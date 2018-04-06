<template>
  <div>
    <section>
        <aside>
            <div class="simpleBorder">
                <img id="aboutMePic" class="about" src="static/images/FixToProfile.jpg" alt="Profile Picture">
            </div>
            <p v-on:click="editPic()" class="editFile">edit</p>
                
        </aside>
        <article>
            <div id="loginRequired" class="title">Get to Know Me</div>
            <div id="aboutMe">
                <div v-if="status == false">
                    <p  id="aboutMeWords">{{ currentMessage }}</p>
                    <p v-on:click="editWords()" class="editFile">edit</p>
                </div>
                <div id="gimmeSpace" v-if="status == true">
                    <textarea id="aboutMeEdit" v-model="currentMessage"></textarea>
                    <div class="formLabels">
                        <input type="button" value="Submit" v-on:click="submit(currentMessage)">
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
        currentMessage:'Please edit this and add a bio.',
        editing: false,
    }
  },
  methods:{
    editWords: function(){
        this.editing = true;
    },
    submit: function(words){
        this.editing = false;
        this.currentMessage = words;
    },
    editPic: function(){
        return;
    }

  },
  computed: {
    loggedIn: function() {
        console.log(this.$store.getters.loggedIn);
          if(this.$store.getters.loggedIn == true){
              document.getElementsByClassName('editFile').setAttribute("style", 'display: block');
          }
          else 
              document.getElementsByClassName('editFile').setAttribute("style", 'display: none');
      },
    status: function() {
        console.log(this.editing);
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


.editFile{
    display: none;
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
    width: 100%;
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



