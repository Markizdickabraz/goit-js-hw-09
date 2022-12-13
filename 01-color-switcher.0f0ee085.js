const e=document.body,t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");t.addEventListener("click",(()=>{intervalId=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0})),a.addEventListener("click",(()=>{clearInterval(intervalId),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.0f0ee085.js.map
