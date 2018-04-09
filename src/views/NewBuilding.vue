<template>
  <div id="NewBuilding">   
      <HeadCet></HeadCet>    
    <div class="newMain">
      <Main></Main>
    </div>
  </div>
</template>

<script>
import HeadCet from '../components/HeadCet.vue'
import Main from '../components/Main.vue'

  export default {
    components:{
      HeadCet,
      Main
    }
  }
</script>

<style>
#NewBuilding{
  width: 100%;
}
#NewBuilding .yc{
  opacity: 0;
}
.newMain{
  width: 1190px;
  margin: 0 auto;
  background: /*lime*/;
  margin-top: 60px;
  margin-bottom: 100px;
}
</style>

