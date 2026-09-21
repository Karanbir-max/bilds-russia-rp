window.addEventListener('load',()=>{document.body.classList.add('ready')});
document.querySelectorAll('details').forEach(d=>d.addEventListener('toggle',()=>{const b=d.querySelector('summary b');if(b)b.textContent=d.open?'−':'+'}));
