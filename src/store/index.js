import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		objectGame: {            // объект-круг на левом поле
			name: 'circle',
			x: 0,
			y: 0,
			limitY: 420,
			limitX: 420
		}
	},
	mutations: {

		moveObjectDown(state) { 
			let keybordBtn = document.getElementById("down")
			function oneUnitMove() {    // oneUnitMove - меняет координаты X and Y на 1 or -1. В зависимости от тела
				if(state.objectGame.y < state.objectGame.limitY || state.objectGame.y < state.objectGame.limitY) {
					state.objectGame.y++
				}
			}
			let interval
			keybordBtn.addEventListener('mousedown', function() {
				if(event.button === 0) {
					interval = setInterval( oneUnitMove, 10)
				}
			})
			keybordBtn.addEventListener('mouseup', function() {
				clearInterval(interval)  
			})
			
		},

		moveObjectUp(state) {
			let keybordBtn = document.getElementById("up")
			function oneUnitMove() {
				if(state.objectGame.y == state.objectGame.limitY || state.objectGame.y > 0) {
					state.objectGame.y--
				}
			}
			let interval
			keybordBtn.addEventListener('mousedown', function() {
				if(event.button === 0) {
					interval = setInterval( oneUnitMove, 10)
				}
			})
			keybordBtn.addEventListener('mouseup', function() {
				clearInterval(interval)  
			})
		},

		moveObjectLeft(state) { 
			let keybordBtn = document.getElementById("left")
			function oneUnitMove() {
				if(state.objectGame.x == state.objectGame.limitX || state.objectGame.x > 0) {
					state.objectGame.x--
				}
			}
			let interval
			keybordBtn.addEventListener('mousedown', function() {
				if(event.button === 0) {
					interval = setInterval( oneUnitMove, 10)
				}
			})
			keybordBtn.addEventListener('mouseup', function() {
				clearInterval(interval)  
			})
			
		},

		moveObjectRight(state) { 
			let keybordBtn = document.getElementById("right")
			function oneUnitMove() {
				if(state.objectGame.x < state.objectGame.limitX) {
					state.objectGame.x++
				}
			}
			let interval
			keybordBtn.addEventListener('mousedown', function() {
				if(event.button === 0) {
					interval = setInterval( oneUnitMove, 10)
				}
			})
			keybordBtn.addEventListener('mouseup', function() {
				clearInterval(interval)  
			})
			
		}


	}
})