(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{3:function(e,t,s){"use strict";var i=s(0),a={props:{message:String,className:{type:String,default:""},position:{type:String,default:"middle"},iconClass:{type:String,default:""}},data:function(){return{visible:!1}},computed:{customClass:function(){var e=[];switch(this.position){case"top":e.push("is-placetop");break;case"bottom":e.push("is-placebottom");break;default:e.push("is-placemiddle")}return e.push(this.className),""==this.iconClass&&e.push("exclude-icon"),e.join(" ")}}},n=s(1),o=Object(n.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"dd-toast-pop"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"dd-toast",class:e.customClass},[""!==e.iconClass?s("i",{staticClass:"dd-toast-icon",class:e.iconClass}):e._e(),e._v(" "),s("span",{staticClass:"dd-toast-text"},[e._v(e._s(e.message))])])])},[],!1,null,null,null);o.options.__file="toast.vue";var l=o.exports,c=i.a.extend(l),r=[],u=function(e){e.target.parentNode&&e.target.parentNode.removeChild(e.target)};c.prototype.close=function(){this.visible=!1,this.$el.addEventListener("transitionend",u),this.closed=!0,function(e){e&&r.push(e)}(this)};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.duration||3e3,s=function(){if(r.length>0){var e=r[0];return r.splice(0,1),e}return new c({el:document.createElement("div")})}();return s.closed=!1,clearTimeout(s.timer),s.message="string"==typeof e?e:e.message,s.position=e.position||"middle",s.className=e.className||"",s.iconClass=e.iconClass||"",s.closeCallback=e.closeCallback||function(){},document.body.appendChild(s.$el),i.a.nextTick(function(){s.visible=!0,s.$el.removeEventListener("transitionend",u),s.timer=setTimeout(function(){s.closed||s.close(),s.closeCallback&&"function"==typeof s.closeCallback&&s.closeCallback()},t)}),s}}}]);
//# sourceMappingURL=main.d86ae47a.js.map