<template>
    <div>
      <div class="lpzs">
              <h2>{{jgr}}</h2>
              <p>-News -</p>
              <div class="lanWrap">
                <div class="lan" v-for="i in arr">
                    <img :src="i.img" alt="">
                    <a href=""><h3>{{i.name}}</h3></a>
                    <p>地区：{{i.des}}</p>
                    <p>户型：{{i.huxing}}</p>
                    <p>价格：{{i.price}}元/m²</p>
                </div>
              </div>
              <a class="btn">浏览更多</a>
            </div>

    </div>
</template>

<script>
  export default {
    props:{
            a:String
        },
        data(){
            return {
                arr:[]
            }
        },
        created(){
          if(this.a==1){
            this.jgr="全新楼盘"
            this.lan="全新楼盘"
          }
          if(this.a==2){
            this.jgr="二手楼盘"
            this.lan="二手楼盘"
          }
          if(this.a==3){
            this.jgr="全新商铺"
            this.lan="商铺"
          }
            this.$http.post('http://localhost:3000/',{fenlei:this.a},{emulateJSON:true}).then(e=>this.arr=e.body)
        }
  }
    

</script>

<style>
.lan{
  width: 33%;
  margin: .16768%;
  float: left;
  background: white;
  margin-bottom: 30px;
}
.lan img{
  width: 100%;
}
.lan h3,.lpzs .lan p{
  text-indent: 16px;
}
.lan h3{
  font-size: 16px;
  margin: 25px 0;
}
</style>
