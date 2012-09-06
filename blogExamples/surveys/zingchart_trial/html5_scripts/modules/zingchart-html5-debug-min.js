/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120731
*/
ZC.YB={};ZC.QU.push("debug");
ZC.BP.X5=function(a){var e="";a=a.replace(/\t|\r|\n/g,"");for(var h=0,b=0,g=0,d="",c=0,f=a.length;c<f;c++){I1=a.substr(c,1);switch(I1){case '"':h=!h;e+=a.substr(c,1);d=I1;break;case "{":e+=a.substr(c,1);if(!h){e+="\n"+Array(g+1).join("    ");g++;d=I1}break;case "}":if(!h){e+="\n"+Array(g-2+1).join("    ");g--;d=I1}e+=a.substr(c,1);break;case "[":b=a.indexOf("]",c);d=a.indexOf("}",c);d=d==-1?999999:d;var i=a.indexOf("{",c);i=i==-1?999999:i;d=ZC.CT(d,i);if(b<d){b=1;e+=a.substr(c,1)}else{b=0;e+=a.substr(c,
1);e+="\n"+Array(g+1).join("    ");g++}d=I1;break;case "]":if(b)b=0;if(d=="}"){g--;e+="\n"+Array(g-1+1).join("    ")}e+=a.substr(c,1);d=I1;break;case " ":if(h){e+=a.substr(c,1);d=I1}break;case ",":e+=a.substr(c,1);if(!h&&!b)e+="\n"+Array(g-1+1).join("    ");d=I1;break;default:e+=a.substr(c,1);d=I1}}return e};
ZC.LM.prototype.A0N=function(){var a=this;ZC.L.HW({cls:"zc-abs zc-viewsource zc-style",id:a.P+"-viewsource",p:ZC.AN(a.P+"-top"),wh:a.G-(ZC.quirks?0:10)+"/"+(a.E-(ZC.quirks?0:10))}).innerHTML='<div class="zc-form-row-label zc-form-s1">'+ZC.F7["viewsource-jsonsource"]+'</div><div class="zc-form-row-element"><textarea id="'+a.P+'-viewsource-json" style="width:'+(a.G-35)+"px;height:"+(a.E-95)+'px;"></textarea></div><div class="zc-form-row-element zc-form-row-last"><input type="button" value="'+ZC.F7["viewsource-close"]+
'" id="'+a.P+'-viewsource-close"/></div>';ZC.A3("#"+a.P+"-viewsource-json").val(ZC.BP.X5(a.I.json));ZC.A3("#"+a.P+"-viewsource-close").bind("click",function(){ZC.L.FA(a.P+"-viewsource")})};
ZC.LM.prototype.A0O=function(){var a=this;if(a.G<300||a.E<300)window.open("http://www.zingchart.com/support/","","");else{var e=ZC.L.HW({cls:"zc-abs zc-bugreport zc-style",id:a.P+"-bugreport",p:ZC.AN(a.P+"-top"),wh:a.G-(ZC.quirks?0:10)+"/"+(a.E-(ZC.quirks?0:10))}),h="";h+='<div class="zc-form-row-label zc-form-s0">'+ZC.F7["bugreport-header"]+'</div><div class="zc-form-row-label"><input type="checkbox" id="'+a.P+'-chkdata" checked="checked"/><label for="'+a.P+'-chkdata">'+ZC.F7["bugreport-senddata"]+
"</label>";if(ZC.canvas)h+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="'+a.P+'-chkcapture" checked="checked"/><label for="'+a.P+'-chkcapture">'+ZC.F7["bugreport-sendcapture"]+"</label>";h+='</div><div class="zc-form-row-label zc-form-s1">'+ZC.F7["bugreport-yourcomment"]+'</div><div class="zc-form-row-element"><textarea id="'+a.P+'-bugreport-comment" style="width:'+(a.G-35)+"px;height:"+(a.E-300)/2+'px;"></textarea></div><div class="zc-form-row-label zc-form-s1">'+ZC.F7["bugreport-jsondata"]+
'</div><div class="zc-form-row-element"><textarea id="'+a.P+'-bugreport-json" style="width:'+(a.G-35)+"px;height:"+(a.E-210)/2+'px;"></textarea></div><div class="zc-form-row-label zc-form-s1">'+ZC.F7["bugreport-youremail"]+(a.G>=510?"<span>("+ZC.F7["bugreport-infoemail"]+")</span>":"")+'</div><div class="zc-form-row-element"><input type="text" id="'+a.P+'-bugreport-email" style="width:'+(a.G-35)+'px;"/></div><div class="zc-form-row-element zc-form-row-last"><input type="button" value="'+ZC.F7["bugreport-submit"]+
'" id="'+a.P+'-bugreport-submit"/><input type="button" value="'+ZC.F7["bugreport-cancel"]+'" id="'+a.P+'-bugreport-cancel"/></div>';e.innerHTML=h;ZC.A3("#"+a.P+"-bugreport-json").val(ZC.BP.X5(a.I.json));ZC.A3("#"+a.P+"-bugreport-cancel").bind("click",function(){ZC.L.FA(a.P+"-bugreport")});ZC.A3("#"+a.P+"-bugreport-submit").bind("click",function(){var b=ZC.A3("#"+a.P+"-bugreport-email");if(/^((\w+\+*\-*)+\.?)+@((\w+\+*\-*)+\.?)*[\w-]+\.[a-z]{2,6}$/.test(b.val())){var g="";if(ZC.canvas)g=a.QT("png");
var d=a.I.json.replace(/\r|\n|\t|(\s{2,})/g,""),c="",f=[];ZC.A3("#"+a.P+"-chkcapture").attr("checked")&&f.push("****IMAGE:",g);ZC.A3("#"+a.P+"-chkdata").attr("checked")&&f.push("****JSON:",d);f.push("****COMMENT:",ZC.A3("#"+a.P+"-bugreport-comment").val(),"****EMAIL:",b.val(),"****VERSION:",ZC.VERSION,"****WIDTH:",a.G,"****HEIGHT:",a.E,"****URL:",window.location.href,"****UA:",navigator.userAgent,"****RENDER:",a.A5.toUpperCase(),"****RESOLUTION:",screen.width+"x"+screen.height);for(b=0;b<f.length-
1;b+=2)c+=f[b]+encodeURIComponent(f[b+1]);c+="****END";b=ZC.L.A0I(ZC.AN(a.P+"-bugreport"));f=b.createElement("FORM");f.action="http://www.zingchart.com/support/submitreportH5.php";f.method="post";b.body.appendChild(f);b=b.createElement("INPUT");b.type="text";b.name="data";b.value=c;f.appendChild(b);f.submit();window.setTimeout(function(){alert(ZC.F7["bugreport-confirm"]);ZC.L.FA(a.P+"-bugreport")},1E3)}else b.val(ZC.F7["bugreport-emailmandatory"])})}};
