(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),o=n(6),i=n.n(o),r=(n(12),n(3)),b=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),n]})},d=n(2),u=n.n(d);function l(e){var t=e.message;return Object(c.jsx)("p",{children:t})}var j=function(e){var t=e.good,n=e.neutral,a=e.bad,s=e.total,o=e.positiveFeedbackPercentage;return Object(c.jsx)(c.Fragment,{children:s?Object(c.jsxs)("ul",{className:u.a.box,children:[Object(c.jsxs)("li",{className:u.a.options,children:[" Good:",t," "]}),Object(c.jsxs)("li",{className:u.a.options,children:[" Neutral:",n," "]}),Object(c.jsxs)("li",{className:u.a.options,children:[" Bad:",a," "]}),Object(c.jsxs)("li",{className:u.a.options,children:[" Total:",s," "]}),Object(c.jsxs)("li",{className:u.a.options,children:["Positive feedback: ",o,"%"]})]}):Object(c.jsx)(l,{message:"No feedback given"})})},h=n(5),f=n.n(h),O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(c.jsx)("div",{className:f.a.options,children:t.map((function(e){return Object(c.jsx)("button",{className:f.a.button,type:"button","data-feedback":e,onClick:n,children:e},e)}))})},p=["good","bad","neutral"];function x(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(0),i=Object(r.a)(o,2),d=i[0],u=i[1],l=Object(a.useState)(0),h=Object(r.a)(l,2),f=h[0],x=h[1],k=function(){return n+f+d};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{title:"Please leave feedback",children:Object(c.jsx)(O,{options:p,onLeaveFeedback:function(e){switch(e.target.dataset.feedback){case"good":s((function(e){return e+1}));break;case"neutral":u((function(e){return e+1}));break;case"bad":x((function(e){return e+1}));break;default:return}}})}),Object(c.jsx)(b,{title:"Statistics",children:Object(c.jsx)(j,{good:n,neutral:d,bad:f,total:k(),positiveFeedbackPercentage:function(){var e=k();return e?Math.round(n/e*100):0}()})})]})}var k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),k()},2:function(e,t,n){e.exports={box:"statistics_box__3k3oh",options:"statistics_options__3vKcd"}},5:function(e,t,n){e.exports={options:"feedbackOptions_options__11T2Q",button:"feedbackOptions_button__18zGo"}}},[[13,1,2]]]);
//# sourceMappingURL=main.07d2ca8c.chunk.js.map