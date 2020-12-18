(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0898":function(t,e,a){"use strict";a("3db0")},1109:function(t,e,a){"use strict";a("cb20")},"3db0":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("5530"),n=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/home"}},[t._v("To-Do List")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[a("div",{staticClass:"navbar-nav"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/home"}},[t._v("Home")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/task"}},[t._v("Nova Tarefa")])],1)])],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],u={},l=u,d=(a("aafe"),a("2877")),p=Object(d["a"])(l,i,c,!1,null,"feb536e0",null),f=p.exports,m={name:"App",components:{Header:f}},v=m,b=Object(d["a"])(v,s,o,!1,null,null,null),h=b.exports,k=(a("db43"),a("8c4f")),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-4"},[a("div",{staticClass:"jumbotron"},[a("h1",{staticClass:"display-4"},[t._v("To-Do List")]),a("p",{staticClass:"lead"},[t._v("Libere espaço na sua mente. Recupere a clareza e a tranquilidade, tirando todas essas tarefas da sua cabeça e colocando na sua lista de tarefas.")]),a("hr"),a("router-link",{staticClass:"btn btn-primary btn-sm mb-4",attrs:{to:"/task",role:"button"}},[t._v("+ Nova Tarefa")]),a("TaskList")],1)])},_=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.tasks?0===t.tasks.length?a("div",[a("p",{attrs:{id:"tasklist-no-task"}},[t._v("Nenhuma tarefa encontrada...")])]):a("div",t._l(t.tasks,(function(e){return a("li",{key:e._id,staticClass:"list-group-item"},[a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input mr-2",attrs:{id:e._id,type:"checkbox",Checked:e.marked},domProps:{value:e.marked},on:{change:t.checkMarkedHandler}}),a("label",{staticClass:"form-check-label tasklist-text-task",attrs:{htmlFor:e._id}},[t._v(" "+t._s(e.text)+" ")])]),a("small",[t._v(" Última Atualização: "+t._s(new Date(e.updatedAt).toLocaleString("pt-br"))+" "),e.marked?a("div",{staticClass:"tasklist-icons"},[a("i",{staticClass:"fas fa-trash tasklist-icon-remove",attrs:{title:"Excluir",id:e._id},on:{click:t.removeClickhandler}})]):t._e()])])})),0):a("div",[a("p",{attrs:{id:"tasklist-loading"}},[t._v("Carregando...")])])},y=[],C=(a("4de4"),a("d3b7"),a("96cf"),a("1da1")),O={created:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://web-api-todolist.herokuapp.com/tasks");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,t.tasks=r;case 7:case"end":return e.stop()}}),e)})))()},mounted:function(){},data:function(){return{tasks:void 0}},methods:{checkMarkedHandler:function(t){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function a(){var r,n,s,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.target.id,n={marked:t.target.checked},a.next=4,fetch("https://web-api-todolist.herokuapp.com/tasks/"+r,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return s=a.sent,a.next=7,s.json();case 7:o=a.sent,200==s.status&&(i=e.tasks.filter((function(t){return t._id!==o._id})),i.unshift(o),e.tasks=i);case 9:case"end":return a.stop()}}),a)})))()},removeClickhandler:function(t){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function a(){var r,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.target.id,a.next=3,fetch("https://web-api-todolist.herokuapp.com/tasks/"+r,{method:"DELETE"});case 3:n=a.sent,200==n.status&&(s=e.tasks.filter((function(t){return t._id!==r})),e.tasks=s);case 5:case"end":return a.stop()}}),a)})))()}}},j=O,w=(a("1109"),Object(d["a"])(j,x,y,!1,null,"7850a6d6",null)),T=w.exports,S={components:{TaskList:T}},P=S,E=Object(d["a"])(P,g,_,!1,null,"d6f1cd3e",null),M=E.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v(" Adicionar Tarefa ")]),a("div",{staticClass:"card-body"},[a("h6",[t._v("Nome da Tarefa")]),a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid;return[a("form",{on:{submit:function(e){return e.preventDefault(),t.formSubmitHandler(e)}}},[a("validation-provider",{attrs:{rules:"required|max:100"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("input",{staticClass:"form-control",class:r[0]?"invalid":null,attrs:{autoFocus:"",type:"text",id:"text",name:"text",placeholder:"Informe o nome da tarefa..."},domProps:{value:t.text},on:{input:function(e){t.text=e.target.value}}}),a("div",{staticClass:"error"},[t._v(t._s(r[0]))])]}}],null,!0)}),a("router-link",{staticClass:"btn btn-secondary btn-sm mt-2 mr-2",attrs:{to:"/home",role:"button"}},[t._v("Cancelar")]),a("button",{staticClass:"btn btn-primary btn-sm mt-2",attrs:{type:"submit",disabled:r}},[t._v(" Salvar ")])],1)]}}])})],1)])])},R=[],$=(a("498a"),a("7bb1")),A={components:{ValidationObserver:$["a"],ValidationProvider:$["b"]},data:function(){return{text:""}},methods:{formSubmitHandler:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var a,r,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.text.trim(),!(0==a.length||a.length>100)){e.next=5;break}alert("Preencha o formulário corretamente."),e.next=14;break;case 5:return r={text:a},e.next=8,fetch("https://web-api-todolist.herokuapp.com/tasks/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 8:return n=e.sent,e.next=11,n.json();case 11:s=e.sent,alert(s.message),201==n.status&&t.$router.push("/home");case 14:case"end":return e.stop()}}),e)})))()}}},H=A,L=(a("0898"),Object(d["a"])(H,N,R,!1,null,"9e152ad0",null)),D=L.exports,J=[{path:"/home",component:M},{path:"/task",component:D},{path:"",redirect:"/home"}],q=a("4c93");n["a"].use(k["a"]),n["a"].config.productionTip=!1,Object($["c"])("required",Object(r["a"])(Object(r["a"])({},q["b"]),{},{message:"O nome da tarefa é um campo obrigatório."})),Object($["c"])("max",Object(r["a"])(Object(r["a"])({},q["a"]),{},{message:function(t,e){return"O nome da tarefa deve possuir no máximo ".concat(e.length," caracteres.")}}));var V=new k["a"]({routes:J,mode:"history"});new n["a"]({router:V,render:function(t){return t(h)}}).$mount("#app")},aafe:function(t,e,a){"use strict";a("f6e8")},cb20:function(t,e,a){},db43:function(t,e,a){},f6e8:function(t,e,a){}});
//# sourceMappingURL=app.94a1f813.js.map