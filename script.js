const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const progress=document.querySelector(".scroll-progress");
const updateProgress=()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=`${h>0?(window.scrollY/h)*100:0}%`};
window.addEventListener("scroll",updateProgress,{passive:true});updateProgress();

const menu=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav nav");
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu?.setAttribute("aria-expanded","false")}));

const card=document.querySelector(".tilt-card");
if(card&&window.matchMedia("(pointer:fine)").matches){
 card.addEventListener("mousemove",e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateY(${x*7}deg) rotateX(${-y*7}deg) translateY(-3px)`});
 card.addEventListener("mouseleave",()=>card.style.transform="");
}
