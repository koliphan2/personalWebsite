<template>
    <div>               
        <div class="image-grid">
            <div class="pictureClass">
                Drawings
                <div class="pictures">
                    <div class="singlePicture">
                            <p id="notes">Extra notes about the piece</p>
                            <img src="photos/stormFrog.jpg" alt="sampleImg">
                            <p id="title">title</p>
                    </div>
                    <div class="singlePicture">
                            <p id="notes">Extra notes about the piece</p>
                            <img src="photos/stormFrog.jpg" alt="sampleImg">
                            <p id="title">title</p>
                    </div>
                    <div class="singlePicture">
                            <p id="notes">Extra notes about the piece</p>
                            <img src="photos/stormFrog.jpg" alt="sampleImg">
                            <p id="title">title</p>
                    </div>
                    <div class="singlePicture">
                            <p id="notes">Extra notes about the piece</p>
                            <img src="photos/stormFrog.jpg" alt="sampleImg">
                            <p id="title">title</p>
                    </div>
                </div>
            </div>
            <div class="pictureClass">
                Digital Work
                <div class="pictures">
                    <div class="singlePicture">
                            <p id="notes">Extra notes about the piece</p>
                            <img src="photos/stormFrog.jpg" alt="sampleImg">
                            <p id="title">title</p>
                    </div>
                    <div class="singlePicture">
                            <p id="notes">Extra notes about the piece</p>
                            <img src="photos/stormFrog.jpg" alt="sampleImg">
                            <p id="title">title</p>
                    </div>
                </div>
            </div>
            <div class="pictureClass">
                Master Copies
                <div class="pictures">
                    <div class="singlePicture">
                            <p id="notes">Extra notes about the piece</p>
                            <img src="photos/stormFrog.jpg" alt="sampleImg">
                            <p id="title">title</p>
                    </div>
                    <div class="singlePicture">
                            <p id="notes">Extra notes about the piece</p>
                            <img src="photos/stormFrog.jpg" alt="sampleImg">
                            <p id="title">title</p>
                    </div>
                    <div class="singlePicture">
                            <p id="notes">Extra notes about the piece</p>
                            <img src="photos/stormFrog.jpg" alt="sampleImg">
                            <p id="title">title</p>
                    </div>
                </div>
            </div>
            <div class="pictureClass">
                Paintings
                <div class="pictures">
                    <div class="singlePicture">
                            <p id="notes">Extra notes about the piece</p>
                            <img src="photos/stormFrog.jpg" alt="sampleImg">
                            <p id="title">title</p>
                    </div>
                    <div class="singlePicture">
                            <p id="notes">Extra notes about the piece</p>
                            <img src="photos/stormFrog.jpg" alt="sampleImg">
                            <p id="title">title</p>
                    </div>
                    <div class="singlePicture">
                            <p id="notes">Extra notes about the piece</p>
                            <img src="photos/stormFrog.jpg" alt="sampleImg">
                            <p id="title">title</p>
                    </div>
                    <div class="singlePicture">
                            <p id="notes">Extra notes about the piece</p>
                            <img src="photos/stormFrog.jpg" alt="sampleImg">
                            <p id="title">title</p>
                    </div>
                    <div class="singlePicture">
                            <p id="notes">Extra notes about the piece</p>
                            <img src="photos/stormFrog.jpg" alt="sampleImg">
                            <p id="title">title</p>
                    </div>
                    <div class="singlePicture">
                            <p id="notes">Extra notes about the piece</p>
                            <img src="photos/stormFrog.jpg" alt="sampleImg">
                            <p id="title">title</p>
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
      msg: 'Welcome to Your Vue.js App'
    }
  }
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
    grid-template-rows: auto auto auto auto;
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


