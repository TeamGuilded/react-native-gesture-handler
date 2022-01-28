(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(276)),o={id:"nativeview-gh",title:"NativeViewGestureHandler",sidebar_label:"NativeView"},c={unversionedId:"gesture-handlers/api/nativeview-gh",id:"gesture-handlers/api/nativeview-gh",isDocsHomePage:!1,title:"NativeViewGestureHandler",description:"We recently released RNGH 2.0 with new Gestures system. Check out [RNGH 2.0",source:"@site/docs/gesture-handlers/api/nativeview-gh.md",slug:"/gesture-handlers/api/nativeview-gh",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/api/nativeview-gh",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/docs/gesture-handlers/api/nativeview-gh.md",version:"current",sidebar_label:"NativeView",sidebar:"docs",previous:{title:"ForceTouchGestureHandler (iOS only)",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/api/force-gh"},next:{title:"createNativeWrapper",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/api/create-native-wrapper"}},s=[{value:"Properties",id:"properties",children:[{value:"<code>shouldActivateOnStart</code> (<strong>Android only</strong>)",id:"shouldactivateonstart-android-only",children:[]},{value:"<code>disallowInterruption</code>",id:"disallowinterruption",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We recently released RNGH 2.0 with new Gestures system. Check out ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/#rngh-20"}),"RNGH 2.0\nsection in Introduction")," for more information."))),Object(i.b)("p",null,"A gesture handler that allows other touch handling components to participate in\nRNGH's gesture system."),Object(i.b)("p",null,"Used by ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/api/create-native-wrapper"}),Object(i.b)("inlineCode",{parentName:"a"},"createNativeWrapper()")),"."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/api/common-gh#properties"}),"set of properties inherited from base handler class"),". Below is a list of properties specific to ",Object(i.b)("inlineCode",{parentName:"p"},"NativeViewGestureHandler")," component:"),Object(i.b)("h3",{id:"shouldactivateonstart-android-only"},Object(i.b)("inlineCode",{parentName:"h3"},"shouldActivateOnStart")," (",Object(i.b)("strong",{parentName:"h3"},"Android only"),")"),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", underlying handler will activate unconditionally when in ",Object(i.b)("inlineCode",{parentName:"p"},"BEGAN")," or ",Object(i.b)("inlineCode",{parentName:"p"},"UNDETERMINED")," state."),Object(i.b)("h3",{id:"disallowinterruption"},Object(i.b)("inlineCode",{parentName:"h3"},"disallowInterruption")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", cancels all other gesture handlers when this ",Object(i.b)("inlineCode",{parentName:"p"},"NativeViewGestureHandler")," receives an ",Object(i.b)("inlineCode",{parentName:"p"},"ACTIVE")," state event."))}p.isMDXComponent=!0},276:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,h=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);