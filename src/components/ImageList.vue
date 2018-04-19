<template>
  <div>
    <div class="pictures">
        <div class="singlePicture" v-for="picture in images">
            <p id="notes"> {{picture.description}}</p>
            <img v-bind:src="picture.image" alt="sampleImg">
            <p id="title">{{picture.title}}</p>
        </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'ImageList',
    data(){
        return{
            imageList:{},
        }
    },
    created: function() {
        var data = {location: parentLocation.area}
        this.$store.dispatch('getPictures', data);
    },
    computed: {
      images: function() {
        return this.$store.getters.pictures;
      },
    },
  }
</script>

<style scoped>
.image-grid{
    display: grid;
    margin: 20px;
    grid-gap: 10px;
    grid-template-rows: auto auto auto auto;
    
}

.pictureClass{
    font-family: fantasy;
    font-size: 20px;
    padding:20px;
    background-color: rgba(0, 0, 0, 0.15);
    border: 2px inset rgba(0, 0, 0, 0.2);
    margin: 10px;
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
