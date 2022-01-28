(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),i=(n(0),n(276)),o={id:"longpress-gh",title:"LongPressGestureHandler",sidebar_label:"Long press"},s={unversionedId:"gesture-handlers/api/longpress-gh",id:"gesture-handlers/api/longpress-gh",isDocsHomePage:!1,title:"LongPressGestureHandler",description:"We recently released RNGH 2.0 with new Gestures system. Check out [RNGH 2.0",source:"@site/docs/gesture-handlers/api/longpress-gh.md",slug:"/gesture-handlers/api/longpress-gh",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/api/longpress-gh",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/docs/gesture-handlers/api/longpress-gh.md",version:"current",sidebar_label:"Long press",sidebar:"docs",previous:{title:"TapGestureHandler",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/api/tap-gh"},next:{title:"RotationGestureHandler",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/api/rotation-gh"}},c=[{value:"Properties",id:"properties",children:[{value:"<code>minDurationMs</code>",id:"mindurationms",children:[]},{value:"<code>maxDist</code>",id:"maxdist",children:[]}]},{value:"Event data",id:"event-data",children:[{value:"<code>x</code>",id:"x",children:[]},{value:"<code>y</code>",id:"y",children:[]},{value:"<code>absoluteX</code>",id:"absolutex",children:[]},{value:"<code>absoluteY</code>",id:"absolutey",children:[]},{value:"<code>duration</code>",id:"duration",children:[]}]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We recently released RNGH 2.0 with new Gestures system. Check out ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/#rngh-20"}),"RNGH 2.0\nsection in Introduction")," for more information."))),Object(i.b)("p",null,"A discrete gesture handler that activates when the corresponding view is pressed for a sufficiently long time.\nThis handler's state will turn into ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#end"}),"END")," immediately after the finger is released.\nThe handler will fail to recognize a touch event if the finger is lifted before the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#mindurationms"}),"minimum required time")," or if the finger is moved further than the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#maxdist"}),"allowable distance"),"."),Object(i.b)("p",null,"The handler is implemented using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uilongpressgesturerecognizer"}),"UILongPressGestureRecognizer")," on iOS and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/android/lib/src/main/java/com/swmansion/gesturehandler/LongPressGestureHandler.java"}),"LongPressGestureHandler")," on Android."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/api/common-gh#properties"}),"set of properties inherited from base handler class"),". Below is a list of properties specific to the ",Object(i.b)("inlineCode",{parentName:"p"},"LongPressGestureHandler")," component:"),Object(i.b)("h3",{id:"mindurationms"},Object(i.b)("inlineCode",{parentName:"h3"},"minDurationMs")),Object(i.b)("p",null,"Minimum time, expressed in milliseconds, that a finger must remain pressed on the corresponding view. The default value is 500."),Object(i.b)("h3",{id:"maxdist"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDist")),Object(i.b)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel during a long press gesture. If the finger travels further than the defined distance and the handler hasn't yet ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#active"}),"activated"),", it will fail to recognize the gesture. The default value is 10."),Object(i.b)("h2",{id:"event-data"},"Event data"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/api/common-gh#event-data"}),"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to the ",Object(i.b)("inlineCode",{parentName:"p"},"LongPressGestureHandler")," component:"),Object(i.b)("h3",{id:"x"},Object(i.b)("inlineCode",{parentName:"h3"},"x")),Object(i.b)("p",null,"X coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler."),Object(i.b)("h3",{id:"y"},Object(i.b)("inlineCode",{parentName:"h3"},"y")),Object(i.b)("p",null,"Y coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler."),Object(i.b)("h3",{id:"absolutex"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteX")),Object(i.b)("p",null,"X coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. It is recommended to use ",Object(i.b)("inlineCode",{parentName:"p"},"absoluteX")," instead of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#x"}),Object(i.b)("inlineCode",{parentName:"a"},"x"))," in cases when the view attached to the handler can be transformed as an effect of the gesture."),Object(i.b)("h3",{id:"absolutey"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteY")),Object(i.b)("p",null,"Y coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. It is recommended to use ",Object(i.b)("inlineCode",{parentName:"p"},"absoluteY")," instead of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#y"}),Object(i.b)("inlineCode",{parentName:"a"},"y"))," in cases when the view attached to the handler can be transformed as an effect of the gesture."),Object(i.b)("h3",{id:"duration"},Object(i.b)("inlineCode",{parentName:"h3"},"duration")),Object(i.b)("p",null,"Duration of the long press (time since the start of the event), expressed in milliseconds."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/basic/multitap/index.tsx"}),"multitap example")," from GestureHandler Example App."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const LongPressButton = () => (\n  <LongPressGestureHandler\n    onHandlerStateChange={({ nativeEvent }) => {\n      if (nativeEvent.state === State.ACTIVE) {\n        Alert.alert("I\'m being pressed for so long");\n      }\n    }}\n    minDurationMs={800}>\n    <View style={styles.box} />\n  </LongPressGestureHandler>\n);\n')))}d.isMDXComponent=!0},276:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,h=p["".concat(o,".").concat(u)]||p[u]||b[u]||i;return n?a.a.createElement(h,s(s({ref:t},l),{},{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);