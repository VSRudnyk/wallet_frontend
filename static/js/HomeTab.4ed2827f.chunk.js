"use strict";(self.webpackChunkwallet_frontend=self.webpackChunkwallet_frontend||[]).push([[912],{9717:function(n,e,t){t.r(e),t.d(e,{default:function(){return ln}});var r,o,i,a,d,l,c,s=t(9439),p=t(168),h=t(6031),x=t(8185),u=h.ZP.ul(r||(r=(0,p.Z)(["\n  @media screen and (max-width: 767px) {\n    width: 277px;\n    border-radius: 10px;\n\n    overflow: hidden;\n  }\n  @media screen and (min-width: 768px) {\n    display: flex;\n\n    justify-content: space-between;\n  }\n"]))),f=h.ZP.li(o||(o=(0,p.Z)(["\n  background-color: transparent;\n\n  @media screen and (max-width: 767px) {\n    display: flex;\n    align-items: center;\n    position: relative;\n\n    padding: 12px 20px 8px 20px;\n    background-color: var(--transaction-item-bg-color);\n\n    border-bottom: 1px solid;\n    border-bottom-color: var(--transaction-underline-color);\n\n    &::before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      background-color: ",";\n      width: 5px;\n      height: 100%;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    width: 110px;\n    display: flex;\n    justify-content: center;\n  }\n"])),(function(n){return"income"===n.type?"#24CCA7":"#ff6596"})),b=h.ZP.p(i||(i=(0,p.Z)(["\n  font-family: var(--baseFont);\n  font-style: normal;\n  font-weight: var(--bold);\n  font-size: 18px;\n  line-height: 27px;\n\n  color: var(--black);\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n"]))),m=h.ZP.p(a||(a=(0,p.Z)(["\n  position: relative;\n  overflow: hidden;\n  font-family: var(--baseFont);\n  font-style: normal;\n  font-weight: var(-regular);\n  font-size: 16px;\n  line-height: 24px;\n\n  @media (max-width: 767px) {\n    margin-left: auto;\n  }\n"]))),g=h.ZP.span(d||(d=(0,p.Z)(["\n  color: ",";\n"])),(function(n){return"income"===n.income?"#24CCA7":"#ff6596"})),w=h.ZP.button(l||(l=(0,p.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 64%;\n  transform: translate(-50%, -50%);\n\n  background-color: transparent;\n  outline: none;\n  border: none;\n  padding: 9px;\n"]))),Z=(0,h.ZP)(x.AuQ)(c||(c=(0,p.Z)(["\n  cursor: pointer;\n  color: #bdbdbd;\n  &:hover {\n    fill: #ff6596;\n  }\n"]))),j=t(2810),v=t(1807),y=t(3168),k=t(570),C=t(5562),P=t.n(C),F=t(184);P().Confirm.init({okButtonBackground:"#ff6596"});var z,L,A,B,O,S=function(n){var e=n.transaction,t=(0,k.yC)({refetchOnMountOrArgChange:!0}),r=(0,s.Z)(t,1)[0],o=(0,y.$)().t,i=e._id,a=e.date,d=e.type,l=e.category,c=e.comment,p=e.sum,h=e.balance,x=Object.entries({_id:i,date:a,type:d,category:l,comment:c,sum:p,balance:h}).map((function(n){var e=(0,s.Z)(n,2),t=e[0],a=e[1];switch(t){case"date":var l=new Date(a).toISOString().slice(2).substring(0,8).split("-").reverse().join(".");return(0,F.jsxs)(f,{type:d,children:[(0,F.jsx)(b,{children:o("".concat(t))}),(0,F.jsx)(m,{children:"".concat(l)})]},(0,j.Z)());case"type":return(0,F.jsxs)(f,{type:d,children:[(0,F.jsx)(b,{children:o("".concat(t))}),(0,F.jsx)(m,{children:o("".concat(a))})]},(0,j.Z)());case"category":return(0,F.jsxs)(f,{type:d,children:[(0,F.jsx)(b,{children:o("".concat(t))}),(0,F.jsx)(m,{children:o("".concat(a.toLowerCase()))})]},(0,j.Z)());case"comment":return(0,F.jsxs)(f,{type:d,children:[(0,F.jsx)(b,{children:o("".concat(t))}),(0,F.jsx)(m,{children:(0,F.jsx)(v.default,{text:"".concat(a),length:20})})]},(0,j.Z)());case"sum":return(0,F.jsxs)(f,{type:d,children:[(0,F.jsx)(b,{children:o("".concat(t))}),(0,F.jsx)(m,{children:(0,F.jsx)(g,{income:d,children:"".concat(a.toFixed(2))})})]},(0,j.Z)());case"balance":return(0,F.jsxs)(f,{type:d,children:[(0,F.jsx)(b,{children:o("".concat(t))}),(0,F.jsx)(m,{children:"".concat(a.toFixed(2))}),(0,F.jsx)(w,{type:"button",onClick:function(){var n;n=i,P().Confirm.show(o("deleteprompt.sure"),o("deleteprompt.irrevertable"),o("deleteprompt.delete"),o("deleteprompt.cancel"),(function(){r(n)}),(function(){}))},children:(0,F.jsx)(Z,{})})]},(0,j.Z)())}return null}));return(0,F.jsx)(u,{children:x})},T=h.ZP.li(z||(z=(0,p.Z)(["\n  position: relative;\n  display: flex;\n  transition: all 0.2s ease-in-out;\n  &:hover {\n    transform: scale(1.01);\n  }\n  &::after {\n    content: '';\n    position: absolute;\n    left: 18px;\n    top: 56.396px;\n    background-color: #dcdcdf;\n    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);\n    width: 95%;\n    height: 1px;\n    z-index: -3;\n  }\n"]))),_=h.ZP.p(L||(L=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-family: var(--baseFont);\n  font-style: normal;\n  font-weight: var(-regular);\n  font-size: 16px;\n  line-height: 24px;\n  overflowwrap: break-word;\n  z-index: -2;\n"]))),$=h.ZP.span(A||(A=(0,p.Z)(["\n  color: ","; ;\n"])),(function(n){return"income"===n.income?"#24CCA7":"#ff6596"})),D=h.ZP.button(B||(B=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translate(-50%, -50%);\n\n  background-color: transparent;\n  outline: none;\n  border: none;\n  padding: 9px;\n"]))),I=(0,h.ZP)(x.AuQ)(O||(O=(0,p.Z)(["\n  cursor: pointer;\n  color: #bdbdbd;\n  &:hover {\n    fill: #ff6596;\n  }\n"])));P().Confirm.init({okButtonBackground:"#ff6596"});var M,Q,R,q,W,E,G,H,J,K,N,U,V=function(n){var e=n.transaction,t=(0,k.yC)({refetchOnMountOrArgChange:!0}),r=(0,s.Z)(t,1)[0],o=e._id,i=e.date,a=e.type,d=e.category,l=e.comment,c=e.sum,p=e.balance,h=(0,y.$)().t,x=new Date(i).toISOString().slice(2).substring(0,8).split("-").reverse().join(".");return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(T,{id:o,children:[(0,F.jsx)(_,{style:{paddingTop:"16px",paddingBottom:"15px"},children:x}),(0,F.jsx)(_,{children:h("".concat(a))}),(0,F.jsx)(_,{children:h("addtransaction.options.".concat(d))}),(0,F.jsx)(_,{children:(0,F.jsx)(v.default,{text:l.toLowerCase(),length:20,tooltop:l})}),(0,F.jsx)(_,{children:(0,F.jsx)($,{income:a,children:(0,F.jsx)(v.default,{text:c.toFixed(2).toString(),length:10})})}),(0,F.jsx)(_,{children:(0,F.jsx)("span",{style:{paddingRight:"50px"},children:(0,F.jsx)(v.default,{text:p.toFixed(2).toString(),length:10})})}),(0,F.jsx)(D,{id:"del_btn",type:"button",onClick:function(){var n;n=o,P().Confirm.show(h("deleteprompt.sure"),h("deleteprompt.irrevertable"),h("deleteprompt.delete"),h("deleteprompt.cancel"),(function(){r(n)}),(function(){}))},children:(0,F.jsx)(I,{id:"icon"})})]})})},X=h.ZP.div(M||(M=(0,p.Z)(["\n  position: relative;\n  height: 38vh;\n  overflow: hidden;\n  overflow-y: scroll;\n\n  &::-webkit-scrollbar {\n    width: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #bdbdbd;\n    border-radius: 10px;\n  }\n  @media (min-width: 1280px) {\n    width: 715px;\n  }\n"]))),Y=h.ZP.ul(Q||(Q=(0,p.Z)(["\n  width: 100%;\n\n  &:not(:last-child) {\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    display: flex;\n    background-color: var(--white);\n    border-radius: 30px;\n    padding: 16px 0 15px 0;\n  }\n"]))),nn=h.ZP.li(R||(R=(0,p.Z)(["\n  width: 100%;\n  font-family: var(--baseFont);\n  font-style: normal;\n  font-weight: var(--bold);\n  font-size: 16px;\n  line-height: 24px;\n"]))),en=function(n){var e=n.transactionsList,t=(0,y.$)().t,r=[{header:"Date"},{header:"Type"},{header:"Category"},{header:"Comment"},{header:"Sum"},{header:"Balance"}].map((function(n){var e=n.header;return"Balance"===e?(0,F.jsx)(nn,{children:(0,F.jsx)("span",{style:{paddingRight:"50px"},children:t("".concat(e.toLowerCase()))})},(0,j.Z)()):(0,F.jsx)(nn,{children:t("".concat(e.toLowerCase()))},(0,j.Z)())}));return(0,F.jsxs)(X,{children:[(0,F.jsx)(Y,{children:r}),(0,F.jsx)(Y,{children:e.map((function(n){return(0,F.jsx)(V,{transaction:n},(0,j.Z)())}))})]})},tn=h.ZP.div(q||(q=(0,p.Z)(["\n  position: relative;\n  // width: 100%;\n  & > button:nth-child(1) {\n    margin-right: 30px;\n  }\n  overflow-y: auto;\n  scrollbar-gutter: stable;\n\n  &::-webkit-scrollbar {\n    position: absolute;\n    width: 3px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #bdbdbd;\n    border-radius: 10px;\n  }\n  @media screen and (min-width: 768px) {\n    /* position: relative; */\n    display: block;\n    margin-top: 46px;\n  }\n"]))),rn=h.ZP.ul(W||(W=(0,p.Z)(["\n  height: 65vh;\n  width: 277px;\n\n  @media (min-width: 768px) {\n    margin-top: 55px;\n  }\n"]))),on=h.ZP.li(E||(E=(0,p.Z)(["\n  margin-bottom: 8px;\n  background-color: transparent;\n  @media screen and (min-width: 768px) {\n    margin: 0;\n    padding: 16px 0 15px 0;\n    background-color: transparent;\n    border-bottom: 1px solid;\n    border-bottom-color: var(--transaction-underline-color);\n  }\n"]))),an=(h.ZP.ul(G||(G=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),h.ZP.span(H||(H=(0,p.Z)(["\n  font-family: var(--baseFont);\n  font-weight: var(--bold);\n  font-size: 18px;\n  line-height: 27px;\n"]))),h.ZP.ul(J||(J=(0,p.Z)(["\n  position: relative;\n  border-radius: 30px;\n  overflow: hidden;\n  height: 40vh;\n\n  @media (min-width: 1280px) {\n    &:nth-child(2) {\n      margin-top: 50px;\n    }\n  }\n"]))),h.ZP.li(K||(K=(0,p.Z)(["\n  background-color: transparent;\n  @media (min-width: 768px) {\n    width: 704px;\n  }\n  @media (min-width: 1280px) {\n    width: 660px;\n  }\n"]))),h.ZP.p(N||(N=(0,p.Z)(["\n  margin-top: 100px;\n  font-family: var(--baseFont);\n  font-weight: var(--bold);\n  font-size: 18px;\n  line-height: 27px;\n"])))),dn=(h.ZP.button(U||(U=(0,p.Z)(["\n  background-color: var(--active-blue);\n  color: var(--white);\n  border: none;\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-family: var(--baseFont);\n  font-weight: var(--bold);\n  font-size: 18px;\n  line-height: 27px;\n"]))),t(5607)),ln=function(n){var e=n.transactionsList,t=(n.isLoading,(0,y.$)().t);return(0,F.jsx)(tn,{children:(0,F.jsx)(dn.Z,{queries:{mobile:{maxWidth:767}},children:function(n){return n.mobile?0===e.length?(0,F.jsx)(an,{children:t("noTransactionText")}):(0,F.jsx)(rn,{children:e.map((function(n){return(0,F.jsx)(on,{children:(0,F.jsx)(S,{transaction:n})},(0,j.Z)())}))}):0===e.length?(0,F.jsx)(an,{children:t("noTransactionText")}):(0,F.jsx)(en,{transactionsList:e})}})})}}}]);
//# sourceMappingURL=HomeTab.4ed2827f.chunk.js.map