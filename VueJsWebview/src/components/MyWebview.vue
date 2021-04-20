<template>
  <div class="hello">
    <h1>My Webview</h1>
    <p>Response app</p>
    <h3>{{msg}}</h3>
    <button type="button" class="btn btn-expand btn-primary" @click="next()">Open Camera</button>
  </div>
</template>

<script>
import * as appService from '../appService.js'

export default {
  name: 'MyWebview',
  props: {
  },
  data(){
    return{
    msg:""
  }
  },
  methods:{
    pictureAcquired(msg){
      console.log("msg",msg);
      this.msg = msg;
    },
    
    next(){
      appService.openCamera();
    }
  },
  mounted(){

  },
  watch:{
     msg: function (msgNew, msgOld) {
      console.log('new: %s, old: %s', msgNew, msgOld)
    },
  },
  beforeMount(){
  window['MyWebview'] = {
      components: this,
      pictureAcquired: (msg) => this.pictureAcquired(msg),
    };
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
