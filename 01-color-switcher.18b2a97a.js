const e=document.body,t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");let d=null;t.addEventListener("click",(()=>{d=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0})),a.addEventListener("click",(()=>{clearInterval(d),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.18b2a97a.js.map
