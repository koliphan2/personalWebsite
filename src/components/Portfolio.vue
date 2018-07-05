<template>
    <div>               
        <div class="image-grid">
            <div class="pictureClass" v-for="item in pictures">
                <h3>{{item.title}}</h3>
                <div class="pictures">
                    <div class="singlePicture" v-for="picture in item.images">
                        <p id="notes"> {{picture.description}}</p>
                        <img v-bind:src="picture.image" alt="sampleImg">
                        <p id="title">{{picture.title}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <a href="https://github.com/koliphan2/personalWebsite">Github Classroom - koliphan2</a>
        </div>
    </div>
</template>


<script>
export default {
  name: 'Portfolio',
  data () {
    return {
        pictures: [],
        locations:['drawing', 'painting','digital']
    }   
  },
  created: function() {
    this.$store.dispatch('clearPage');
    //Set up the arrays
    this.$store.dispatch('getPictures', this.locations);
    this.pictures = this.$store.getters.pictures;

    //Add upload date to image table and display it in the description
    
  },    
}
</script>

<style scoped>
.footer{
    grid-area: footer;
    background-color: rgba(0, 0, 0, 0.15);
    border: 2px inset rgba(0, 0, 0, 0.2);
    position: static;
    bottom: 0%;
    color: white;
}

.grid-container {
    margin: 10px;
    display: grid;
    grid-template-columns: auto;
    padding: 5px;
    grid-row-gap: 10px;
    grid-column-gap: 5px;
  }

.grid-container > div{
    align-content: center;
    padding: 10px, 0;
}

.grid-item{
    align-content: center;
}
.grid-item-long{
    grid-column-start: 1;
    grid-column-end:3;

}
.grid-break{
    margin-left: 30px;
    margin-right: 40px;
    margin-top: 20px;
    grid-column-start: 1;
    grid-column-end: 5;
}


/* Image Portfolio */

.image-grid{
    display: grid;
    margin: 20px;
    grid-gap: 10px;
    grid-template-rows: 25 25 25 25;
}

.pictureClass{
    font-family: fantasy;
    font-size: 20px;
    padding:20px;
    background-color: rgba(0, 0, 0, 0.15);
    border: 2px inset rgba(0, 0, 0, 0.2);
}

.pictures{
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 25px;
}

.pictures img{
    border: 2px inset rgba(0, 0, 0, 0.2);
    position: relative;
    display: inline-block;
    cursor: pointer;
    height: 300px;;

    
}

.singlePicture:active #notes{
    display: block;
}

.singlePicture #notes{
    position: absolute;
    background-color:  rgb(199, 226, 207);
    border: 2px inset rgba(0, 0, 0, 0.2);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
    display: none;
}
.singlePicture #title{
    margin: 5px;
}

</style>


