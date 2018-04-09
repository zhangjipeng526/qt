<template>
  <div class="lxwm">
    <HeadCet></HeadCet>
    <div class="lxwmMain">
      <div class="lxwmMainLeft">
        <h3><span></span>联系我们 - CONTACT</a></h3>
        <div class="lxwmMainLan">
          <dl v-for="i in 3">
            <a href=""><dt>Tom</dt></a>
            <dd>
              188 0000 0000  /  008-6666 6666
            </dd>
          </dl>
        </div>
        <p class="lxwmMainp">我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能设计出最具专业水准的网站。想创建一个简单的单页式站点，还是一个专业的公司网站，亦或是一个别具一格的博客？云建站可以满足您的所有需求。我们是响应式网站的倡导者，所有前端页面代码均采用HMLT5和CSS3实现。</p>
        <p>邮箱：info@realestate.com</p>
        <p>地址：上海市静安区南京西路时代大厦</p>
      </div>
      <div class="lxwmMainRight">
        <input type="text" placeholder="称呼">
        <input type="email" name="" id="" placeholder="邮箱">
        <input type="tel" name="" id="" placeholder="电话">
        <textarea placeholder="内容" rows="" cols="43" style="max-width: 318px;height:56px;outline:none;border: none;border-bottom: solid 1px #cccccc;background: none;"></textarea>
        <input type="text" placeholder="验证码">
        <button>提交</button>
      </div>
    </div>
  </div>
</template>
<script>
import HeadCet from '../components/HeadCet.vue'
  export default {
    components:{
      HeadCet
    }
  }
</script>
<style>
.lxwm .yc{
  opacity: 0;
}
.lxwmMain{
  width: 1190px;
  height: auto;
  background: /*lime*/;
  margin: 60px auto 100px;
  overflow: hidden;
}
.lxwmMainLeft{
  width: 726px;
  float: left;
}
.lxwmMainLeft h3{
    overflow: hidden;
}
.lxwmMainLeft h3 span{
    display: inline-block;
    width: 18px;
    height: 18px;
    background: black;
    float: left;
    margin-right: 15px;
}
.lxwmMainLan{
  margin: 44px 0;
  padding: 15px 0;
  border-top: dotted 1px #DDDDDD;
  border-bottom: dotted 1px #DDDDDD;
  overflow: hidden;
}
.lxwmMainp{
  margin-bottom: 30px;
}
.lxwmMainLan dl{
  float: left;
  width: 33%;
  margin: 1/6 0;
}
.lxwmMainLan dt{
  font-weight: bold;
  margin-bottom: 5px;
}
.lxwmMainLan dd{
  color: #0000CD;
}
.lxwmMainRight{
  width: 310px;
  padding: 33px 40px;
  background: #F7F7F7;
  float: right;
}
.lxwmMainRight input{
  width: 315px;
  height: 30px;
  margin: 5px 0;
}
.lxwmMainRight button{
  border: none;
  background: #393939;
  width: 116px;
  height: 30px;
  outline: none;
  color: white;
}
.lxwmMainRight input{
  outline: none;
  border: none;
  border-bottom: solid 1px #cccccc;
  background: none;
}
</style>