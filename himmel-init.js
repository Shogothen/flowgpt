/* Himmel des Chartrechners: Verlaufsbild + echtes Sternenfeld */
var $=function(id){return document.getElementById(id)};
var sanft=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
/* ---------- Sternenfeld: echte Sternpositionen der Originalseite ---------- */
(function(){
  if(typeof HD_HIMMEL!=="undefined"&&HD_HIMMEL.verlauf){
    var el=$("himmel-bild");
    if(el)el.style.backgroundImage="url(data:image/png;base64,"+HD_HIMMEL.verlauf+")";
  }
  var c=$("sternenfeld"),ctx=c&&c.getContext&&c.getContext("2d");
  if(!ctx)return;
  var quelle=(typeof HD_HIMMEL!=="undefined"&&HD_HIMMEL.sterne)?HD_HIMMEL.sterne:[];
  var sterne=[],schweif=null,B=0,H=0,dpr=Math.min(window.devicePixelRatio||1,2);
  function neu(){
    B=window.innerWidth;H=window.innerHeight;
    c.width=B*dpr;c.height=H*dpr;c.style.width=B+"px";c.style.height=H+"px";
    ctx.setTransform(dpr,0,0,dpr,0,0);
    /* Originaldichte beibehalten und über die Fläche kacheln */
    var soll=Math.min(1400,Math.round(B*H/1e6*1855));
    sterne=[];
    for(var i=0;i<soll;i++){
      var s=quelle.length?quelle[i%quelle.length]:[Math.random(),Math.random(),1,.6];
      var kachel=Math.floor(i/Math.max(1,quelle.length));
      /* Die Originalpositionen stammen von einer breiten Seite und clustern am Rand.
         Auf schmalen Screens deshalb gleichmäßige Goldwinkel-Streuung, deterministisch. */
      var schmal=B<760;
      var px=schmal?((i*0.6180339887+s[0]*0.13)%1):((s[0]+kachel*0.37)%1);
      var py=schmal?((i*0.7548776662+s[1]*0.11)%1):((s[1]+kachel*0.61)%1);
      sterne.push({
        x:px*B,
        y:py*H,
        r:s[2],hell:s[3],
        t:Math.random()*6.28,v:.3+Math.random()*.7,drift:.015+Math.random()*.05
      });
    }
  }
  function zeichne(zeit){
    ctx.clearRect(0,0,B,H);
    for(var i=0;i<sterne.length;i++){
      var s=sterne[i];
      var a=sanft?s.hell*0.75:(s.hell*(0.55+0.45*Math.sin(zeit/1000*s.v+s.t)));
      ctx.globalAlpha=Math.max(0.04,Math.min(1,a));
      ctx.fillStyle="#fff";
      ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,6.283);ctx.fill();
      if(s.r>1.5){
        ctx.globalAlpha=Math.max(0,a*0.18);
        ctx.beginPath();ctx.arc(s.x,s.y,s.r*2.6,0,6.283);ctx.fill();
      }
      if(!sanft){s.y+=s.drift;if(s.y>H+2)s.y=-2}
    }
    if(!sanft){
      if(!schweif&&Math.random()<0.0014)schweif={x:Math.random()*B*.7,y:Math.random()*H*.35,l:0};
      if(schweif){
        schweif.l+=9;schweif.x+=7;schweif.y+=3.4;
        ctx.globalAlpha=Math.max(0,.65-schweif.l/280);
        ctx.strokeStyle="#fff";ctx.lineWidth=1.3;
        ctx.beginPath();ctx.moveTo(schweif.x,schweif.y);ctx.lineTo(schweif.x-56,schweif.y-27);ctx.stroke();
        if(schweif.l>320)schweif=null;
      }
    }
    ctx.globalAlpha=1;
    requestAnimationFrame(zeichne);
  }
  neu();window.addEventListener("resize",neu);
  requestAnimationFrame(zeichne);
})();
