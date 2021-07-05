(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n.n(a),o=n(5),i=n.n(o),s=(n(17),n(6)),d=n(7),l=n(8),b=n(11),u=n(10),j=n(2),h=n(3),f=h.a.div(c||(c=Object(j.a)([""]))),p=n(0);var v,g=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(p.jsxs)(f,{children:[Object(p.jsxs)("p",{children:["Good: ",t]}),Object(p.jsxs)("p",{children:["Neutral: ",n]}),Object(p.jsxs)("p",{children:["Bad: ",c]}),Object(p.jsxs)("p",{children:["Total: ",a()]}),Object(p.jsxs)("p",{children:["Positive feedback: ",t&&r(),"%"]})]})},O=h.a.button(v||(v=Object(j.a)(["\n  border: 1px solid #000;\n  border-radius: 4px;\n\n  :not(:last-child) {\n    margin-right: 10px;\n  }\n  :last-child {\n    background-color: #f58484;\n    &:hover,\n    :focus {\n      background-color: #eb4c4c;\n    }\n  }\n  :first-child {\n    background-color: #a4eea4;\n    &:hover,\n    :focus {\n      background-color: #5af05a;\n    }\n  }\n  :not(:last-child, :first-child) {\n    background-color: #f0f092;\n    &:hover,\n    :focus {\n      background-color: #f3f34b;\n    }\n  }\n"])));var k=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(p.jsx)("div",{children:t.map((function(e){return Object(p.jsx)(O,{type:"button",name:e,onClick:n,children:e.toUpperCase()},e)}))})};var x,m=function(e){var t=e.message;return Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:t})})},P=h.a.section(x||(x=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));var y=function(e){var t=e.title,n=e.children;return Object(p.jsxs)(P,{children:[Object(p.jsx)("p",{children:t}),n]})},F=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:e.props.good,neutral:e.props.neutral,bad:e.props.bad},e.onBtnClick=function(t){var n=t.target.name;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state,n=t.good,c=t.neutral,a=t.bad;return Math.round(100*n/(n+c+a))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=Object.keys(this.state);return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(y,{title:"Please leave feedback",children:Object(p.jsx)(k,{options:a,onLeaveFeedback:this.onBtnClick})}),Object(p.jsx)(y,{title:"Statistics",children:this.countTotalFeedback()?Object(p.jsx)(g,{good:t,neutral:n,bad:c,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage}):Object(p.jsx)(m,{message:"No feedback given"})})]})}}]),n}(a.Component);F.defaultProps={good:0,neutral:0,bad:0},i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.40c4b611.chunk.js.map