(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/loader.fcd8d05c.gif"},23:function(e,t,a){e.exports=a(72)},28:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),s=(a(28),a(2)),c=a(3),i=a(6),u=a(5),p=a(7),m=a(13),d=a.n(m),h=a(21),g=a(10),f=a(14),E=a.n(f),v="AIzaSyACONYl7VNCxA4xLHRFnBRZQCwZmHT_1MQ",b=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"GetAddressFromCep",value:function(e){return E.a.get("https://viacep.com.br/ws/".concat(e,"/json"))}},{key:"GetInfosFromAddress",value:function(e){return E.a.get("https://maps.googleapis.com/maps/api/geocode/json?address=\u200e".concat(e,"&key=").concat("AIzaSyC8QOiDlCQBk74YHye8igRuEeIpasKGQcc"))}}]),e}(),y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.google,a=e.latitude,n=e.longitude,o=e.markerName;return r.a.createElement(g.Map,{google:t,zoom:15,containerStyle:{position:"relative",width:"100%",height:"400px"},initialCenter:{lat:a,lng:n}},r.a.createElement(g.Marker,{onClick:this.onMarkerClick,name:o}),r.a.createElement(g.InfoWindow,{onClose:this.onInfoWindowClose},r.a.createElement("div",null,r.a.createElement("h1",null,o))))}}]),t}(n.Component),C=Object(g.GoogleApiWrapper)({apiKey:v})(y),k=a(22),O=a.n(k),j=(a(66),function(){return r.a.createElement("div",{className:"loading-wrapper"},r.a.createElement("img",{className:"loading-image",src:O.a,alt:"Loader"}))}),w=(a(68),a(70),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={mapsResp:null,cepResponse:null,loading:!1,cepValue:"",error:!1,isClosed:!1},a.setError=function(){a.setState({error:!0,loading:!1})},a.getCep=Object(h.a)(d.a.mark(function e(){var t,n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.cepValue,a.setState({loading:!0,cepResponse:null,mapsResp:null,isClosed:!1}),e.prev=2,e.next=5,b.GetAddressFromCep(t);case 5:return n=e.sent,e.next=8,b.GetInfosFromAddress(n.data.logradouro);case 8:if(r=e.sent,!n.data.erro){e.next=11;break}return e.abrupt("return",a.setError());case 11:return e.abrupt("return",a.setState({mapsResp:r.data,cepResponse:n.data,error:!1,loading:!1}));case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",a.setError());case 17:case"end":return e.stop()}},e,this,[[2,14]])})),a.handleInputChange=function(e){var t=e.target.value.replace(/[^\d]/,"");return isNaN(t)?null:a.setState({cepValue:t})},a.handleKeyPress=function(e){"Enter"===e.key&&a.getCep()},a.closePanel=function(){return a.setState({isClosed:!0,error:!1})},a.renderMap=function(){var e=a.state,t=e.mapsResp,n=e.cepResponse,o=e.error,l=e.isClosed;return t&&"OK"===t.status&&!l?r.a.createElement("div",{className:"panel"},r.a.createElement("button",{className:"close-button",onClick:a.closePanel},"X"),r.a.createElement("div",{className:"address-infos"},r.a.createElement("h2",null,n.logradouro),r.a.createElement("p",null,n.bairro),r.a.createElement("p",null,n.localidade," - ",n.uf),r.a.createElement("p",null,n.cep)),r.a.createElement(C,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=".concat(v,'&callback=initMap"'),loadingElement:r.a.createElement("div",{style:{height:"400px"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"400px"}}),latitude:t.results[0].geometry.location.lat,longitude:t.results[0].geometry.location.lng,markerName:"Av Nova"})):o?r.a.createElement("div",{className:"panel"},r.a.createElement("h2",null,"Ops, CEP Inexistente. =/")):null},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.cepValue,a=e.loading;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"panel"},r.a.createElement("div",null,r.a.createElement("input",{className:"input-search",placeholder:"Digite um CEP",type:"text",value:t,onChange:this.handleInputChange,onKeyPress:this.handleKeyPress,autoFocus:!0}),r.a.createElement("button",{className:"primary-button",onClick:this.getCep},"Buscar"))),a?r.a.createElement(j,null):this.renderMap())}}]),t}(n.PureComponent)),N=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.66b334f2.chunk.js.map