(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},215:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),i=n(59),o=n.n(i),a=(n(98),n(23)),c=n(16),u=n(9),l=n(10),h=n(11),p=n(12),d=(n(99),n(6)),f=n(4),j=(n(100),n(101),n(60)),g=(n(104),n(105),n(1));function v(e){var t=e.selectedColor,n=e.dragging,s=e.changeColor,i=e.pixelColor,o=Object(r.useState)(null),a=Object(f.a)(o,2),c=a[0],u=a[1];function l(){var e=T.indexOf(t);s(e),u(null)}var h=null==c?T[i]:c;return Object(g.jsx)("div",{className:"pixel",onMouseDown:l,onMouseEnter:function(){n?l():u(t)},onMouseLeave:function(){u(null)},style:{backgroundColor:h}})}function b(e){for(var t=e.width,n=e.selectedColor,r=e.dragging,s=e.changeColor,i=e.pixelColors,o=[],a=function(e){o.push(Object(g.jsx)(v,{selectedColor:n,dragging:r,changeColor:function(t){return s(e,t)},pixelColor:i[e]},e))},c=0;c<t;c++)a(c);return Object(g.jsx)("div",{className:"row",children:o})}function x(e){var t=e.problemCat,n=e.grid,r=e.setDestToSource,s=e.contextRows,i=e.testRows,o=e.swapAandB,a=e.indexTrail,c=e.stage,u=e.type,l=e.lockedVariables,h=e.handleGridTypeChange,p=e.handleGridRowChange,f=e.handleGridColChange,j=e.handleAnswerLengthChange,v=e.correctAnswer,b=e.setCorrectAnswer,x=e.multipleChoice,C=e.penColor,w=e.setPixelColor,m=e.handleSceneRowChange,y=e.handleSceneColChange,T=e.setString;function S(e){if("context"===c){var t=Object(d.a)(a);t.push(e);var n=Object(d.a)(a);n.push(e+1),o(t,n)}else if("answer"===c||"stimulus"===c){var r=Object(d.a)(a),s=Object(d.a)(a);s[1]=+(+s[1]+1),o(r,s);var i="stimulus"===c?"answer":"stimulus",u=[a[0],a[1],i],l=[a[0],+ +a[1]+1,i];o(u,l)}}return console.log(c),console.log(l),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{id:"options",children:[!(c+"-gridType"in l)&&Object(g.jsx)(L,{id:c+"-gridType",options:["pixels","string"],selection:u,onChange:h}),"answer"===c&&!("answer-choice"in l)&&Object(g.jsx)(q,{id:"answer-choice",name:"# Choices",value:n.length,onChange:j}),!("answer"===c)&&!(c+"-row"in l)&&"arc"!==t&&Object(g.jsx)(q,{id:c+"-row",name:"# Rows",value:n.length,onChange:p}),!("answer"===c)&&!(c+"-row"in l)&&"arc"===t&&Object(g.jsx)(q,{id:c+"-row",name:"# Demonstrations",value:n.length,onChange:p}),!("answer"===c)&&!(c+"-col"in l)&&Object(g.jsx)(q,{id:c+"-col",name:"# Cols",value:n[0].length,onChange:f})]}),function(){var e;e="answer"===c?function(){for(var e=[],t=0;t<Math.ceil(n.length/3);t++){e.push([]);for(var r=0;r<3;r++){var s=n[3*t+r];e[t].push(s)}}return e}():n;for(var o=[],l=0;l<e.length;l++){for(var h=[],p=function(o){var p="answer"===c?3*l+o:l,d="answer"===c?null:o;console.log(v,p);var f=void 0;f="bongard"===t?b:function(){return b(p)};var j=a.concat([p,d]),q=void 0,A=void 0;"context"===c?(q=a.concat([p,+!d]),A=p===s-1):"stimulus"===c?(q=[a[0],a[1],"answer",0],A=+a[1]===i-1):"answer"===c&&(q=[a[0],a[1],"stimulus",0,0],A=+a[1]===i-1),null!=e[l][o]&&h.push(Object(g.jsx)(O,{type:u,copyToCounterpart:function(){return r(j,q)},displaySwap:!A&&"answer"!==c&&d%2===0,swapWithNext:function(){return S(p)},content:k([p,d],n),stage:c,multipleChoice:x,correct:"answer"===c&&v===p,setCorrectAnswer:f,changeWidth:function(e){return y(e,p,d)},changeHeight:function(e){return m(e,p,d)},penColor:C,setPixelColor:function(e,t,n){return w(e,t,n,p,d)},setString:function(e){return T(e,p,d)},problemCat:t},o))},d=0;d<e[0].length;d++)p(d);o.push(Object(g.jsx)("div",{className:"flex-container",children:h},l))}return o}()]})}function O(e){var t=e.type,n=e.content,r=e.copyToCounterpart,s=e.swapWithNext,i=e.displaySwap,o=e.stage,a=e.multipleChoice,c=e.correct,u=e.setCorrectAnswer,l=e.changeWidth,h=e.changeHeight,p=e.penColor,d=e.setPixelColor,f=e.setString,j=e.problemCat;return Object(g.jsxs)("div",{children:["pixels"===t&&Object(g.jsx)(w,{pixels:n,changeHeight:h,changeWidth:l,penColor:p,setPixelColor:d}),"string"===t&&Object(g.jsx)(C,{string:n,setString:f}),"stimulus"===o&&"bongard"===j&&Object(g.jsx)("div",{children:Object(g.jsx)(L,{options:["left","right","neither"],selection:["left","right","neither"][c],onChange:function(e){return u(["left","right","neither"].indexOf(e.target.value))}})}),"arc"===j&&Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:r,children:" Copy to counterpart"})}),"arc"===j&&i&&Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:s,children:"Swap with next"})}),"answer"===o&&a&&!("bongard"!==j)&&Object(g.jsx)("div",{children:Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{type:"checkbox",checked:c,onChange:u}),"Correct"]})})]})}function C(e){var t=e.string,n=e.setString;return Object(g.jsx)("div",{className:"flex-child",children:Object(g.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}})})}function w(e){var t=e.pixels,n=e.changeHeight,s=e.changeWidth,i=e.penColor,o=e.setPixelColor,a=Object(r.useState)(!1),c=Object(f.a)(a,2),u=c[0],l=c[1];for(var h=[],p=function(e){h.push(Object(g.jsx)(b,{width:t[0].length,selectedColor:i,dragging:u,changeColor:function(t,n){return o(n,e,t)},pixelColors:t[e]},e))},d=0;d<t.length;d++)p(d);return Object(g.jsxs)("div",{className:"flex-child",children:[Object(g.jsxs)("div",{id:"options",children:[Object(g.jsx)(q,{name:"Width",value:t[0].length,onChange:s}),Object(g.jsx)(q,{name:"Height",value:t.length,onChange:n})]}),Object(g.jsx)("div",{id:"pixels",onMouseEnter:function(){return l(!1)},onMouseLeave:function(){return l(!1)},onMouseDown:function(e){e.preventDefault(),l(!0)},onMouseUp:function(){return l(!1)},children:h})]})}var m=n(92),y=n(91),T=["#000000","#0068cf","#ff3937","#00c443","#ffd631","#a0a0a0","#f916b1","#ff7a2c","#63d6fc","#820f23"];function S(e){for(var t=e.length,n=e[0].length,r=Array(e.length).fill().map((function(){return Array(e[0].length)})),s=0;s<t;s++)for(var i=0;i<n;i++)r[s][i]=e[s][i];return r}function k(e,t){for(var n=t,r=0;null!=e[r];)n=n[e[r]],r+=1;return n}function q(e){return Object(g.jsxs)("div",{className:"option",children:[Object(g.jsx)("input",{type:"number",className:"panelInput",value:e.value,onChange:e.onChange}),Object(g.jsx)("span",{className:"inputLabel",children:e.name})]})}function A(){var e=Object(r.useState)("other-0"),t=Object(f.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)("other"),o=Object(f.a)(i,2),a=o[0],u=o[1],l=Object(r.useState)("pixels"),h=Object(f.a)(l,2),p=h[0],v=h[1],b=Object(r.useState)(!1),x=Object(f.a)(b,2),O=x[0],C=x[1],w=Object(r.useState)(["context",0,null]),m=Object(f.a)(w,2),A=m[0],P=m[1],I=Object(r.useState)({context:[[[ie(p)]]],questions:[{stimulus:[[ie(p)]],answer:[ie(p)],correct:0}]}),D=Object(f.a)(I,2),M=D[0],_=D[1],B=Object(r.useState)(T[0]),U=Object(f.a)(B,2),W=U[0],E=U[1],H={arc:{contextLength:1,multipleChoice:!1,defaultGridType:"pixels","context-col":2,"stimulus-col":1,"stimulus-row":1,"answer-choice":1,"context-gridType":"pixels","stimulus-gridType":"pixels","answer-gridType":"pixels"},bongard:{contextLength:2,multipleChoice:!0,defaultGridType:"pixels","context-col":2,"context-row":3,"stimulus-col":1,"stimulus-row":1,"answer-choice":3,"context-gridType":"pixels","stimulus-gridType":"pixels","answer-gridType":"string","answer-choices":["left","right","neither"]},"letter-string":{contextLength:1,multipleChoice:!1,defaultGridType:"string","context-col":2,"stimulus-col":1,"stimulus-row":1,"answer-choice":1,"context-gridType":"string","stimulus-gridType":"string","answer-gridType":"string"},other:{}},J=Object(r.useRef)();function Q(e){var t=parseInt(e.target.value);"questionLength"in H[a]||"answer-choices"in H[a]?"questionLength"in H[a]||V(["questions"],t,(function(){return{stimulus:[[ie(p)]],answer:H[a]["answer-choices"],correct:0}})):V(["questions"],t,(function(){return{stimulus:[[ie(p)]],answer:[ie(p)],correct:0}}))}function V(e,t,n,r){var s=k(e,M);console.log(n());for(var i=Object(d.a)(s),o=t-i.length,a=0;a<Math.abs(o);a++)o<0?i.pop():o>0&&i.push(n());return console.log(i),K(e,i,r)}function F(e,t,n,r){return K(e,te(k(e,oe(r)),t,n),r)}function z(e,t,n,r){return K(e,ne(k(e,oe(r)),t,n),r)}function K(e,t,n){var r=oe(n);return re(e,t,r),"undefined"===typeof n&&_(r),r}function X(e,t,n){var r=k(e,oe(n));return console.log(n),console.log(r),"answer"===Z(e)?K(e,se(r.length,null,(function(){return ie(t)})),n):K(e,se(r.length,r[0].length,(function(){return ie(t)})),n)}function Y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;for(var n in 0===t&&(t=Object(c.a)({},M)),H[e]){var r=n.split("-");if("contextLength"===n)t=V(["context"],H[e].contextLength,(function(){return[[ie(p)]]}),t);else if("multipleChoice"===n)C(H[e].multipleChoice);else if("defaultGridType"===n)v(H[e].defaultGridType);else if("context"===r[0]&&["row","col"].includes(r[1]))for(var s=t.context.length,i=function(n){var s=$(k(["context",n],t));"row"===r[1]?t=F(["context",n],H[e]["context-row"],(function(){return ie(s)}),t):"col"===r[1]&&(t=z(["context",n],H[e]["context-col"],(function(){return ie(s)}),t))},o=0;o<s;o++)i(o);else if(["stimulus","answer"].includes(r[0])&&["row","col"].includes(r[0]))for(var a=t.questions.length,u=function(n){var s=$(k(["context",n],t));"row"===r[1]?t=F(["questions",n,r[0]],H[e][r[0]+"-row"],(function(){return ie(s)}),t):"col"===r[1]&&(t=z(["questions",n,r[0]],H[e][r[0]+"-col"],(function(){return ie(s)}),t))},l=0;l<a;l++)u(l);else if("context"===r[0]&&"gridType"===r[1])for(var h=t.context.length,d=0;d<h;d++)console.log(t.context[d]),t=X(["context",d],H[e]["context-gridType"],t);else if(["stimulus","answer"].includes(r[0])&&"gridType"===r[1])for(var f=t.questions.length,j=0;j<f;j++)t=X(["questions",j,r[0]],H[e][r[0]+"-gridType"],t);else if("answer"===r[0]&&"choice"===r[1])for(var g=t.questions.length,b=function(n){var r=$(k(["questions",n,"answer"],t));t=V(["questions",n,"answer"],H[e]["answer-choice"],(function(){return ie(r)}),t)},x=0;x<g;x++)b(x);else if("answer"===r[0]&&"choices"===r[1])for(var O=t.questions.length,w=t.questions[0].answer.length,m=0;m<O;m++)for(var y=0;y<w;y++)t.questions[m].answer[y]=H[e]["answer-choices"][y]}_(t)}function Z(e){return e.includes("context")?"context":e.includes("stimulus")?"stimulus":!!e.includes("answer")&&"answer"}function $(e){var t;return"string"===typeof(t=function(e){for(var t=e,n=0;t.constructor===Array;)t=t[0],n+=1;return n%2===1}(e)?e[0]:e[0][0])?"string":t.constructor===Array?"pixels":void 0}function ee(e){var t=[],n=e.cols;for(var r in e.items){var s=Math.floor(r/n);s>=t.length&&t.push([]),t[s].push(e.items[r])}return t}function te(e,t,n){for(var r=e.length,s=e[0].length,i=S(e),o=t-r,a=0;a<Math.abs(o);a++)if(o<0)i.pop();else if(o>0){var c=Array(s).fill().map(n);i.push(c)}return i}function ne(e,t,n){for(var r=e.length,s=e[0].length,i=S(e),o=t-s,a=0;a<r;a++)for(var c=0;c<Math.abs(o);c++)o<0?i[a].pop():o>0&&i[a].push(n());return i}function re(e,t,n){for(var r=0,s=n;null!=e[r+1];)s=s[e[r]],r+=1;s[e[r]]=t}function se(e,t,n){return null==t?Array(e).fill().map(n):Array(e).fill().map((function(){return Array(t).fill().map(n)}))}function ie(e){return"pixels"===e?Array(6).fill().map((function(){return Array(6).fill(0)})):"string"===e?"":void 0}function oe(e){return"undefined"===typeof e?Object(c.a)({},M):e}function ae(e){return e<1?e=1:e>30&&(e=30),e}return Object(g.jsxs)("div",{id:"editor",ref:J,children:[Object(g.jsx)("h1",{children:"ARC Editor"}),Object(g.jsx)("p",{children:!1}),Object(g.jsx)("h2",{children:"Problem data"}),Object(g.jsxs)("div",{id:"options",children:[Object(g.jsxs)("label",{children:["Category:",Object(g.jsx)(L,{id:"category",options:Object.keys(H),selection:a,onChange:function(e){var t=e.target.value;Y(t),u(t)}})]}),!("defaultGridType"in H[a])&&Object(g.jsxs)("label",{children:["Default grid cell type:",Object(g.jsx)(L,{id:"gridCellType",options:["pixels","string"],selection:p,onChange:function(e){var t=e.target.value;"defaultGridType"in H[a]||v(t)}})]})]}),Object(g.jsx)(R,{handleChange:function(e){var t=new FileReader;t.readAsText(e.target.files[0],"UTF-8"),t.onload=function(e){var t=JSON.parse(e.target.result);"context"in t?function(e){var t=[];for(var n in e.context){var r=ee(e.context[n]);t.push(r)}var i,o=[];for(var a in e.questions){var c=ee(e.questions[a].stimulus),l=void 0,h=void 0;0===e.questions[a].choices.length?(l=[e.questions[a].answer],h=0,i=!1):(l=e.questions[a].choices,h=e.questions[a].answer,i=!0),o.push({stimulus:c,answer:l,correct:h})}_({context:t,questions:o}),s(e.id),u(e.category),C(i)}(t):function(e){var t=[];for(var n in e.train){var r=e.train[n].input,i=e.train[n].output;t.push([r,i])}var o=[t],a=[];for(var c in e.test){var l=[[e.test[c].input]],h=[e.test[c].output],p=0;a.push({stimulus:l,answer:h,correct:p})}_({context:o,questions:a}),s("arc-0"),u("arc"),C(!1)}(t)}}}),Object(g.jsx)("button",{onClick:function(){var e={context:[[[ie(p)]]],questions:[{stimulus:[[ie(p)]],answer:[ie(p)],correct:0}]};Y(a,e)},children:"Clear"}),Object(g.jsxs)("div",{id:"options",className:"addPadding",children:[!("contextLength"in H[a])&&Object(g.jsx)(q,{name:"# Context",value:M.context.length,onChange:function(e){var t=parseInt(e.target.value);"contextLength"in H[a]||V(["context"],t,(function(){return[[ie(p)]]}))}}),!["arc","letter-string","bongard"].includes(a)&&Object(g.jsx)(q,{name:"# Questions",value:M.questions.length,onChange:Q})]}),Object(g.jsx)(N,{indexTrail:A,setIndexTrail:function(e,t){isNaN(t)||(t=parseInt(t));var n=Object(d.a)(A);n[e]=t;for(var r=e+1;r<3;r++)n[r]=null;n=function(e){null==e[1]&&(e[1]=0);null==e[2]&&(e[2]="context"===e[0]?null:"stimulus");return e}(n),P(n)},problemCat:a,gridType:$(k(A,M)),problem:M,setPenColor:E,penColor:W}),Object(g.jsx)("div",{children:!("multipleChoice"in H[a])&&Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{id:"multipleChoice",type:"checkbox",checked:O,onChange:function(){C("multipleChoice"in H[a]?H[a].multipleChoice:!O)}}),"Multiple Choice"]})}),Object(g.jsxs)("div",{children:[Object(g.jsx)(G,{problemCat:a,problem:M,currentItemIndexTrail:A,calcStage:Z,calcGridType:$,lockedVariables:H[a],handleGridTypeChange:function(e,t){var n=t.target.value;Z(e)+"-gridType"in H[a]||X(e,n)},handleAnswerLengthChange:function(e,t){var n=parseInt(t.target.value);if(!("questionLength"in H[a])){if(n>1&&!O)C(!0);else if(n<1)return;var r=$(k(e,M));V(e,n,(function(){return ie(r)}))}},handleQuestionLengthChange:Q,handleCorrectAnswer:function(e,t){if("answer"===Z(e)&&O)return function(e,t){console.log("setting correct answer");var n=Object(c.a)({},M),r=Object(d.a)(e);return r[2]="correct",re(r,t,n),_(n),!0}(e,t)},getCorrectAnswer:function(e){if("stimulus"===Z(e)||"answer"===Z(e))return M[e[0]][e[1]].correct},multipleChoice:O,handleGridRowChange:function(e,t){var n=ae(parseInt(t.target.value));if(!(Z(e)+"-row"in H[a])){var r=$(k(e,M));F(e,n,(function(){return ie(r)}))}},handleGridColChange:function(e,t){var n=ae(parseInt(t.target.value));if(!(Z(e)+"-col"in H[a])){var r=$(k(e,M));z(e,n,(function(){return ie(r)}))}},handleSceneRowChange:function(e,t,n,r){!function(e,t,n,r){var s=k(e,M),i=te(k([n,r],s),t,(function(){return 0})),o=Object(d.a)(s);re([n,r],i,o),K(e,o)}(e,parseInt(r.target.value),t,n)},handleSceneColChange:function(e,t,n,r){!function(e,t,n,r){var s=k(e,M),i=ne(k([n,r],s),t,(function(){return 0})),o=Object(d.a)(s);re([n,r],i,o),K(e,o)}(e,parseInt(r.target.value),t,n)},penColor:W,setPixelColor:function(e,t,n,r,s,i){var o=k(e,M),a=function(e,t,n,r){var s=S(e);return s[t][n]=r,s}(k([s,i],o),n,r,t),c=Object(d.a)(o);re([s,i],a,c),K(e,c)},setString:function(e,t,n,r){var s=k(e,M),i=Object(d.a)(s);re([n,r],t,i),K(e,i)},setDestToSource:function(e,t){var n=Object(c.a)({},M);re(t,k(e,n),n),_(n)},swapAandB:function(e,t){console.log("swapping",e,t),console.log(M);var n=Object(c.a)({},M),r=k(e,n);re(e,k(t,n),n),re(t,r,n),_(n)}}),Object(g.jsx)("button",{onClick:function(){var e,t,r,s,i={};if("arc"===a)i=function(){var e={train:[],test:[]},t=M.context[0];for(var n in t){var r=t[n],s={input:r[0],output:r[1]};e.train.push(s)}for(var i in M.questions){var o=M.questions[i],a={input:o.stimulus[0][0],output:o.answer[0]};e.test.push(a)}return e}();else{for(var o in i.category=a,i.id=n,i.context=[],i.mode=O?"discriminate":"generate",i.answer_type="categorical_list",M.context)t=(e=M.context[o]).length,r=e[0].length,s=e.flat(),i.context.push({rows:t,cols:r,type:"categorical_list",items:s});var c,u,l;for(var h in i.questions=[],M.questions)t=(c=M.questions[h].stimulus).length,r=c[0].length,s=c.flat(),u=O?M.questions[h].answer:[],l=O?M.questions[h].correct:M.questions[h].answer[0],i.questions.push({stimulus:{rows:t,cols:r,items:s,type:"categorical_list"},choices:u,answer:l})}var p=JSON.stringify(i),d=new Blob([p],{type:"application/json"}),f=URL.createObjectURL(d);Object(y.saveAs)(f)},className:"button",children:"Export JSON"}),Object(g.jsx)("button",{onClick:function(){return Object(j.exportComponentAsPNG)(J)},children:"Export As PNG"})]})]})}function R(e){var t=e.handleChange;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Upload problem file"}),Object(g.jsx)("input",{type:"file",onChange:t})]})}function G(e){var t=e.problemCat,n=e.problem,r=e.currentItemIndexTrail,s=e.calcStage,i=e.calcGridType,o=e.lockedVariables,a=e.handleGridTypeChange,c=e.handleAnswerLengthChange,u=e.handleQuestionLengthChange,l=e.handleCorrectAnswer,h=e.getCorrectAnswer,p=e.multipleChoice,d=e.handleGridRowChange,j=e.handleGridColChange,v=e.handleSceneRowChange,b=e.handleSceneColChange,O=e.penColor,C=e.setPixelColor,w=e.setString,m=e.setDestToSource,y=e.swapAandB;function T(e){var r=[],u=[];for(var f in e)r=r.concat(e[f]),u.push([]);for(var T=function(f){for(var T=r[f],S=void 0,q=0;q<e.length;q++)e[q].includes(T)&&(S=u[q]);var A=k(T,n),R=[T[0],T[1],"answer"];S.push(Object(g.jsx)(x,{problemCat:t,grid:A,contextRows:n.context[0].length,testRows:n.questions.length,indexTrail:T,setDestToSource:function(e,t){return m(e,t)},swapAandB:function(e,t){return y(e,t)},stage:s(T),type:i(A),lockedVariables:o,handleGridTypeChange:function(e){return a(T,e)},handleGridRowChange:function(e){return d(T,e)},handleGridColChange:function(e){return j(T,e)},handleAnswerLengthChange:function(e){return c(T,e)},correctAnswer:h(T),setCorrectAnswer:function(e){return l(R,e)},multipleChoice:p,handleSceneColChange:function(e,t,n){return b(T,t,n,e)},handleSceneRowChange:function(e,t,n){return v(T,t,n,e)},penColor:O,setPixelColor:function(e,t,n,r,s){return C(T,e,t,n,r,s)},setString:function(e,t,n){return w(T,e,t,n)}}))},S=0;S<r.length;S++)T(S);return u}function S(){var e,t,r=[];for(var s in n.questions)r.push(["questions",s,"stimulus"]),r.push(["questions",s,"answer"]);var i=T([[["context",0]],r]),o=Object(f.a)(i,2);e=o[0],t=o[1];for(var a=[],c=0;c<t.length;c+=2)a.push(Object(g.jsx)("div",{className:"flex-container",children:[t[c],t[c+1]]}));return Object(g.jsxs)("div",{className:"flex-container",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Demonstrations"}),e]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Tests"}),Object(g.jsx)(q,{name:"# Tests",value:n.questions.length,onChange:u}),a]})]})}return Object(g.jsx)("div",{children:function(){if("arc"===t)return S();if("bongard"===t)return function(){var e=[];for(var t in n.questions)e.push(["questions",t,"stimulus"]);var r=T([[["context",0]],[["context",1]],e]),s=Object(f.a)(r,3),i=s[0],o=s[1],a=s[2];return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"flex-container",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Category 1"}),i]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Category 2"}),o]})]}),Object(g.jsx)(q,{name:"# Tests",value:n.questions.length,onChange:u}),Object(g.jsx)("div",{className:"flex-container",children:a})]})}();if("letter-string"===t)return S();var e=[],m=k(r,n);return e.push(Object(g.jsx)(x,{problemCat:t,grid:m,indexTrail:r,stage:s(r),type:i(m),lockedVariables:o,handleGridTypeChange:function(e){return a(r,e)},handleGridRowChange:function(e){return d(r,e)},handleGridColChange:function(e){return j(r,e)},handleAnswerLengthChange:function(e){return c(r,e)},correctAnswer:h(r),setCorrectAnswer:function(e){return l(r,e)},multipleChoice:p,handleSceneColChange:function(e,t,n){return b(r,t,n,e)},handleSceneRowChange:function(e,t,n){return v(r,t,n,e)},penColor:O,setPixelColor:function(e,t,n,s,i){return C(r,e,t,n,s,i)},setString:function(e,t,n){return w(r,e,t,n)}})),Object(g.jsx)("div",{className:"flex-container",children:e})}()})}function N(e){var t=e.indexTrail,n=e.setIndexTrail,r=e.problemCat,s=e.gridType,i=e.problem,o=e.penColor,a=e.setPenColor;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{}),!["arc","letter-string"].includes(r)&&Object(g.jsx)("div",{className:"flex-container",children:function(e){var t=[];t.push(Object(g.jsx)(L,{id:"type",options:["context","questions"],selection:e[0],onChange:function(e){return n(0,e.target.value)}},0));var r=i[e[0]].length,s=Object(d.a)(Array(r).keys());return t.push(Object(g.jsx)(L,{id:"parentIndex",options:s,selection:e[1],onChange:function(e){return n(1,e.target.value)}},1)),"questions"===e[0]&&t.push(Object(g.jsx)(L,{id:"questionPart",options:["stimulus","answer"],selection:e[2],onChange:function(e){return n(2,e.target.value)}},2)),t}(t)}),("pixels"===s||"arc"===r)&&Object(g.jsx)("div",{className:"addPadding",children:Object(g.jsx)(m.a,{color:o,colors:T,onChangeComplete:function(e){return a(e.hex)},width:42*T.length,circleSize:28,circleSpacing:14})})]})}function L(e){var t=e.id,n=e.options,r=e.selection,s=e.onChange,i=[];for(var o in n)i.push(Object(g.jsx)("option",{value:n[o],children:n[o]},o));return Object(g.jsx)("select",{id:t,value:r,onChange:s,children:i})}var P=n(93),I=(n(215),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"calculateText",value:function(){return this.props.show?"Hide Answer":"Show Answer"}},{key:"render",value:function(){return Object(g.jsx)("button",{onClick:this.props.onClick,children:this.calculateText()})}}]),n}(s.a.Component)),D=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).canvasRef=s.a.createRef(),r}return Object(l.a)(n,[{key:"drawGrayscale",value:function(){for(var e=this.props.data[0].length,t=this.props.data.length,n=new Uint8ClampedArray(e*t*4),r=0;r<t;r++)for(var s=0;s<e;s++){var i=4*(r*e+s);n[i]=this.props.data[r][s],n[i+1]=this.props.data[r][s],n[i+2]=this.props.data[r][s],n[i+3]=255}var o=this.canvasRef.current,a=o.getContext("2d");a.clearRect(0,0,o.width,o.height);var c=a.createImageData(e,t);c.data.set(n),a.putImageData(c,0,0)}},{key:"drawCategorical",value:function(){var e={0:"rgb(0, 0, 0)",1:"rgb(0, 105, 207)",2:"rgb(255, 57, 55)",3:"rgb(0, 197, 67)",4:"rgb(255, 215, 49)",5:"rgb(160, 160, 160)",6:"rgb(249, 22, 179)",7:"rgb(255, 122, 44)",8:"rgb(99, 214, 252)",9:"rgb(130, 15, 35)",10:"rgb(255, 255, 255)"},t=this.canvasRef.current,n=t.getContext("2d"),r=t.width,s=t.height,i=this.props.data.length,o=this.props.data[0].length,a=.5,c=(r-a*o)/o,u=(s-a*i)/i;c=Math.min(c,u),1!==i&&(u=Math.min(c,u)),n.clearRect(0,0,r,s),n.save();for(var l=0;l<i;l++)for(var h=0;h<o;h++)n.fillStyle=e[this.props.data[l][h]],n.fillRect(h*(c+a),l*(u+a),c,u)}},{key:"componentDidUpdate",value:function(){this.redraw()}},{key:"componentDidMount",value:function(){this.redraw()}},{key:"redraw",value:function(){"grayscale"===this.props.type?this.drawGrayscale():"categorical_list"===this.props.type&&this.drawCategorical()}},{key:"render",value:function(){return Object(g.jsx)("canvas",Object(c.a)({ref:this.canvasRef},this.props))}}]),n}(s.a.Component),M=(s.a.Component,function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"addStimulus",value:function(e){var t=this.props.data.stimulus.rows,n=this.props.data.stimulus.cols;t>0&&n>0&&e.push(Object(g.jsx)(U,{rows:t,cols:n,items:this.props.data.stimulus.items,type:this.props.data.stimulus.type},0))}},{key:"addChoices",value:function(e){var t=this.props.data.choices.length;if(t>0){var n=Math.ceil(t/3);e.push(Object(g.jsx)(U,{rows:n,cols:3,items:this.props.data.choices,type:this.props.answer_type},1))}}},{key:"addAnswer",value:function(e){var t;t=this.props.data.choices.length>0?"number":this.props.answer_type,e.push(Object(g.jsx)(_,{answer:this.props.data.answer,type:t},2))}},{key:"render",value:function(){var e=[];return this.addStimulus(e),this.addChoices(e),this.addAnswer(e),Object(g.jsx)("div",{children:e})}}]),n}(s.a.Component)),_=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={show:!1,answer:r.props.answer},r.onButtonPress=r.onButtonPress.bind(Object(a.a)(r)),r}return Object(l.a)(n,[{key:"onButtonPress",value:function(){this.setState({show:!this.state.show,answer:this.props.answer})}},{key:"render",value:function(){var e=[Object(g.jsx)(I,{onClick:this.onButtonPress,show:this.props.show},0)];return this.state.show&&this.props.answer===this.state.answer?e.push(Object(g.jsx)(H,{type:this.props.type,data:this.props.answer},1)):this.state.show?this.setState({show:!1,answer:this.props.answer}):this.props.answer!==this.state.answer&&this.setState({answer:this.props.answer}),Object(g.jsx)("div",{children:e})}}]),n}(s.a.Component),B=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"generateQuestionDivs",value:function(){for(var e=[],t=0;t<this.props.questions.length;t++)e.push(Object(g.jsx)(M,{data:this.props.questions[t],answer_type:this.props.answer_type},t));return e}},{key:"render",value:function(){var e=this.generateQuestionDivs();return Object(g.jsx)("div",{children:e})}}]),n}(s.a.Component),U=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"getRelevantData",value:function(e,t){return t<e.length?e[t]:null}},{key:"buildTable",value:function(){for(var e=[],t=[],n=0;n<this.props.rows;n++){t=[];for(var r=0;r<this.props.cols;r++){var s=n*this.props.cols+r,i=this.getRelevantData(this.props.items,s);t.push(Object(g.jsx)("td",{children:Object(g.jsx)(H,{type:this.props.type,data:i})},s))}e.push(Object(g.jsx)("tr",{children:t},n))}return Object(g.jsx)("table",{children:Object(g.jsx)("tbody",{children:e})})}},{key:"render",value:function(){return Object(g.jsx)("div",{children:this.buildTable()})}}]),n}(s.a.Component),W=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"makeOptions",value:function(){var e=[];for(var t in this.props.options)e.push(Object(g.jsx)("option",{value:this.props.options[t],children:this.props.options[t]},t));return e}},{key:"render",value:function(){var e=this.makeOptions();return Object(g.jsx)("select",{value:this.props.value,onChange:this.props.onChange,children:e})}}]),n}(s.a.Component),E=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"getTables",value:function(){for(var e=[],t=0;t<this.props.grids.length;t++)e.push(Object(g.jsx)(U,{rows:this.props.grids[t].rows,cols:this.props.grids[t].cols,items:this.props.grids[t].items,type:this.props.grids[t].type},t));return e}},{key:"render",value:function(){var e=this.getTables();return Object(g.jsx)("div",{className:"side_by_side",children:e})}}]),n}(s.a.Component),H=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"decode",value:function(){return null===this.props.data?"":"string"===this.props.type?this.props.data:"grayscale"===this.props.type||"categorical_list"===this.props.type?Object(g.jsx)(D,{type:this.props.type,data:this.props.data}):"number"===this.props.type?this.props.data:void 0}},{key:"render",value:function(){var e=this.decode();return Object(g.jsx)("div",{children:e})}}]),n}(s.a.Component);var J=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)("div",{children:Object(g.jsx)(P.a,{basename:"/",children:Object(g.jsx)(A,{})})})})};o.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(J,{})}),document.getElementById("root"))},98:function(e,t,n){},99:function(e,t,n){}},[[217,1,2]]]);
//# sourceMappingURL=main.318959e0.chunk.js.map