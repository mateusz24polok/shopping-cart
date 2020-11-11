(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{29:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),c=e.n(i),o=e(9),u=e.n(o),a=e(2),s=e(4),f=e(3);function d(){var n=Object(f.a)(["\n    display: flex;\n\n    @media(max-width: ","){\n        justify-content: center;\n        flex-wrap: wrap;\n    };\n"]);return d=function(){return n},n}function l(){var n=Object(f.a)(["\n    max-width: 1000px;\n    margin: 50px auto;\n\n    @media(max-width: ","){\n        padding: 10px;\n    };\n"]);return l=function(){return n},n}var h=a.c.div(l(),(function(n){return n.theme.breakPoints.tabletBreak})),b=a.c.main(d(),(function(n){return n.theme.breakPoints.tabletBreak}));function p(){var n=Object(f.a)(["\n    font-size: 24px;\n    color: ",";\n    letter-spacing: 1px;\n    font-weight: 400;\n"]);return p=function(){return n},n}function m(){var n=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 30px;\n\n    @media(max-width: ","){\n        flex-direction: column;\n    }\n"]);return m=function(){return n},n}var x=a.c.header(m(),(function(n){return n.theme.breakPoints.mobileBreak})),j=a.c.h3(p(),(function(n){return n.theme.colors.AthensGray}));function g(){var n=Object(f.a)(["\n    background-color: ",";\n    color: ",";\n    border: none;\n    padding: 10px 20px;\n    cursor: pointer;\n    transition: background-color 0.15s linear;\n\n    &:hover{\n        background-color: ","\n    }\n"]);return g=function(){return n},n}var O=a.c.button(g(),(function(n){return n.theme.colors.PrimaryButtonBackground}),(function(n){return n.theme.colors.PrimaryButtonFont}),(function(n){return n.theme.colors.PrimaryButtonHover})),v=function(n){var t=n.children,e=n.onClick;return Object(r.jsx)(O,{onClick:e,children:t})},k=e(8),A=e.p+"static/media/headphones.054e2115.png",w=Object(k.b)({name:"ShoppingCart",initialState:{items:[{name:"Headphones",id:Object(k.c)(),price:11.9,quantity:2,image:"".concat(A)}],summary:{shipping:23.8,subtotal:23.8,grandTotal:47.6},isCheckoutOpen:!1},reducers:{increaseItemQuantity:function(n,t){var e=t.payload;n.items.filter((function(n){return e===n.id}))[0].quantity<=999&&n.items.filter((function(n){return e===n.id}))[0].quantity++},decreaseItemQuantity:function(n,t){var e=t.payload;n.items.filter((function(n){return e===n.id}))[0].quantity>0&&n.items.filter((function(n){return e===n.id}))[0].quantity--},removeItem:function(n,t){var e=t.payload;n.items=n.items.filter((function(n){return e!==n.id}))},shoppingCartSummarize:function(n){var t=n.items.reduce((function(n,t){return n+t.price*t.quantity}),0),e=t>100||0===t?0:23.8;n.summary.shipping=e,n.summary.subtotal=t,n.summary.grandTotal=t+e},summarizeReset:function(n){n.summary.shipping=0,n.summary.subtotal=0,n.summary.grandTotal=0},shoppingCartReset:function(n){n.items=[]},openModal:function(n){n.isCheckoutOpen=!0},closeModal:function(n){n.isCheckoutOpen=!1},addItem:function(n,t){var e=t.payload;n.items.push(e)}}}),y=function(n){return n.ShoppingCart},B=function(n){return y(n).items},C=function(n){return y(n).summary},P=function(n){return C(n).shipping},G=function(n){return C(n).subtotal},z=function(n){return C(n).grandTotal},S=function(n){return y(n).isCheckoutOpen},F=w.actions,D=F.increaseItemQuantity,E=F.decreaseItemQuantity,I=F.removeItem,R=F.shoppingCartSummarize,Y=F.summarizeReset,M=F.openModal,T=F.closeModal,q=F.shoppingCartReset,J=F.addItem,Q=w.reducer,U=function(){var n=Object(s.b)();return Object(r.jsxs)(x,{children:[Object(r.jsx)(j,{children:"Shopping Cart"}),Object(r.jsx)(v,{onClick:function(){n(M())},children:"Proceed to checkout"})]})},V=e.p+"static/media/pc.764d6c08.png",W=("".concat(A),{name:"Computer",id:2,price:200,quantity:1,image:"".concat(V)});function H(){var n=Object(f.a)(["\n    grid-column: 2 / 3;\n"]);return H=function(){return n},n}function N(){var n=Object(f.a)(["\n    grid-column: 5 / 6;\n    color: ",";\n    background-color: ",";\n    margin: 10px 0 20px;\n    border: none;\n    cursor: pointer;\n    padding: 10px;\n    transition: background-color 0.15s linear;\n\n    @media(max-width: ","){\n        font-size: 10px;\n    }\n\n    &:hover{\n        background-color: ","\n    }\n"]);return N=function(){return n},n}function X(){var n=Object(f.a)(["\n    grid-column: 4 / 5;\n"]);return X=function(){return n},n}function Z(){var n=Object(f.a)(["\n    grid-column: 3 / 4;\n"]);return Z=function(){return n},n}function K(){var n=Object(f.a)(["\n    align-self: center;\n    color: ",";\n\n    @media(max-width: ","){\n        font-size: 10px;\n    }\n"]);return K=function(){return n},n}function L(){var n=Object(f.a)(["\n    grid-column: 2 / 3;\n    align-self: center;\n    width: 150px;\n\n    @media(max-width: ","){\n        width: 50px;\n    }\n"]);return L=function(){return n},n}function $(){var n=Object(f.a)(["\n    background-color: ",";\n    font-weight: 700;\n    margin-top: 50px;\n    height: 2px;\n"]);return $=function(){return n},n}function _(){var n=Object(f.a)(["\n    background-color: ",";\n    font-weight: 700;\n    margin-bottom: 50px;\n    height: 2px;\n"]);return _=function(){return n},n}function nn(){var n=Object(f.a)(["\n    grid-column: 5 / 6;\n"]);return nn=function(){return n},n}function tn(){var n=Object(f.a)(["\n    grid-column: 4 / 5;\n"]);return tn=function(){return n},n}function en(){var n=Object(f.a)(["\n    grid-column: 3 / 4;\n"]);return en=function(){return n},n}function rn(){var n=Object(f.a)(["\n    color: ",";\n    font-weight: 700;\n\n    @media(max-width: ","){\n        font-size: 10px;\n    }\n"]);return rn=function(){return n},n}function cn(){var n=Object(f.a)(["\n    display: grid;\n    justify-content: center;\n    grid-template-columns: 40px 180px 150px 150px 200px;\n    grid-template-rows: 1fr;\n    margin: 0 auto;\n\n    @media(max-width: ","){\n        grid-template-columns: 50px 200px 150px 150px 250px;\n    }\n\n    @media(max-width: ","){\n        grid-template-columns: 50px 150px 100px 100px 180px;\n    }\n\n    @media(max-width: ","){\n        grid-template-columns: 40px 80px 80px 60px 100px;\n    }\n"]);return cn=function(){return n},n}function on(){var n=Object(f.a)(["\n    padding: 30px;\n    margin-right: 20px;\n    flex-shrink: 1;\n    flex-grow: 1;\n    box-shadow: 1px 1px 7px -2px ",";\n\n    @media(max-width: ","){\n        margin: 0 auto 30px;\n        padding: 0;\n    }\n"]);return on=function(){return n},n}var un=a.c.section(on(),(function(n){return n.theme.colors.AthensGray}),(function(n){return n.theme.breakPoints.tabletBreak})),an=a.c.div(cn(),(function(n){return n.theme.breakPoints.tabletBreak}),(function(n){return n.theme.breakPoints.firstGridBreak}),(function(n){return n.theme.breakPoints.mobileBreak})),sn=a.c.p(rn(),(function(n){return n.theme.colors.AthensGray}),(function(n){return n.theme.breakPoints.mobileBreak})),fn=Object(a.c)(sn)(en()),dn=Object(a.c)(sn)(tn()),ln=Object(a.c)(sn)(nn()),hn=a.c.div(_(),(function(n){return n.theme.colors.AthensGray})),bn=a.c.div($(),(function(n){return n.theme.colors.AthensGray})),pn=a.c.img(L(),(function(n){return n.theme.breakPoints.mobileBreak})),mn=a.c.p(K(),(function(n){return n.theme.colors.AthensGray}),(function(n){return n.theme.breakPoints.mobileBreak})),xn=Object(a.c)(mn)(Z()),jn=Object(a.c)(mn)(X()),gn=a.c.button(N(),(function(n){return n.theme.colors.PrimaryButtonFont}),(function(n){return n.theme.colors.PrimaryButtonBackground}),(function(n){return n.theme.breakPoints.mobileBreak}),(function(n){return n.theme.colors.PrimaryButtonHover})),On=Object(a.c)(gn)(H());function vn(){var n=Object(f.a)(["\n    background-color: ",";\n    border: 1px solid ",";\n    color: ",";\n    font-weight: 700;\n    padding: 5px;\n    height: 30px;\n    width: 30px;\n    cursor: pointer;\n    transition: background-color 0.15s linear;\n\n    @media(max-width: ","){\n        font-size: 10px;\n        height: 20px;\n        width: 20px;\n    }\n\n    &:hover{\n        background-color: ",";\n    }\n"]);return vn=function(){return n},n}var kn=a.c.button(vn(),(function(n){return n.theme.colors.Snuff}),(function(n){return n.theme.colors.AthensGray}),(function(n){return n.theme.colors.AthensGray}),(function(n){return n.theme.breakPoints.mobileBreak}),(function(n){return n.theme.colors.Whisper})),An=function(n){var t=n.onClick,e=n.children;return Object(r.jsx)(kn,{onClick:t,children:e})};function wn(){var n=Object(f.a)(["\n    grid-area: ",";\n    background: url(",");\n    background-repeat: no-repeat;\n    background-position: "," ",";\n    height: ",";\n    width: ",";\n    border: none;\n    cursor: pointer;\n    align-self: ",";\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n\n    @media(max-width: ","){\n        height: 20px;\n        width: 20px;\n    }\n\n"]);return wn=function(){return n},n}var yn=a.c.button(wn(),(function(n){var t=n.gridArea;return t||""}),(function(n){var t=n.image;return t||""}),(function(n){var t=n.xPosition;return t||"center"}),(function(n){var t=n.yPosition;return t||"center"}),(function(n){var t=n.height;return t||"auto"}),(function(n){var t=n.width;return t||"auto"}),(function(n){return n.gridVerticalCenter&&"center"}),(function(n){return n.theme.breakPoints.mobileBreak})),Bn=function(n){var t=n.image,e=n.xPosition,i=n.yPosition,c=n.gridArea,o=n.width,u=n.height,a=n.onClick,s=n.gridVerticalCenter;return Object(r.jsx)(yn,{onClick:a,image:t,xPosition:e,yPosition:i,gridArea:c,width:o,height:u,gridVerticalCenter:s})};function Cn(){var n=Object(f.a)(["\n    height: 30px;\n    width: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid black;\n    color: ",";\n\n    @media(max-width: ","){\n        font-size: 10px;\n        height: 20px;\n        width: 20px;\n    }\n\n"]);return Cn=function(){return n},n}function Pn(){var n=Object(f.a)(["\n    display: flex;\n    align-self: center;\n    grid-column: 5 / 6;\n    grid-row: 1 / 2;\n"]);return Pn=function(){return n},n}var Gn=a.c.div(Pn()),zn=a.c.output(Cn(),(function(n){return n.theme.colors.AthensGray}),(function(n){return n.theme.breakPoints.mobileBreak})),Sn=function(n){var t=n.id,e=Object(s.b)(),i=Object(s.c)((function(n){return function(n,t){return B(n).filter((function(n){return t===n.id}))}(n,t)}))[0];return Object(r.jsxs)(Gn,{children:[Object(r.jsx)(An,{onClick:function(){return function(n){e(D(n))}(t)},children:"+"}),Object(r.jsx)(zn,{children:i.quantity}),Object(r.jsx)(An,{onClick:function(){return function(n){e(E(n))}(t)},children:"-"}),Object(r.jsx)(Bn,{onClick:function(){e(R())},image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAYAAAARfGZ1AAABGUlEQVRIiWP8////fwYaASZaGcwwajh1Df9ygqHf24bBv+cEww986v6TCn5f+z/NT/o/KxPzf1Ym6f9u7cf/f8dhBGmGfz7+f9788//v7679bws2HGJB7OrnWJUTHyxfLjD0R8cybFhfy5B/JYhh1sYsBgtCeohz8fn/fX4q//3al/2fFicNdq1f//n/1zeX/k/rP09BsEANju1e9r8vDhbWIKzyv2z3e7xa8RsOM3jysv9tfsgGQ1yOy8WEDYcbPPd/nRPpBuM2/Pv5/9NABhflIqUKwkmPOMMfL/sfGrTs//3////fX536X5UMg/EbLqXz361o2//n/5//X57E/N+2mTSD8RuOFBzkGAwCo5XFqOGDwXAGBgYAhwMsoA0T4yAAAAAASUVORK5CYII=",width:"30px",height:"30px"})]})},Fn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAYAAAARfGZ1AAAA+klEQVRIiWP8////fwYaASZaGcwwavggMvzLCYZ2ZxkGteT1DA8wJH8wnOhwZZCzzmPYjimJCv6jg8/n//f5Sf9nZWIGY9Wkdf/vw5V8/3+82Roux2qV+3/bfQwT4ADT8NOt/2VhmlEs+P7/eLsLhlzs6uckGI7uOii2dcI0WDZu2X88DsdmOG4LSDEYj+Eg8B6nBcQYDAJ40jkHAwePIIMEFhkFAQHi0iKuYDnf74MRxihxkLeNnGDBbrCslDTJFhCVFMFh/Bt7HJCWFD8f/9/mJI1mMEwSzQK11P/rScpESBaoJiEbjGQBKDMRMBgERmuiUcOJBAwMDAAXgb+vvIwv6wAAAABJRU5ErkJggg==",Dn=function(){var n=Object(s.b)(),t=Object(s.c)(B);return Object(r.jsxs)(un,{children:[Object(r.jsxs)(an,{children:[Object(r.jsx)(fn,{children:"Product Name"}),Object(r.jsx)(dn,{children:"Unit Price"}),Object(r.jsx)(ln,{children:"Qty"})]}),Object(r.jsx)(hn,{}),t&&t.map((function(t){return Object(r.jsxs)(an,{children:[Object(r.jsx)(Bn,{onClick:function(){var e;e=t.id,n(I(e)),n(R())},image:Fn,width:"30px",height:"30px",gridVerticalCenter:!0}),Object(r.jsx)(pn,{src:t.image}),Object(r.jsx)(xn,{children:t.name}),Object(r.jsx)(jn,{children:"$".concat(t.price)}),Object(r.jsx)(Sn,{id:t.id})]})})),Object(r.jsx)(bn,{}),Object(r.jsxs)(an,{children:[Object(r.jsx)(On,{onClick:function(){n(J(W)),n(R())},children:"Add Computer"}),Object(r.jsx)(gn,{onClick:function(){n(R())},children:"Update Shopping Cart"})]})]})};function En(){var n=Object(f.a)(["\n    font-weight: 700;\n    font-size: 20px;\n"]);return En=function(){return n},n}function In(){var n=Object(f.a)(["\n    padding-left: 5px;\n    font-weight: 700;\n    color: ",";\n"]);return In=function(){return n},n}function Rn(){var n=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]);return Rn=function(){return n},n}function Yn(){var n=Object(f.a)(["\n    font-weight: 700;\n"]);return Yn=function(){return n},n}function Mn(){var n=Object(f.a)(["\n    padding-left: 5px;\n    font-weight: 700;\n    color: ",";\n"]);return Mn=function(){return n},n}function Tn(){var n=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid ",";\n"]);return Tn=function(){return n},n}function qn(){var n=Object(f.a)(["\n    padding: 10px 15px 25px 15px;\n    background-color: ",";\n    border: 1px solid ",";\n    border-top: none;\n"]);return qn=function(){return n},n}function Jn(){var n=Object(f.a)(["\n    text-transform: uppercase;\n    background-color: ",";\n    border: 1px solid ",";\n    padding: 10px 15px;\n    font-weight: 700;\n    letter-spacing: 1px;\n    margin: 0;\n"]);return Jn=function(){return n},n}function Qn(){var n=Object(f.a)(["\n    font-weight: 700;\n"]);return Qn=function(){return n},n}function Un(){var n=Object(f.a)(["\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-weight: 700;\n    padding: 0;\n"]);return Un=function(){return n},n}function Vn(){var n=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 15px;\n    background-color: ",";\n    padding: 0 15px;\n    border: 1px solid ",";\n"]);return Vn=function(){return n},n}var Wn=a.c.div(Vn(),(function(n){return n.theme.colors.Snuff}),(function(n){return n.theme.colors.AthensGray})),Hn=a.c.p(Un()),Nn=a.c.p(Qn()),Xn=a.c.p(Jn(),(function(n){return n.theme.colors.Snuff}),(function(n){return n.theme.colors.AthensGray})),Zn=a.c.div(qn(),(function(n){return n.theme.colors.Whisper}),(function(n){return n.theme.colors.AthensGray})),Kn=a.c.div(Tn(),(function(n){return n.theme.colors.AthensGray})),Ln=a.c.p(Mn(),(function(n){return n.theme.colors.AthensGray})),$n=a.c.p(Yn()),_n=a.c.div(Rn()),nt=a.c.p(In(),(function(n){return n.theme.colors.AthensGray})),tt=a.c.p(En()),et=function(){var n=Object(s.b)(),t=Object(s.c)(P),e=Object(s.c)(G),i=Object(s.c)(z);return Object(r.jsxs)("aside",{children:[Object(r.jsxs)(Wn,{children:[Object(r.jsx)(Hn,{children:"Shipping"}),Object(r.jsx)(Nn,{children:t.toFixed(2)})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Xn,{children:"Cart Totals"}),Object(r.jsxs)(Zn,{children:[Object(r.jsxs)(Kn,{children:[Object(r.jsx)(Ln,{children:"Subtotal"}),Object(r.jsx)($n,{children:e.toFixed(2)})]}),Object(r.jsxs)(_n,{children:[Object(r.jsx)(nt,{children:"Grand Total"}),Object(r.jsx)(tt,{children:i.toFixed(2)})]}),Object(r.jsx)(v,{onClick:function(){n(M())},children:"Proceed to checkout"})]})]})]})};function rt(){var n=Object(f.a)(["\n    position: absolute;\n    top: 20px;\n    left: 20px;\n"]);return rt=function(){return n},n}function it(){var n=Object(f.a)(["\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n"]);return it=function(){return n},n}function ct(){var n=Object(f.a)(["\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 30%;\n    height: 40%;\n    background-color: white;\n\n    @media(max-width: ","){\n        width: 60%;\n        height: 30%;\n    }\n"]);return ct=function(){return n},n}function ot(){var n=Object(f.a)(["\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(20,20,20,0.5);\n"]);return ot=function(){return n},n}var ut=a.c.div(ot()),at=a.c.div(ct(),(function(n){return n.theme.breakPoints.tabletBreak})),st=a.c.h2(it()),ft=Object(a.c)(Bn)(rt()),dt=function(){var n=Object(s.b)(),t=Object(s.c)(B).length;return Object(r.jsx)(ut,{children:Object(r.jsxs)(at,{children:[Object(r.jsx)(ft,{onClick:function(){n(q()),n(Y()),n(T())},image:Fn,width:"30px",height:"30px"}),Object(r.jsx)(st,{children:0!==t?"Your order has been submitted successfully":"Your Shopping Cart is empty"})]})})},lt=function(){var n=Object(s.c)(S);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(h,{children:[Object(r.jsx)(U,{}),Object(r.jsxs)(b,{children:[Object(r.jsx)(Dn,{}),Object(r.jsx)(et,{})]})]}),n&&Object(r.jsx)(dt,{})]})},ht=function(){return Object(r.jsx)(lt,{})};function bt(){var n=Object(f.a)(["\n    html{\n        box-sizing: border-box;\n        font-family: 'Roboto', sans-serif;\n    };\n\n    *, ::after, ::before {\n    box-sizing: inherit;\n};\n"]);return bt=function(){return n},n}var pt=Object(a.b)(bt()),mt=Object(k.a)({reducer:{ShoppingCart:Q}});u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(s.a,{store:mt,children:Object(r.jsxs)(a.a,{theme:{colors:{AthensGray:"#BFB7C3",Snuff:"#E2D5E6",Whisper:"#F3EDF5",PrimaryButtonBackground:"#000000",PrimaryButtonFont:"#FFFFFF",PrimaryButtonHover:"#3D3D3D"},breakPoints:{tabletBreak:"1000px",firstGridBreak:"800px",mobileBreak:"560px"}},children:[Object(r.jsx)(pt,{}),Object(r.jsx)(ht,{})]})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.8005ef0c.chunk.js.map