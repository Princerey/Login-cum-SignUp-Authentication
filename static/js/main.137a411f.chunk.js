(this["webpackJsonplogin-app-reactjs"]=this["webpackJsonplogin-app-reactjs"]||[]).push([[0],{29:function(e,t,a){e.exports=a(57)},34:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),o=a.n(l),c=(a(34),a(5)),s=a(8),u=a(9),i=a(10),m=a.n(i),p=function(){var e=d();m.a.get("https://express-auth-jwt.onrender.com/auth/info",{headers:{Authorization:"".concat(e)}}).then((function(e){document.getElementById("roh").innerHTML=e.data.user.about}))},d=function(){return sessionStorage.getItem("token")},E=function(){sessionStorage.removeItem("token")},b=function(e){sessionStorage.setItem("token",e)};var g=function(e){var t=Object(n.useState)(e),a=Object(c.a)(t,2),r=a[0],l=a[1];return{value:r,onChange:function(e){l(e.target.value)}}},v=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],o=a[1],s=g(""),u=g(""),i=Object(n.useState)(null),p=Object(c.a)(i,2),d=p[0],E=p[1];return r.a.createElement("div",null,"Login",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,"Username",r.a.createElement("br",null),r.a.createElement("input",Object.assign({type:"text"},s,{autoComplete:"new-password"}))),r.a.createElement("div",{style:{marginTop:10}},"Password",r.a.createElement("br",null),r.a.createElement("input",Object.assign({type:"password"},u,{autoComplete:"new-password"}))),d&&r.a.createElement(r.a.Fragment,null,r.a.createElement("small",{style:{color:"red"}},d),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("input",{type:"button",value:l?"Loading...":"Login",onClick:function(){E(null),o(!0),m.a.post("https://express-auth-jwt.onrender.com/auth/login",{email:s.value,password:u.value}).then((function(t){o(!1),"User does not exist"===t.data.error||"Invalid credentials"===t.data.message?b(""):b(t.data.token),alert(t.data.message||t.data.error),e.history.push("/dashboard")})).catch((function(e){o(!1),401===e.response.status?E(e.response.data.message):E("Something went wrong. Please try again later.")}))},disabled:l}),r.a.createElement("br",null))};var h=function(e){var t=Object(n.useState)(e),a=Object(c.a)(t,2),r=a[0],l=a[1];return{value:r,onChange:function(e){l(e.target.value)}}},f=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],o=a[1],s=h(""),u=h(""),i=h(""),p=Object(n.useState)(null),d=Object(c.a)(p,2),E=d[0],b=d[1];return r.a.createElement("div",null,"Sign Up",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,"E-mail",r.a.createElement("br",null),r.a.createElement("input",Object.assign({type:"text"},s,{autoComplete:"new-password"}))),r.a.createElement("div",{style:{marginTop:10}},"Password",r.a.createElement("br",null),r.a.createElement("input",Object.assign({type:"password"},u,{autoComplete:"new-password"}))),r.a.createElement("div",{style:{marginTop:10}},"About",r.a.createElement("br",null),r.a.createElement("input",Object.assign({type:"text"},i,{autoComplete:"new-password"}))),E&&r.a.createElement(r.a.Fragment,null,r.a.createElement("small",{style:{color:"red"}},E),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("input",{type:"button",value:l?"Loading...":"Sign Up",onClick:function(){b(null),o(!0),m.a.post("https://express-auth-jwt.onrender.com/auth/signup",{email:s.value,password:u.value,about:i.value}).then((function(t){o(!1),alert(t.data.message),e.history.push("/login")})).catch((function(e){o(!1),401===e.response.status?b(e.response.data.message):b("Something went wrong. Please try again later.")}))},disabled:l}),r.a.createElement("br",null))};var j=function(e){return p(),r.a.createElement("div",null,"Welcome ! ",r.a.createElement("span",{id:"roh"})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"button",onClick:function(){E(),e.history.push("/login")},value:"Logout"}))};var w=function(){return r.a.createElement("div",null,"Welcome to the Home Page!")},O=a(12);var y=function(e){var t=e.component,a=Object(O.a)(e,["component"]);return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return d()?r.a.createElement(t,e):r.a.createElement(u.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var C=function(e){var t=e.component,a=Object(O.a)(e,["component"]);return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return d()?r.a.createElement(u.a,{to:{pathname:"/dashboard"}}):r.a.createElement(t,e)}}))};var S=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=d();e&&(b(e),l(!1))})),a&&d()?r.a.createElement("div",{className:"content"},"Checking Authentication..."):r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement(s.b,{exact:!0,activeClassName:"active",to:"/"},"Home"),r.a.createElement(s.b,{activeClassName:"active",to:"/login"},"Login"),r.a.createElement(s.b,{activeClassName:"active",to:"/signup"},"SignUp"),r.a.createElement(s.b,{activeClassName:"active",to:"/dashboard"},"Dashboard")),r.a.createElement("div",{className:"content"},r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:w}),r.a.createElement(C,{path:"/login",component:v}),r.a.createElement(y,{path:"/dashboard",component:j}),r.a.createElement(C,{path:"/signup",component:f}))))))};o.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.137a411f.chunk.js.map