(function(){
'use strict';
var D=SPEEDKECH,$=function(i){return document.getElementById(i)};
var cart={},cur=D.restaurants[0];   /* cart = {idPlat: quantité} pour le restaurant courant */
function el(t,x,c){var e=document.createElement(t);if(x!==undefined)e.textContent=x;if(c)e.className=c;return e}
function clean(s,n){return String(s).replace(/[\u0000-\u001f\u007f<>`\\]/g,' ').replace(/\s+/g,' ').trim().slice(0,n)}
function items(){var a=[];cur.menu.forEach(function(c){c.items.forEach(function(i){a.push(i)})});return a}
function total(){return items().reduce(function(n,i){return n+(cart[i.id]||0)*(i.price||0)},0)}
function count(){return items().reduce(function(n,i){return n+(cart[i.id]||0)},0)}
function pend(){return items().some(function(i){return cart[i.id]&&i.price==null})}

function pickRestos(){var s=$('rs');D.restaurants.forEach(function(r){s.append(new Option(r.name+' – '+r.area,r.id))});
 s.addEventListener('change',function(){var r=D.restaurants.filter(function(x){return x.id===s.value})[0];
  if(!r||r===cur)return;if(count()>0&&!confirm('Le panier va être vidé. Continuer ?')){s.value=cur.id;return}
  cur=r;cart={};draw()})}

function draw(){$('rt').textContent=cur.name;$('ra').textContent=cur.area+', Marrakech';
 var q=clean($('q').value,40).toLowerCase(),m=$('menu');m.replaceChildren();
 cur.menu.forEach(function(c){var its=c.items.filter(function(i){return !q||i.name.toLowerCase().indexOf(q)>-1});if(!its.length)return;
  var s=el('section',undefined,'cg');s.append(el('h3',c.cat));
  its.forEach(function(i){var r=el('div',undefined,'it'),t=el('div');t.append(el('b',i.name));if(i.desc)t.append(el('small',i.desc));
   var p=el('span',i.price==null?'Prix à confirmer':i.price+' '+D.currency,'pr'),ctl=el('div',undefined,'qty');
   var mi=el('button','−','qb'),n=el('span',cart[i.id]||0,'qn'),pl=el('button','+','qb');
   mi.type=pl.type='button';mi.setAttribute('aria-label','Retirer '+i.name);pl.setAttribute('aria-label','Ajouter '+i.name);
   mi.onclick=function(){if(cart[i.id]>0){cart[i.id]--;n.textContent=cart[i.id];sum()}};
   pl.onclick=function(){cart[i.id]=Math.min((cart[i.id]||0)+1,20);n.textContent=cart[i.id];sum()};
   ctl.append(mi,n,pl);r.append(t,p,ctl);s.append(r)});m.append(s)});sum()}

function sum(){var l=$('lines');l.replaceChildren();var any=false;
 items().forEach(function(i){var q=cart[i.id]||0;if(q){any=true;l.append(el('li',q+' × '+i.name+(i.price==null?' — prix à confirmer':' — '+q*i.price+' '+D.currency)))}});
 if(!any)l.append(el('li','Panier vide','empty'));$('tot').textContent=total()+' '+D.currency+(pend()?' + prix à confirmer':'');$('er').textContent=''}

$('q').addEventListener('input',draw);
$('send').addEventListener('click',function(){var er=$('er');
 var name=clean($('nm').value,50),ph=clean($('ph').value,20),ad=clean($('ad').value,160),nt=clean($('nt').value,200);
 if(count()<=0){er.textContent='Choisissez au moins un plat.';return}
 if(name.length<2){er.textContent='Entrez votre nom.';return}
 if(ad.length<8){er.textContent='Entrez une adresse de livraison complète.';return}
 if(ph&&!/^[0-9+ ]{8,18}$/.test(ph)){er.textContent='Numéro de téléphone invalide.';return}
 var L=['*Nouvelle commande SpeedKech*','Restaurant : '+cur.name+' ('+cur.area+')',''];
 items().forEach(function(i){var q=cart[i.id]||0;if(q)L.push('- '+q+' x '+i.name+(i.price==null?' (prix à confirmer)':' ('+q*i.price+' '+D.currency+')'))});
 L.push('','Total plats : '+total()+' '+D.currency+(pend()?' + plats à prix à confirmer':'')+' (+ frais de livraison)','Nom : '+name);
 if(ph)L.push('Téléphone : '+ph);L.push('Adresse : '+ad);if(nt)L.push('Notes : '+nt);
 var num=String(D.whatsapp).replace(/\D/g,'');
 window.open('https://wa.me/'+num+'?text='+encodeURIComponent(L.join('\n')),'_blank','noopener,noreferrer')});

pickRestos();draw();
})();