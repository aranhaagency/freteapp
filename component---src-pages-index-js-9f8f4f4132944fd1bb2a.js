(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(t,e,n){"use strict";n.r(e);n(28);var o=n(58),r=n(9),i=(n(0),n(209)),a=n(208),c=n(211),u=n.n(c);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var l=function(t){return Object(r.a)(i.Link,s({css:Object(o.a)({color:"inherit",textDecoration:"none"})},t))},f={name:"pelz90",styles:"font-weight:400;"},b={name:"pelz90",styles:"font-weight:400;"};e.default=function(){return Object(r.a)("div",{css:Object(o.a)({display:"flex",height:"100vh",background:"#fff"})},Object(r.a)("div",{css:Object(o.a)({position:"absolute",left:"33.333%",width:Object(a.rhythm)(1),height:"22vh",zIndex:10,background:"#fff",borderBottomRightRadius:"34px 41%"})}),Object(r.a)("div",{css:Object(o.a)({position:"absolute",left:"33.33%",bottom:0,width:Object(a.rhythm)(1),height:"24vh",zIndex:10,background:"#fff",borderTopLeftRadius:"34px 41%"})}),Object(r.a)("div",{css:Object(o.a)({display:"flex",position:"absolute",margin:Object(a.rhythm)(.75),top:0,bottom:0,left:0,right:0,justifyContent:"center",alignItems:"center",background:"#ffbd59"})},Object(r.a)("h1",{css:Object(o.a)({width:"80%",color:"#fff",fontWeight:600,fontSize:Object(a.scale)(1).fontSize,lineHeight:1.1,"@media (min-width: 420px)":{fontSize:Object(a.scale)(1.4).fontSize},"@media (min-width: 768px)":{fontSize:Object(a.scale)(2).fontSize}})},Object(r.a)("span",{css:f},"Mudamos"),"o conceito de entrega no Brasil. "," ",Object(r.a)("span",{css:b},"Faça parte dessa transformação."))),Object(r.a)("div",{css:Object(o.a)({color:"#fff",position:"absolute",top:Object(a.rhythm)(1.5),zIndex:10,transform:"rotate(90deg)",transformOrigin:"left top 0",left:Object(a.rhythm)(2.5),fontSize:Object(a.scale)(.4).fontSize,lineHeight:Object(a.scale)(.4).lineHeight,"@media (min-width: 420px)":{left:Object(a.rhythm)(1.5),transform:"none"}})},Object(r.a)(l,{to:"/"},Object(r.a)("img",{css:Object(o.a)({width:"30%"}),src:u.a,alt:"Logo"}))),Object(r.a)("div",{css:Object(o.a)({color:"#fff",position:"absolute",right:Object(a.rhythm)(1.5),top:Object(a.rhythm)(1.5),zIndex:10,fontSize:Object(a.scale)(.4).fontSize,lineHeight:Object(a.scale)(.4).lineHeight})},Object(r.a)(l,{to:"/blog/"},"blog"),","," ",Object(r.a)(l,{to:"/about/"},"about")))}},207:function(t,e,n){var o;t.exports=(o=n(210))&&o.default||o},208:function(t,e,n){var o=new(n(214))({baseFontSize:"18px",headerFontFamily:["Cooper Hewitt","sans-serif"],bodyFontFamily:["Cooper Hewitt","sans-serif"],plugins:[new(0,n(215).default)],baseLineHeight:1.45,blockMarginBottom:.85,overrideThemeStyles:function(t){var e=t.rhythm;return{a:{color:"#3A69A8"},blockquote:{marginLeft:0,paddingLeft:e(5/8),borderLeft:e(3/8)+" solid #CDE7B0"},"blockquote > *":{fontStyle:"italic"},"blockquote > h1, blockquote > h2, blockquote > h3, blockquote > h4":{marginTop:0},"li > p":{marginBottom:e(.5)},"p code":{fontSize:"75%"},"tt,code":{fontSize:"85%"},pre:{lineHeight:1.22}}}});t.exports=o},209:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return p}),n.d(e,"StaticQueryContext",function(){return f}),n.d(e,"StaticQuery",function(){return d}),n.d(e,"useStaticQuery",function(){return h}),n.d(e,"prefetchPathname",function(){return l});var o=n(9),r=n(0),i=n.n(r),a=n(74),c=n.n(a);n.d(e,"Link",function(){return c.a}),n.d(e,"withAssetPrefix",function(){return a.withAssetPrefix}),n.d(e,"withPrefix",function(){return a.withPrefix}),n.d(e,"parsePath",function(){return a.parsePath}),n.d(e,"navigate",function(){return a.navigate}),n.d(e,"push",function(){return a.push}),n.d(e,"replace",function(){return a.replace}),n.d(e,"navigateTo",function(){return a.navigateTo});var u=n(207),s=n.n(u);n.d(e,"PageRenderer",function(){return s.a});var l=n(11).default.enqueue,f=i.a.createContext({});function b(t){var e=t.staticQueryData,n=t.data,r=t.query,a=t.render,c=n?n.data:e[r]&&e[r].data;return Object(o.a)(i.a.Fragment,null,c&&a(c),!c&&Object(o.a)("div",null,"Loading (StaticQuery)"))}var d=function(t){var e=t.data,n=t.query,r=t.render,i=t.children;return Object(o.a)(f.Consumer,null,function(t){return Object(o.a)(b,{data:e,query:n,render:r||i,staticQueryData:t})})},h=function(t){i.a.useContext;var e=i.a.useContext(f);if(e[t]&&e[t].data)return e[t].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}},210:function(t,e,n){"use strict";n.r(e);n(28);var o=n(0),r=n.n(o),i=n(100);e.default=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(i.a,Object.assign({location:e,pageResources:n},n.json)):null}},211:function(t,e,n){t.exports=n.p+"static/logo-b99115f2852edbea7a129b5a76857bad.png"},214:function(t,e,n){t.exports=n(220)},215:function(t,e,n){"use strict";n(101),Object.defineProperty(e,"__esModule",{value:!0});var o=a(n(221)),r=a(n(222)),i=a(n(227));function a(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){var n=t.rhythm,a=void 0;return a=(0,r.default)(e.blockMarginBottom)?n(e.blockMarginBottom):(0,i.default)(e.blockMarginBottom)?e.blockMarginBottom:n(1),{"tt,code":{backgroundColor:(0,o.default)(96),borderRadius:"3px",fontFamily:'"SFMono-Regular", Consolas,"Roboto Mono","Droid Sans Mono","Liberation Mono",Menlo,Courier,monospace',padding:0,paddingTop:"0.2em",paddingBottom:"0.2em"},pre:{background:(0,o.default)(96),borderRadius:"3px",lineHeight:1.42,overflow:"auto",wordWrap:"normal",padding:a},"pre code":{background:"none",lineHeight:1.42},"code:before,code:after,tt:before,tt:after":{letterSpacing:"-0.2em",content:'" "'},"pre code:before,pre code:after,pre tt:before,pre tt:after":{content:"none"}}}}},216:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"==typeof window&&(n=window)}t.exports=n},217:function(t,e,n){var o=n(218),r=n(225),i=n(226),a="[object Null]",c="[object Undefined]",u=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?c:a:u&&u in Object(t)?r(t):i(t)}},218:function(t,e,n){var o=n(223).Symbol;t.exports=o},219:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},220:function(t,e,n){n(44),n(56),n(75),n(29),n(30),n(12),n(57),n(22),n(20),n(37),n(28),n(46);var o,r,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,o,r=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))a.call(n,s)&&(r[s]=n[s]);if(i){o=i(n);for(var l=0;l<o.length;l++)c.call(n,o[l])&&(r[o[l]]=n[o[l]])}}return r},s=function(t,e){e||(e=[0,""]),t=String(t);var n=parseFloat(t,10);return e[0]=n,e[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",e},l=function(t){return s(t)[0]},f=function(t){return null==t&&(t=t),function(e,n,o,r){null==o&&(o=t),null==r&&(r=o);var i=s(e)[1];if(i===n)return e;var a=l(e);if("px"!==i)if("em"===i)a=l(e)*l(o);else if("rem"===i)a=l(e)*l(t);else{if("ex"!==i)return e;a=l(e)*l(o)*2}var c=a;if("px"!==n)if("em"===n)c=a/l(r);else if("rem"===n)c=a/l(t);else{if("ex"!==n)return e;c=a/l(r)/2}return parseFloat(c.toFixed(5))+n}},b=s,d=function(t){return b(t)[1]},h=function(t){return b(t)[0]},p={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},g=function(t,e){var n,o=f(e.baseFontSize),r=h(o(t,"px")),i=h(e.baseLineHeightInPx),a=h(o(e.minLinePadding,"px"));return(n=e.roundToNearestHalfLine?Math.ceil(2*r/i)/2:Math.ceil(r/i))*i-r<2*a&&(n+=e.roundToNearestHalfLine?.5:1),n},m=function(t){var e=f(t.baseFontSize);return function(n,o,r){null==n&&(n=1),null==o&&(o=t.baseFontSize),null==r&&(r=0);var i=n*h(t.baseLineHeightInPx)-r+"px",a=e(i,t.rhythmUnit,o);return"px"===d(a)&&(a=Math.floor(h(a))+d(a)),parseFloat(h(a).toFixed(5))+d(a)}},j=Object.prototype.toString;o=function(t){return"number"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Number]"==j.call(t)},r={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"diminished fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4},t.exports=function(t){var e,n,i,a,c=u({},{baseFontSize:"16px",baseLineHeight:1.45,headerLineHeight:1.1,scaleRatio:2,googleFonts:[],headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],bodyFontFamily:["georgia","serif"],headerColor:"inherit",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:"bold",bodyWeight:"normal",boldWeight:"bold",includeNormalize:!0,blockMarginBottom:1},t),s=(e=c,n=JSON.parse(JSON.stringify(p)),i=Object.assign({},n,e),a=f(i.baseFontSize),d(i.baseLineHeight)?(h(a(i.baseFontSize,"px")),i.baseLineHeightInPx=a(i.baseLineHeight,"px")):i.baseLineHeightInPx=h(i.baseFontSize)*i.baseLineHeight+"px",{rhythm:m(i),establishBaseline:function(){return f((t=i).baseFontSize),{fontSize:h(t.baseFontSize)/16*100+"%",lineHeight:t.baseLineHeight.toString()};var t},linesForFontSize:function(t){return g(t,i)},adjustFontSizeTo:function(t,e,n){return null==e&&(e="auto"),function(t,e,n,o){null==n&&(n=o.baseFontSize),"%"===d(t)&&(t=h(o.baseFontSize)*(h(t)/100)+"px");var r=f(o.baseFontSize);t=r(t,"px",n=r(n,"px"));var i=m(o);return"auto"===e&&(e=g(t,o)),{fontSize:r(t,o.rhythmUnit,n),lineHeight:i(e,n)}}(t,e,n,i)}});return s.scale=function(t){var e=c.baseFontSize.slice(0,-2),n=function(t,e){var n;return null==t&&(t=0),null==e&&(e="golden"),n=o(e)?e:null!=r[e]?r[e]:r.golden,Math.pow(n,t)}(t,c.scaleRatio)*e+"px";return s.adjustFontSizeTo(n)},Object.assign({},{options:c},s)}},221:function(t,e){function n(t){return!isNaN(parseFloat(t))&&isFinite(t)}t.exports=function(t,e,o){if(void 0===e&&(e=0),void 0===o&&(o=!1),"cool"===e?e=237:"slate"===e?e=122:"warm"===e&&(e=69),!n(e))throw new Error("Hue is not a number");if(!n(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var r=0;if(0!==e){r=19.92978+-.3651759*t+.001737214*Math.pow(t,2)}var i=0;return o?(i=t/100,t="100%,"):(i=(100-t)/100,t="0%,"),"hsla("+e+","+r+"%,"+t+i+")"}},222:function(t,e,n){var o=n(217),r=n(219),i="[object Number]";t.exports=function(t){return"number"==typeof t||r(t)&&o(t)==i}},223:function(t,e,n){var o=n(224),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();t.exports=i},224:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(216))},225:function(t,e,n){n(44),n(56),n(12);var o=n(218),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,c=o?o.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var o=!0}catch(u){}var r=a.call(t);return o&&(e?t[c]=n:delete t[c]),r}},226:function(t,e,n){n(44),n(56),n(12);var o=Object.prototype.toString;t.exports=function(t){return o.call(t)}},227:function(t,e,n){var o=n(217),r=n(228),i=n(219),a="[object String]";t.exports=function(t){return"string"==typeof t||!r(t)&&i(t)&&o(t)==a}},228:function(t,e,n){n(45);var o=Array.isArray;t.exports=o}}]);
//# sourceMappingURL=component---src-pages-index-js-9f8f4f4132944fd1bb2a.js.map