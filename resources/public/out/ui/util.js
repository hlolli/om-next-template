// Compiled by ClojureScript 1.9.89 {}
goog.provide('ui.util');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('om.transit');
goog.require('goog.net.XhrIo');
ui.util.transit_post = (function ui$util$transit_post(url){
return (function (p__37722,cb){
var map__37723 = p__37722;
var map__37723__$1 = ((((!((map__37723 == null)))?((((map__37723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37723):map__37723);
var remote = cljs.core.get.call(null,map__37723__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
return goog.net.XhrIo.send(url,((function (map__37723,map__37723__$1,remote){
return (function (e){
var this$ = this;
return cb.call(null,cognitect.transit.read.call(null,om.transit.reader.call(null),this$.getResponseText()));
});})(map__37723,map__37723__$1,remote))
,"POST",cognitect.transit.write.call(null,om.transit.writer.call(null),remote),{"Content-Type": "application/transit+json"});
});
});

//# sourceMappingURL=util.js.map?rel=1470413636751