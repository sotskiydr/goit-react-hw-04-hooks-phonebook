(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{18:function(t,e,n){},2:function(t,e,n){t.exports={"contact-form":"ContactForm_contact-form__2H_yu",label:"ContactForm_label__3KgVy",input:"ContactForm_input__3emgF",submit:"ContactForm_submit__2xTHf"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),i=(n(18),n(12)),o=n(4),l=n(5),u=n(7),m=n(6),b=n(13),d=n(11),h=n(2),j=n.n(h),p=n(0),f=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit({name:t.state.name,number:t.state.number}),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:j.a["contact-form"],onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:j.a.label,children:["Name",Object(p.jsx)("input",{className:j.a.input,type:"text",name:"name",placeholder:"Liubov Murarova",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(p.jsxs)("label",{className:j.a.label,children:["Number",Object(p.jsx)("input",{className:j.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"099-999-99-99",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(p.jsx)("button",{className:j.a.submit,type:"submit",children:"Add contact"})]})}}]),n}(c.a.Component),C=f,O=n(8),_=n.n(O),v=function(t){var e=t.value,n=t.onChange;return Object(p.jsx)("div",{className:_.a.filter,children:Object(p.jsxs)("label",{className:_.a.label,children:["Find contacts by name",Object(p.jsx)("input",{className:_.a.input,type:"text",value:e,onChange:n})]})})},x=n(3),g=n.n(x),N=function(t){var e=t.renderContacts,n=t.deleteContact;return Object(p.jsx)("ul",{className:g.a.list,children:e.map((function(t){return Object(p.jsxs)("li",{className:g.a.item,children:[Object(p.jsxs)("span",{className:g.a.span,children:[t.name,": ",t.number]}),Object(p.jsx)("button",{className:g.a.btn,type:"button",id:t.id,onClick:function(){n(t.id)},children:"Delete"})]},t.id)}))})},y=(n(20),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Vova Putin",number:"459-12-56"},{id:"id-2",name:"Vitya Poroshenko",number:"443-89-12"},{id:"id-3",name:"Vova Lenin",number:"645-17-79"},{id:"id-4",name:"Joseph Stalin",number:"227-91-26"}],filter:"",name:"",number:""},t.formSubmitData=function(e){var n=e.name,a=e.number,c={id:Object(b.a)(),name:n,number:a};t.state.contacts.some((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[c])}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.renderContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(p.jsxs)("main",{className:"main",children:[Object(p.jsx)("h1",{className:"title",children:"Phonebook"}),Object(p.jsx)(C,{onSubmit:this.formSubmitData}),Object(p.jsx)("h2",{className:"title",children:"Contacts"}),Object(p.jsx)(v,{value:t,onChange:this.changeFilter}),Object(p.jsx)(N,{renderContacts:this.renderContacts(),deleteContact:this.deleteContact})]})}}]),n}(c.a.Component)),S=y;s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={list:"ContactList_list__3wSXY",item:"ContactList_item__3lf8n",btn:"ContactList_btn__LjK5L",span:"ContactList_span__2n2ga"}},8:function(t,e,n){t.exports={label:"Filter_label__2pNgv",input:"Filter_input__YmgBH"}}},[[21,1,2]]]);
//# sourceMappingURL=main.ad008a46.chunk.js.map