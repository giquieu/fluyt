"use strict";(self.webpackChunkcore_demo=self.webpackChunkcore_demo||[]).push([[592],{3625:(E,_,o)=>{o.d(_,{L:()=>v});var l=o(3423),b=o(5435),p=o(7519),t=o(7716),d=o(8583),f=o(6627);function h(r,s){1&r&&t._UZ(0,"mat-icon",9),2&r&&t.Q6J("svgIcon","heroicons_solid:chevron-right")}function g(r,s){if(1&r&&(t.TgZ(0,"a",10),t._uU(1),t.qZA()),2&r){const e=t.oxw().$implicit;t.Q6J("routerLink",e.url),t.xp6(1),t.hij(" ",e.label," ")}}function x(r,s){if(1&r&&(t.TgZ(0,"a",11),t._uU(1),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.label," ")}}function C(r,s){if(1&r&&(t.TgZ(0,"div",5),t.YNc(1,h,1,1,"mat-icon",6),t.YNc(2,g,2,2,"a",7),t.YNc(3,x,2,1,"a",8),t.qZA()),2&r){const e=s.$implicit,n=s.index;t.xp6(1),t.Q6J("ngIf",0!==n),t.xp6(1),t.Q6J("ngIf",!e.isAbstract),t.xp6(1),t.Q6J("ngIf",e.isAbstract)}}let v=(()=>{class r{constructor(e,n){this.router=e,this.activatedRoute=n,this.breadcrumbs=this.buildBreadCrumb(this.activatedRoute.root)}ngOnInit(){this.router.events.pipe((0,b.h)(e=>e instanceof l.m2),(0,p.x)()).subscribe(()=>{this.breadcrumbs=this.buildBreadCrumb(this.activatedRoute.root)})}buildBreadCrumb(e,n="",a=[]){let i=[...a];if(e.firstChild&&!e.firstChild.firstChild)return this.labelCurrentRoute=this.getLabel(e.routeConfig),i;const c=this.getBreadcrumbItem(e,n);return i=c.label?[...a,c]:[...a],e.firstChild?this.buildBreadCrumb(e.firstChild,c.url,i):i}getBreadcrumbItem(e,n=""){const a=e.routeConfig,i=this.getLabel(a),c=a&&a.data&&a.data.isClickable,m=a&&a.data?a.path:"",A=!(!a||!a.data)&&a.data.isAbstract,{label:B,path:u}=this.getLabelAndPath(m,i,e);return{label:B,isClickable:c,url:u?`${n}/${u}`:n,isAbstract:A}}getLabel(e){return e&&e.data?e.data.breadcrumb:""}getLabelAndPath(e,n,a){const i=e.split("/").pop();if(i.startsWith(":")&&a.snapshot){const m=i.split(":")[1];e=e.replace(i,a.snapshot.params[m]),n=a.snapshot.params[m]}return{path:e,label:n}}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(l.F0),t.Y36(l.gz))},r.\u0275cmp=t.Xpm({type:r,selectors:[["breadcrumb"]],decls:6,vars:2,consts:[[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["class","flex items-center whitespace-nowrap",4,"ngFor","ngForOf"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex","items-center","whitespace-nowrap"],["class","icon-size-5 text-secondary",3,"svgIcon",4,"ngIf"],["class","text-primary-500 cursor-pointer",3,"routerLink",4,"ngIf"],["class","text-secondary",4,"ngIf"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"text-primary-500","cursor-pointer",3,"routerLink"],[1,"text-secondary"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,C,4,3,"div",2),t.qZA(),t.TgZ(3,"div",3),t.TgZ(4,"h2",4),t._uU(5),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngForOf",n.breadcrumbs),t.xp6(3),t.hij(" ",n.labelCurrentRoute," "))},directives:[d.sg,d.O5,f.Hw,l.yS],encapsulation:2}),r})()}}]);