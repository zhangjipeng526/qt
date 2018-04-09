<template>
	<div class="lanWrap">
      <div class="lanf" v-for="i in arr">
      <img :src="i.img" alt="">
      <a href=""><h3>{{i.name}}</h3></a>
      <p>地区：{{i.des}}</p>
      <p>户型：{{i.huxing}}</p>
      <p>价格：{{i.price}}元/m²</p>
    </div>
  </div>             
</template>

<script>
  export default {
       
        data(){
            return {
                arr:[]
            }
        },
        watch:{
          '$route'(){
            if(this.$route.params.fenlei==1){
              this.jgr="全新楼盘"
            }
            if(this.$route.params.fenlei==2){
              this.jgr="二手楼盘"
            }
            this.$http.post('http://localhost:3000/New',{fenlei:this.$route.params.fenlei},{emulateJSON:true}).then(e=>this.arr=e.body)
          }
        },
        created(){
            this.$http.post('http://localhost:3000/New',{fenlei:this.$route.params.fenlei},{emulateJSON:true}).then(e=>this.arr=e.body)
        }
  }
    

</script>

<style>
.lanf{
  width: 33%;
  margin: .16768%;
  float: left;
  background: white;
  margin-bottom: 30px;
}
.lanf img{
  width: 100%;
}
.lanf h3,.lpzs .lan p{
  text-indent: 16px;
}
.lanf h3{
  font-size: 16px;
  margin: 25px 0;
}
</style>
