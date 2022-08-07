"use strict";(self.webpackChunkwallet_frontend=self.webpackChunkwallet_frontend||[]).push([[912],{9717:function(n,e,t){t.r(e),t.d(e,{default:function(){return cn}});var o,r,i,a,l,d,c,s=t(9439),p=t(168),h=t(6031),x=t(8185),u=h.ZP.ul(o||(o=(0,p.Z)(["\n  @media screen and (max-width: 767px) {\n    width: 280px;\n    border-radius: 10px;\n\n    overflow: hidden;\n  }\n  @media screen and (min-width: 768px) {\n    display: flex;\n\n    justify-content: space-between;\n  }\n"]))),f=h.ZP.li(r||(r=(0,p.Z)(["\n  background-color: transparent;\n\n  @media screen and (max-width: 767px) {\n    display: flex;\n    align-items: center;\n    position: relative;\n\n    padding: 12px 20px 8px 20px;\n    background-color: var(--transaction-item-bg-color);\n\n    border-bottom: 1px solid;\n    border-bottom-color: var(--transaction-underline-color);\n\n    &::before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      background-color: ",";\n      width: 5px;\n      height: 100%;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    width: 110px;\n    display: flex;\n    justify-content: center;\n  }\n"])),(function(n){return"income"===n.type?"#24CCA7":"#ff6596"})),m=h.ZP.p(i||(i=(0,p.Z)(["\n  font-family: var(--baseFont);\n  font-style: normal;\n  font-weight: var(--bold);\n  font-size: 18px;\n  line-height: 27px;\n\n  color: var(--black);\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n"]))),b=h.ZP.p(a||(a=(0,p.Z)(["\n  position: relative;\n  overflow: hidden;\n  font-family: var(--baseFont);\n  font-style: normal;\n  font-weight: var(-regular);\n  font-size: 16px;\n  line-height: 24px;\n\n  @media (max-width: 767px) {\n    margin-left: auto;\n  }\n"]))),g=h.ZP.span(l||(l=(0,p.Z)(["\n  color: ",";\n"])),(function(n){return"income"===n.income?"#24CCA7":"#ff6596"})),Z=h.ZP.button(d||(d=(0,p.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 64%;\n  transform: translate(-50%, -50%);\n\n  background-color: transparent;\n  outline: none;\n  border: none;\n  padding: 9px;\n"]))),v=(0,h.ZP)(x.AuQ)(c||(c=(0,p.Z)(["\n  cursor: pointer;\n  color: #bdbdbd;\n  &:hover {\n    fill: #ff6596;\n  }\n"]))),w=t(2810),j=t(1807),y=t(3168),k=t(570),P=t(5562),C=t.n(P),F=t(184);C().Confirm.init({okButtonBackground:"#ff6596"});var z,L,A,B,O,S=function(n){var e=n.transaction,t=(0,k.yC)({refetchOnMountOrArgChange:!0}),o=(0,s.Z)(t,1)[0],r=(0,y.$)().t,i=e._id,a=e.date,l=e.type,d=e.category,c=e.comment,p=e.sum,h=e.balance,x=Object.entries({_id:i,date:a,type:l,category:d,comment:c,sum:p,balance:h}).map((function(n){var e=(0,s.Z)(n,2),t=e[0],a=e[1];switch(t){case"date":var d=new Date(a).toISOString().slice(2).substring(0,8).split("-").reverse().join(".");return(0,F.jsxs)(f,{type:l,children:[(0,F.jsx)(m,{children:r("".concat(t))}),(0,F.jsx)(b,{children:"".concat(d)})]},(0,w.Z)());case"type":return(0,F.jsxs)(f,{type:l,children:[(0,F.jsx)(m,{children:r("".concat(t))}),(0,F.jsx)(b,{children:r("".concat(a))})]},(0,w.Z)());case"category":return(0,F.jsxs)(f,{type:l,children:[(0,F.jsx)(m,{children:r("".concat(t))}),(0,F.jsx)(b,{children:r("".concat(a.toLowerCase()))})]},(0,w.Z)());case"comment":return(0,F.jsxs)(f,{type:l,children:[(0,F.jsx)(m,{children:r("".concat(t))}),(0,F.jsx)(b,{children:(0,F.jsx)(j.default,{text:"".concat(a),length:20})})]},(0,w.Z)());case"sum":return(0,F.jsxs)(f,{type:l,children:[(0,F.jsx)(m,{children:r("".concat(t))}),(0,F.jsx)(b,{children:(0,F.jsx)(g,{income:l,children:"".concat(a.toFixed(2))})})]},(0,w.Z)());case"balance":return(0,F.jsxs)(f,{type:l,children:[(0,F.jsx)(m,{children:r("".concat(t))}),(0,F.jsx)(b,{children:"".concat(a.toFixed(2))}),(0,F.jsx)(Z,{type:"button",onClick:function(){var n;n=i,C().Confirm.show(r("deleteprompt.sure"),r("deleteprompt.irrevertable"),r("deleteprompt.delete"),r("deleteprompt.cancel"),(function(){o(n)}),(function(){}))},children:(0,F.jsx)(v,{})})]},(0,w.Z)())}return null}));return(0,F.jsx)(u,{children:x})},_=h.ZP.li(z||(z=(0,p.Z)(["\n  position: relative;\n  display: flex;\n"]))),D=h.ZP.p(L||(L=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-family: var(--baseFont);\n  font-style: normal;\n  font-weight: var(-regular);\n  font-size: 16px;\n  line-height: 24px;\n  overflowwrap: break-word;\n  &::after {\n    content: '';\n    position: absolute;\n    left: 18px;\n    top: 56.396px;\n    background-color: #dcdcdf;\n    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);\n    width: 95%;\n    height: 1px;\n  }\n"]))),$=h.ZP.span(A||(A=(0,p.Z)(["\n  color: ","; ;\n"])),(function(n){return"income"===n.income?"#24CCA7":"#ff6596"})),I=h.ZP.button(B||(B=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translate(-50%, -50%);\n\n  background-color: transparent;\n  outline: none;\n  border: none;\n  padding: 9px;\n"]))),M=(0,h.ZP)(x.AuQ)(O||(O=(0,p.Z)(["\n  cursor: pointer;\n  color: #bdbdbd;\n  &:hover {\n    fill: #ff6596;\n  }\n"])));C().Confirm.init({okButtonBackground:"#ff6596"});var Q,R,T,q,W,E,G,H,J,K,N,U,V,X,Y=function(n){var e=n.transaction,t=(0,k.yC)({refetchOnMountOrArgChange:!0}),o=(0,s.Z)(t,1)[0],r=e._id,i=e.date,a=e.type,l=e.category,d=e.comment,c=e.sum,p=e.balance,h=(0,y.$)().t,x=new Date(i).toISOString().slice(2).substring(0,8).split("-").reverse().join(".");return(0,F.jsxs)(_,{id:r,children:[(0,F.jsx)(D,{style:{paddingTop:"16px",paddingBottom:"15px"},children:x}),(0,F.jsx)(D,{children:h("".concat(a))}),(0,F.jsx)(D,{children:h("".concat(l.toLowerCase()))}),(0,F.jsx)(D,{children:(0,F.jsx)(j.default,{text:d.toLowerCase(),length:20})}),(0,F.jsx)(D,{children:(0,F.jsx)($,{income:a,children:(0,F.jsx)(j.default,{text:c.toFixed(2).toString(),length:10})})}),(0,F.jsx)(D,{children:(0,F.jsx)("span",{style:{paddingRight:"50px"},children:(0,F.jsx)(j.default,{text:p.toFixed(2).toString(),length:10})})}),(0,F.jsx)(I,{type:"button",onClick:function(){var n;n=r,C().Confirm.show(h("deleteprompt.sure"),h("deleteprompt.irrevertable"),h("deleteprompt.delete"),h("deleteprompt.cancel"),(function(){o(n)}),(function(){}))},children:(0,F.jsx)(M,{})})]})},nn=h.ZP.div(Q||(Q=(0,p.Z)(["\n  position: relative;\n  width: 715px;\n  height: 38vh;\n  overflow: hidden;\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),en=h.ZP.ul(R||(R=(0,p.Z)(["\n  width: 100%;\n\n  &:not(:last-child) {\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    display: flex;\n    background-color: var(--white);\n    border-radius: 30px;\n    padding: 16px 0 15px 0;\n  }\n"]))),tn=h.ZP.li(T||(T=(0,p.Z)(["\n  width: 100%;\n  font-family: var(--baseFont);\n  font-style: normal;\n  font-weight: var(--bold);\n  font-size: 16px;\n  line-height: 24px;\n"]))),on=function(n){var e=n.transactionsList,t=(0,y.$)().t,o=[{header:"Date"},{header:"Type"},{header:"Category"},{header:"Comment"},{header:"Sum"},{header:"Balance"}].map((function(n){var e=n.header;return"Balance"===e?(0,F.jsx)(tn,{children:(0,F.jsx)("span",{style:{paddingRight:"50px"},children:t("".concat(e.toLowerCase()))})},(0,w.Z)()):(0,F.jsx)(tn,{children:t("".concat(e.toLowerCase()))},(0,w.Z)())}));return(0,F.jsxs)(nn,{children:[(0,F.jsx)(en,{children:o}),(0,F.jsx)(en,{children:e.map((function(n){return(0,F.jsx)(Y,{transaction:n},(0,w.Z)())}))})]})},rn=h.ZP.div(q||(q=(0,p.Z)(["\n  position: relative;\n  & > button:nth-child(1) {\n    margin-right: 30px;\n  }\n  @media screen and (min-width: 768px) {\n    /* position: relative; */\n    display: block;\n    margin-top: 46px;\n  }\n"]))),an=h.ZP.ul(W||(W=(0,p.Z)(["\n  height: 65vh;\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  @media (min-width: 768px) {\n    margin-top: 55px;\n  }\n"]))),ln=h.ZP.li(E||(E=(0,p.Z)(["\n  margin-bottom: 8px;\n  background-color: transparent;\n  @media screen and (min-width: 768px) {\n    margin: 0;\n    padding: 16px 0 15px 0;\n    background-color: transparent;\n    border-bottom: 1px solid;\n    border-bottom-color: var(--transaction-underline-color);\n  }\n"]))),dn=(h.ZP.ul(G||(G=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),h.ZP.span(H||(H=(0,p.Z)(["\n  font-family: var(--baseFont);\n  font-weight: var(--bold);\n  font-size: 18px;\n  line-height: 27px;\n"]))),h.ZP.ul(J||(J=(0,p.Z)(["\n  position: relative;\n  border-radius: 30px;\n  overflow: hidden;\n  height: 40vh;\n  overflow-y: scroll;\n  scroll-behavior: smooth;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media (min-width: 1280px) {\n    &:nth-child(2) {\n      margin-top: 50px;\n    }\n  }\n"]))),h.ZP.li(K||(K=(0,p.Z)(["\n  background-color: transparent;\n  @media (min-width: 768px) {\n    width: 704px;\n  }\n  @media (min-width: 1280px) {\n    width: 660px;\n  }\n"]))),h.ZP.p(N||(N=(0,p.Z)(["\n  margin-top: 100px;\n  font-family: var(--baseFont);\n  font-weight: var(--bold);\n  font-size: 18px;\n  line-height: 27px;\n"]))),h.ZP.button(U||(U=(0,p.Z)(["\n  background-color: var(--active-blue);\n  color: var(--white);\n  border: none;\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-family: var(--baseFont);\n  font-weight: var(--bold);\n  font-size: 18px;\n  line-height: 27px;\n"]))),h.ZP.div(V||(V=(0,p.Z)(["\n  margin-top: 30px;\n"]))),h.ZP.button(X||(X=(0,p.Z)(["\n  width: 50px;\n  padding: 10px;\n  border: none;\n  background-color: transparent;\n  outline: 1px solid rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  &:hover {\n    background-color: var(--blue);\n    fill: var(--white);\n  }\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),t(5607)),cn=function(n){var e=n.transactionsList;return(0,F.jsx)(rn,{children:(0,F.jsx)(dn.Z,{queries:{mobile:{maxWidth:767}},children:function(n){return n.mobile?(0,F.jsx)(an,{children:e.map((function(n){return(0,F.jsx)(ln,{children:(0,F.jsx)(S,{transaction:n})},(0,w.Z)())}))}):(0,F.jsx)(on,{transactionsList:e})}})})}}}]);
//# sourceMappingURL=HomeTab.0a76dd62.chunk.js.map