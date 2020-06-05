!function(e){var t={};function o(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t),o.d(t,"AsideMenu",(function(){return d})),o.d(t,"MainContent",(function(){return a}));class n{constructor(e,t,o){this.name=e,this.date=t,this.proiority=o,this.projectToDo=[]}changeName(e){this.name=e}changeDate(e){this.date=e}addToDo(e){this.projectToDo.push(e)}}class c{constructor(e,t,o,n){this.title=e,this.date=o,this.desc=t,this.priority=n}changeTitle(e){this.priority=e}changeDesc(e){this.desc=e}changeDate(e){this.date=e}changePriority(e){this.priority=e}}let r=new class{render(e){const t=document.createElement("nav");t.classList.add("navbar"),e.appendChild(t);let o=document.createElement("h1");o.classList.add("logo"),o.textContent="To-Do APP",t.appendChild(o)}},d=new class{constructor(){this.projects=[],this.aside=document.createElement("aside")}saveToStorage(){window.localStorage.clear(),window.localStorage.setItem("projects",JSON.stringify(this.projects))}getProjects(){window.localStorage.getItem("projects")&&(this.projects=JSON.parse(window.localStorage.getItem("projects")))}addProjectButton(){const e=document.createElement("button");e.classList.add("btn","add-project"),e.textContent="ADD PROJECT",e.addEventListener("click",()=>{this.addNewProjectForm()}),this.aside.appendChild(e)}addNewProject(){if(document.querySelector(".project-form")){let e=null,t=null;/([A-Z]){3,}/gi.test(document.querySelector(".name-input").value)?e=document.querySelector(".name-input").value:alert("bad name"),/(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/.test(document.querySelector(".date-input").value)?t=document.querySelector(".date-input").value:alert("no date"),t&&e&&(this.projects.push(new n(e,t)),this.saveToStorage(),this.removeNewProjectForm(),this.addProjectButton())}}removeProject(e){this.projects.length>=e&&(this.projects.splice(e,1),this.saveToStorage())}removeProjectButton(){document.querySelector(".add-project")&&document.querySelector(".add-project").remove()}renderProjects(){document.querySelector(".project-container")&&document.querySelector(".project-container").remove();const e=document.createElement("div");e.classList.add("project-container");for(let t=0;t<this.projects.length;t++){const o=document.createElement("div");o.classList.add("project-div");const n=document.createElement("h2");n.classList.add("project-title"),n.textContent=this.projects[t].name,o.appendChild(n);const c=document.createElement("div");c.classList.add("project-due-date"),c.textContent=this.projects[t].date,o.appendChild(c);const r=document.createElement("button");r.id=t,r.textContent="delete",r.addEventListener("click",e=>{e.target.parentElement.remove(),this.removeProject(e.target.id),document.querySelector(".main-content").innerHTML=""}),o.appendChild(r),o.addEventListener("click",()=>{a.renderProjectToContainer(document.querySelector(".main-content"),this.projects[t],t)}),e.appendChild(o)}this.aside.appendChild(e)}addNewProjectForm(){this.removeProjectButton();const e=document.createElement("div");e.classList.add("project-form","hidden"),this.aside.appendChild(e);const t=document.createElement("p");t.classList.add("add-project-form-title"),t.textContent="Project name",e.appendChild(t);const o=document.createElement("input");o.classList.add("name-input","inpt"),o.type="text",e.appendChild(o);const n=document.createElement("p");n.classList.add("add-project-form-title"),n.textContent="Project date",e.appendChild(n);const c=document.createElement("input");c.classList.add("date-input","inpt"),c.type="date",e.appendChild(c);const r=document.createElement("div");e.appendChild(r);const d=document.createElement("button");d.classList.add("btn","new-project-form-add"),d.textContent="ADD",d.addEventListener("click",()=>{this.addNewProject(),this.renderProjects()}),r.appendChild(d);const a=document.createElement("button");a.classList.add("btn","new-project-form-cancel"),a.textContent="CANCEL",a.addEventListener("click",()=>{this.removeNewProjectForm(),this.addProjectButton()}),r.appendChild(a)}removeNewProjectForm(){document.querySelector(".project-form")&&document.querySelector(".project-form").remove()}render(e){this.aside.classList.add("aside-menu"),e.appendChild(this.aside),this.renderProjects(),this.addProjectButton()}},a=new class{updateStorage(e,t,o){let n=JSON.parse(window.localStorage.getItem("projects"));"addTo"==o?n[e].projectToDo.push(t):"remove"==o&&(n[e].projectToDo=n[e].projectToDo.slice(0,e).concat(n[e].projectToDo.slice(e+1,n[e].projectToDo.length-1))),window.localStorage.clear(),window.localStorage.setItem("projects",JSON.stringify(n))}renderProjectToContainer(e,t,o){e.innerHTML="";const n=document.createElement("div");n.classList.add("project-controls"),e.appendChild(n);const c=document.createElement("h2");c.textContent=t.name,n.appendChild(c);const r=document.createElement("button");r.textContent="ADD NEW TASK",r.addEventListener("click",()=>{this.addNewToDoForm(t,o)}),n.appendChild(r),this.renderToDoes(e,t,o)}addNewToDoForm(e,t){const o=document.createElement("div");o.classList.add("new-ToDo-form-container"),document.body.appendChild(o);const n=document.createElement("div");n.classList.add("new-ToDo-form"),o.appendChild(n);const r=document.createElement("p");r.classList.add("toDo-title"),r.textContent="Name",n.appendChild(r);const d=document.createElement("input");d.classList.add("toDo-title-input"),n.appendChild(d);const a=document.createElement("p");a.classList.add("toDo-date"),a.textContent="Due Date",n.appendChild(a);const i=document.createElement("input");i.classList.add("toDo-date-input"),i.type="date",n.appendChild(i);const s=document.createElement("p");s.classList.add("toDo-desc-title"),s.textContent="Task description",n.appendChild(s);const l=document.createElement("textarea");l.classList.add("toDo-desc-input"),n.appendChild(l);const p=document.createElement("p");p.classList.add("toDo-priority-title"),p.textContent="Priority",n.appendChild(p);const u=document.createElement("div");u.classList.add("priority-container"),n.appendChild(u);for(let e=0;e<3;e++){let t=document.createElement("input");t.dataset.number=e,t.type="radio",t.name="priority",t.classList.add("priority-radio"),u.appendChild(t)}const m=document.createElement("button");m.classList.add("add-NewToDo-button"),m.textContent="ADD TASK",m.addEventListener("click",()=>{let o=null,n=null,r=null,d=null;0===document.querySelector(".toDo-title-input").value.length?alert("pass a name"):o=document.querySelector(".toDo-title-input").value,0==document.querySelector(".toDo-date-input").value?alert("pass a due-date"):n=document.querySelector(".toDo-date-input").value,d=document.querySelector(".toDo-desc-input").value;let a=document.querySelector(".priority-container");for(let e=0;e<a.children.length;e++)a.children[e].checked&&(r=a.children[e].dataset.number);if(!r)return void alert("chose a priority");let i=new c(o,d,n,r);e.projectToDo.push(i),this.updateStorage(t,i,"addTo"),this.renderToDoes(document.querySelector(".main-content"),e,t),this.removeNewToDoForm()}),n.appendChild(m);const h=document.createElement("button");h.classList.add("cancel-NewToDo-button"),h.textContent="CANCEL",h.addEventListener("click",()=>{this.removeNewToDoForm()}),n.appendChild(h)}removeNewToDoForm(){document.querySelector(".new-ToDo-form-container").remove()}renderToDoes(e,t,o){document.querySelector(".project-toDoes")&&document.querySelector(".project-toDoes").remove();let n=document.createElement("div");n.classList.add("project-toDoes"),e.appendChild(n);for(let e=0;e<t.projectToDo.length;e++){const c=document.createElement("div");c.classList.add("toDo-container"),n.appendChild(c);const r=document.createElement("h2");r.classList.add("toDo-title"),r.textContent=t.projectToDo[e].title,c.appendChild(r);const d=document.createElement("h3");d.classList.add("toDo-date"),d.textContent=t.projectToDo[e].date,c.appendChild(d);const a=document.createElement("h4");a.classList.add("toDo-desc"),a.textContent=t.projectToDo[e].desc,c.appendChild(a);const i=document.createElement("h4");i.classList.add("toDo-priority"),i.textContent=t.projectToDo[e].priority,c.appendChild(i);const s=document.createElement("button");s.classList.add("btn","remove-ToDo"),s.textContent="REMOVE TO DO",s.addEventListener("click",n=>{t.projectToDo=t.projectToDo.slice(0,e).concat(t.projectToDo.slice(e+1,t.projectToDo.length-1)),this.updateStorage(o,null,"remove"),n.target.parentElement.remove()}),c.appendChild(s)}}render(e){let t=document.createElement("main");t.classList.add("main-content"),e.appendChild(t)}};d.getProjects(),r.render(document.querySelector("#content")),d.render(document.querySelector("#content")),a.render(document.querySelector("#content"))}]);