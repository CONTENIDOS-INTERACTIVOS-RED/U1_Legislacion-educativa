(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sintesis","chunk-4e410830"],{"0666":function(e,t,a){},"13f0":function(e,t,a){"use strict";a("450b")},"159b":function(e,t,a){var n=a("da84"),r=a("fdbc"),i=a("17c2"),o=a("9112");for(var s in r){var c=n[s],l=c&&c.prototype;if(l&&l.forEach!==i)try{o(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(e,t,a){"use strict";var n=a("b727").forEach,r=a("a640"),i=r("forEach");e.exports=i?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},3079:function(e,t,a){"use strict";a("0666")},"30b2":function(e,t,a){e.exports=a.p+"img/sintesis.77dfc817.png"},"3cd8":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid banner-interno"},[a("div",{staticClass:"banner-interno__fondo"}),a("div",{staticClass:"container"},[a("div",{staticClass:"banner-interno__titulo py-5"},[a("h3",{staticClass:"text-uppercase",domProps:{innerHTML:e._s("Unidad "+e.globalData.numeroUnidad+". "+e.globalData.tituloUnidad)}}),a("h2",{staticClass:"mb-0 text-uppercase",domProps:{innerHTML:e._s(e.subTitulo)}})])])])},r=[],i={name:"BannerInterno",props:{titulo:{type:String,default:""},subTitulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},o=i,s=(a("8385"),a("2877")),c=Object(s["a"])(o,n,r,!1,null,null,null);t["default"]=c.exports},"450b":function(e,t,a){},"52e5":function(e,t,a){e.exports=a.p+"img/cc.58a75e32.svg"},"60c7":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"curso-main-container creditos-vista"},[a("BannerInterno",{attrs:{subTitulo:"SÍNTESIS"}}),e._m(0)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[n("p",{staticClass:"mb-4 mb-md-5"},[e._v("La Unidad 1: Estructura de las normas en Colombia. Constitución Política de Colombia, Decreto 1075 del 2015, analiza las bases jurídicas que regulan el sistema educativo colombiano, comenzando por la Constitución Política de Colombia de 1991, la cual garantiza el derecho fundamental a la educación como un servicio público esencial. Además, se estudia el Decreto 1075 del 2015, que consolida la normatividad educativa en un único texto y establece los lineamientos para asegurar el acceso a una educación de calidad. Comprender la estructura de estas normas permite visualizar cómo el marco legal orienta las políticas educativas del país, promoviendo la inclusión, la equidad y la formación integral de los ciudadanos.")]),n("figure",[n("img",{attrs:{src:a("30b2"),alt:"Texto que describa la imagen"}})])])}],i=(a("d3b7"),a("159b"),a("3cd8")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[e.allRound&&"footer__all-round"]},[a("div",{staticClass:"row align-items-center justify-content-center"},[e._m(0),a("div",{staticClass:"col-12 col-sm"},[a("p",{staticClass:"mb-2 text-small"},[e._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")]),a("p",{staticClass:"mb-0 text-small"},[e._v(" Base v"+e._s(e.versiones.base)+" - Paquete v"+e._s(e.versiones.pkg))])])])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-auto mb-2 mb-sm-0"},[n("img",{attrs:{src:a("52e5")}})])}],c={name:"Footer",props:{allRound:{type:Boolean,default:!1}},computed:{versiones:function(){return{base:this.$package.version,pkg:this.$package.dependencies["ecored-base-pkg"]}}}},l=c,u=(a("13f0"),a("2877")),d=Object(u["a"])(l,o,s,!1,null,null,null),f=d.exports,p={name:"Creditos",components:{BannerInterno:i["default"],Footer:f},data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos},creditosAdicionales:function(){return this.$config.creditosAdicionales}},methods:{renderText:function(e){var t="";return Array.isArray(e)?e.forEach((function(e,a){t+=(a?"<br/>":"")+e})):t+=e,t}}},m=p,b=(a("3079"),Object(u["a"])(m,n,r,!1,null,null,null));t["default"]=b.exports},"65f0":function(e,t,a){var n=a("861d"),r=a("e8b5"),i=a("b622"),o=i("species");e.exports=function(e,t){var a;return r(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?n(a)&&(a=a[o],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},8385:function(e,t,a){"use strict";a("d36b")},a640:function(e,t,a){"use strict";var n=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&n((function(){a.call(null,t||function(){throw 1},1)}))}},b727:function(e,t,a){var n=a("0366"),r=a("44ad"),i=a("7b0b"),o=a("50c4"),s=a("65f0"),c=[].push,l=function(e){var t=1==e,a=2==e,l=3==e,u=4==e,d=6==e,f=7==e,p=5==e||d;return function(m,b,v,g){for(var E,h,C=i(m),_=r(C),y=n(b,v,3),S=o(_.length),x=0,I=g||s,O=t?I(m,S):a||f?I(m,0):void 0;S>x;x++)if((p||x in _)&&(E=_[x],h=y(E,x,C),e))if(t)O[x]=h;else if(h)switch(e){case 3:return!0;case 5:return E;case 6:return x;case 2:c.call(O,E)}else switch(e){case 4:return!1;case 7:c.call(O,E)}return d?-1:l||u?u:O}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d36b:function(e,t,a){},e8b5:function(e,t,a){var n=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);
//# sourceMappingURL=sintesis.6f1dfe0b.js.map