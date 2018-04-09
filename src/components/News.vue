<template>
  <div class="news">
      <dl v-for="i in arr">
          <dt>
              <a href=""><img src="../assets/news.jpg" alt=""></a>
          </dt>
          <dd>
              <a href=""><h3>{{i.tit}}</h3></a>
              <p class="span">{{i.date}}</p>
              <p>{{i.address}}</p>
          </dd>
      </dl>
  </div>
</template>

<script>
  export default {
        data(){
            return {
                arr:[]
            }
        },
        created(){
            this.$http.post('http://localhost:3000/News',{fenlei:this.a},{emulateJSON:true}).then(e=>this.arr=e.body)
        }
  }
    

</script>

<style>
.news{
    margin-top: 40px;
}
.news dl{overflow: hidden;margin-top: 20px}
.news dl dt{
    width: 100px;
    height: 100px;
    float: left;
}
.news dl dt img{
    width: 100%;
}
.news dl dd{
    width: 484px;
    float: right;
}
.news dl dd p{
    margin: 8px 0;

}
.news dl dd p.span{
    color: #3A79E8;
}
</style>
