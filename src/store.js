import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      user: {},
      aboutMe:"",
      aboutPic: "",
      logedIn: false,
      loginError: '',
      registerError: '',
      image: null,
      title: "",
      description: "",
      location: "",
      pictures: [],

  },
  getters: {
    logedIn: state => state.logedIn,
    user: state => state.user,
    location: state => state.location,
    pictures: state => state.pictures,
    aboutMe: state => state.aboutMe,
    aboutPic: state => state.aboutPic,
    //same as items: function(state) {return state.items}
  },
  mutations: {
      setAboutMe(state,message){
        state.aboutMe = message;
      },
      setAboutPic(state, picture){
        state.aboutPic = picture;
      },
      setUser (state, user) {
        console.log("Set User User");
        console.log(user);
        state.user = user;
      },
      setLogedIn (state, status) {
        state.logedIn = status;
      },
      setLoginError (state, message) {
        state.loginError = message;
      },
      setRegisterError (state, message) {
        state.registerError = message;
      },
      setTitle (state, title){
        state.title = title;
      },
      setLocation( state, location){
        state.location = location;
      },
      setDescription (state, description){
        state.description = description;
      },
      setImage(state, image){
        state.image = image;
      },
      setPictures (state, pictures) {
        if(pictures[0]== undefined) return;
        var imageObject = {title: pictures[0].location, images:[]};
        for (var i = 0, len = pictures.length; i < len; i++) {
          imageObject.images.push(pictures[i]);
        };
        state.pictures.push(imageObject);
      },
      removePictures(state){
        state.pictures.length = 0;
      },
  },
  actions: {

      login(context,user) {
        axios.post("/api/login",user).then(response => {
	  context.commit('setUser', response.data.user);
    context.commit('setLogedIn',true);
    context.commit('setRegisterError',"");
    context.commit('setLoginError',"");
        }).catch(error => {
    context.commit('setRegisterError',"");
    if (error.response) {
      if (error.response.status === 403 || error.response.status === 400)
        context.commit('setLoginError',"Invalid login.");
      context.commit('setRegisterError',"");
      return;
    }
    context.commit('setLoginError',"Sorry, your request failed. We will look into it.");
        });
      },

    logout(context){
      context.commit('setUser', {});
      context.commit('setLogedIn',false);
      return;
    },

    register(context,user) {
      axios.post("/api/users",user).then(response => {
	context.commit('setUser', response.data.user);
	context.commit('setLogedIn',true);
	context.commit('setRegisterError',"");
	context.commit('setLoginError',"");
      }).catch(error => {
	context.commit('setLoginError',"");
	context.commit('setLogedIn',false);
	if (error.response) {
	  if (error.response.status === 403)
	    context.commit('setRegisterError',"That email address already has an account.");
	  else if (error.response.status === 409)
	    context.commit('setRegisterError',"That user name is already taken.");
	  return;
	}
	context.commit('setRegisterError',"Sorry, your request failed. We will look into it.");
      });
    },
  
    upload(context, data){
      // Setup headers
      //let headers = getAuthHeader();
      //headers.headers['Content-Type'] = 'multipart/form-data';
      // setup form data
      let formData = new FormData();
      formData.append('image', data.image);
      formData.append('location', data.location);
      formData.append('description', data.description);
      formData.append('title', data.title);
      axios.post("/api/artwork/upload", formData).then(response => {
        context.commit('setImage', null);
        context.commit('setDescription', "");
        context.commit('setTitle', "");
        context.commit('setLocation', "");
      });
    },
    
    getPictures(context, locations) {
      for(let i = 0;i< locations.length;i++){
        axios.get("/api/"+ locations[i] + "/artwork" ).then(response => {
          context.commit('setPictures',response.data.image);
          }).catch(err => {
          console.log("getPictures failed:",err);
          });
      }
    },

    clearPage(context){
      context.commit('removePictures');
    },

    editBio(context, user){
      axios.put("/api/about/bio", user).then(response =>{
        context.commit('setAboutMe', response.data.message);
      }).catch(err => {
        console.log("editBio failed:", err);
      })
    },
    getBio(context){
      axios.get("/api/about/bio").then(response => {
        context.commit('setAboutMe',response.data.bio.aboutMe);
        context.commit('setAboutPic', response.data.bio.aboutPic);

      }).catch(err => {
        console.log("getBio failed:", err);
      })
    },
  }
});