(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(85)}])},85:function(n,e,t){"use strict";t.r(e);var i=t(5893),c=t(7294),o=t(2729),s=t.n(o);let r=[0,1,1,1,0,-1,-1,-1],a=[-1,-1,0,1,1,1,0,-1],l=()=>{let[n,e]=(0,c.useState)(1),[t,o]=(0,c.useState)([[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,1,2,0,0,0],[0,0,0,2,1,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]),l=(i,c)=>{console.log(i,c);let s=JSON.parse(JSON.stringify(t));if(0===s[c][i]){s[c][i]=n;for(let e=0;e<8;e++){let t=function(n,e,t,i,c){let o=e+r[c],s=t+a[c];for(;o>=0&&o<8&&s>=0&&s<8&&0!==n[s][o];){if(n[s][o]===i)return{i:o,j:s};o+=r[c],s+=a[c]}return null}(s,i,c,n,e);t&&function(n,e,t,i,c){for(;e!==i||t!==c;)n[t][e]=3-n[t][e],e+=Math.sign(i-e),t+=Math.sign(c-t)}(s,i,c,t.i,t.j)}e(3-n)}o(s)};return(0,i.jsx)("div",{className:s().container,children:(0,i.jsx)("div",{className:s().board,children:t.map((n,e)=>n.map((n,t)=>(0,i.jsx)("div",{className:s().cell,onClick:()=>l(t,e),children:0!==n&&(0,i.jsx)("div",{className:s().stone,style:{background:1===n?"#000":"#fff"}})},"".concat(t,"-").concat(e))))})})};e.default=l},2729:function(n){n.exports={container:"index_container__gnN1f",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",stone:"index_stone__oeDmm"}}},function(n){n.O(0,[774,888,179],function(){return n(n.s=8312)}),_N_E=n.O()}]);