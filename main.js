!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let r=new class{constructor(e,t){this.projectName=e,this.date=t,this.projectToDo=[]}changeName(e){this.name=e}changeDate(e){this.date=e}addToDo(e){this.projectToDo.push(e)}removeToDo(e){}}("Everyday",new Date),o=new class{constructor(e,t,n,r,o){this.title=e,this.desc=t,this.date=n,this.priority=r,this.checked=o}changeTitle(e){this.priority=e}changeDesc(e){this.desc=e}changeDate(e){this.date=e}changePriority(e){this.priority=e}checkDone(){this.checked=!0}}("loundry","dirty socks",new Date,1,!1);console.log(o,r);let c=new class{render(){}},i=new class{render(e){let t=document.createElement("aside");t.classList.add("aside-menu"),e.appendChild(t)}},s=new class{render(e){let t=document.createElement("main");t.classList.add("main-content"),e.appendChild(t)}};i.render(document.querySelector("#content")),s.render(document.querySelector("#content")),c.render()}]);