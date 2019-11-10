<template>
  <div class="keyboard__wrapper"> <!-- правое поле для контроллера -->
    <div class="controller__wrapper"> <!-- обёртка для дополнительной стилизации -->
      <div class="controller" > <!-- обертка для выравнивания контроллера по центру -->
        <div class="key__up" v-on:mouseover="moveObjectUp" id="up">
          <div class="arrow"></div>
        </div> <!-- Айдишники необходимы для добавления лисенеров для реализации события "пока ЛКМ нажата" см. index.js-->
        <div class="key__left" v-on:mouseover="moveObjectLeft" id="left">
          <div class="arrow"></div>
        </div>
        <div class="key__down" v-on:mouseover="moveObjectDown" id="down">
          <div class="arrow"></div>
        </div>
        <div class="key__right" v-on:mouseover="moveObjectRight" id="right">
          <div class="arrow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
export default {
  name: 'Scene',
  props: {
    msg: String
  },
  data() {
    return {
      
    }
  },
  methods: {
    ...mapMutations(['moveObjectDown', 'moveObjectRight', 'moveObjectLeft', 'moveObjectUp']),
  },
  computed: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .controller__wrapper {
    width: 100%;
    height: 100%;
    
  }
  .controller {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 10%;
  }
  .key__up, .key__left, .key__down, .key__right {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    position: absolute;
  }
  .key__up {
    transform: translateY(-105%);
  }
  .key__left {
    transform: translateX(-105%) rotate(-90deg);
  }
  .key__down {
    transform: translateY(0) rotate(180deg);
  }
  .key__right {
    transform: translateX(105%) rotate(90deg);
  }
  .keyboard__wrapper {
    display: inline-block;
    position: relative;
    border: 1px solid green;
    width: 500px;
    height: 500px;
  }
  .arrow {
    border: 1px solid black;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 30%;
    left: 40%;
    border-bottom: none;
    border-right: none;
    transform: rotate(45deg);
  }
  .arrow:after {
    content: '';
    height: 60px;
    width: 1px;
    background-color: black;
    display: block;
    transform-origin: top;
    transform: rotate(-45deg);
  }
</style>