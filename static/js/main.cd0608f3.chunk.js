(this.webpackJsonpservicesite=this.webpackJsonpservicesite||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,a){e.exports=a(46)},23:function(e,t,a){},24:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t),function(e){var t=a(16),n=a(17),r=a(5),o=function(){function e(){Object(t.a)(this,e)}return Object(n.a)(e,[{key:"postMessage",value:function(e,t){return console.log("Send message to Telegram"),r.post("https://api.telegram.org/bot739407650:AAHSns6g9UeSuRAIpjQbpB6CaK404jUIxPc/sendMessage",{headers:{"Content-Type":"application/json"},chat_id:e,text:t}).then((function(e){return e})).catch((function(e){return console.log(e),Promise.reject("Fetch did not succeed")}))}}]),e}();e.exports=new o}.call(this,a(44)(e))},46:function(e,t,a){"use strict";a.r(t);var n,r=a(1),o=a.n(r),s=a(14),c=a.n(s),i=(a(23),a(15)),u=a.n(i),l=(a(24),a(2)),p=a.n(l),h=a(3),f=a(5),m=a(43),d=a(45),v="https://cors-anywhere.herokuapp.com/",b="https://www.barbora.lt/api/eshop/v1/cart/deliveries";function g(){return B.apply(this,arguments)}function B(){return(B=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={status:void 0,available:void 0,timeSlots:[]},e.next=3,A();case 3:if(null!==(t=e.sent)&&void 0!==t){e.next=9;break}console.log("FetchError!"),n.status="FetchError",e.next=12;break;case 9:return n.status=t.status,e.next=12,E(t.data.deliveries[0]);case 12:return e.next=14,x(n);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("barbora!!!"),document.cookie="f5avraaaaaaaaaaaaaaaa_session_=MMNKLAEDKFMJDAPKKMJLHLBMNIANBGBGJDPKCLFHKNHLAFFPEGCLHNMIGLEACIABDPMDBLDLNCPNLHFHDPNABOJOMKLNLEJBGNDIIJPCGHNHMDFDEBALPMDGIIGKAHEF; permissionToUseCookies=true; rememberMe=true; order=discountDesc; f5avraaaaaaaaaaaaaaaa_session_=NPANENCIKPJDDODMBODGLHFFHIBELBPNJNPDLOJKNCEDDOBPGPMENHFGOOFBOBDEPLNDHCKBJCPLCMKFODKABADJLKKBEGFIFAOAOHKMJOPNMAJAMPBKGHAFFFGDHKKN; region=barbora.lt; brbLastLoginDay=2020-03-25; .BRBAUTH=ObT7cxQf3cTyP8fH-ODruUicp2_LQtBK11bNTmt322xLNmyBPoCBFWWNv0jCtUwsLuoZdhUQvkc2FTSWBv5kgb8E5Bkp-G0glYwj5iJC9WCd1Uiepu8tFXFhaBOKiqnOUgiwh3VhsfGOdiK7JtDCxQ2";var N={headers:{"content-Type":"application/json",Accept:"/","Cache-Control":"no-cache",Authorization:"Basic YXBpa2V5OlNlY3JldEtleQ==",Cookie:document.cookie}};function A(){return D.apply(this,arguments)}function D(){return(D=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(v+b,N).then((function(e){return e})).catch((function(e){return console.log(e),null}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(p.a.mark((function e(t){var a,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(a=t.params.matrix.length)&&void 0!==a){e.next=3;break}return e.abrupt("return");case 3:for(r=0;r<a;r++)for(o=0;o<13;o++)w(t,r,o)&&(n.available=!0,n.timeSlots.push(t.params.matrix[r].hours[o].deliveryTime));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t,a){var n=e.params.matrix[t].hours[a];n.deliveryTime;return!0===n.available}function x(e){return L.apply(this,arguments)}function L(){return(L=Object(h.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.available){e.next=6;break}return a="[".concat(O(),"] Available times:\n").concat(t.timeSlots.join("\n")),e.next=4,m.postMessage(905470537,a);case 4:e.next=7;break;case 6:a="[".concat(O(),"] No time slots found [").concat(t.status,"]");case 7:console.log(a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return d(new Date,"yyyy-mm-dd HH:MM:ss")}f.defaults.withCredentials=!0;var C=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("button",{onClick:g},"Click me!"),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.cd0608f3.chunk.js.map