"use strict";(self["webpackChunkvue_oldbook"]=self["webpackChunkvue_oldbook"]||[]).push([[353],{1353:function(s,t,i){i.r(t),i.d(t,{default:function(){return p}});var a=function(){var s=this,t=s._self._c;return t("div",{staticClass:"detail"},[t("header",[t("div",{directives:[{name:"show",rawName:"v-show",value:s.isShow,expression:"isShow"}],staticClass:"header-return"},[t("i",{staticClass:"iconfont icon-fanhui",on:{click:s.goBack}}),t("i",{staticClass:"iconfont icon-index"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:!s.isShow,expression:"!isShow"}],staticClass:"header-bar"},[t("i",{staticClass:"iconfont icon-fanhui",on:{click:s.goBack}}),s._m(0),t("i",{staticClass:"iconfont icon-index"})])]),t("section",{ref:"wrapper"},[t("div",[t("div",{staticClass:"swiper-main"},[t("img",{staticStyle:{width:"100%",height:"300px"},attrs:{src:s.goods.imgUrl,alt:""}})]),t("div",{staticClass:"goods-name"},[t("h1",[s._v(s._s(s.goods.name))]),t("div",[s._v(s._s(s.goods.content))])]),t("div",{staticClass:"goods-price"},[t("div",{staticClass:"oprice"},[t("span",[s._v("￥")]),t("b",[s._v(s._s(s.goods.price))])]),t("div",{staticClass:"pprice"},[t("span",[s._v("价格:")]),t("del",[s._v("￥"+s._s(s.goods.reprice))])])]),t("div",{staticClass:"details"},[s._m(1),t("div",{staticClass:"details-content"},[t("h3",[s._v("作者简介")]),t("p",[s._v(s._s(s.goods.author))]),t("p",[s._v(s._s(s.goods.author_content))])]),t("div",{staticClass:"details-content"},[t("h3",[s._v("内容简介")]),t("p",[s._v(s._s(s.goods.synopsis))])]),t("div",[t("img",{staticStyle:{width:"100%",height:"300px"},attrs:{src:s.goods.imgUrl,alt:""}}),t("img",{staticStyle:{width:"100%",height:"300px"},attrs:{src:s.goods.imgUrl,alt:""}})])])])]),t("footer",[t("div",{staticClass:"add-cart",on:{click:s.addCart}},[s._v("加入购物车")]),t("div",[s._v("立即购买")])])])},e=[function(){var s=this,t=s._self._c;return t("div",[t("span",[s._v("商品详情")]),t("span",[s._v("商品评价")])])},function(){var s=this,t=s._self._c;return t("div",{staticClass:"details-shpo"},[t("span",[s._v("商品详情")])])}],o=i(5109),r=i(697),c=i(9324),d=i(4843),n={name:"Detail",data(){return{BetterScroll:"",isShow:!0,goods:{}}},components:{swiper:r.swiper,swiperSlide:r.swiperSlide},created(){this.id=this.$route.query.id,this.getData()},mounted(){this.BetterScroll=new o.ZP(this.$refs.wrapper,{probeType:3,bounce:!1,click:!0}),this.BetterScroll.on("scroll",(s=>{let t=Math.abs(s.y);this.isShow=!(t>-0)}))},methods:{async getData(){let s=this.$route.query.id,t=await c.Z.$axios({url:"/api/goods/id",params:{id:s}});this.goods=t},addCart(){let s=this.$route.query.id;c.Z.$axios({url:"/api/addCart",method:"post",data:{goodsId:s},headers:{token:!0}}).then((s=>{console.log(s),s.success&&(0,d.Toast)("添加购物车成功")}))},goBack(){this.$router.back()}}},l=n,h=i(1001),v=(0,h.Z)(l,a,e,!1,null,"6e069f82",null),p=v.exports}}]);
//# sourceMappingURL=353.b5615034.js.map