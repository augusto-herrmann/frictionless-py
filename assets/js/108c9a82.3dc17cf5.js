(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{159:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),d=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(r),g=n,f=p["".concat(i,".").concat(g)]||p[g]||l[g]||a;return r?o.a.createElement(f,s(s({ref:t},u),{},{components:r})):o.a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(8),a=(r(0),r(159)),i={title:"Storage Guide"},s={unversionedId:"guides/extension/storage-guide",id:"guides/extension/storage-guide",isDocsHomePage:!1,title:"Storage Guide",description:"The Storage concpet is responsible for reading and writing data package from dataset source like CKAN, SQL, or others. Currently, the Storage API is not yet finished so you can try reading the codebase and implement your own storage but you need to be ready for some changes to the API that might come.",source:"@site/../docs/guides/extension/storage-guide.md",slug:"/guides/extension/storage-guide",permalink:"/docs/guides/extension/storage-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/extension/storage-guide.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1615820637,formattedLastUpdatedAt:"3/15/2021",sidebar:"guides",previous:{title:"Server Guide",permalink:"/docs/guides/extension/server-guide"},next:{title:"What's next?",permalink:"/docs/guides/whats-next"}},c=[],u={toc:c};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Storage concpet is responsible for reading and writing data package from dataset source like CKAN, SQL, or others. Currently, the Storage API is not yet finished so you can try reading the codebase and implement your own storage but you need to be ready for some changes to the API that might come."))}d.isMDXComponent=!0}}]);