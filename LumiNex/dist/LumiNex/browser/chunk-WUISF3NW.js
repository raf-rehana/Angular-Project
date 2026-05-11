import{a as ji,b as Xi}from"./chunk-IRB5GMKZ.js";import{a as Yi,b as Yt,c as Gi}from"./chunk-IVXQJHLN.js";import"./chunk-5KSWA34J.js";import"./chunk-FK6H3RFT.js";import{a as Ut,b as qt}from"./chunk-MMQ22QOO.js";import{$ as le,$a as Ri,$b as Me,A as N,Aa as u,B as O,Ba as we,C as vi,Ca as q,Cb as Vi,D as m,Da as Mi,E as tt,Ea as nt,F as p,Fa as Z,G as f,Ga as K,H as Q,Ha as ki,Hb as zi,I as U,Ia as Di,J as qe,Ja as An,K as R,Ka as re,L as bt,La as Le,Lb as Ht,M as gt,Ma as W,N as _t,Na as Ne,Nb as fe,O as In,Oa as l,Ob as Wi,P as j,Pa as g,Pb as Hi,Q as yi,Qa as P,Qb as he,R as xi,Rb as ze,S as Nt,Sa as v,Sb as Se,T as Ci,Ta as y,Tb as be,U as wi,Ua as x,Ub as je,V as Si,Vb as Ui,W as Oe,Wa as it,Y as d,Z as Ae,Za as Ti,Zb as qi,_ as vt,_b as Ee,a as $e,aa as xe,ab as de,ac as ke,b as Je,ba as B,bb as Be,bc as We,c as F,ca as Bt,cb as xt,d as ui,da as On,db as Ve,dc as ae,e as pi,ea as D,f as et,fa as V,fb as zt,g as ft,ga as L,gb as Ct,h as fi,ha as Fe,hb as Ii,i as hi,ia as E,ib as ce,ja as Ei,jb as ye,k as bi,ka as yt,kb as Oi,l as Ie,la as Ce,lb as Ai,m as kn,ma as ne,mb as jt,na as ie,nb as Fi,o as gi,oa as b,ob as ue,p as _i,pa as a,pb as oe,q as Dn,qa as s,qb as pe,ra as w,rb as Pi,s as Tn,sa as Ye,t as Rn,ta as Ge,tb as Wt,u as Lt,ua as Pe,ub as ot,v as ht,vb as Li,wb as $,x as ve,xa as A,xb as Ni,ya as Vt,z as k,za as S,zb as Bi}from"./chunk-V5LQDTJ4.js";import{a as H,b as mi}from"./chunk-I4MTPUBM.js";function xr(i,o){if(i&1&&(a(0,"tr",25)(1,"td",26)(2,"div",27),l(3),s()(),a(4,"td",28),l(5),s(),a(6,"td",28),l(7),de(8,"date"),s(),a(9,"td",28),w(10,"app-status-badge",29),s()()),i&2){let e=o.$implicit;d(3),P("User ID: ",e.userId),d(2),g(e.serviceName),d(2),g(xt(8,4,e.createdAt,"mediumDate")),d(3),b("status",e.status)}}function Cr(i,o){i&1&&(a(0,"tr")(1,"td",30),w(2,"i",31),l(3," No requests found on platform. "),s()())}var Gt=class i{constructor(o){this.requestService=o}requests=[];ngOnInit(){this.requestService.getAllRequests().subscribe(o=>{this.requests=o})}get recentRequests(){return this.requests.slice(0,5)}get pendingCount(){return this.requests.filter(o=>o.status==="PENDING").length}static \u0275fac=function(e){return new(e||i)(B(qt))};static \u0275cmp=D({type:i,selectors:[["app-dashboard"]],decls:44,vars:4,consts:[[1,"container-fluid","py-4"],[1,"row","mb-4"],[1,"col-12"],[1,"fw-bold","text-dark","mb-0"],[1,"text-muted"],[1,"row","g-4","mb-4"],[1,"col-md-4"],[1,"card","border-0","shadow-sm","rounded-4","bg-primary","text-white","h-100"],[1,"card-body","p-4"],[1,"text-white-50","text-uppercase","fw-bold","mb-1"],[1,"display-4","fw-bold","mb-0"],[1,"card","border-0","shadow-sm","rounded-4","bg-warning","text-dark","h-100"],[1,"text-dark-50","text-uppercase","fw-bold","mb-1","opacity-75"],[1,"card","border-0","shadow-sm","rounded-4","overflow-hidden"],[1,"card-header","bg-white","border-bottom-0","pt-4","pb-0","px-4","d-flex","justify-content-between","align-items-center"],[1,"fw-bold","mb-0"],["routerLink","/admin/all-requests",1,"btn","btn-sm","btn-light"],[1,"table-responsive"],[1,"table","table-hover","align-middle","mb-0"],[1,"table-light"],[1,"ps-3","py-3","border-0","rounded-start"],[1,"py-3","border-0"],[1,"py-3","border-0","rounded-end"],["class","border-bottom",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"border-bottom"],[1,"ps-3","py-3"],[1,"fw-bold","text-dark"],[1,"py-3"],[3,"status"],["colspan","4",1,"text-center","py-5","text-muted"],[1,"bi","bi-inbox","display-4","d-block","mb-3","opacity-25"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),l(4,"Admin Dashboard"),s(),a(5,"p",4),l(6,"Overview of the entire LumiNex platform."),s()()(),a(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"h6",9),l(12,"Total Requests"),s(),a(13,"h1",10),l(14),s()()()(),a(15,"div",6)(16,"div",11)(17,"div",8)(18,"h6",12),l(19,"Pending Review"),s(),a(20,"h1",10),l(21),s()()()()(),a(22,"div",13)(23,"div",14)(24,"h5",15),l(25,"Recent Platform Activity"),s(),a(26,"a",16),l(27,"See all"),s()(),a(28,"div",8)(29,"div",17)(30,"table",18)(31,"thead",19)(32,"tr")(33,"th",20),l(34,"Client"),s(),a(35,"th",21),l(36,"Service"),s(),a(37,"th",21),l(38,"Date"),s(),a(39,"th",22),l(40,"Status"),s()()(),a(41,"tbody"),E(42,xr,11,7,"tr",23)(43,Cr,4,0,"tr",24),s()()()()()()),e&2&&(d(14),g(t.requests.length),d(7),g(t.pendingCount),d(21),b("ngForOf",t.recentRequests),d(),b("ngIf",t.requests.length===0))},dependencies:[$,oe,pe,Ut,Ht,zi,ot],encapsulation:2})};var De=class i{constructor(o){this.http=o}apiUrl="http://127.0.0.1:3000";getUsers(o){let e=o?`${this.apiUrl}/users?role=${o}`:`${this.apiUrl}/users`;return this.http.get(e)}addUser(o){return this.http.post(`${this.apiUrl}/users`,o)}updateUser(o,e){return this.http.patch(`${this.apiUrl}/users/${o}`,e)}deleteUser(o){return this.http.delete(`${this.apiUrl}/users/${o}`)}addService(o){return this.http.post(`${this.apiUrl}/services`,o)}deleteService(o){return this.http.delete(`${this.apiUrl}/services/${o}`)}static \u0275fac=function(e){return new(e||i)(vi(Bi))};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})};var wr=(i,o,e,t)=>({"bg-danger":i,"bg-warning text-dark":o,"bg-info text-dark":e,"bg-secondary":t});function Sr(i,o){if(i&1){let e=A();a(0,"div",22)(1,"div",23)(2,"div",24)(3,"div",25)(4,"label",26),l(5,"Status Filter"),s(),a(6,"select",27),x("ngModelChange",function(n){p(e);let r=u();return y(r.filterStatus,n)||(r.filterStatus=n),f(n)}),a(7,"option",28),l(8,"All Statuses"),s(),a(9,"option",29),l(10,"PENDING"),s(),a(11,"option",30),l(12,"ASSIGNED"),s(),a(13,"option",31),l(14,"IN_PROGRESS"),s(),a(15,"option",32),l(16,"REVIEW"),s(),a(17,"option",33),l(18,"COMPLETED"),s(),a(19,"option",34),l(20,"REJECTED"),s()()(),a(21,"div",25)(22,"label",26),l(23,"Priority Filter"),s(),a(24,"select",27),x("ngModelChange",function(n){p(e);let r=u();return y(r.filterPriority,n)||(r.filterPriority=n),f(n)}),a(25,"option",28),l(26,"All Priorities"),s(),a(27,"option",35),l(28,"LOW"),s(),a(29,"option",36),l(30,"NORMAL"),s(),a(31,"option",37),l(32,"HIGH"),s(),a(33,"option",38),l(34,"URGENT"),s()()(),a(35,"div",25)(36,"button",39),S("click",function(){p(e);let n=u();return n.filterStatus="",f(n.filterPriority="")}),l(37,"Reset Filters"),s()()()()()}if(i&2){let e=u();d(6),v("ngModel",e.filterStatus),d(18),v("ngModel",e.filterPriority)}}function Er(i,o){if(i&1){let e=A();a(0,"tr")(1,"td",40)(2,"div",41),l(3),s(),a(4,"div",42),l(5),s()(),a(6,"td",43)(7,"div",44),l(8),s(),a(9,"div",42),l(10),s()(),a(11,"td",43),w(12,"app-status-badge",45),s(),a(13,"td",43)(14,"span",46),l(15),s()(),a(16,"td",47)(17,"button",48),S("click",function(){let n=p(e).$implicit,r=u();return f(r.manageRequest(n))}),l(18,"Manage"),s()()()}if(i&2){let e=o.$implicit,t=u();W("table-primary",(t.selectedRequest==null?null:t.selectedRequest.id)===e.id),d(3),P("#REQ-",e.id),d(2),P("User ID: ",e.userId),d(3),g(e.serviceName),d(2),g(e.categoryName),d(2),b("status",e.status),d(2),b("ngClass",Ri(9,wr,e.priority==="URGENT",e.priority==="HIGH",e.priority==="NORMAL",e.priority==="LOW")),d(),P(" ",e.priority," ")}}function Mr(i,o){i&1&&(a(0,"tr")(1,"td",49),l(2,"No requests found matching your filters."),s()())}function kr(i,o){if(i&1&&(a(0,"option",63),l(1),s()),i&2){let e=o.$implicit;b("value",e.id),d(),g(e.name)}}function Dr(i,o){if(i&1){let e=A();a(0,"div",50)(1,"div",51)(2,"div",52)(3,"h5",53),l(4,"Manage Request"),s(),a(5,"button",54),S("click",function(){p(e);let n=u();return f(n.selectedRequest=null)}),s()(),a(6,"div",23)(7,"div",55)(8,"label",26),l(9,"Status"),s(),a(10,"select",56),x("ngModelChange",function(n){p(e);let r=u();return y(r.selectedRequest.status,n)||(r.selectedRequest.status=n),f(n)}),S("change",function(){p(e);let n=u();return f(n.updateRequest())}),a(11,"option",29),l(12,"PENDING"),s(),a(13,"option",30),l(14,"ASSIGNED"),s(),a(15,"option",31),l(16,"IN_PROGRESS"),s(),a(17,"option",32),l(18,"REVIEW"),s(),a(19,"option",33),l(20,"COMPLETED"),s(),a(21,"option",34),l(22,"REJECTED"),s()()(),a(23,"div",55)(24,"label",26),l(25,"Priority"),s(),a(26,"select",56),x("ngModelChange",function(n){p(e);let r=u();return y(r.selectedRequest.priority,n)||(r.selectedRequest.priority=n),f(n)}),S("change",function(){p(e);let n=u();return f(n.updateRequest())}),a(27,"option",35),l(28,"LOW"),s(),a(29,"option",36),l(30,"NORMAL"),s(),a(31,"option",37),l(32,"HIGH"),s(),a(33,"option",38),l(34,"URGENT"),s()()(),a(35,"div",55)(36,"label",26),l(37,"Assign to Employee"),s(),a(38,"select",56),x("ngModelChange",function(n){p(e);let r=u();return y(r.selectedRequest.assignedTo,n)||(r.selectedRequest.assignedTo=n),f(n)}),S("change",function(){p(e);let n=u();return f(n.updateRequest())}),a(39,"option",57),l(40,"Unassigned"),s(),E(41,kr,2,2,"option",58),s()(),a(42,"div",55)(43,"label",26),l(44,"Internal Notes"),s(),a(45,"textarea",59),x("ngModelChange",function(n){p(e);let r=u();return y(r.selectedRequest.employeeNotes,n)||(r.selectedRequest.employeeNotes=n),f(n)}),s()(),a(46,"div",60)(47,"button",61),S("click",function(){p(e);let n=u();return f(n.saveNotes())}),l(48,"Save Notes"),s(),a(49,"button",62),S("click",function(){p(e);let n=u();return f(n.cancelRequest())}),l(50,"Cancel Request"),s()()()()()}if(i&2){let e=u();d(10),v("ngModel",e.selectedRequest.status),d(16),v("ngModel",e.selectedRequest.priority),d(12),v("ngModel",e.selectedRequest.assignedTo),d(),b("ngValue",void 0),d(2),b("ngForOf",e.employee),d(4),v("ngModel",e.selectedRequest.employeeNotes)}}var Zt=class i{constructor(o,e,t){this.requestService=o;this.adminService=e;this.cdr=t}requests=[];employee=[];selectedRequest=null;showFilters=!1;filterStatus="";filterPriority="";ngOnInit(){this.loadData()}get filteredRequests(){return this.requests.filter(o=>{let e=!this.filterStatus||o.status===this.filterStatus,t=!this.filterPriority||o.priority===this.filterPriority;return e&&t})}loadData(){this.requestService.getAllRequests().subscribe(o=>{this.requests=o,this.cdr.detectChanges()}),this.adminService.getUsers("EMPLOYEE").subscribe(o=>{this.employee=o,this.cdr.detectChanges()})}manageRequest(o){this.selectedRequest=H({},o)}updateRequest(){this.selectedRequest&&this.requestService.updateStatus(this.selectedRequest.id,this.selectedRequest.status,this.selectedRequest.employeeNotes).subscribe(()=>{this.loadData()})}saveNotes(){this.updateRequest(),alert("Notes saved successfully!"),this.selectedRequest=null}cancelRequest(){confirm("Are you sure you want to cancel this request?")&&(this.selectedRequest.status="REJECTED",this.updateRequest())}static \u0275fac=function(e){return new(e||i)(B(qt),B(De),B(ce))};static \u0275cmp=D({type:i,selectors:[["app-all-requests"]],decls:37,vars:7,consts:[[1,"container-fluid","py-4"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],[1,"fw-bold","text-dark","mb-0"],[1,"text-muted"],[1,"btn","btn-outline-primary","me-2",3,"click"],[1,"bi",3,"ngClass"],[1,"btn","btn-primary"],[1,"bi","bi-download","me-2"],["class","card border-0 shadow-sm rounded-4 mb-4 animate-fade-in",4,"ngIf"],[1,"row"],[3,"ngClass"],[1,"card","border-0","shadow-sm","rounded-4"],[1,"card-body","p-0"],[1,"table-responsive"],[1,"table","table-hover","align-middle","mb-0"],[1,"table-light"],[1,"ps-4","py-3","border-0"],[1,"py-3","border-0"],[1,"pe-4","py-3","border-0","text-end"],[3,"table-primary",4,"ngFor","ngForOf"],[4,"ngIf"],["class","col-lg-4",4,"ngIf"],[1,"card","border-0","shadow-sm","rounded-4","mb-4","animate-fade-in"],[1,"card-body","p-4"],[1,"row","g-3","align-items-end"],[1,"col-md-4"],[1,"form-label","small","fw-bold","text-muted","text-uppercase"],[1,"form-select","bg-light","border-0","py-2","rounded-3",3,"ngModelChange","ngModel"],["value",""],["value","PENDING"],["value","ASSIGNED"],["value","IN_PROGRESS"],["value","REVIEW"],["value","COMPLETED"],["value","REJECTED"],["value","LOW"],["value","NORMAL"],["value","HIGH"],["value","URGENT"],[1,"btn","btn-light","w-100","py-2","rounded-pill","fw-bold",3,"click"],[1,"ps-4","py-3"],[1,"fw-bold","text-dark"],[1,"small","text-muted"],[1,"py-3"],[1,"fw-medium","text-dark"],[3,"status"],[1,"badge",3,"ngClass"],[1,"pe-4","py-3","text-end"],[1,"btn","btn-sm","btn-primary","px-3","rounded-pill",3,"click"],["colspan","5",1,"text-center","py-5","text-muted"],[1,"col-lg-4"],[1,"card","border-0","shadow-sm","rounded-4","sticky-top",2,"top","20px"],[1,"card-header","bg-white","border-bottom","py-3","px-4","d-flex","justify-content-between","align-items-center"],[1,"fw-bold","mb-0","text-primary"],["type","button",1,"btn-close",3,"click"],[1,"mb-4"],[1,"form-select",3,"ngModelChange","change","ngModel"],[3,"ngValue"],[3,"value",4,"ngFor","ngForOf"],["rows","3","placeholder","Add notes for the team...",1,"form-control",3,"ngModelChange","ngModel"],[1,"d-grid","gap-2"],[1,"btn","btn-primary","py-2",3,"click"],[1,"btn","btn-outline-danger","py-2",3,"click"],[3,"value"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"div",1)(2,"div")(3,"h2",2),l(4,"All Requests"),s(),a(5,"p",3),l(6,"Manage and assign all platform requests."),s()(),a(7,"div")(8,"button",4),S("click",function(){return t.showFilters=!t.showFilters}),w(9,"i",5),l(10),s(),a(11,"button",6),w(12,"i",7),l(13,"Export"),s()()(),E(14,Sr,38,2,"div",8),a(15,"div",9)(16,"div",10)(17,"div",11)(18,"div",12)(19,"div",13)(20,"table",14)(21,"thead",15)(22,"tr")(23,"th",16),l(24,"ID / Client"),s(),a(25,"th",17),l(26,"Service"),s(),a(27,"th",17),l(28,"Status"),s(),a(29,"th",17),l(30,"Priority"),s(),a(31,"th",18),l(32,"Action"),s()()(),a(33,"tbody"),E(34,Er,19,14,"tr",19)(35,Mr,3,0,"tr",20),s()()()()()(),E(36,Dr,51,6,"div",21),s()()),e&2&&(d(9),b("ngClass",t.showFilters?"bi-x-lg":"bi-filter"),d(),P(" ",t.showFilters?"Hide Filters":"Filter"," "),d(4),b("ngIf",t.showFilters),d(2),b("ngClass",t.selectedRequest?"col-lg-8":"col-12"),d(18),b("ngForOf",t.filteredRequests),d(),b("ngIf",t.filteredRequests.length===0),d(),b("ngIf",t.selectedRequest))},dependencies:[$,ue,oe,pe,Ut,ae,Me,ke,fe,Ee,he,be],encapsulation:2})};function Tr(i,o){if(i&1){let e=A();a(0,"div",22)(1,"div",23)(2,"h5",24),l(3,"Add New Client"),s(),a(4,"form",25,0),S("ngSubmit",function(){p(e);let n=u();return f(n.addClient())}),a(6,"div",26)(7,"div",27)(8,"label",28),l(9,"Full Name"),s(),a(10,"input",29),x("ngModelChange",function(n){p(e);let r=u();return y(r.newClient.name,n)||(r.newClient.name=n),f(n)}),s()(),a(11,"div",27)(12,"label",28),l(13,"Email"),s(),a(14,"input",30),x("ngModelChange",function(n){p(e);let r=u();return y(r.newClient.email,n)||(r.newClient.email=n),f(n)}),s()(),a(15,"div",27)(16,"label",28),l(17,"Password"),s(),a(18,"input",31),x("ngModelChange",function(n){p(e);let r=u();return y(r.newClient.password,n)||(r.newClient.password=n),f(n)}),s()(),a(19,"div",32)(20,"button",33),l(21,"Save Client"),s()()()()()()}if(i&2){let e=re(5),t=u();d(10),v("ngModel",t.newClient.name),d(4),v("ngModel",t.newClient.email),d(4),v("ngModel",t.newClient.password),d(2),b("disabled",!e.form.valid)}}function Rr(i,o){if(i&1&&w(0,"img",48),i&2){let e=u().$implicit;b("src",e.avatar,Oe)}}function Ir(i,o){if(i&1&&(l(0),de(1,"uppercase")),i&2){let e=u().$implicit;g(Be(1,1,e.name.charAt(0)))}}function Or(i,o){if(i&1){let e=A();a(0,"tr")(1,"td",34)(2,"div",35),S("click",function(){let n=p(e).$implicit,r=u();return f(r.viewProfile(n))}),a(3,"div",36),E(4,Rr,1,1,"img",37)(5,Ir,2,3,"ng-template",null,1,Ve),s(),a(7,"div",38),l(8),s()()(),a(9,"td",39),l(10),s(),a(11,"td",40)(12,"select",41),x("ngModelChange",function(n){let r=p(e).$implicit;return y(r.role,n)||(r.role=n),f(n)}),S("change",function(){let n=p(e).$implicit,r=u();return f(r.changeRole(n))}),a(13,"option",42),l(14,"CLIENT"),s(),a(15,"option",43),l(16,"EMPLOYEE"),s(),a(17,"option",44),l(18,"ADMIN"),s()()(),a(19,"td",45)(20,"button",46),S("click",function(){let n=p(e).$implicit,r=u();return f(r.deleteClient(n.id))}),w(21,"i",47),s()()()}if(i&2){let e=o.$implicit,t=re(6);d(4),b("ngIf",e.avatar)("ngIfElse",t),d(4),g(e.name),d(2),g(e.email),d(2),v("ngModel",e.role)}}function Ar(i,o){i&1&&(a(0,"tr")(1,"td",49),l(2,"No clients found."),s()())}function Fr(i,o){if(i&1){let e=A();a(0,"div",50),S("click",function(){p(e);let n=u();return f(n.selectedUser=null)}),s()}}function Pr(i,o){if(i&1&&w(0,"img",48),i&2){let e=u(2);b("src",e.selectedUser.avatar,Oe)}}function Lr(i,o){if(i&1&&(l(0),de(1,"uppercase")),i&2){let e=u(2);g(Be(1,1,e.selectedUser.name.charAt(0)))}}function Nr(i,o){if(i&1&&(a(0,"div",62)(1,"label",63),l(2,"Phone Number"),s(),a(3,"div",64),l(4),s()()),i&2){let e=u(2);d(4),g(e.selectedUser.phone)}}function Br(i,o){if(i&1&&(a(0,"div",62)(1,"label",63),l(2,"Company"),s(),a(3,"div",64),l(4),s()()),i&2){let e=u(2);d(4),g(e.selectedUser.companyName)}}function Vr(i,o){if(i&1&&(a(0,"div",62)(1,"label",63),l(2,"Address"),s(),a(3,"div",68),l(4),s()()),i&2){let e=u(2);d(4),g(e.selectedUser.address)}}function zr(i,o){if(i&1){let e=A();a(0,"div",51)(1,"div",52)(2,"div",53)(3,"div",54)(4,"h5",55),l(5,"User Profile"),s(),a(6,"button",56),S("click",function(){p(e);let n=u();return f(n.selectedUser=null)}),s()(),a(7,"div",57)(8,"div",58)(9,"div",59),E(10,Pr,1,1,"img",37)(11,Lr,2,3,"ng-template",null,2,Ve),s(),a(13,"h4",60),l(14),s(),a(15,"div",61),l(16),s()(),a(17,"div",26)(18,"div",62)(19,"label",63),l(20,"Email Address"),s(),a(21,"div",64),l(22),s()(),E(23,Nr,5,1,"div",65)(24,Br,5,1,"div",65)(25,Vr,5,1,"div",65),s()(),a(26,"div",66)(27,"button",67),S("click",function(){p(e);let n=u();return f(n.selectedUser=null)}),l(28,"Close"),s()()()()()}if(i&2){let e=re(12),t=u();d(10),b("ngIf",t.selectedUser.avatar)("ngIfElse",e),d(4),g(t.selectedUser.name),d(2),g(t.selectedUser.role),d(6),g(t.selectedUser.email),d(),b("ngIf",t.selectedUser.phone),d(),b("ngIf",t.selectedUser.companyName),d(),b("ngIf",t.selectedUser.address)}}var Kt=class i{constructor(o){this.adminService=o}clients=[];selectedUser=null;showAddForm=!1;newClient={name:"",email:"",password:"demo123",role:"CLIENT"};ngOnInit(){this.loadClients()}loadClients(){this.adminService.getUsers("CLIENT").subscribe(o=>{this.clients=o})}viewProfile(o){this.selectedUser=o}addClient(){this.adminService.addUser(this.newClient).subscribe(()=>{this.loadClients(),this.showAddForm=!1,this.newClient={name:"",email:"",password:"demo123",role:"CLIENT"}})}changeRole(o){this.adminService.updateUser(o.id,{role:o.role}).subscribe(()=>{console.log("Role updated successfully")})}deleteClient(o){confirm("Are you sure you want to delete this user?")&&this.adminService.deleteUser(o).subscribe(()=>{this.loadClients()})}static \u0275fac=function(e){return new(e||i)(B(De))};static \u0275cmp=D({type:i,selectors:[["app-client-management"]],decls:31,vars:7,consts:[["clientForm","ngForm"],["initialAvatar",""],["modalInitial",""],[1,"container-fluid","py-4"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],[1,"fw-bold","text-dark","mb-0"],[1,"text-muted"],[1,"btn","btn-primary",3,"click"],[1,"bi",3,"ngClass"],["class","card border-0 shadow-sm rounded-4 mb-4",4,"ngIf"],[1,"card","border-0","shadow-sm","rounded-4"],[1,"card-body","p-0"],[1,"table-responsive"],[1,"table","table-hover","align-middle","mb-0"],[1,"table-light"],[1,"ps-4","py-3","border-0"],[1,"py-3","border-0"],[1,"pe-4","py-3","border-0","text-end"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","modal-backdrop fade show",3,"click",4,"ngIf"],["class","modal fade show d-block","tabindex","-1",4,"ngIf"],[1,"card","border-0","shadow-sm","rounded-4","mb-4"],[1,"card-body","p-4"],[1,"fw-bold","mb-3"],[3,"ngSubmit"],[1,"row","g-3"],[1,"col-md-4"],[1,"form-label"],["type","text","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","email","name","email","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","password","name","password","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-12","text-end"],["type","submit",1,"btn","btn-primary","px-4",3,"disabled"],[1,"ps-4","py-3"],[1,"d-flex","align-items-center",2,"cursor","pointer",3,"click"],[1,"avatar-circle","bg-primary","text-white","me-3","fw-bold","d-flex","align-items-center","justify-content-center",2,"width","40px","height","40px","border-radius","50%"],["class","img-fluid w-100 h-100 object-fit-cover","style","border-radius: 50%;",3,"src",4,"ngIf","ngIfElse"],[1,"fw-bold","text-dark","text-primary-hover"],[1,"py-3","text-muted"],[1,"py-3"],[1,"form-select","form-select-sm","w-auto","d-inline-block","border-0","bg-light",3,"ngModelChange","change","ngModel"],["value","CLIENT"],["value","EMPLOYEE"],["value","ADMIN"],[1,"pe-4","py-3","text-end"],[1,"btn","btn-sm","btn-light","text-danger",3,"click"],[1,"bi","bi-trash"],[1,"img-fluid","w-100","h-100","object-fit-cover",2,"border-radius","50%",3,"src"],["colspan","4",1,"text-center","py-5","text-muted"],[1,"modal-backdrop","fade","show",3,"click"],["tabindex","-1",1,"modal","fade","show","d-block"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content","border-0","shadow-lg","rounded-5","overflow-hidden"],[1,"modal-header","border-0","bg-primary","text-white","p-4"],[1,"modal-title","fw-bold"],["type","button",1,"btn-close","btn-close-white",3,"click"],[1,"modal-body","p-4","p-md-5"],[1,"text-center","mb-4"],[1,"avatar-circle","bg-light","text-primary","mx-auto","mb-3","shadow-sm","d-flex","align-items-center","justify-content-center",2,"width","100px","height","100px","border-radius","50%","font-size","2.5rem","font-weight","bold"],[1,"fw-bold","mb-1"],[1,"badge","bg-primary-soft","text-primary","rounded-pill","px-3"],[1,"col-12"],[1,"small","fw-bold","text-muted","text-uppercase","mb-1"],[1,"p-3","bg-light","rounded-3"],["class","col-12",4,"ngIf"],[1,"modal-footer","border-0","p-4","pt-0"],["type","button",1,"btn","btn-light","w-100","rounded-pill","py-2",3,"click"],[1,"p-3","bg-light","rounded-3","small"]],template:function(e,t){e&1&&(a(0,"div",3)(1,"div",4)(2,"div")(3,"h2",5),l(4,"Client Management"),s(),a(5,"p",6),l(6,"View and manage client accounts."),s()(),a(7,"div")(8,"button",7),S("click",function(){return t.showAddForm=!t.showAddForm}),w(9,"i",8),l(10),s()()(),E(11,Tr,22,4,"div",9),a(12,"div",10)(13,"div",11)(14,"div",12)(15,"table",13)(16,"thead",14)(17,"tr")(18,"th",15),l(19,"Client"),s(),a(20,"th",16),l(21,"Email"),s(),a(22,"th",16),l(23,"Role"),s(),a(24,"th",17),l(25,"Action"),s()()(),a(26,"tbody"),E(27,Or,22,5,"tr",18)(28,Ar,3,0,"tr",19),s()()()()(),E(29,Fr,1,0,"div",20)(30,zr,29,8,"div",21),s()),e&2&&(d(9),b("ngClass",t.showAddForm?"bi-x-lg":"bi-person-plus"),d(),P(" ",t.showAddForm?"Cancel":"Add Client"," "),d(),b("ngIf",t.showAddForm),d(16),b("ngForOf",t.clients),d(),b("ngIf",t.clients.length===0),d(),b("ngIf",t.selectedUser),d(),b("ngIf",t.selectedUser))},dependencies:[$,ue,oe,pe,ae,je,Me,ke,fe,Ee,he,ze,We,be,Se,Wt],styles:[".text-primary-hover[_ngcontent-%COMP%]:hover{color:var(--bs-primary)!important;text-decoration:underline}.bg-primary-soft[_ngcontent-%COMP%]{background-color:#eef2ff}"]})};function jr(i,o){if(i&1){let e=A();a(0,"div",22)(1,"div",23)(2,"h5",24),l(3,"Add New Employee Member"),s(),a(4,"form",25,0),S("ngSubmit",function(){p(e);let n=u();return f(n.addEmployee())}),a(6,"div",26)(7,"div",27)(8,"label",28),l(9,"Full Name"),s(),a(10,"input",29),x("ngModelChange",function(n){p(e);let r=u();return y(r.newEmployee.name,n)||(r.newEmployee.name=n),f(n)}),s()(),a(11,"div",27)(12,"label",28),l(13,"Email"),s(),a(14,"input",30),x("ngModelChange",function(n){p(e);let r=u();return y(r.newEmployee.email,n)||(r.newEmployee.email=n),f(n)}),s()(),a(15,"div",27)(16,"label",28),l(17,"IT Designation"),s(),a(18,"select",31),x("ngModelChange",function(n){p(e);let r=u();return y(r.newEmployee.designation,n)||(r.newEmployee.designation=n),f(n)}),a(19,"option",32),l(20,"Java Developer"),s(),a(21,"option",33),l(22,"PHP Developer"),s(),a(23,"option",34),l(24,"Python Developer"),s(),a(25,"option",35),l(26,"AI Developer"),s(),a(27,"option",36),l(28,"UI/UX Designer"),s(),a(29,"option",37),l(30,"Full Stack Developer"),s()()(),a(31,"div",27)(32,"label",28),l(33,"Initial Password"),s(),a(34,"input",38),x("ngModelChange",function(n){p(e);let r=u();return y(r.newEmployee.password,n)||(r.newEmployee.password=n),f(n)}),s()(),a(35,"div",39)(36,"button",40),l(37,"Save Employee Member"),s()()()()()()}if(i&2){let e=re(5),t=u();d(10),v("ngModel",t.newEmployee.name),d(4),v("ngModel",t.newEmployee.email),d(4),v("ngModel",t.newEmployee.designation),d(16),v("ngModel",t.newEmployee.password),d(2),b("disabled",!e.form.valid)}}function Wr(i,o){if(i&1&&w(0,"img",52),i&2){let e=u().$implicit;b("src",e.avatar,Oe)}}function Hr(i,o){if(i&1&&(l(0),de(1,"uppercase")),i&2){let e=u().$implicit;g(Be(1,1,e.name.charAt(0)))}}function Ur(i,o){if(i&1){let e=A();a(0,"tr")(1,"td",41)(2,"div",42),S("click",function(){let n=p(e).$implicit,r=u();return f(r.viewProfile(n))}),a(3,"div",43),E(4,Wr,1,1,"img",44)(5,Hr,2,3,"ng-template",null,1,Ve),s(),a(7,"div",45),l(8),s()()(),a(9,"td",46),l(10),s(),a(11,"td",47)(12,"span",48),l(13),s()(),a(14,"td",49)(15,"button",50),S("click",function(){let n=p(e).$implicit,r=u();return f(r.deleteEmployee(n.id))}),w(16,"i",51),s()()()}if(i&2){let e=o.$implicit,t=re(6);d(4),b("ngIf",e.avatar)("ngIfElse",t),d(4),g(e.name),d(2),g(e.email),d(3),P(" ",e.designation||"Specialist"," ")}}function qr(i,o){i&1&&(a(0,"tr")(1,"td",53),l(2,"No employee members found."),s()())}function Yr(i,o){if(i&1){let e=A();a(0,"div",54),S("click",function(){p(e);let n=u();return f(n.selectedEmployee=null)}),s()}}function Gr(i,o){if(i&1&&w(0,"img",73),i&2){let e=u(2);b("src",e.selectedEmployee.avatar,Oe)}}function Xr(i,o){if(i&1&&(l(0),de(1,"uppercase")),i&2){let e=u(2);g(Be(1,1,e.selectedEmployee.name.charAt(0)))}}function Zr(i,o){if(i&1&&(a(0,"div",67)(1,"label",68),l(2,"Phone Number"),s(),a(3,"div",69),l(4),s()()),i&2){let e=u(2);d(4),g(e.selectedEmployee.phone)}}function Kr(i,o){if(i&1&&(a(0,"div",67)(1,"label",68),l(2,"Office Address"),s(),a(3,"div",74),l(4),s()()),i&2){let e=u(2);d(4),g(e.selectedEmployee.address)}}function Qr(i,o){if(i&1){let e=A();a(0,"div",55)(1,"div",56)(2,"div",57)(3,"div",58)(4,"h5",59),l(5,"Employee Profile"),s(),a(6,"button",60),S("click",function(){p(e);let n=u();return f(n.selectedEmployee=null)}),s()(),a(7,"div",61)(8,"div",62)(9,"div",63),E(10,Gr,1,1,"img",64)(11,Xr,2,3,"ng-template",null,2,Ve),s(),a(13,"h4",65),l(14),s(),a(15,"div",66),l(16),s()(),a(17,"div",26)(18,"div",67)(19,"label",68),l(20,"Email Address"),s(),a(21,"div",69),l(22),s()(),E(23,Zr,5,1,"div",70)(24,Kr,5,1,"div",70),s()(),a(25,"div",71)(26,"button",72),S("click",function(){p(e);let n=u();return f(n.selectedEmployee=null)}),l(27,"Close"),s()()()()()}if(i&2){let e=re(12),t=u();d(10),b("ngIf",t.selectedEmployee.avatar)("ngIfElse",e),d(4),g(t.selectedEmployee.name),d(2),g(t.selectedEmployee.designation),d(6),g(t.selectedEmployee.email),d(),b("ngIf",t.selectedEmployee.phone),d(),b("ngIf",t.selectedEmployee.address)}}var Qt=class i{constructor(o,e){this.adminService=o;this.cdr=e}employee=[];selectedEmployee=null;showAddForm=!1;newEmployee={name:"",email:"",password:"demo123",role:"EMPLOYEE",designation:"Full Stack Developer"};ngOnInit(){this.loadEmployee()}loadEmployee(){this.adminService.getUsers("EMPLOYEE").subscribe(o=>{this.employee=o,this.cdr.detectChanges()})}viewProfile(o){this.selectedEmployee=o}addEmployee(){this.adminService.addUser(this.newEmployee).subscribe(()=>{this.loadEmployee(),this.showAddForm=!1,this.newEmployee={name:"",email:"",password:"demo123",role:"EMPLOYEE",designation:"Full Stack Developer"}})}deleteEmployee(o){confirm("Delete this employee member?")&&this.adminService.deleteUser(o).subscribe(()=>this.loadEmployee())}static \u0275fac=function(e){return new(e||i)(B(De),B(ce))};static \u0275cmp=D({type:i,selectors:[["app-employee-management"]],decls:30,vars:7,consts:[["employeeForm","ngForm"],["employeeInitial",""],["modalInitial",""],[1,"container-fluid","py-4"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],[1,"fw-bold","text-dark","mb-0"],[1,"text-muted"],[1,"btn","btn-primary",3,"click"],[1,"bi",3,"ngClass"],["class","card border-0 shadow-sm rounded-4 mb-4",4,"ngIf"],[1,"card","border-0","shadow-sm","rounded-4"],[1,"card-body","p-0"],[1,"table-responsive"],[1,"table","table-hover","align-middle","mb-0"],[1,"table-light"],[1,"ps-4","py-3","border-0"],[1,"py-3","border-0"],[1,"pe-4","py-3","border-0","text-end"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","modal-backdrop fade show",3,"click",4,"ngIf"],["class","modal fade show d-block","tabindex","-1",4,"ngIf"],[1,"card","border-0","shadow-sm","rounded-4","mb-4"],[1,"card-body","p-4","p-md-5"],[1,"fw-bold","mb-4"],[3,"ngSubmit"],[1,"row","g-3"],[1,"col-md-4"],[1,"form-label","small","fw-bold","text-muted"],["type","text","name","name","placeholder","John Doe","required","",1,"form-control","bg-light","border-0","py-3","rounded-4",3,"ngModelChange","ngModel"],["type","email","name","email","placeholder","john@luminex.com","required","",1,"form-control","bg-light","border-0","py-3","rounded-4",3,"ngModelChange","ngModel"],["name","designation","required","",1,"form-select","bg-light","border-0","py-3","rounded-4",3,"ngModelChange","ngModel"],["value","Java Developer"],["value","PHP Developer"],["value","Python Developer"],["value","AI Developer"],["value","UI/UX Designer"],["value","Full Stack Developer"],["type","password","name","password","required","",1,"form-control","bg-light","border-0","py-3","rounded-4",3,"ngModelChange","ngModel"],[1,"col-12","text-end","mt-4"],["type","submit",1,"btn","btn-primary","btn-lg","rounded-pill","px-5","shadow",3,"disabled"],[1,"ps-4","py-3"],[1,"d-flex","align-items-center","employee-name",3,"click"],[1,"employee-avatar","bg-info","text-white","me-3"],["class","img-fluid w-100 h-100 object-fit-cover","style","border-radius: 12px;",3,"src",4,"ngIf","ngIfElse"],[1,"fw-bold","text-dark"],[1,"py-3","text-muted"],[1,"py-3"],[1,"badge","bg-primary-soft","text-primary","px-3","py-2","rounded-pill"],[1,"pe-4","py-3","text-end"],[1,"btn","btn-sm","btn-light","text-danger","rounded-circle","p-2",3,"click"],[1,"bi","bi-trash","fs-6"],[1,"img-fluid","w-100","h-100","object-fit-cover",2,"border-radius","12px",3,"src"],["colspan","4",1,"text-center","py-5","text-muted"],[1,"modal-backdrop","fade","show",3,"click"],["tabindex","-1",1,"modal","fade","show","d-block"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content","border-0","shadow-lg","rounded-5","overflow-hidden"],[1,"modal-header","border-0","bg-info","text-white","p-4"],[1,"modal-title","fw-bold"],["type","button",1,"btn-close","btn-close-white",3,"click"],[1,"modal-body","p-4","p-md-5"],[1,"text-center","mb-4"],[1,"employee-avatar-lg","bg-light","text-info","mx-auto","mb-3"],["class","img-fluid w-100 h-100 object-fit-cover","style","border-radius: 20px;",3,"src",4,"ngIf","ngIfElse"],[1,"fw-bold","mb-1"],[1,"badge","bg-primary-soft","text-primary","rounded-pill","px-3"],[1,"col-12"],[1,"small","fw-bold","text-muted","text-uppercase","mb-1"],[1,"p-3","bg-light","rounded-3"],["class","col-12",4,"ngIf"],[1,"modal-footer","border-0","p-4","pt-0"],["type","button",1,"btn","btn-light","w-100","rounded-pill","py-2",3,"click"],[1,"img-fluid","w-100","h-100","object-fit-cover",2,"border-radius","20px",3,"src"],[1,"p-3","bg-light","rounded-3","small"]],template:function(e,t){e&1&&(a(0,"div",3)(1,"div",4)(2,"div")(3,"h2",5),l(4,"Employee Management"),s(),a(5,"p",6),l(6,"Manage your team of developers and specialists."),s()(),a(7,"button",7),S("click",function(){return t.showAddForm=!t.showAddForm}),w(8,"i",8),l(9),s()(),E(10,jr,38,5,"div",9),a(11,"div",10)(12,"div",11)(13,"div",12)(14,"table",13)(15,"thead",14)(16,"tr")(17,"th",15),l(18,"Name"),s(),a(19,"th",16),l(20,"Email"),s(),a(21,"th",16),l(22,"Designation"),s(),a(23,"th",17),l(24,"Action"),s()()(),a(25,"tbody"),E(26,Ur,17,5,"tr",18)(27,qr,3,0,"tr",19),s()()()()(),E(28,Yr,1,0,"div",20)(29,Qr,28,7,"div",21),s()),e&2&&(d(8),b("ngClass",t.showAddForm?"bi-x-lg":"bi-person-plus"),d(),P(" ",t.showAddForm?"Cancel":"Add Employee"," "),d(),b("ngIf",t.showAddForm),d(16),b("ngForOf",t.employee),d(),b("ngIf",t.employee.length===0),d(),b("ngIf",t.selectedEmployee),d(),b("ngIf",t.selectedEmployee))},dependencies:[$,ue,oe,pe,ae,je,Me,ke,fe,Ee,he,ze,We,be,Se,Wt],styles:[".bg-primary-soft[_ngcontent-%COMP%]{background-color:#eef2ff}.employee-name[_ngcontent-%COMP%]{cursor:pointer}.employee-name[_ngcontent-%COMP%]:hover   .fw-bold[_ngcontent-%COMP%]{color:var(--bs-primary)!important;text-decoration:underline}.employee-avatar[_ngcontent-%COMP%]{width:45px;height:45px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;overflow:hidden}.employee-avatar-lg[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:20px;font-size:2.5rem;font-weight:700;display:flex;align-items:center;justify-content:center;overflow:hidden;box-shadow:0 4px 12px #00000014}"]})};function $r(i,o){if(i&1&&(a(0,"option",37),l(1),s()),i&2){let e=o.$implicit;b("value",e.id),d(),g(e.name)}}function Jr(i,o){if(i&1){let e=A();a(0,"div",18)(1,"div",19)(2,"h5",20),l(3,"Add New Service"),s(),a(4,"form",21,0),S("ngSubmit",function(){p(e);let n=u();return f(n.addService())}),a(6,"div",22)(7,"div",23)(8,"label",24),l(9,"Service Name"),s(),a(10,"input",25),x("ngModelChange",function(n){p(e);let r=u();return y(r.newService.name,n)||(r.newService.name=n),f(n)}),s()(),a(11,"div",23)(12,"label",24),l(13,"Category"),s(),a(14,"select",26),x("ngModelChange",function(n){p(e);let r=u();return y(r.newService.categoryId,n)||(r.newService.categoryId=n),f(n)}),S("change",function(){p(e);let n=u();return f(n.updateCategoryName())}),E(15,$r,2,2,"option",27),s()(),a(16,"div",23)(17,"label",24),l(18,"Price (BDT)"),s(),a(19,"input",28),x("ngModelChange",function(n){p(e);let r=u();return y(r.newService.price,n)||(r.newService.price=n),f(n)}),s()(),a(20,"div",23)(21,"label",24),l(22,"Pricing Type"),s(),a(23,"select",29),x("ngModelChange",function(n){p(e);let r=u();return y(r.newService.priceType,n)||(r.newService.priceType=n),f(n)}),a(24,"option",30),l(25,"FIXED"),s(),a(26,"option",31),l(27,"MONTHLY"),s()()(),a(28,"div",23)(29,"label",24),l(30,"Delivery Days"),s(),a(31,"input",32),x("ngModelChange",function(n){p(e);let r=u();return y(r.newService.deliveryDays,n)||(r.newService.deliveryDays=n),f(n)}),s()(),a(32,"div",33)(33,"label",24),l(34,"Description"),s(),a(35,"textarea",34),x("ngModelChange",function(n){p(e);let r=u();return y(r.newService.description,n)||(r.newService.description=n),f(n)}),s()(),a(36,"div",35)(37,"button",36),l(38,"Create Service"),s()()()()()()}if(i&2){let e=re(5),t=u();d(10),v("ngModel",t.newService.name),d(4),v("ngModel",t.newService.categoryId),d(),b("ngForOf",t.categories),d(4),v("ngModel",t.newService.price),d(4),v("ngModel",t.newService.priceType),d(8),v("ngModel",t.newService.deliveryDays),d(4),v("ngModel",t.newService.description),d(2),b("disabled",!e.form.valid)}}function ea(i,o){i&1&&(a(0,"span",49),l(1,"/mo"),s())}function ta(i,o){if(i&1){let e=A();a(0,"tr")(1,"td",38)(2,"div",39),l(3),s(),a(4,"div",40),l(5),s()(),a(6,"td",41),l(7),s(),a(8,"td",42),l(9),E(10,ea,2,0,"span",43),s(),a(11,"td",44)(12,"span",45),l(13),s()(),a(14,"td",46)(15,"button",47),S("click",function(){let n=p(e).$implicit,r=u();return f(r.deleteService(n.id))}),w(16,"i",48),s()()()}if(i&2){let e=o.$implicit;d(3),g(e.name),d(2),P("",e.deliveryDays," delivery"),d(2),g(e.categoryName),d(2),P("BDT ",e.price," "),d(),b("ngIf",e.priceType==="MONTHLY"),d(2),b("ngClass",e.isActive?"bg-success":"bg-secondary"),d(),g(e.isActive?"Active":"Inactive")}}function na(i,o){i&1&&(a(0,"tr")(1,"td",50),l(2,"No services found."),s()())}var $t=class i{constructor(o,e){this.adminService=o;this.catalogueService=e}services=[];categories=[];showAddForm=!1;newService={name:"",categoryId:"1",categoryName:"Web Development",price:0,priceType:"FIXED",deliveryDays:"",description:"",isActive:!0};ngOnInit(){this.loadServices(),this.catalogueService.getCategories().subscribe(o=>{this.categories=o})}loadServices(){this.catalogueService.getServices().subscribe(o=>{this.services=o})}updateCategoryName(){let o=this.categories.find(e=>e.id===this.newService.categoryId);o&&(this.newService.categoryName=o.name)}addService(){this.adminService.addService(this.newService).subscribe(()=>{this.loadServices(),this.showAddForm=!1,this.newService={name:"",categoryId:"1",categoryName:"Web Development",price:0,priceType:"FIXED",deliveryDays:"",description:"",isActive:!0}})}deleteService(o){confirm("Are you sure?")&&this.adminService.deleteService(o).subscribe(()=>{this.loadServices()})}static \u0275fac=function(e){return new(e||i)(B(De),B(Yi))};static \u0275cmp=D({type:i,selectors:[["app-service-management"]],decls:31,vars:5,consts:[["serviceForm","ngForm"],[1,"container-fluid","py-4"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],[1,"fw-bold","text-dark","mb-0"],[1,"text-muted"],[1,"btn","btn-primary",3,"click"],[1,"bi",3,"ngClass"],["class","card border-0 shadow-sm rounded-4 mb-4",4,"ngIf"],[1,"card","border-0","shadow-sm","rounded-4"],[1,"card-body","p-0"],[1,"table-responsive"],[1,"table","table-hover","align-middle","mb-0"],[1,"table-light"],[1,"ps-4","py-3","border-0"],[1,"py-3","border-0"],[1,"pe-4","py-3","border-0","text-end"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"card","border-0","shadow-sm","rounded-4","mb-4"],[1,"card-body","p-4"],[1,"fw-bold","mb-3"],[3,"ngSubmit"],[1,"row","g-3"],[1,"col-md-4"],[1,"form-label"],["type","text","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["name","categoryId","required","",1,"form-select",3,"ngModelChange","change","ngModel"],[3,"value",4,"ngFor","ngForOf"],["type","number","name","price","required","",1,"form-control",3,"ngModelChange","ngModel"],["name","priceType",1,"form-select",3,"ngModelChange","ngModel"],["value","FIXED"],["value","MONTHLY"],["type","text","name","deliveryDays","placeholder","e.g. 7",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-12"],["name","description","rows","2",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-12","text-end"],["type","submit",1,"btn","btn-primary","px-4",3,"disabled"],[3,"value"],[1,"ps-4","py-3"],[1,"fw-bold","text-dark"],[1,"small","text-muted"],[1,"py-3","text-muted"],[1,"py-3","fw-bold","text-dark"],["class","fw-normal text-muted small",4,"ngIf"],[1,"py-3"],[1,"badge",3,"ngClass"],[1,"pe-4","py-3","text-end"],[1,"btn","btn-sm","btn-light","text-danger",3,"click"],[1,"bi","bi-trash"],[1,"fw-normal","text-muted","small"],["colspan","5",1,"text-center","py-5","text-muted"]],template:function(e,t){e&1&&(a(0,"div",1)(1,"div",2)(2,"div")(3,"h2",3),l(4,"Service Config"),s(),a(5,"p",4),l(6,"Manage available services and their pricing."),s()(),a(7,"div")(8,"button",5),S("click",function(){return t.showAddForm=!t.showAddForm}),w(9,"i",6),l(10),s()()(),E(11,Jr,39,8,"div",7),a(12,"div",8)(13,"div",9)(14,"div",10)(15,"table",11)(16,"thead",12)(17,"tr")(18,"th",13),l(19,"Service Name"),s(),a(20,"th",14),l(21,"Category"),s(),a(22,"th",14),l(23,"Pricing"),s(),a(24,"th",14),l(25,"Status"),s(),a(26,"th",15),l(27,"Action"),s()()(),a(28,"tbody"),E(29,ta,17,7,"tr",16)(30,na,3,0,"tr",17),s()()()()()()),e&2&&(d(9),b("ngClass",t.showAddForm?"bi-x-lg":"bi-plus-lg"),d(),P(" ",t.showAddForm?"Cancel":"New Service"," "),d(),b("ngIf",t.showAddForm),d(18),b("ngForOf",t.services),d(),b("ngIf",t.services.length===0))},dependencies:[$,ue,oe,pe,ae,je,Me,ke,fe,Ui,Ee,he,ze,We,be,Se],encapsulation:2})};function oa(i,o){if(i&1&&(a(0,"div",28),w(1,"div",29),a(2,"div",30),l(3),s()()),i&2){let e=o.$implicit;d(),Le("height",e.val,"%"),d(2),g(e.name)}}function ra(i,o){if(i&1&&(a(0,"div",31)(1,"div",32)(2,"div",33),w(3,"i",34),s(),a(4,"div")(5,"div",35),l(6),s(),a(7,"div",36),l(8),de(9,"date"),s()()(),a(10,"div",37)(11,"div",38),l(12),s(),a(13,"span",39),l(14,"PAID"),s()()()),i&2){let e=o.$implicit;d(6),g(e.client),d(2),g(Be(9,3,e.date)),d(4),P("BDT ",e.amount)}}var Jt=class i{constructor(o,e){this.paymentService=o;this.cdr=e}months=[{name:"Jan",val:65},{name:"Feb",val:59},{name:"Mar",val:80},{name:"Apr",val:81},{name:"May",val:56},{name:"Jun",val:55},{name:"Jul",val:40}];transactions=[];ngOnInit(){this.paymentService.getPayments().subscribe(o=>{this.transactions=o.slice(0,5),this.cdr.detectChanges()})}static \u0275fac=function(e){return new(e||i)(B(Yt),B(ce))};static \u0275cmp=D({type:i,selectors:[["app-revenue"]],decls:59,vars:2,consts:[[1,"container-fluid","py-4"],[1,"row","g-4","mb-5"],[1,"col-md-3"],[1,"card","border-0","shadow-sm","rounded-4","p-4","text-center"],[1,"small","fw-bold","text-muted","text-uppercase","mb-1"],[1,"h3","fw-bold","text-dark"],[1,"small","text-success","fw-bold","mt-2"],[1,"bi","bi-arrow-up"],[1,"small","text-danger","fw-bold","mt-2"],[1,"bi","bi-arrow-down"],[1,"card","border-0","shadow-sm","rounded-4","p-4","text-center","bg-primary","text-white"],[1,"small","fw-bold","opacity-75","text-uppercase","mb-1"],[1,"h3","fw-bold"],[1,"small","opacity-75","mt-2"],[1,"row","g-4"],[1,"col-lg-8"],[1,"card","border-0","shadow-sm","rounded-4","p-4","h-100"],[1,"d-flex","justify-content-between","align-items-center","mb-5"],[1,"fw-bold","mb-0"],[1,"form-select","border-0","bg-light","rounded-pill","w-auto","px-4","py-2","small","fw-bold"],[1,"revenue-chart","d-flex","align-items-end","justify-content-between","px-3",2,"height","250px"],["class","chart-bar-wrapper text-center",4,"ngFor","ngForOf"],[1,"col-lg-4"],[1,"card","border-0","shadow-sm","rounded-4","h-100"],[1,"card-header","bg-white","border-0","pt-4","pb-0","px-4"],[1,"card-body","p-4"],["class","d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom",4,"ngFor","ngForOf"],[1,"btn","btn-outline-primary","w-100","rounded-pill","py-2","fw-bold","small"],[1,"chart-bar-wrapper","text-center"],[1,"chart-bar","bg-primary","rounded-pill","mb-2","mx-auto",2,"width","25px","transition","height 1s ease"],[1,"small","text-muted","fw-bold"],[1,"d-flex","align-items-center","justify-content-between","mb-4","pb-3","border-bottom"],[1,"d-flex","align-items-center"],[1,"bg-light","rounded-circle","p-2","me-3"],[1,"bi","bi-person-circle","fs-5","text-primary"],[1,"fw-bold","small","text-dark"],[1,"text-muted",2,"font-size","11px"],[1,"text-end"],[1,"fw-bold","text-dark","small"],[1,"badge","bg-success-soft","text-success","p-1","rounded",2,"font-size","9px"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),l(5,"Total Revenue"),s(),a(6,"div",5),l(7,"$124BDT 124,500"),s(),a(8,"div",6),w(9,"i",7),l(10," 12.5%"),s()()(),a(11,"div",2)(12,"div",3)(13,"div",4),l(14,"Subscriptions"),s(),a(15,"div",5),l(16,"$45BDT 45,200"),s(),a(17,"div",6),w(18,"i",7),l(19," 8.2%"),s()()(),a(20,"div",2)(21,"div",3)(22,"div",4),l(23,"Services"),s(),a(24,"div",5),l(25,"$79BDT 79,300"),s(),a(26,"div",8),w(27,"i",9),l(28," 2.1%"),s()()(),a(29,"div",2)(30,"div",10)(31,"div",11),l(32,"Projected"),s(),a(33,"div",12),l(34,"$150BDT 150,000"),s(),a(35,"div",13),l(36,"End of Quarter"),s()()()(),a(37,"div",14)(38,"div",15)(39,"div",16)(40,"div",17)(41,"h5",18),l(42,"Revenue Growth"),s(),a(43,"select",19)(44,"option"),l(45,"Last 6 Months"),s(),a(46,"option"),l(47,"Year 2026"),s()()(),a(48,"div",20),E(49,oa,4,3,"div",21),s()()(),a(50,"div",22)(51,"div",23)(52,"div",24)(53,"h5",18),l(54,"Latest Income"),s()(),a(55,"div",25),E(56,ra,15,5,"div",26),a(57,"button",27),l(58,"View Full Report"),s()()()()()()),e&2&&(d(49),b("ngForOf",t.months),d(7),b("ngForOf",t.transactions))},dependencies:[$,oe,ot],styles:[".bg-primary[_ngcontent-%COMP%]{background:linear-gradient(135deg,#4f46e5,#3730a3)!important}.bg-success-soft[_ngcontent-%COMP%]{background-color:#dcfce7}.revenue-chart[_ngcontent-%COMP%]{border-bottom:2px solid #f1f5f9}.chart-bar[_ngcontent-%COMP%]{background:linear-gradient(to top,#4f46e5,#818cf8)!important;box-shadow:0 5px 15px #4f46e533}.chart-bar-wrapper[_ngcontent-%COMP%]{width:100%}.card[_ngcontent-%COMP%]{transition:all .3s ease}.card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 15px 30px #0000000d!important}"]})};function aa(i,o){if(i&1){let e=A();a(0,"tr")(1,"td",26)(2,"div",27),l(3),s(),a(4,"div",28),l(5),s()(),a(6,"td",29)(7,"div",30),l(8),s()(),a(9,"td",31),l(10),de(11,"number"),s(),a(12,"td",29)(13,"span",32),l(14),s()(),a(15,"td",29)(16,"span",33),l(17),s()(),a(18,"td",34)(19,"button",35),S("click",function(){let n=p(e).$implicit,r=u();return f(r.generateInvoice(n))}),w(20,"i",36),l(21,"Generate Invoice "),s()(),a(22,"td",37),l(23),de(24,"date"),s()()}if(i&2){let e=o.$implicit;d(3),g(e.client),d(2),P("ID: ",e.clientId),d(3),g(e.item),d(2),P("BDT ",xt(11,8,e.amount,"1.2-2")),d(4),g(e.method),d(2),b("ngClass",e.status==="PAID"?"bg-success":"bg-warning"),d(),g(e.status),d(6),g(xt(24,11,e.date,"mediumDate"))}}var en=class i{constructor(o,e,t){this.paymentService=o;this.cdr=e;this.pdfGeneratorService=t}payments=[];ngOnInit(){this.loadPayments()}loadPayments(){this.paymentService.getPayments().subscribe(o=>{this.payments=o,this.cdr.detectChanges()})}generateInvoice(o){let e={id:o.id,clientName:o.client,service:o.item,amount:o.amount,date:o.date};this.pdfGeneratorService.generateInvoicePdf(e)}static \u0275fac=function(e){return new(e||i)(B(Yt),B(ce),B(Gi))};static \u0275cmp=D({type:i,selectors:[["app-admin-payments"]],decls:55,vars:1,consts:[[1,"container-fluid","py-4"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],[1,"fw-bold","text-dark","mb-0"],[1,"text-muted"],[1,"d-flex","gap-2"],[1,"btn","btn-outline-primary"],[1,"bi","bi-filter","me-2"],[1,"btn","btn-primary"],[1,"bi","bi-plus-lg","me-2"],[1,"row","g-4","mb-4"],[1,"col-md-4"],[1,"card","border-0","shadow-sm","rounded-4","p-4","bg-primary","text-white"],[1,"small","fw-bold","opacity-75","text-uppercase"],[1,"h2","fw-bold","mb-0"],[1,"card","border-0","shadow-sm","rounded-4","p-4","bg-warning","text-dark"],[1,"card","border-0","shadow-sm","rounded-4","p-4","bg-success","text-white"],[1,"card","border-0","shadow-sm","rounded-4"],[1,"card-body","p-0"],[1,"table-responsive"],[1,"table","table-hover","align-middle","mb-0"],[1,"table-light"],[1,"ps-4","py-3","border-0"],[1,"py-3","border-0"],[1,"py-3","border-0","text-center"],[1,"pe-4","py-3","border-0","text-end"],[4,"ngFor","ngForOf"],[1,"ps-4","py-3"],[1,"fw-bold","text-dark"],[1,"small","text-muted"],[1,"py-3"],[1,"fw-medium","text-dark"],[1,"py-3","fw-bold","text-dark"],[1,"badge","bg-light","text-dark","border","px-2","py-1"],[1,"badge",3,"ngClass"],[1,"py-3","text-center"],[1,"btn","btn-sm","btn-outline-secondary",3,"click"],[1,"bi","bi-file-earmark-pdf","me-2"],[1,"pe-4","py-3","text-end","text-muted"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"div",1)(2,"div")(3,"h2",2),l(4,"Client Payments"),s(),a(5,"p",3),l(6,"Monitor and manage all client transactions."),s()(),a(7,"div",4)(8,"button",5),w(9,"i",6),l(10,"Filter"),s(),a(11,"button",7),w(12,"i",8),l(13,"Manual Record"),s()()(),a(14,"div",9)(15,"div",10)(16,"div",11)(17,"div",12),l(18,"Total Received"),s(),a(19,"div",13),l(20,"BDT 35,69,500.00"),s()()(),a(21,"div",10)(22,"div",14)(23,"div",12),l(24,"Pending Invoices"),s(),a(25,"div",13),l(26,"BDT 4,53,200.00"),s()()(),a(27,"div",10)(28,"div",15)(29,"div",12),l(30,"This Month"),s(),a(31,"div",13),l(32,"BDT 9,79,000.00"),s()()()(),a(33,"div",16)(34,"div",17)(35,"div",18)(36,"table",19)(37,"thead",20)(38,"tr")(39,"th",21),l(40,"Client"),s(),a(41,"th",22),l(42,"Service / Plan"),s(),a(43,"th",22),l(44,"Amount"),s(),a(45,"th",22),l(46,"Method"),s(),a(47,"th",22),l(48,"Status"),s(),a(49,"th",23),l(50,"Actions"),s(),a(51,"th",24),l(52,"Date"),s()()(),a(53,"tbody"),E(54,aa,25,14,"tr",25),s()()()()()()),e&2&&(d(54),b("ngForOf",t.payments))},dependencies:[$,ue,oe,ae,Li,ot],styles:[".bg-primary[_ngcontent-%COMP%]{background:linear-gradient(135deg,#4f46e5,#3730a3)!important}.bg-success[_ngcontent-%COMP%]{background:linear-gradient(135deg,#10b981,#059669)!important}.bg-warning[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f59e0b,#d97706)!important}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:.025em}"]})};var sa=new O("cdk-dir-doc",{providedIn:"root",factory:()=>m(U)}),la=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Zi(i){let o=i?.toLowerCase()||"";return o==="auto"&&typeof navigator<"u"&&navigator?.language?la.test(navigator.language)?"rtl":"ltr":o==="rtl"?"rtl":"ltr"}var St=(()=>{class i{get value(){return this.valueSignal()}valueSignal=bt("ltr");change=new qe;constructor(){let e=m(sa,{optional:!0});if(e){let t=e.body?e.body.dir:null,n=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Zi(t||n||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var te=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=N({})}return i})();var da=["*"];var ca=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],ma=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],ua=new O("MAT_CARD_CONFIG"),Ki=(()=>{class i{appearance;constructor(){let e=m(ua,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,n){t&2&&W("mat-mdc-card-outlined",n.appearance==="outlined")("mdc-card--outlined",n.appearance==="outlined")("mat-mdc-card-filled",n.appearance==="filled")("mdc-card--filled",n.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:da,decls:1,vars:0,template:function(t,n){t&1&&(we(),q(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return i})(),Qi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=L({type:i,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return i})();var $i=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=L({type:i,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return i})();var Ji=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:ma,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,n){t&1&&(we(ca),q(0),Ye(1,"div",0),q(2,1),Ge(),q(3,2))},encapsulation:2,changeDetection:0})}return i})();var eo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=N({imports:[te]})}return i})();function Et(i){return i.buttons===0||i.detail===0}function Mt(i){let o=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}var Fn;function to(){if(Fn==null){let i=typeof document<"u"?document.head:null;Fn=!!(i&&(i.createShadowRoot||i.attachShadow))}return Fn}function Pn(i){if(to()){let o=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function se(i){return i.composedPath?i.composedPath()[0]:i.target}var Ln;try{Ln=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Ln=!1}var z=(()=>{class i{_platformId=m(xi);isBrowser=this._platformId?Ni(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ln)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var kt;function no(){if(kt==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>kt=!0}))}finally{kt=kt||!1}return kt}function rt(i){return no()?i:!!i.capture}function me(i){return i instanceof j?i.nativeElement:i}var io=new O("cdk-input-modality-detector-options"),oo={ignoreKeys:[18,17,224,91,16]},ro=650,Nn={passive:!0,capture:!0},ao=(()=>{class i{_platform=m(z);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ui(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=se(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<ro||(this._modality.next(Et(e)?"keyboard":"mouse"),this._mostRecentTarget=se(e))};_onTouchstart=e=>{if(Mt(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=se(e)};constructor(){let e=m(R),t=m(U),n=m(io,{optional:!0});if(this._options=H(H({},oo),n),this.modalityDetected=this._modality.pipe(Lt(1)),this.modalityChanged=this.modalityDetected.pipe(Dn()),this._platform.isBrowser){let r=m(le).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,Nn),r.listen(t,"mousedown",this._onMousedown,Nn),r.listen(t,"touchstart",this._onTouchstart,Nn)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Dt=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(Dt||{}),so=new O("cdk-focus-monitor-default-options"),tn=rt({passive:!0,capture:!0}),Bn=(()=>{class i{_ngZone=m(R);_platform=m(z);_inputModalityDetector=m(ao);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=m(U);_stopInputModalityDetector=new F;constructor(){let e=m(so,{optional:!0});this._detectionMode=e?.detectionMode||Dt.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=se(e);for(let n=t;n;n=n.parentElement)e.type==="focus"?this._onFocus(e,n):this._onBlur(e,n)};monitor(e,t=!1){let n=me(e);if(!this._platform.isBrowser||n.nodeType!==1)return et();let r=Pn(n)||this._document,c=this._elementInfo.get(n);if(c)return t&&(c.checkChildren=!0),c.subject;let h={checkChildren:t,subject:new F,rootNode:r};return this._elementInfo.set(n,h),this._registerGlobalListeners(h),h.subject}stopMonitoring(e){let t=me(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n))}focusVia(e,t,n){let r=me(e),c=this._document.activeElement;r===c?this._getClosestElementsInfo(r).forEach(([h,_])=>this._originChanged(h,t,_)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(n))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Dt.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Dt.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?ro:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(e,t){let n=this._elementInfo.get(t),r=se(e);!n||!n.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),n)}_onBlur(e,t){let n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,n=this._rootNodeFocusListenerCount.get(t)||0;n||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,tn),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,tn)}),this._rootNodeFocusListenerCount.set(t,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ve(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let n=this._rootNodeFocusListenerCount.get(t);n>1?this._rootNodeFocusListenerCount.set(t,n-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,tn),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,tn),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,n){this._setClasses(e,t),this._emitOrigin(n,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((n,r)=>{(r===e||n.checkChildren&&r.contains(e))&&t.push([r,n])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let c=0;c<r.length;c++)if(r[c].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var nn=new WeakMap,Te=(()=>{class i{_appRef;_injector=m(Q);_environmentInjector=m(tt);load(e){let t=this._appRef=this._appRef||this._injector.get(yt),n=nn.get(t);n||(n={loaders:new Set,refs:[]},nn.set(t,n),t.onDestroy(()=>{nn.get(t)?.refs.forEach(r=>r.destroy()),nn.delete(t)})),n.loaders.has(e)||(n.loaders.add(e),n.refs.push(jt(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var on;function fa(){if(on===void 0&&(on=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(on=i.trustedTypes.createPolicy("angular#components",{createHTML:o=>o}))}return on}function ha(i){return fa()?.createHTML(i)||i}function lo(i,o,e){let t=e.sanitize(wi.HTML,o);i.innerHTML=ha(t||"")}function at(i){return Array.isArray(i)?i:[i]}var co=new Set,Ze,rn=(()=>{class i{_platform=m(z);_nonce=m(Ci,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ga}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&ba(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ba(i,o){if(!co.has(i))try{Ze||(Ze=document.createElement("style"),o&&Ze.setAttribute("nonce",o),Ze.setAttribute("type","text/css"),document.head.appendChild(Ze)),Ze.sheet&&(Ze.sheet.insertRule(`@media ${i} {body{ }}`,0),co.add(i))}catch(e){console.error(e)}}function ga(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var Vn=(()=>{class i{_mediaMatcher=m(rn);_zone=m(R);_queries=new Map;_destroySubject=new F;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return mo(at(e)).some(n=>this._registerQuery(n).mql.matches)}observe(e){let n=mo(at(e)).map(c=>this._registerQuery(c).observable),r=fi(n);return r=hi(r.pipe(_i(1)),r.pipe(Lt(1),gi(0))),r.pipe(ft(c=>{let h={matches:!1,breakpoints:{}};return c.forEach(({matches:_,query:M})=>{h.matches=h.matches||_,h.breakpoints[M]=_}),h}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),r={observable:new Je(c=>{let h=_=>this._zone.run(()=>c.next(_));return t.addListener(h),()=>{t.removeListener(h)}}).pipe(ht(t),ft(({matches:c})=>({query:e,matches:c})),ve(this._destroySubject)),mql:t};return this._queries.set(e,r),r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function mo(i){return i.map(o=>o.split(",")).reduce((o,e)=>o.concat(e)).map(o=>o.trim())}var _a=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var uo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=N({providers:[_a]})}return i})();var po=new O("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),fo=new O("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),va=0,zn=(()=>{class i{_ngZone=m(R);_defaultOptions=m(fo,{optional:!0});_liveElement;_document=m(U);_sanitizer=m(Vi);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=m(po,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let n=this._defaultOptions,r,c;return t.length===1&&typeof t[0]=="number"?c=t[0]:[r,c]=t,this.clear(),clearTimeout(this._previousTimeout),r||(r=n&&n.politeness?n.politeness:"polite"),c==null&&n&&(c=n.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(h=>this._currentResolve=h)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:lo(this._liveElement,e,this._sanitizer),typeof c=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),c)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),n=this._document.createElement("div");for(let r=0;r<t.length;r++)t[r].remove();return n.classList.add(e),n.classList.add("cdk-visually-hidden"),n.setAttribute("aria-atomic","true"),n.setAttribute("aria-live","polite"),n.id=`cdk-live-announcer-${va++}`,this._document.body.appendChild(n),n}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<t.length;n++){let r=t[n],c=r.getAttribute("aria-owns");c?c.indexOf(e)===-1&&r.setAttribute("aria-owns",c+" "+e):r.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var jn={},ge=class i{_appId=m(yi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,e=!1){return this._appId!=="ng"&&(o+=this._appId),jn.hasOwnProperty(o)||(jn[o]=0),`${o}${e?i._infix+"-":""}${jn[o]++}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})};function Y(i){return i==null?"":typeof i=="string"?i:`${i}px`}function st(i){return i!=null&&`${i}`!="false"}var Ke;function bo(){if(Ke==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Ke=!1,Ke;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Ke=!0;else{let i=Element.prototype.scrollTo;i?Ke=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Ke=!1}}return Ke}function Wn(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var lt,go=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Hn(){if(lt)return lt;if(typeof document!="object"||!document)return lt=new Set(go),lt;let i=document.createElement("input");return lt=new Set(go.filter(o=>(i.setAttribute("type",o),i.type===o))),lt}var Un=class{_box;_destroyed=new F;_resizeSubject=new F;_resizeObserver;_elementObservables=new Map;constructor(o){this._box=o,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(o){return this._elementObservables.has(o)||this._elementObservables.set(o,new Je(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(o,{box:this._box}),()=>{this._resizeObserver?.unobserve(o),t.unsubscribe(),this._elementObservables.delete(o)}}).pipe(Ie(e=>e.some(t=>t.target===o)),Rn({bufferSize:1,refCount:!0}),ve(this._destroyed))),this._elementObservables.get(o)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},_o=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=m(R);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let n=t?.box||"content-box";return this._observers.has(n)||this._observers.set(n,new Un(n)),this._observers.get(n).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var vo={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var ya=new O("MATERIAL_ANIMATIONS"),yo=null;function xa(){return m(ya,{optional:!0})?.animationsDisabled||m(Nt,{optional:!0})==="NoopAnimations"?"di-disabled":(yo??=m(rn).matchMedia("(prefers-reduced-motion)").matches,yo?"reduced-motion":"enabled")}function Re(){return xa()!=="enabled"}var Ca=["notch"],wa=["matFormFieldNotchedOutline",""],Sa=["*"],xo=["iconPrefixContainer"],Co=["textPrefixContainer"],wo=["iconSuffixContainer"],So=["textSuffixContainer"],Ea=["textField"],Ma=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],ka=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Da(i,o){i&1&&w(0,"span",21)}function Ta(i,o){if(i&1&&(a(0,"label",20),q(1,1),ne(2,Da,1,0,"span",21),s()),i&2){let e=u(2);b("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),Ce("for",e._control.disableAutomaticLabeling?null:e._control.id),d(2),ie(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Ra(i,o){if(i&1&&ne(0,Ta,3,5,"label",20),i&2){let e=u();ie(e._hasFloatingLabel()?0:-1)}}function Ia(i,o){i&1&&w(0,"div",7)}function Oa(i,o){}function Aa(i,o){if(i&1&&E(0,Oa,0,0,"ng-template",13),i&2){u(2);let e=re(1);b("ngTemplateOutlet",e)}}function Fa(i,o){if(i&1&&(a(0,"div",9),ne(1,Aa,1,1,null,13),s()),i&2){let e=u();b("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),d(),ie(e._forceDisplayInfixLabel()?-1:1)}}function Pa(i,o){i&1&&(a(0,"div",10,2),q(2,2),s())}function La(i,o){i&1&&(a(0,"div",11,3),q(2,3),s())}function Na(i,o){}function Ba(i,o){if(i&1&&E(0,Na,0,0,"ng-template",13),i&2){u();let e=re(1);b("ngTemplateOutlet",e)}}function Va(i,o){i&1&&(a(0,"div",14,4),q(2,4),s())}function za(i,o){i&1&&(a(0,"div",15,5),q(2,5),s())}function ja(i,o){i&1&&w(0,"div",16)}function Wa(i,o){i&1&&(a(0,"div",18),q(1,6),s())}function Ha(i,o){if(i&1&&(a(0,"mat-hint",22),l(1),s()),i&2){let e=u(2);b("id",e._hintLabelId),d(),g(e.hintLabel)}}function Ua(i,o){if(i&1&&(a(0,"div",19),ne(1,Ha,2,2,"mat-hint",22),q(2,7),w(3,"div",23),q(4,8),s()),i&2){let e=u();d(),ie(e.hintLabel?1:-1)}}var Tt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=L({type:i,selectors:[["mat-label"]]})}return i})(),qa=new O("MatError");var qn=(()=>{class i{align="start";id=m(ge).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=L({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,n){t&2&&(Vt("id",n.id),Ce("align",null),W("mat-mdc-form-field-hint-end",n.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),Ya=new O("MatPrefix");var Ga=new O("MatSuffix");var Io=new O("FloatingLabelParent"),Eo=(()=>{class i{_elementRef=m(j);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=m(_o);_ngZone=m(R);_parent=m(Io);_resizeSubscription=new $e;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Xa(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=L({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,n){t&2&&W("mdc-floating-label--float-above",n.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function Xa(i){let o=i;if(o.offsetParent!==null)return o.scrollWidth;let e=o.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Mo="mdc-line-ripple--active",an="mdc-line-ripple--deactivating",ko=(()=>{class i{_elementRef=m(j);_cleanupTransitionEnd;constructor(){let e=m(R),t=m(xe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(an),e.add(Mo)}deactivate(){this._elementRef.nativeElement.classList.add(an)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(an);e.propertyName==="opacity"&&n&&t.remove(Mo,an)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=L({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Do=(()=>{class i{_elementRef=m(j);_ngZone=m(R);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,n){if(t&1&&nt(Ca,5),t&2){let r;Z(r=K())&&(n._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,n){t&2&&W("mdc-notched-outline--notched",n.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:wa,ngContentSelectors:Sa,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,n){t&1&&(we(),Pe(0,"div",1),Ye(1,"div",2,0),q(3),Ge(),Pe(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),Yn=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=L({type:i})}return i})();var Gn=new O("MatFormField"),Za=new O("MAT_FORM_FIELD_DEFAULT_OPTIONS"),To="fill",Ka="auto",Ro="fixed",Qa="translateY(-50%)",sn=(()=>{class i{_elementRef=m(j);_changeDetectorRef=m(ce);_platform=m(z);_idGenerator=m(ge);_ngZone=m(R);_defaults=m(Za,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ct("iconPrefixContainer");_textPrefixContainerSignal=Ct("textPrefixContainer");_iconSuffixContainerSignal=Ct("iconSuffixContainer");_textSuffixContainerSignal=Ct("textSuffixContainer");_prefixSuffixContainers=zt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Ii(Tt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=st(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Ka}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||To;this._appearanceSignal.set(t)}_appearanceSignal=bt(To);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ro}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Ro}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new F;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Re();constructor(){let e=this._defaults,t=m(St);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),gt(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=zt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,n="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(ht([void 0,void 0]),ft(()=>[t.errorState,t.userAriaDescribedBy]),Tn(),Ie(([[r,c],[h,_]])=>r!==h||c!==_)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ve(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),bi(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Ai({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=zt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(h=>h.align==="start"):null,c=this._hintChildren?this._hintChildren.find(h=>h.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),c&&e.push(c.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,n;if(t){let r=this._describedByIds||e;n=e.concat(t.filter(c=>c&&!r.includes(c)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,c=e?.getBoundingClientRect().width??0,h=t?.getBoundingClientRect().width??0,_=n?.getBoundingClientRect().width??0,M=r?.getBoundingClientRect().width??0,C=this._currentDirection==="rtl"?"-1":"1",I=`${c+h}px`,ee=`calc(${C} * (${I} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,X=`var(--mat-mdc-form-field-label-transform, ${Qa} translateX(${ee}))`,G=c+h+_+M;return[X,G]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,n,r){if(t&1&&(ki(r,n._labelChild,Tt,5),Mi(r,Yn,5)(r,Ya,5)(r,Ga,5)(r,qa,5)(r,qn,5)),t&2){An();let c;Z(c=K())&&(n._formFieldControl=c.first),Z(c=K())&&(n._prefixChildren=c),Z(c=K())&&(n._suffixChildren=c),Z(c=K())&&(n._errorChildren=c),Z(c=K())&&(n._hintChildren=c)}},viewQuery:function(t,n){if(t&1&&(Di(n._iconPrefixContainerSignal,xo,5)(n._textPrefixContainerSignal,Co,5)(n._iconSuffixContainerSignal,wo,5)(n._textSuffixContainerSignal,So,5),nt(Ea,5)(xo,5)(Co,5)(wo,5)(So,5)(Eo,5)(Do,5)(ko,5)),t&2){An(4);let r;Z(r=K())&&(n._textField=r.first),Z(r=K())&&(n._iconPrefixContainer=r.first),Z(r=K())&&(n._textPrefixContainer=r.first),Z(r=K())&&(n._iconSuffixContainer=r.first),Z(r=K())&&(n._textSuffixContainer=r.first),Z(r=K())&&(n._floatingLabel=r.first),Z(r=K())&&(n._notchedOutline=r.first),Z(r=K())&&(n._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,n){t&2&&W("mat-mdc-form-field-label-always-float",n._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",n._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",n._hasIconSuffix)("mat-form-field-invalid",n._control.errorState)("mat-form-field-disabled",n._control.disabled)("mat-form-field-autofilled",n._control.autofilled)("mat-form-field-appearance-fill",n.appearance=="fill")("mat-form-field-appearance-outline",n.appearance=="outline")("mat-form-field-hide-placeholder",n._hasFloatingLabel()&&!n._shouldLabelFloat())("mat-primary",n.color!=="accent"&&n.color!=="warn")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("ng-untouched",n._shouldForward("untouched"))("ng-touched",n._shouldForward("touched"))("ng-pristine",n._shouldForward("pristine"))("ng-dirty",n._shouldForward("dirty"))("ng-valid",n._shouldForward("valid"))("ng-invalid",n._shouldForward("invalid"))("ng-pending",n._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[it([{provide:Gn,useExisting:i},{provide:Io,useExisting:i}])],ngContentSelectors:ka,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,n){if(t&1&&(we(Ma),E(0,Ra,1,1,"ng-template",null,0,Ve),a(2,"div",6,1),S("click",function(c){return n._control.onContainerClick(c)}),ne(4,Ia,1,0,"div",7),a(5,"div",8),ne(6,Fa,2,2,"div",9),ne(7,Pa,3,0,"div",10),ne(8,La,3,0,"div",11),a(9,"div",12),ne(10,Ba,1,1,null,13),q(11),s(),ne(12,Va,3,0,"div",14),ne(13,za,3,0,"div",15),s(),ne(14,ja,1,0,"div",16),s(),a(15,"div",17),ne(16,Wa,2,0,"div",18)(17,Ua,5,1,"div",19),s()),t&2){let r;d(2),W("mdc-text-field--filled",!n._hasOutline())("mdc-text-field--outlined",n._hasOutline())("mdc-text-field--no-label",!n._hasFloatingLabel())("mdc-text-field--disabled",n._control.disabled)("mdc-text-field--invalid",n._control.errorState),d(2),ie(!n._hasOutline()&&!n._control.disabled?4:-1),d(2),ie(n._hasOutline()?6:-1),d(),ie(n._hasIconPrefix?7:-1),d(),ie(n._hasTextPrefix?8:-1),d(2),ie(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),d(2),ie(n._hasTextSuffix?12:-1),d(),ie(n._hasIconSuffix?13:-1),d(),ie(n._hasOutline()?-1:14),d(),W("mat-mdc-form-field-subscript-dynamic-size",n.subscriptSizing==="dynamic");let c=n._getSubscriptMessageType();d(),ie((r=c)==="error"?16:r==="hint"?17:-1)}},dependencies:[Eo,Do,Pi,ko,qn],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return i})();var Rt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=N({imports:[uo,sn,te]})}return i})();var Ja=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return i})(),es={passive:!0},Oo=(()=>{class i{_platform=m(z);_ngZone=m(R);_renderer=m(le).createRenderer(null,null);_styleLoader=m(Te);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return pi;this._styleLoader.load(Ja);let t=me(e),n=this._monitoredElements.get(t);if(n)return n.subject;let r=new F,c="cdk-text-field-autofilled",h=M=>{M.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(c)?(t.classList.add(c),this._ngZone.run(()=>r.next({target:M.target,isAutofilled:!0}))):M.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(c)&&(t.classList.remove(c),this._ngZone.run(()=>r.next({target:M.target,isAutofilled:!1})))},_=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",h,es)));return this._monitoredElements.set(t,{subject:r,unlisten:_}),r}stopMonitoring(e){let t=me(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ao=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=N({})}return i})();var Fo=new O("MAT_INPUT_VALUE_ACCESSOR");var Po=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ln=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(o,e,t,n,r){this._defaultMatcher=o,this.ngControl=e,this._parentFormGroup=t,this._parentForm=n,this._stateChanges=r}updateErrorState(){let o=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,n=this.ngControl?this.ngControl.control:null,r=t?.isErrorState(n,e)??!1;r!==o&&(this.errorState=r,this._stateChanges.next())}};var ts=["button","checkbox","file","hidden","image","radio","range","reset","submit"],ns=new O("MAT_INPUT_CONFIG"),Lo=(()=>{class i{_elementRef=m(j);_platform=m(z);ngControl=m(Hi,{optional:!0,self:!0});_autofillMonitor=m(Oo);_ngZone=m(R);_formField=m(Gn,{optional:!0});_renderer=m(xe);_uid=m(ge).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=m(ns,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new F;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=st(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Wi.required)??!1}set required(e){this._required=st(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Hn().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=st(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Hn().has(e));constructor(){let e=m(Se,{optional:!0}),t=m(qi,{optional:!0}),n=m(Po),r=m(Fo,{optional:!0,self:!0}),c=this._elementRef.nativeElement,h=c.nodeName.toLowerCase();r?Ei(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=c,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(c,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new ln(n,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=h==="select",this._isTextarea=h==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=c.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&gt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){ts.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=L({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,n){t&1&&S("focus",function(){return n._focusChanged(!0)})("blur",function(){return n._focusChanged(!1)})("input",function(){return n._onInput()}),t&2&&(Vt("id",n.id)("disabled",n.disabled&&!n.disabledInteractive)("required",n.required),Ce("name",n.name||null)("readonly",n._getReadonlyAttribute())("aria-disabled",n.disabled&&n.disabledInteractive?"true":null)("aria-invalid",n.empty&&n.required?null:n.errorState)("aria-required",n.required)("id",n.id),W("mat-input-server",n._isServer)("mat-mdc-form-field-textarea-control",n._isInFormField&&n._isTextarea)("mat-mdc-form-field-input-control",n._isInFormField)("mat-mdc-input-disabled-interactive",n.disabledInteractive)("mdc-text-field__input",n._isInFormField)("mat-mdc-native-select-inline",n._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ye]},exportAs:["matInput"],features:[it([{provide:Yn,useExisting:i}]),_t]})}return i})(),No=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=N({imports:[Rt,Rt,Ao,te]})}return i})();var _e=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(_e||{}),Xn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=_e.HIDDEN;constructor(o,e,t,n=!1){this._renderer=o,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=n}fadeOut(){this._renderer.fadeOutRipple(this)}},Bo=rt({passive:!0,capture:!0}),Zn=class{_events=new Map;addHandler(o,e,t,n){let r=this._events.get(e);if(r){let c=r.get(t);c?c.add(n):r.set(t,new Set([n]))}else this._events.set(e,new Map([[t,new Set([n])]])),o.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Bo)})}removeHandler(o,e,t){let n=this._events.get(o);if(!n)return;let r=n.get(e);r&&(r.delete(t),r.size===0&&n.delete(e),n.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,Bo)))}_delegateEventHandler=o=>{let e=se(o);e&&this._events.get(o.type)?.forEach((t,n)=>{(n===e||n.contains(e))&&t.forEach(r=>r.handleEvent(o))})}},It={enterDuration:225,exitDuration:150},os=800,Vo=rt({passive:!0,capture:!0}),zo=["mousedown","touchstart"],jo=["mouseup","mouseleave","touchend","touchcancel"],rs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),dn=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Zn;constructor(o,e,t,n,r){this._target=o,this._ngZone=e,this._platform=n,n.isBrowser&&(this._containerElement=me(t)),r&&r.get(Te).load(rs)}fadeInRipple(o,e,t={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=H(H({},It),t.animation);t.centered&&(o=n.left+n.width/2,e=n.top+n.height/2);let c=t.radius||as(o,e,n),h=o-n.left,_=e-n.top,M=r.enterDuration,C=document.createElement("div");C.classList.add("mat-ripple-element"),C.style.left=`${h-c}px`,C.style.top=`${_-c}px`,C.style.height=`${c*2}px`,C.style.width=`${c*2}px`,t.color!=null&&(C.style.backgroundColor=t.color),C.style.transitionDuration=`${M}ms`,this._containerElement.appendChild(C);let I=window.getComputedStyle(C),J=I.transitionProperty,ee=I.transitionDuration,X=J==="none"||ee==="0s"||ee==="0s, 0s"||n.width===0&&n.height===0,G=new Xn(this,C,t,X);C.style.transform="scale3d(1, 1, 1)",G.state=_e.FADING_IN,t.persistent||(this._mostRecentTransientRipple=G);let Ue=null;return!X&&(M||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let di=()=>{Ue&&(Ue.fallbackTimer=null),clearTimeout(ci),this._finishRippleTransition(G)},Mn=()=>this._destroyRipple(G),ci=setTimeout(Mn,M+100);C.addEventListener("transitionend",di),C.addEventListener("transitioncancel",Mn),Ue={onTransitionEnd:di,onTransitionCancel:Mn,fallbackTimer:ci}}),this._activeRipples.set(G,Ue),(X||!M)&&this._finishRippleTransition(G),G}fadeOutRipple(o){if(o.state===_e.FADING_OUT||o.state===_e.HIDDEN)return;let e=o.element,t=H(H({},It),o.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",o.state=_e.FADING_OUT,(o._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let e=me(o);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,zo.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(o){o.type==="mousedown"?this._onMousedown(o):o.type==="touchstart"?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{jo.forEach(e=>{this._triggerElement.addEventListener(e,this,Vo)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===_e.FADING_IN?this._startFadeOutTransition(o):o.state===_e.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let e=o===this._mostRecentTransientRipple,{persistent:t}=o.config;o.state=_e.VISIBLE,!t&&(!e||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let e=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=_e.HIDDEN,e!==null&&(o.element.removeEventListener("transitionend",e.onTransitionEnd),o.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),o.element.remove()}_onMousedown(o){let e=Et(o),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+os;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!Mt(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=o.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let e=o.state===_e.VISIBLE||o.config.terminateOnPointerUp&&o.state===_e.FADING_IN;!o.config.persistent&&e&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(zo.forEach(e=>i._eventManager.removeHandler(e,o,this)),this._pointerUpEventsRegistered&&(jo.forEach(e=>o.removeEventListener(e,this,Vo)),this._pointerUpEventsRegistered=!1))}};function as(i,o,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),n=Math.max(Math.abs(o-e.top),Math.abs(o-e.bottom));return Math.sqrt(t*t+n*n)}var Wo=new O("mat-ripple-global-options");var ss={capture:!0},ls=["focus","mousedown","mouseenter","touchstart"],Kn="mat-ripple-loader-uninitialized",Qn="mat-ripple-loader-class-name",Ho="mat-ripple-loader-centered",cn="mat-ripple-loader-disabled",Uo=(()=>{class i{_document=m(U);_animationsDisabled=Re();_globalRippleOptions=m(Wo,{optional:!0});_platform=m(z);_ngZone=m(R);_injector=m(Q);_eventCleanups;_hosts=new Map;constructor(){let e=m(le).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ls.map(t=>e.listen(this._document,t,this._onInteraction,ss)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Kn,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Qn))&&e.setAttribute(Qn,t.className||""),t.centered&&e.setAttribute(Ho,""),t.disabled&&e.setAttribute(cn,"")}setDisabled(e,t){let n=this._hosts.get(e);n?(n.target.rippleDisabled=t,!t&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(e))):t?e.setAttribute(cn,""):e.removeAttribute(cn)}_onInteraction=e=>{let t=se(e);if(t instanceof HTMLElement){let n=t.closest(`[${Kn}="${this._globalRippleOptions?.namespace??""}"]`);n&&this._createRipple(n)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Qn)),e.append(t);let n=this._globalRippleOptions,r=this._animationsDisabled?0:n?.animation?.enterDuration??It.enterDuration,c=this._animationsDisabled?0:n?.animation?.exitDuration??It.exitDuration,h={rippleDisabled:this._animationsDisabled||n?.disabled||e.hasAttribute(cn),rippleConfig:{centered:e.hasAttribute(Ho),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:c}}},_=new dn(h,this._ngZone,t,this._platform,this._injector),M=!h.rippleDisabled;M&&_.setupTriggerEvents(e),this._hosts.set(e,{target:h,renderer:_,hasSetUpEvents:M}),e.removeAttribute(Kn)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var qo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,n){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var ds=new O("MAT_BUTTON_CONFIG");function Yo(i){return i==null?void 0:Oi(i)}var Go=(()=>{class i{_elementRef=m(j);_ngZone=m(R);_animationsDisabled=Re();_config=m(ds,{optional:!0});_focusMonitor=m(Bn);_cleanupClick;_renderer=m(xe);_rippleLoader=m(Uo);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){m(Te).load(qo);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=L({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,n){t&2&&(Ce("disabled",n._getDisabledAttribute())("aria-disabled",n._getAriaDisabled())("tabindex",n._getTabIndex()),Ne(n.color?"mat-"+n.color:""),W("mat-mdc-button-disabled",n.disabled)("mat-mdc-button-disabled-interactive",n.disabledInteractive)("mat-unthemed",!n.color)("_mat-animation-noopable",n._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ye],disabled:[2,"disabled","disabled",ye],ariaDisabled:[2,"aria-disabled","ariaDisabled",ye],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ye],tabIndex:[2,"tabIndex","tabIndex",Yo],_tabindex:[2,"tabindex","_tabindex",Yo]}})}return i})();var Xo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=N({imports:[te]})}return i})();var cs=["matButton",""],ms=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],us=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Zo=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),mn=(()=>{class i extends Go{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=ps(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,n=this._appearance?Zo.get(this._appearance):null,r=Zo.get(e);n&&t.remove(...n),t.add(...r),this._appearance=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Fe],attrs:cs,ngContentSelectors:us,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,n){t&1&&(we(ms),Pe(0,"span",0),q(1),Ye(2,"span",1),q(3,1),Ge(),q(4,2),Pe(5,"span",2)(6,"span",3)),t&2&&W("mdc-button__ripple",!n._isFab)("mdc-fab__ripple",n._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function ps(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var un=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=N({imports:[Xo,te]})}return i})();var hs=20,$n=(()=>{class i{_ngZone=m(R);_platform=m(z);_renderer=m(le).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new F;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=hs){return this._platform.isBrowser?new Je(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let n=e>0?this._scrolled.pipe(kn(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):et()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Ie(r=>!r||n.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((n,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_scrollableContainsElement(e,t){let n=me(t),r=e.getElementRef().nativeElement;do if(n==r)return!0;while(n=n.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var bs=20,Ot=(()=>{class i{_platform=m(z);_listeners;_viewportSize=null;_change=new F;_document=m(U);constructor(){let e=m(R),t=m(le).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=r=>this._change.next(r);this._listeners=[t.listen("window","resize",n),t.listen("window","orientationchange",n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+t,height:n,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),n=e.documentElement,r=n.getBoundingClientRect(),c=-r.top||e.body?.scrollTop||t.scrollY||n.scrollTop||0,h=-r.left||e.body?.scrollLeft||t.scrollX||n.scrollLeft||0;return{top:c,left:h}}change(e=bs){return e>0?this._change.pipe(kn(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ko=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=N({})}return i})(),Jn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=N({imports:[te,Ko,te,Ko]})}return i})();var At=class{_attachedHost=null;attach(o){return this._attachedHost=o,o.attach(this)}detach(){let o=this._attachedHost;o!=null&&(this._attachedHost=null,o.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(o){this._attachedHost=o}},dt=class extends At{component;viewContainerRef;injector;projectableNodes;bindings;constructor(o,e,t,n,r){super(),this.component=o,this.viewContainerRef=e,this.injector=t,this.projectableNodes=n,this.bindings=r||null}},ct=class extends At{templateRef;viewContainerRef;context;injector;constructor(o,e,t,n){super(),this.templateRef=o,this.viewContainerRef=e,this.context=t,this.injector=n}get origin(){return this.templateRef.elementRef}attach(o,e=this.context){return this.context=e,super.attach(o)}detach(){return this.context=void 0,super.detach()}},ei=class extends At{element;constructor(o){super(),this.element=o instanceof j?o.nativeElement:o}},mt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(o){if(o instanceof dt)return this._attachedPortal=o,this.attachComponentPortal(o);if(o instanceof ct)return this._attachedPortal=o,this.attachTemplatePortal(o);if(this.attachDomPortal&&o instanceof ei)return this._attachedPortal=o,this.attachDomPortal(o)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(o){this._disposeFn=o}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},pn=class extends mt{outletElement;_appRef;_defaultInjector;constructor(o,e,t){super(),this.outletElement=o,this._appRef=e,this._defaultInjector=t}attachComponentPortal(o){let e;if(o.viewContainerRef){let t=o.injector||o.viewContainerRef.injector,n=t.get(On,null,{optional:!0})||void 0;e=o.viewContainerRef.createComponent(o.component,{index:o.viewContainerRef.length,injector:t,ngModuleRef:n,projectableNodes:o.projectableNodes||void 0,bindings:o.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,n=o.injector||this._defaultInjector||Q.NULL,r=n.get(tt,t.injector);e=jt(o.component,{elementInjector:n,environmentInjector:r,projectableNodes:o.projectableNodes||void 0,bindings:o.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=o,e}attachTemplatePortal(o){let e=o.viewContainerRef,t=e.createEmbeddedView(o.templateRef,o.context,{injector:o.injector});return t.rootNodes.forEach(n=>this.outletElement.appendChild(n)),t.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(t);n!==-1&&e.remove(n)}),this._attachedPortal=o,t}attachDomPortal=o=>{let e=o.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=o,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(o){return o.hostView.rootNodes[0]}};var ti=(()=>{class i extends mt{_moduleRef=m(On,{optional:!0});_document=m(U);_viewContainerRef=m(Bt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new qe;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,n=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(n,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||i)};static \u0275dir=L({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Fe]})}return i})(),fn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=N({})}return i})();var Qo=bo();function or(i){return new hn(i.get(Ot),i.get(U))}var hn=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(o,e){this._viewportRuler=o,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let o=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=o.style.left||"",this._previousHTMLStyles.top=o.style.top||"",o.style.left=Y(-this._previousScrollPosition.left),o.style.top=Y(-this._previousScrollPosition.top),o.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let o=this._document.documentElement,e=this._document.body,t=o.style,n=e.style,r=t.scrollBehavior||"",c=n.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,o.classList.remove("cdk-global-scrollblock"),Qo&&(t.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Qo&&(t.scrollBehavior=r,n.scrollBehavior=c)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function rr(i,o){return new bn(i.get($n),i.get(R),i.get(Ot),o)}var bn=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(o,e,t,n){this._scrollDispatcher=o,this._ngZone=e,this._viewportRuler=t,this._config=n}attach(o){this._overlayRef,this._overlayRef=o}enable(){if(this._scrollSubscription)return;let o=this._scrollDispatcher.scrolled(0).pipe(Ie(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=o.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=o.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Ft=class{enable(){}disable(){}attach(){}};function ni(i,o){return o.some(e=>{let t=i.bottom<e.top,n=i.top>e.bottom,r=i.right<e.left,c=i.left>e.right;return t||n||r||c})}function $o(i,o){return o.some(e=>{let t=i.top<e.top,n=i.bottom>e.bottom,r=i.left<e.left,c=i.right>e.right;return t||n||r||c})}function ar(i,o){return new gn(i.get($n),i.get(Ot),i.get(R),o)}var gn=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(o,e,t,n){this._scrollDispatcher=o,this._viewportRuler=e,this._ngZone=t,this._config=n}attach(o){this._overlayRef,this._overlayRef=o}enable(){if(!this._scrollSubscription){let o=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(o).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:n}=this._viewportRuler.getViewportSize();ni(e,[{width:t,height:n,bottom:n,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},sr=(()=>{class i{_injector=m(Q);constructor(){}noop=()=>new Ft;close=e=>rr(this._injector,e);block=()=>or(this._injector);reposition=e=>ar(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ut=class{positionStrategy;scrollStrategy=new Ft;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(o){if(o){let e=Object.keys(o);for(let t of e)o[t]!==void 0&&(this[t]=o[t])}}};var _n=class{connectionPair;scrollableViewProperties;constructor(o,e){this.connectionPair=o,this.scrollableViewProperties=e}};var lr=(()=>{class i{_attachedOverlays=[];_document=m(U);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,n){return n.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),dr=(()=>{class i extends lr{_ngZone=m(R);_renderer=m(le).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let n=t.length-1;n>-1;n--){let r=t[n];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(n){return(e||(e=In(i)))(n||i)}})();static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),cr=(()=>{class i extends lr{_platform=m(z);_ngZone=m(R);_renderer=m(le).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,n={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,n),r.listen(t,"click",this._clickListener,n),r.listen(t,"auxclick",this._clickListener,n),r.listen(t,"contextmenu",this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=se(e)};_clickListener=e=>{let t=se(e),n=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let c=r.length-1;c>-1;c--){let h=r[c],_=h._outsidePointerEvents;if(!(!h.hasAttached()||!this.canReceiveEvent(h,e,_))){if(Jo(h.overlayElement,t)||Jo(h.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>_.next(e)):_.next(e)}}};static \u0275fac=(()=>{let e;return function(n){return(e||(e=In(i)))(n||i)}})();static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Jo(i,o){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=o;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var mr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),ur=(()=>{class i{_platform=m(z);_containerElement;_document=m(U);_styleLoader=m(Te);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Wn()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<n.length;r++)n[r].remove()}let t=this._document.createElement("div");t.classList.add(e),Wn()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(mr)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ii=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(o,e,t,n){this._renderer=e,this._ngZone=t,this.element=o.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",n)}detach(){this._ngZone.runOutsideAngular(()=>{let o=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(o,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),o.style.pointerEvents="none",o.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function oi(i){return i&&i.nodeType===1}var vn=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new F;_attachments=new F;_detachments=new F;_positionStrategy;_scrollStrategy;_locationChanges=$e.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new F;_outsidePointerEvents=new F;_afterNextRenderRef;constructor(o,e,t,n,r,c,h,_,M,C=!1,I,J){this._portalOutlet=o,this._host=e,this._pane=t,this._config=n,this._ngZone=r,this._keyboardDispatcher=c,this._document=h,this._location=_,this._outsideClickDispatcher=M,this._animationsDisabled=C,this._injector=I,this._renderer=J,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(o){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(o);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ae(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let o=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),o}dispose(){if(this._disposed)return;let o=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,o&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(o){o!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=o,this.hasAttached()&&(o.attach(this),this.updatePosition()))}updateSize(o){this._config=H(H({},this._config),o),this._updateElementSize()}setDirection(o){this._config=mi(H({},this._config),{direction:o}),this._updateElementDirection()}addPanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!0)}removePanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!1)}getDirection(){let o=this._config.direction;return o?typeof o=="string"?o:o.value:"ltr"}updateScrollStrategy(o){o!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=o,this.hasAttached()&&(o.attach(this),o.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let o=this._pane.style;o.width=Y(this._config.width),o.height=Y(this._config.height),o.minWidth=Y(this._config.minWidth),o.minHeight=Y(this._config.minHeight),o.maxWidth=Y(this._config.maxWidth),o.maxHeight=Y(this._config.maxHeight)}_togglePointerEvents(o){this._pane.style.pointerEvents=o?"":"none"}_attachHost(){if(!this._host.parentElement){let o=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;oi(o)?o.after(this._host):o?.type==="parent"?o.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let o="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ii(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(o))}):this._backdropRef.element.classList.add(o)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(o,e,t){let n=at(e||[]).filter(r=>!!r);n.length&&(t?o.classList.add(...n):o.classList.remove(...n))}_detachContentWhenEmpty(){let o=!1;try{this._detachContentAfterRenderRef=Ae(()=>{o=!0,this._detachContent()},{injector:this._injector})}catch(e){if(o)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let o=this._scrollStrategy;o?.disable(),o?.detach?.()}},er="cdk-overlay-connected-position-bounding-box",gs=/([A-Za-z%]+)$/;function pr(i,o){return new yn(o,i.get(Ot),i.get(U),i.get(z),i.get(ur))}var yn=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new F;_resizeSubscription=$e.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(o,e,t,n,r){this._viewportRuler=e,this._document=t,this._platform=n,this._overlayContainer=r,this.setOrigin(o)}attach(o){this._overlayRef&&this._overlayRef,this._validatePositions(),o.hostElement.classList.add(er),this._overlayRef=o,this._boundingBox=o.hostElement,this._pane=o.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let o=this._originRect,e=this._overlayRect,t=this._viewportRect,n=this._containerRect,r=[],c;for(let h of this._preferredPositions){let _=this._getOriginPoint(o,n,h),M=this._getOverlayPoint(_,e,h),C=this._getOverlayFit(M,e,t,h);if(C.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(h,_);return}if(this._canFitWithFlexibleDimensions(C,M,t)){r.push({position:h,origin:_,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(_,h)});continue}(!c||c.overlayFit.visibleArea<C.visibleArea)&&(c={overlayFit:C,overlayPoint:M,originPoint:_,position:h,overlayRect:e})}if(r.length){let h=null,_=-1;for(let M of r){let C=M.boundingBoxRect.width*M.boundingBoxRect.height*(M.position.weight||1);C>_&&(_=C,h=M)}this._isPushed=!1,this._applyPosition(h.position,h.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(c.position,c.originPoint);return}this._applyPosition(c.position,c.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Qe(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(er),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let o=this._lastPosition;o?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(o,this._getOriginPoint(this._originRect,this._containerRect,o))):this.apply()}withScrollableContainers(o){return this._scrollables=o,this}withPositions(o){return this._preferredPositions=o,o.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(o){return this._viewportMargin=o,this}withFlexibleDimensions(o=!0){return this._hasFlexibleDimensions=o,this}withGrowAfterOpen(o=!0){return this._growAfterOpen=o,this}withPush(o=!0){return this._canPush=o,this}withLockedPosition(o=!0){return this._positionLocked=o,this}setOrigin(o){return this._origin=o,this}withDefaultOffsetX(o){return this._offsetX=o,this}withDefaultOffsetY(o){return this._offsetY=o,this}withTransformOriginOn(o){return this._transformOriginSelector=o,this}withPopoverLocation(o){return this._popoverLocation=o,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof j?this._origin.nativeElement:oi(this._origin)?this._origin:null}_getOriginPoint(o,e,t){let n;if(t.originX=="center")n=o.left+o.width/2;else{let c=this._isRtl()?o.right:o.left,h=this._isRtl()?o.left:o.right;n=t.originX=="start"?c:h}e.left<0&&(n-=e.left);let r;return t.originY=="center"?r=o.top+o.height/2:r=t.originY=="top"?o.top:o.bottom,e.top<0&&(r-=e.top),{x:n,y:r}}_getOverlayPoint(o,e,t){let n;t.overlayX=="center"?n=-e.width/2:t.overlayX==="start"?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:o.x+n,y:o.y+r}}_getOverlayFit(o,e,t,n){let r=nr(e),{x:c,y:h}=o,_=this._getOffset(n,"x"),M=this._getOffset(n,"y");_&&(c+=_),M&&(h+=M);let C=0-c,I=c+r.width-t.width,J=0-h,ee=h+r.height-t.height,X=this._subtractOverflows(r.width,C,I),G=this._subtractOverflows(r.height,J,ee),Ue=X*G;return{visibleArea:Ue,isCompletelyWithinViewport:r.width*r.height===Ue,fitsInViewportVertically:G===r.height,fitsInViewportHorizontally:X==r.width}}_canFitWithFlexibleDimensions(o,e,t){if(this._hasFlexibleDimensions){let n=t.bottom-e.y,r=t.right-e.x,c=tr(this._overlayRef.getConfig().minHeight),h=tr(this._overlayRef.getConfig().minWidth),_=o.fitsInViewportVertically||c!=null&&c<=n,M=o.fitsInViewportHorizontally||h!=null&&h<=r;return _&&M}return!1}_pushOverlayOnScreen(o,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:o.x+this._previousPushAmount.x,y:o.y+this._previousPushAmount.y};let n=nr(e),r=this._viewportRect,c=Math.max(o.x+n.width-r.width,0),h=Math.max(o.y+n.height-r.height,0),_=Math.max(r.top-t.top-o.y,0),M=Math.max(r.left-t.left-o.x,0),C=0,I=0;return n.width<=r.width?C=M||-c:C=o.x<this._getViewportMarginStart()?r.left-t.left-o.x:0,n.height<=r.height?I=_||-h:I=o.y<this._getViewportMarginTop()?r.top-t.top-o.y:0,this._previousPushAmount={x:C,y:I},{x:o.x+C,y:o.y+I}}_applyPosition(o,e){if(this._setTransformOrigin(o),this._setOverlayElementStyles(e,o),this._setBoundingBoxStyles(e,o),o.panelClass&&this._addPanelClasses(o.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(o!==this._lastPosition||!this._lastScrollVisibility||!_s(this._lastScrollVisibility,t)){let n=new _n(o,t);this._positionChanges.next(n)}this._lastScrollVisibility=t}this._lastPosition=o,this._isInitialRender=!1}_setTransformOrigin(o){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,n=o.overlayY;o.overlayX==="center"?t="center":this._isRtl()?t=o.overlayX==="start"?"right":"left":t=o.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${n}`}_calculateBoundingBoxRect(o,e){let t=this._viewportRect,n=this._isRtl(),r,c,h;if(e.overlayY==="top")c=o.y,r=t.height-c+this._getViewportMarginBottom();else if(e.overlayY==="bottom")h=t.height-o.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-h+this._getViewportMarginTop();else{let ee=Math.min(t.bottom-o.y+t.top,o.y),X=this._lastBoundingBoxSize.height;r=ee*2,c=o.y-ee,r>X&&!this._isInitialRender&&!this._growAfterOpen&&(c=o.y-X/2)}let _=e.overlayX==="start"&&!n||e.overlayX==="end"&&n,M=e.overlayX==="end"&&!n||e.overlayX==="start"&&n,C,I,J;if(M)J=t.width-o.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),C=o.x-this._getViewportMarginStart();else if(_)I=o.x,C=t.right-o.x-this._getViewportMarginEnd();else{let ee=Math.min(t.right-o.x+t.left,o.x),X=this._lastBoundingBoxSize.width;C=ee*2,I=o.x-ee,C>X&&!this._isInitialRender&&!this._growAfterOpen&&(I=o.x-X/2)}return{top:c,left:I,bottom:h,right:J,width:C,height:r}}_setBoundingBoxStyles(o,e){let t=this._calculateBoundingBoxRect(o,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left="0",n.bottom=n.right="auto",n.maxHeight=n.maxWidth="",n.width=n.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,c=this._overlayRef.getConfig().maxWidth;n.width=Y(t.width),n.height=Y(t.height),n.top=Y(t.top)||"auto",n.bottom=Y(t.bottom)||"auto",n.left=Y(t.left)||"auto",n.right=Y(t.right)||"auto",e.overlayX==="center"?n.alignItems="center":n.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?n.justifyContent="center":n.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(n.maxHeight=Y(r)),c&&(n.maxWidth=Y(c))}this._lastBoundingBoxSize=t,Qe(this._boundingBox.style,n)}_resetBoundingBoxStyles(){Qe(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Qe(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(o,e){let t={},n=this._hasExactPosition(),r=this._hasFlexibleDimensions,c=this._overlayRef.getConfig();if(n){let C=this._viewportRuler.getViewportScrollPosition();Qe(t,this._getExactOverlayY(e,o,C)),Qe(t,this._getExactOverlayX(e,o,C))}else t.position="static";let h="",_=this._getOffset(e,"x"),M=this._getOffset(e,"y");_&&(h+=`translateX(${_}px) `),M&&(h+=`translateY(${M}px)`),t.transform=h.trim(),c.maxHeight&&(n?t.maxHeight=Y(c.maxHeight):r&&(t.maxHeight="")),c.maxWidth&&(n?t.maxWidth=Y(c.maxWidth):r&&(t.maxWidth="")),Qe(this._pane.style,t)}_getExactOverlayY(o,e,t){let n={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,o);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),o.overlayY==="bottom"){let c=this._document.documentElement.clientHeight;n.bottom=`${c-(r.y+this._overlayRect.height)}px`}else n.top=Y(r.y);return n}_getExactOverlayX(o,e,t){let n={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,o);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let c;if(this._isRtl()?c=o.overlayX==="end"?"left":"right":c=o.overlayX==="end"?"right":"left",c==="right"){let h=this._document.documentElement.clientWidth;n.right=`${h-(r.x+this._overlayRect.width)}px`}else n.left=Y(r.x);return n}_getScrollVisibility(){let o=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:$o(o,t),isOriginOutsideView:ni(o,t),isOverlayClipped:$o(e,t),isOverlayOutsideView:ni(e,t)}}_subtractOverflows(o,...e){return e.reduce((t,n)=>t-Math.max(n,0),o)}_getNarrowedViewportRect(){let o=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+o-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:o-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(o,e){return e==="x"?o.offsetX==null?this._offsetX:o.offsetX:o.offsetY==null?this._offsetY:o.offsetY}_validatePositions(){}_addPanelClasses(o){this._pane&&at(o).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(o=>{this._pane.classList.remove(o)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let o=this._origin;if(o instanceof j)return o.nativeElement.getBoundingClientRect();if(o instanceof Element)return o.getBoundingClientRect();let e=o.width||0,t=o.height||0;return{top:o.y,bottom:o.y+t,left:o.x,right:o.x+e,height:t,width:e}}_getContainerRect(){let o=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();o&&(e.style.display="block");let t=e.getBoundingClientRect();return o&&(e.style.display=""),t}};function Qe(i,o){for(let e in o)o.hasOwnProperty(e)&&(i[e]=o[e]);return i}function tr(i){if(typeof i!="number"&&i!=null){let[o,e]=i.split(gs);return!e||e==="px"?parseFloat(o):null}return i||null}function nr(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function _s(i,o){return i===o?!0:i.isOriginClipped===o.isOriginClipped&&i.isOriginOutsideView===o.isOriginOutsideView&&i.isOverlayClipped===o.isOverlayClipped&&i.isOverlayOutsideView===o.isOverlayOutsideView}var ir="cdk-global-overlay-wrapper";function Cn(i){return new xn}var xn=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(o){let e=o.getConfig();this._overlayRef=o,this._width&&!e.width&&o.updateSize({width:this._width}),this._height&&!e.height&&o.updateSize({height:this._height}),o.hostElement.classList.add(ir),this._isDisposed=!1}top(o=""){return this._bottomOffset="",this._topOffset=o,this._alignItems="flex-start",this}left(o=""){return this._xOffset=o,this._xPosition="left",this}bottom(o=""){return this._topOffset="",this._bottomOffset=o,this._alignItems="flex-end",this}right(o=""){return this._xOffset=o,this._xPosition="right",this}start(o=""){return this._xOffset=o,this._xPosition="start",this}end(o=""){return this._xOffset=o,this._xPosition="end",this}width(o=""){return this._overlayRef?this._overlayRef.updateSize({width:o}):this._width=o,this}height(o=""){return this._overlayRef?this._overlayRef.updateSize({height:o}):this._height=o,this}centerHorizontally(o=""){return this.left(o),this._xPosition="center",this}centerVertically(o=""){return this.top(o),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let o=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:n,height:r,maxWidth:c,maxHeight:h}=t,_=(n==="100%"||n==="100vw")&&(!c||c==="100%"||c==="100vw"),M=(r==="100%"||r==="100vh")&&(!h||h==="100%"||h==="100vh"),C=this._xPosition,I=this._xOffset,J=this._overlayRef.getConfig().direction==="rtl",ee="",X="",G="";_?G="flex-start":C==="center"?(G="center",J?X=I:ee=I):J?C==="left"||C==="end"?(G="flex-end",ee=I):(C==="right"||C==="start")&&(G="flex-start",X=I):C==="left"||C==="start"?(G="flex-start",ee=I):(C==="right"||C==="end")&&(G="flex-end",X=I),o.position=this._cssPosition,o.marginLeft=_?"0":ee,o.marginTop=M?"0":this._topOffset,o.marginBottom=this._bottomOffset,o.marginRight=_?"0":X,e.justifyContent=G,e.alignItems=M?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let o=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(ir),t.justifyContent=t.alignItems=o.marginTop=o.marginBottom=o.marginLeft=o.marginRight=o.position="",this._overlayRef=null,this._isDisposed=!0}},fr=(()=>{class i{_injector=m(Q);constructor(){}global(){return Cn()}flexibleConnectedTo(e){return pr(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),hr=new O("OVERLAY_DEFAULT_CONFIG");function wn(i,o){i.get(Te).load(mr);let e=i.get(ur),t=i.get(U),n=i.get(ge),r=i.get(yt),c=i.get(St),h=i.get(xe,null,{optional:!0})||i.get(le).createRenderer(null,null),_=new ut(o),M=i.get(hr,null,{optional:!0})?.usePopover??!0;_.direction=_.direction||c.value,"showPopover"in t.body?_.usePopover=o?.usePopover??M:_.usePopover=!1;let C=t.createElement("div"),I=t.createElement("div");C.id=n.getId("cdk-overlay-"),C.classList.add("cdk-overlay-pane"),I.appendChild(C),_.usePopover&&(I.setAttribute("popover","manual"),I.classList.add("cdk-overlay-popover"));let J=_.usePopover?_.positionStrategy?.getPopoverInsertionPoint?.():null;return oi(J)?J.after(I):J?.type==="parent"?J.element.appendChild(I):e.getContainerElement().appendChild(I),new vn(new pn(C,r,i),I,C,_,i.get(R),i.get(dr),t,i.get(Fi),i.get(cr),o?.disableAnimations??i.get(Nt,null,{optional:!0})==="NoopAnimations",i.get(tt),h)}var br=(()=>{class i{scrollStrategies=m(sr);_positionBuilder=m(fr);_injector=m(Q);constructor(){}create(e){return wn(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ri=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=N({providers:[br],imports:[te,fn,Jn,Jn]})}return i})();function vs(i,o){if(i&1){let e=A();a(0,"div",1)(1,"button",2),S("click",function(){p(e);let n=u();return f(n.action())}),l(2),s()()}if(i&2){let e=u();d(2),P(" ",e.data.action," ")}}var ys=["label"];function xs(i,o){}var Cs=Math.pow(2,31)-1,Pt=class{_overlayRef;instance;containerInstance;_afterDismissed=new F;_afterOpened=new F;_onAction=new F;_durationTimeoutId;_dismissedByAction=!1;constructor(o,e){this._overlayRef=e,this.containerInstance=o,o._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(o){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(o,Cs))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},gr=new O("MatSnackBarData"),pt=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},ws=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=L({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),Ss=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=L({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),Es=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=L({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),_r=(()=>{class i{snackBarRef=m(Pt);data=m(gr);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,n){t&1&&(a(0,"div",0),l(1),s(),ne(2,vs,3,1,"div",1)),t&2&&(d(),P(" ",n.data.message,`
`),d(),ie(n.hasAction?2:-1))},dependencies:[mn,ws,Ss,Es],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),ai="_mat-snack-bar-enter",si="_mat-snack-bar-exit",Ms=(()=>{class i extends mt{_ngZone=m(R);_elementRef=m(j);_changeDetectorRef=m(ce);_platform=m(z);_animationsDisabled=Re();snackBarConfig=m(pt);_document=m(U);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=m(Q);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new F;_onExit=new F;_onEnter=new F;_animationState="void";_live;_label;_role;_liveElementId=m(ge).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===si?this._completeExit():e===ai&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Ae(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ai)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(ai)},200)))}exit(){return this._destroyed?et(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Ae(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(si)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(si),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(c=>e.classList.add(c)):e.classList.add(t)),this._exposeToModals();let n=this._label.nativeElement,r="mdc-snackbar__label";n.classList.toggle(r,!n.querySelector(`.${r}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<t.length;n++){let r=t[n],c=r.getAttribute("aria-owns");this._trackedModals.add(r),c?c.indexOf(e)===-1&&r.setAttribute("aria-owns",c+" "+e):r.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let n=t.replace(this._liveElementId,"").trim();n.length>0?e.setAttribute("aria-owns",n):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),n=e.querySelector("[aria-live]");if(t&&n){let r=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(r=document.activeElement),t.removeAttribute("aria-hidden"),n.appendChild(t),r?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,n){if(t&1&&nt(ti,7)(ys,7),t&2){let r;Z(r=K())&&(n._portalOutlet=r.first),Z(r=K())&&(n._label=r.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,n){t&1&&S("animationend",function(c){return n.onAnimationEnd(c.animationName)})("animationcancel",function(c){return n.onAnimationEnd(c.animationName)}),t&2&&W("mat-snack-bar-container-enter",n._animationState==="visible")("mat-snack-bar-container-exit",n._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!n._animationsDisabled)},features:[Fe],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(a(0,"div",1)(1,"div",2,0)(3,"div",3),E(4,xs,0,0,"ng-template",4),s(),w(5,"div"),s()()),t&2&&(d(5),Ce("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[ti],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return i})(),ks=new O("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new pt}),li=(()=>{class i{_live=m(zn);_injector=m(Q);_breakpointObserver=m(Vn);_parentSnackBar=m(i,{optional:!0,skipSelf:!0});_defaultConfig=m(ks);_animationsDisabled=Re();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=_r;snackBarContainerComponent=Ms;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",n){let r=H(H({},this._defaultConfig),n);return r.data={message:e,action:t},r.announcementMessage===e&&(r.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,r)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector,r=Q.create({parent:n||this._injector,providers:[{provide:pt,useValue:t}]}),c=new dt(this.snackBarContainerComponent,t.viewContainerRef,r),h=e.attach(c);return h.instance.snackBarConfig=t,h.instance}_attach(e,t){let n=H(H(H({},new pt),this._defaultConfig),t),r=this._createOverlay(n),c=this._attachSnackBarContainer(r,n),h=new Pt(c,r);if(e instanceof vt){let _=new ct(e,null,{$implicit:n.data,snackBarRef:h});h.instance=c.attachTemplatePortal(_)}else{let _=this._createInjector(n,h),M=new dt(e,void 0,_),C=c.attachComponentPortal(M);h.instance=C.instance}return this._breakpointObserver.observe(vo.HandsetPortrait).pipe(ve(r.detachments())).subscribe(_=>{r.overlayElement.classList.toggle(this.handsetCssClass,_.matches)}),n.announcementMessage&&c._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(h,n),this._openedSnackBarRef=h,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new ut;t.direction=e.direction;let n=Cn(this._injector),r=e.direction==="rtl",c=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!r||e.horizontalPosition==="end"&&r,h=!c&&e.horizontalPosition!=="center";return c?n.left("0"):h?n.right("0"):n.centerHorizontally(),e.verticalPosition==="top"?n.top("0"):n.bottom("0"),t.positionStrategy=n,t.disableAnimations=this._animationsDisabled,wn(this._injector,t)}_createInjector(e,t){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector;return Q.create({parent:n||this._injector,providers:[{provide:Pt,useValue:t},{provide:gr,useValue:e.data}]})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var vr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=N({providers:[li],imports:[ri,fn,un,_r,te]})}return i})();var Sn=class i{constructor(o,e){this.themeService=o;this.snackBar=e}settings={primaryColor:"#0d6efd",accentColor:"#6c757d",logoUrl:"assets/logo.png",fontFamily:"Roboto, sans-serif",siteName:"LumiNex"};ngOnInit(){this.themeService.themeSettings$.subscribe(o=>{o&&(this.settings=H({},o))})}saveSettings(){this.themeService.updateThemeSettings(this.settings).subscribe({next:()=>{this.snackBar.open("Theme settings updated successfully!","Close",{duration:3e3})},error:o=>{console.error("Failed to update theme",o),this.snackBar.open("Failed to update theme settings","Close",{duration:3e3})}})}static \u0275fac=function(e){return new(e||i)(B(Xi),B(li))};static \u0275cmp=D({type:i,selectors:[["app-theme-settings"]],decls:50,vars:18,consts:[["themeForm","ngForm"],[1,"theme-settings-container"],[3,"ngSubmit"],[1,"form-grid"],["appearance","outline"],["matInput","","name","siteName","required","",3,"ngModelChange","ngModel"],["matInput","","name","logoUrl","required","",3,"ngModelChange","ngModel"],[1,"color-pickers"],[1,"color-field"],["type","color","name","primaryColor",3,"ngModelChange","ngModel"],["type","color","name","accentColor",3,"ngModelChange","ngModel"],["matInput","","name","fontFamily","placeholder",'e.g. "Inter", sans-serif',3,"ngModelChange","ngModel"],[1,"actions"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[1,"preview-section"],[1,"preview-card"],[1,"preview-header"],["alt","Logo",1,"preview-logo",3,"src"],[1,"preview-site-name"],[1,"preview-content"],["mat-flat-button","",2,"color","white"]],template:function(e,t){if(e&1){let n=A();a(0,"div",1)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title"),l(4,"Dynamic Theme Builder"),s()(),a(5,"mat-card-content")(6,"form",2,0),S("ngSubmit",function(){return t.saveSettings()}),a(8,"div",3)(9,"mat-form-field",4)(10,"mat-label"),l(11,"Site Name"),s(),a(12,"input",5),x("ngModelChange",function(c){return p(n),y(t.settings.siteName,c)||(t.settings.siteName=c),f(c)}),s()(),a(13,"mat-form-field",4)(14,"mat-label"),l(15,"Logo URL"),s(),a(16,"input",6),x("ngModelChange",function(c){return p(n),y(t.settings.logoUrl,c)||(t.settings.logoUrl=c),f(c)}),s()(),a(17,"div",7)(18,"div",8)(19,"label"),l(20,"Primary Color"),s(),a(21,"input",9),x("ngModelChange",function(c){return p(n),y(t.settings.primaryColor,c)||(t.settings.primaryColor=c),f(c)}),s(),a(22,"span"),l(23),s()(),a(24,"div",8)(25,"label"),l(26,"Accent Color"),s(),a(27,"input",10),x("ngModelChange",function(c){return p(n),y(t.settings.accentColor,c)||(t.settings.accentColor=c),f(c)}),s(),a(28,"span"),l(29),s()()(),a(30,"mat-form-field",4)(31,"mat-label"),l(32,"Font Family"),s(),a(33,"input",11),x("ngModelChange",function(c){return p(n),y(t.settings.fontFamily,c)||(t.settings.fontFamily=c),f(c)}),s()()(),a(34,"div",12)(35,"button",13),l(36," Save & Apply Changes "),s()()()()(),a(37,"div",14)(38,"h3"),l(39,"Live Preview"),s(),a(40,"div",15)(41,"div",16),w(42,"img",17),a(43,"span",18),l(44),s()(),a(45,"div",19)(46,"p"),l(47,"This is a preview of how your brand will look across the platform."),s(),a(48,"button",20),l(49," Accent Button "),s()()()()()}if(e&2){let n=re(7);d(12),v("ngModel",t.settings.siteName),d(4),v("ngModel",t.settings.logoUrl),d(5),v("ngModel",t.settings.primaryColor),d(2),g(t.settings.primaryColor),d(4),v("ngModel",t.settings.accentColor),d(2),g(t.settings.accentColor),d(4),v("ngModel",t.settings.fontFamily),d(2),b("disabled",!n.valid),d(5),Le("border-top-color",t.settings.primaryColor),d(),Le("background-color",t.settings.primaryColor),d(),b("src",t.settings.logoUrl,Oe),d(2),g(t.settings.siteName),d(),Le("font-family",t.settings.fontFamily),d(3),Le("background-color",t.settings.accentColor)}},dependencies:[$,ae,je,fe,he,ze,We,be,Se,eo,Ki,$i,Ji,Qi,Rt,sn,Tt,No,Lo,un,mn,vr],styles:[".theme-settings-container[_ngcontent-%COMP%]{padding:24px;display:grid;grid-template-columns:1fr 1fr;gap:24px}.form-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;margin-top:16px}.color-pickers[_ngcontent-%COMP%]{display:flex;gap:32px;padding:16px 0}.color-field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.color-field[_ngcontent-%COMP%]   input[type=color][_ngcontent-%COMP%]{width:60px;height:40px;border:none;cursor:pointer}.actions[_ngcontent-%COMP%]{margin-top:24px;display:flex;justify-content:flex-end}.preview-section[_ngcontent-%COMP%]{padding:16px;background:#f5f5f5;border-radius:8px}.preview-card[_ngcontent-%COMP%]{background:#fff;border-radius:4px;box-shadow:0 2px 8px #0000001a;border-top:4px solid;overflow:hidden}.preview-header[_ngcontent-%COMP%]{padding:16px;color:#fff;display:flex;align-items:center;gap:12px}.preview-logo[_ngcontent-%COMP%]{height:32px;width:auto}.preview-site-name[_ngcontent-%COMP%]{font-weight:700;font-size:1.2rem}.preview-content[_ngcontent-%COMP%]{padding:24px}@media(max-width:768px){.theme-settings-container[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};var Ts=(i,o)=>({"alert-success":i,"alert-danger":o});function Rs(i,o){i&1&&w(0,"span",12)}function Is(i,o){i&1&&w(0,"i",13)}function Os(i,o){if(i&1&&(a(0,"div",14),l(1),s()),i&2){let e=u();b("ngClass",Ti(2,Ts,e.messageType==="success",e.messageType==="error")),d(),P(" ",e.message," ")}}function As(i,o){i&1&&(a(0,"div",15)(1,"div",16)(2,"span",17),l(3,"Loading..."),s()(),a(4,"p",18),l(5,"Loading content..."),s()())}function Fs(i,o){if(i&1){let e=A();a(0,"li",23)(1,"button",24),S("click",function(){let n=p(e).$implicit,r=u(2);return f(r.setActiveTab(n.id))}),w(2,"i"),l(3),s()()}if(i&2){let e=o.$implicit,t=u(2);d(),W("active",t.activeTab===e.id),d(),Ne(e.icon+" me-1"),d(),P(" ",e.label," ")}}function Ps(i,o){if(i&1){let e=A();a(0,"div",28)(1,"div",48)(2,"input",49),x("ngModelChange",function(n){let r=p(e).$implicit;return y(r.icon,n)||(r.icon=n),f(n)}),s(),a(3,"input",50),x("ngModelChange",function(n){let r=p(e).$implicit;return y(r.text,n)||(r.text=n),f(n)}),s(),a(4,"button",51),S("click",function(){let n=p(e).index,r=u(3);return f(r.removeHeroFeature(n))}),w(5,"i",52),s()()()}if(i&2){let e=o.$implicit;d(2),v("ngModel",e.icon),d(),v("ngModel",e.text)}}function Ls(i,o){if(i&1&&(a(0,"div"),w(1,"i"),a(2,"span"),l(3),s()()),i&2){let e=o.$implicit;d(),Ne(e.icon+" text-success me-1"),d(2),g(e.text)}}function Ns(i,o){if(i&1){let e=A();a(0,"div",25)(1,"h4",26),l(2,"Hero Section"),s(),a(3,"div",27)(4,"div",28)(5,"label",29),l(6,"Badge Text"),s(),a(7,"input",30),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.heroBadge,n)||(r.siteContent.heroBadge=n),f(n)}),s()(),a(8,"div",28)(9,"label",29),l(10,"Hero Image URL"),s(),a(11,"input",31),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.heroImageUrl,n)||(r.siteContent.heroImageUrl=n),f(n)}),s()(),a(12,"div",32)(13,"label",29),l(14,"Main Title (HTML allowed)"),s(),a(15,"textarea",33),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.heroTitle,n)||(r.siteContent.heroTitle=n),f(n)}),s()(),a(16,"div",32)(17,"label",29),l(18,"Subtitle"),s(),a(19,"textarea",34),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.heroSubtitle,n)||(r.siteContent.heroSubtitle=n),f(n)}),s()()(),a(20,"div",35)(21,"div",36)(22,"h5",2),l(23,"Hero Features"),s(),a(24,"button",37),S("click",function(){p(e);let n=u(2);return f(n.addHeroFeature())}),w(25,"i",38),l(26,"Add Feature "),s()(),a(27,"div",27),E(28,Ps,6,2,"div",39),s()(),a(29,"div",40)(30,"h6",41),l(31,"Preview:"),s(),a(32,"div",42)(33,"span",43),l(34),s(),w(35,"h2",44),a(36,"p",45),l(37),s(),a(38,"div",46),E(39,Ls,4,3,"div",47),s()()()()}if(i&2){let e=u(2);d(7),v("ngModel",e.siteContent.heroBadge),d(4),v("ngModel",e.siteContent.heroImageUrl),d(4),v("ngModel",e.siteContent.heroTitle),d(4),v("ngModel",e.siteContent.heroSubtitle),d(9),b("ngForOf",e.siteContent.heroFeatures),d(6),g(e.siteContent.heroBadge),d(),b("innerHTML",e.siteContent.heroTitle,Si),d(2),g(e.siteContent.heroSubtitle),d(2),b("ngForOf",e.siteContent.heroFeatures)}}function Bs(i,o){if(i&1){let e=A();a(0,"div",25)(1,"h4",26),l(2,"About Section"),s(),a(3,"div",27)(4,"div",28)(5,"label",29),l(6,"Badge Text"),s(),a(7,"input",53),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.aboutBadge,n)||(r.siteContent.aboutBadge=n),f(n)}),s()(),a(8,"div",28)(9,"label",29),l(10,"Experience Years"),s(),a(11,"input",54),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.experienceYears,n)||(r.siteContent.experienceYears=n),f(n)}),s()(),a(12,"div",28)(13,"label",29),l(14,"About Image URL"),s(),a(15,"input",31),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.aboutImageUrl,n)||(r.siteContent.aboutImageUrl=n),f(n)}),s()(),a(16,"div",32)(17,"label",29),l(18,"Section Title"),s(),a(19,"input",55),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.aboutTitle,n)||(r.siteContent.aboutTitle=n),f(n)}),s()(),a(20,"div",32)(21,"label",29),l(22,"Section Description"),s(),a(23,"textarea",34),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.aboutDescription,n)||(r.siteContent.aboutDescription=n),f(n)}),s()(),a(24,"div",28)(25,"label",29),l(26,"Vision Title"),s(),a(27,"input",56),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.visionTitle,n)||(r.siteContent.visionTitle=n),f(n)}),s()(),a(28,"div",28)(29,"label",29),l(30,"Mission Title"),s(),a(31,"input",56),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.missionTitle,n)||(r.siteContent.missionTitle=n),f(n)}),s()(),a(32,"div",28)(33,"label",29),l(34,"Vision Description"),s(),a(35,"textarea",57),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.visionDescription,n)||(r.siteContent.visionDescription=n),f(n)}),s()(),a(36,"div",28)(37,"label",29),l(38,"Mission Description"),s(),a(39,"textarea",57),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.missionDescription,n)||(r.siteContent.missionDescription=n),f(n)}),s()()(),a(40,"div",40)(41,"h6",41),l(42,"Preview:"),s(),a(43,"div",58)(44,"div",28)(45,"span",59),l(46),s(),a(47,"h3"),l(48),s(),a(49,"p"),l(50),s()()()()()}if(i&2){let e=u(2);d(7),v("ngModel",e.siteContent.aboutBadge),d(4),v("ngModel",e.siteContent.experienceYears),d(4),v("ngModel",e.siteContent.aboutImageUrl),d(4),v("ngModel",e.siteContent.aboutTitle),d(4),v("ngModel",e.siteContent.aboutDescription),d(4),v("ngModel",e.siteContent.visionTitle),d(4),v("ngModel",e.siteContent.missionTitle),d(4),v("ngModel",e.siteContent.visionDescription),d(4),v("ngModel",e.siteContent.missionDescription),d(7),g(e.siteContent.aboutBadge),d(2),g(e.siteContent.aboutTitle),d(2),g(e.siteContent.aboutDescription)}}function Vs(i,o){if(i&1){let e=A();a(0,"div",65)(1,"div",66)(2,"div",36)(3,"h6",2),l(4),s(),a(5,"div")(6,"button",67),S("click",function(){let n=p(e).index,r=u(3);return f(r.moveServiceCard(n,"up"))}),w(7,"i",68),s(),a(8,"button",67),S("click",function(){let n=p(e).index,r=u(3);return f(r.moveServiceCard(n,"down"))}),w(9,"i",69),s(),a(10,"button",70),S("click",function(){let n=p(e).index,r=u(3);return f(r.removeServiceCard(n))}),w(11,"i",52),s()()(),a(12,"div",27)(13,"div",71)(14,"label",29),l(15,"Icon Class"),s(),a(16,"input",72),x("ngModelChange",function(n){let r=p(e).$implicit;return y(r.icon,n)||(r.icon=n),f(n)}),s()(),a(17,"div",71)(18,"label",29),l(19,"Color"),s(),a(20,"select",73),x("ngModelChange",function(n){let r=p(e).$implicit;return y(r.color,n)||(r.color=n),f(n)}),a(21,"option",74),l(22,"Primary (Blue)"),s(),a(23,"option",75),l(24,"Success (Green)"),s(),a(25,"option",76),l(26,"Warning (Orange)"),s(),a(27,"option",77),l(28,"Danger (Red)"),s(),a(29,"option",78),l(30,"Info (Cyan)"),s(),a(31,"option",79),l(32,"Secondary (Gray)"),s()()(),a(33,"div",71)(34,"label",29),l(35,"Title"),s(),a(36,"input",56),x("ngModelChange",function(n){let r=p(e).$implicit;return y(r.title,n)||(r.title=n),f(n)}),s()(),a(37,"div",32)(38,"label",29),l(39,"Description"),s(),a(40,"textarea",33),x("ngModelChange",function(n){let r=p(e).$implicit;return y(r.description,n)||(r.description=n),f(n)}),s()(),a(41,"div",71)(42,"label",29),l(43,"Link Text"),s(),a(44,"input",56),x("ngModelChange",function(n){let r=p(e).$implicit;return y(r.linkText,n)||(r.linkText=n),f(n)}),s()(),a(45,"div",71)(46,"label",29),l(47,"Link URL"),s(),a(48,"input",56),x("ngModelChange",function(n){let r=p(e).$implicit;return y(r.linkUrl,n)||(r.linkUrl=n),f(n)}),s()()()()()}if(i&2){let e=o.$implicit,t=o.index,n=u(3);d(4),P("Service Card #",t+1),d(2),b("disabled",t===0),d(2),b("disabled",t===n.siteContent.services.length-1),d(8),v("ngModel",e.icon),d(4),v("ngModel",e.color),d(16),v("ngModel",e.title),d(4),v("ngModel",e.description),d(4),v("ngModel",e.linkText),d(4),v("ngModel",e.linkUrl)}}function zs(i,o){if(i&1&&(a(0,"div",71)(1,"div",80)(2,"div",26),w(3,"i"),s(),a(4,"h5"),l(5),s(),a(6,"p",81),l(7),s(),a(8,"a",82),l(9),s()()()),i&2){let e=o.$implicit;d(3),Ne("fs-2 text-"+e.color+" bi "+e.icon),d(2),g(e.title),d(2),g(e.description),d(2),g(e.linkText)}}function js(i,o){if(i&1){let e=A();a(0,"div",25)(1,"h4",26),l(2,"Services Section"),s(),a(3,"div",60)(4,"div",32)(5,"label",29),l(6,"Section Title"),s(),a(7,"input",56),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.servicesTitle,n)||(r.siteContent.servicesTitle=n),f(n)}),s()(),a(8,"div",32)(9,"label",29),l(10,"Section Subtitle"),s(),a(11,"textarea",33),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.servicesSubtitle,n)||(r.siteContent.servicesSubtitle=n),f(n)}),s()()(),a(12,"div",26)(13,"div",36)(14,"h5",2),l(15,"Service Cards"),s(),a(16,"button",37),S("click",function(){p(e);let n=u(2);return f(n.addServiceCard())}),w(17,"i",38),l(18,"Add Card "),s()(),E(19,Vs,49,9,"div",61),s(),a(20,"div",40)(21,"h6",41),l(22,"Preview:"),s(),a(23,"div",62)(24,"h4"),l(25),s(),a(26,"p",63),l(27),s()(),a(28,"div",27),E(29,zs,10,5,"div",64),s()()()}if(i&2){let e=u(2);d(7),v("ngModel",e.siteContent.servicesTitle),d(4),v("ngModel",e.siteContent.servicesSubtitle),d(8),b("ngForOf",e.siteContent.services),d(6),g(e.siteContent.servicesTitle),d(2),g(e.siteContent.servicesSubtitle),d(2),b("ngForOf",e.siteContent.services)}}function Ws(i,o){if(i&1){let e=A();a(0,"div",25)(1,"h4",26),l(2,"Call-to-Action Section"),s(),a(3,"div",27)(4,"div",32)(5,"label",29),l(6,"CTA Title"),s(),a(7,"input",56),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.ctaTitle,n)||(r.siteContent.ctaTitle=n),f(n)}),s()(),a(8,"div",32)(9,"label",29),l(10,"CTA Description"),s(),a(11,"textarea",33),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.ctaDescription,n)||(r.siteContent.ctaDescription=n),f(n)}),s()(),a(12,"div",28)(13,"label",29),l(14,"Button Text"),s(),a(15,"input",56),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.ctaButtonText,n)||(r.siteContent.ctaButtonText=n),f(n)}),s()(),a(16,"div",28)(17,"label",29),l(18,"Button Link"),s(),a(19,"input",56),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.ctaButtonLink,n)||(r.siteContent.ctaButtonLink=n),f(n)}),s()()(),a(20,"div",40)(21,"h6",41),l(22,"Preview:"),s(),a(23,"div",83)(24,"h3"),l(25),s(),a(26,"p",45),l(27),s(),a(28,"button",84),l(29),s()()()()}if(i&2){let e=u(2);d(7),v("ngModel",e.siteContent.ctaTitle),d(4),v("ngModel",e.siteContent.ctaDescription),d(4),v("ngModel",e.siteContent.ctaButtonText),d(4),v("ngModel",e.siteContent.ctaButtonLink),d(6),g(e.siteContent.ctaTitle),d(2),g(e.siteContent.ctaDescription),d(2),g(e.siteContent.ctaButtonText)}}function Hs(i,o){if(i&1){let e=A();a(0,"div",90)(1,"span",91),w(2,"i"),s(),a(3,"input",92),x("ngModelChange",function(n){let r=p(e).$implicit;return y(r.name,n)||(r.name=n),f(n)}),s(),a(4,"input",93),x("ngModelChange",function(n){let r=p(e).$implicit;return y(r.icon,n)||(r.icon=n),f(n)}),s(),a(5,"input",31),x("ngModelChange",function(n){let r=p(e).$implicit;return y(r.url,n)||(r.url=n),f(n)}),s(),a(6,"button",51),S("click",function(){let n=p(e).index,r=u(3);return f(r.removeSocialLink(n))}),w(7,"i",52),s()()}if(i&2){let e=o.$implicit;d(2),Ne(e.icon),d(),v("ngModel",e.name),d(),v("ngModel",e.icon),d(),v("ngModel",e.url)}}function Us(i,o){if(i&1&&(a(0,"div",86),w(1,"i"),a(2,"div",94),l(3),s()()),i&2){let e=o.$implicit;d(),Ne("fs-3 bi "+e.icon),d(2),g(e.name)}}function qs(i,o){if(i&1){let e=A();a(0,"div",25)(1,"h4",26),l(2,"Social Proof Section"),s(),a(3,"div",60)(4,"div",32)(5,"label",29),l(6,"Section Title"),s(),a(7,"input",56),x("ngModelChange",function(n){p(e);let r=u(2);return y(r.siteContent.socialProofTitle,n)||(r.siteContent.socialProofTitle=n),f(n)}),s()()(),a(8,"div",26)(9,"div",36)(10,"h5",2),l(11,"Social Links"),s(),a(12,"button",37),S("click",function(){p(e);let n=u(2);return f(n.addSocialLink())}),w(13,"i",38),l(14,"Add Link "),s()(),E(15,Hs,8,5,"div",85),s(),a(16,"div",40)(17,"h6",41),l(18,"Preview:"),s(),a(19,"div",86)(20,"h6",87),l(21),s(),a(22,"div",88),E(23,Us,4,3,"div",89),s()()()()}if(i&2){let e=u(2);d(7),v("ngModel",e.siteContent.socialProofTitle),d(8),b("ngForOf",e.siteContent.socialLinks),d(6),g(e.siteContent.socialProofTitle),d(2),b("ngForOf",e.siteContent.socialLinks)}}function Ys(i,o){if(i&1&&(a(0,"div",19)(1,"ul",20),E(2,Fs,4,5,"li",21),s(),E(3,Ns,40,9,"div",22)(4,Bs,51,12,"div",22)(5,js,30,6,"div",22)(6,Ws,30,7,"div",22)(7,qs,24,4,"div",22),s()),i&2){let e=u();d(2),b("ngForOf",e.tabs),d(),b("ngIf",e.activeTab==="hero"),d(),b("ngIf",e.activeTab==="about"),d(),b("ngIf",e.activeTab==="services"),d(),b("ngIf",e.activeTab==="cta"),d(),b("ngIf",e.activeTab==="social")}}var En=class i{constructor(o){this.siteContentService=o}siteContent=null;isLoading=!0;isSaving=!1;activeTab="hero";message="";messageType="success";tabs=[{id:"hero",label:"Hero Section",icon:"bi-image"},{id:"about",label:"About Section",icon:"bi-info-circle"},{id:"services",label:"Services Section",icon:"bi-grid"},{id:"cta",label:"CTA Section",icon:"bi-megaphone"},{id:"social",label:"Social Proof",icon:"bi-share"}];ngOnInit(){this.loadContent()}loadContent(){this.isLoading=!0,this.siteContentService.getSiteContent().subscribe({next:o=>{o?this.siteContent=o:this.siteContent=this.getDefaultContent(),this.isLoading=!1},error:o=>{console.error("Error loading site content:",o),this.showMessage("Error loading content","error"),this.isLoading=!1}})}getDefaultContent(){return{id:"1",heroBadge:"NEXT GEN SERVICE HUB",heroTitle:'You Bring the <span class="text-primary">Idea</span>. We Build the <span class="text-primary">Business</span>.',heroSubtitle:"Have money and a vision? We handle the rest. From Trade Licenses and Legal Paperwork to Web Development and Digital Marketing \u2014 LumiNex is your complete startup partner.",heroImageUrl:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",heroFeatures:[{icon:"bi-check-circle-fill",text:"Expert Teams"},{icon:"bi-check-circle-fill",text:"24/7 Support"},{icon:"bi-check-circle-fill",text:"Secure Portal"}],aboutBadge:"Who We Are",aboutTitle:"Driving Innovation with a Purpose",aboutDescription:"At LumiNex, we believe that professional service management should be seamless, transparent, and scalable for every business.",aboutImageUrl:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",visionTitle:"Our Vision",visionDescription:"To redefine the global landscape of B2B service delivery by creating an intelligent, transparent, and highly accessible ecosystem.",missionTitle:"Our Mission",missionDescription:"Our mission is to eliminate the operational hurdles that stifle business growth.",experienceYears:"10+ Years",servicesTitle:"Startup Packages",servicesSubtitle:"We don't just provide services; we build foundations. Choose a package that covers everything from your legal identity to your digital presence.",services:[{icon:"bi-rocket-takeoff",title:"Launch Packages",description:"Full startup readiness including Trade Licenses, Web/Mobile Apps, and Business Registration.",linkText:"View Packages",linkUrl:"/packages",color:"primary"},{icon:"bi-globe",title:"Digital Presence",description:"High-end Web development, E-commerce platforms, and SEO to get your brand seen globally.",linkText:"Explore Web",linkUrl:"/packages",color:"success"},{icon:"bi-megaphone",title:"Growth & Marketing",description:"Complete digital marketing, social media management, and brand identity kits for scale.",linkText:"Grow Now",linkUrl:"/packages",color:"warning"}],ctaTitle:"Ready to start your journey?",ctaDescription:"Join hundreds of successful businesses already using LumiNex.",ctaButtonText:"Explore All Packages",ctaButtonLink:"/packages",socialProofTitle:"Join our growing community",socialLinks:[{name:"Facebook",url:"https://facebook.com",icon:"bi-facebook"},{name:"LinkedIn",url:"https://linkedin.com",icon:"bi-linkedin"},{name:"GitHub",url:"https://github.com",icon:"bi-github"},{name:"YouTube",url:"https://youtube.com",icon:"bi-youtube"},{name:"WhatsApp",url:"https://wa.me",icon:"bi-whatsapp"}],isActive:!0,updatedAt:new Date().toISOString()}}saveContent(){this.siteContent&&(this.isSaving=!0,this.siteContent.updatedAt=new Date().toISOString(),this.siteContent.id?this.siteContentService.updateSiteContent(this.siteContent.id,this.siteContent).subscribe({next:()=>{this.showMessage("Content saved successfully!","success"),this.isSaving=!1},error:o=>{console.error("Error saving content:",o),this.showMessage("Error saving content","error"),this.isSaving=!1}}):this.siteContentService.createSiteContent(this.siteContent).subscribe({next:o=>{this.siteContent=o,this.showMessage("Content created successfully!","success"),this.isSaving=!1},error:o=>{console.error("Error creating content:",o),this.showMessage("Error creating content","error"),this.isSaving=!1}}))}showMessage(o,e){this.message=o,this.messageType=e,setTimeout(()=>{this.message=""},3e3)}addServiceCard(){if(!this.siteContent)return;let o={icon:"bi-star",title:"New Service",description:"Service description here",linkText:"Learn More",linkUrl:"/packages",color:"primary"};this.siteContent.services.push(o)}removeServiceCard(o){this.siteContent&&this.siteContent.services.splice(o,1)}moveServiceCard(o,e){if(!this.siteContent)return;let t=this.siteContent.services;e==="up"&&o>0?[t[o],t[o-1]]=[t[o-1],t[o]]:e==="down"&&o<t.length-1&&([t[o],t[o+1]]=[t[o+1],t[o]])}addSocialLink(){if(!this.siteContent)return;let o={name:"New Platform",url:"https://",icon:"bi-link"};this.siteContent.socialLinks.push(o)}removeSocialLink(o){this.siteContent&&this.siteContent.socialLinks.splice(o,1)}addHeroFeature(){if(!this.siteContent)return;let o={icon:"bi-check-circle-fill",text:"New Feature"};this.siteContent.heroFeatures.push(o)}removeHeroFeature(o){this.siteContent&&this.siteContent.heroFeatures.splice(o,1)}setActiveTab(o){this.activeTab=o}static \u0275fac=function(e){return new(e||i)(B(ji))};static \u0275cmp=D({type:i,selectors:[["app-site-content"]],decls:16,vars:7,consts:[[1,"site-content-editor"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],[1,"mb-0"],[1,"bi","bi-pencil-square","me-2"],[1,"btn","btn-outline-secondary","me-2",3,"click"],[1,"bi","bi-arrow-clockwise","me-1"],[1,"btn","btn-primary",3,"click","disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["class","bi bi-save me-1",4,"ngIf"],["class","alert","role","alert",3,"ngClass",4,"ngIf"],["class","text-center py-5",4,"ngIf"],["class","content-editor",4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"bi","bi-save","me-1"],["role","alert",1,"alert",3,"ngClass"],[1,"text-center","py-5"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"],[1,"mt-2","text-muted"],[1,"content-editor"],["role","tablist",1,"nav","nav-tabs","mb-4"],["class","nav-item",4,"ngFor","ngForOf"],["class","tab-content",4,"ngIf"],[1,"nav-item"],["type","button","role","tab",1,"nav-link",3,"click"],[1,"tab-content"],[1,"mb-3"],[1,"row","g-3"],[1,"col-md-6"],[1,"form-label"],["type","text","placeholder","e.g., NEXT GEN SERVICE HUB",1,"form-control",3,"ngModelChange","ngModel"],["type","text","placeholder","https://...",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-12"],["rows","2",1,"form-control",3,"ngModelChange","ngModel"],["rows","3",1,"form-control",3,"ngModelChange","ngModel"],[1,"mt-4"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"btn","btn-sm","btn-outline-primary",3,"click"],[1,"bi","bi-plus","me-1"],["class","col-md-6",4,"ngFor","ngForOf"],[1,"mt-4","p-3","bg-light","rounded"],[1,"text-muted","mb-3"],[1,"bg-primary","text-white","p-4","rounded"],[1,"badge","bg-white","text-primary","mb-2"],[3,"innerHTML"],[1,"lead"],[1,"d-flex","gap-3"],[4,"ngFor","ngForOf"],[1,"input-group"],["type","text","placeholder","Bootstrap icon class",1,"form-control",3,"ngModelChange","ngModel"],["type","text","placeholder","Feature text",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-outline-danger",3,"click"],[1,"bi","bi-trash"],["type","text","placeholder","e.g., Who We Are",1,"form-control",3,"ngModelChange","ngModel"],["type","text","placeholder","e.g., 10+ Years",1,"form-control",3,"ngModelChange","ngModel"],["type","text","placeholder","Driving Innovation with a Purpose",1,"form-control",3,"ngModelChange","ngModel"],["type","text",1,"form-control",3,"ngModelChange","ngModel"],["rows","4",1,"form-control",3,"ngModelChange","ngModel"],[1,"row"],[1,"badge","bg-primary","mb-2"],[1,"row","g-3","mb-4"],["class","card mb-3",4,"ngFor","ngForOf"],[1,"text-center","mb-4"],[1,"text-muted"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"card","mb-3"],[1,"card-body"],[1,"btn","btn-sm","btn-outline-secondary","me-1",3,"click","disabled"],[1,"bi","bi-arrow-up"],[1,"bi","bi-arrow-down"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"col-md-4"],["type","text","placeholder","bi-rocket-takeoff",1,"form-control",3,"ngModelChange","ngModel"],[1,"form-select",3,"ngModelChange","ngModel"],["value","primary"],["value","success"],["value","warning"],["value","danger"],["value","info"],["value","secondary"],[1,"card","h-100","text-center","p-3"],[1,"small","text-muted"],[1,"text-primary"],[1,"bg-primary","text-white","p-5","rounded","text-center"],[1,"btn","btn-light","btn-lg","rounded-pill","px-4"],["class","input-group mb-2",4,"ngFor","ngForOf"],[1,"text-center"],[1,"text-muted","text-uppercase"],[1,"d-flex","justify-content-center","gap-4","mt-3"],["class","text-center",4,"ngFor","ngForOf"],[1,"input-group","mb-2"],[1,"input-group-text"],["type","text","placeholder","Platform name",1,"form-control",3,"ngModelChange","ngModel"],["type","text","placeholder","Icon class (bi-facebook)",1,"form-control",3,"ngModelChange","ngModel"],[1,"small"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"div",1)(2,"h2",2),w(3,"i",3),l(4,"Website Content Editor "),s(),a(5,"div")(6,"button",4),S("click",function(){return t.loadContent()}),w(7,"i",5),l(8,"Reload "),s(),a(9,"button",6),S("click",function(){return t.saveContent()}),E(10,Rs,1,0,"span",7)(11,Is,1,0,"i",8),l(12),s()()(),E(13,Os,2,5,"div",9)(14,As,6,0,"div",10)(15,Ys,8,6,"div",11),s()),e&2&&(d(9),b("disabled",t.isSaving||t.isLoading),d(),b("ngIf",t.isSaving),d(),b("ngIf",!t.isSaving),d(),P(" ",t.isSaving?"Saving...":"Save Changes"," "),d(),b("ngIf",t.message),d(),b("ngIf",t.isLoading),d(),b("ngIf",!t.isLoading&&t.siteContent))},dependencies:[$,ue,oe,pe,ae,Me,ke,fe,Ee,he,be,Ht],styles:[".site-content-editor[_ngcontent-%COMP%]{padding:1rem}.content-editor[_ngcontent-%COMP%]{background:#fff;border-radius:.5rem;padding:1.5rem}.nav-tabs[_ngcontent-%COMP%]{border-bottom:2px solid #e9ecef}.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{border:none;color:#6c757d;font-weight:500;padding:.75rem 1.25rem;border-bottom:2px solid transparent;margin-bottom:-2px;transition:all .2s ease}.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{color:#0d6efd;border-bottom-color:#0d6efd}.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#0d6efd;border-bottom-color:#0d6efd;background:transparent}.tab-content[_ngcontent-%COMP%]{padding:1.5rem 0}.card[_ngcontent-%COMP%]{border:1px solid #e9ecef;border-radius:.5rem;transition:box-shadow .2s ease}.card[_ngcontent-%COMP%]:hover{box-shadow:0 .125rem .25rem #00000013}.form-label[_ngcontent-%COMP%]{font-weight:500;font-size:.875rem;color:#495057;margin-bottom:.5rem}.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%]{border-radius:.375rem;border:1px solid #ced4da;padding:.5rem .75rem;font-size:.9375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus{border-color:#0d6efd;box-shadow:0 0 0 .2rem #0d6efd40}textarea.form-control[_ngcontent-%COMP%]{resize:vertical;min-height:80px}.btn[_ngcontent-%COMP%]{font-weight:500;border-radius:.375rem;padding:.5rem 1rem;transition:all .2s ease}.btn-primary[_ngcontent-%COMP%]{background-color:#0d6efd;border-color:#0d6efd}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#0b5ed7;border-color:#0a58ca}.btn-outline-primary[_ngcontent-%COMP%]{color:#0d6efd;border-color:#0d6efd}.btn-outline-primary[_ngcontent-%COMP%]:hover{background-color:#0d6efd;color:#fff}.btn-outline-danger[_ngcontent-%COMP%]{color:#dc3545;border-color:#dc3545}.btn-outline-danger[_ngcontent-%COMP%]:hover{background-color:#dc3545;color:#fff}.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{flex:1}.input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{flex-shrink:0}.alert[_ngcontent-%COMP%]{border-radius:.5rem;border:none;padding:1rem 1.25rem}.alert-success[_ngcontent-%COMP%]{background-color:#d1e7dd;color:#0f5132}.alert-danger[_ngcontent-%COMP%]{background-color:#f8d7da;color:#842029}.preview-section[_ngcontent-%COMP%]{background:#f8f9fa;border-radius:.5rem;padding:1.5rem;margin-top:1.5rem}@media(max-width:768px){.site-content-editor[_ngcontent-%COMP%]{padding:.5rem}.content-editor[_ngcontent-%COMP%]{padding:1rem}.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding:.5rem .75rem;font-size:.875rem}.input-group[_ngcontent-%COMP%]{flex-direction:column}.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{width:100%}.input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%;margin-top:.25rem}}"]})};var mf=[{path:"dashboard",component:Gt},{path:"all-requests",component:Zt},{path:"client-management",component:Kt},{path:"employee-management",component:Qt},{path:"service-management",component:$t},{path:"revenue",component:Jt},{path:"payments",component:en},{path:"theme",component:Sn},{path:"site-content",component:En},{path:"",redirectTo:"dashboard",pathMatch:"full"}];export{mf as ADMIN_ROUTES};
