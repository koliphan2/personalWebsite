<template>
  <div class="container-login">
            <div class="vueImages">
                <div class="upload">
                    <form id="uploadPic" enctype="multipart/form-data">
                        <div class="formLabels">
                            <label for="picTitle">Title: </label>
                            <input type="text" id="picTitle" name="Title" v-model='title'>
                        </div>
                        <div class="formLabels">
                            <label for="section">Location: </label>
                            <select id="section" v-on:change='locationChoice'>
                                <option value="drawing">Drawing</option>
                                <option value="digital">Digital Art</option>
                                <option value="painting">Painting</option>
                                <option value="master">Master Copy</option>
                                <option value="fanart">Fanart</option>
                                <option value="sketch">Sketchbook</option>
                            </select>
                        </div>
                        <div class="formLabels" id="fileUpload">
                            <label for="file">
                              <i class="far fa-image" aria-hidden="true"></i>
                            </label>
                            <input name="image" id="file" type="file" v-on:change="previewImage" class="input">
                        </div>
                        <div class="formLabels">
                            <label for="comment">Extra Notes:</label>
                            <br>
                            <textarea rows="6" cols="50" name="comment" form="uploadPic" v-model='description' placeholder="Enter in a description for this image."></textarea>
                        </div>
                        <div class="formLabels">
                            <input type="button" value="Upload" v-on:click="upload()">
                        </div>
                    </form>

                    <div id="placeHolder" v-bind:style="{inactive: !imagePreview, active:imagePreview }">
                        <img class="preview" v-bind:src="image">
                    </div>
                
                    
                </div>
                <div class="footer"><a href=" https://github.com/BYU-CS260-Winter-2018/lab-1-koliphan2">Github Classroom - koliphan2</a></div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
        title: "",
        image: '',
        imagePreview: false,
        file: '',
        description: "",
        location: "drawing",
    }
  },
  methods:{
    upload: function(){
        this.$store.dispatch('upload', {
            id: "",
            image: this.file,
            title: this.title,
            description: this.description,
            location: this.location,
        }).then(response => {
            this.image = "";
            this.imagePreview = false;
            this.title = "";
            this.description = "";
            this.location = "drawing";
            alert("Your file has been uploaded!")
        });
        
        return;
    },
    previewImage(event){
        const input = event.target;
       // Ensure that you have a file before attempting to read it
       if (input.files && input.files[0]) {
        this.file = input.files[0];
         // create a new FileReader to read this image and convert to base64 format
         const reader = new FileReader();
         // Define a callback function to run, when FileReader finishes its job
         reader.onload = (e) => {
           // Read image as base64 and set to image
          this.image = e.target.result;
          this.imagePreview = true;
         }
         // Start the reader job - read file as a data url (base64 format)
         reader.readAsDataURL(input.files[0]);
       }
    },
    locationChoice(event){
        this.location = event.target.value;
    }
  },
}
</script>


<style scoped>
.upload{
    margin-bottom: 25px;
    margin-top: 10px;
    min-width: 500px;
    background-color: rgba(0, 0, 0, 0.15);
    border: 2px inset rgba(0, 0, 0, 0.2);
    padding: 30px;
    grid-area: main;
    margin-left: 10%;
    margin-right: 10%;
    display: grid;
    grid-template-areas: 
    "upload picture";
}

.upload form{
    grid-area: upload;
}

.formLabels{
    text-indent: 3px;
    margin: 10px;
    padding: 10px;
}

#picTitle{
    margin-left: 23px;
    min-width: 150px;
}

#location{
    margin-left: 23px;
    min-width: 150px;
}

#section{
    margin-left: 4px;
    min-width: 150px;
}

#placeHolder{
    grid-area: picture;
    position: relative;
    max-width: 450px;
    height: 98%;
    min-width: 150px;
    right: 0;
    margin-right: 10px;
}
#placeHolder img {
    width: 100%;
    border: 4px solid rgba(0, 0, 0, 0.5);
}

#notes{
 min-height:200px;
 max-height: 400px;
 width: 200px;

}

</style>
