window.addEventListener("load",()=>{setTimeout(()=>document.body.classList.add("loaded"),650)});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));
function toggleMenu(){document.querySelector(".nav nav").classList.toggle("mobile")}
function rule(el){const i=el.querySelector("i");i.textContent=i.textContent==="+"?"−":"+"}
let target=new Date();target.setDate(target.getDate()+12);target.setHours(20,0,0,0);
function tick(){let d=Math.max(0,target-new Date()),s=Math.floor(d/1000);document.getElementById("days").textContent=String(Math.floor(s/86400)).padStart(2,"0");s%=86400;document.getElementById("hours").textContent=String(Math.floor(s/3600)).padStart(2,"0");s%=3600;document.getElementById("mins").textContent=String(Math.floor(s/60)).padStart(2,"0");document.getElementById("secs").textContent=String(s%60).padStart(2,"0")}tick();setInterval(tick,1000);
let p=247;setInterval(()=>{p=Math.max(120,Math.min(330,p+Math.floor(Math.random()*7)-3));document.getElementById("heroPlayers").textContent=p},5000);
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>document.querySelector(".nav nav")?.classList.remove("mobile")));