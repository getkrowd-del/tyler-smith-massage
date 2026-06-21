function buyPackage(amount,name){var e=document.getElementById('email');if(!e||!e.value||e.value.indexOf('@')===-1){e.focus();e.style.borderColor='#c0392b';alert('Please enter your email address before purchasing.');return}e.style.borderColor='';if(typeof window.__processDonation==='function'){window.__processDonation({amount:amount,email:e.value,productName:name})}else{alert('Checkout is loading - please try again in a moment.')}}
var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.fade-up').forEach(function(el){obs.observe(el)});
var hamburger=document.getElementById('hamburger');
var mobileMenu=document.getElementById('mobileMenu');
hamburger.addEventListener('click',function(){hamburger.classList.toggle('open');mobileMenu.classList.toggle('open');document.body.style.overflow=mobileMenu.classList.contains('open')?'hidden':''});