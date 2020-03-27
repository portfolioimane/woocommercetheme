!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=jQuery},function(e,t,n){
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=c(n(1)),a=c(n(3)),s=c(n(4));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),o(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===r(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,s.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new i.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return l("action",e)}},{key:"defaultTarget",value:function(e){var t=l("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return l("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),t}();function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}e.exports=u},function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),s=(r=a)&&r.__esModule?r:{default:r};var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,s.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,s.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}();e.exports=c},function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var i=0,a=r.length;i<a;i++)r[i].fn!==t&&r[i].fn._!==t&&o.push(r[i]);return o.length?n[e]=o:delete n[e],this}},e.exports=n},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}(e,t,n);if(r.string(e))return function(e,t,n){return o(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var r=n(7);function o(e,t,n,o,i){var a=function(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}.apply(this,arguments);return e.addEventListener(n,a,i),{destroy:function(){e.removeEventListener(n,a,i)}}}e.exports=function(e,t,n,r,i){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return o(e,t,n,r,i)}))}},function(e,t){var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}e.exports=function(e,t){for(;e&&e.nodeType!==n;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}}])},e.exports=r()},function(e,t,n){e.exports=n(4)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(3);var r=n(0),o=n.n(r),i=n(1),a=n.n(i);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fileObject=t,this.fileObject.errors=isNaN(this.fileObject.errors)?0:parseInt(this.fileObject.errors,10),this.path=this.getPath()}var t,n,r;return t=e,(n=[{key:"getPath",value:function(){var e=this.fileObject.filePath.split(/((?:[^\/]*\/)*)(.*)\/themes\//gim),t=e.pop(),n=e.pop();return"/".concat(n,"/themes/").concat(t)}},{key:"format",value:function(e){this.fileObject.errors++,this.fileObject.messages.push({line:e.lineNumber,column:e.column,message:e.description,severity:5,type:"ERROR",fixable:!1})}},{key:"process",value:function(){var e=this;return new Promise(function(t,n){fetch(e.path).then(function(e){return e.text()}).then(function(t){var n=esprima.parse(t,{tolerant:!0,loc:!0}).errors,r=!0,o=!1,i=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var c=a.value;e.format(c)}}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}}).catch(function(t){return e.format(t)}).finally(function(){return e.fileObject.errors&&t(e.fileObject)})})}}])&&s(t.prototype,n),r&&s(t,r),e}();function u(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.SHOW_CLASS="is-shown",this.ERROR_CLASS="is-error",this.WARNING_CLASS="is-warning",this.DISABLED_CLASS="is-disabled",this.IS_RAW_CLASS="is-raw",this.reportItemHeading=t.reportItemHeading,this.reportReportTable=t.reportReportTable,this.reportNoticeType=t.reportNoticeType,this.reportNoticeSource=t.reportNoticeSource,this.reportItemLine=t.reportItemLine,this.reportItemType=t.reportItemType,this.reportItemMessage=t.reportItemMessage,this.reportItemBtn=t.reportItemBtn,this.reportItemSource=t.reportItemSource,this.$sniffReport=t.sniffReport,this.$snifferInfo=t.snifferInfo,this.$checkNotice=t.checkNotice,this.$startNotice=t.startNotice,this.$reportItem=t.reportItem,this.$loader=t.loader,this.clipboardInstance=null,this.$startButton=o()(t.startButton),this.$stopButton=o()(t.stopButton),this.nonce=t.nonce,this.runAction=t.runAction,this.ajaxRequest=[],this.ajaxAllow=!0}var t,n,r;return t=e,(n=[{key:"enableAjax",value:function(){this.ajaxAllow=!0,this.$snifferInfo.removeClass(this.SHOW_CLASS)}},{key:"preventAjax",value:function(){this.ajaxAllow=!1,this.$startButton.removeClass(this.DISABLED_CLASS),this.$stopButton.addClass(this.DISABLED_CLASS),this.$loader.removeClass(this.SHOW_CLASS),this.$startNotice.html(themeSnifferLocalization.ajaxAborted).addClass(this.SHOW_CLASS),o.a.each(this.ajaxRequest,function(e,t){t.abort([themeSnifferLocalization.ajaxAborted])})}},{key:"renderRaw",value:function(e,t){t.append(e)}},{key:"renderJSON",value:function(e){var t,n=this;this.clipboardInstance&&this.clipboardInstance.destroy();var r=(t=this.$reportItem.clone().addClass(this.SHOW_CLASS)).find(this.reportItemHeading),i=t.find(this.reportReportTable),a=t.find(this.reportNoticeType),s=t.find(this.reportNoticeSource);return r.text(e.filePath.split("/themes/")[1]),o.a.each(e.messages,function(e,t){var r=t.line||0,c=t.message,u=t.type,l=t.source,f=a.clone().addClass(u.toLowerCase()),h=s.clone();if(f.find(n.reportItemLine).text(r),f.find(n.reportItemType).text(u),t.source&&!t.source.includes("ThemeSniffer"))f.find(n.reportItemMessage).text(c);else{var p=o()("<p />").html(c).text(),d=(new DOMParser).parseFromString(p,"text/html").body.childNodes;f.find(n.reportItemMessage).append(o()(d))}f.appendTo(i),l&&(h.find(n.reportItemSource).text("// phpcs:ignore ".concat(l)),h.appendTo(i))}),a.remove(),s.remove(),this.setupClipboards(),t}},{key:"setupClipboards",value:function(){var e=document.querySelectorAll(this.reportItemBtn);this.clipboardInstance=new a.a(e,{target:function(e){return e.lastElementChild}}),this.clipboardInstance.on("success",function(e){var t=e.trigger.parentElement.getAttribute("aria-label");e.trigger.parentElement.setAttribute("aria-label",themeSnifferLocalization.copySuccess),o()(e.trigger.parentElement).mouseleave(function(){e.trigger.parentElement.setAttribute("aria-label",t)}),e.clearSelection()})}},{key:"showNotices",value:function(e){this.$startNotice.html(e).addClass(this.SHOW_CLASS),this.$checkNotice.removeClass(this.SHOW_CLASS),this.$loader.addClass(this.SHOW_CLASS),this.$startButton.addClass(this.DISABLED_CLASS),this.$stopButton.removeClass(this.DISABLED_CLASS)}},{key:"hideNotices",value:function(e,t){this.$startNotice.html(e).addClass(this.SHOW_CLASS),this.$loader.removeClass(this.SHOW_CLASS),this.$stopButton.addClass(this.DISABLED_CLASS),this.$startButton.removeClass(this.DISABLED_CLASS),t&&this.$checkNotice.addClass(this.SHOW_CLASS)}},{key:"themeCheckRunPHPCS",value:function(e,t,n,r,i,a,s,l){var f,h,p,d=this,m={themeName:e,hideWarning:t,rawOutput:n,ignoreAnnotations:r,checkPhpOnly:i,minimumPHPVersion:a,wpRulesets:s,themePrefixes:l,action:this.runAction,nonce:this.nonce};return!!this.ajaxAllow&&(f={type:"POST",url:ajaxurl,data:m,beforeSend:function(e){d.showNotices(themeSnifferLocalization.checkInProgress),n||d.$sniffReport.removeClass(d.IS_RAW_CLASS),d.$sniffReport.empty(),d.$snifferInfo.empty(),d.ajaxRequest.push(e)}},o.a.ajax(f).done(h).fail(p)).then(function(e){if(!0===e.success){if(d.$startNotice.removeClass(d.SHOW_CLASS),n){d.hideNotices(themeSnifferLocalization.checkCompleted,!0);var t=d.$sniffReport.addClass(d.IS_RAW_CLASS);return void d.renderRaw(e.data,t)}var r=!0,o=!1,i=void 0;try{for(var a,s=function(){var e,t=a.value;(e=regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(".js"!==t.filePath.substr(t.filePath.length-3)){e.next=5;break}return n=new c(t),e.next=4,n.process();case 4:t=e.sent;case 5:d.$sniffReport.append(d.renderJSON(t));case 6:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){u(i,r,o,a,s,"next",e)}function s(e){u(i,r,o,a,s,"throw",e)}a(void 0)})})(t)},l=e.files[Symbol.iterator]();!(r=(a=l.next()).done);r=!0)s()}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}d.hideNotices(themeSnifferLocalization.checkCompleted,!0)}else d.hideNotices(themeSnifferLocalization.errorReport,!1),d.$snifferInfo.addClass(d.SHOW_CLASS).addClass(d.ERROR_CLASS).text(e.data[0].message)},function(e,t,n){throw new Error("Error: ".concat(n,": ").concat(e," ").concat(t))})}}])&&l(t.prototype,n),r&&l(t,r),e}();o()(function(){var e={sniffReport:o()(".js-sniff-report"),snifferInfo:o()(".js-sniffer-info"),checkNotice:o()(".js-check-done"),startNotice:o()(".js-start-notice"),reportItem:o()(".js-report-item"),loader:o()(".js-loader"),startButton:".js-start-check",stopButton:".js-stop-check",reportItemHeading:".js-report-item-heading",reportReportTable:".js-report-table",reportNoticeType:".js-report-notice-type",reportNoticeSource:".js-report-notice-source",reportItemBtn:".js-annotation-button",reportItemSource:".js-annotation-source",reportItemLine:".js-report-item-line",reportItemType:".js-report-item-type",reportItemMessage:".js-report-item-message",runAction:"run_sniffer",nonce:o()("#theme-sniffer_nonce").val()},t=new f(e);o()(e.startButton).on("click",function(){var e=o()("select[name=themename]").val(),n=o()("input[name=hide_warning]").is(":checked"),r=o()("input[name=raw_output]").is(":checked"),i=o()("input[name=ignore_annotations]").is(":checked"),a=o()("input[name=check_php_only]").is(":checked"),s=o()("select[name=minimum_php_version]").val(),c=o()("input[name=theme_prefixes]").val(),u=o()('input[name="selected_ruleset[]"]:checked').map(function(e,t){return t.value}).toArray();t.enableAjax(),t.themeCheckRunPHPCS(e,n,r,i,a,s,u,c)}),o()(e.stopButton).on("click",function(){return t.preventAjax()}),o()('select[name="themename"]').on("change",function(){e.startNotice.html().length&&(t.preventAjax(),e.sniffReport.length&&e.sniffReport.empty())})})}]);