(function(){
'use strict';
var $=function(i){return document.getElementById(i)};
/* Neutralise toute entrée : retire balises, caractères de contrôle et symboles dangereux */
function clean(s){return String(s).replace(/[\u0000-\u001f\u007f]/g,'').replace(/[<>"'`\\]/g,'').trim()}
/* Limiteur : 5 tentatives par minute */
var hits=[];function limited(){var n=Date.now();hits=hits.filter(function(t){return n-t<60000});if(hits.length>=5)return true;hits.push(n);return false}

$('burger').addEventListener('click',function(){var o=$('links').classList.toggle('open');this.setAttribute('aria-expanded',o)});

/* Recherche d’adresse */
$('addr').addEventListener('submit',function(e){e.preventDefault();var m=$('addrMsg'),v=clean($('addrIn').value);
if(limited()){m.textContent='Trop de tentatives. Réessayez dans une minute.';return}
if(v.length<5||!/^[\p{L}\p{N} ,.\-\/’]+$/u.test(v)){m.textContent='Entrez une adresse valide (5 caractères minimum, lettres et chiffres).';return}
m.textContent='Adresse enregistrée : '+v+'. Connectez-vous pour choisir votre commande.'});

/* Modale connexion / inscription */
var dlg=$('dlg'),mode='login';
function open(t){mode=t;var s=t==='signup';$('dt').textContent=s?'Créer un compte':'Se connecter';$('sb').textContent=s?'Créer mon compte':'Se connecter';
$('nameRow').hidden=!s;$('mt').hidden=!s;$('pw').autocomplete=s?'new-password':'current-password';$('er').textContent='';$('af').reset();
if(dlg.showModal)dlg.showModal();else dlg.setAttribute('open','')}
document.querySelectorAll('[data-open]').forEach(function(b){b.addEventListener('click',function(){open(b.dataset.open)})});
$('cl').addEventListener('click',function(){dlg.close()});

function score(p){var s=0;if(p.length>=10)s++;if(/[a-z]/.test(p)&&/[A-Z]/.test(p))s++;if(/\d/.test(p))s++;if(/[^\w\s]/.test(p))s++;return s}
$('pw').addEventListener('input',function(){var s=score(this.value),i=$('mt').firstElementChild;i.style.width=(s*25)+'%';i.style.background=s<3?'var(--err)':s<4?'var(--gold)':'#4fd18b'});

$('af').addEventListener('submit',function(e){e.preventDefault();var er=$('er');
if($('hp').value){return}                       /* champ piège anti-robot */
if(limited()){er.textContent='Trop de tentatives. Patientez une minute.';return}
var em=$('em').value.trim().toLowerCase(),pw=$('pw').value,nm=clean($('nm').value);
if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)){er.textContent='Entrez une adresse e-mail valide.';return}
if(mode==='signup'){
 if(nm.length<2){er.textContent='Entrez votre nom complet.';return}
 if(score(pw)<3||pw.length<10){er.textContent='Mot de passe trop faible : 10 caractères minimum avec majuscules, minuscules et chiffres.';return}}
else if(pw.length<1){er.textContent='Entrez votre mot de passe.';return}
/* Démo : ici, envoyer en HTTPS vers votre API ; le serveur doit hacher le mot de passe (Argon2/bcrypt). */
$('pw').value='';er.style.color='#4fd18b';er.textContent=mode==='signup'?'Compte prêt à être créé (connectez le serveur pour finaliser).':'Formulaire valide (connectez le serveur pour finaliser).';
setTimeout(function(){er.style.color='';dlg.close()},1800)});
})();
/* Apparition douce au défilement */
(function(){var els=document.querySelectorAll('.cat,.step,.v,.join,.cats');
if(!('IntersectionObserver' in window)){return}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
els.forEach(function(el,i){el.classList.add('rv');el.style.transitionDelay=(i%4)*80+'ms';io.observe(el)})})();
