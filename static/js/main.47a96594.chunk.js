(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(5),o=n.n(r),i=(n(17),n(6)),s=n(7),d=n(8),l=n(11),b=n(10),j=n(0);var u,h=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Good: ",t]}),Object(j.jsxs)("p",{children:["Neutral: ",n]}),Object(j.jsxs)("p",{children:["Bad: ",c]}),Object(j.jsxs)("p",{children:["Total: ",a()]}),Object(j.jsxs)("p",{children:["Positive feedback: ",t&&r(),"%"]})]})},p=n(2),v=n(3),O=v.a.button(u||(u=Object(p.a)(["\n  :not(:last-child) {\n    margin-right: 10px;\n  }\n"])));var f=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)(O,{type:"button",name:e,onClick:n,children:e.toUpperCase()},e)}))})};var g,x=function(e){var t=e.message;return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:t})})},k=v.a.section(g||(g=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));var m=function(e){var t=e.title,n=e.children;return Object(j.jsxs)(k,{children:[Object(j.jsx)("p",{children:t}),n]})},P=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:e.props.good,neutral:e.props.neutral,bad:e.props.bad},e.onBtnClick=function(t){var n=t.target.name;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state,n=t.good,c=t.neutral,a=t.bad;return Math.round(100*n/(n+c+a))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=Object.keys(this.state);return Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{title:"Please leave feedback",children:Object(j.jsx)(f,{options:a,onLeaveFeedback:this.onBtnClick})}),Object(j.jsx)(m,{title:"Statistics",children:this.countTotalFeedback()?Object(j.jsx)(h,{good:t,neutral:n,bad:c,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage}):Object(j.jsx)(x,{message:"No feedback given"})})]})}}]),n}(c.Component);P.defaultProps={good:0,neutral:0,bad:0},o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.47a96594.chunk.js.map