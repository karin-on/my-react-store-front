(window["webpackJsonpmy-react-store-front"]=window["webpackJsonpmy-react-store-front"]||[]).push([[0],{12:function(t,e,r){t.exports={App:"App__App__wmyqV",Button:"App__Button__1UjzM"}},13:function(t,e,r){t.exports={Button:"Button__Button__2pL_i"}},15:function(t,e,r){t.exports=r(26)},25:function(t,e,r){},26:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(3),c=r.n(a),i=r(5),u=r(4),p=r(11),s=r(14),d="ADD_TO_CART";function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach(function(e){Object(p.a)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var O={order:[]};r(25);var _=r(12),w=r.n(_);var y=Object(i.b)(function(t){return{order:t.order}})(function(t){var e=t.dispatch,r=t.order;return o.a.createElement("div",{className:"App"},o.a.createElement("button",{className:w.a.Button,onClick:function(){return e({type:d,productID:"co\u015b",quantity:3})}},"add to cart"),JSON.stringify(r))}),b=r(13),m=r.n(b),v=function(){return o.a.createElement("button",{className:m.a.Button},"test button")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=Object(u.b)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:var r=t.order.findIndex(function(t){return t.productID===e.productID}),n=Object(s.a)(t.order);if(r>=0){var o=f({},n[r]);o.quantity+=e.quantity,n[r]=o}else n.push({productID:e.productID,quantity:e.quantity});return f({},t,{order:n});default:return t}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(o.a.createElement(i.a,{store:E},o.a.createElement(y,null),o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.5d173a58.chunk.js.map