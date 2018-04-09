<template>
  <div class="lsdt">
    <div class="lsdtHead">
      <HeadCet></HeadCet> 
      <div class="lsdtMain">
        <div class="lsdtMainCon">
          <div class="lsdtMainConLeft">
            <h3><span></span>楼市动向 - NEWS</a></h3>
            <News class="news"></News>
            <a class="btn">点击加载更多↓</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadCet from '../components/HeadCet.vue'
import News from '../components/News.vue'
  export default {
    components:{
      HeadCet,
      News
    }
  }
</script>

<style>
.lsdt{
  width: 100%;
}
.lsdtMain{
  width: 100%;
  height: auto;
  background: /*lime*/;
  margin-top: 60px;
  overflow: hidden;
  margin-bottom: 100px;
}
.lsdtMainCon{
  width: 1277px;
  height: 600px;
  background-image: url(../assets/banner.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  float: right;
}
.lsdtMainConLeft{
  width: 594px;
  height: 600px;
  background: white;
  padding-bottom: 10px;
}
.lsdtMainConLeft h3{
    overflow: hidden;
}
.lsdtMainConLeft h3 span{
    display: inline-block;
    width: 18px;
    height: 18px;
    background: black;
    float: left;
    margin-right: 15px;
}
.lsdtMainConLeft .btn{
  display: block;
  width: 95px;
  margin: 20px auto;
}
.lsdtMainConLeft .btn:hover{
  cursor: pointer;
}

</style>