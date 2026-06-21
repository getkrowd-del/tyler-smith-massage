var nav=document.getElementById('nav');
window.addEventListener('scroll',function(){nav.classList.toggle('scrolled',window.scrollY>60)});
var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.fade-up').forEach(function(el){obs.observe(el)});
var hamburger=document.getElementById('hamburger');
var mobileMenu=document.getElementById('mobileMenu');
hamburger.addEventListener('click',function(){hamburger.classList.toggle('open');mobileMenu.classList.toggle('open');document.body.style.overflow=mobileMenu.classList.contains('open')?'hidden':''});