(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(112)),i={title:"Getting Started",description:"Getting started with Yacht",id:"Getting_Started"},l={unversionedId:"Installation/Getting_Started",id:"Installation/Getting_Started",isDocsHomePage:!1,title:"Getting Started",description:"Getting started with Yacht",source:"@site/docs/Installation/gettingstarted.md",slug:"/Installation/Getting_Started",permalink:"/docs/Installation/Getting_Started",editUrl:"https://github.com/SelfhostedPro/Yacht-Docs/edit/master/docs/Installation/gettingstarted.md",version:"current",sidebar:"documentation",previous:{title:"Install Yacht",permalink:"/docs/Installation/Install"},next:{title:"MacOS",permalink:"/docs/Installation/Mac"}},c=[{value:"Beginners Guide",id:"beginners-guide",children:[]},{value:"Setting Up Yacht",id:"setting-up-yacht",children:[]},{value:"Template Variables",id:"template-variables",children:[]},{value:"Adding a Template",id:"adding-a-template",children:[]},{value:"Deploying from a Template",id:"deploying-from-a-template",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"beginners-guide"},"Beginners Guide"),Object(r.b)("p",null,"This guide will take you through setting up Yacht, adding your first template, and deploying your first app."),Object(r.b)("h2",{id:"setting-up-yacht"},"Setting Up Yacht"),Object(r.b)("p",null,"Running Yacht is as simple as running the following two commands:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker volume create yacht\ndocker run -d -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock -v yacht:/config selfhostedpro/yacht\n")),Object(r.b)("p",null,"After that you can access Yacht on port 8000 on your server in a web browser."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"If you're using Yacht alongside portainer you'll want to change the 8000 on the left of the ",Object(r.b)("inlineCode",{parentName:"em"},":")," to 8001, then it will be available on that port on your host.")),Object(r.b)("p",null,"Once you're at the login page you can login with the username ",Object(r.b)("inlineCode",{parentName:"p"},"admin@yacht.local")," and the password ",Object(r.b)("inlineCode",{parentName:"p"},"pass"),"."),Object(r.b)("h2",{id:"template-variables"},"Template Variables"),Object(r.b)("p",null,"We'll setup template variables so that if you're using a template built for Yacht, you'll be able to have all of your files mounted in the correct places."),Object(r.b)("p",null,"Click on the Settings cog in the left sidebar and then click on Template Variables along the top."),Object(r.b)("p",null,"Replace the paths on the right with where you want each variable to be mounted. (This will typically be in your file shares if you're using a NAS)."),Object(r.b)("p",null,"Add any additional Variables you would like and when you're done, hit save at the bottom."),Object(r.b)("h2",{id:"adding-a-template"},"Adding a Template"),Object(r.b)("p",null,"To add a template, click on the Folder icon in the left sidebar and then on \"New Template\". If you don't have a template added yet it'll recommend you add the one that I maintain for Yacht. Once you've entered a name and URL you'll click submit."),Object(r.b)("p",null,'Now that you\'re on the "View Templates" page you can click on the template you added to see all the apps included with your template.'),Object(r.b)("p",null,'From the "View Templates" page you can also click on the 3 dots and from there you can update if there are any changes, view the template, or delete the template.'),Object(r.b)("h2",{id:"deploying-from-a-template"},"Deploying from a Template"),Object(r.b)("p",null,"Now that you have a template added let's deploy an application. Click on your template to view it. Then pick an app to deploy. You can click on view to see any details about the application."),Object(r.b)("p",null,"One you've got an app in mind click on deploy and you'll be taken to the deploy form. Everything should be filled out for you but double check that everything looks correct. Click on continue until you get to the last page and then click on Deploy."),Object(r.b)("p",null,"Now you'll see your running app. You can click on it to view more detailed stats or click on the Arrow to the right of the name to perform an action with it."))}u.isMDXComponent=!0},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,b=d["".concat(i,".").concat(h)]||d[h]||s[h]||r;return n?o.a.createElement(b,l(l({ref:t},p),{},{components:n})):o.a.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);