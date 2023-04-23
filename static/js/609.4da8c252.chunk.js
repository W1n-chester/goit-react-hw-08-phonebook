"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[609],{609:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,a,o,i,s,c=t(434),l=t(168),d=t(934),u=d.Z.label(r||(r=(0,l.Z)(["\n  display: block;\n\n  text-align: center;\n  padding-bottom: 10px;\n  input {\n    display: block;\n    width: 300px;\n    margin: 10px auto;\n    text-align: center;\n    :hover {\n      border-color: #e84a5f;\n    }\n  }\n"]))),p=t(895),x=t(184),h=function(){var n=(0,c.I0)(),e=(0,c.v9)((function(n){return n.filter}));return(0,x.jsxs)(u,{children:["Find contacts by name",(0,x.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){var t=e.currentTarget.value;n((0,p.a)(t))}})]})},m=d.Z.p(a||(a=(0,l.Z)(["\n  display: flex;\n\n  width: 350px;\n  justify-content: space-between;\n  button {\n    border: 1px, solid, black;\n    border-radius: 5px;\n    background-color: white;\n    /* border-style: none; */\n\n    cursor: pointer;\n    :hover {\n      background-color: #e84a5f;\n    }\n  }\n"]))),b=t(208),f=function(n){var e=n.name,t=n.number,r=n.id,a=(0,c.I0)();return(0,x.jsxs)(m,{children:[(0,x.jsxs)("span",{children:[(0,x.jsxs)("span",{children:[e,":"]})," ",(0,x.jsxs)("span",{children:[" ",t]})]}),(0,x.jsx)("button",{type:"button",onClick:function(){return a((0,b.GK)(r))},children:"Delete"})]})},g=d.Z.div(o||(o=(0,l.Z)(["\n  display: block;\n  /* width: 500px; */\n\n  padding-top: 10px;\n  padding-bottom: 20px;\n\n  h2 {\n    display: block;\n    text-align: center;\n    margin: 0 auto;\n  }\n  ol {\n    border: 1px solid ;\n    display: block;\n    max-width: 400px;\n    min-height: 100px;\n    margin: 0 auto;\n  }\n"]))),v=function(){var n=(0,c.v9)((function(n){return n.contacts.contactsList})),e=(0,c.v9)((function(n){return n.filter})).toLocaleLowerCase(),t=n.filter((function(n){return n.name.toLocaleLowerCase().includes(e)}));return t.sort((function(n,e){var t=n.name.toLowerCase(),r=e.name.toLowerCase();return t<r?-1:t>r?1:0})),(0,x.jsxs)(g,{children:[(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(h,{}),(0,x.jsx)("ol",{children:t.map((function(n){return(0,x.jsx)("li",{children:(0,x.jsx)(f,{name:n.name,number:n.number,id:n.id})},n.id)}))})]})},y=t(439),j=t(791),k=d.Z.form(i||(i=(0,l.Z)(["\n  padding-top: 20px;\n  margin-bottom: 16px;\n  /* width: 300px;\n  height: 300px; */\n  button {\n    display: block;\n    font-size: 18px;\n    width: 150px;\n    margin: 0 auto;\n    /* margin-top: 30px; */\n    border: 1px, solid, black;\n    border-radius: 5px;\n    background-color: white;\n    /* border-style: none; */\n\n    cursor: pointer;\n    :hover {\n      background-color:  #e84a5f;;\n    }\n  }\n"]))),w=d.Z.label(s||(s=(0,l.Z)(["\n  font-size: 18px;\n\n  display: block;\n  width: 300px;\n  padding-bottom: 20px;\n  margin: 0 auto;\n  input {\n    width: 300px;\n    display: block;\n    margin: 0 auto;\n    :hover {\n      border-color: #e84a5f;\n    }\n  }\n"]))),Z=function(){var n=(0,j.useState)(""),e=(0,y.Z)(n,2),t=e[0],r=e[1],a=(0,j.useState)(""),o=(0,y.Z)(a,2),i=o[0],s=o[1],l=(0,c.v9)((function(n){return n.contacts.contactsList})),d=(0,c.I0)(),u=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":s(a)}};return(0,x.jsxs)(k,{onSubmit:function(n){n.preventDefault(),function(){var n={name:t,number:i};l.find((function(e){return e.name===n.name}))?alert("".concat(n.name," is already in contacts")):d((0,b.uK)(n))}(),r(""),s("")},children:[(0,x.jsxs)(w,{children:["Name:",(0,x.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:u})]}),(0,x.jsxs)(w,{children:["Tell:",(0,x.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:i,onChange:u})]}),(0,x.jsx)("button",{type:"submit",children:"Add Contact"})]})},C={container:{minHeight:"calc(100vh - 50px)",display:"blok"},title:{textAlign:"center"}};function L(){var n=(0,c.I0)();return(0,j.useEffect)((function(){n((0,b.yF)())}),[n]),(0,x.jsxs)("div",{style:C.container,children:[(0,x.jsx)("h2",{style:C.title,children:"Phonebook"}),(0,x.jsx)(Z,{}),(0,x.jsx)(v,{})]})}}}]);
//# sourceMappingURL=609.4da8c252.chunk.js.map