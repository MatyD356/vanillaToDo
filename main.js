!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class o{constructor(e,t,n){this.name=e,this.date=t,this.proiority=n,this.projectToDo=[]}changeName(e){this.name=e}changeDate(e){this.date=e}addToDo(e){this.projectToDo.push(e)}removeToDo(e){}}let r=new o("Everyday",new Date),c=new class{constructor(e,t,n,o,r){this.title=e,this.desc=t,this.date=n,this.priority=o,this.checked=r}changeTitle(e){this.priority=e}changeDesc(e){this.desc=e}changeDate(e){this.date=e}changePriority(e){this.priority=e}checkDone(){this.checked=!0}}("loundry","dirty socks",new Date,1,!1);console.log(c,r);let d=new class{constructor(){this.projects=[],this.aside=document.createElement("aside")}projectsList(){return this.projects}addProjectButton(){const e=document.createElement("button");e.classList.add("btn","add-project"),e.textContent="ADD PROJECT",e.addEventListener("click",()=>{this.addNewProjectForm()}),this.aside.appendChild(e)}addNewProject(){if(document.querySelector(".project-form")){let e=null,t=null;/([A-Z]){3,}/gi.test(document.querySelector(".name-input").value)?e=document.querySelector(".name-input").value:alert("bad name"),/(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/.test(document.querySelector(".date-input").value)?t=document.querySelector(".date-input").value:alert("no date"),t&&e&&(this.projects.push(new o(e,t)),this.removeNewProjectForm(),this.addProjectButton())}}removeProject(e){this.projects.length>=e&&this.projects.splice(e,1)}removeProjectButton(){document.querySelector(".add-project")&&document.querySelector(".add-project").remove()}renderProjects(){document.querySelector(".project-container")&&document.querySelector(".project-container").remove();const e=document.createElement("div");e.classList.add("project-container");for(let t=0;t<this.projects.length;t++){const n=document.createElement("div");n.classList.add("project-div");const o=document.createElement("h2");o.classList.add("project-title"),o.textContent=this.projects[t].name,n.appendChild(o);const r=document.createElement("div");r.classList.add("project-due-date"),r.textContent=this.projects[t].date,n.appendChild(r);const c=document.createElement("button");c.id=t,c.textContent="delete",c.addEventListener("click",e=>{e.target.parentElement.remove(),this.removeProject(e.target.id)}),n.appendChild(c),e.appendChild(n)}this.aside.appendChild(e)}addNewProjectForm(){this.removeProjectButton();const e=document.createElement("div");e.classList.add("project-form","hidden"),this.aside.appendChild(e);const t=document.createElement("p");t.classList.add("add-project-form-title"),t.textContent="Project name",e.appendChild(t);const n=document.createElement("input");n.classList.add("name-input","inpt"),n.type="text",e.appendChild(n);const o=document.createElement("p");o.classList.add("add-project-form-title"),o.textContent="Project date",e.appendChild(o);const r=document.createElement("input");r.classList.add("date-input","inpt"),r.type="date",e.appendChild(r);const c=document.createElement("div");e.appendChild(c);const d=document.createElement("button");d.classList.add("btn","new-project-form-add"),d.textContent="ADD",d.addEventListener("click",()=>{this.addNewProject(),this.renderProjects()}),c.appendChild(d);const i=document.createElement("button");i.classList.add("btn","new-project-form-cancel"),i.textContent="CANCEL",i.addEventListener("click",()=>{this.removeNewProjectForm(),this.addProjectButton()}),c.appendChild(i)}removeNewProjectForm(){document.querySelector(".project-form")&&document.querySelector(".project-form").remove()}render(e){this.aside.classList.add("aside-menu"),e.appendChild(this.aside),this.renderProjects(),this.addProjectButton()}},i=new class{render(e){let t=document.createElement("main");t.classList.add("main-content"),e.appendChild(t)}};d.render(document.querySelector("#content")),i.render(document.querySelector("#content"))}]);