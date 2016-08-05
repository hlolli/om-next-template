// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39129){
var map__39154 = p__39129;
var map__39154__$1 = ((((!((map__39154 == null)))?((((map__39154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39154):map__39154);
var m = map__39154__$1;
var n = cljs.core.get.call(null,map__39154__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39154__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6503__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6503__auto__)){
var ns = temp__6503__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39156_39178 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39157_39179 = null;
var count__39158_39180 = (0);
var i__39159_39181 = (0);
while(true){
if((i__39159_39181 < count__39158_39180)){
var f_39182 = cljs.core._nth.call(null,chunk__39157_39179,i__39159_39181);
cljs.core.println.call(null,"  ",f_39182);

var G__39183 = seq__39156_39178;
var G__39184 = chunk__39157_39179;
var G__39185 = count__39158_39180;
var G__39186 = (i__39159_39181 + (1));
seq__39156_39178 = G__39183;
chunk__39157_39179 = G__39184;
count__39158_39180 = G__39185;
i__39159_39181 = G__39186;
continue;
} else {
var temp__6503__auto___39187 = cljs.core.seq.call(null,seq__39156_39178);
if(temp__6503__auto___39187){
var seq__39156_39188__$1 = temp__6503__auto___39187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39156_39188__$1)){
var c__18960__auto___39189 = cljs.core.chunk_first.call(null,seq__39156_39188__$1);
var G__39190 = cljs.core.chunk_rest.call(null,seq__39156_39188__$1);
var G__39191 = c__18960__auto___39189;
var G__39192 = cljs.core.count.call(null,c__18960__auto___39189);
var G__39193 = (0);
seq__39156_39178 = G__39190;
chunk__39157_39179 = G__39191;
count__39158_39180 = G__39192;
i__39159_39181 = G__39193;
continue;
} else {
var f_39194 = cljs.core.first.call(null,seq__39156_39188__$1);
cljs.core.println.call(null,"  ",f_39194);

var G__39195 = cljs.core.next.call(null,seq__39156_39188__$1);
var G__39196 = null;
var G__39197 = (0);
var G__39198 = (0);
seq__39156_39178 = G__39195;
chunk__39157_39179 = G__39196;
count__39158_39180 = G__39197;
i__39159_39181 = G__39198;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39199 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18057__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39199);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39199)))?cljs.core.second.call(null,arglists_39199):arglists_39199));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39160_39200 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39161_39201 = null;
var count__39162_39202 = (0);
var i__39163_39203 = (0);
while(true){
if((i__39163_39203 < count__39162_39202)){
var vec__39164_39204 = cljs.core._nth.call(null,chunk__39161_39201,i__39163_39203);
var name_39205 = cljs.core.nth.call(null,vec__39164_39204,(0),null);
var map__39167_39206 = cljs.core.nth.call(null,vec__39164_39204,(1),null);
var map__39167_39207__$1 = ((((!((map__39167_39206 == null)))?((((map__39167_39206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39167_39206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39167_39206):map__39167_39206);
var doc_39208 = cljs.core.get.call(null,map__39167_39207__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39209 = cljs.core.get.call(null,map__39167_39207__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39205);

cljs.core.println.call(null," ",arglists_39209);

if(cljs.core.truth_(doc_39208)){
cljs.core.println.call(null," ",doc_39208);
} else {
}

var G__39210 = seq__39160_39200;
var G__39211 = chunk__39161_39201;
var G__39212 = count__39162_39202;
var G__39213 = (i__39163_39203 + (1));
seq__39160_39200 = G__39210;
chunk__39161_39201 = G__39211;
count__39162_39202 = G__39212;
i__39163_39203 = G__39213;
continue;
} else {
var temp__6503__auto___39214 = cljs.core.seq.call(null,seq__39160_39200);
if(temp__6503__auto___39214){
var seq__39160_39215__$1 = temp__6503__auto___39214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39160_39215__$1)){
var c__18960__auto___39216 = cljs.core.chunk_first.call(null,seq__39160_39215__$1);
var G__39217 = cljs.core.chunk_rest.call(null,seq__39160_39215__$1);
var G__39218 = c__18960__auto___39216;
var G__39219 = cljs.core.count.call(null,c__18960__auto___39216);
var G__39220 = (0);
seq__39160_39200 = G__39217;
chunk__39161_39201 = G__39218;
count__39162_39202 = G__39219;
i__39163_39203 = G__39220;
continue;
} else {
var vec__39169_39221 = cljs.core.first.call(null,seq__39160_39215__$1);
var name_39222 = cljs.core.nth.call(null,vec__39169_39221,(0),null);
var map__39172_39223 = cljs.core.nth.call(null,vec__39169_39221,(1),null);
var map__39172_39224__$1 = ((((!((map__39172_39223 == null)))?((((map__39172_39223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39172_39223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39172_39223):map__39172_39223);
var doc_39225 = cljs.core.get.call(null,map__39172_39224__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39226 = cljs.core.get.call(null,map__39172_39224__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39222);

cljs.core.println.call(null," ",arglists_39226);

if(cljs.core.truth_(doc_39225)){
cljs.core.println.call(null," ",doc_39225);
} else {
}

var G__39227 = cljs.core.next.call(null,seq__39160_39215__$1);
var G__39228 = null;
var G__39229 = (0);
var G__39230 = (0);
seq__39160_39200 = G__39227;
chunk__39161_39201 = G__39228;
count__39162_39202 = G__39229;
i__39163_39203 = G__39230;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6503__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6503__auto__)){
var fnspec = temp__6503__auto__;
cljs.core.print.call(null,"Spec");

var seq__39174 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39175 = null;
var count__39176 = (0);
var i__39177 = (0);
while(true){
if((i__39177 < count__39176)){
var role = cljs.core._nth.call(null,chunk__39175,i__39177);
var temp__6503__auto___39231__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___39231__$1)){
var spec_39232 = temp__6503__auto___39231__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39232));
} else {
}

var G__39233 = seq__39174;
var G__39234 = chunk__39175;
var G__39235 = count__39176;
var G__39236 = (i__39177 + (1));
seq__39174 = G__39233;
chunk__39175 = G__39234;
count__39176 = G__39235;
i__39177 = G__39236;
continue;
} else {
var temp__6503__auto____$1 = cljs.core.seq.call(null,seq__39174);
if(temp__6503__auto____$1){
var seq__39174__$1 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39174__$1)){
var c__18960__auto__ = cljs.core.chunk_first.call(null,seq__39174__$1);
var G__39237 = cljs.core.chunk_rest.call(null,seq__39174__$1);
var G__39238 = c__18960__auto__;
var G__39239 = cljs.core.count.call(null,c__18960__auto__);
var G__39240 = (0);
seq__39174 = G__39237;
chunk__39175 = G__39238;
count__39176 = G__39239;
i__39177 = G__39240;
continue;
} else {
var role = cljs.core.first.call(null,seq__39174__$1);
var temp__6503__auto___39241__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___39241__$2)){
var spec_39242 = temp__6503__auto___39241__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39242));
} else {
}

var G__39243 = cljs.core.next.call(null,seq__39174__$1);
var G__39244 = null;
var G__39245 = (0);
var G__39246 = (0);
seq__39174 = G__39243;
chunk__39175 = G__39244;
count__39176 = G__39245;
i__39177 = G__39246;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1470410225120