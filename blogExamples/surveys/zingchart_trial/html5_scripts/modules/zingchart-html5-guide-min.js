/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120731
*/
ZC.QU.push("guide");
ZC.ZT=ZC.BX.B6({$i:function(D){this.H=D;this.OB=0;this.LD=this.BI=null},unbind:function(){this.BI&&window.clearInterval(this.BI);ZC.A3(document.body).unbind(ZC.L.B7(ZC._[50]),this.LD);ZC.mobile&&ZC.A3(document.body).unbind(ZC.L.B7(ZC._[49]),this.LD)},bind:function(){function D(){if(K==0||L==0){K=ZC.A3(u).width();L=ZC.A3(u).height()}ZC.MD!=null&&ZC.MD!=u.id&&ZC.AN(ZC.MD)&&ZC.L.J1(ZC.AN(ZC.MD),l.H.A5,0,0,ZC.A3("#"+ZC.MD).width(),ZC.A3("#"+ZC.MD).height());ZC.MD=u.id;ZC.L.J1(u,l.H.A5,0,0,K,L);ZC.A3(".zc-guide-label").remove()}
var l=this,G=l.H.P,u=ZC.AN(G+"-guide-c"),O=ZC.L.CN(u,l.H.A5),K=ZC.A3(u).width(),L=ZC.A3(u).height(),M={},H={},E={};if(!ZC.mobile&&ZC.TS==null)ZC.TS=window.setInterval(function(){for(var s=1,c=0,p=zingchart.GT.length;c<p;c++)if(ZC.AN(zingchart.GT[c].P+"-top")!=null){var e=ZC.A3("#"+zingchart.GT[c].P+"-top").offset();if(ZC.EL[0]>=e.left&&ZC.EL[0]<=e.left+zingchart.GT[c].G&&ZC.EL[1]>=e.top&&ZC.EL[1]<=e.top+zingchart.GT[c].E)s=0}else{window.clearInterval(ZC.TS);ZC.TS=null}s&&D()},500);l.LD=function(s){if(!ZC.move){if(l.H.TD||
ZC.AN(G+"-top")==null)return false;if(!ZC.L.ZZ(ZC.AN(G+"-top")))return false;var c=[],p=ZC.L.KW(s);s=p[0];p=p[1];var e=ZC.A3("#"+G+"-top").offset();s=s-e.left;p=p-e.top;for(var v=null,a=0,i=l.H.AY.length;a<i;a++){e=l.H.AY[a].O;if(ZC.DQ(s,e.iX-5,e.iX+e.G+5)&&ZC.DQ(p,e.iY-5,e.iY+e.E+5))v=l.H.AY[a]}var I=0;if(v!=null){c.push(v);if(v!=null&&v.G1!=null)I=v.G1.o.shared!=null&&ZC._b_(v.G1.o.shared);a=0;for(i=l.H.AY.length;a<i;a++)if(l.H.AY[a]!=v){e=l.H.AY[a].O;var z=l.H.AY[a].G1,b=l.H.AY[a].IL,h=z&&z.o.shared!=
null&&ZC._b_(z.o.shared);if((z!=null||b!=null)&&ZC.DQ(s,e.iX-5,e.iX+e.G+5)&&(ZC.DQ(p,e.iY-5,e.iY+e.E+5)||I&&h))c.push(l.H.AY[a])}}if(c.length==0){M={};H={};E={};if(l.OB){D();l.OB=0}}if(c.length>0){l.OB=1;var d=v=0;for(I=c.length;d<I;d++){var j=0;if(M[d]==null)M[d]={};if(H[d]==null)H[d]={};if(E[d]==null)E[d]={};if((c[d].G1||c[d].IL)&&c[d].KR=="ready"){z=[];b=[];var t=[],w=[];h=[];var n=[],C={};e=c[d].O;a=0;for(i=c[d].B0.AA.length;a<i;a++)if(c[d].I["plot"+a+".visible"]){var k=c[d].B2(c[d].B0.AA[a].BB("k")[0]);
s=ZC._l_(s,k.AF?k.iX+k.CK:k.iX+k.A2,k.AF?k.iX+k.G-k.A2:k.iX+k.G-k.CK);var x=k.D2&&c[d].B0.AA[a].D2?k.KC(s,c[d].B0.AA[a]):k.KC(s);if(x!=null){var f=[];f=typeof x.length==ZC._[33]||x.length==0?[x]:x;if(c[d].G1!=null){for(var o=0,A=f.length;o<A;o++){x=f[o];var J=null,m=c[d].B0.AA[a].GG(x);if(m){m.setup();var q=m.iX,r=m.iY;if(typeof m.I.A1J!=ZC._[33])q=ZC._i_(m.I.A1J);if(typeof m.I.ZS!=ZC._[33])r=ZC._i_(m.I.ZS);C[a]={index:x,y:r};var g=new ZC.D1(k);g.X=g.BT=u;g.P=c[d].P+"-guide-label-"+x+"-"+a;g.F1=c[d].P+
"-guide-label zc-guide-label";var y=m.XK();g.Y=g.A8=ZC.BP.KV(y[ZC._[0]]);g.BM=y.color;g.AX=m.A.QD;g.append(c[d].G1.o["plot-label"]);g.append(c[d].G1.o["value-label"]);g.append(c[d].B0.AA[a].o["guide-label"]);var B=ZC.BP.OC(g.o);g.KJ=function(N){return m.KJ(N,B)};m.ZY();y="auto";if((F=g.o[ZC._[9]])!=null)y=F;g.I[ZC._[9]]=y;g.HF=1;g.I.plotidx=m.A.J;g.I.nodeidx=m.J;g.parse();z.push({plotindex:m.A.J,nodeindex:m.J,value:m.A9,text:g.AX});if(ZC.DQ(m.iX,e.iX,e.iX+e.G)){g.I["marker-x"]=q;g.I["marker-y"]=r;
g.I["guide-style"]=m.XK();switch(y){default:if(m.iX>=e.iX+e.G/2){g.iX=q-g.G-6;g.F8="right"}else{g.iX=q+6;g.F8="left"}g.iY=r-g.CG/2;if(g.iY<e.iY)g.iY=e.iY;if(g.iY+g.E>e.iY+e.E)g.iY=e.iY+e.E-g.E;g.CR=[q,r];break;case "top":g.iX=q-g.G/2;g.iY=e.iY;g.F8="bottom";g.CR=[q,g.iY+g.E+6];break;case "bottom":g.iX=q-g.G/2;g.iY=e.iY+e.E-g.E;g.F8="top";g.CR=[q,g.iY-6]}b.push(g);H[d][a]=g;j=1}}}if(!m)continue}if(ZC.AH(n,k.BH)==-1&&c[d].G1&&ZC.DQ(m.iX,e.iX,e.iX+e.G))if(J==null){f=new ZC.D1(k);f.X=f.BT=u;f.P=c[d].P+
"-guide-scale-x-label-"+a;f.F1=c[d].P+"-guide-label zc-guide-label";f.Y=f.A8=k.AT;f.BM=c[d].AQ["3d"]?"#999":"#fff";f.OY=1;f.append(c[d].G1.o["scale-label"]);f.append(c[d].G1.o[k.BH+"-label"]);f.HF=1;f.I.nodeidx=m.J;B=ZC.BP.OC(f.o);f.KJ=function(N){return k.KJ(N,x,k.D2&&c[d].B0.AA[a].D2?c[d].B0.AA[a]:null,B)};f.parse();if(k.BH==ZC._[52]){f.F8="top";f.iY=k.I.iY+6;f.CR=[q,k.I.iY]}else{f.F8="bottom";f.iY=k.I.iY-f.E-6;f.CR=[m.iX,k.I.iY]}f.iX=m.iX-f.G/2;if(f.AM){h.push(f);n.push(k.BH);E[d][a]=f;j=1}k.BH==
ZC._[52]?t.push(null,[q,k.I.iY],[q,c[d].O.iY]):t.push(null,[q,k.I.iY],[q,c[d].O.iY+c[d].O.E])}else{h.push(J);n.push(k.BH)}o=c[d].B2(c[d].B0.AA[a].BB("v")[0]);if(ZC.AH(n,o.BH)==-1&&c[d].IL&&ZC.DQ(p,e.iY,e.iY+e.E))if(J==null){A="single";if(c[d].IL.o.type&&c[d].IL.o.type=="multiple")A="multiple";if(A=="multiple"&&C[a]!=null)p=C[a].y;f=new ZC.D1(o);f.X=f.BT=u;f.P=c[d].P+"-guide-scale-y-label-"+a;f.F1=c[d].P+"-guide-label zc-guide-label";r=o.AT;if(A=="multiple")r=c[d].B0.AA[a].AT;f.Y=f.A8=r;f.BM=c[d].AQ["3d"]&&
A!="multiple"?"#999":"#fff";f.OY=1;f.append(c[d].IL.o["scale-label"]);f.append(c[d].IL.o[o.BH+"-label"]);f.HF=1;r=o.ME(p);B=o.M6();ZC._cp_(ZC.BP.OC(f.o),B);B.utc=c[d].R5;r=ZC.BP.M2(r,B,o,false);if(o.E4!=null)r=o.E4.replace(/%v/g,r);f.o.text=r;f.parse();if(o.BH==ZC._[53]){f.F8="right";f.iX=o.I.iX-f.G-6}else{f.F8="left";f.iX=o.I.iX+6}f.CR=[o.I.iX,p];f.iY=p-f.E/2;if(f.AM){h.push(f);if(A!="multiple"||C[a]==null)n.push(o.BH);E[d][a]=f;j=1}w.push(null,[o.I.iX,p],[c[d].O.iX+(o.BH==ZC._[53]?c[d].O.G:0),p])}else{h.push(J);
n.push(o.BH)}}}if(j){if(!v){D();v=1}if(t.length>0){if(c[d].AQ["3d"]){c[d].JC();i=0;for(n=t.length;i<n;i++)if(t[i]!=null){j=new ZC.C0(c[d],t[i][0]-ZC.AK.DZ,t[i][1]-ZC.AK.DY,0);t[i][0]=j.DD[0];t[i][1]=j.DD[1]}}ZC.BW.paint(O,c[d].G1,t)}if(w.length>0){if(c[d].AQ["3d"]){c[d].JC();i=0;for(n=w.length;i<n;i++)if(w[i]!=null){j=new ZC.C0(c[d],w[i][0]-ZC.AK.DZ,w[i][1]-ZC.AK.DY,0);w[i][0]=j.DD[0];w[i][1]=j.DD[1]}}ZC.BW.paint(O,c[d].IL,w)}if(b.length>1)for(i=1;i;)for(a=i=0;a<b.length-1;a++)if(b[a].AM)if(b[a].iY>
b[a+1].iY){i=b[a];b[a]=b[a+1];b[a+1]=i;i=1}if(b.length>0){i=[];j=1;t=0;for(w=b.length*b.length;j&&t<w;){t++;for(a=j=0;a<b.length-1;a++)if(b[a].AM)if(b[a+1].iY<b[a].iY+b[a].E){if(b[a+1].iY-b[a].E-4<e.iY&&ZC.AH(i,b[a])==-1){i.push(b[a]);b[a].iY=e.iY}b[a+1].iY=b[a].iY+b[a].E+4;if(b[a+1].iY+b[a+1].E>e.iY+e.E){j=b[a+1].iY-(e.iY+e.E-b[a+1].E);n=0;for(C=b.length;n<C;n++)if(b[n].iY-j>=e.iY)b[n].iY-=j;else{b[n].iY=e.iY;if(n>0)b[n].iX=b[a+1].I["marker-x"]<e.iX+e.G/2?b[n-1].iX+b[n-1].G+4:b[n-1].iX-b[n].G-4}}j=
1}}}a=0;for(i=h.length;a<i;a++){if(c[d].AQ["3d"]){c[d].JC();j=new ZC.C0(c[d],h[a].iX+h[a].G/2-ZC.AK.DZ,h[a].iY+h[a].E/2-ZC.AK.DY,0);h[a].iX=j.DD[0]-h[a].G/2;h[a].iY=j.DD[1]-h[a].E/2;j=new ZC.C0(c[d],h[a].CR[0]-ZC.AK.DZ,h[a].CR[1]-ZC.AK.DY,0);h[a].CR[0]=j.DD[0];h[a].CR[1]=j.DD[1]}h[a].paint()}a=0;for(i=b.length;a<i;a++)if(ZC.DQ(b[a].CR[0],e.iX-5,e.iX+e.G+5)&&ZC.DQ(b[a].CR[1],e.iY-5,e.iY+e.E+5)){if(b[a].AM){switch(b[a].I[ZC._[9]]){case "top":b[a].CR[1]=b[a].iY+b[a].E+b[a].GE;break;case "bottom":b[a].CR[1]=
b[a].iY-b[a].GE}if(ZC.AH(["top","bottom"],b[a].I[ZC._[9]])!=-1){h=b[a].iX+b[a].G/2;b[a].iX=ZC.BR(b[a].iX,0);b[a].iX=ZC.CT(b[a].iX,l.H.G-b[a].G);b[a].iY=ZC.BR(b[a].iY,0);b[a].iY=ZC.CT(b[a].iY,l.H.E-b[a].E);if(b[a].o["callout-offset"]==null)b[a].GC=ZC._i_(100*(h-b[a].iX-b[a].G/2)/(b[a].G-b[a].GR))}if(c[d].AQ["3d"]){c[d].JC();j=new ZC.C0(c[d],b[a].iX+b[a].G/2-ZC.AK.DZ,b[a].iY+b[a].E/2-ZC.AK.DY,0);b[a].iX=j.DD[0]-b[a].G/2;b[a].iY=j.DD[1]-b[a].E/2;j=new ZC.C0(c[d],b[a].CR[0]-ZC.AK.DZ,b[a].CR[1]-ZC.AK.DY,
0);b[a].CR[0]=j.DD[0];b[a].CR[1]=j.DD[1]}b[a].paint()}h=new ZC.CY(l);l.H.AR.load(h.o,"("+c[d].AC+").guide.marker");h.P=b[a].P+"-marker";h.X=h.BT=u;h.iX=b[a].I["marker-x"];h.iY=b[a].I["marker-y"];if(c[d].AQ["3d"]){c[d].JC();j=new ZC.C0(c[d],h.iX-ZC.AK.DZ,h.iY-ZC.AK.DY,0);h.iX=j.DD[0];h.iY=j.DD[1]}y=b[a].I["guide-style"];h.Y=h.A8=ZC.BP.KV(y[ZC._[0]]);h.BQ=y.color;h.append(c[d].G1.o.marker);h.append(c[d].B0.AA[b[a].I.plotidx].o["guide-marker"]);h.parse();h.AM&&h.E9!="none"&&h.paint()}e=c[d].N6();e.items=
z;ZC.BP.DA("guide_mousemove",l.H,e);c[d].MS(true)}}}}}};ZC.A3(document.body).bind(ZC.L.B7(ZC._[50]),l.LD);ZC.mobile&&ZC.A3(document.body).bind(ZC.L.B7(ZC._[49]),l.LD)}});
