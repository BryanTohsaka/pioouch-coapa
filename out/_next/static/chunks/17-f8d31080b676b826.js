(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17],{5941:function(e,n,r){"use strict";r.d(n,{Z:function(){return p}});var t=r(5893),a=r(7294),i=r(1664);function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return!n||"object"!==d(n)&&"function"!==typeof n?s(e):n}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,t=c(e);if(n){var a=c(this).constructor;r=Reflect.construct(t,arguments,a)}else r=t.apply(this,arguments);return u(this,r)}}var p=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(u,e);var n,r,a,c=h(u);function u(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,u),l(s(e=c.call(this)),"handleScroll",(function(){window.scrollY>70?e.setState({sticky:!0}):window.scrollY<70&&e.setState({sticky:!1})})),l(s(e),"mobileMenu",(function(){var e=document.querySelector(".menu-toggler"),n=document.querySelector(".main-navigation");e.addEventListener("click",(function(){n.style.display="block"!=n.style.display?"block":"none"}))})),e.state={sticky:!1},e}return n=u,(r=[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),this.mobileMenu()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return(0,t.jsx)("header",{className:"site-header site-header__header-one site-header__header-two ",children:(0,t.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light header-navigation stricky ".concat(this.state.sticky?"stricked-menu stricky-fixed":""),children:(0,t.jsxs)("div",{className:"container clearfix",children:[(0,t.jsxs)("div",{className:"logo-box clearfix",children:[(0,t.jsx)("a",{className:"navbar-brand",href:"/",children:(0,t.jsx)("img",{src:"/assets/images/resources/logo-light.png",className:"main-logo",width:"119",alt:"Awesome Image"})}),(0,t.jsx)("button",{className:"menu-toggler","data-target":".main-navigation",children:(0,t.jsx)("span",{className:"fa fa-bars"})})]}),(0,t.jsx)("div",{className:"main-navigation",children:(0,t.jsxs)("ul",{className:" one-page-scroll-menu navigation-box",children:[(0,t.jsxs)("li",{className:"current scrollToLink",children:[(0,t.jsx)("a",{href:"/",children:"Home"}),(0,t.jsxs)("ul",{className:"sub-menu",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/",children:"Home 01"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/index-2",children:"Home 02"})}),(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"#",children:"Header Versions"}),(0,t.jsxs)("ul",{className:"sub-menu",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"",children:"Header 01"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/index-2",children:"Header 02"})})]})]})]})]}),(0,t.jsx)("li",{className:"scrollToLink",children:(0,t.jsx)("a",{href:"#features",children:"Features"})}),(0,t.jsx)("li",{className:"scrollToLink",children:(0,t.jsx)("a",{href:"#video",children:"Video"})}),(0,t.jsx)("li",{className:"scrollToLink",children:(0,t.jsx)("a",{href:"#pricing",children:"Pricing"})}),(0,t.jsx)("li",{className:"scrollToLink",children:(0,t.jsx)("a",{href:"#screenshots",children:"App Screenshots"})}),(0,t.jsxs)("li",{className:"scrollToLink",children:[(0,t.jsx)("a",{href:"#news",children:"News"}),(0,t.jsxs)("ul",{className:"sub-menu",children:[(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/news",children:(0,t.jsx)("a",{children:"News"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/news-details",children:(0,t.jsx)("a",{children:"News Details"})})})]})]})]})}),(0,t.jsx)("div",{className:"right-side-box",children:(0,t.jsx)("a",{className:"thm-btn header__cta-btn",href:"#",children:(0,t.jsx)("span",{children:"Login"})})})]})})})}}])&&o(n.prototype,r),a&&o(n,a),u}(a.Component)},7031:function(e,n,r){"use strict";var t=r(5893),a=(r(7294),r(1664));n.Z=function(e){return(0,t.jsxs)("section",{className:"inner-banner",children:[(0,t.jsx)("span",{className:"banner-two__shape-1"}),(0,t.jsx)("span",{className:"banner-two__shape-2"}),(0,t.jsx)("span",{className:"banner-two__shape-3"}),(0,t.jsx)("span",{className:"banner-two__shape-4"}),(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("ul",{className:"list-unstyled thm-breadcrumb",children:[(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:"/",children:(0,t.jsx)("a",{children:"Home"})})}),(0,t.jsx)("li",{className:"active",children:(0,t.jsx)("a",{href:"#",children:e.title})})]}),(0,t.jsx)("h2",{className:"inner-banner__title",children:e.title})]})]})}},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(t=(s=o.next()).done)&&(r.push(s.value),!n||r.length!==n);t=!0);}catch(l){a=!0,i=l}finally{try{t||null==o.return||o.return()}finally{if(a)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},s=r(6273),o=r(387),l=r(7190);var c={};function u(e,n,r,t){if(e&&s.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;c[n+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,a=o.useRouter(),f=i.default.useMemo((function(){var n=t(s.resolveHref(a,e.href,!0),2),r=n[0],i=n[1];return{href:r,as:e.as?s.resolveHref(a,e.as):i||r}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,m=e.shallow,y=e.scroll,x=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var b=(n=i.default.Children.only(p))&&"object"===typeof n&&n.ref,j=t(l.useIntersection({rootMargin:"200px"}),2),g=j[0],w=j[1],N=i.default.useCallback((function(e){g(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,g]);i.default.useEffect((function(){var e=w&&r&&s.isLocalURL(d),n="undefined"!==typeof x?x:a&&a.locale,t=c[d+"%"+h+(n?"%"+n:"")];e&&!t&&u(a,d,h,{locale:n})}),[h,d,w,x,r,a]);var _={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,i,o,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==o&&t.indexOf("#")>=0&&(o=!1),n[a?"replace":"push"](r,t,{shallow:i,locale:l,scroll:o}))}(e,a,d,h,v,m,y,x)},onMouseEnter:function(e){s.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof x?x:a&&a.locale,L=a&&a.isLocaleDomain&&s.getDomainLocale(h,k,a&&a.locales,a&&a.domainLocales);_.href=L||s.addBasePath(s.addLocale(h,k,a&&a.defaultLocale))}return i.default.cloneElement(n,_)};n.default=f},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(t=(s=o.next()).done)&&(r.push(s.value),!n||r.length!==n);t=!0);}catch(l){a=!0,i=l}finally{try{t||null==o.return||o.return()}finally{if(a)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!s,l=a.useRef(),c=t(a.useState(!1),2),u=c[0],f=c[1],d=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||u||e&&e.tagName&&(l.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=o.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return o.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,i=t.observer,s=t.elements;return s.set(e,n),i.observe(e),function(){s.delete(e),i.unobserve(e),0===s.size&&(i.disconnect(),o.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,u]);return a.useEffect((function(){if(!s&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=r(7294),i=r(9311),s="undefined"!==typeof IntersectionObserver;var o=new Map},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}}]);