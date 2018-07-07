/**
 * S
 *
 * Version   →  2.1.2
 * Github    →  https://github.com/ariiiman/s
 * License   →  https://opensource.org/licenses/MIT
 * Author    →  Copyright © 2018 Aristide Benoist
 * Website   →  https://www.aristidebenoist.com
 * Date      →  Jul 7, 2018
 */
var S={};(module.exports=S).M=function(t){S.BM(this,["gRaf","loop","updSvg","updLine","updProp"]),this.v=this.varsInit(t)},S.M.prototype={varsInit:function(t){var l={el:S.Select.el(t.el),e:{value:t.e||"linear"},d:{origin:t.d||0,curr:0},delay:t.delay||0,cb:t.cb||!1,cbDelay:t.cbDelay||0,reverse:t.reverse||!1,round:t.round,progress:0,time:{elapsed:0}};l.elL=l.el.length,S.Has(t,"update")?l.update=function(){t.update(l)}:S.Has(t,"svg")?l.update=this.updSvg:S.Has(t,"line")?l.update=this.updLine:l.update=this.updProp;var i=t.p||!1,e=t.svg||!1,s=t.line||!1;if(i){l.prop={},l.propPos=[];var r=Object.keys(i);l.propL=r.length;for(var n=0;n<l.propL;n++){var o=r[n];l.prop[n]={name:o,origin:{start:i[o][0],end:i[o][1]},curr:i[o][0],start:i[o][0],end:i[o][1],unit:i[o][2]||"%"},l.propPos[o.charAt(0)]=n}}else if(e)l.svg={type:e.type,attr:"polygon"===e.type?"points":"d",end:e.end,originArr:{},arr:{},val:[]},l.svg.start=e.start||l.el[0].getAttribute(l.svg.attr),l.svg.curr=l.svg.start,l.svg.originArr.start=this.svgSplit(l.svg.start),l.svg.originArr.end=this.svgSplit(l.svg.end),l.svg.arr.start=l.svg.originArr.start,l.svg.arr.end=l.svg.originArr.end,l.svg.arrL=l.svg.arr.start.length;else if(s){l.line={elWL:s.elWithLength,dashed:s.dashed,coeff:{start:void 0!==s.start?(100-s.start)/100:1,end:void 0!==s.end?(100-s.end)/100:0},shapeL:[],origin:{start:[],end:[]},curr:[],start:[],end:[]};for(n=0;n<l.elL;n++){var h;if(l.line.shapeL[n]=d(l.el[n]),l.line.dashed){for(var a=0,u=dashed.split(/[\s,]/),c=u.length,p=0;p<c;p++)a+=parseFloat(u[p])||0;var v="",f=Math.ceil(l.line.shapeL[n]/a);for(p=0;p<f;p++)v+=dashed+" ";h=v+"0 "+l.line.shapeL[n]}else h=l.line.shapeL[n];l.el[n].style.strokeDasharray=h,l.line.origin.start[n]=l.line.coeff.start*l.line.shapeL[n],l.line.origin.end[n]=l.line.coeff.end*l.line.shapeL[n],l.line.curr[n]=l.line.origin.start[n],l.line.start[n]=l.line.origin.start[n],l.line.end[n]=l.line.origin.end[n]}function d(t){if("circle"===t.tagName)return 2*t.getAttribute("r")*Math.PI;if("line"===t.tagName){var i=t.getAttribute("x1"),e=t.getAttribute("x2"),s=t.getAttribute("y1"),r=t.getAttribute("y2");return Math.sqrt((e-=i)*e+(r-=s)*r)}if("polyline"===t.tagName){for(var n,o=0,h=t.points.numberOfItems,a=0;a<h;a++){var u=t.points.getItem(a);0<a&&(o+=Math.sqrt(Math.pow(u.x-n.x,2)+Math.pow(u.y-n.y,2))),n=u}return o}return(t=l.line.elWL||t).getTotalLength()}}return l},play:function(t){this.pause(),this.varsUpd(t),setTimeout(this.gRaf,this.v.delay)},pause:function(){cancelAnimationFrame(this.raf),this.needEnd=!0},varsUpd:function(t){var i=t||{},e=S.Has(i,"reverse")&&i.reverse?"start":"end";if(S.Has(this.v,"prop"))for(var s=0;s<this.v.propL;s++)this.v.prop[s].end=this.v.prop[s].origin[e],this.v.prop[s].start=this.v.prop[s].curr,S.Has(i,"p")&&S.Has(i.p,this.v.prop[s].name)&&(S.Has(i.p[this.v.prop[s].name],"newEnd")&&(this.v.prop[s].end=i.p[this.v.prop[s].name].newEnd),S.Has(i.p[this.v.prop[s].name],"newStart")&&(this.v.prop[s].start=i.p[this.v.prop[s].name].newStart));else if(S.Has(this.v,"svg"))S.Has(i,"svg")&&S.Has(i.svg,"start")?this.v.svg.arr.start=i.svg.start:this.v.svg.arr.start=this.svgSplit(this.v.svg.curr),S.Has(i,"svg")&&S.Has(i.svg,"end")?this.v.svg.arr.end=i.svg.end:this.v.svg.arr.end=this.v.svg.originArr[e];else if(S.Has(this.v,"line")){for(s=0;s<this.v.elL;s++)this.v.line.start[s]=this.v.line.curr[s];if(S.Has(i,"line")&&S.Has(i.line,"end")){this.v.line.coeff.end=(100-i.line.end)/100;for(s=0;s<this.v.elL;s++)this.v.line.end[s]=this.v.line.coeff.end*this.v.line.shapeL[s]}else this.v.line.end[s]=this.v.line.origin[e][s]}this.v.d.curr=S.Has(i,"d")?i.d:this.v.d.origin-this.v.d.curr+this.v.time.elapsed,this.v.e.value=i.e||this.v.e.value,this.v.e.calc=S.Ease[this.v.e.value],this.v.delay=S.Has(i,"delay")?i.delay:this.v.delay,this.v.cbDelay=S.Has(i,"cbDelay")?i.cbDelay:this.v.cbDelay,this.v.cb=S.Has(i,"cb")?i.cb:this.v.cb},gRaf:function(){this.v.time.start=0,this.raf=requestAnimationFrame(this.loop)},loop:function(t){this.v.time.start||(this.v.time.start=t),this.v.time.elapsed=t-this.v.time.start,this.v.progress=0<this.v.d.curr?this.v.e.calc(Math.min(this.v.time.elapsed/this.v.d.curr,1)):1,this.v.update(),this.v.progress<1?this.raf=requestAnimationFrame(this.loop):this.needEnd&&(this.needEnd=!1,this.v.update(),this.v.cb&&setTimeout(this.v.cb,this.v.cbDelay))},updProp:function(){for(var t=0;t<this.v.propL;t++)this.v.prop[t].curr=this.lerp(this.v.prop[t].start,this.v.prop[t].end);var i=S.Has(this.v.propPos,"x")?this.v.prop[this.v.propPos.x].curr+this.v.prop[this.v.propPos.x].unit:0,e=S.Has(this.v.propPos,"y")?this.v.prop[this.v.propPos.y].curr+this.v.prop[this.v.propPos.y].unit:0,s=i+e===0?0:"translate3d("+i+","+e+",0)",r=S.Has(this.v.propPos,"r")?this.v.prop[this.v.propPos.r].name+"("+this.v.prop[this.v.propPos.r].curr+"deg)":0,n=S.Has(this.v.propPos,"s")?this.v.prop[this.v.propPos.s].name+"("+this.v.prop[this.v.propPos.s].curr+")":0,o=s+r+n===0?0:[s,r,n].filter(function(t){return 0!==t}).join(" "),h=S.Has(this.v.propPos,"o")?this.v.prop[this.v.propPos.o].curr:-1,a=S.Has(this.v.propPos,"w")?this.v.prop[this.v.propPos.w].curr+this.v.prop[this.v.propPos.w].unit:0,u=S.Has(this.v.propPos,"h")?this.v.prop[this.v.propPos.h].curr+this.v.prop[this.v.propPos.h].unit:0;for(t=0;t<this.v.elL&&void 0!==this.v.el[t];t++)0!==o&&(this.v.el[t].style.transform=o),0<=h&&(this.v.el[t].style.opacity=h),0!==a&&(this.v.el[t].style.width=a),0!==u&&(this.v.el[t].style.height=u)},updSvg:function(){this.v.svg.currTemp="";for(var t=0;t<this.v.svg.arrL;t++)this.v.svg.val[t]=isNaN(this.v.svg.arr.start[t])?this.v.svg.arr.start[t]:this.lerp(this.v.svg.arr.start[t],this.v.svg.arr.end[t]),this.v.svg.currTemp+=this.v.svg.val[t]+" ",this.v.svg.curr=this.v.svg.currTemp.trim();for(t=0;t<this.v.elL&&void 0!==this.v.el[t];t++)this.v.el[t].setAttribute(this.v.svg.attr,this.v.svg.curr)},updLine:function(){for(var t=0;t<this.v.elL;t++){var i=this.v.el[t].style;this.v.line.curr[t]=this.lerp(this.v.line.start[t],this.v.line.end[t]),i.strokeDashoffset=this.v.line.curr[t],0===this.v.progress&&(i.opacity=1)}},lerp:function(t,i){return S.R(S.Lerp.init(t,i,this.v.progress),this.v.round)},svgSplit:function(t){for(var i=[],e=t.split(" "),s=e.length,r=0;r<s;r++)for(var n=e[r].split(","),o=n.length,h=0;h<o;h++){var a=n[h];a=isNaN(a)?a:+a,i.push(a)}return i}},S.TL=function(){this.arr=[],this.delay=0},S.TL.prototype={from:function(t){this.delay+=S.Has(t,"delay")?t.delay:0,t.delay=this.delay,this.arr.push(new S.M(t))},play:function(t){this.run("play",t)},pause:function(){this.run("pause")},run:function(t,i){for(var e=this.arr.length,s=i||void 0,r=0;r<e;r++)this.arr[r][t](s)}},S.BM=function(t,i){for(var e=i.length,s=0;s<e;s++)t[i[s]]=t[i[s]].bind(t)},S.Ease={linear:function(t){return t},i1:function(t){return 1-Math.cos(t*(Math.PI/2))},o1:function(t){return Math.sin(t*(Math.PI/2))},io1:function(t){return-.5*(Math.cos(Math.PI*t)-1)},i2:function(t){return t*t},o2:function(t){return t*(2-t)},io2:function(t){return t<.5?2*t*t:(4-2*t)*t-1},i3:function(t){return t*t*t},o3:function(t){return--t*t*t+1},io3:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},i4:function(t){return t*t*t*t},o4:function(t){return 1- --t*t*t*t},io4:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},i5:function(t){return t*t*t*t*t},o5:function(t){return 1+--t*t*t*t*t},io5:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t},i6:function(t){return 0===t?0:Math.pow(2,10*(t-1))},o6:function(t){return 1===t?1:1-Math.pow(2,-10*t)},io6:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))}},S.Has=function(t,i){return!!t&&hasOwnProperty.call(t,i)},S.Is={string:function(t){return"string"==typeof t},object:function(t){return t===Object(t)},array:function(t){return t.constructor===Array},def:function(t){return void 0!==t},undef:function(t){return void 0===t}},S.Lerp={init:function(t,i,e){return t+(i-t)*e},extend:function(t,i,e,s,r){return s+(r-s)/(e-i)*(t-1)}},S.R=function(t,i){i=void 0!==i?Math.pow(10,i):1e3;return Math.round(t*i)/i},S.Snif={uA:navigator.userAgent.toLowerCase(),get isMobileIE(){return/iemobile/i.test(this.uA)},get isMobileOpera(){return/opera mini/i.test(this.uA)},get isIOS(){return/iphone|ipad|ipod/i.test(this.uA)},get isBlackberry(){return/blackberry/i.test(this.uA)},get isMobileAndroid(){return/android.*mobile/.test(this.uA)},get isAndroid(){return this.isMobileAndroid||!this.isMobileAndroid&&/android/i.test(this.uA)},get isFirefox(){return-1<this.uA.indexOf("firefox")},get safari(){return this.uA.match(/version\/[\d\.]+.*safari/)},get isSafari(){return!!this.safari&&!this.isAndroid},get isSafariOlderThan8(){var t=8;this.isSafari&&(t=+this.safari[0].match(/version\/\d{1,2}/)[0].split("/")[1]);return t<8},get isIEolderThan11(){return-1<this.uA.indexOf("msie")},get isIE11(){return 0<navigator.appVersion.indexOf("Trident/")},get isIE(){return this.isIEolderThan11||this.isIE11},get isEdge(){return/Edge\/\d./i.test(this.uA)},get isMac(){return-1<navigator.platform.toLowerCase().indexOf("mac")},get isMobile(){return this.isMobileAndroid||this.isBlackberry||this.isIOS||this.isMobileOpera||this.isMobileIE},get isTouch(){return"ontouchstart"in window}},S.Throttle=function(t){this.delay=t.delay,this.cb=t.cb,this.onlyAtEnd=t.onlyAtEnd,this.last,this.timer},S.Throttle.prototype={init:function(){var t=this,i=!0,e=Date.now();this.last&&e<this.last+this.delay||i?(i=!1,clearTimeout(this.timer),this.timer=setTimeout(function(){t.last=e,t.cb()},this.delay)):(this.last=e,this.onlyAtEnd||(i=!1,this.cb()))}},S.G={parent:function(t){return t||document},id:function(t,i){return this.parent(i).getElementById(t)},class:function(t,i){return this.parent(i).getElementsByClassName(t)},tag:function(t,i){return this.parent(i).getElementsByTagName(t)}},S.Dom={html:document.documentElement,body:document.body},S.Select={el:function(t){var i=[];if(S.Is.string(t)){var e=t.substring(1);"#"===t.charAt(0)?i[0]=S.G.id(e):i=S.G.class(e)}else i[0]=t;return i},type:function(t){return"#"===t.charAt(0)?"id":"class"},name:function(t){return t.substring(1)}},S.Index={index:function(t,i){for(var e=i.length,s=0;s<e;s++)if(t===i[s])return s;return-1},list:function(t){var i=t.parentNode.children;return this.index(t,i)},class:function(t,i){var e=S.G.class(i);return this.index(t,e)}},S.MM=function(t){this.el=S.Select.el(t.element)[0]||document,this.cb=t.cb,this.iM=S.Snif.isMobile,this.tick=!1,S.BM(this,["gRaf","run"])},S.MM.prototype={on:function(){this.l("add")},off:function(){this.l("remove")},l:function(t){var i=this.iM?"touch":"mouse";S.L(this.el,t,i+"move",this.gRaf)},gRaf:function(t){this.e=t,this.tick||(requestAnimationFrame(this.run),this.tick=!0)},run:function(){var t=this.iM?this.e.changedTouches[0]:this.e;this.cb(t.pageX,t.pageY,this.e),this.tick=!1}},S.RO=function(t){this.cb=t.cb,this.iM=S.Snif.isMobile,this.tick=!1,S.BM(this,["getThrottle","gRaf","run"]),this.throttle=new S.Throttle({cb:this.gRaf,delay:t.throttle.delay,onlyAtEnd:t.throttle.onlyAtEnd})},S.RO.prototype={on:function(){this.l("add")},off:function(){this.l("remove")},l:function(t){this.iM?S.L(window,t,"orientationchange",this.getThrottle):S.L(window,t,"resize",this.getThrottle)},getThrottle:function(t){this.e=t,this.throttle.init()},gRaf:function(){this.tick||(requestAnimationFrame(this.run),this.tick=!0)},run:function(){this.cb(this.e),this.tick=!1}},S.Scroll=function(t){this.cb=t,this.tick=!1,S.BM(this,["gRaf","run"])},S.Scroll.prototype={on:function(){this.startScrollY=pageYOffset,this.l("add")},off:function(){this.l("remove")},l:function(t){S.L(window,t,"scroll",this.gRaf)},gRaf:function(t){this.e=t,this.tick||(requestAnimationFrame(this.run),this.tick=!0)},run:function(){var t=pageYOffset,i=-(t-this.startScrollY);this.startScrollY=t,this.cb(t,i,this.e),this.tick=!1}},S.WT=function(t){this.cb=t,this.iM=S.Snif.isMobile,this.tick=!1,S.BM(this,["touchStart","gRaf","run"])},S.WT.prototype={on:function(){this.l("add")},off:function(){this.l("remove")},l:function(t){var i=document;this.iM?(S.L(i,t,"touchstart",this.touchStart),S.L(i,t,"touchmove",this.gRaf,{passive:!1})):S.L(i,t,"mouseWheel",this.gRaf)},gRaf:function(t){this.e=t,this.e.preventDefault(),this.tick||(requestAnimationFrame(this.run),this.tick=!0)},run:function(){var t=this.e.type;"wheel"===t?this.onWheel():"mousewheel"===t?this.onMouseWheel():"touchmove"===t&&this.touchMove()},onWheel:function(){this.type="scroll",this.delta=this.e.wheelDeltaY||-1*this.e.deltaY,S.Snif.isFirefox&&1===this.e.deltaMode&&(this.delta*=40),this.getCb()},onMouseWheel:function(){this.type="scroll",this.delta=this.e.wheelDeltaY?this.e.wheelDeltaY:this.e.wheelDelta,this.getCb()},touchStart:function(t){this.start=t.targetTouches[0].pageY},touchMove:function(){this.type="touch",this.delta=this.e.targetTouches[0].pageY-this.start,this.getCb()},getCb:function(){this.cb(this.delta,this.type,this.e),this.tick=!1}},S.WTP={p:function(t){t.preventDefault()},l:function(t){var i=S.Snif.isMobile?"touchmove":"mouseWheel";S.L(document,t,i,this.p,{passive:!1})},on:function(){this.l("add")},off:function(){this.l("remove")}},S.L=function(t,i,e,s,r){var n,o=document,h=(t=S.Select.el(t)).length;n="mouseWheel"===e?"onwheel"in o?"wheel":void 0!==o.onmousewheel?"mousewheel":"DOMMouseScroll":"focusOut"===e?S.Snif.isFirefox?"blur":"focusout":e;for(var a=0;a<h;a++)t[a][i+"EventListener"](n,s,r)},S.ScrollToTop=function(t){var i,e=pageYOffset,s={dest:0,d:(i=S.Lerp.init(300,1500,e/t.totalH),0===e?0:i),e:e<=2500?"Power"+Math.ceil(e/500)+"InOut":"ExpoInOut",cb:t.cb};S.ScrollTo(s)},S.ScrollTo=function(t){var i=document,e=i.scrollingElement?i.scrollingElement:S.Dom.body,s=S.Snif.isFirefox||S.Snif.isIE?i.documentElement:e,r=pageYOffset,n=t.dest,o=new S.M({d:t.d,e:t.e,update:function(t){s.scrollTop=Math.round(1e3*S.Lerp.init(r,n,t.progress))/1e3},cb:h});function h(){S.WTP.off(),t.cb&&t.cb()}r===n?h():(S.WTP.on(),o.play())},S.ScrollZero=function(){window.scrollTo(0,0)},S.TopWhenRefresh=function(){window.onbeforeunload=function(){window.scrollTo(0,0)}};var perf=performance;S.Win={get w(){return innerWidth},get h(){return innerHeight},get path(){return location.pathname},get hostname(){return location.hostname},get href(){return location.href}};