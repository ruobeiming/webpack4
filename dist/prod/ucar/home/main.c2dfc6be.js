(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{19:function(t,e,n){"use strict";e.a={methods:{dispatch:function(t,e,n){for(var a=this.$parent||this.$root,o=a.$options.componentName;a&&(!o||o!==t);)(a=a.$parent)&&(o=a.$options.componentName);a&&a.$emit.apply(a,[e].concat(n))},broadcast:function(t,e,n){(function t(e,n,a){this.$children.forEach(function(o){o.$options.componentName===e?o.$emit.apply(o,[n].concat(a)):t.apply(o,[e,n].concat([a]))})}).call(this,t,e,n)}}}},21:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s});var a=/^\d{13}$/;function o(t){var e=t+"";if(a.test(e))return new Date(e-0);var n=Date.parse(e);return isNaN(n)?(n=e.replace(/-/g,"/"),n=Date.parse(n),isNaN(n)?t:new Date(n)):new Date(n)}function i(t){return o(t)instanceof Date}function r(t,e){if(!i(t))return t;var n={"M+":(t=o(t)).getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};if(/(y+)/.test(e))for(var a in e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)),n)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?n[a]:("00"+n[a]).substr((""+n[a]).length)));return e}function s(t){if(!i(t))throw new Error(t+"is not valid date");return 0==(t=o(t)).getYear()%4&&(t.getYear()%100!=0||t.getYear()%400==0)}},22:function(t,e,n){t.exports=n.p+"static/images/nx.a48bf1b.png"},29:function(t,e,n){"use strict";n.r(e);n(4);var a=n(19),o=n(21);var i={name:"home",mixins:[a.a],data:function(){return{loaded:!1,now:Object(o.a)(new Date,"yyyy-MM"),isLeapYear:Object(o.b)(new Date),name:""}},components:{},methods:{},created:function(){},mounted:function(){this.name="moduleA name"}},r=n(1),s=Object(r.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("div",{staticClass:"page-body page-home"},[this._v("\n     \twelcome tohere !!!\n         "),e("div",[this._v(this._s(this.now))]),this._v(" "),e("img",{attrs:{src:n(22)}})])])},[],!1,null,null,null);s.options.__file="index.vue";e.default=s.exports}}]);
//# sourceMappingURL=main.c2dfc6be.js.map