!function(){var e=document.getElementsByName("delay"),n=document.getElementsByName("step"),t=document.getElementsByName("amount"),l=document.querySelector("button"),o=null,u=null,a=null;l.addEventListener("click",(function(c,m){return event.preventDefault(),function(){l.disabled=!0}(),a=e[0].value,new Promise((function(e,l){setTimeout((function(){m=n[0].value,u=setInterval((function(){o+=1,t[0].value==o&&(clearInterval(u),location.reload()),Math.random()>.3||console.log(o)}),m)}),a)}))}))}();
//# sourceMappingURL=03-promises.9d377d40.js.map
