import{j as v,R as c,S as k,P as M,W as U,C as A,a as E,M as L,b as T,c as F,T as D,A as b,F as H,d as I,e as $,f as z,g as O,H as W,h as R,i as V}from"./vendor.a6deae4b.js";const B=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};B();const e=v.exports.jsx,a=v.exports.jsxs;class G extends c.Component{componentDidMount(){let t,s=0;var i=new k,n=new M(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=5;var r=new U;window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}),i.background=new A(1315860),r.setSize(window.innerWidth,window.innerHeight),document.getElementById("canvas").appendChild(r.domElement);var l=new E(4,4,4,10,1),S=new L({color:16485563}),p=new T(l,S);i.add(p);var u=new F(16777215,1);u.position.set(10,10,10),i.add(u);var g=function(){requestAnimationFrame(g),p.rotation.x=5e-4*s,p.rotation.y=5e-4*t,r.render(i,n)};g(),document.addEventListener("mousemove",C);function C(f){t=f.clientX-window.innerWidth/2,s=f.clientY-window.innerHeight/2}}render(){return e("div",{ref:t=>this.mount=t,className:"Canvas",id:"canvas"})}}class _ extends c.Component{constructor(){super();this.state={mssg:"Hi!"}}componentDidMount(){let t=document.querySelector(".Typewriter");t.setAttribute("class","Typewriter Scroll"),t.setAttribute("data-rate","0.4"),t.setAttribute("data-direction","vertical")}render(){return e(D,{id:"role","data-rate":"0.2","data-direction":"vertical",className:"scroll",options:{delay:100},onInit:t=>{t.typeString(`<h1 id="hi">${this.state.mssg}</h1>`).start()}})}}const w={image:"/src/assets/img/projects/nhs.png",title:"NHS Properties Website",tech:["HTML5","CSS3","Bootstrap"],description:"Website designed and deployed",githubUrl:"https://github.com/nhsproperties/nhsproperties.github.io",deploymentUrl:"https://nhsproperties.github.io"},N={image:"/src/assets/img/projects/bcb420.png",title:"BCB420 ESA R Package",tech:["R"],description:"",githubUrl:"https://github.com/NElnour/BCB420.2019.ESA",deploymentUrl:""},y={image:"/src/assets/img/projects/face_splash1.png",title:"Face Splash",tech:["Vue","Axios","face-api.js"],description:"Facial, sentiment, age, and sex detection analysis of Unsplash images built using Vue3,Unshplash API , and face-api.js",githubUrl:"https://github.com/NElnour/face-splash",deploymentUrl:"https://face-splash.herokuapp.com/"},j={image:"/src/assets/img/projects/homepage.png",title:"Fortnite 2-D MMOG",tech:["React","HTML5","CSS3","jQuery","Ajax","Material UI","REST API","Fetch API","Node","Express","SQLite3","MVC"],description:"A MMOG 2-D version of Fortnite. Class project; code withheld",githubUrl:"",deploymentUrl:""},x={image:"/src/assets/img/projects/sendfoodz.png",title:"SendFoodz",tech:["Vue","Vuex/Vuexfire","Node","Express","Firebase","Cloud Firestore","NativeScript-vue","Firebase Cloud Messaging","REST API","Figma","ES6"],description:"An application to facilitate food donation to food banks",githubUrl:"https://github.com/CSC492-Send-Foodz",deploymentUrl:"https://csc492-send-foodz.github.io/login"},P={image:"/src/assets/img/projects/snake_game.gif",title:"Snake",description:"A fun game of Snake",tech:["Python3","Pygame"],githubUrl:"https://github.com/NElnour/snake_game",deploymentUrl:""};var q={nhs:w,bcb:N,fs:y,fortnite:j,sendfoodz:x,snake:P},Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",nhs:w,bcb:N,fs:y,fortnite:j,sendfoodz:x,snake:P,default:q});class X extends c.Component{render(){return a("section",{id:"projects",className:"Projects",children:[e(d,{direction:"left",projectName:"fs"}),e(d,{direction:"right",projectName:"nhs"}),e(d,{direction:"left",projectName:"sendfoodz"}),e(d,{direction:"right",projectName:"snake"}),e(d,{direction:"left",projectName:"fortnite"}),e(d,{direction:"right",projectName:"bcb"})]})}}class d extends c.Component{constructor(t){super(t);this.state={direction:"zoom-in",projectName:this.props.projectName}}componentDidMount(){b.init({duration:1e3})}render(){const t=Y[this.state.projectName]||{},s=t.tech;return a("div",{className:"Project","data-aos":this.state.direction,children:[e(Q,{src:t.image}),e(K,{title:t.title,githubUrl:t.githubUrl,deploymentUrl:t.deploymentUrl}),e("span",{className:"TechStack",children:s.map(i=>e(J,{tech:i},i))})]})}}function Q(o){return e("img",{src:o.src,alt:"","aria-hidden":"false",className:"ProjectImage"})}class K extends c.Component{constructor(t){super(t);this.state={displayGithub:this.props.githubUrl!=="",displayWeblink:this.props.deploymentUrl!=="",githubUrl:this.props.githubUrl,deploymentUrl:this.props.deploymentUrl,title:this.props.title}}render(){return a("span",{className:"ProjectHead",children:[e("h3",{children:this.state.title}),a("span",{className:"ProjectLinks",children:[e("a",{href:this.state.githubUrl,className:`github-link ${this.state.displayGithub?"":"inactive"}`,children:e(H,{})}),e("a",{href:this.state.deploymentUrl,className:`web-link ${this.state.displayWeblink?"":"inactive"}`,children:e(I,{})})]})]})}}function J(o){return e("span",{className:"TechPill",children:o.tech})}var Z="/assets/projects.6336f382.gif",ee="/assets/home.6f7aec0d.gif",te="/assets/resume.74b7abbc.gif",ne="/assets/contact.31c2a69a.gif";function se(){return a("div",{className:"Navbar",children:[e("div",{className:"VerticalDiv"}),e(m,{icon:"home"}),e("div",{className:"VerticalDiv"}),e(m,{icon:"projects"}),e("div",{className:"VerticalDiv"}),e(m,{icon:"contact"}),e("div",{className:"VerticalDiv"})]})}class m extends c.Component{constructor(t){super(t);const s={home:ee,projects:Z,cv:te,contact:ne};this.state={icon:s[this.props.icon]}}render(){return e("a",{href:`#${this.props.icon}`,className:"NavLink",children:e("img",{"n-times":"1.0",src:this.state.icon,alt:this.props.icon})})}}const re="https://github.com/NElnour",ie="https://www.linkedin.com/in/nada-elnour-2ab922b9/",oe="https://www.frontendmentor.io/profile/NElnour",ae="https://nelnour.github.io/assets/pages/resume_nelnour.pdf";var ce={github:re,linkedin:ie,frontend:oe,cv:ae},le="/assets/heart.c2b2a9c5.gif",de="/assets/coffee.a1528a62.gif";function he(){return a("section",{id:"contact",className:"ContactContainer",children:[a("div",{className:"ContactText",children:["Made with",e("img",{src:le,alt:"love"}),"and",e("img",{src:de,alt:"caffeine"})]}),a("div",{className:"Contact",children:[e(h,{icon:"github"}),e(h,{icon:"linkedin"}),e(h,{icon:"frontend"}),e(h,{icon:"cv"})]})]})}function h(o){const t={github:e($,{}),linkedin:e(z,{}),frontend:e(O,{}),cv:e(W,{})},s=ce[o.icon];return e("a",{href:s,className:"FindMe",target:"_blank",children:t[o.icon]})}class pe extends c.Component{componentDidMount(){b.init({duration:500})}render(){return e("section",{className:"IntroContainer",children:a("div",{className:"Intro",children:[a("div",{className:"Experience",children:[e("strike",{children:"hatchling"})," ",e("span",{className:"AngledText",children:"junior"})]}),e("div",{className:"Position",children:"web developer"}),e("div",{className:"Scroll","data-rate":"0.2","data-direction":"vertical",children:"learning the ropes"})]})})}}class me extends c.Component{componentDidMount(){document.querySelectorAll(".svgPath").forEach(s=>{let i=s.getTotalLength();s.style.strokeDasharray=`${i} ${i}`,s.style.strokeDashoffset=i,window.addEventListener("scroll",()=>{let n=(document.documentElement.scrollTop+document.body.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight),r=i*n;s.style.strokeDashoffset=i-r})})}render(){return a("div",{className:"PreProjects",children:[e("svg",{className:"LeadTrail",width:"548",height:"434",viewBox:"0 0 548 434",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{className:"svgPath",d:"M3.31223 0.609362C3.31224 271 537 269 545.312 433.609",stroke:"#141414",strokeWidth:"5"})}),e("h2",{children:"with a few projects under my belt"})]})}}class ue extends c.Component{constructor(){super()}componentDidMount(){document.querySelectorAll(".Scroll").forEach(s=>{window.addEventListener("scroll",i=>{i.preventDefault;let n=window.pageYOffset*s.dataset.rate;if(s.dataset.direction==="vertical")s.style.transform=`translate3d(0px, ${n}px, 0px)`;else{let r=window.pageYOffset*s.dataset.ratex,l=window.pageYOffset*s.dataset.ratey;s.style.transform=`translate3(${r}px, ${l}px, 0px)`}})})}render(){return a("div",{className:"App",children:[e(se,{}),a("section",{className:"Hero",id:"home",children:[e(G,{}),e(_,{}),e("div",{className:"ScrollDown",children:e(R,{onClick:t=>{document.querySelector(".IntroContainer").scrollIntoView()}})})]}),e(pe,{}),e(me,{}),e(X,{}),e(he,{})]})}}V.render(e(c.StrictMode,{children:e(ue,{})}),document.getElementById("root"));
