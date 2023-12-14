"use strict";(function(e){function r(){document.querySelectorAll("[data-behaviour]:not([data-registered]),[data-behaviour][data-behaviour-force-reload]").forEach(function(e){i(e)})}function i(e){function o(e){var t=e.currentTarget;t instanceof HTMLInputElement&&r==="checkbox"||e.preventDefault(),s.call(this,e)}var n=e.dataset.behaviour,r=e.getAttribute("type"),i=e.dataset.behaviourForceReload;if(n){var s=t.get(n);s&&(i&&e.removeEventListener("click",o),e.addEventListener("click",o)),e.setAttribute("data-registered","")}}var t=new Map,n={create:function(e,n,r){t.set(e,n),r&&r()},_call:function(e,n){var r=t.get(e);r&&r.call(this,n)}};n.create("toggle-more",function(e){this.closest("[data-more-wrapper]").querySelectorAll("[data-more]").forEach(function(e){e.classList.toggle("hidden")}),this.classList.toggle("active")}),n.create("toggle-dropdown",function(e){var t=this,r=document.querySelector("[data-behaviour='toggle-dropdown'][aria-expanded='true']");r&&r!==t&&n._call.call(r,"close-dropdown",e),n._call.call(t,t.getAttribute("aria-expanded")==="true"?"close-dropdown":"expand-dropdown",e)},function(){document.addEventListener("keydown",function(e){if(e.code==="Escape"){var t=document.querySelector("[data-behaviour='toggle-dropdown'][aria-expanded='true']");t&&n._call.call(t,"close-dropdown",e)}}),document.addEventListener("click",function(e){e.stopPropagation();var t=e.target.closest("[data-dropdown-wrapper]");t||document.dispatchEvent(new KeyboardEvent("keydown",{code:"Escape"}))})}),n.create("expand-dropdown",function(e){this.parentElement.querySelector("[data-dropdown-content]").classList.remove("hidden"),this.classList.add("active"),this.setAttribute("aria-expanded","true")}),n.create("close-dropdown",function(e){var t=this.closest("[data-dropdown-wrapper]").querySelector("[data-behaviour='toggle-dropdown'][aria-expanded='true']");t&&(t.parentElement.querySelector("[data-dropdown-content]").classList.add("hidden"),t.classList.remove("active"),t.setAttribute("aria-expanded","false"))}),n.create("toggle-mark-all",function(e){var t=this,n=t.closest("[data-markable-container]");n.querySelectorAll("[data-markable] input[type='checkbox']").forEach(function(e){e.checked=t.checked})}),n.create("show-popup",function(t){e.TFViewer.showViewer(t.currentTarget)}),n.create("tooltip",function(e){this.closest("[data-tooltip-wrapper]").querySelector("[data-tooltip]").classList.toggle("active")},function(e){document.addEventListener("click",function(e){var t=e.target.closest("[data-tooltip-wrapper]");t||document.querySelectorAll("[data-tooltip].active").forEach(function(e){e.classList.remove("active")})})}),n.create("toggle-ref",function(e){var t=this,r=document.querySelector("#ref-overlay").classList;!t.hasAttribute("data-behaviour-toggled")&&!!r.contains("active")?(n._call.call(t,"close-ref",e),n._call.call(t,"show-ref",e)):n._call.call(t,r.contains("active")?"close-ref":"show-ref",e)},function(){if(document.querySelectorAll('[data-behaviour="toggle-ref"],[data-behaviour="show-popup"]').length>0){var e=document.createDocumentFragment();e.appendChild((new DOMParser).parseFromString('<div id="ref-overlay" tabindex="0" role="dialog" aria-label="reference"><div id="ref-overlay-in" class="rs_skip"><span class="ref-icon"></span><button class="ref-close" tabIndex="0" data-behaviour="close-ref" aria-label="close reference popup"><span aria-hidden="true">×</span></button><div class="content"></div><a href="#" class="frontnotes" data-behaviour="scroll" data-behaviour-ref="#inline_frontnotes" data-behaviour-callback="true">View all notes</a></div></div>',"text/html").body.firstElementChild),document.getElementById("inline_frontnotes")||e.querySelector(".frontnotes").classList.add("hidden"),document.body.appendChild(e)}}),n.create("scroll",function(e){var t=this,n=t.dataset.behaviourRef;n&&TandfUtils.animate(n)}),n.create("show-ref",function(e){var t=this,n=document.querySelector("#ref-overlay"),r=n.querySelector(".content");r.innerHTML=t.dataset.rid.split(" ").map(function(e){var t=document.getElementById(e);return t?t.innerHTML:""}).reduce(function(e,t){return e+t},"");var i=r.querySelectorAll(".NLM_disp-formula");i.length>0&&(i.forEach(function(e){var t=e.querySelector("[data-mathml]");t&&(e.innerHTML=t.dataset.mathml)}),MathJax.Hub.Queue(["Typeset",MathJax.Hub,r])),document.dispatchEvent(new CustomEvent("attach-behaviour")),t.setAttribute("data-behaviour-toggled","true"),n.setAttribute("data-ref-type",t.getAttribute("data-ref-type")),n.querySelector(".ref-close").setAttribute("aria-label","close "+t.dataset.label+" popup"),n.classList.add("active"),TandfUtils.restrictFocusToPopup(n)}),n.create("close-ref",function(e){var t=document.querySelector("#ref-overlay"),n=document.querySelector("[data-behaviour-toggled]");t.classList.remove("active"),t.removeAttribute("data-ref-type"),n.removeAttribute("data-behaviour-toggled"),n.focus({preventScroll:!0})}),$(r),document.addEventListener("attach-behaviour",r),e.Binder=n})(tandf);(function(e){if(e&&!("TFViewer"in e)&&"tfviewerdata"in e){var t='<div id="viewer" class="{0}"><div class="navigator"><button class="prev" title="Previous {1}"><i aria-hidden="true" class="fa fa-angle-left"></i></button><button class="next" title="Next {1}"><i aria-hidden="true" class="fa fa-angle-right"></i></button></div><div class="header"></div><div class="viewer-canvas"><div class="count"></div><div class="content"></div><div class="download-options"></div></div></div>',n='<a class="download-btn" href="/action/downloadTable?id={0}&doi={1}&downloadType=CSV" role="button">Download CSV</a>',r='<h3>{0} <span class="index">{1}</span> of {2}</h3>',i=new DOMParser,s=e.tfviewerdata;function o(e,t,n){e.querySelector(t).innerHTML+=n}function u(e){return e?document.querySelector('[data-id="'+e.id+'"]'):undefined}e.TFViewer={initViewer:function(e,t,n,r,i){var s=this,o=new Modal({name:"viewer",content:e,padding:5,top:100,maxWidth:1300,id:r,closeButtonA11yAttributes:{"aria-label":"Close "+i+" Viewer"}});o.open();var u=o.getElement(".next"),a=o.getElement(".prev"),f=t!==undefined,l=n!==undefined;u.classList.toggle("hide",!f),a.classList.toggle("hide",!l),f&&u.addEventListener("click",function(){o.close(),s.showViewer(t)}),l&&a.addEventListener("click",function(){o.close(),s.showViewer(n)}),document.dispatchEvent(new CustomEvent("attach-behaviour")),lazyLoad("[data-formula-source]",o.modal)},showTable:function(e){var a=i.parseFromString(t.format("table-viewer","Table"),"text/html").querySelector("#viewer"),f=e.dataset.id.split(" ")[0],l=s["table-index-map"][f],c=s.tables[l];o(a,".header",s.metadata.header),o(a,".content",c.content),o(a,".count",r.format("Table",l+1,s.tables.length)),c.settings.hasCsvFormat&&o(a,".download-options",n.format(f,s.metadata.doi)),this.initViewer(a,u(s.tables[l+1]),u(s.tables[l-1]),f,"Table")},showFigure:function(e){var n=i.parseFromString(t.format("figure-viewer","Figure"),"text/html").querySelector("#viewer"),a=e.dataset.id.split(" ")[0],f=s["figure-index-map"][a],l=s.figures[f];o(n,".header",s.metadata.header),o(n,".content",l.content),o(n,".count",r.format("Figure",f+1,s.figures.length)),this.initViewer(n,u(s.figures[f+1]),u(s.figures[f-1]),a,"Figure")},showViewer:function(t){if(!window.OpenedModal||window.OpenedModal.modalContext.options.id!==t.dataset.id){var n=t.getAttribute("data-popup-event-type");n==="table"?this.showTable(t):n==="fig"&&this.showFigure(t)}var r=t.dataset.rid;r&&e.Binder._call.call(t,"toggle-ref",null)}}}})(tandf);(function(){function o(t){n.associatedCitations=t,fetch(e,{method:"POST",body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){e.forEach(function(e){var t=e.doi,n=e.entitlement,r=e.fallback,i,s,o,u,a,f;n!==undefined?(i=n.entitled,s=n.accessType,o=n.type,i!=="yes"||s!=="open"&&s!=="free"&&s!=="permFree"&&s!=="paid"?i==="no"&&o==="av"&&(u="/templates/jsp/_style2/_tandf/images/alternative-getftr.png"):u="/templates/jsp/_style2/_tandf/images/full-getftr.png",a=n.tooltip,f=n.url):r!==undefined&&(f=r.url);var l="<li> <a href='"+f+"' "+"target='_blank' "+"class='getFTR__btn"+(a?" getFTR__tooltip' aria-label='"+a+"' data-tooltip='"+a+"'>":"'aria-label='View'>")+(u?"<img src='"+u+"' alt='view'/>":"")+"<span>View</span></a></li>",c=document.querySelectorAll('[data-target="'+t+'"]');c&&c.length===1?c[0].insertAdjacentHTML("beforeend",l):c.forEach(function(e){e.contains(e.querySelector("li a.getFTR__btn"))||e.insertAdjacentHTML("beforeend",l)})})}).catch(function(e){console.log(e)})}var e="/action/CitationEntitlement",t=20,n={pubDoi:undefined,associatedCitations:undefined,requestSource:"FULL_TEXT"},r=document.querySelectorAll("ul.references li span ul.getFTR"),i=0;if(!r.length)return;n.pubDoi=TandfUtils.parsePageContext().article.value;var s=new IntersectionObserver(function(e,n){var u=new Map;e.forEach(function(e){var n=e.target.dataset.pos;e.isIntersecting&&u.set(Math.ceil(n/t),[])}),r.forEach(function(e){var r=e.dataset,i=Math.ceil(r.pos/t);u.has(i)&&(u.get(i).push(r.target),n.unobserve(e))}),u.forEach(function(e,n){console.log("fetching elements from range "+n+" to "+n*t),i+=t,o(e)}),i>=r.length&&(s.disconnect(),console.log("Disconnect GetFTR observer as all elements were observed"))});r.forEach(function(e,t){e.dataset.pos=(t+1).toString(),s.observe(e)})})(tandf);