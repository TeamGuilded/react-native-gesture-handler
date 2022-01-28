(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return h}));var r=n(2),o=n(6),a=(n(0),n(276)),i={id:"how-does-it-work",title:"How does it work?",sidebar_label:"How does it work?"},s={unversionedId:"under-the-hood/how-does-it-work",id:"under-the-hood/how-does-it-work",isDocsHomePage:!1,title:"How does it work?",description:"Units",source:"@site/docs/under-the-hood/how-does-it-work.md",slug:"/under-the-hood/how-does-it-work",permalink:"/react-native-gesture-handler/docs/next/under-the-hood/how-does-it-work",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/docs/under-the-hood/how-does-it-work.md",version:"current",sidebar_label:"How does it work?",sidebar:"docs",previous:{title:"createNativeWrapper",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/api/create-native-wrapper"}},c=[{value:"Units",id:"units",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]}],d={rightToc:c};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"units"},"Units"),Object(a.b)("p",null,'All handler component properties and event attributes that represent onscreen dimensions are expressed in screen density independent units we refer to as "points".\nThese are the units commonly used in React Native ecosystem (e.g. in the ',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/flexbox.html"}),"layout system"),").\nThey do not map directly to physical pixels but instead to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.apple.com/library/content/documentation/2DDrawing/Conceptual/DrawingPrintingiOS/GraphicsDrawingOverview/GraphicsDrawingOverview.html#//apple_ref/doc/uid/TP40010156-CH14-SW7"}),"iOS's points")," and to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.android.com/guide/topics/resources/more-resources#Dimension"}),"dp")," units on Android."),Object(a.b)("h2",{id:"ios"},"iOS"),Object(a.b)("p",null,"All gestures are implemented using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uigesturerecognizer?language=objc"}),"UIGestureRecognizers"),", some of them have been slightly modified to allow for more customization and to conform to the state flow of RNGH. When you assign a gesture configuration to the ",Object(a.b)("inlineCode",{parentName:"p"},"GestureDetector"),", it creates all the required recognizers and assigns them to the child view of the detector. From this point most of the heavy lifting is handled by the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit?language=objc"}),"UIKit")," (with our help to correctly implement interactions between gestures)."),Object(a.b)("h2",{id:"android"},"Android"),Object(a.b)("p",null,"Unfortunately, Android doesn't provide an easy way of handling gestures hence most of them were implemented from scratch, including a system for managing how the gestures should interact with each other. Here's a quick overview of how it works:\nWhen you wrap a component with ",Object(a.b)("inlineCode",{parentName:"p"},"GestureHandlerRootView")," it allows for the RNGH to intercept all touch events on that component and process them, deciding whether they should be handled by one of the gesture handlers or passed to the underlying view. Gesture handlers are created when you assign a gesture configuration to the ",Object(a.b)("inlineCode",{parentName:"p"},"GestureDetector"),", it initializes all of the necessary handlers natively. Every ",Object(a.b)("inlineCode",{parentName:"p"},"GestureHandlerRootView")," also has a specific handler to decide whether to pass the touch events or to consume them. It can never activate, only begin, end or be cancelled. When this handler is in the ",Object(a.b)("inlineCode",{parentName:"p"},"UNDETERMINED")," state it means that there is no touch in progress, however when the touch starts it transitions to the ",Object(a.b)("inlineCode",{parentName:"p"},"BEGAN")," state. As long as it stays in that state, no touch event is consumed, but as soon as it gets cancelled (meaning that some handler has activated) all incoming touch events get consumed, preventing underlying view from receiving them."),Object(a.b)("p",null,"When a pointer touches the screen the view tree is traversed in order to extract all handlers attached to the views below the finger (including the one attached to the ",Object(a.b)("inlineCode",{parentName:"p"},"GestureHandlerRootView"),") and all extracted handlers transition to the ",Object(a.b)("inlineCode",{parentName:"p"},"BEGAN")," state, signalling that the gesture may heve began. The touch events continue to be delivered to all extracted handlers until one of them recognizes the gesture and tries to activate. At this point the orchestrator checks whether this gesture should wait for any other of the extracted gestures to fail. If it does, it's put to the waiting list, if it doesn't, it gets activated and all other gestures (that are not simultaneous with it) get cancelled. When a gesture handlers transitions to a finished state (the gesture recognized by it stops, it fails or gets cancelled) the orchestrator check the waiting handlers. Every one of them that waited for the gesture that just failed tries to activate again (and again the orchestrator checks if it should wait for any of the extracted gestures...)."))}h.isMDXComponent=!0},276:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),h=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=h(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=h(n),p=r,m=l["".concat(i,".").concat(p)]||l[p]||u[p]||a;return n?o.a.createElement(m,s(s({ref:t},d),{},{components:n})):o.a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);