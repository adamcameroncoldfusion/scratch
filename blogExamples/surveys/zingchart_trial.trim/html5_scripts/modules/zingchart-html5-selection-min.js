/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120731
*/
ZC.QU.push("selection");ZC.BP.UD=function(a){var e={},b=[];b=typeof a=="object"?a:JSON.parse(a);for(var c=0,o=b.length;c<o;c++)if((a=b[c])!=null){e["p"+c]={};var j=[];if(typeof a=="object")j=a;else if(typeof a=="string"&&/\d+\-\d+/.test(a)){a=a.split("-");if(a.length==2){j=[];for(var n=ZC._i_(a[0]);n<=ZC._i_(a[1]);n++)j.push(n)}}else j=[a];a=0;for(n=j.length;a<n;a++)e["p"+c]["n"+j[a]]=1}return e};
ZC.HZ.prototype.parseSelection=function(){var a;if((a=this.o.selection)!=null){this.D3=ZC.BP.UD(a);this.o.selection=null}};
zingchart.ZR=function(a,e,b){var c;if(document.getElementById("zc-fullscreen"))a="zc-fullscreen";b=b||{};if(typeof b=="string")b=JSON.parse(b);var o=zingchart.getLoader(a);if(o!=null)switch(e){case "clearselection":b=o.BS(b[ZC._[3]]);if(b!=null){b.D3={};e=0;for(var j=b.B0.AA.length;e<j;e++)b.HV[e]=0;b.FW=1;b.HA(true,true)}break;case "getselection":b=o.BS(b[ZC._[3]]);if(b!=null){a=[];e=0;for(j=b.B0.AA.length;e<j;e++){a[e]=null;if(b.D3["p"+e]!=null){var n=[],k;for(k in b.D3["p"+e])b.D3["p"+e].hasOwnProperty(k)&&
b.D3["p"+e][k]==1&&n.push(ZC._i_(k.replace("n","")));a[e]=n}}return a}return{};case "setselection":k={};a=[];if((c=b.selection)!=null)k=ZC.BP.UD(c);b=o.BS(b[ZC._[3]]);if(b!=null){b.D3=k;b.FW=1;b.HA(true,true)}break;case "select":var p=[];k=function(g){var q=0;if((c=g.toggle)!=null)q=ZC._b_(c);var f=o.BS(g[ZC._[3]]);if(f!=null){for(var d=0,h=f.B0.AA.length;d<h;d++)f.HV[d]=0;var m=null,l=null;if((c=g.plotindex)!=null)if(typeof c=="object")m=c;else if(typeof c=="string"&&/\d+\-\d+/.test(c)){d=c.split("-");
if(d.length==2){m=[];for(h=ZC._i_(d[0]);h<=ZC._i_(d[1]);h++)m.push(h)}}else m=[c];if((c=g.nodeindex)!=null)if(typeof c=="object")l=c;else if(typeof c=="string"&&/\d+\-\d+/.test(c)){d=c.split("-");if(d.length==2){l=[];for(h=ZC._i_(d[0]);h<=ZC._i_(d[1]);h++)l.push(h)}}else l=[c];if(m==null){m=[];d=0;for(h=f.B0.AA.length;d<h;d++)m.push(d)}d=0;for(h=m.length;d<h;d++){g=m[d];if(f.B0.AA[g]!=null){if(f.D3["p"+g]==null)f.D3["p"+g]={};if(l==null)for(var i=0,r=f.B0.AA[g].Q.length;i<r;i++)if(q)if(f.D3["p"+g]["n"+
i])delete f.D3["p"+g]["n"+i];else f.D3["p"+g]["n"+i]=1;else f.D3["p"+g]["n"+i]=1;else{i=0;for(r=l.length;i<r;i++)if(q)if(f.D3["p"+g]["n"+l[i]])delete f.D3["p"+g]["n"+l[i]];else f.D3["p"+g]["n"+l[i]]=1;else f.D3["p"+g]["n"+l[i]]=1}}}ZC.AH(p,f)==-1&&p.push(f)}};if(b instanceof Array)for(a=0;a<b.length;a++)k(b[a]);else k(b);for(a=0;a<p.length;a++){p[a].FW=1;p[a].HA(true,true)}}return null};
