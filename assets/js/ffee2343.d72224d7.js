(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{156:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),o=(r(0),r(161)),i={title:"Buffer Tutorial",sidebar_label:"Buffer"},c={unversionedId:"tutorials/schemes/buffer-tutorial",id:"tutorials/schemes/buffer-tutorial",isDocsHomePage:!1,title:"Buffer Tutorial",description:"Frictionless supports working with bytes loaded into memory.",source:"@site/../docs/tutorials/schemes/buffer-tutorial.md",slug:"/tutorials/schemes/buffer-tutorial",permalink:"/docs/tutorials/schemes/buffer-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/schemes/buffer-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1618403879,formattedLastUpdatedAt:"4/14/2021",sidebar_label:"Buffer",sidebar:"tutorials",previous:{title:"Working with API",permalink:"/docs/tutorials/working-with-api"},next:{title:"Local Tutorial",permalink:"/docs/tutorials/schemes/local-tutorial"}},l=[{value:"Reading Data",id:"reading-data",children:[]},{value:"Writing Data",id:"writing-data",children:[]},{value:"Configuring Data",id:"configuring-data",children:[]}],u={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Frictionless supports working with bytes loaded into memory."),Object(o.b)("h2",{id:"reading-data"},"Reading Data"),Object(o.b)("p",null,"You can read Buffer Data using ",Object(o.b)("inlineCode",{parentName:"p"},"Package/Resource")," API, for example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'goodread title="Python"',goodread:!0,title:'"Python"'},"from pprint import pprint\nfrom frictionless import Resource\n\nresource = Resource(b'id,name\\n1,english\\n2,german', format='csv')\npprint(resource.read_rows())\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[{'id': 1, 'name': 'english'}, {'id': 2, 'name': 'german'}]\n")),Object(o.b)("h2",{id:"writing-data"},"Writing Data"),Object(o.b)("p",null,"A similiar approach can be used for writing:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'goodread title="Python"',goodread:!0,title:'"Python"'},"from pprint import pprint\nfrom frictionless import Resource\n\nsource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\ntarget = source.write(scheme='buffer', format='csv')\npprint(target)\npprint(target.read_rows())\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{'data': b'id,name\\r\\n1,english\\r\\n2,german\\r\\n',\n 'format': 'csv',\n 'scheme': 'buffer'}\n[{'id': 1, 'name': 'english'}, {'id': 2, 'name': 'german'}]\n")),Object(o.b)("h2",{id:"configuring-data"},"Configuring Data"),Object(o.b)("p",null,"There are no options available for ",Object(o.b)("inlineCode",{parentName:"p"},"BufferControl"),"."),Object(o.b)("p",null,"References:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/references/schemes-reference#buffer"},"Buffer Control"))))}s.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return r?a.a.createElement(b,c(c({ref:t},u),{},{components:r})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);