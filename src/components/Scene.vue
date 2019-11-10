<template>
  <div class="scene_wrapper">   <!-- левая половина (красный прямоугольник) - поле круга -->
    <span class="circle" v-bind:style="{top:`${objectGame.y}px`, left:`${objectGame.x}px`}"></span>    <!--  объект-круг -->
  </div>
</template>

<script>
  
import {mapState} from 'vuex'
export default {
  name: 'Scene',
  props: {
    msg: String
  },
  computed: {
    ...mapState(['objectGame'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .circle {
    background-image: url('../assets/kPBPjbieYJQ.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
    width: 80px;
    height: 80px;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
  }
  .scene_wrapper {
    display: inline-block;
    position: relative;
    border: 1px solid red;
    width: 500px;
    height: 500px;
  }
</style>
