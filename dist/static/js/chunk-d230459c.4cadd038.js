(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d230459c"],{"2ebf":function(t,e,a){},"50ac":function(t,e,a){"use strict";a("e273")},7878:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));a("b680"),a("d3b7"),a("25f0");function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===t)return"";var e=new Date(t);if("Invalid Date"===e.toString())return"";var a=e.getFullYear(),n=e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1,i=e.getDate()<10?"0"+e.getDate():e.getDate(),s=e.getHours()<10?"0"+e.getHours():e.getHours(),o=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),r=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return a+"-"+n+"-"+i+" "+s+":"+o+":"+r}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(null===t)return"";var e=0;while(t>=1024)t/=1024,e++;return t=t.toFixed(2),t+=[" B"," KB"," MB"," GB"," TB"][e],t}},"797b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{staticClass:"mt-3 p-3",staticStyle:{"border-radius":"4px","background-color":"rgb(233, 233, 233)"},attrs:{separator:"/"}},t._l(t.breadPaths,(function(e){return a("el-breadcrumb-item",{key:e.label,attrs:{to:e.to}},[t._v(t._s(e.label))])})),1),a("el-input",{staticClass:"mt-3",attrs:{placeholder:"过滤...(字符串/正则)"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("el-table",{staticClass:"op-l-table mt-3",staticStyle:{"border-radius":"4px",border:"1px solid #DCDFE6"},attrs:{data:t.list},on:{"row-contextmenu":t.showMenu}},[a("el-table-column",{attrs:{type:"index","class-name":"op-l-icon"},scopedSlots:t._u([{key:"header",fn:function(){return[a("svg-icon",{attrs:{"class-name":t.listData.$dirty?-1===t.listData.$dirty?"op-l-refresh op-c-warning":"op-l-refresh op-l-danger":"op-l-refresh","icon-class":"autorenew"},on:{click:function(e){return t.fetch()}}})]},proxy:!0},{key:"default",fn:function(e){return[a("svg-icon",{attrs:{"icon-class":t.getIconClass(e.row),"class-name":-1===e.row.type?"op-i-loading":""}})]}}])}),a("el-table-column",{attrs:{label:"name",property:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{on:{click:function(a){return t.ch(e.row)}}},[t._v(t._s(e.row.name))])]}}])}),a("el-table-column",{attrs:{label:"time",property:"time",formatter:t.formatDate0,sortable:"","class-name":"hidden-sm-and-down op-l-time"}}),a("el-table-column",{attrs:{label:"size",property:"size",formatter:t.formatSize0,sortable:"","class-name":"hidden-xs-only op-l-size"}}),t.listData.nextToken?a("infinite-loading",{attrs:{slot:"append",spinner:"waveDots","force-use-infinite-wrapper1":".el-table__body-wrapper"},on:{infinite:t.infiniteHandler},slot:"append"}):t._e()],1),a("div",{staticClass:"mr-3 mb-5",staticStyle:{position:"fixed",right:"0",bottom:"0"}},[a("div",{staticClass:"op-s-icon my-3",on:{click:function(e){return t.handleClipboard(t.$store.getters.baseURL+t.path,e)}}},[a("svg-icon",{staticStyle:{"pointer-events":"none"},attrs:{"icon-class":"content-paste"}})],1),a("el-dropdown",{on:{command:t.handleSideMenuCommand}},[a("div",{staticClass:"op-s-icon"},[a("svg-icon",{attrs:{"icon-class":"menu"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"touch"}},[t._v("新建文本")]),a("el-dropdown-item",{attrs:{command:"mkdir"}},[t._v("新建文件夹")]),a("el-dropdown-item",{attrs:{command:"upload-files"}},[t._v("上传文件")]),a("el-dropdown-item",{attrs:{command:"upload"}},[t._v("任务状态")])],1)],1)],1),a("file-context-menu",{ref:"fileMenu"}),a("file-touch"),a("file-uploader",{ref:"fileUploader"})],1)},i=[],s=(a("99af"),a("4de4"),a("caad"),a("baa5"),a("13d5"),a("fb6a"),a("b0c0"),a("4d63"),a("ac1f"),a("25f0"),a("2532"),a("841c"),a("1276"),a("2ca0"),a("5530")),o=a("7878"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:"上传状态",visible:t.uploadData.visible,width:"80%"},on:{"update:visible":function(e){return t.$set(t.uploadData,"visible",e)}}},[a("el-table",{staticClass:"op-u-table",staticStyle:{width:"100%"},attrs:{data:t.uploadData.queue}},[a("el-table-column",{attrs:{prop:"state",label:"state"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[t._v(" "+t._s(t.getState(e.row.state))+" "),a("i",{directives:[{name:"show",rawName:"v-show",value:1!==e.row.state,expression:"scope.row.state !== 1"}],staticClass:"el-icon-delete",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.remove(e.row)}}}),a("i",{directives:[{name:"show",rawName:"v-show",value:1===e.row.state,expression:"scope.row.state === 1"}],staticClass:"el-icon-video-pause",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.stop(e.row)}}}),a("i",{directives:[{name:"show",rawName:"v-show",value:e.row.state<0,expression:"scope.row.state < 0"}],staticClass:"el-icon-refresh-right",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.retry(e.row)}}})])}}])}),a("el-table-column",{attrs:{prop:"name",label:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[t._v(t._s(e.row.file.name))])}}])}),a("el-table-column",{attrs:{prop:"path",label:"path","class-name":"hidden-xs-only"}}),a("el-table-column",{attrs:{prop:"time",label:"time",formatter:t.formatDate,"class-name":"hidden-xs-only"}}),a("el-table-column",{attrs:{prop:"offset",label:"offset",formatter:t.formatSize,"class-name":"hidden-xs-only"}}),a("el-table-column",{attrs:{prop:"progress",label:"progress",formatter:t.progress}})],1)],1),a("input",{ref:"upload-files",staticClass:"d-none",attrs:{type:"file",multiple:""},on:{change:t.uploadOnChange}}),a("input",{ref:"upload-folder",staticClass:"d-none",attrs:{type:"file",webkitdirectory:""},on:{change:t.uploadOnChange}})],1)},c=[],l=(a("7db0"),a("c975"),a("a434"),a("a9e3"),a("b680"),a("bc3a")),u=a.n(l),p=(a("96cf"),a("1da1")),m=a("b775"),h=a("4360"),d={get PATH_PREFIX(){return h["a"].state.system.PATH_API+"file:"},ls:function(t,e){var a=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(m["a"])({url:a.PATH_PREFIX+t,method:"get",params:{page:e},headers:{accept:"application/json"}}));case 1:case"end":return n.stop()}}),n)})))()},mkdir:function(t,e){var a=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(m["a"])({url:a.PATH_PREFIX+t,method:"post",data:{name:e,command:"mkdir"},headers:{accept:"application/json"}}));case 1:case"end":return n.stop()}}),n)})))()},mv:function(t,e){var a=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(m["a"])({url:a.PATH_PREFIX+t,method:"post",data:{path2:e,command:"mv"},headers:{accept:"application/json"}}));case 1:case"end":return n.stop()}}),n)})))()},cp:function(t,e){var a=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(m["a"])({url:a.PATH_PREFIX+t,method:"post",data:{path2:e,command:"cp"},headers:{accept:"application/json"}}));case 1:case"end":return n.stop()}}),n)})))()},rm:function(t){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(m["a"])({url:e.PATH_PREFIX+t,method:"delete",headers:{accept:"application/json"}}));case 1:case"end":return a.stop()}}),a)})))()},ren:function(t,e){var a=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(m["a"])({url:a.PATH_PREFIX+t,method:"post",data:{name:e,command:"ren"},headers:{accept:"application/json"}}));case 1:case"end":return n.stop()}}),n)})))()},touch:function(t,e,a){var n=this;return Object(p["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(m["a"])({url:n.PATH_PREFIX+t,method:"post",data:{name:e,content:a,command:"touch"},headers:{accept:"application/json"}}));case 1:case"end":return i.stop()}}),i)})))()},upload:function(t,e){var a=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(m["a"])({url:a.PATH_PREFIX+t,method:"post",data:{name:e,command:"upload"},headers:{accept:"application/json"}}));case 1:case"end":return n.stop()}}),n)})))()}},f=d,v={data:function(){return{path:"",uploadData:this.$store.getters.fileListUpload}},methods:{fUpload:function(){var t=this,e=this.uploadData.now;f.upload(e.path,e.file.name).then((function(e){t.fileUpload(e,e.uploadUrl)})).catch((function(){e.state=-1,t.uploadNext()}))},uploadNext:function(){this.uploadData.now&&1===this.uploadData.now.state||(this.uploadData.now=this.uploadData.queue.find((function(t){return 0===t.state})),this.uploadData.now&&(this.uploadData.now.state=1,this.fUpload()))},uploadOnChange:function(t){console.log(t.target.files);for(var e=t.target.files,a=0;a<e.length;a++)this.uploadData.queue.push({path:this.path,file:e[a],time:new Date,state:0,offset:0,startTime:0});this.uploadNext()},fileUpload:function(t,e){var a,n,i=this,s=this.uploadData.now;if(s&&1===s.state){var o=s.file,r=t.nextExpectedRanges[0].split("-");a=Number(r[0]),n=r[1]?Number(r[1])+1:o.size,n>a+10485760&&(n=a+10485760);var c=new FileReader;c.readAsArrayBuffer(o.slice(a,n)),c.onload=function(r){console.log("send: ["+a+","+n+")");var c=u.a.CancelToken.source();u.a.put(e,r.target.result,{headers:{"Content-Range":"bytes ".concat(a,"-").concat(n-1,"/").concat(o.size)},onUploadProgress:function(t){s.offset=a+t.loaded,1!==s.state&&c.cancel()},withCredentials:!1,cancelToken:c.token}).then((function(r){if(console.log(r.data),console.log("success: ["+a+","+n+")"),s.offset=n,201===r.status)i.$store.commit("fileList/CACHE_APPEND",s.path,{type:0,name:o.name,size:o.size,mime:o.type,time:o.lastModified}),i.$notify.success("upload "+s.path+" "+o.name),console.log("success: "+JSON.stringify(t)),s.state=2,i.uploadNext();else{if(202!==r.status)throw r;i.fileUpload(r.data,e)}})).catch((function(t){console.log(t),i.$notify.error(String(t.message)),s&&(s.state=-1),i.uploadNext()}))}}else this.uploadNext()},upload:function(){this.path=this.$store.getters.path,this.$refs["upload-files"].click()},getState:function(t){return-2===t?"已取消":-1===t?"错误":0===t?"等待":1===t?"上传中":2===t?"完成":"未知"},formatDate:function(t){return Object(o["a"])(t.time)},formatSize:function(t){return Object(o["b"])(t.offset)},remove:function(t){var e=this.uploadData.queue.indexOf(t);e>=0&&this.uploadData.queue.splice(e,1)},stop:function(t){t.state=-2,this.uploadNext()},retry:function(t){t.state=0,this.uploadNext()},progress:function(t){return Number(t.offset/t.file.size*100).toFixed(0)+"%"}}},b=v,w=(a("50ac"),a("2877")),g=Object(w["a"])(b,r,c,!1,null,null,null),y=g.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"新建文本",visible:t.touchData.visible,width:"80%"},on:{"update:visible":function(e){return t.$set(t.touchData,"visible",e)}}},[a("p",[t._v("文件名")]),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.touchData.name,callback:function(e){t.$set(t.touchData,"name",e)},expression:"touchData.name"}}),a("p",[t._v("文件内容")]),a("el-input",{attrs:{type:"textarea",rows:12,placeholder:"请输入内容"},model:{value:t.touchData.content,callback:function(e){t.$set(t.touchData,"content",e)},expression:"touchData.content"}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.touchData.visible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.touch}},[t._v("确 定")])],1)],1)},D=[],_={data:function(){return{touchData:this.$store.getters.fileListTouch}},methods:{touch:function(){var t=this,e=this.$store.getters.path;this.$store.commit("fileList/CACHE_DIRTY",{path:e,dirty:-1});var a=this.touchData.name;console.log("touch "+a),f.touch(e,a,this.touchData.content).then((function(){t.$store.commit("fileList/CACHE_DIRTY",{path:e,dirty:null}),t.$store.commit("fileList/CACHE_APPEND",{path:e,row:{type:0,name:a,time:Date.now(),size:null,mime:"?"}}),t.$notify.success("mkdir "+e+" "+a)})).catch((function(){t.$store.commit("fileList/CACHE_DIRTY",{path:e,dirty:-2})})),this.touchData.visible=!1}}},x=_,$=Object(w["a"])(x,C,D,!1,null,null,null),k=$.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.menuData.row?a("div",{staticStyle:{position:"fixed",width:"100%",height:"100%",top:"0",left:"0"},on:{click:t.hiddenMenu,contextmenu:function(e){return e.preventDefault(),t.hiddenMenu(e)}}},[a("ul",{staticClass:"el-dropdown-menu el-popper",style:{position:"absolute",left:t.menuData.x+"px",top:t.menuData.y+"px","transform-origin":"center bottom","z-index":2017},attrs:{"x-placement":"top-start"}},[t.listData.file?[0===t.menuData.row.type?a("li",{staticClass:"el-dropdown-menu__item",attrs:{tabindex:"-1"},on:{click:function(e){return t.preview(t.$store.getters.baseURL+t.path+"?preview")}}},[a("i",{staticClass:"el-icon-view"}),t._v("预览 ")]):t._e(),a("li",{staticClass:"el-dropdown-menu__item",attrs:{tabindex:"-1"},on:{click:function(e){return t.handleClipboard(t.$store.getters.baseURL+t.path,e)}}},[a("i",{staticClass:"el-icon-share"}),t._v("分享 ")])]:1===t.menuData.mvOrCp?[a("li",{staticClass:"el-dropdown-menu__item",attrs:{tabindex:"-1"},on:{click:t.fMove}},[a("i",{staticClass:"el-icon-ship"}),t._v("确认移动")]),a("li",{staticClass:"el-dropdown-menu__item",attrs:{tabindex:"-1"},on:{click:function(e){return t.setMvOrCp(0)}}},[a("i",{staticClass:"el-icon-close"}),t._v("取消移动 ")])]:2===t.menuData.mvOrCp?[a("li",{staticClass:"el-dropdown-menu__item",attrs:{tabindex:"-1"},on:{click:t.fCopy}},[a("i",{staticClass:"el-icon-copy-document"}),t._v("确认粘贴")]),a("li",{staticClass:"el-dropdown-menu__item",attrs:{tabindex:"-1"},on:{click:function(e){return t.setMvOrCp(0)}}},[a("i",{staticClass:"el-icon-close"}),t._v("取消复制 ")])]:[0===t.menuData.row.type?a("li",{staticClass:"el-dropdown-menu__item",attrs:{tabindex:"-1"},on:{click:function(e){return t.preview(t.$store.getters.baseURL+t.path+t.menuData.row.name+"?preview")}}},[a("i",{staticClass:"el-icon-view"}),t._v("预览 ")]):a("li",{staticClass:"el-dropdown-menu__item",attrs:{tabindex:"-1"},on:{click:function(e){return t.$router.push({name:"FileList",params:{pathMatch:t.path+t.menuData.row.name+"/"}})}}},[a("i",{staticClass:"el-icon-view"}),t._v("打开 ")]),a("li",{staticClass:"el-dropdown-menu__item",attrs:{tabindex:"-1"},on:{click:t.fRename}},[a("i",{staticClass:"el-icon-edit"}),t._v("重命名")]),a("li",{staticClass:"el-dropdown-menu__item",attrs:{tabindex:"-1"},on:{click:function(e){return t.setMvOrCp(1)}}},[a("i",{staticClass:"el-icon-ship"}),t._v("移动 ")]),a("li",{staticClass:"el-dropdown-menu__item",attrs:{tabindex:"-1"},on:{click:function(e){return t.setMvOrCp(2)}}},[a("i",{staticClass:"el-icon-copy-document"}),t._v("复制 ")]),a("li",{staticClass:"el-dropdown-menu__item",attrs:{tabindex:"-1"},on:{click:t.fRemove}},[a("i",{staticClass:"el-icon-delete"}),t._v("删除")]),a("li",{staticClass:"el-dropdown-menu__item",attrs:{tabindex:"-1"},on:{click:function(e){return t.handleClipboard(t.$store.getters.baseURL+t.path+t.menuData.row.name,e)}}},[a("i",{staticClass:"el-icon-share"}),t._v("分享 ")])]],2)]):t._e()},O=[],M=a("2f62"),P=a("2b0e"),E=a("b311"),T=a.n(E);function j(){P["default"].prototype.$message({message:"Copy successfully",type:"success",duration:1500})}function L(){P["default"].prototype.$message({message:"Copy failed",type:"error"})}function A(t,e){var a=new T.a(e.target,{text:function(){return t}});a.on("success",(function(){j(),a.destroy()})),a.on("error",(function(){L(),a.destroy()})),a.onClick(e)}var H={data:function(){return{cache:this.$store.getters.fileListCache,menuData:this.$store.getters.fileListMenu}},methods:{hiddenMenu:function(){this.menuData.row=null},fRename:function(){var t=this,e=this.menuData.row;if(e){var a=this.path+e.name,n=e.type,i="?";this.$prompt("请输入新文件名","重命名",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/.+/,inputErrorMessage:"文件名不能为空"}).then((function(t){var n=t.value;return e.type=-1,i=n,console.log("ren "+a+" "+i),f.ren(a,i)})).then((function(){e.type=n,e.name=i,t.$notify.success("ren "+a+" "+i)})).catch((function(t){e.type="string"===typeof t?n:-2}))}},fMkdir:function(){var t=this,e=this.path,a="?";this.$prompt("请输入文件夹名","新建文件夹",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/.+/,inputErrorMessage:"文件夹名不能为空"}).then((function(t){var n=t.value;return a=n,console.log("mkdir "+e+" "+a),f.mkdir(e,a)})).then((function(){t.$store.commit("fileList/CACHE_APPEND",{path:e,row:{type:1,name:a,time:Date.now(),size:0,mime:""}}),t.$notify.success("mkdir "+e+" "+a)}))},fRemove:function(){var t=this,e=this.menuData.row;if(e){var a=this.path+e.name,n=e.type;this.$confirm("删除该文件, 是否继续?","删除确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return e.type=-1,console.log("rm "+a),f.rm(a)})).then((function(){e.type=n,t.$store.commit("fileList/CACHE_POP",{path:a,row:e}),t.$notify.success("rm "+a)})).catch((function(t){e.type="string"===typeof t?n:-2}))}},fCopy:function(){var t=this;if(2===this.menuData.mvOrCp){var e=this.menuData,a=e.srcRow,n=e.srcPath,i=this.path,s=a.type;a.type=-1,this.$store.commit("fileList/CACHE_DIRTY",{path:i,dirty:-1}),console.log("cp "+n+a.name+" "+i),f.cp(n+a.name,i).then((function(){a.type=s,t.$store.commit("fileList/CACHE_APPEND",{path:i,row:a}),t.$store.commit("fileList/CACHE_DIRTY",{path:i,dirty:null}),t.$notify.success("cp "+n+a.name+" "+i)})).catch((function(){a.type=-2,t.$store.commit("fileList/CACHE_DIRTY",{path:i,dirty:-2})})),this.setMvOrCp(0)}},fMove:function(){var t=this;if(1===this.menuData.mvOrCp){var e=this.menuData,a=e.srcRow,n=e.srcPath,i=this.path,s=a.type;a.type=-1,this.$store.commit("fileList/CACHE_DIRTY",{path:i,dirty:-1}),console.log("mv "+n+a.name+" "+i),f.mv(n+a.name,i).then((function(){a.type=s,t.$store.commit("fileList/CACHE_MOVE",{srcPath:n,srcRow:a,path:i}),t.$store.commit("fileList/CACHE_DIRTY",{path:i,dirty:null}),t.$notify.success("mv "+n+a.name+" "+i)})).catch((function(){a.type=-2,t.$store.commit("fileList/CACHE_DIRTY",{path:i,dirty:-2})})),this.setMvOrCp(0)}},setMvOrCp:function(t){this.menuData.mvOrCp=t,0===t?(this.menuData.srcPath=null,this.menuData.srcRow=null):(this.menuData.srcPath=this.path,this.menuData.srcRow=this.menuData.row)},handleClipboard:function(t,e){A(t,e)},preview:function(t){window.open(t,"_blank")}},computed:Object(s["a"])({},Object(M["b"])(["listData","path"]))},S=H,I=Object(w["a"])(S,R,O,!1,null,null,null),F=I.exports,z={components:{FileContextMenu:F,FileTouch:k,FileUploader:y},data:function(){return{cache:this.$store.getters.fileListCache,search:"",menuData:this.$store.getters.fileListMenu}},created:function(){var t=this.$route.params.pathMatch;t&&t.startsWith("/")?this.$store.commit("fileList/PATH_SET",t):this.$router.push({name:"FileList",params:{pathMatch:"/"},replaced:!0}),console.log("created:"+t)},watch:{$route:function(t,e){t.path!==e.path&&this.$store.commit("fileList/PATH_SET",t.params.pathMatch),console.log("watch:"+t.params.pathMatch)}},methods:{ch:function(t){console.log(t),t.type<0||0===t.type||this.$router.push({name:"FileList",params:{pathMatch:this.path+t.name+"/"}})},fetch:function(){var t=this,e=this.path||"/";this.listData.$loading?this.$message({message:"waiting for the last response",type:"warning",duration:5e3}):(this.cache[e]={$loading:!0,$dirty:-1},f.ls(e).then((function(a){t.cache[e]=a})).catch((function(a){t.cache[e]=a,t.$set(a,"$dirty",-2),a.normal})))},formatDate0:function(t){return Object(o["a"])(t.time)},formatSize0:function(t){return Object(o["b"])(t.size)},infiniteHandler:function(t){var e=this.listData.nextToken;if(e){var a=this.path,n=this.cache[a];f.ls(a,e).then((function(a){e===n.nextToken&&n.list&&(n.nextToken=a.nextToken,n.list=n.list.concat(a.list)),t.loaded()})).catch((function(){t.error()}))}else t.complete()},getIconClass:function(t){return-2===t.type?"alert-circle-outline":-1===t.type?"spinner":0===t.type?"file":1===t.type?"folder":3===t.type?"folder-google-drive":""},showMenu:function(t,e,a){a.preventDefault(),t.type<0||(this.menuData.x=a.clientX,this.menuData.y=a.clientY,this.menuData.row=t)},handleSideMenuCommand:function(t){"mkdir"===t?this.$refs["fileMenu"].fMkdir():"touch"===t?this.$store.getters.fileListTouch.visible=!0:"upload-files"===t?this.$refs["fileUploader"].upload():"upload"===t&&(this.$store.getters.fileListUpload.visible=!0)},handleClipboard:function(t,e){A(t,e)}},computed:Object(s["a"])(Object(s["a"])({},Object(M["b"])(["path","listData"])),{},{list:function(){if(this.listData.$loading)return[{name:"Loading...",time:null,size:null,mime:"",type:-1}];if(this.listData.message)return[{name:this.listData.message,time:null,size:null,mime:"",type:-2}];if(this.listData.file)return[this.listData.file];if(this.listData.list){var t=this.listData.list;if(this.search){var e=this.search;if(!e.startsWith("/"))return t.filter((function(t){return t.name.includes(e)}));if(e.length>1){var a=e.lastIndexOf("/"),n=0===a?new RegExp(e.slice(1)):new RegExp(e.slice(1,a),e.slice(a+1));return t.filter((function(t){return n.test(t.name)}))}}return t}return this.fetch(),[{name:"Loading...",time:null,size:null,mime:"",type:-1}]},breadPaths:function(){var t=[{label:"Home",to:{name:"FileList",params:{pathMatch:"/"}}}];return this.path.split("/").filter((function(t){return t})).reduce((function(e,a){return e+=a+"/",t.push({label:a,to:{name:"FileList",params:{pathMatch:e}}}),e}),"/"),t}})},N=z,U=(a("accd"),Object(w["a"])(N,n,i,!1,null,null,null));e["default"]=U.exports},accd:function(t,e,a){"use strict";a("2ebf")},e273:function(t,e,a){}}]);