webpackJsonp([1],{"+FP5":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._v(" "),r("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),r("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),r("br"),t._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),r("li",[r("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),r("li",[r("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],i={render:a,staticRenderFns:n};e.a=i},"6y66":function(t,e){},DH0F:function(t,e){},F9Td:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a",{attrs:{href:"https://bl.ocks.org/mbostock/3127661b6f13f9316be745e77fdfb084"}},[t._v(" Drag & Zoom II")]),t._v(" "),r("svg",{attrs:{width:t.width,height:t.height}},[r("g",{attrs:{transform:t.transform}},t._l(t.points,function(t,e){return r("circle",{key:e,attrs:{cx:t.x,cy:t.y,r:2.5}})}))])])},n=[],i={render:a,staticRenderFns:n};e.a=i},JTyK:function(t,e,r){"use strict";function a(t){r("DH0F")}var n=r("xMlo"),i=r("lXXr"),s=r("VU/8"),o=a,c=s(n.a,i.a,o,"data-v-be63a22c",null);e.a=c.exports},M93x:function(t,e,r){"use strict";function a(t){r("6y66")}var n=r("xJD8"),i=r("g/27"),s=r("VU/8"),o=a,c=s(n.a,i.a,o,null,null);e.a=c.exports},"MOH+":function(t,e,r){"use strict";var a=r("OQ1w"),n=r("F9Td"),i=r("VU/8"),s=i(a.a,n.a,null,null,null);e.a=s.exports},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),n=r("M93x"),i=r("YaEn");a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,template:"<App/>",components:{App:n.a}})},Nh5i:function(t,e){},OQ1w:function(t,e,r){"use strict";var a=r("vwbq");e.a={name:"zoom",data:function(){return{width:960,height:500,transform:"",zoom:a.g().scaleExtent([.5,8]).on("zoom",this.handleZoom),points:[]}},methods:{handleZoom:function(){this.transform=a.e.transform},phyllotaxis:function(t){var e=this,r=Math.PI*(3-Math.sqrt(5));return function(a){var n=t*Math.sqrt(a),i=r*a;return{x:e.width/2+n*Math.cos(i),y:e.height/2+n*Math.sin(i)}}},initPoints:function(){this.points=a.d(2e3).map(this.phyllotaxis(10))}},mounted:function(){this.initPoints(),this.wrapper=a.f(this.$el),this.zoom(this.wrapper)}}},YaEn:function(t,e,r){"use strict";var a=r("7+uW"),n=r("/ocq"),i=r("qSdX"),s=r("MOH+"),o=r("JTyK");a.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Hello",component:i.a},{path:"/zoom",name:"Zoom",component:s.a},{path:"/circle-dragging-i",name:"circle-dragging-i",component:o.a},{path:"*",name:"404",component:i.a}]})},"g/27":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("ul",[r("router-link",{attrs:{to:"circle-dragging-i"}},[t._v("circle-dragging-i")]),t._v(" "),r("router-link",{attrs:{to:"zoom"}},[t._v("zoom")])],1),t._v(" "),r("router-view")],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},lXXr:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a",{attrs:{href:"https://bl.ocks.org/mbostock/22994cc97fefaeede0d861e6815a847e"}},[t._v(" Circle Dragging I")]),t._v(" "),r("svg",{attrs:{width:t.width,height:t.height}},t._l(t.circles,function(e,a){return r("circle",{key:a,class:{active:t.activeCircle==a},style:{fill:t.color(a)},attrs:{cx:e.x,cy:e.y,r:t.radius}},[r("text",[t._v(t._s(a)+" ")])])}))])},n=[],i={render:a,staticRenderFns:n};e.a=i},pMZz:function(t,e,r){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},qSdX:function(t,e,r){"use strict";function a(t){r("Nh5i")}var n=r("pMZz"),i=r("+FP5"),s=r("VU/8"),o=a,c=s(n.a,i.a,o,"data-v-68599bd2",null);e.a=c.exports},xJD8:function(t,e,r){"use strict";e.a={name:"app"}},xMlo:function(t,e,r){"use strict";var a=r("vwbq");e.a={name:"circle-dragging",data:function(){return{width:960,height:500,radius:32,circles:[],wrapper:null,color:a.a().range(a.b),drag:a.c().on("start",this.dragStarted).on("drag",this.dragged).on("end",this.dragended),activeCircle:-1}},methods:{initCircles:function(){var t=this.width,e=this.height,r=this.radius;this.circles=a.d(20).map(function(){return{x:Math.round(Math.random()*(t-2*r)+r),y:Math.round(Math.random()*(e-2*r)+r)}})},initDrag:function(){var t=this.wrapper.selectAll("circle").data(this.circles);this.drag(t)},dragStarted:function(t,e){this.activeCircle=e},dragged:function(t,e){this.circles[e].x=a.e.x,this.circles[e].y=a.e.y},dragended:function(){this.activeCircle=-1}},mounted:function(){this.wrapper=a.f(this.$el),this.initCircles(),this.$nextTick(this.initDrag)}}}},["NHnr"]);