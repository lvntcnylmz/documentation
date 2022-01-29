"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[5779],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),o=n(9443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=n(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var l=function(e){var t,n=e.lazy,o=e.block,l=e.defaultValue,c=e.values,m=e.groupId,u=e.className,d=r.Children.toArray(e.children),f=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=l?l:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,k=a(),w=k.tabGroupChoices,h=k.setTabGroupChoices,b=(0,r.useState)(g),v=b[0],N=b[1],y=[];if(null!=m){var O=w[m];null!=O&&O!==v&&f.some((function(e){return e.value===O}))&&N(O)}var x=function(e){var t=e.currentTarget,n=y.indexOf(t),r=f[n].value;N(r),null!=m&&(h(m,r),setTimeout((function(){var e,n,r,o,a,p,i,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,p=window,i=p.innerHeight,l=p.innerWidth,n>=0&&a<=l&&o<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case"ArrowLeft":var o=y.indexOf(e.target)-1;n=y[o]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":o},u)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,p.Z)("tabs__item",i,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:C,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,r.cloneElement)(d.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},2026:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},Highlight:function(){return m},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),p=(n(5064),n(8215),["components"]),i={sidebar_position:1},s="Openbox",l={unversionedId:"window-managers/openbox",id:"window-managers/openbox",isDocsHomePage:!1,title:"Openbox",description:"For Archcraft community members, Edit the page.",source:"@site/docs/window-managers/openbox.mdx",sourceDirName:"window-managers",slug:"/window-managers/openbox",permalink:"/docs/window-managers/openbox",editUrl:"https://github.com/archcraft-os/documentation/edit/main/docs/window-managers/openbox.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Post Installation",permalink:"/docs/install-archcraft/post-install"},next:{title:"Bspwm",permalink:"/docs/window-managers/bspwm"}},c=[],m=function(e){var t=e.children,n=e.color;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"}},t)},u={toc:c,Highlight:m};function d(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openbox"},"Openbox"),(0,a.kt)("p",null,"For Archcraft community members, Edit the page."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: the mod Key in Archcraft Openbox is the Super Key (Aka: Windows key)"),"\n|Keybinding | Function |\n|------------ | ------------- |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+Return"),"| Open a terminal (alacritty) |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+f"),"| Open a file manager (thunar) |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+w"),"| Open a browser (firefox) |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+e"),"| Open a text editor (geany) |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+(1-5)"),"| Change Workspaces |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+Shift+(1-5)"),"| Move application to a specific Workspace |\n|",(0,a.kt)("strong",{parentName:"p"},"alt/mod+Tab"),"| Switch applications (Microsoft windows style) |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+(Up/Down/Left/Right)"),"| Snap window to corners |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+k"),"| Snap window to top right |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+h"),"| Snap window to top left |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+j"),"| Snap window to bottom left |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+l"),"| Snap window to bottom right |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+alt+up"),"| Move Window up |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+alt+down"),"| Move Window down |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+alt+left"),"| Move Window left |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+alt+right"),"| Move Window right |\n|",(0,a.kt)("strong",{parentName:"p"},"control+alt+right"),"| Resize window to right |\n|",(0,a.kt)("strong",{parentName:"p"},"control+alt+left"),"| Resize window to left |\n|",(0,a.kt)("strong",{parentName:"p"},"control+alt+down"),"| Resize window to down |\n|",(0,a.kt)("strong",{parentName:"p"},"control+alt+up"),"| Resize window to up |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+Shift+Left/Right"),"| Send Application to next/prev desktop |\n|",(0,a.kt)("strong",{parentName:"p"},"up+up+down+down+left+right+left+right+B+A"),"| Get super powers |\n|",(0,a.kt)("strong",{parentName:"p"},"alt+F1")," | Opens app launcher |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+n")," | Opens network menu |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+x")," | Opens a powermenu |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+m")," | Opens the music menu |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+i")," | Opens internet menu |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+s")," | Opens screenshoting menu |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+r")," | Runs apps as root |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+w")," | Opens windows menu |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+p"),"| Opens the color picker |\n|",(0,a.kt)("strong",{parentName:"p"},"Print")," | Takes a screenshot |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+Print")," | Takes a screenshot (5s delay) |\n|",(0,a.kt)("strong",{parentName:"p"},"Shift+Print")," | Takes a screenshot (10s delay)|\n|",(0,a.kt)("strong",{parentName:"p"},"Control+Print")," | Takes a screenshot of active window |\n|",(0,a.kt)("strong",{parentName:"p"},"Control+Alt+Print")," | Takes a screenshot of an area |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+v"),"| Open tasks menu |\n|",(0,a.kt)("strong",{parentName:"p"},"Control+Alt+t"),"| Open xfce4-terminal |\n|",(0,a.kt)("strong",{parentName:"p"},"Control+Alt+v"),"| Open vim |\n|",(0,a.kt)("strong",{parentName:"p"},"Control+Alt+n"),"| Open neovim |\n|",(0,a.kt)("strong",{parentName:"p"},"Control+Alt+r"),"| Open ranger |\n|",(0,a.kt)("strong",{parentName:"p"},"Control+Alt+h"),"| Open htop |\n|",(0,a.kt)("strong",{parentName:"p"},"Control+Alt+b"),"| Open bashtop |\n|",(0,a.kt)("strong",{parentName:"p"},"alt+Control+l")," | Launches the lockscreen |\n|",(0,a.kt)("strong",{parentName:"p"},"control+shift+Escape"),"| Exit openbox |\n|",(0,a.kt)("strong",{parentName:"p"},"control+Shift+BackSpace"),"| Restart openbox |\n|",(0,a.kt)("strong",{parentName:"p"},"control+shift+R"),"| Reconfigure openbox |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+Escape"),"| Select window and kill it (xkill) |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+c/q"),"| Close focused window |\n|",(0,a.kt)("strong",{parentName:"p"},"alt+F5"),"| Minimise window to taskbar |\n|",(0,a.kt)("strong",{parentName:"p"},"alt+F6"),"| Toggle Maximize |\n|",(0,a.kt)("strong",{parentName:"p"},"alt+F7"),"| ToggleDecorations |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+d"),"| Show desktop |\n|",(0,a.kt)("strong",{parentName:"p"},"alt+r"),"| Resize window |\n|",(0,a.kt)("strong",{parentName:"p"},"alt+m"),"| Move window |\n|",(0,a.kt)("strong",{parentName:"p"},"mod+Space"),"| Show root menu |\n|",(0,a.kt)("strong",{parentName:"p"},"control+alt+space"),"| Show app menu |\n|",(0,a.kt)("strong",{parentName:"p"},"alt+space"),"| Show client Menu |"),(0,a.kt)("p",null,"Made with \u2764\ufe0f by ",(0,a.kt)("a",{parentName:"p",href:"https://https://github.com/Archenagechan"},"Crystal")," "))}d.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);