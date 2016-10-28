// pow.highlight: Syntax highlighting by highlight.js.
// Thanks to http://softwaremaniacs.org/soft/highlight/en/
pow.bundle({
 "data": "pow.module(\"highlight\",function(){var c=new function(){function n(a){return a.replace(/&/gm,\"&amp;\").replace(/</gm,\"&lt;\").replace(/>/gm,\"&gt;\")}function r(a,d,f){return RegExp(d,\"m\"+(a.case_insensitive?\"i\":\"\")+(f?\"g\":\"\"))}function t(a,d){for(var f=\"\",e=0;e<a.childNodes.length;e++)if(3==a.childNodes[e].nodeType){var b=a.childNodes[e].nodeValue;d&&(b=b.replace(/\\n/g,\"\"));f+=b}else f=\"BR\"==a.childNodes[e].nodeName?f+\"\\n\":f+t(a.childNodes[e]);return f=f.replace(/\\r/g,\"\\n\")}function z(a){var d=a.className.split(/\\s+/),\nd=d.concat(a.parentNode.className.split(/\\s+/));for(a=0;a<d.length;a++){var f=d[a].replace(/^language-/,\"\");if(l[f]||\"no-highlight\"==f)return f}}function s(a){var d=[];(function(a,e){for(var b=0;b<a.childNodes.length;b++)3==a.childNodes[b].nodeType?e+=a.childNodes[b].nodeValue.length:\"BR\"==a.childNodes[b].nodeName?e+=1:(d.push({event:\"start\",offset:e,node:a.childNodes[b]}),e=arguments.callee(a.childNodes[b],e),d.push({event:\"stop\",offset:e,node:a.childNodes[b]}));return e})(a,0);return d}function A(a,\nd,f){function e(b){for(var a=\"<\"+b.nodeName.toLowerCase(),d=0;d<b.attributes.length;d++){var f=b.attributes[d],a=a+(\" \"+f.nodeName.toLowerCase());void 0!=f.nodeValue&&(a+='=\"'+n(f.nodeValue)+'\"')}return a+\">\"}for(var b=0,c=\"\",k=[];a.length||d.length;){var h=(a.length&&d.length?a[0].offset!=d[0].offset?a[0].offset<d[0].offset?a:d:\"start\"==a[0].event&&\"stop\"==d[0].event?d:a:a.length?a:d).splice(0,1)[0],c=c+n(f.substr(b,h.offset-b)),b=h.offset;if(\"start\"==h.event)c+=e(h.node),k.push(h.node);else if(\"stop\"==\nh.event){var g=k.length;do{g--;var l=k[g],c=c+(\"</\"+l.nodeName.toLowerCase()+\">\")}while(l!=h.node);for(k.splice(g,1);g<k.length;)c+=e(k[g]),g++}}return c+=f.substr(b)}function v(a,d){function f(b,a){if(g[b].end&&g[b].endRe.test(a))return 1;if(g[b].endsWithParent){var p=f(b-1,a);return p?p+1:0}return 0}function c(b,a){var p=g[g.length-1];if(!p.terminators){var d;d=h;for(var f=[],e=0;e<p.sub_modes.length;e++)f.push(p.sub_modes[e].begin);e=g.length-1;do g[e].end&&f.push(g[e].end),e--;while(g[e+1].endsWithParent);\np.illegal&&f.push(p.illegal);d=r(d,\"(\"+f.join(\"|\")+\")\",!0);p.terminators=d}p.terminators.lastIndex=a;return(p=p.terminators.exec(b))?[b.substr(a,p.index-a),p[0],!1]:[b.substr(a),\"\",!0]}function b(b,a){if(a.subLanguage&&y[a.subLanguage]){var d=v(a.subLanguage,b);w+=d.keyword_count;q+=d.relevance;return d.value}if(!a.keywords||!a.lexems)d=n(b);else{a.lexemsRe||(d=\"(\"+a.lexems.join(\"|\")+\")\",a.lexemsRe=r(h,d,!0));var d=\"\",f=0;a.lexemsRe.lastIndex=0;for(var e=a.lexemsRe.exec(b);e;){d+=n(b.substr(f,e.index-\nf));b:{var f=a,c=e,c=h.case_insensitive?c[0].toLowerCase():c[0],g=void 0;for(g in f.keywordGroups)if(f.keywordGroups.hasOwnProperty(g)){var k=f.keywordGroups[g].hasOwnProperty(c);if(k){f=[g,k];break b}}f=!1}f?(w+=f[1],d+='<span class=\"'+f[0]+'\">'+n(e[0])+\"</span>\"):d+=n(e[0]);f=a.lexemsRe.lastIndex;e=a.lexemsRe.exec(b)}d+=n(b.substr(f,b.length-f))}return d}function D(b,a){var d=b.noMarkup?\"\":'<span class=\"'+b.displayClassName+'\">';b.returnBegin?(m+=d,b.buffer=\"\"):b.excludeBegin?(m+=n(a)+d,b.buffer=\n\"\"):(m+=d,b.buffer=a);g[g.length]=b}function k(a,d,e){var c=g[g.length-1];if(e)return m+=b(c.buffer+a,c),!1;a:{for(e=0;e<c.sub_modes.length;e++)if(c.sub_modes[e].beginRe.test(d)){e=c.sub_modes[e];break a}e=null}if(e)return m+=b(c.buffer+a,c),D(e,d),q+=e.relevance,e.returnBegin;if(e=f(g.length-1,d)){var k=c.noMarkup?\"\":\"</span>\";for(m=c.returnEnd?m+(b(c.buffer+a,c)+k):c.excludeEnd?m+(b(c.buffer+a,c)+k+n(d)):m+(b(c.buffer+a+d,c)+k);1<e;)k=g[g.length-2].noMarkup?\"\":\"</span>\",m+=k,e--,g.length--;a=g[g.length-\n1];g.length--;g[g.length-1].buffer=\"\";if(a.starts)for(d=0;d<h.modes.length;d++)if(h.modes[d].className==a.starts){D(h.modes[d],\"\");break}return c.returnEnd}if(c.illegalRe&&c.illegalRe.test(d))throw\"Illegal\";}var h=l[a],g=[h.defaultMode],q=0,w=0,m=\"\";try{var x=0;h.defaultMode.buffer=\"\";do{var u=c(d,x),t=k(u[0],u[1],u[2]),x=x+u[0].length;t||(x+=u[1].length)}while(!u[2]);if(1<g.length)throw\"Illegal\";return{language:a,relevance:q,keyword_count:w,value:m}}catch(s){if(\"Illegal\"==s)return{language:null,\nrelevance:0,keyword_count:0,value:n(d)};throw s;}}function B(){function a(b,d){if(!b.compiled){b.begin&&(b.beginRe=r(d,\"^\"+b.begin));b.end&&(b.endRe=r(d,\"^\"+b.end));b.illegal&&(b.illegalRe=r(d,\"^(?:\"+b.illegal+\")\"));void 0==b.relevance&&(b.relevance=1);b.displayClassName||(b.displayClassName=b.className);b.className||(b.noMarkup=!0);for(var c in b.keywords)if(b.keywords.hasOwnProperty(c)){b.keywordGroups=b.keywords[c]instanceof Object?b.keywords:{keyword:b.keywords};break}b.sub_modes=[];if(b.contains)for(c=\n0;c<b.contains.length;c++)if(b.contains[c]instanceof Object)b.sub_modes.push(b.contains[c]);else for(var e=0;e<d.modes.length;e++)d.modes[e].className==b.contains[c]&&b.sub_modes.push(d.modes[e]);b.compiled=!0;for(c=0;c<b.sub_modes.length;c++)a(b.sub_modes[c],d)}}for(var d in l)if(l.hasOwnProperty(d))for(var c=[l[d].defaultMode].concat(l[d].modes),e=0;e<c.length;e++)a(c[e],l[d])}function q(){q.called||(q.called=!0,B(),y=l)}function E(a,d,c){q();var e=t(a,c),b=z(a);if(\"no-highlight\"!=b){if(b)b=v(b,\ne);else{var l=b={language:\"\",keyword_count:0,relevance:0,value:n(e)},k;for(k in y)if(y.hasOwnProperty(k)){var h=v(k,e);h.keyword_count+h.relevance>l.keyword_count+l.relevance&&(l=h);h.keyword_count+h.relevance>b.keyword_count+b.relevance&&(l=b,b=h)}}k=a.className;k.match(b.language)||(k=k?k+\" \"+b.language:b.language);var g=s(a);g.length&&(h=document.createElement(\"pre\"),h.innerHTML=b.value,b.value=A(g,s(h),e));d&&(b.value=b.value.replace(/^((<[^>]+>|\\t)+)/gm,function(b,a,c,e){return a.replace(/\\t/g,\nd)}));c&&(b.value=b.value.replace(/\\n/g,\"<br>\"));/MSIE [678]/.test(navigator.userAgent)&&\"CODE\"==a.tagName&&\"PRE\"==a.parentNode.tagName?(h=a.parentNode,c=document.createElement(\"div\"),c.innerHTML=\"<pre><code>\"+b.value+\"</code></pre>\",a=c.firstChild.firstChild,c.firstChild.className=h.className,h.parentNode.replaceChild(c.firstChild,h)):a.innerHTML=b.value;a.className=k;a.dataset={};a.dataset.result={language:b.language,kw:b.keyword_count,re:b.relevance};l&&l.language&&(a.dataset.second_best={language:l.language,\nkw:l.keyword_count,re:l.relevance})}}function C(){if(!C.called){C.called=!0;q();if(arguments.length)for(var a=0;a<arguments.length;a++)l[arguments[a]]&&(y[arguments[a]]=l[arguments[a]]);for(var d=document.getElementsByTagName(\"pre\"),a=0;a<d.length;a++){var f;a:{f=d[a];for(var e=0;e<f.childNodes.length;e++){node=f.childNodes[e];if(\"CODE\"==node.nodeName){f=node;break a}if(!(3==node.nodeType&&node.nodeValue.match(/\\s+/))){f=null;break a}}f=void 0}f&&E(f,c.tabReplace)}}}var l={},y={};this.LANGUAGES=l;\nthis.initHighlightingOnLoad=function(){var a=arguments,c=function(){C.apply(null,a)};window.addEventListener?(window.addEventListener(\"DOMContentLoaded\",c,!1),window.addEventListener(\"load\",c,!1)):window.attachEvent?window.attachEvent(\"onload\",c):window.onload=c};this.highlightBlock=E;this.initHighlighting=C;this.IMMEDIATE_RE=\"\\\\b|\\\\B\";this.IDENT_RE=\"[a-zA-Z][a-zA-Z0-9_]*\";this.UNDERSCORE_IDENT_RE=\"[a-zA-Z_][a-zA-Z0-9_]*\";this.NUMBER_RE=\"\\\\b\\\\d+(\\\\.\\\\d+)?\";this.C_NUMBER_RE=\"\\\\b(0x[A-Za-z0-9]+|\\\\d+(\\\\.\\\\d+)?)\";\nthis.RE_STARTERS_RE=\"!|!=|!==|%|%=|&|&&|&=|\\\\*|\\\\*=|\\\\+|\\\\+=|,|\\\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\\\?|\\\\[|\\\\{|\\\\(|\\\\^|\\\\^=|\\\\||\\\\|=|\\\\|\\\\||~\";this.APOS_STRING_MODE={className:\"string\",begin:\"'\",end:\"'\",illegal:\"\\\\n\",contains:[\"escape\"],relevance:0};this.QUOTE_STRING_MODE={className:\"string\",begin:'\"',end:'\"',illegal:\"\\\\n\",contains:[\"escape\"],relevance:0};this.BACKSLASH_ESCAPE={className:\"escape\",begin:\"\\\\\\\\.\",end:this.IMMEDIATE_RE,noMarkup:!0,relevance:0};this.C_LINE_COMMENT_MODE=\n{className:\"comment\",begin:\"//\",end:\"$\",relevance:0};this.C_BLOCK_COMMENT_MODE={className:\"comment\",begin:\"/\\\\*\",end:\"\\\\*/\"};this.HASH_COMMENT_MODE={className:\"comment\",begin:\"#\",end:\"$\"};this.NUMBER_MODE={className:\"number\",begin:this.NUMBER_RE,end:this.IMMEDIATE_RE,relevance:0};this.C_NUMBER_MODE={className:\"number\",begin:this.C_NUMBER_RE,end:this.IMMEDIATE_RE,relevance:0};this.inherit=function(a,c){var f={},e;for(e in a)f[e]=a[e];if(c)for(e in c)f[e]=c[e];return f}};c.LANGUAGES.javascript={defaultMode:{lexems:[c.UNDERSCORE_IDENT_RE],\ncontains:[\"string\",\"comment\",\"number\",\"regexp_container\",\"function\"],keywords:{keyword:{\"in\":1,\"if\":1,\"for\":1,\"while\":1,\"finally\":1,\"var\":1,\"new\":1,\"function\":1,\"do\":1,\"return\":1,\"void\":1,\"else\":1,\"break\":1,\"catch\":1,\"instanceof\":1,\"with\":1,\"throw\":1,\"case\":1,\"default\":1,\"try\":1,\"this\":1,\"switch\":1,\"continue\":1,\"typeof\":1,\"delete\":1},literal:{\"true\":1,\"false\":1,\"null\":1}}},modes:[c.C_LINE_COMMENT_MODE,c.C_BLOCK_COMMENT_MODE,c.C_NUMBER_MODE,c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,c.BACKSLASH_ESCAPE,\n{className:\"regexp_container\",begin:\"(\"+c.RE_STARTERS_RE+\"|case|return|throw)\\\\s*\",end:c.IMMEDIATE_RE,noMarkup:!0,lexems:[c.IDENT_RE],keywords:{\"return\":1,\"throw\":1,\"case\":1},contains:[\"comment\",{className:\"regexp\",begin:\"/.*?[^\\\\\\\\/]/[gim]*\",end:c.IMMEDIATE_RE}],relevance:0},{className:\"function\",begin:\"\\\\bfunction\\\\b\",end:\"{\",lexems:[c.UNDERSCORE_IDENT_RE],keywords:{\"function\":1},contains:[{className:\"title\",begin:\"[A-Za-z$_][0-9A-Za-z$_]*\",end:c.IMMEDIATE_RE},{className:\"params\",begin:\"\\\\(\",end:\"\\\\)\",\ncontains:[\"string\",\"comment\"]}]}]};(function(){var n={className:\"pi\",begin:\"<\\\\?\",end:\"\\\\?>\",relevance:10},r={className:\"doctype\",begin:\"<!DOCTYPE\",end:\">\",relevance:10},t={className:\"comment\",begin:\"\\x3c!--\",end:\"--\\x3e\"},z={className:\"tag\",begin:\"</?\",end:\"/?>\",contains:[\"title\",\"tag_internal\"]},s={className:\"title\",begin:\"[A-Za-z0-9\\\\._:-]+\",end:c.IMMEDIATE_RE},A={className:\"tag_internal\",begin:c.IMMEDIATE_RE,endsWithParent:!0,noMarkup:!0,contains:[\"attribute\",\"value_container\"],relevance:0},v=\n{className:\"attribute\",begin:\"[A-Za-z0-9\\\\._:-]+\",end:c.IMMEDIATE_RE,relevance:0},B={className:\"value_container\",begin:'=\"',returnBegin:!0,end:'\"',noMarkup:!0,contains:[{className:\"value\",begin:'\"',endsWithParent:!0}]},q={className:\"value_container\",begin:\"='\",returnBegin:!0,end:\"'\",noMarkup:!0,contains:[{className:\"value\",begin:\"'\",endsWithParent:!0}]};c.LANGUAGES.xml={defaultMode:{contains:[\"pi\",\"doctype\",\"comment\",\"cdata\",\"tag\"]},case_insensitive:!0,modes:[{className:\"cdata\",begin:\"<\\\\!\\\\[CDATA\\\\[\",\nend:\"\\\\]\\\\]>\",relevance:10},n,r,t,z,c.inherit(s,{relevance:1.75}),A,v,B,q]};c.LANGUAGES.html={defaultMode:{contains:[\"comment\",\"pi\",\"doctype\",\"vbscript\",\"tag\"]},case_insensitive:!0,modes:[{className:\"tag\",begin:\"<style\",end:\">\",lexems:[c.IDENT_RE],keywords:{style:1},contains:[\"tag_internal\"],starts:\"css\"},{className:\"tag\",begin:\"<script\",end:\">\",lexems:[c.IDENT_RE],keywords:{script:1},contains:[\"tag_internal\"],starts:\"javascript\"},{className:\"css\",end:\"</style>\",returnEnd:!0,subLanguage:\"css\"},{className:\"javascript\",\nend:\"\\x3c/script>\",returnEnd:!0,subLanguage:\"javascript\"},{className:\"vbscript\",begin:\"<%\",end:\"%>\",subLanguage:\"vbscript\"},t,n,r,c.inherit(z),c.inherit(s,{lexems:[c.IDENT_RE],keywords:{code:1,kbd:1,font:1,noscript:1,style:1,img:1,title:1,menu:1,tt:1,tr:1,param:1,li:1,tfoot:1,th:1,input:1,td:1,dl:1,blockquote:1,fieldset:1,big:1,dd:1,abbr:1,optgroup:1,dt:1,button:1,isindex:1,p:1,small:1,div:1,dir:1,em:1,frame:1,meta:1,sub:1,bdo:1,label:1,acronym:1,sup:1,body:1,basefont:1,base:1,br:1,address:1,strong:1,\nlegend:1,ol:1,script:1,caption:1,s:1,col:1,h2:1,h3:1,h1:1,h6:1,h4:1,h5:1,table:1,select:1,noframes:1,span:1,area:1,dfn:1,strike:1,cite:1,thead:1,head:1,option:1,form:1,hr:1,\"var\":1,link:1,b:1,colgroup:1,ul:1,applet:1,del:1,iframe:1,pre:1,frameset:1,ins:1,tbody:1,html:1,samp:1,map:1,object:1,a:1,xmlns:1,center:1,textarea:1,i:1,q:1,u:1,section:1,nav:1,article:1,aside:1,hgroup:1,header:1,footer:1,figure:1,figurecaption:1,time:1,mark:1,wbr:1,embed:1,video:1,audio:1,source:1,canvas:1,datalist:1,keygen:1,\noutput:1,progress:1,meter:1,details:1,summary:1,command:1}}),c.inherit(A),v,B,q,{className:\"value_container\",begin:\"=\",end:c.IMMEDIATE_RE,contains:[{className:\"unquoted_value\",displayClassName:\"value\",begin:\"[^\\\\s/>]+\",end:c.IMMEDIATE_RE}]}]}})();pow.on.load(function(){pow.style.get(\"pow-highlight-style\").innerHTML=\"/*\\n  IR_Black style (c) Vasily Mikhailitchenko <vaskas@programica.ru>\\n*/\\n\\npre code {\\n  display: block; padding: 0.5em;\\n  background: #000; color: #f8f8f8;\\n}\\n\\npre .shebang,\\npre .comment,\\npre .template_comment,\\npre .javadoc {\\n  color: #7c7c7c;\\n}\\n\\npre .keyword,\\npre .tag,\\npre .ruby .function .keyword,\\npre .tex .command {\\n  color: #96CBFE;\\n}\\n\\npre .function .keyword,\\npre .sub .keyword,\\npre .method,\\npre .list .title {\\n  color: #FFFFB6;\\n}\\n\\npre .string,\\npre .tag .value,\\npre .cdata,\\npre .filter .argument,\\npre .attr_selector,\\npre .apache .cbracket,\\npre .date {\\n  color: #A8FF60;\\n}\\n\\npre .subst {\\n  color: #DAEFA3;\\n}\\n\\npre .regexp {\\n  color: #E9C062;\\n}\\n\\npre .function .title,\\npre .sub .identifier,\\npre .pi,\\npre .decorator,\\npre .ini .title,\\npre .tex .special {\\n  color: #FFFFB6;\\n}\\n\\npre .class .title,\\npre .constant,\\npre .smalltalk .class,\\npre .javadoctag,\\npre .yardoctag,\\npre .phpdoc,\\npre .nginx .built_in {\\n  color: #FFFFB6;\\n}\\n\\npre .symbol,\\npre .ruby .symbol .string,\\npre .ruby .symbol .keyword,\\npre .ruby .symbol .keymethods,\\npre .number,\\npre .variable,\\npre .vbscript,\\npre .literal {\\n  color: #C6C5FE;\\n}\\n\\npre .css .keyword {\\n  color: #96CBFE;\\n}\\n\\npre .css .rule .keyword,\\npre .css .id {\\n  color: #FFFFB6;\\n}\\n\\npre .css .class {\\n  color: #FFF;\\n}\\n\\npre .hexcolor {\\n  color: #C6C5FE;\\n}\\n\\npre .number {\\n  color:#FF73FD;\\n}\\n\\npre .tex .formula {\\n  opacity: 0.7;\\n}\\n\"});\nc.tabReplace=\"    \";c.initHighlightingOnLoad()});\n", 
 "versions": {
  "highlight": 1300444619
 }, 
 "wrap": "// pow.highlight: Syntax highlighting by highlight.js.\n// Thanks to http://softwaremaniacs.org/soft/highlight/en/\npow.bundle(~b~)"
})