!function(){var e=document.getElementsByName("delay"),n=document.getElementsByName("step"),t=document.getElementsByName("amount"),o=document.querySelector("button"),l=null,a=null,c=null,u=null,i=null;function s(e,n){return e=l+=1,new Promise((function(t,o){var l=Math.random()>.3;setTimeout((function(){l?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}o.addEventListener("click",(function(o){o.preventDefault(),u=t[0].value,c=parseInt(e[0].value),i=parseInt(n[0].value),a=c;for(var l=0;l<u;l+=1)s(l,a).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),a+=i}))}();
//# sourceMappingURL=03-promises.eb2ab867.js.map
