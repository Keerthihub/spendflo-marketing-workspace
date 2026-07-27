/* Spendflo DLS — Social & ads asset library (injected on /systems/social-ads) */
(function(){
  var ROUTE='/systems/social-ads';
  function onRoute(){return location.pathname.replace(/\/$/,'').indexOf(ROUTE)!==-1;}
  var ASSETS=[{"cat": "Events", "name": "Creative   First Procurement Agent", "src": "/social-assets/events/creative-first-procurement-agent.png", "w": 1200, "h": 1350, "ratio": "8:9"}, {"cat": "Events", "name": "Creative   Luma", "src": "/social-assets/events/creative-luma.png", "w": 1200, "h": 1350, "ratio": "8:9"}, {"cat": "Events", "name": "Dublin Reworked", "src": "/social-assets/events/dublin-reworked.png", "w": 1601, "h": 901, "ratio": "16:9"}, {"cat": "Events", "name": "Flo launch", "src": "/social-assets/events/flo-launch.png", "w": 1601, "h": 901, "ratio": "16:9"}, {"cat": "Events", "name": "Luma Thumbnail", "src": "/social-assets/events/luma-thumbnail.png", "w": 1081, "h": 1081, "ratio": "1:1"}, {"cat": "Events", "name": "Now Creatives", "src": "/social-assets/events/now-creatives.png", "w": 951, "h": 301, "ratio": "wide banner"}, {"cat": "Events", "name": "Webinar Spendflo Hackett", "src": "/social-assets/events/webinar-spendflo-hackett.png", "w": 1601, "h": 901, "ratio": "16:9"}, {"cat": "Luma", "name": "Luma", "src": "/social-assets/luma/luma.png", "w": 1000, "h": 1000, "ratio": "1:1"}, {"cat": "Luma", "name": "Luma 1", "src": "/social-assets/luma/luma-1.png", "w": 1000, "h": 1000, "ratio": "1:1"}, {"cat": "Luma", "name": "Luma 2", "src": "/social-assets/luma/luma-2.png", "w": 1000, "h": 1000, "ratio": "1:1"}, {"cat": "Luma", "name": "Luma 3", "src": "/social-assets/luma/luma-3.png", "w": 1200, "h": 1200, "ratio": "1:1"}, {"cat": "Promotions", "name": "Company Cover 2", "src": "/social-assets/promotions/company-cover-2.png", "w": 1129, "h": 192, "ratio": "wide banner"}, {"cat": "Promotions", "name": "Company Cover Badge Update", "src": "/social-assets/promotions/company-cover-badge-update.png", "w": 1129, "h": 192, "ratio": "wide banner"}, {"cat": "Promotions", "name": "FullLogo Email Signature OP1", "src": "/social-assets/promotions/fulllogo-email-signature-op1.png", "w": 1112, "h": 235, "ratio": "wide banner"}, {"cat": "Promotions", "name": "FullLogo Email Signature OP1 2", "src": "/social-assets/promotions/fulllogo-email-signature-op1-2.png", "w": 1112, "h": 235, "ratio": "wide banner"}, {"cat": "Promotions", "name": "Luma Cover 2", "src": "/social-assets/promotions/luma-cover-2.png", "w": 2520, "h": 720, "ratio": "7:2"}, {"cat": "Promotions", "name": "Personal Cover OP1", "src": "/social-assets/promotions/personal-cover-op1.png", "w": 1401, "h": 351, "ratio": "wide banner"}, {"cat": "Promotions", "name": "Personal Cover OP2 1", "src": "/social-assets/promotions/personal-cover-op2-1.png", "w": 1401, "h": 351, "ratio": "wide banner"}, {"cat": "Promotions", "name": "Personal Cover OP2 2", "src": "/social-assets/promotions/personal-cover-op2-2.png", "w": 1401, "h": 351, "ratio": "wide banner"}, {"cat": "Testimonials", "name": "Testimonial 1", "src": "/social-assets/testimonials/testimonial-1.png", "w": 1080, "h": 1350, "ratio": "4:5"}, {"cat": "Testimonials", "name": "Testimonial 1 1", "src": "/social-assets/testimonials/testimonial-1-1.png", "w": 1080, "h": 1350, "ratio": "4:5"}, {"cat": "Testimonials", "name": "Testimonial 1 2", "src": "/social-assets/testimonials/testimonial-1-2.png", "w": 1080, "h": 1350, "ratio": "4:5"}, {"cat": "Testimonials", "name": "Testimonial 1 3", "src": "/social-assets/testimonials/testimonial-1-3.png", "w": 1080, "h": 1350, "ratio": "4:5"}, {"cat": "Covers & thumbnails", "name": "Newsletter Cover 3", "src": "/social-assets/covers-thumbnails/newsletter-cover-3.png", "w": 4800, "h": 2700, "ratio": "16:9"}, {"cat": "Covers & thumbnails", "name": "Social", "src": "/social-assets/covers-thumbnails/social.png", "w": 2400, "h": 2400, "ratio": "1:1"}, {"cat": "Covers & thumbnails", "name": "Youtube Thumbnail", "src": "/social-assets/covers-thumbnails/youtube-thumbnail.png", "w": 3200, "h": 1800, "ratio": "16:9"}];
  var ORDER=['Events','Luma','Promotions','Testimonials','Covers & thumbnails'];
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  function card(a){
    return '<figure class="sg-card" data-cat="'+esc(a.cat)+'" tabindex="0" data-full="'+esc(a.src)+'" data-nm="'+esc(a.name)+'" data-dim="'+a.w+' \u00d7 '+a.h+'">'+
      '<div class="sg-thumb"><img loading="lazy" src="'+esc(a.src)+'" alt="'+esc(a.name)+'"></div>'+
      '<figcaption><div class="sg-name">'+esc(a.name)+'</div>'+
      '<div class="sg-meta"><span class="sg-chip">'+esc(a.cat)+'</span><span class="sg-dim">'+a.w+'\u00d7'+a.h+' \u00b7 '+esc(a.ratio)+'</span></div></figcaption></figure>';
  }
  function build(){
    var cats={}; ASSETS.forEach(function(a){(cats[a.cat]=cats[a.cat]||[]).push(a);});
    var keys=Object.keys(cats).sort(function(x,y){return (ORDER.indexOf(x)+1||99)-(ORDER.indexOf(y)+1||99);});
    var chips='<button class="sg-fil on" data-fil="all">All ('+ASSETS.length+')</button>'+keys.map(function(k){return '<button class="sg-fil" data-fil="'+esc(k)+'">'+esc(k)+' ('+cats[k].length+')</button>';}).join('');
    var groups=keys.map(function(k){
      return '<div class="sg-group" data-group="'+esc(k)+'"><h3 class="sg-gh">'+esc(k)+' <span>'+cats[k].length+'</span></h3><div class="sg-grid">'+cats[k].map(card).join('')+'</div></div>';
    }).join('');
    return '<section id="gallery" class="sg-sec">'+
      '<h2 class="sg-h2">Asset library</h2>'+
      '<p class="sg-lead">'+ASSETS.length+' on-brand social &amp; ad creatives, grouped by use. Each shows its pixel dimensions and aspect ratio \u2014 click any asset to view it full size.</p>'+
      '<div class="sg-fils">'+chips+'</div><div class="sg-groups">'+groups+'</div></section>';
  }
  function lightbox(src,nm,dim){
    var o=document.createElement('div'); o.className='sg-lb'; o.innerHTML='<div class="sg-lb-back"></div><figure class="sg-lb-card"><img src="'+esc(src)+'"><figcaption><span>'+esc(nm)+'</span><em>'+esc(dim)+'</em></figcaption><button class="sg-lb-x" aria-label="Close">\u2715</button></figure>';
    o.addEventListener('click',function(e){if(e.target.closest('.sg-lb-back')||e.target.closest('.sg-lb-x'))o.remove();});
    document.addEventListener('keydown',function k(ev){if(ev.key==='Escape'){o.remove();document.removeEventListener('keydown',k);}});
    document.body.appendChild(o);
  }
  function wire(host){
    host.addEventListener('click',function(e){
      var f=e.target.closest('.sg-fil');
      if(f){host.querySelectorAll('.sg-fil').forEach(function(x){x.classList.toggle('on',x===f);});var v=f.getAttribute('data-fil');
        host.querySelectorAll('.sg-group').forEach(function(g){g.style.display=(v==='all'||g.getAttribute('data-group')===v)?'':'none';});return;}
      var c=e.target.closest('.sg-card'); if(c){lightbox(c.getAttribute('data-full'),c.getAttribute('data-nm'),c.getAttribute('data-dim'));}
    });
    host.addEventListener('keydown',function(e){if(e.key==='Enter'){var c=e.target.closest('.sg-card');if(c)lightbox(c.getAttribute('data-full'),c.getAttribute('data-nm'),c.getAttribute('data-dim'));}});
  }
  function mount(){
    if(!onRoute())return;
    var content=document.querySelector('.content'); if(!content) return;
    if(content.querySelector('#gallery.sg-sec')) return;
    var wrap=document.createElement('div'); wrap.innerHTML=build(); var host=wrap.firstChild;
    var rules=content.querySelector('#rules');
    if(rules) content.insertBefore(host,rules); else {var rel=content.querySelector('.related'); rel?content.insertBefore(host,rel):content.appendChild(host);}
    wire(host);
  }
  function boot(){
    var run=function(){setTimeout(mount,60);};
    if(document.readyState==='complete')run(); else window.addEventListener('load',run);
    var root=document.querySelector('.app')||document.body;
    new MutationObserver(function(){if(onRoute()&&!document.querySelector('#gallery.sg-sec'))mount();}).observe(root,{childList:true,subtree:true});
    ['pushState','replaceState'].forEach(function(m){var o=history[m];history[m]=function(){var r=o.apply(this,arguments);setTimeout(mount,80);return r;};});
    window.addEventListener('popstate',function(){setTimeout(mount,80);});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot); else boot();
})();
