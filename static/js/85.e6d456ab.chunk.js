"use strict";(self.webpackChunkwallet_frontend=self.webpackChunkwallet_frontend||[]).push([[85],{9085:function(e,t,n){n.d(t,{Mi:function(){return A},Ix:function(){return D},Am:function(){return G}});var o=n(4942),r=n(9439),a=n(1413),s=n(4925),i=n(3433),c=n(2791);function u(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=u(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var l=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=u(e))&&(o&&(o+=" "),o+=t);return o},d=["theme","type"],f=["delay","staleId"];function p(e){return"number"===typeof e&&!isNaN(e)}function m(e){return"boolean"===typeof e}function v(e){return"string"===typeof e}function g(e){return"function"===typeof e}function y(e){return v(e)||g(e)?e:null}function h(e){return 0===e||e}function T(e){return(0,c.isValidElement)(e)||v(e)||g(e)||p(e)}var E={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},b={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function C(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,s=void 0===a||a,i=e.collapseDuration,u=void 0===i?300:i;return function(e){var o=e.children,a=e.position,i=e.preventExitTransition,l=e.done,d=e.nodeRef,f=e.isIn,p=r?t+"--"+a:t,m=r?n+"--"+a:n,v=(0,c.useRef)(),g=(0,c.useRef)(0);function y(e){if(e.target===d.current){var t=d.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",y),t.removeEventListener("animationcancel",y),0===g.current&&"animationcancel"!==e.type&&(t.className=v.current)}}function h(){var e=d.current;e.removeEventListener("animationend",h),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()}return(0,c.useLayoutEffect)((function(){!function(){var e=d.current;v.current=e.className,e.className+=" "+p,e.addEventListener("animationend",y),e.addEventListener("animationcancel",y)}()}),[]),(0,c.useEffect)((function(){f||(i?h():function(){g.current=1;var e=d.current;e.className+=" "+m,e.addEventListener("animationend",h)}())}),[f]),c.createElement(c.Fragment,null,o)}}function _(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var I={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,i.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},O=function(e){var t=e.theme,n=e.type,o=(0,s.Z)(e,d);return c.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},o))};var L={info:function(e){return c.createElement(O,(0,a.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.createElement(O,(0,a.Z)({},e),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.createElement(O,(0,a.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.createElement(O,(0,a.Z)({},e),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function Z(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,s={theme:t,type:n};return!1===r||(g(r)?a=r(s):(0,c.isValidElement)(r)?a=(0,c.cloneElement)(r,s):v(r)||p(r)?a=r:o?a=L.spinner():function(e){return e in L}(n)&&(a=L[n](s))),a}function N(e){var t=(0,c.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],o=(0,c.useState)([]),a=(0,r.Z)(o,2),u=a[0],l=a[1],d=(0,c.useRef)(null),E=(0,c.useRef)(new Map).current,b=function(e){return-1!==u.indexOf(e)},C=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:b,getToast:function(e){return E.get(e)}}).current;function O(e){var t=e.containerId;!C.props.limit||t&&C.containerId!==t||(C.count-=C.queue.length,C.queue=[])}function L(e){l((function(t){return h(e)?t.filter((function(t){return t!==e})):[]}))}function N(){var e=C.queue.shift();P(e.toastContent,e.toastProps,e.staleId)}function R(e,t){var o=t.delay,r=t.staleId,a=(0,s.Z)(t,f);if(T(e)&&!function(e){return!d.current||C.props.enableMultiContainer&&e.containerId!==C.props.containerId||E.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,u=a.updateId,l=a.data,b=C.props,O=function(){return L(i)},R=null==u;R&&C.count++;var k,w,x={toastId:i,updateId:u,data:l,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||b.theme,icon:null!=a.icon?a.icon:b.icon,isIn:!1,key:a.key||C.toastKey++,type:a.type,closeToast:O,closeButton:a.closeButton,rtl:b.rtl,position:a.position||b.position,transition:a.transition||b.transition,className:y(a.className||b.toastClassName),bodyClassName:y(a.bodyClassName||b.bodyClassName),style:a.style||b.toastStyle,bodyStyle:a.bodyStyle||b.bodyStyle,onClick:a.onClick||b.onClick,pauseOnHover:m(a.pauseOnHover)?a.pauseOnHover:b.pauseOnHover,pauseOnFocusLoss:m(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:b.pauseOnFocusLoss,draggable:m(a.draggable)?a.draggable:b.draggable,draggablePercent:a.draggablePercent||b.draggablePercent,draggableDirection:a.draggableDirection||b.draggableDirection,closeOnClick:m(a.closeOnClick)?a.closeOnClick:b.closeOnClick,progressClassName:y(a.progressClassName||b.progressClassName),progressStyle:a.progressStyle||b.progressStyle,autoClose:!a.isLoading&&(k=a.autoClose,w=b.autoClose,!1===k||p(k)&&k>0?k:w),hideProgressBar:m(a.hideProgressBar)?a.hideProgressBar:b.hideProgressBar,progress:a.progress,role:a.role||b.role,deleteToast:function(){var e=_(E.get(i),"removed");E.delete(i),I.emit(4,e);var t=C.queue.length;if(C.count=h(i)?C.count-1:C.count-C.displayedToast,C.count<0&&(C.count=0),t>0){var o=h(i)?1:C.props.limit;if(1===t||1===o)C.displayedToast++,N();else{var r=o>t?t:o;C.displayedToast=r;for(var a=0;a<r;a++)N()}}else n()}};x.iconOut=Z(x),g(a.onOpen)&&(x.onOpen=a.onOpen),g(a.onClose)&&(x.onClose=a.onClose),x.closeButton=b.closeButton,!1===a.closeButton||T(a.closeButton)?x.closeButton=a.closeButton:!0===a.closeButton&&(x.closeButton=!T(b.closeButton)||b.closeButton);var B=e;(0,c.isValidElement)(e)&&!v(e.type)?B=(0,c.cloneElement)(e,{closeToast:O,toastProps:x,data:l}):g(e)&&(B=e({closeToast:O,toastProps:x,data:l})),b.limit&&b.limit>0&&C.count>b.limit&&R?C.queue.push({toastContent:B,toastProps:x,staleId:r}):p(o)?setTimeout((function(){P(B,x,r)}),o):P(B,x,r)}}function P(e,t,n){var o=t.toastId;n&&E.delete(n);var r={content:e,props:t};E.set(o,r),l((function(e){return[].concat((0,i.Z)(e),[o]).filter((function(e){return e!==n}))})),I.emit(4,_(r,null==r.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return C.containerId=e.containerId,I.cancelEmit(3).on(0,R).on(1,(function(e){return d.current&&L(e)})).on(5,O).emit(2,C),function(){E.clear(),I.emit(3,C)}}),[]),(0,c.useEffect)((function(){C.props=e,C.isToastActive=b,C.displayedToast=u.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(E.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:d,isToastActive:b}}function R(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function P(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function k(e){var t=(0,c.useState)(!1),n=(0,r.Z)(t,2),o=n[0],a=n[1],s=(0,c.useState)(!1),i=(0,r.Z)(s,2),u=i[0],l=i[1],d=(0,c.useRef)(null),f=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(e),m=e.autoClose,v=e.pauseOnHover,y=e.closeToast,h=e.onClick,T=e.closeOnClick;function E(t){if(e.draggable){f.didMove=!1,document.addEventListener("mousemove",I),document.addEventListener("mouseup",O),document.addEventListener("touchmove",I),document.addEventListener("touchend",O);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=R(t.nativeEvent),f.y=P(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(){if(f.boundingRect){var t=f.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&f.x>=r&&f.x<=a&&f.y>=n&&f.y<=o?_():C()}}function C(){a(!0)}function _(){a(!1)}function I(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&_(),f.x=R(t),f.y=P(t),"x"===e.draggableDirection?f.delta=f.x-f.start:f.delta=f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function O(){document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",O),document.removeEventListener("touchmove",I),document.removeEventListener("touchend",O);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,c.useEffect)((function(){p.current=e})),(0,c.useEffect)((function(){return d.current&&d.current.addEventListener("d",C,{once:!0}),g(e.onOpen)&&e.onOpen((0,c.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;g(e.onClose)&&e.onClose((0,c.isValidElement)(e.children)&&e.children.props)}}),[]),(0,c.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||_();window.addEventListener("focus",C),window.addEventListener("blur",_)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",_))}}),[e.pauseOnFocusLoss]);var L={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return m&&v&&(L.onMouseEnter=_,L.onMouseLeave=C),T&&(L.onClick=function(e){h&&h(e),f.canCloseOnClick&&y()}),{playToast:C,pauseToast:_,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:L}}function w(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function x(e){var t=e.delay,n=e.isRunning,r=e.closeToast,s=e.type,i=e.hide,u=e.className,d=e.style,f=e.controlledProgress,p=e.progress,m=e.rtl,v=e.isIn,y=e.theme,h=(0,a.Z)((0,a.Z)({},d),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:i?0:1});f&&(h.transform="scaleX("+p+")");var T=l("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+y,"Toastify__progress-bar--"+s,(0,o.Z)({},"Toastify__progress-bar--rtl",m)),E=g(u)?u({rtl:m,type:s,defaultClassName:T}):l(T,u),b=(0,o.Z)({},f&&p>=1?"onTransitionEnd":"onAnimationEnd",f&&p<1?null:function(){v&&r()});return c.createElement("div",(0,a.Z)({role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:E,style:h},b))}x.defaultProps={type:b.DEFAULT,hide:!1};var B=function(e){var t=k(e),n=t.isRunning,r=t.preventExitTransition,s=t.toastRef,i=t.eventHandlers,u=e.closeButton,d=e.children,f=e.autoClose,p=e.onClick,m=e.type,v=e.hideProgressBar,y=e.closeToast,h=e.transition,T=e.position,E=e.className,b=e.style,C=e.bodyClassName,_=e.bodyStyle,I=e.progressClassName,O=e.progressStyle,L=e.updateId,Z=e.role,N=e.progress,R=e.rtl,P=e.toastId,B=e.deleteToast,M=e.isIn,A=e.isLoading,D=e.iconOut,S=e.theme,F=l("Toastify__toast","Toastify__toast-theme--"+S,"Toastify__toast--"+m,(0,o.Z)({},"Toastify__toast--rtl",R)),z=g(E)?E({rtl:R,position:T,type:m,defaultClassName:F}):l(F,E),H=!!N,q={closeToast:y,type:m,theme:S},U=null;return!1===u||(U=g(u)?u(q):c.isValidElement(u)?c.cloneElement(u,q):w(q)),c.createElement(h,{isIn:M,done:B,position:T,preventExitTransition:r,nodeRef:s},c.createElement("div",(0,a.Z)((0,a.Z)({id:P,onClick:p,className:z},i),{},{style:b,ref:s}),c.createElement("div",(0,a.Z)((0,a.Z)({},M&&{role:Z}),{},{className:g(C)?C({type:m}):l("Toastify__toast-body",C),style:_}),null!=D&&c.createElement("div",{className:l("Toastify__toast-icon",(0,o.Z)({},"Toastify--animate-icon Toastify__zoom-enter",!A))},D),c.createElement("div",null,d)),U,(f||H)&&c.createElement(x,(0,a.Z)((0,a.Z)({},L&&!H?{key:"pb-"+L}:{}),{},{rtl:R,theme:S,delay:f,isRunning:n,isIn:M,closeToast:y,hide:v,type:m,style:O,className:I,controlledProgress:H,progress:N}))))},M=C({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),A=C({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),D=(C({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),C({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,c.forwardRef)((function(e,t){var n=N(e),r=n.getToastToRender,s=n.containerRef,i=n.isToastActive,u=e.className,d=e.style,f=e.rtl,p=e.containerId;function m(e){var t=l("Toastify__toast-container","Toastify__toast-container--"+e,(0,o.Z)({},"Toastify__toast-container--rtl",f));return g(u)?u({position:e,rtl:f,defaultClassName:t}):l(t,y(u))}return(0,c.useEffect)((function(){t&&(t.current=s.current)}),[]),c.createElement("div",{ref:s,className:"Toastify",id:p},r((function(e,t){var n=t.length?(0,a.Z)({},d):(0,a.Z)((0,a.Z)({},d),{},{pointerEvents:"none"});return c.createElement("div",{className:m(e),style:n,key:"container-"+e},t.map((function(e,n){var o=e.content,r=e.props;return c.createElement(B,(0,a.Z)((0,a.Z)({},r),{},{isIn:i(r.toastId),style:(0,a.Z)((0,a.Z)({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+r.key}),o)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:E.TOP_RIGHT,transition:M,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:w,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var S,F=new Map,z=[];function H(){return Math.random().toString(36).substring(2,9)}function q(e){return e&&(v(e.toastId)||p(e.toastId))?e.toastId:H()}function U(e,t){return F.size>0?I.emit(0,e,t):z.push({content:e,options:t}),t.toastId}function Q(e,t){return(0,a.Z)((0,a.Z)({},t),{},{type:t&&t.type||e,toastId:q(t)})}function V(e){return function(t,n){return U(t,Q(e,n))}}function G(e,t){return U(e,Q(b.DEFAULT,t))}G.loading=function(e,t){return U(e,Q(b.DEFAULT,(0,a.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},G.promise=function(e,t,n){var o,r=t.pending,s=t.error,i=t.success;r&&(o=v(r)?G.loading(r,n):G.loading(r.render,(0,a.Z)((0,a.Z)({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(e,t,r){if(null!=t){var s=(0,a.Z)((0,a.Z)((0,a.Z)({type:e},c),n),{},{data:r}),i=v(t)?{render:t}:t;return o?G.update(o,(0,a.Z)((0,a.Z)({},s),i)):G(i.render,(0,a.Z)((0,a.Z)({},s),i)),r}G.dismiss(o)},l=g(e)?e():e;return l.then((function(e){return u("success",i,e)})).catch((function(e){return u("error",s,e)})),l},G.success=V(b.SUCCESS),G.info=V(b.INFO),G.error=V(b.ERROR),G.warning=V(b.WARNING),G.warn=G.warning,G.dark=function(e,t){return U(e,Q(b.DEFAULT,(0,a.Z)({theme:"dark"},t)))},G.dismiss=function(e){return I.emit(1,e)},G.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},G.isActive=function(e){var t=!1;return F.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},G.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=F.get(n||S);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,s=(0,a.Z)((0,a.Z)((0,a.Z)({},o),t),{},{toastId:t.toastId||e,updateId:H()});s.toastId!==e&&(s.staleId=e);var i=s.render||r;delete s.render,U(i,s)}}),0)},G.done=function(e){G.update(e,{progress:1})},G.onChange=function(e){return I.on(4,e),function(){I.off(4,e)}},G.POSITION=E,G.TYPE=b,I.on(2,(function(e){S=e.containerId||e,F.set(S,e),z.forEach((function(e){I.emit(0,e.content,e.options)})),z=[]})).on(3,(function(e){F.delete(e.containerId||e),0===F.size&&I.off(0).off(1).off(5)}))}}]);
//# sourceMappingURL=85.e6d456ab.chunk.js.map