(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var s=n(8),a=n(3),i=n(4),c=n(2),r=n(6),l=n(5),o=n(1),u=n.n(o),m=n(9),d=n.n(m),j=(n(15),n(0)),h=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).createList=s.createList.bind(Object(c.a)(s)),s.removeList=s.removeList.bind(Object(c.a)(s)),s.state={lists:[]},s}return Object(i.a)(n,[{key:"createList",value:function(){var e=prompt("Create list named: ","List");this.setState((function(t){return{lists:[].concat(Object(s.a)(t.lists),[e])}}))}},{key:"removeList",value:function(e){this.state.lists.splice(e,1),this.setState({lists:this.state.lists})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"App",children:[this.state.lists.map((function(t,n){return Object(j.jsx)(p,{name:t,index:n,removeList:e.removeList})})),Object(j.jsx)(b,{createList:this.createList})]})}}]),n}(u.a.Component),b=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"Slot",onClick:function(){return e.props.createList()},children:Object(j.jsx)("span",{className:"material-icons",children:"add"})})}}]),n}(u.a.Component),p=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).removeElement=s.removeElement.bind(Object(c.a)(s)),s.onSubmit=s.onSubmit.bind(Object(c.a)(s)),s.state={elements:[]},s}return Object(i.a)(n,[{key:"addElement",value:function(e){this.setState((function(t){return{elements:[].concat(Object(s.a)(t.elements),[e])}}))}},{key:"removeElement",value:function(e){this.state.elements.splice(e,1),this.setState({elements:this.state.elements}),console.log(e)}},{key:"onSubmit",value:function(e){e.preventDefault(),this.addElement(this.state.newValue),this.setState({newValue:""})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"List",children:[Object(j.jsxs)("div",{className:"ListTitle",children:[Object(j.jsx)("span",{className:"material-icons delete",onClick:function(){return e.props.removeList(e.props.index)},children:"delete"}),Object(j.jsxs)("h1",{children:[this.props.name," :"]})]}),Object(j.jsx)("div",{class:"List-elements",children:this.state.elements.map((function(t,n){return Object(j.jsx)(v,{name:t,index:n,remove:e.removeElement})}))}),Object(j.jsxs)("form",{ref:"form",className:"List-add-element",onSubmit:function(t){return e.onSubmit(t)},children:[Object(j.jsx)("input",{type:"text",value:this.state.newValue,onChange:function(t){e.setState({newValue:t.target.value})},onClick:function(){}}),Object(j.jsx)("span",{className:"material-icons",onClick:function(){return e.addElement(e.state.newValue)},children:"add"})]})]})}}]),n}(u.a.Component),v=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={done:!1},s}return Object(i.a)(n,[{key:"changeState",value:function(){var e=!this.state.done;this.setState({done:e})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"ListItem",children:[this.state.done?Object(j.jsx)("span",{className:"material-icons done",onClick:function(){e.changeState()},children:"done"}):Object(j.jsx)("span",{className:"material-icons undone",onClick:function(){e.changeState()},children:"clear"}),Object(j.jsxs)("div",{className:this.state.done?"ListItemText done":"ListItemText undone",children:["  ",this.props.name]}),Object(j.jsx)("span",{className:"material-icons delete",onClick:function(){return e.props.remove(e.props.index)},children:"delete"})]})}}]),n}(u.a.Component);d.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))},15:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.9e8a12a7.chunk.js.map