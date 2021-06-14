(this["webpackJsonprapid-api-tutorial"]=this["webpackJsonprapid-api-tutorial"]||[]).push([[0],{23:function(n,e,t){"use strict";t.r(e);var r,o,a,i,c,l,s,d,p,h,u,m,b=t(0),f=t(9),g=t.n(f),x=t(5),j={body:"#DEE4E7",text:"#363537",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)"},v={body:"#181818",text:"#FAFAFA",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)"},w=t(3),O=t(2),y=Object(O.b)(r||(r=Object(w.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  :root {\n    --type-body: Open Sans, Helvetica, Arial, sans-serif;\n    --type-quote: Vollkorn;\n    --quote-image-width: 140px;\n    --border-rad: 7px;\n    --accent-color: hsl(322deg 85% 65%);\n    --quote-bg: hsl(0 0% 97%);\n  }\n\n  body {\n    background: ",";\n    color: ",";\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n    transition: all 0.25s linear;\n  }\n  \n  h1 { \n    font-family: 'Raleway',sans-serif; \n    font-size: 25px; \n    font-weight: 800; \n    line-height: 72px; \n    margin: 0 0 30px; \n    text-align: center; \n    text-transform: uppercase; \n  }\n\n  @media (min-width: 768px) {\n    h1 {\n      font-size: 50px;\n    }\n  }\n  \n  blockquote {\n    text-align: center;\n    position: relative;\n    margin: 40px 20px;\n    padding: 40px;\n    font: italic 1.2rem var(--type-quote);\n    background: var(--quote-bg) no-repeat left / var(--quote-image-width);\n    background-color: var(--quote-bg) no-repeat left / var(--quote-image-width);\n    border-radius: var(--border-rad);\n    border: 2px solid white;\n    box-shadow: 2px 2px 4px hsl(0 0% 0% / 20%);\n    text-indent: 1.6em;\n    align-self: center;\n  }\n  \n  @media (min-width: 768px) {\n    blockquote {\n      margin: 50px 60px;\n    }\n  }\n  \n  blockquote::before {\n    content: \"\";\n    pointer-events: none;\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: var(--border-rad);\n    box-shadow: inset -2px -2px 1px hsl(0 0% 100%),\n      inset 2px 2px 4px hsl(0 0% 0% / 20%);\n  }\n  \n  blockquote::after {\n    content: \"\u275d\";\n    position: absolute;\n    z-index: 1;\n    left: 50%;\n    top: -2px;\n    transform: translate(-50%, -50%);\n    width: 1.3em;\n    height: 1.3em;\n    background: white;\n    box-shadow: 0 4px 5px -1px hsla(0 0% 0% / 20%);\n    border-radius: 999px;\n    display: grid;\n    place-content: center;\n    padding-top: 0.5em;\n    color: var(--accent-color);\n    font-size: 36px;\n    font-style: normal;\n    text-indent: 0;\n  }\n\n  select {\n    // A reset of styles, including removing the default dropdown arrow\n    appearance: none;\n    background-color: transparent;\n    border: none;\n    padding: 0 1em 0 0;\n    margin: 0;\n    width: 100%;\n    font-family: inherit;\n    font-size: inherit;\n    cursor: inherit;\n    line-height: inherit;\n  \n    // Stack above custom arrow\n    z-index: 1;\n  \n    // Remove dropdown arrow in IE10 & IE11\n    // @link https://www.filamentgroup.com/lab/select-css.html\n    &::-ms-expand {\n      display: none;\n    }\n  \n    // Remove focus outline, will add on alternate element\n    outline: none;\n  }\n\n  .select {\n    display: grid;\n    grid-template-areas: \"select\";\n    align-items: center;\n    position: relative;\n    font-family: 'Raleway',sans-serif; \n    font-size: 10px; \n    text-align: center; \n    text-transform: uppercase;\n  \n    select,\n    &::after {\n      grid-area: select;\n    }\n  \n    min-width: 15ch;\n    max-width: 35ch;\n  \n    border: 1px solid var(--select-border);\n    border-radius: 0.25em;\n    padding: 0.25em 0.5em;\n  \n    font-size: 1rem;\n    cursor: pointer;\n    line-height: 1.5;\n  \n    // Optional styles\n    // remove for transparency\n    background-color: #fff;\n    background-image: linear-gradient(to top, #f9f9f9, #fff 33%);\n  \n    // Custom arrow\n    &:not(.select--multiple)::after {\n      content: \"\";\n      justify-self: end;\n      width: 0.8em;\n      height: 0.5em;\n      background-color: var(--select-arrow);\n      clip-path: polygon(100% 0%, 0 0%, 50% 100%);\n    }\n  }\n\n  select:focus + .focus {\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    right: -1px;\n    bottom: -1px;\n    border: 2px solid var(--select-focus);\n    border-radius: inherit;\n  }\n\n  label {\n    font-size: 1.125rem;\n    font-weight: 500;\n  }\n  \n  .select + label {\n    margin-top: 3rem;\n  }\n\n  .select-category {\n    margin: 15px auto;\n    width: 20%;\n  }\n\n  button {\n    font-weight: 600;\n    border: solid 2px black;\n    outline: 0;\n    padding: 1rem 4rem;\n    letter-spacing: .08rem;\n    background-color: white;\n    border-radius: .35rem;\n    position: relative;\n    cursor: pointer;\n    font-family: 'Raleway',sans-serif; \n    font-size: 20px; \n    text-align: center; \n    text-transform: uppercase;\n    margin: 20px 30px;\n    \n    &::after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: pink;\n        z-index: -1;\n        border-radius: .35rem;\n        border: solid 2px pink;\n        transition: all .3s ease-in-out;\n    }\n  }\n\n  @media (min-width: 768px) {\n    button {\n      margin: 0 20px;\n    }\n  }\n\n  button.new-quotes , button.tweet-quotes , button.save-quote{\n    &::after {\n        border: 0;\n        box-shadow: 0px 0px 0px 2px pink;\n        width: calc(100%);\n        height: calc(100%);\n    }\n    \n    &:hover {\n      &::after {\n        top: -.5rem;\n        left: -.5rem;\n        width: calc(100% + .5rem * 2);\n        height: calc(100% + .5rem * 2);\n      }\n    }\n  }\n\n  .flex-button {\n    display: flex;\n    flex-direction: column;\n  }\n\n  @media (min-width: 768px) {\n    .flex-button {\n      flex-direction: row;\n    }\n  }\n\n  .button-functions {\n    justify-content: center;\n  }\n\n  .quote {\n    padding: 1px 0\n  }\n  "])),(function(n){return n.theme.body}),(function(n){return n.theme.text})),k=["title","titleId"];function z(){return(z=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function E(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function q(n,e){var t=n.title,r=n.titleId,f=E(n,k);return b.createElement("svg",z({id:"bold",enableBackground:"new 0 0 24 24",height:512,viewBox:"0 0 24 24",width:512,xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},f),t?b.createElement("title",{id:r},t):null,o||(o=b.createElement("path",{d:"m12 3.457c-.414 0-.75-.336-.75-.75v-1.957c0-.414.336-.75.75-.75s.75.336.75.75v1.957c0 .414-.336.75-.75.75z"})),a||(a=b.createElement("path",{d:"m18.571 6.179c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l1.384-1.384c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-1.384 1.384c-.147.146-.339.22-.531.22z"})),i||(i=b.createElement("path",{d:"m23.25 12.75h-1.957c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.957c.414 0 .75.336.75.75s-.336.75-.75.75z"})),c||(c=b.createElement("path",{d:"m19.955 20.705c-.192 0-.384-.073-.53-.22l-1.384-1.384c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l1.384 1.384c.293.293.293.768 0 1.061-.147.147-.339.22-.531.22z"})),l||(l=b.createElement("path",{d:"m4.045 20.705c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l1.384-1.384c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-1.384 1.384c-.147.147-.339.22-.531.22z"})),s||(s=b.createElement("path",{d:"m2.707 12.75h-1.957c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.957c.414 0 .75.336.75.75s-.336.75-.75.75z"})),d||(d=b.createElement("path",{d:"m5.429 6.179c-.192 0-.384-.073-.53-.22l-1.384-1.384c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l1.384 1.384c.293.293.293.768 0 1.061-.148.146-.339.22-.531.22z"})),p||(p=b.createElement("path",{d:"m15 21v1.25c0 .96-.79 1.75-1.75 1.75h-2.5c-.84 0-1.75-.64-1.75-2.04v-.96z"})),h||(h=b.createElement("path",{d:"m16.41 6.56c-1.64-1.33-3.8-1.85-5.91-1.4-2.65.55-4.8 2.71-5.35 5.36-.56 2.72.46 5.42 2.64 7.07.59.44 1 1.12 1.14 1.91v.01c.02-.01.05-.01.07-.01h6c.02 0 .03 0 .05.01v-.01c.14-.76.59-1.46 1.28-2 1.69-1.34 2.67-3.34 2.67-5.5 0-2.12-.94-4.1-2.59-5.44zm-.66 5.94c-.41 0-.75-.34-.75-.75 0-1.52-1.23-2.75-2.75-2.75-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.34 0 4.25 1.91 4.25 4.25 0 .41-.34.75-.75.75z"})),u||(u=b.createElement("path",{d:"m8.93 19.5h.07c-.02 0-.05 0-.07.01z"})),m||(m=b.createElement("path",{d:"m15.05 19.5v.01c-.02-.01-.03-.01-.05-.01z"})))}var S,I,B,F,R,A,N,C,D,P,M,T,Y=b.forwardRef(q),Q=(t.p,["title","titleId"]);function G(){return(G=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function H(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function J(n,e){var t=n.title,r=n.titleId,o=H(n,Q);return b.createElement("svg",G({id:"regular",enableBackground:"new 0 0 24 24",height:512,viewBox:"0 0 24 24",width:512,xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},o),t?b.createElement("title",{id:r},t):null,S||(S=b.createElement("path",{d:"m19 12c0 2.16-.98 4.16-2.67 5.5-.69.54-1.14 1.25-1.28 2.01-.02-.01-.03-.01-.05-.01h-6c-.02 0-.05 0-.07.01-.14-.79-.55-1.48-1.14-1.92-2.18-1.65-3.2-4.35-2.64-7.07.55-2.65 2.7-4.81 5.35-5.36 2.11-.45 4.27.07 5.91 1.4 1.65 1.34 2.59 3.32 2.59 5.44z",fill:"#ffc107"})),I||(I=b.createElement("path",{d:"m15.05 19.51c-.03.17-.05.34-.05.52v2.22c0 .96-.79 1.75-1.75 1.75h-2.5c-.84 0-1.75-.64-1.75-2.04v-1.77c0-.23-.02-.46-.07-.68.02-.01.05-.01.07-.01h6c.02 0 .03 0 .05.01z",fill:"#607d8b"})),B||(B=b.createElement("path",{d:"m14.25 21h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75s-.336.75-.75.75z"})),F||(F=b.createElement("path",{d:"m12 3.457c-.414 0-.75-.336-.75-.75v-1.957c0-.414.336-.75.75-.75s.75.336.75.75v1.957c0 .414-.336.75-.75.75z"})),R||(R=b.createElement("path",{d:"m18.571 6.179c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l1.384-1.384c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-1.384 1.384c-.147.146-.339.22-.531.22z"})),A||(A=b.createElement("path",{d:"m23.25 12.75h-1.957c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.957c.414 0 .75.336.75.75s-.336.75-.75.75z"})),N||(N=b.createElement("path",{d:"m19.955 20.705c-.192 0-.384-.073-.53-.22l-1.384-1.384c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l1.384 1.384c.293.293.293.768 0 1.061-.147.147-.339.22-.531.22z"})),C||(C=b.createElement("path",{d:"m4.045 20.705c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l1.384-1.384c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-1.384 1.384c-.147.147-.339.22-.531.22z"})),D||(D=b.createElement("path",{d:"m2.707 12.75h-1.957c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.957c.414 0 .75.336.75.75s-.336.75-.75.75z"})),P||(P=b.createElement("path",{d:"m5.429 6.179c-.192 0-.384-.073-.53-.22l-1.384-1.384c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l1.384 1.384c.293.293.293.768 0 1.061-.148.146-.339.22-.531.22z"})),M||(M=b.createElement("path",{d:"m15.75 12.5c-.414 0-.75-.336-.75-.75 0-1.517-1.233-2.75-2.75-2.75-.414 0-.75-.336-.75-.75s.336-.75.75-.75c2.343 0 4.25 1.907 4.25 4.25 0 .414-.336.75-.75.75z"})),T||(T=b.createElement("path",{d:"m13.25 24h-2.5c-.843 0-1.75-.64-1.75-2.044v-1.764c0-1.061-.452-2.035-1.209-2.605-2.185-1.645-3.196-4.351-2.639-7.062.545-2.656 2.694-4.813 5.347-5.368 2.11-.444 4.268.07 5.914 1.408 1.644 1.336 2.587 3.317 2.587 5.435 0 2.158-.975 4.161-2.675 5.498-.842.662-1.325 1.584-1.325 2.529v2.223c0 .965-.785 1.75-1.75 1.75zm-1.264-17.498c-.392 0-.787.041-1.182.123-2.076.434-3.757 2.122-4.184 4.201-.439 2.137.355 4.269 2.072 5.562 1.131.852 1.807 2.274 1.807 3.804v1.764c0 .091.012.544.25.544h2.5c.138 0 .25-.112.25-.25v-2.223c0-1.409.692-2.76 1.898-3.709 1.337-1.05 2.103-2.624 2.103-4.318 0-1.664-.742-3.221-2.034-4.271-.988-.802-2.213-1.227-3.48-1.227z"})))}var U,V=b.forwardRef(J),W=(t.p,t(1)),_=O.c.button(U||(U=Object(w.a)(["\n  background: ",";\n  border: 2px solid ",";\n  border-radius: 30px;\n  cursor: pointer;\n  display: flex;\n  font-size: 0.5rem;\n  justify-content: space-between;\n  margin: 0 auto;\n  overflow: hidden;\n  padding: 0.5rem;\n  position: relative;\n  width: 6rem;\n  height: 3.5rem;\n\n  svg {\n    height: auto;\n    width: 2.5rem;\n    transition: all 0.3s linear;\n\n    &:first-child {\n      transform: ",";\n    }\n\n    &:nth-child(2) {\n      transform: ",";\n    }\n  }\n"])),(function(n){return n.theme.gradient}),(function(n){return n.theme.toggleBorder}),(function(n){return n.DarkMode?"translateY(0)":"translateY(100px)"}),(function(n){return n.DarkMode?"translateY(-100px)":"translateY(0)"})),K=function(n){var e=n.theme,t=n.toggleTheme,r="dark"===e;return Object(W.jsxs)(_,{DarkMode:r,onClick:t,children:[Object(W.jsx)(V,{}),Object(W.jsx)(Y,{})]})},L=t(13),X=t.n(L),Z=t(14),$=function(){var n=Object(b.useState)([]),e=Object(x.a)(n,2),t=e[0],r=e[1],o=Object(b.useState)("all"),a=Object(x.a)(o,2),i=a[0],c=a[1],l=Object(b.useState)("dark"),s=Object(x.a)(l,2),d=s[0],p=s[1],h=Object(b.createRef)(),u=function(){"all"===i?fetch("https://api.quotable.io/random").then((function(n){return n.json()})).then((function(n){return r(n)})):"technology"===i?fetch("https://api.quotable.io/random?tags=technology").then((function(n){return n.json()})).then((function(n){return r(n)})):"friendship"===i?fetch("https://api.quotable.io/random?tags=friendship").then((function(n){return n.json()})).then((function(n){return r(n)})):"inspirational"===i?fetch("https://api.quotable.io/random?tags=inspirational").then((function(n){return n.json()})).then((function(n){return r(n)})):fetch("https://api.quotable.io/random?tags=wisdom").then((function(n){return n.json()})).then((function(n){return r(n)}))};Object(b.useEffect)((function(){u()}),[]);var m=t.content,f=t.author;return Object(W.jsx)(O.a,{theme:"dark"===d?v:j,children:Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(y,{}),Object(W.jsx)("h1",{children:"Random Quotes Generator"}),Object(W.jsx)(K,{theme:d,toggleTheme:function(){p("dark"===d?"light":"dark")}})," ",Object(W.jsx)("br",{}),Object(W.jsxs)("div",{className:"select-category",children:[Object(W.jsx)("label",{htmlFor:"standard-select",children:"Select your category :"}),Object(W.jsx)("br",{}),Object(W.jsxs)("div",{className:"select",children:[Object(W.jsxs)("select",{id:"standard-select",value:i,onChange:function(n){c(n.target.value),u()},children:[Object(W.jsx)("option",{value:"all",children:"All Categories"}),Object(W.jsx)("option",{value:"technology",children:"Science & Technology"}),Object(W.jsx)("option",{value:"friendship",children:"Friendship"}),Object(W.jsx)("option",{value:"inspirational",children:"Inspirational"}),Object(W.jsx)("option",{value:"wisdom",children:"Wisdom"})]}),Object(W.jsx)("span",{className:"focus"})]})]}),Object(W.jsx)("div",{className:"quote",ref:h,children:Object(W.jsxs)("blockquote",{children:['"',m,'" ',Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsxs)("b",{children:["--",f,"--"]})]})}),Object(W.jsxs)("div",{className:"flex-button button-functions",children:[Object(W.jsx)("button",{className:"tweet-quotes",onClick:function(){var n="https://twitter.com/intent/tweet?text=".concat(t.author,' has said : "').concat(t.content,'"');window.open(n,"_blank")},children:"Tweet this quote"}),Object(W.jsx)("button",{className:"new-quotes",onClick:function(){u()},children:"Get New Quote"}),Object(W.jsx)("button",{className:"save-quote",onClick:function(){var n=h.current;X.a.toBlob(n,{quality:1,bgcolor:"violet"}).then((function(n){Object(Z.saveAs)(n,"saved-quote.png")}))},children:"Save Quote Image"})]})]})})};g.a.render(Object(W.jsx)($,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.558ecc21.chunk.js.map