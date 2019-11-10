<template>
  <div id="app">
    <Scene></Scene>
    <Keyboard></Keyboard>
  </div>
</template>

<script>
import Scene from './components/Scene.vue'
import Keyboard from './components/Keyboard.vue'


export default {
  name: 'app',
  components: {
    Scene,
    Keyboard
  },
}
</script>

<style>
	#app {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
