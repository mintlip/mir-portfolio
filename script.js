// SVG icons keep controls consistent across desktop and mobile.
const interfaceIcons = {
  arrow: '<svg class="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  up: '<svg class="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" focusable="false"><path d="M12 20V4m-6 6 6-6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  down: '<svg class="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" focusable="false"><path d="M12 4v16m-6-6 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  play: '<svg class="asset-icon nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false"><path d="m4.5 2.75 8.75 5.25-8.75 5.25Z" fill="currentColor"/></svg>',
  pause: '<svg class="asset-icon nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false"><path d="M4.75 2.75H6V13.25H4.75V2.75ZM11.125 2.75H10.125C10.0562 2.75 10 2.80625 10 2.875V13.125C10 13.1938 10.0562 13.25 10.125 13.25H11.125C11.1938 13.25 11.25 13.1938 11.25 13.125V2.875C11.25 2.80625 11.1938 2.75 11.125 2.75Z" fill="currentColor"/></svg>'
};

// Edit project text and links here. Empty URLs are intentionally not shown.
const projects = [{"id": "bca", "category": "design", "type": "GRAPHIC DESIGN / HIMTI", "name": "BCA Career Talk", "summary": "Promotional poster design for a HIMTI webinar with BCA.", "visual": "work-image bca-image", "art": "<img src=\"assets/bca.png\" alt=\"BCA Career Talk project preview\" loading=\"lazy\" decoding=\"async\">", "role": "Design & Documentation Committee", "detail": "Designed promotional posters for “BCA Career Talk: Value, Culture & Recruitment Tips,” organized by HIMTI BINUS University in collaboration with BCA.", "process": "Created the poster layout using key visual assets provided by Life at BCA.", "image": "assets/bca.png", "live": "", "source": "", "medium": ""}, {"id": "cimb", "category": "design", "type": "DESIGN & DOCUMENTATION / HIMTI", "name": "CIMB Niaga Company Visit", "summary": "Event materials for HIMTI’s company visit to CIMB Niaga.", "visual": "work-image cimb-image", "art": "<img src=\"assets/cimb.png\" alt=\"CIMB Niaga Company Visit project preview\" loading=\"lazy\" decoding=\"async\">", "role": "Design & Documentation Coordinator", "detail": "Coordinated design and documentation for HIMTI’s company visit to CIMB Niaga.", "process": "Worked with the team and coordinated communication across divisions. Selected materials include the guidebook, certificate and committee visuals shown here.", "image": "assets/cimb.png", "live": "", "source": "", "medium": ""}, {"id": "carbonova", "category": "uiux", "type": "UI/UX / ACADEMIC PROJECT", "name": "Carbonova", "summary": "A mobile interface concept for tracking everyday carbon emissions.", "visual": "work-image carbonova-image", "art": "<img src=\"assets/carbonova.png\" alt=\"Carbonova project preview\" loading=\"lazy\" decoding=\"async\">", "role": "UI/UX design", "detail": "An academic UI/UX project focused on carbon-emission tracking and climate awareness.", "process": "The interface presents daily emissions, category breakdowns, trends and suggested actions, using a forest-green visual direction.", "image": "assets/carbonova.png", "live": "", "source": "", "medium": ""}, {"id": "clash", "category": "web", "type": "FRONT-END / ACADEMIC PROJECT", "name": "Clash of BaNG", "summary": "A themed website with Home, Troops, Gallery and Register pages.", "visual": "work-image clash-image", "art": "<img src=\"assets/clash.png\" alt=\"Clash of BaNG project preview\" loading=\"lazy\" decoding=\"async\">", "role": "Front-end development", "detail": "An academic website built with HTML, CSS and JavaScript.", "process": "The website includes a pink visual theme, animated details and a registration interface. Use the live demo link to explore it.", "image": "assets/clash.png", "live": "https://mintlip.github.io/clash-of-bang/", "source": "", "medium": ""}, {"id": "agrilab", "category": "mobile", "type": "MOBILE / AR / COMPETITION PROJECT", "name": "AgriLab", "summary": "A virtual agriculture lab developed for the LIDM ITDP competition.", "visual": "work-image agrilab-image", "art": "<img src=\"assets/agrilab.png\" alt=\"AgriLab project preview\" loading=\"lazy\" decoding=\"async\">", "role": "AR development — team project", "detail": "AgriLab is a team project for the LIDM ITDP competition, combining a mobile learning experience with agricultural simulation and an AR viewer.", "process": "My contribution focused on the AR component using Unity, alongside the team’s Flutter application. The screens shown here cover experiment history, evaluation and the AR plant viewer.", "image": "assets/agrilab.png", "live": "", "source": "", "medium": ""}];
const grid=document.querySelector('#project-grid');
function render(filter='all'){grid.replaceChildren();projects.filter(p=>filter==='all'||p.category===filter).forEach((p,i)=>{const card=document.createElement('article');card.className='project-card reveal';card.style.animationDelay=`${i*55}ms`;card.innerHTML=`<button class="project-visual ${p.visual}" data-project="${p.id}" aria-label="View ${p.name}">${p.art}<span class="image-hint">View project ${interfaceIcons.arrow}</span></button><div class="project-copy"><span class="project-type">${p.type}</span><h3>${p.name}</h3><p>${p.summary}</p><button class="project-open" data-project="${p.id}" aria-label="View ${p.name}">View project ${interfaceIcons.arrow}</button></div>`;grid.append(card)});document.querySelector('#filter-status').textContent=`${grid.children.length} projects shown`;}
render();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render(button.dataset.filter)}));
const dialog=document.querySelector('dialog');let previousFocus;
function safeLink(url){try{const u=new URL(url);return u.protocol==='https:'||u.protocol==='http:'}catch{return false}}
grid.addEventListener('click',e=>{const button=e.target.closest('[data-project]');if(!button)return;const p=projects.find(p=>p.id===button.dataset.project);previousFocus=button;const links=[[p.live,'Live demo'],[p.source,'Source code'],[p.medium,'Read case study on Medium']].filter(([url])=>safeLink(url));document.querySelector('#dialog-content').innerHTML=`<span class="eyebrow pixel">${p.type}</span><h2 id="dialog-title">${p.name}</h2><span class="interest-list"><span>${p.role}</span></span>${p.image?`<img class="detail-image" src="${p.image}" alt="${p.name} project artwork"><a class="image-original text-link" href="${p.image}" target="_blank" rel="noopener">Open full image ${interfaceIcons.arrow}</a>`:''}<h3>Overview</h3><p>${p.detail}</p><h3>Project notes</h3><p>${p.process}</p><div class="dialog-links">${links.map(([url,label])=>`<a class="aero-btn btn-blue" href="${url}" target="_blank" rel="noopener noreferrer"><span>${label}</span>${interfaceIcons.arrow}</a>`).join('')}</div>`;dialog.querySelectorAll('.aero-btn').forEach(bindAeroMotion);dialog.showModal();document.querySelector('#dialog-content').scrollTop=0;document.body.style.overflow='hidden'});
function closeProject(){dialog.close()}
document.querySelector('.close-dialog').addEventListener('click',closeProject);dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeProject()}});dialog.addEventListener('close',()=>{document.body.style.overflow='';previousFocus?.focus()});
const motion=document.querySelector('.motion');
motion.addEventListener('click',()=>{
 const paused=document.body.classList.toggle('motion-paused');
 motion.setAttribute('aria-pressed',String(paused));
 motion.innerHTML=(paused?interfaceIcons.play:interfaceIcons.pause)+'<span class="nav-label">Motion</span>';
 motion.setAttribute('aria-label',paused?'Resume animations':'Pause animations');
 motion.title=paused?'Resume decorative animations':'Pause decorative animations';
});
const navlinks=[...document.querySelectorAll('nav a')];const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)navlinks.forEach(a=>{const active=a.hash==='#'+e.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})})},{rootMargin:'-10% 0px -60% 0px',threshold:0});['home','work','skills','cv','contact'].forEach(id=>observer.observe(document.getElementById(id)));document.querySelector('#year').textContent=new Date().getFullYear();

// Freeze the supplied GIF when motion is paused or reduced.
const branchImage=document.querySelector('.branch-gif');
const branchStill=document.querySelector('.branch-still');
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
function syncBranchMotion(){const stop=document.body.classList.contains('motion-paused')||motionPreference.matches;if(stop&&branchImage.complete&&branchImage.naturalWidth){branchStill.getContext('2d').drawImage(branchImage,0,0,500,285);branchStill.hidden=false;branchImage.hidden=true}else{branchStill.hidden=true;branchImage.hidden=false}}
branchImage.addEventListener('load',syncBranchMotion);motion.addEventListener('click',syncBranchMotion);motionPreference.addEventListener('change',syncBranchMotion);syncBranchMotion();

const hoverMedia=matchMedia('(hover:hover) and (pointer:fine)');const reducedMedia=matchMedia('(prefers-reduced-motion:reduce)');
document.querySelectorAll('.filters button,.motion,.nav-tab,.hdr-main,.hero,.text-link').forEach(control=>{control.addEventListener('pointermove',event=>{if(!hoverMedia.matches||reducedMedia.matches||document.body.classList.contains('motion-paused'))return;const r=control.getBoundingClientRect();control.style.setProperty('--hover-x',(event.clientX-r.left)+'px');control.style.setProperty('--hover-y',(event.clientY-r.top)+'px')});control.addEventListener('click',event=>{if(!control.matches('.hdr-main')||event.target.closest('a,button'))return;if(reducedMedia.matches||document.body.classList.contains('motion-paused'))return;const r=control.getBoundingClientRect();const wave=document.createElement('span');wave.className='click-wave';wave.setAttribute('aria-hidden','true');wave.style.left=(event.detail?event.clientX-r.left:r.width/2)+'px';wave.style.top=(event.detail?event.clientY-r.top:r.height/2)+'px';control.append(wave);wave.addEventListener('animationend',()=>wave.remove(),{once:true});setTimeout(()=>wave.remove(),700)})});

// Fit only the profile subtitle to its available width without wrapping.
const degree=document.querySelector('.profile-degree');
function fitDegree(){const width=degree.parentElement.clientWidth;const canvas=document.createElement('canvas');const ctx=canvas.getContext('2d');ctx.font='13px Aileron';const natural=ctx.measureText(degree.textContent).width;degree.style.fontSize=Math.min(13,13*(width-2)/natural)+'px'}
document.fonts.ready.then(fitDegree);new ResizeObserver(fitDegree).observe(degree.parentElement);

// Type the name once; rotate the two education lines without layout shifts.
const typedName=document.querySelector('.typed-name'),typedRole=document.querySelector('.typed-role');
const roles=['Computer Science - Software Engineering','B28 BINUS @Bekasi'];
let typingTimer,nameDone=false;
const stopTyping=()=>motionPreference.matches||document.body.classList.contains('motion-paused');
function startTyping(){clearTimeout(typingTimer);if(stopTyping()){typedName.textContent='Emir Zakaria';typedName.classList.remove('typing');typedRole.textContent=roles[0];return;}
let n=0,index=0,count=0,deleting=false;
function roleStep(){if(stopTyping())return;const text=roles[index];count+=deleting?-1:1;typedRole.textContent=text.slice(0,count);let delay=deleting?38:75;if(!deleting&&count===text.length){deleting=true;delay=2300}else if(deleting&&count===0){deleting=false;index=(index+1)%roles.length;delay=350}typingTimer=setTimeout(roleStep,delay)}
function nameStep(){typedName.classList.add('typing');typedName.textContent='Emir Zakaria'.slice(0,++n);if(n<12)typingTimer=setTimeout(nameStep,100);else{typedName.classList.remove('typing');nameDone=true;typingTimer=setTimeout(roleStep,450)}}
typedRole.textContent='';if(nameDone)roleStep();else{typedName.textContent='';typingTimer=setTimeout(nameStep,250)}}
function syncSky(){const stop=stopTyping();document.querySelector('.sky-gif').hidden=stop;document.querySelector('.sky-still').hidden=!stop}
motion.addEventListener('click',()=>{startTyping();syncSky()});motionPreference.addEventListener('change',()=>{startTyping();syncSky()});startTyping();syncSky();

// Standalone previews embed files; use Blob URLs for browser PDF/image viewers.
const embeddedFiles=new Map();
document.addEventListener('click',event=>{
 const anchor=event.target.closest('a[href^="data:"]');
 if(!anchor)return;
 const data=anchor.getAttribute('href');
 if(!embeddedFiles.has(data)){
  const comma=data.indexOf(',');const mime=data.slice(5,data.indexOf(';'));
  const bytes=Uint8Array.from(atob(data.slice(comma+1)),c=>c.charCodeAt(0));
  embeddedFiles.set(data,URL.createObjectURL(new Blob([bytes],{type:mime})));
 }
 anchor.href=embeddedFiles.get(data);
},true);

const cvToggle=document.querySelector('.cv-toggle');
cvToggle.addEventListener('click',()=>{
 const fold=document.querySelector('.cv-fold');
 const expanded=fold.classList.toggle('is-expanded');
 cvToggle.setAttribute('aria-expanded',String(expanded));
 cvToggle.innerHTML=expanded?`Show less ${interfaceIcons.up}`:`Show full CV ${interfaceIcons.down}`;
 if(!expanded)document.querySelector('#cv').scrollIntoView({behavior:stopTyping()?'auto':'smooth',block:'start'});
});

// Three small bubbles on intentional clicks, including dynamically rendered cards.
document.addEventListener('click',event=>{
 if(stopTyping()||!event.detail)return;
 const control=event.target.closest('.aero-btn,.project-open,.project-visual,.filters button,.nav-tab');
 if(!control)return;
 for(let i=0;i<3;i++){
  const star=document.createElement('span');star.className='tap-bubble';star.style.setProperty('--bubble-size',(7+i*3)+'px');star.setAttribute('aria-hidden','true');
  star.style.left=event.clientX+'px';star.style.top=event.clientY+'px';
  star.style.setProperty('--sx',((i-1)*23)+'px');star.style.setProperty('--sy',(-28-i%2*14)+'px');
  (control.closest('dialog')||document.body).append(star);setTimeout(()=>star.remove(),950);
 }
});

// Match the profile to the introduction only in the two-column layout.
const introPanel=document.querySelector('#home');
const profilePanel=document.querySelector('.sidebar>.profile');
const desktopPanels=matchMedia('(min-width:681px)');
function alignProfile(){
 if(desktopPanels.matches)profilePanel.style.setProperty('--intro-height',introPanel.getBoundingClientRect().height+'px');
 else profilePanel.style.removeProperty('--intro-height');
}
new ResizeObserver(alignProfile).observe(introPanel);
desktopPanels.addEventListener('change',alignProfile);document.fonts.ready.then(alignProfile);alignProfile();
// Small pointer-following movement; keep buttons easy to target.
function bindAeroMotion(button){
 const reset=()=>{button.style.removeProperty('--magnet-x');button.style.removeProperty('--magnet-y')};
 button.addEventListener('pointermove',event=>{
  if(!hoverMedia.matches||stopTyping()){reset();return}
  const rect=button.getBoundingClientRect();
  button.style.setProperty('--hover-x',(event.clientX-rect.left)+'px');
  button.style.setProperty('--hover-y',(event.clientY-rect.top)+'px');
  button.style.setProperty('--magnet-x',Math.max(-3,Math.min(3,(event.clientX-rect.left-rect.width/2)*.045))+'px');
  button.style.setProperty('--magnet-y',Math.max(-2,Math.min(2,(event.clientY-rect.top-rect.height/2)*.08))+'px');
 });
 button.addEventListener('pointerleave',reset);button.addEventListener('blur',reset);
}
document.querySelectorAll('.aero-btn').forEach(bindAeroMotion);
function resetAeroMotion(){document.querySelectorAll('.aero-btn').forEach(button=>{button.style.removeProperty('--magnet-x');button.style.removeProperty('--magnet-y')})}
motion.addEventListener('click',resetAeroMotion);motionPreference.addEventListener('change',resetAeroMotion);
document.querySelectorAll('.glass-header').forEach(header=>header.addEventListener('click',()=>{
 if(stopTyping())return;
 const panel=header.closest('.glass');if(!panel)return;
 panel.classList.remove('panel-tap');void panel.offsetWidth;panel.classList.add('panel-tap');
 setTimeout(()=>panel.classList.remove('panel-tap'),600);
}));

// A single soft reflection as each panel enters view; content stays visible throughout.
if('IntersectionObserver' in window){
 const lightObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   if(!entry.isIntersecting)return;
   lightObserver.unobserve(entry.target);
   if(stopTyping())return;
   entry.target.classList.add('arrival-light');
   setTimeout(()=>entry.target.classList.remove('arrival-light'),1100);
  });
 },{threshold:.12});
 document.querySelectorAll('.glass,.project-card').forEach(panel=>lightObserver.observe(panel));
}
