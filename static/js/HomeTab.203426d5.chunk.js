"use strict";(self.webpackChunkwallet_frontend=self.webpackChunkwallet_frontend||[]).push([[912],{9717:function(n,e,t){t.r(e),t.d(e,{default:function(){return on}});var r,o,i,a,d,c,l,s=t(9439),p=t(168),x=t(6031),h=t(8185),u=x.ZP.ul(r||(r=(0,p.Z)(["\n  @media screen and (max-width: 767px) {\n    width: 277px;\n    border-radius: 10px;\n    overflow: hidden;\n  }\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    justify-content: space-between;\n  }\n"]))),m=x.ZP.li(o||(o=(0,p.Z)(["\n  background-color: transparent;\n\n  @media screen and (max-width: 767px) {\n    display: flex;\n    align-items: center;\n    position: relative;\n\n    padding: 12px 20px 8px 20px;\n    background-color: var(--transaction-item-bg-color);\n\n    border-bottom: 1px solid;\n    border-bottom-color: var(--transaction-underline-color);\n\n    &::before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      background-color: ",";\n      width: 5px;\n      height: 100%;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    width: 110px;\n    display: flex;\n    justify-content: center;\n  }\n"])),(function(n){return"income"===n.type?"#24CCA7":"#ff6596"})),b=x.ZP.p(i||(i=(0,p.Z)(["\n  font-weight: var(--bold);\n  font-size: 18px;\n  line-height: 27px;\n\n  color: var(--black);\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n"]))),f=x.ZP.p(a||(a=(0,p.Z)(["\n  position: relative;\n  overflow: hidden;\n\n  @media (max-width: 767px) {\n    margin-left: auto;\n  }\n"]))),g=x.ZP.span(d||(d=(0,p.Z)(["\n  color: ",";\n"])),(function(n){return"income"===n.income?"#24CCA7":"#ff6596"})),j=x.ZP.button(c||(c=(0,p.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 64%;\n  transform: translate(-50%, -50%);\n\n  background-color: transparent;\n  outline: none;\n  border: none;\n  padding: 9px;\n"]))),w=(0,x.ZP)(h.AuQ)(l||(l=(0,p.Z)(["\n  cursor: pointer;\n  color: #bdbdbd;\n  &:hover {\n    fill: #ff6596;\n  }\n"]))),Z=t(2810),v=t(1807),y=t(3168),k=t(570),C=t(5562),P=t.n(C),A=t(184);P().Confirm.init({okButtonBackground:"#ff6596"});var B,L,O,S,z,F=function(n){var e=n.transaction,t=(0,k.yC)({refetchOnMountOrArgChange:!0}),r=(0,s.Z)(t,1)[0],o=(0,y.$)().t,i=e._id,a=e.date,d=e.type,c=e.category,l=e.comment,p=e.sum,x=e.balance,h=Object.entries({_id:i,date:a,type:d,category:c,comment:l,sum:p,balance:x}).map((function(n){var e=(0,s.Z)(n,2),t=e[0],a=e[1];switch(t){case"date":var c=new Date(a).toISOString().slice(2).substring(0,8).split("-").reverse().join(".");return(0,A.jsxs)(m,{type:d,children:[(0,A.jsx)(b,{children:o("".concat(t))}),(0,A.jsx)(f,{children:"".concat(c)})]},(0,Z.Z)());case"type":return(0,A.jsxs)(m,{type:d,children:[(0,A.jsx)(b,{children:o("".concat(t))}),(0,A.jsx)(f,{children:o("".concat(a))})]},(0,Z.Z)());case"category":return(0,A.jsxs)(m,{type:d,children:[(0,A.jsx)(b,{children:o("".concat(t))}),(0,A.jsx)(f,{children:o("".concat(a.toLowerCase()))})]},(0,Z.Z)());case"comment":return(0,A.jsxs)(m,{type:d,children:[(0,A.jsx)(b,{children:o("".concat(t))}),(0,A.jsx)(f,{children:(0,A.jsx)(v.default,{text:"".concat(a),length:20})})]},(0,Z.Z)());case"sum":return(0,A.jsxs)(m,{type:d,children:[(0,A.jsx)(b,{children:o("".concat(t))}),(0,A.jsx)(f,{children:(0,A.jsx)(g,{income:d,children:"".concat(a.toFixed(2))})})]},(0,Z.Z)());case"balance":return(0,A.jsxs)(m,{type:d,children:[(0,A.jsx)(b,{children:o("".concat(t))}),(0,A.jsx)(f,{children:"".concat(a.toFixed(2))}),(0,A.jsx)(j,{type:"button",onClick:function(){var n;n=i,P().Confirm.show(o("deleteprompt.sure"),o("deleteprompt.irrevertable"),o("deleteprompt.delete"),o("deleteprompt.cancel"),(function(){r(n)}),(function(){}))},children:(0,A.jsx)(w,{})})]},(0,Z.Z)())}return null}));return(0,A.jsx)(u,{children:h})},T=x.ZP.li(B||(B=(0,p.Z)(["\n  position: relative;\n  display: flex;\n  transition: all 0.2s ease-in-out;\n  &:hover {\n    transform: scale(1.01);\n  }\n  &::after {\n    content: '';\n    position: absolute;\n    left: 18px;\n    top: 56.396px;\n    background-color: #dcdcdf;\n    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);\n    width: 95%;\n    height: 1px;\n    z-index: -3;\n  }\n"]))),_=x.ZP.p(L||(L=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  overflow-wrap: break-word;\n  z-index: -2;\n"]))),$=x.ZP.span(O||(O=(0,p.Z)(["\n  color: ","; ;\n"])),(function(n){return"income"===n.income?"#24CCA7":"#ff6596"})),D=x.ZP.button(S||(S=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translate(-50%, -50%);\n\n  background-color: transparent;\n  outline: none;\n  border: none;\n  padding: 9px;\n"]))),I=(0,x.ZP)(h.AuQ)(z||(z=(0,p.Z)(["\n  cursor: pointer;\n  color: #bdbdbd;\n  &:hover {\n    fill: #ff6596;\n  }\n"])));P().Confirm.init({okButtonBackground:"#ff6596"});var M,Q,R,q,W,E,G,H,J=function(n){var e=n.transaction,t=(0,k.yC)({refetchOnMountOrArgChange:!0}),r=(0,s.Z)(t,1)[0],o=e._id,i=e.date,a=e.type,d=e.category,c=e.comment,l=e.sum,p=e.balance,x=(0,y.$)().t,h=new Date(i).toISOString().slice(2).substring(0,8).split("-").reverse().join(".");return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(T,{id:o,children:[(0,A.jsx)(_,{style:{paddingTop:"16px",paddingBottom:"15px"},children:h}),(0,A.jsx)(_,{children:x("".concat(a))}),(0,A.jsx)(_,{children:x("addtransaction.options.".concat(d))}),(0,A.jsx)(_,{children:(0,A.jsx)(v.default,{text:c.toLowerCase(),length:20,tooltop:c})}),(0,A.jsx)(_,{children:(0,A.jsx)($,{income:a,children:(0,A.jsx)(v.default,{text:l.toFixed(2).toString(),length:10})})}),(0,A.jsx)(_,{children:(0,A.jsx)("span",{style:{paddingRight:"50px"},children:(0,A.jsx)(v.default,{text:p.toFixed(2).toString(),length:10})})}),(0,A.jsx)(D,{id:"del_btn",type:"button",onClick:function(){var n;n=o,P().Confirm.show(x("deleteprompt.sure"),x("deleteprompt.irrevertable"),x("deleteprompt.delete"),x("deleteprompt.cancel"),(function(){r(n)}),(function(){}))},children:(0,A.jsx)(I,{id:"icon"})})]})})},K=x.ZP.div(M||(M=(0,p.Z)(["\n  position: relative;\n\n  @media (min-width: 1280px) {\n    width: 715px;\n  }\n"]))),N=x.ZP.div(Q||(Q=(0,p.Z)(["\n  height: auto;\n  height: 38vh;\n  overflow: hidden;\n  overflow-y: scroll;\n\n  &::-webkit-scrollbar {\n    width: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #bdbdbd;\n    border-radius: 10px;\n  }\n"]))),U=x.ZP.ul(R||(R=(0,p.Z)(["\n  width: 100%;\n\n  &:not(:last-child) {\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    display: flex;\n    background-color: var(--white);\n    border-radius: 30px;\n    padding: 16px 0 15px 0;\n  }\n"]))),V=x.ZP.li(q||(q=(0,p.Z)(["\n  width: 100%;\n  font-weight: var(--bold);\n"]))),X=function(n){var e=n.transactionsList,t=(0,y.$)().t,r=[{header:"Date"},{header:"Type"},{header:"Category"},{header:"Comment"},{header:"Sum"},{header:"Balance"}].map((function(n){var e=n.header;return"Balance"===e?(0,A.jsx)(V,{children:(0,A.jsx)("span",{style:{paddingRight:"50px"},children:t("".concat(e.toLowerCase()))})},(0,Z.Z)()):(0,A.jsx)(V,{children:t("".concat(e.toLowerCase()))},(0,Z.Z)())}));return(0,A.jsxs)(K,{children:[(0,A.jsx)(U,{children:r}),(0,A.jsx)(N,{children:(0,A.jsx)(U,{children:e.map((function(n){return(0,A.jsx)(J,{transaction:n},(0,Z.Z)())}))})})]})},Y=x.ZP.div(W||(W=(0,p.Z)(["\n  position: relative;\n  font-family: var(--baseFont);\n  font-style: normal;\n  font-weight: var(-regular);\n  font-size: 16px;\n  line-height: 24px;\n  & > button:nth-child(1) {\n    margin-right: 30px;\n  }\n  @media (max-width: 767px) {\n    overflow-y: auto;\n    scrollbar-gutter: stable;\n\n    &::-webkit-scrollbar {\n      position: absolute;\n      width: 3px;\n    }\n    &::-webkit-scrollbar-thumb {\n      background: #bdbdbd;\n      border-radius: 10px;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    display: block;\n    margin-top: 46px;\n  }\n"]))),nn=x.ZP.ul(E||(E=(0,p.Z)(["\n  height: 65vh;\n  width: 277px;\n\n  @media (min-width: 768px) {\n    margin-top: 55px;\n  }\n"]))),en=x.ZP.li(G||(G=(0,p.Z)(["\n  margin-bottom: 8px;\n  background-color: transparent;\n  @media screen and (min-width: 768px) {\n    margin: 0;\n    padding: 16px 0 15px 0;\n    background-color: transparent;\n    border-bottom: 1px solid;\n    border-bottom-color: var(--transaction-underline-color);\n  }\n"]))),tn=x.ZP.p(H||(H=(0,p.Z)(["\n  margin-top: 100px;\n  font-weight: var(--bold);\n  font-size: 18px;\n  line-height: 27px;\n"]))),rn=t(5607),on=function(n){var e=n.transactionsList,t=(0,y.$)().t;return(0,A.jsx)(Y,{children:(0,A.jsx)(rn.Z,{queries:{mobile:{maxWidth:767}},children:function(n){return n.mobile?0===e.length?(0,A.jsx)(tn,{children:t("noTransactionText")}):(0,A.jsx)(nn,{children:e.map((function(n){return(0,A.jsx)(en,{children:(0,A.jsx)(F,{transaction:n})},(0,Z.Z)())}))}):0===e.length?(0,A.jsx)(tn,{children:t("noTransactionText")}):(0,A.jsx)(X,{transactionsList:e})}})})}}}]);
//# sourceMappingURL=HomeTab.203426d5.chunk.js.map