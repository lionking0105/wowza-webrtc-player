/**
 * @license wowza-webrtc-player 1.0.0
 * Copyright (c) 2018-2022 Koala Interactive, Inc.
 * License: MIT
 */
"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(e,t,n,r,i,s,a){try{var o=e[s](a),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(r,i)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(i,s){var a=e.apply(t,r);function o(e){n(a,i,s,o,c,"next",e)}function c(e){n(a,i,s,o,c,"throw",e)}o(void 0)}))}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){}function a(){a.init.call(this)}function o(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function c(e,t,n){if(t)e.call(n);else for(var r=e.length,i=v(e,r),s=0;s<r;++s)i[s].call(n)}function d(e,t,n,r){if(t)e.call(n,r);else for(var i=e.length,s=v(e,i),a=0;a<i;++a)s[a].call(n,r)}function u(e,t,n,r,i){if(t)e.call(n,r,i);else for(var s=e.length,a=v(e,s),o=0;o<s;++o)a[o].call(n,r,i)}function l(e,t,n,r,i,s){if(t)e.call(n,r,i,s);else for(var a=e.length,o=v(e,a),c=0;c<a;++c)o[c].call(n,r,i,s)}function h(e,t,n,r){if(t)e.apply(n,r);else for(var i=e.length,s=v(e,i),a=0;a<i;++a)s[a].apply(n,r)}function p(e,t,n,r){var i,a,c,d;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((a=e._events)?(a.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),a=e._events),c=a[t]):(a=e._events=new s,e._eventsCount=0),c){if("function"==typeof c?c=a[t]=r?[n,c]:[c,n]:r?c.unshift(n):c.push(n),!c.warned&&(i=o(e))&&i>0&&c.length>i){c.warned=!0;var u=Error("Possible EventEmitter memory leak detected. "+c.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=c.length,d=u,"function"==typeof console.warn?console.warn(d):console.log(d)}}else c=a[t]=n,++e._eventsCount;return e}function f(e,t,n){var r=!1;function i(){e.removeListener(t,i),r||(r=!0,n.apply(e,arguments))}return i.listener=n,i}function m(e){var t=this._events;if(t){var n=t[e];if("function"==typeof n)return 1;if(n)return n.length}return 0}function v(e,t){for(var n=Array(t);t--;)n[t]=e[t];return n}Object.defineProperty(exports,"__esModule",{value:!0}),s.prototype=Object.create(null),a.EventEmitter=a,a.usingDomains=!1,a.prototype.domain=void 0,a.prototype._events=void 0,a.prototype._maxListeners=void 0,a.defaultMaxListeners=10,a.init=function(){this.domain=null,a.usingDomains&&(void 0).active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new s,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return o(this)},a.prototype.emit=function(e){var t,n,r,i,s,a,o,p="error"===e;if(a=this._events)p=p&&null==a.error;else if(!p)return!1;if(o=this.domain,p){if(t=arguments[1],!o){if(t instanceof Error)throw t;var f=Error('Uncaught, unspecified "error" event. ('+t+")");throw f.context=t,f}return t||(t=Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=o,t.domainThrown=!1,o.emit("error",t),!1}if(!(n=a[e]))return!1;var m="function"==typeof n;switch(r=arguments.length){case 1:c(n,m,this);break;case 2:d(n,m,this,arguments[1]);break;case 3:u(n,m,this,arguments[1],arguments[2]);break;case 4:l(n,m,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=Array(r-1),s=1;s<r;s++)i[s-1]=arguments[s];h(n,m,this,i)}return!0},a.prototype.addListener=function(e,t){return p(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return p(this,e,t,!0)},a.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,f(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,f(this,e,t)),this},a.prototype.removeListener=function(e,t){var n,r,i,a,o;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(r=this._events))return this;if(!(n=r[e]))return this;if(n===t||n.listener&&n.listener===t)0==--this._eventsCount?this._events=new s:(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,a=n.length;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){o=n[a].listener,i=a;break}if(i<0)return this;if(1===n.length){if(n[0]=void 0,0==--this._eventsCount)return this._events=new s,this;delete r[e]}else!function(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}(n,i);r.removeListener&&this.emit("removeListener",e,o||t)}return this},a.prototype.removeAllListeners=function(e){var t,n;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=new s,this._eventsCount=0):n[e]&&(0==--this._eventsCount?this._events=new s:delete n[e]),this;if(0===arguments.length){for(var r,i=Object.keys(n),a=0;a<i.length;++a)"removeListener"!==(r=i[a])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=new s,this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1])}while(t[0]);return this},a.prototype.listeners=function(e){var t,n=this._events;return n&&(t=n[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(t):[]},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):m.call(e,t)},a.prototype.listenerCount=m,a.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};var g=window.RTCPeerConnection,y=window.RTCIceCandidate,w=window.RTCSessionDescription;class b extends a{constructor(e){super(),i(this,"pc",void 0),this.pc=new g({iceServers:e}),"ontrack"in this.pc?this.pc.ontrack=this.handleTrackEvent.bind(this):this.pc.onaddstream=this.handleNewStreamEvent.bind(this)}getPeerConnection(){return this.pc}close(){this.pc.close()}setRemoteDescription(e){return this.pc.setRemoteDescription(new w(e))}setLocalDescription(e){return this.pc.setLocalDescription(new w(e))}createAnswer(){var e=this;return r((function*(){return e.pc.createAnswer()}))()}createOffer(){var e=this;return r((function*(){return e.pc.createOffer()}))()}attachIceCandidate(e){return this.pc.addIceCandidate(new y(e))}attachMediaStream(e){var t=this.pc,n=t.getSenders(),r=e.getTracks();n.length?r.forEach(e=>{n.filter(t=>{var n;return(null===(n=t.track)||void 0===n?void 0:n.kind)===e.kind}).forEach(t=>{t.replaceTrack(e)})}):r.forEach(n=>{t.addTrack(n,e)})}handleNewStreamEvent(e){var{stream:t}=e;this.emit("addstream",t)}handleTrackEvent(e){e.streams.forEach(e=>{this.emit("addstream",e)})}}class C{constructor(e,t,n){this.url=e,this.streamInfo=t,this.userData=n,i(this,"ws",null),i(this,"pendingCommands",new Map)}connect(){return this.ws?Promise.resolve(this.ws):new Promise((e,t)=>{var n=new WebSocket(this.url);n.binaryType="arraybuffer",n.onopen=()=>e(n),n.onerror=()=>t(),n.onclose=()=>t(),n.onmessage=this.handleSocketData.bind(this),this.ws=n})}disconnect(){this.ws&&(this.ws.close(),this.ws=null)}getOffer(){return this.streamInfo.secureToken?this.send({direction:"play",command:"getOffer",secureToken:this.streamInfo.secureToken}):this.send({direction:"play",command:"getOffer"})}sendOffer(e){return this.send({direction:"publish",command:"sendOffer",sdp:e})}sendResponse(e){return this.send({direction:"play",command:"sendResponse",sdp:e})}getAvailableStreams(){return this.send({direction:"play",command:"getAvailableStreams"})}send(e){var n=this;return r((function*(){var r,i=n.ws||(yield n.connect());return n.pendingCommands.has(e.command)||n.pendingCommands.set(e.command,((r={}).promise=new Promise((e,t)=>{r.resolve=e,r.reject=t}),r)),i.send(JSON.stringify(t(t({},e),{},{streamInfo:n.streamInfo,userData:n.userData}))),n.pendingCommands.get(e.command).promise}))()}handleSocketData(e){var t,n=JSON.parse(e.data);200===n.status?(null!==(t=n.streamInfo)&&void 0!==t&&t.sessionId&&(this.streamInfo.sessionId=n.streamInfo.sessionId),this.pendingCommands.has(n.command)&&(this.pendingCommands.get(n.command).resolve(n),this.pendingCommands.delete(n.command))):this.pendingCommands.has(n.command)&&(this.pendingCommands.get(n.command).reject(n),this.pendingCommands.delete(n.command))}}var L="mozGetUserMedia"in navigator?"firefox":"webkitGetUserMedia"in navigator||!1===window.isSecureContext&&window.webkitRTCPeerConnection&&!window.RTCIceGatherer?"chrome":navigator.mediaDevices&&navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)?"edge":window.RTCPeerConnection&&navigator.userAgent.match(/AppleWebKit\/(\d+)\./)?"safari":"unknown",O=["vp9","vp8","h264","red","ulpfec","rtx"],k=["opus","isac","g722","pcmu","pcma","cn"];class S{constructor(e,t){this.videoOptions=e,this.audioOptions=t,i(this,"audioIndex",-1),i(this,"videoIndex",-1)}transformPlay(e){return e.sdp?(e.sdp=e.sdp.replace(/profile-level-id=(\w+);/gi,(e,t)=>{var n=parseInt(t,16),r=n>>16&255,i=n>>8&255,s=255&n;return r>66?(r=66,i=224,s=31):0===i&&(i=224),(r<<16|i<<8|s).toString(16)}),e):e}transformPublish(e){var t=this.prepareSDP(e),n=this.videoOptions,r=this.audioOptions,i=null,s=()=>"m=audio"===i?r:"m=video"===i?n:null,a=t.filter(Boolean).map(e=>{var[t]=e.split(/\s|:/,1);switch(t){case"m=audio":case"m=video":var a="m=audio"===t?this.audioIndex:this.videoIndex;if(-1!==a&&"chrome"===L){var[o,c,d]=e.split(" ");return"".concat(o," ").concat(c," ").concat(d," ").concat(a)}i=t;break;case"a=rtpmap":var u=/^a=rtpmap:(\d+)\s+(\w+)\/(\d+)/.exec(e);if(!u||"chrome"!==L)break;var l=u[2].toLowerCase();n.bitRate&&O.includes(l)&&(e+="\r\na=fmtp:".concat(u[1]," x-google-min-bitrate=").concat(n.bitRate,";x-google-max-bitrate=").concat(n.bitRate)),r.bitRate&&k.includes(l)&&(e+="\r\na=fmtp:".concat(u[1]," x-google-min-bitrate=").concat(r.bitRate,";x-google-max-bitrate=").concat(r.bitRate));break;case"c=IN":var h=s();if(null!=h&&h.bitRate&&["firefox","safari"].includes(L)){var p=1e3*h.bitRate;e+="\r\nb=TIAS:".concat(.95*p-16e3),e+="\r\nb=AS:".concat(p),e+="\r\nb=CT:".concat(p)}break;case"a=mid":var f=s();f&&"chrome"===L&&(f.bitRate&&(e+="\r\nb=CT:".concat(f.bitRate),e+="\r\nb=AS:".concat(f.bitRate),"frameRate"in f&&f.frameRate&&(e+="\r\na=framerate:".concat(f.frameRate.toFixed(2)))),i=null)}return e}).join("\r\n")+"\r\n";return{type:e.type,sdp:a}}checkLine(e,t){if(/^a=(rtpmap|rtcp-fb|fmtp)/.test(e)){var n=e.split(":");if(n.length>1){var[r,i]=n[1].split(" ");if(!i.startsWith("http")&&!i.startsWith("ur")){var s=parseInt(r,10),a=t.get(s)||[];return a.push(e),t.set(s,a),!1}}}return!0}deliverCheckLine(e,t,n){var r=Array.from(n).find(t=>{var[,n]=t;return n.join("\r\n").includes(e)});if(!r)return[];var[i,s]=r;return"audio"===t?this.audioIndex=i:this.videoIndex=i,"VP8"!==e&&"VP9"!==e?s:s.filter(e=>!e.includes("transport-cc")&&!e.includes("goog-remb")&&!e.includes("nack"))}addAudio(e,t){for(var n="",r=0,i=e.length;r<i;++r){var s=e[r];if(s.startsWith("m=audio"))n="audio";else if(s.startsWith("m=video"))n="video";else if("a=rtcp-mux"===s&&"audio"===n){var a=this.deliverCheckLine(this.audioOptions.codec,"audio",t);e.splice(r+1,0,...a);break}}return e}addVideo(e,t){var n=e.includes("a=rtcp-rsize"),r=e.includes("a=rtcp-mux"),i=!1;if(!n&&!r)return e;var s=this.deliverCheckLine(this.videoOptions.codec,"video",t);return e.map(e=>{if(n){if(!i&&"a=rtcp-rsize"===e)return i=!0,[e].concat(s).join("\r\n")}else if("a=rtcp-mux"===e){if(i)return[e].concat(s).join("\r\n");i=!0}return e})}flattenLines(e){return e.join("\r\n").split("\r\n")}prepareSDP(e){var t=new Map,n=(e.sdp||"").split(/\r\n/);return n=n.filter(e=>e&&this.checkLine(e,t)),n=this.flattenLines(this.addAudio(n,t)),n=this.flattenLines(this.addVideo(n,t))}}exports.WowzaWebRTCPlayer=class extends a{constructor(e,t){super(),this.video=e,i(this,"sdpUrl",""),i(this,"applicationName",""),i(this,"streamName",""),i(this,"userData",null),i(this,"sdpHandler",void 0),i(this,"secureToken",void 0),i(this,"constraints",{audio:!0,video:!0}),i(this,"videoConfigs",{bitRate:360,codec:"42e01f",frameRate:29.97}),i(this,"audioConfigs",{codec:"opus",bitRate:64}),i(this,"iceServers",[]),i(this,"mediaStream",null),i(this,"pc",null),t&&this.setConfigurations(t)}setConfigurations(e){e.constraints&&(this.constraints=e.constraints),e.videoConfigs&&(this.videoConfigs=e.videoConfigs),e.audioConfigs&&(this.audioConfigs=e.audioConfigs),e.applicationName&&(this.applicationName=e.applicationName),e.streamName&&(this.streamName=e.streamName),e.sdpUrl&&(this.sdpUrl=e.sdpUrl),void 0!==e.userData&&(this.userData=e.userData),e.iceServers&&(this.iceServers=e.iceServers),e.sdpHandler&&(this.sdpHandler=e.sdpHandler),e.secureToken&&(this.secureToken=e.secureToken)}stop(){this.pc&&(this.pc.close(),this.pc=null)}getMediaStream(){return this.mediaStream}getPeerConnection(){return this.pc?this.pc.getPeerConnection():null}playLocal(e){var t=this;return r((function*(){e&&(t.constraints=e);var n=yield function(e){var t;return null!==(t=navigator.mediaDevices)&&void 0!==t&&t.getUserMedia?navigator.mediaDevices.getUserMedia(e):navigator.getUserMedia?new Promise((t,n)=>{navigator.getUserMedia(e,t,n)}):Promise.reject("Your browser does not support getUserMedia API")}(t.constraints);return t.attachStream(n),n}))()}stopLocal(){this.stop(),this.mediaStream&&(this.mediaStream.getTracks().forEach(e=>{e.stop()}),this.mediaStream=null)}playRemote(e){var t=this;return r((function*(){e&&t.setConfigurations(e);var n=t.createWowzaInstance();try{var{sdp:r}=yield n.getOffer(),i=t.createPeerConnection();i.on("addstream",t.attachStream.bind(t)),yield i.setRemoteDescription(r);var s=yield i.createAnswer(),a=new S(t.videoConfigs,t.audioConfigs),o=t.sdpHandler?t.sdpHandler(s,e=>a.transformPlay(e),"play"):a.transformPlay(s);yield i.setLocalDescription(o);var{iceCandidates:c}=yield n.sendResponse(o);c.forEach(e=>{i.attachIceCandidate(e)})}finally{n.disconnect()}}))()}publish(e){var t=this;return r((function*(){e&&t.setConfigurations(e);var n=t.createWowzaInstance();try{var r=t.mediaStream||(yield t.playLocal()),i=t.createPeerConnection();i.attachMediaStream(r);var s=new S(t.videoConfigs,t.audioConfigs),a=yield i.createOffer(),o=t.sdpHandler?t.sdpHandler(a,e=>s.transformPublish(e),"publish"):s.transformPublish(a);yield i.setLocalDescription(o);var{sdp:c,iceCandidates:d}=yield n.sendOffer(o);yield i.setRemoteDescription(c),d.forEach(e=>{i.attachIceCandidate(e)})}finally{n.disconnect()}}))()}getAvailableStreams(){var e=this;return r((function*(){var t=e.createWowzaInstance();try{var{availableStreams:n}=yield t.getAvailableStreams();return n||[]}catch(e){return[]}finally{t.disconnect()}}))()}createWowzaInstance(){return new C(this.sdpUrl,{applicationName:this.applicationName,sessionId:"[empty]",streamName:this.streamName,secureToken:this.secureToken},this.userData)}createPeerConnection(){return this.pc=new b(this.iceServers),this.pc}attachStream(e){this.mediaStream=e;try{var t=this.video.srcObject instanceof MediaStream&&this.video.srcObject;t&&t.id===e.id||(this.video.srcObject=e)}catch(t){this.video.src=window.URL.createObjectURL(e)}this.pc&&this.pc.attachMediaStream(e),this.video.play()}};
