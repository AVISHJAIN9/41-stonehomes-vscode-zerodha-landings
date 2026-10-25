document.getElementById('year').textContent=new Date().getFullYear();
// simple mobile nav toggle (robust)
const btn=document.querySelector('.nav-toggle');
const nav=document.getElementById('nav');
if(btn && nav){
	// ensure initial state
	btn.setAttribute('aria-expanded','false');
	nav.setAttribute('aria-hidden','true');
	btn.addEventListener('click',()=>{
		const expanded=btn.getAttribute('aria-expanded')==='true';
		btn.setAttribute('aria-expanded',String(!expanded));
		nav.setAttribute('aria-hidden',String(expanded));
	});
}

// simple form handling: show an alert-like success message (non-blocking)
const form=document.querySelector('.form');
if(form){
	form.addEventListener('submit',e=>{
		e.preventDefault();
		const btn=form.querySelector('button[type="submit"]');
		const orig=btn.textContent;
		btn.textContent='Creating…';
		btn.disabled=true;
		setTimeout(()=>{btn.textContent='Created';btn.disabled=false;setTimeout(()=>{btn.textContent=orig},1500)},900);
	});
}

// mark active nav link
document.querySelectorAll('.site-nav a').forEach(a=>{
	try{
		const href=new URL(a.href).pathname.split('/').pop();
		const current=location.pathname.split('/').pop() || 'index.html';
		if(href===current || (href==="index.html" && current==='index.html')){
			a.classList.add('active');
			a.setAttribute('aria-current','page');
		}
	}catch(e){}
});

// breadcrumb insertion for non-home pages
function buildBreadcrumb(){
	const current=location.pathname.split('/').pop();
	if(!current || current==='index.html') return;
	const name=current.replace('.html','').replace(/-/g,' ');
	const container=document.querySelector('main');
	if(!container) return;
	const nav=document.createElement('nav');
	nav.className='breadcrumb';
	nav.setAttribute('aria-label','Breadcrumb');
	nav.innerHTML=`<a href="index.html">Home</a><span class="sep">/</span><span>${name.charAt(0).toUpperCase()+name.slice(1)}</span>`;
	container.insertBefore(nav,container.firstChild);
}
buildBreadcrumb();
