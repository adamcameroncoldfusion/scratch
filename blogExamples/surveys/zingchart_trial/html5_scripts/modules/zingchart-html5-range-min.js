/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120731
*/
ZC.QU.push("range");ZC.ZE=ZC.KU.B6({$i:function(a){this.b(a);this.AC="range";this.B0=new ZC.WX(this);this.AQ[ZC._[25]]=1;this.AQ[ZC._[57]]=0}});ZC.WX=ZC.J7.B6({A26:function(){return new ZC.O7(this)}});
ZC.O7=ZC.OH.B6({$i:function(a){this.b(a);this.AC="range";this.T=1;this.CJ="segmented";this.N1=3;this.DW=0.5},OD:function(){return new ZC.WV(this)},parse:function(){this.AZ=this.JB();this.BM=this.AZ[0];this.AT=this.AZ[1];this.Y=this.AZ[0];this.A8=this.AZ[1];this.loadXPalette();this.b();this.Q4("alpha-area","DW","f",0,1);this.B3=this.D.B2(this.BB("k")[0]);this.D6=this.D.B2(this.BB("v")[0])},JP:function(){var a=this.D.O;this.T=1;if(!this.B3.D2){if(!this.WI&&(this.B3.A0-this.B3.W)*5>a.G)this.T=ZC._i_((this.B3.A0-
this.B3.W)*5/a.G);if(this.D.KL)this.T*=2}if(this.B3.D2){a=0;for(var d=this.Q.length;a<d;a++)if(this.Q[a]!=null&&ZC.DQ(this.Q[a].CO,this.B3.Z[this.B3.W],this.B3.Z[this.B3.A0])){this.Q[a].X=this.H2;this.Q[a].MF="min";this.Q[a].paint();this.Q[a].MF="max";this.Q[a].paint()}}else for(a=this.B3.W;a<=this.B3.A0;a+=this.T)if(this.Q[a]!=null){this.Q[a].MF="min";this.Q[a].paint();this.Q[a].MF="max";this.Q[a].paint()}},paint:function(){this.b();this.H2=this.BE("bl",0);this.Q3=ZC.L.CN(this.BE("bl",1),this.H.A5);
this.KH=ZC.L.CN(this.BE("bl",2),this.H.A5);this.JP();this.CE=this.C=null}});
ZC.WV=ZC.GN.B6({$i:function(a){this.b(a);this.C6=this.BO=null;this.MF="min"},KJ:function(a,d){this.DN=[["%node-min-value",this.BO],["%node-max-value",this.C6]];return a=this.b(a,d)},ZI:function(){if(this.o[ZC._[11]][1]instanceof Array){if(typeof this.o[ZC._[11]][0]=="string"){var a=ZC.AH(this.D.I5,this.o[ZC._[11]][0]);if(a!=-1)this.CO=a;else{this.D.I5.push(this.o[ZC._[11]][0]);this.CO=this.D.I5.length-1}}else this.CO=ZC._f_(this.o[ZC._[11]][0]);if(this.CO!=null)if(this.A.JR[this.CO]==null||ZC.AH(this.A.JR[this.CO],
this.J)==-1)this.A.SF(this.CO,this.J);var d=this.o[ZC._[11]][1]}else d=this.o[ZC._[11]];if(typeof d[0]=="string"){a=ZC.AH(this.D.HP,d[0]);if(a!=-1)this.BO=a;else{this.D.HP.push(d[0]);this.BO=this.D.HP.length-1}}else this.BO=ZC._f_(d[0]);this.CW.push(this.BO);if(typeof d[1]=="string"){a=ZC.AH(this.D.HP,d[1]);if(a!=-1)this.C6=a;else{this.D.HP.push(d[1]);this.C6=this.D.HP.length-1}}else this.C6=ZC._f_(d[1]);this.D0=d.join(" ");this.A9=this.C6},setup:function(){var a=this.A.B3,d=this.A.D6,g=[a.W,a.A0,
d.W,d.A0,this.MF];if(this.A6==null)this.A6=[];if(this.FB!=g){this.iX=this.CO!=null?a.B8(this.CO):a.MG(this.J);this.iY=d.B8(this.MF=="min"?this.BO:this.C6);this.FB=g}if(!this.FO){this.copy(this.A);this.DK=this.A.DK;this.C4()&&this.parse();this.I.PV=d.B8(this.BO);this.I.PU=d.B8(this.C6);this.FO=1}},PA:function(){return{color:this.AT}},PX:function(){return{"background-color":this.AT,color:this.BM}},paint:function(){var a=this,d;a.b();var g=a.A.KH,e=a.A.B3,c=a.A.Q;a.setup();if(a.A.o[a.MF+"-line"]!=null){a.append(a.A.o[a.MF+
"-line"]);a.parse()}a.CL=0;a.BT=a.A.BE("bl",1);var k=[],f=[];switch(a.A.CJ){default:var b=1;if(!e.D2&&a.J<=e.W)b=0;if(c[a.J-a.A.T]==null)b=0;if(b){c[a.J-a.A.T].MF=a.MF;c[a.J-a.A.T].setup();b=[a.iX,a.I.PV];var j=[c[a.J-a.A.T].iX,c[a.J-a.A.T].I.PV],h=[a.iX,a.I.PU],i=[c[a.J-a.A.T].iX,c[a.J-a.A.T].I.PU];b=ZC.AV._ipoint_(b,j,h,i);b=ZC.DQ(b[0],c[a.J-a.A.T].iX,a.iX)?b:ZC.AV.IT(c[a.J-a.A.T].iX,c[a.J-a.A.T].iY,c[a.J].iX,c[a.J].iY);f.push([ZC._i_(b[0]),b[1]]);k.push([b[0],b[1]])}f.push([ZC._i_(a.iX),a.iY]);
k.push([a.iX,a.iY]);b=1;if(!e.D2&&a.J>=e.A0)b=0;if(c[a.J+a.A.T]==null)b=0;if(b){c[a.J+a.A.T].MF=a.MF;c[a.J+a.A.T].setup();b=[a.iX,a.I.PV];j=[c[a.J+a.A.T].iX,c[a.J+a.A.T].I.PV];h=[a.iX,a.I.PU];i=[c[a.J+a.A.T].iX,c[a.J+a.A.T].I.PU];b=ZC.AV._ipoint_(b,j,h,i);b=ZC.DQ(b[0],c[a.J+a.A.T].iX,a.iX)?b:ZC.AV.IT(c[a.J].iX,c[a.J].iY,c[a.J+a.A.T].iX,c[a.J+a.A.T].iY);f.push([ZC._i_(b[0]),b[1]]);k.push([b[0],b[1]])}break;case "spline":if(typeof a.I["intersect.index"]==ZC._[33]){a.I["intersect.index"]=-1;if(c[a.J+
a.A.T]!=null){i=[];h=[];for(b=-1;b<3;b++)if(c[a.J+b]!=null){c[a.J+b].setup();i.push(c[a.J+b].I.PV);h.push(c[a.J+b].I.PU)}else{i.push(a.I.PV);h.push(a.I.PU)}i=ZC.AV.OR(i,ZC._i_(e.V*a.A.T));var l=ZC.AV.OR(h,ZC._i_(e.V*a.A.T));if(c[a.J+a.A.T].BO==c[a.J+a.A.T].C6)a.I["intersect.index"]=i.length;else{d=i[0][1]-l[0][1];b=1;for(h=i.length;b<h;b++)if(Math.round(d*(i[b][1]-l[b][1]),2)<=0){a.I["intersect.index"]=b+1;break}}a.I["spline.points.min"]=i;a.I["spline.points.max"]=l}}if(a.A.T6==null)a.A.T6={};if(a.A.LH==
null)a.A.LH={};i=[];l=[];if(a.MF=="min"){if(a.A.LH.max!=null)for(b=a.A.LH.max.length-1;b>=0;b--)a.A6.push(a.A.LH.max[b]);if((d=a.A.LH.min)!=null){b=0;for(h=d.length;b<h;b++)a.A6.push(d[b])}}if((d=a.A.T6[a.MF])!=null){k=[];b=0;for(h=d.length;b<h;b++)k.push(d[b])}if(c[a.J+a.A.T]!=null){if(a.MF=="min")j=a.I["spline.points.min"];else if(a.MF=="max")j=a.I["spline.points.max"];c=a.I["intersect.index"]==-1?ZC._i_(j.length/2):a.I["intersect.index"];for(b=0;b<c;b++){k.push([a.iX+(e.AF?-1:1)*j[b][0]*e.V,j[b][1]]);
f.push([ZC._i_(a.iX+(e.AF?-1:1)*j[b][0]*e.V),j[b][1]])}d=a.DW==1?ZC.CT(2,c):1;b=c-1;for(h=j.length;b<h;b++)i.push([a.iX+(e.AF?-1:1)*j[b][0]*e.V,j[b][1]]);b=c-d;for(h=j.length;b<h;b++)l.push([ZC._i_(a.iX+(e.AF?-1:1)*j[b][0]*e.V),j[b][1]])}else{k.push([c[a.J].iX,c[a.J].iY]);i.push([ZC._i_(c[a.J].iX),c[a.J].iY]);f.push([ZC._i_(c[a.J].iX),c[a.J].iY]);l.push([ZC._i_(c[a.J].iX),c[a.J].iY])}a.A.T6[a.MF]=i;a.A.LH[a.MF]=l}if(a.MF=="min"){b=0;for(h=f.length;b<h;b++)a.A6.push(f[b])}else for(b=f.length-1;b>=
0;b--)a.A6.push(f[b]);if(a.MF=="max"){f=new ZC.CY(a.A);f.P=a.P+"-area";f.X=a.A.BE("bl",0);f.copy(a);f.AG=0;f.AE=0;f.EN=0;f.G2=0;f.parse();f.C=a.A6;f.AB=a.A.DW;c=a.D.O;f.DP=[c.iX,c.iY,c.iX+c.G,c.iY+c.E];f.paint();a.I.pointsarea=[];b=0;for(h=a.A6.length;b<h;b++)a.I.pointsarea.push(a.A6[b]);a.A6=[];f=f.DF();c=a.D.P+ZC._[36]+a.D.P+"-plot-"+a.A.J+ZC._[6];a.A.A.FZ.push(ZC.L.DJ("poly")+'class="'+c+'" id="'+a.P+"--area"+ZC._[32]+f+'"/>')}a.I.points=k;f=new ZC.E5(a);f.copy(a);f.append(a.A.o[a.MF+"-line"]);
f.parse();ZC.BW.setup(g,f);ZC.BW.paint(g,f,k);if(ZC.DQ(a.iX,e.iX-1,e.iX+e.G+1)&&ZC.DQ(a.iY,e.iY-1,e.iY+e.E+1)){g=new ZC.CY(a.A);g.P=a.P+"-marker";g.X=a.A.BE("fl",0);g.X=a.D.X;g.iX=a.iX;g.iY=a.iY;g.AT=a.A.AZ[3];g.BQ=a.A.AZ[3];g.Y=a.A.AZ[2];g.A8=a.A.AZ[2];g.append(a.A.AI.o);g.parse();g.GW=function(m){return a.GW(m)};g.C4()&&g.parse();if(g.AM&&g.AC!="none"){a.A.IE>e.A0-e.W&&g.paint();a.I["marker.type"]=g.E9;c=a.D.P+ZC._[36]+a.D.P+ZC._[37]+a.A.J+ZC._[6];e.AF&&k.reverse();f=ZC.AV.N2(ZC.AV.TV(a.I.points),
4);f!=""?a.A.A.FZ.push(ZC.L.DJ("poly")+'class="'+c+'" id="'+a.P+"--"+a.MF+ZC._[32]+f+'"/>'):a.A.A.FZ.push(ZC.L.DJ("circle")+'class="'+c+'" id="'+a.P+"--"+a.MF+ZC._[32]+ZC._i_(g.iX+ZC.MAPTX)+","+ZC._i_(g.iY+ZC.MAPTX)+","+ZC._i_(ZC.BR(3,g.AU)*1.5)+'"/>')}a.A.U!=null&&a.G9()}},A2F:function(){var a=this;if(!ZC.move){var d=a.A.B3;if(a.A.F2!=null&&a.A.AM){var g=ZC.L.CN(a.D.P+ZC._[24],a.H.A5),e=new ZC.CY(a.A);e.P=a.P+"-area-hover";e.X=ZC.AN(a.D.P+ZC._[24]);e.JL=1;e.copy(a);e.append(a.A.FK.o);e.C=a.I.pointsarea;
e.parse();e.AB=a.A.DW;var c=a.D.O;e.DP=[c.iX,c.iY,c.iX+c.G,c.iY+c.E];ZC.BW.setup(g,e);e.paint();g=ZC.L.CN(a.D.P+ZC._[24],a.H.A5);e=new ZC.E5(a.A);e.P=a.P+"-line-hover";e.CL=0;e.AT=a.A.AZ[3];e.append(a.A.FK.o);e.parse();e.GW=function(k){return a.GW(k)};e.C4()&&e.parse();ZC.BW.setup(g,e);ZC.BW.paint(g,e,a.I.points)}if(a.A.IE>d.A0-d.W)if(a.A.F2!=null&&a.A.AM){a.b();d=new ZC.CY(a.A);d.P=a.P+"-area-hover";d.X=ZC.AN(a.D.P+ZC._[24]);d.E9=a.I["marker.type"];d.iX=a.iX;d.iY=a.iY;d.AT=a.A.AZ[3];d.BQ=a.A.AZ[3];
d.Y=a.A.AZ[2];d.A8=a.A.AZ[2];d.append(a.A.F2.o);d.parse();d.GW=function(k){return a.GW(k)};d.C4()&&d.parse();d.AM&&d.AC!="none"&&d.paint()}}}});