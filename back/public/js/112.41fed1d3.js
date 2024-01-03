"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[112],{112:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var i=s(4324),a=s(144),r=a["default"].extend({name:"translatable",props:{height:Number},data:()=>({elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}),computed:{imgHeight(){return this.objHeight()}},beforeDestroy(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions(){const t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight(){throw new Error("Not implemented !")},translate(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),n=s(7678);const l=(0,n.Z)(r);var o=l.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:()=>({isBooted:!1}),computed:{styles(){return{display:"block",opacity:this.isBooted?1:0,transform:`translate(-50%, ${this.parallax}px)`}}},mounted(){this.init()},methods:{init(){const t=this.$refs.img;t&&(t.complete?(this.translate(),this.listeners()):t.addEventListener("load",(()=>{this.translate(),this.listeners()}),!1),this.isBooted=!0)},objHeight(){return this.$refs.img.naturalHeight}},render(t){const e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"},s=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),i=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:`${this.height}px`},on:this.$listeners},[s,i])}}),c=function(){var t=this,e=t._self._c;return e("div",[e(o,{attrs:{src:s(9122),height:"500"}},[e("div",{staticClass:"d-flex flex-column fill-height justify-center align-center text-white"},[e("h1",{staticClass:"shadowBlack",staticStyle:{"font-size":"50px"}},[t._v(" DEPOSER VOS DECHETS SEREINEMENT ")]),e("h4",{staticClass:"shadowBlack subheading",staticStyle:{"font-size":"30px"}},[t._v(" Revaloriser, Stocker et certifier pour un gage d'écoresponsabilité efficace. ")])])]),t._m(0),e(o,{staticClass:"separation",attrs:{src:s(1324),height:"200"}}),e("div",{staticClass:"flex flex-responsive flex-space-around separation",staticStyle:{"text-align":"center"}},[e("div",{staticClass:"flex-grow m10px"},[e(i.Z,{staticClass:"color1",staticStyle:{"font-size":"100px"}},[t._v("mdi-recycle")]),e("h1",[t._v("REVALORISER")]),e("p",[t._v("les matériaux collectés sont triés, recyclés et transformés autant que possible afin de leur donner une nouvelle vie. Cette approche durable réduit la dépendance à l'égard des décharges et minimise l'impact environnemental global.")])],1),e("div",{staticClass:"flex-grow m10px"},[e(i.Z,{staticClass:"color1",staticStyle:{"font-size":"100px"}},[t._v("mdi-home-silo")]),e("h1",[t._v("STOCKER")]),e("p",[t._v("Les installations sont conçues de manière à garantir que les déchets dangereux ou sensibles sont manipulés, stockés et éliminés conformément aux normes de sécurité les plus strictes, préservant ainsi la santé publique et l'environnement. ")])],1),e("div",{staticClass:"flex-grow m10px"},[e(i.Z,{staticClass:"color1",staticStyle:{"font-size":"100px"}},[t._v("mdi-file-certificate")]),e("h1",[t._v("CERTIFIER")]),e("p",[t._v("Cette certification apporte une assurance aux parties prenantes quant à la conformité aux meilleures pratiques environnementales et à l'engagement envers une gestion responsable des déchets.")])],1)]),e("div",{staticClass:"flex flex-responsive flex-space-around separation"},[e("div",{staticClass:"flex-grow m10px",staticStyle:{"text-align":"center","margin-right":"100px","margin-left":"100px"}},[e("br"),e("br"),e("br"),e("h1",[t._v("DEPOSER MES DECHETS")]),e("br"),e("p",{staticStyle:{"font-weight":"bold"}},[t._v("Utiliser le lien suivant pour déposer vos déchets")]),e("div",{staticClass:"flex flex-center"},[e("link-button",{staticClass:"color1Bg borderRadius",staticStyle:{width:"250px"},attrs:{url:"/deposit",text:"DEPOSER MES DECHETS",icon:"mdi-dump-truck"}})],1),e("br")]),e("div",{staticClass:"borderRadius color3Bg flex-grow m10px"},[e("div",{staticClass:"m10px"},[e(i.Z,{staticClass:"m5px",staticStyle:{"font-size":"30px"}},[t._v("mdi-arrow-right-circle-outline")]),t._m(1),e(i.Z,{staticClass:"m5px",staticStyle:{"font-size":"30px"}},[t._v("mdi-map-marker")]),t._m(2),e(i.Z,{staticClass:"m5px",staticStyle:{"font-size":"30px"}},[t._v("mdi-sprout")]),t._m(3)],1),e("br")])]),e(o,{staticClass:"separation",attrs:{src:s(2767),height:"400"}}),e("h1",{staticClass:"separation",staticStyle:{"text-align":"center"}},[t._v("DECOUVREZ NOTRE EQUIPE")]),e("br"),e("div",{staticClass:"flex flex-space-around",staticStyle:{"text-align":"center"}},[e("div",{staticClass:"flex-grow m10px"},[e("img",{staticClass:"borderRadius100",attrs:{width:"200px",src:s(5071)}}),e("h3",[t._v("Responsable Web")]),e("p",[t._v("Florent Banquart")])]),e("div",{staticClass:"flex-grow m10px"},[e("img",{staticClass:"borderRadius100",attrs:{width:"200px",src:s(5820)}}),e("h3",[t._v("Eco Gérante")]),e("p",[t._v("Maria Ross")])]),e("div",{staticClass:"flex-grow m10px"},[e("img",{staticClass:"borderRadius100",attrs:{width:"200px",src:s(5621)}}),e("h3",[t._v("Chef de Carrière")]),e("p",[t._v("Erwin Smith")])])])],1)},p=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"separation",staticStyle:{"text-align":"center","margin-right":"100px","margin-left":"100px"}},[e("h1",[t._v("UNE DECHETTERIE PROPRE")]),e("br"),e("p",[t._v("La déchetterie exemplifie notre engagement envers un environnement propre et sain. Immaculée et bien entretenue, notre installation reflète notre dévouement à maintenir des normes élevées en matière de propreté et d'hygiène. Les aires de tri sont organisées de manière méthodique, facilitant la séparation efficace des matériaux recyclables. Des procédures rigoureuses de gestion des déchets assurent non seulement la propreté immédiate du site, mais également la réduction de l'impact environnemental global. En outre, notre équipe dédiée veille à ce que les déchets soient stockés et manipulés avec soin, garantissant ainsi un environnement sûr pour le personnel et les visiteurs. Chez nous, une déchetterie propre va au-delà de l'apparence, c'est une démonstration tangible de notre engagement envers la durabilité et la qualité environnementale.")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"m5px"},[t._v("Déposer vos déchets n'a jamais été aussi simple ! Cliquez sur le bouton ci-dessous pour accéder à "),e("strong",[t._v("notre formulaire convivial")]),t._v(".")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"m5px"},[t._v("En quelques étapes faciles, vous pourrez indiquer les détails de vos déchets et "),e("strong",[t._v("choisir la déchetterie la plus proche")]),t._v(".")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"m5px"},[t._v("Ensemble, faisons un pas de plus vers un "),e("strong",[t._v("environnement plus propre et durable")]),t._v(" !")])}],d=s(760),u={name:"pageHome",components:{linkButton:d.Z},methods:{}},h=u,m=s(1001),g=(0,m.Z)(h,c,p,!1,null,null,null),v=g.exports},2767:function(t,e,s){t.exports=s.p+"img/decheterie.0157e814.jpg"},5621:function(t,e,s){t.exports=s.p+"img/erwin.b26b9880.jpg"},5071:function(t,e,s){t.exports=s.p+"img/florent.223e60a6.png"},9122:function(t,e,s){t.exports=s.p+"img/img1.0f9cc230.jpg"},1324:function(t,e,s){t.exports=s.p+"img/img2.dd9f9d8c.jpg"},5820:function(t,e,s){t.exports=s.p+"img/maria.5cc83393.jpg"}}]);
//# sourceMappingURL=112.41fed1d3.js.map