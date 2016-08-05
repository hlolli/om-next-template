// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);
/**
 * if false, instrumented fns call straight through
 */
cljs.spec._STAR_instrument_enabled_STAR_ = true;

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__18770__auto__ = (((spec == null))?null:spec);
var m__18771__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,spec,x);
} else {
var m__18771__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__18770__auto__ = (((spec == null))?null:spec);
var m__18771__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,spec,y);
} else {
var m__18771__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__18770__auto__ = (((spec == null))?null:spec);
var m__18771__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,spec,path,via,in$,x);
} else {
var m__18771__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__18770__auto__ = (((spec == null))?null:spec);
var m__18771__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__18771__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__18770__auto__ = (((spec == null))?null:spec);
var m__18771__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,spec,gfn);
} else {
var m__18771__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__18770__auto__ = (((spec == null))?null:spec);
var m__18771__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,spec);
} else {
var m__18771__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,k))){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec))){
var G__39253 = cljs.core.get.call(null,reg,spec);
spec = G__39253;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name.call(null,spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__18057__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__18045__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__18045__auto__){
return x;
} else {
return and__18045__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__18045__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__18045__auto__)){
return x;
} else {
return and__18045__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__18057__auto__ = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
var or__18057__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__18057__auto____$1)){
return or__18057__auto____$1;
} else {
var or__18057__auto____$2 = (function (){var and__18045__auto__ = cljs.spec.named_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(and__18045__auto__)){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__18045__auto__;
}
})();
if(cljs.core.truth_(or__18057__auto____$2)){
return or__18057__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__18057__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__18057__auto__ = cljs.spec.the_spec.call(null,s);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),s,null,null);
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__18045__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__18045__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__18045__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__18045__auto__ = (form instanceof cljs.core.Symbol);
if(and__18045__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__18045__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec),gen_fn);
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__6503__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__6503__auto__)){
var probs = temp__6503__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a path->problem-map, where problem-map has at least :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__6501__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__6501__auto__)){
var name = temp__6501__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__19141__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39304_39350 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39305_39351 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39304_39350,_STAR_print_fn_STAR_39305_39351,sb__19141__auto__){
return (function (x__19142__auto__){
return sb__19141__auto__.append(x__19142__auto__);
});})(_STAR_print_newline_STAR_39304_39350,_STAR_print_fn_STAR_39305_39351,sb__19141__auto__))
;

try{var seq__39306_39352 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__39307_39353 = null;
var count__39308_39354 = (0);
var i__39309_39355 = (0);
while(true){
if((i__39309_39355 < count__39308_39354)){
var vec__39310_39356 = cljs.core._nth.call(null,chunk__39307_39353,i__39309_39355);
var path_39357 = cljs.core.nth.call(null,vec__39310_39356,(0),null);
var map__39313_39358 = cljs.core.nth.call(null,vec__39310_39356,(1),null);
var map__39313_39359__$1 = ((((!((map__39313_39358 == null)))?((((map__39313_39358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39313_39358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39313_39358):map__39313_39358);
var prob_39360 = map__39313_39359__$1;
var pred_39361 = cljs.core.get.call(null,map__39313_39359__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_39362 = cljs.core.get.call(null,map__39313_39359__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_39363 = cljs.core.get.call(null,map__39313_39359__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_39364 = cljs.core.get.call(null,map__39313_39359__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_39365 = cljs.core.get.call(null,map__39313_39359__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_39365)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_39365),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_39362);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_39364)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_39364)));
}

if(cljs.core.empty_QMARK_.call(null,path_39357)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_39357));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_39361);

if(cljs.core.truth_(reason_39363)){
cljs.core.print.call(null,", ",reason_39363);
} else {
}

var seq__39315_39366 = cljs.core.seq.call(null,prob_39360);
var chunk__39316_39367 = null;
var count__39317_39368 = (0);
var i__39318_39369 = (0);
while(true){
if((i__39318_39369 < count__39317_39368)){
var vec__39319_39370 = cljs.core._nth.call(null,chunk__39316_39367,i__39318_39369);
var k_39371 = cljs.core.nth.call(null,vec__39319_39370,(0),null);
var v_39372 = cljs.core.nth.call(null,vec__39319_39370,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_39371))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_39371)," ");

cljs.core.pr.call(null,v_39372);
}

var G__39373 = seq__39315_39366;
var G__39374 = chunk__39316_39367;
var G__39375 = count__39317_39368;
var G__39376 = (i__39318_39369 + (1));
seq__39315_39366 = G__39373;
chunk__39316_39367 = G__39374;
count__39317_39368 = G__39375;
i__39318_39369 = G__39376;
continue;
} else {
var temp__6503__auto___39377 = cljs.core.seq.call(null,seq__39315_39366);
if(temp__6503__auto___39377){
var seq__39315_39378__$1 = temp__6503__auto___39377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39315_39378__$1)){
var c__18960__auto___39379 = cljs.core.chunk_first.call(null,seq__39315_39378__$1);
var G__39380 = cljs.core.chunk_rest.call(null,seq__39315_39378__$1);
var G__39381 = c__18960__auto___39379;
var G__39382 = cljs.core.count.call(null,c__18960__auto___39379);
var G__39383 = (0);
seq__39315_39366 = G__39380;
chunk__39316_39367 = G__39381;
count__39317_39368 = G__39382;
i__39318_39369 = G__39383;
continue;
} else {
var vec__39322_39384 = cljs.core.first.call(null,seq__39315_39378__$1);
var k_39385 = cljs.core.nth.call(null,vec__39322_39384,(0),null);
var v_39386 = cljs.core.nth.call(null,vec__39322_39384,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_39385))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_39385)," ");

cljs.core.pr.call(null,v_39386);
}

var G__39387 = cljs.core.next.call(null,seq__39315_39378__$1);
var G__39388 = null;
var G__39389 = (0);
var G__39390 = (0);
seq__39315_39366 = G__39387;
chunk__39316_39367 = G__39388;
count__39317_39368 = G__39389;
i__39318_39369 = G__39390;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__39391 = seq__39306_39352;
var G__39392 = chunk__39307_39353;
var G__39393 = count__39308_39354;
var G__39394 = (i__39309_39355 + (1));
seq__39306_39352 = G__39391;
chunk__39307_39353 = G__39392;
count__39308_39354 = G__39393;
i__39309_39355 = G__39394;
continue;
} else {
var temp__6503__auto___39395 = cljs.core.seq.call(null,seq__39306_39352);
if(temp__6503__auto___39395){
var seq__39306_39396__$1 = temp__6503__auto___39395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39306_39396__$1)){
var c__18960__auto___39397 = cljs.core.chunk_first.call(null,seq__39306_39396__$1);
var G__39398 = cljs.core.chunk_rest.call(null,seq__39306_39396__$1);
var G__39399 = c__18960__auto___39397;
var G__39400 = cljs.core.count.call(null,c__18960__auto___39397);
var G__39401 = (0);
seq__39306_39352 = G__39398;
chunk__39307_39353 = G__39399;
count__39308_39354 = G__39400;
i__39309_39355 = G__39401;
continue;
} else {
var vec__39325_39402 = cljs.core.first.call(null,seq__39306_39396__$1);
var path_39403 = cljs.core.nth.call(null,vec__39325_39402,(0),null);
var map__39328_39404 = cljs.core.nth.call(null,vec__39325_39402,(1),null);
var map__39328_39405__$1 = ((((!((map__39328_39404 == null)))?((((map__39328_39404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39328_39404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39328_39404):map__39328_39404);
var prob_39406 = map__39328_39405__$1;
var pred_39407 = cljs.core.get.call(null,map__39328_39405__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_39408 = cljs.core.get.call(null,map__39328_39405__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_39409 = cljs.core.get.call(null,map__39328_39405__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_39410 = cljs.core.get.call(null,map__39328_39405__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_39411 = cljs.core.get.call(null,map__39328_39405__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_39411)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_39411),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_39408);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_39410)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_39410)));
}

if(cljs.core.empty_QMARK_.call(null,path_39403)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_39403));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_39407);

if(cljs.core.truth_(reason_39409)){
cljs.core.print.call(null,", ",reason_39409);
} else {
}

var seq__39330_39412 = cljs.core.seq.call(null,prob_39406);
var chunk__39331_39413 = null;
var count__39332_39414 = (0);
var i__39333_39415 = (0);
while(true){
if((i__39333_39415 < count__39332_39414)){
var vec__39334_39416 = cljs.core._nth.call(null,chunk__39331_39413,i__39333_39415);
var k_39417 = cljs.core.nth.call(null,vec__39334_39416,(0),null);
var v_39418 = cljs.core.nth.call(null,vec__39334_39416,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_39417))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_39417)," ");

cljs.core.pr.call(null,v_39418);
}

var G__39419 = seq__39330_39412;
var G__39420 = chunk__39331_39413;
var G__39421 = count__39332_39414;
var G__39422 = (i__39333_39415 + (1));
seq__39330_39412 = G__39419;
chunk__39331_39413 = G__39420;
count__39332_39414 = G__39421;
i__39333_39415 = G__39422;
continue;
} else {
var temp__6503__auto___39423__$1 = cljs.core.seq.call(null,seq__39330_39412);
if(temp__6503__auto___39423__$1){
var seq__39330_39424__$1 = temp__6503__auto___39423__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39330_39424__$1)){
var c__18960__auto___39425 = cljs.core.chunk_first.call(null,seq__39330_39424__$1);
var G__39426 = cljs.core.chunk_rest.call(null,seq__39330_39424__$1);
var G__39427 = c__18960__auto___39425;
var G__39428 = cljs.core.count.call(null,c__18960__auto___39425);
var G__39429 = (0);
seq__39330_39412 = G__39426;
chunk__39331_39413 = G__39427;
count__39332_39414 = G__39428;
i__39333_39415 = G__39429;
continue;
} else {
var vec__39337_39430 = cljs.core.first.call(null,seq__39330_39424__$1);
var k_39431 = cljs.core.nth.call(null,vec__39337_39430,(0),null);
var v_39432 = cljs.core.nth.call(null,vec__39337_39430,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_39431))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_39431)," ");

cljs.core.pr.call(null,v_39432);
}

var G__39433 = cljs.core.next.call(null,seq__39330_39424__$1);
var G__39434 = null;
var G__39435 = (0);
var G__39436 = (0);
seq__39330_39412 = G__39433;
chunk__39331_39413 = G__39434;
count__39332_39414 = G__39435;
i__39333_39415 = G__39436;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__39437 = cljs.core.next.call(null,seq__39306_39396__$1);
var G__39438 = null;
var G__39439 = (0);
var G__39440 = (0);
seq__39306_39352 = G__39437;
chunk__39307_39353 = G__39438;
count__39308_39354 = G__39439;
i__39309_39355 = G__39440;
continue;
}
} else {
}
}
break;
}

var seq__39340_39441 = cljs.core.seq.call(null,ed);
var chunk__39341_39442 = null;
var count__39342_39443 = (0);
var i__39343_39444 = (0);
while(true){
if((i__39343_39444 < count__39342_39443)){
var vec__39344_39445 = cljs.core._nth.call(null,chunk__39341_39442,i__39343_39444);
var k_39446 = cljs.core.nth.call(null,vec__39344_39445,(0),null);
var v_39447 = cljs.core.nth.call(null,vec__39344_39445,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_39446))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_39446)," ");

cljs.core.pr.call(null,v_39447);

cljs.core.newline.call(null);
}

var G__39448 = seq__39340_39441;
var G__39449 = chunk__39341_39442;
var G__39450 = count__39342_39443;
var G__39451 = (i__39343_39444 + (1));
seq__39340_39441 = G__39448;
chunk__39341_39442 = G__39449;
count__39342_39443 = G__39450;
i__39343_39444 = G__39451;
continue;
} else {
var temp__6503__auto___39452 = cljs.core.seq.call(null,seq__39340_39441);
if(temp__6503__auto___39452){
var seq__39340_39453__$1 = temp__6503__auto___39452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39340_39453__$1)){
var c__18960__auto___39454 = cljs.core.chunk_first.call(null,seq__39340_39453__$1);
var G__39455 = cljs.core.chunk_rest.call(null,seq__39340_39453__$1);
var G__39456 = c__18960__auto___39454;
var G__39457 = cljs.core.count.call(null,c__18960__auto___39454);
var G__39458 = (0);
seq__39340_39441 = G__39455;
chunk__39341_39442 = G__39456;
count__39342_39443 = G__39457;
i__39343_39444 = G__39458;
continue;
} else {
var vec__39347_39459 = cljs.core.first.call(null,seq__39340_39453__$1);
var k_39460 = cljs.core.nth.call(null,vec__39347_39459,(0),null);
var v_39461 = cljs.core.nth.call(null,vec__39347_39459,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_39460))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_39460)," ");

cljs.core.pr.call(null,v_39461);

cljs.core.newline.call(null);
}

var G__39462 = cljs.core.next.call(null,seq__39340_39453__$1);
var G__39463 = null;
var G__39464 = (0);
var G__39465 = (0);
seq__39340_39441 = G__39462;
chunk__39341_39442 = G__39463;
count__39342_39443 = G__39464;
i__39343_39444 = G__39465;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39305_39351;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39304_39350;
}
return [cljs.core.str(sb__19141__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__19141__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39468_39470 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39469_39471 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39468_39470,_STAR_print_fn_STAR_39469_39471,sb__19141__auto__){
return (function (x__19142__auto__){
return sb__19141__auto__.append(x__19142__auto__);
});})(_STAR_print_newline_STAR_39468_39470,_STAR_print_fn_STAR_39469_39471,sb__19141__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39469_39471;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39468_39470;
}
return [cljs.core.str(sb__19141__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = (function (){var or__18057__auto__ = cljs.core.get.call(null,overrides,spec);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return spec;
}
})();
var spec__$2 = cljs.spec.specize.call(null,spec__$1);
var temp__6501__auto__ = (function (){var or__18057__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$2,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__6501__auto__)){
var g = temp__6501__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__6501__auto__,spec__$1,spec__$2){
return (function (p1__39472_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$2,p1__39472_SHARP_);
});})(g,temp__6501__auto__,spec__$1,spec__$2))
,g,(100));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to
 *   generators. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args39473 = [];
var len__19240__auto___39476 = arguments.length;
var i__19241__auto___39477 = (0);
while(true){
if((i__19241__auto___39477 < len__19240__auto___39476)){
args39473.push((arguments[i__19241__auto___39477]));

var G__39478 = (i__19241__auto___39477 + (1));
i__19241__auto___39477 = G__39478;
continue;
} else {
}
break;
}

var G__39475 = args39473.length;
switch (G__39475) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39473.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__18045__auto__ = cljs.spec.named_QMARK_.call(null,k);
if(cljs.core.truth_(and__18045__auto__)){
return cljs.core.namespace.call(null,k);
} else {
return and__18045__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword or resolveable symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__18057__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
var or__18057__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__18057__auto____$1)){
return or__18057__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
/**
 * Returns nil if v conforms to spec, else throws ex-info with explain-data.
 */
cljs.spec.expect = (function cljs$spec$expect(spec,v){
return null;
});
/**
 * Fn-spec must include at least :args or :ret specs.
 */
cljs.spec.fn_spec_QMARK_ = (function cljs$spec$fn_spec_QMARK_(m){
var or__18057__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(m);
}
});
cljs.spec.spec_checking_fn = (function cljs$spec$spec_checking_fn(v,f){
var conform_BANG_ = (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.conform.call(null,spec,data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),conformed)){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw cljs.core.ex_info.call(null,[cljs.core.str("Call to "),cljs.core.str(cljs.core.pr_str.call(null,v__$1)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__19141__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39486_39492 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39487_39493 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39486_39492,_STAR_print_fn_STAR_39487_39493,sb__19141__auto__,ed,conformed){
return (function (x__19142__auto__){
return sb__19141__auto__.append(x__19142__auto__);
});})(_STAR_print_newline_STAR_39486_39492,_STAR_print_fn_STAR_39487_39493,sb__19141__auto__,ed,conformed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39487_39493;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39486_39492;
}
return [cljs.core.str(sb__19141__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});
var G__39488 = ((function (conform_BANG_){
return (function() { 
var G__39494__delegate = function (args){
if(cljs.core.truth_(cljs.spec._STAR_instrument_enabled_STAR_)){
var _STAR_instrument_enabled_STAR_39489 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = null;

try{var specs = cljs.spec.get_spec.call(null,v);
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs))){
conform_BANG_.call(null,v,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args,args);
} else {
}

var _STAR_instrument_enabled_STAR_39490 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.call(null,f,args);
}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_39490;
}}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_39489;
}} else {
return cljs.core.apply.call(null,f,args);
}
};
var G__39494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39495__i = 0, G__39495__a = new Array(arguments.length -  0);
while (G__39495__i < G__39495__a.length) {G__39495__a[G__39495__i] = arguments[G__39495__i + 0]; ++G__39495__i;}
  args = new cljs.core.IndexedSeq(G__39495__a,0);
} 
return G__39494__delegate.call(this,args);};
G__39494.cljs$lang$maxFixedArity = 0;
G__39494.cljs$lang$applyTo = (function (arglist__39496){
var args = cljs.core.seq(arglist__39496);
return G__39494__delegate(args);
});
G__39494.cljs$core$IFn$_invoke$arity$variadic = G__39494__delegate;
return G__39494;
})()
;})(conform_BANG_))
;
if(!((f instanceof cljs.core.MultiFn))){
var G__39491 = G__39488;
goog.object.extend(G__39491,f);

return G__39491;
} else {
return G__39488;
}
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__6503__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__6503__auto__)){
var arg_spec = temp__6503__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__6501__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__6501__auto__)){
var name = temp__6501__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str("Call to "),cljs.core.str(cljs.spec.__GT_sym.call(null,v)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__19141__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39499_39501 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39500_39502 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39499_39501,_STAR_print_fn_STAR_39500_39502,sb__19141__auto__,ed,arg_spec,temp__6503__auto__,specs){
return (function (x__19142__auto__){
return sb__19141__auto__.append(x__19142__auto__);
});})(_STAR_print_newline_STAR_39499_39501,_STAR_print_fn_STAR_39500_39502,sb__19141__auto__,ed,arg_spec,temp__6503__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39500_39502;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39499_39501;
}
return [cljs.core.str(sb__19141__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.no_fn_spec = (function cljs$spec$no_fn_spec(v,specs){
return cljs.core.ex_info.call(null,[cljs.core.str("Fn at "),cljs.core.str(cljs.core.pr_str.call(null,v)),cljs.core.str(" is not spec'ed.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"specs","specs",1426570741),specs], null));
});
/**
 * Map for instrumented vars to :raw/:wrapped fns
 */
cljs.spec.instrumented_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.spec.instrument_STAR_ = (function cljs$spec$instrument_STAR_(v){
var spec = cljs.spec.get_spec.call(null,v);
if(cljs.core.truth_(cljs.spec.fn_spec_QMARK_.call(null,spec))){
var map__39505 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
var map__39505__$1 = ((((!((map__39505 == null)))?((((map__39505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39505):map__39505);
var raw = cljs.core.get.call(null,map__39505__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__39505__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
return null;
} else {
var checked = cljs.spec.spec_checking_fn.call(null,v,current);
cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),current,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),checked], null));

return checked;
}
} else {
throw cljs.spec.no_fn_spec.call(null,v,spec);
}
});
cljs.spec.unstrument_STAR_ = (function cljs$spec$unstrument_STAR_(v){
var temp__6503__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
if(cljs.core.truth_(temp__6503__auto__)){
var map__39509 = temp__6503__auto__;
var map__39509__$1 = ((((!((map__39509 == null)))?((((map__39509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39509):map__39509);
var raw = cljs.core.get.call(null,map__39509__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__39509__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.dissoc,v);

return raw;
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__18057__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args39511 = [];
var len__19240__auto___39514 = arguments.length;
var i__19241__auto___39515 = (0);
while(true){
if((i__19241__auto___39515 < len__19240__auto___39514)){
args39511.push((arguments[i__19241__auto___39515]));

var G__39516 = (i__19241__auto___39515 + (1));
i__19241__auto___39515 = G__39516;
continue;
} else {
}
break;
}

var G__39513 = args39511.length;
switch (G__39513) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39511.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__6501__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__6501__auto__)){
var spec = temp__6501__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.call(null,form)),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args39518 = [];
var len__19240__auto___39521 = arguments.length;
var i__19241__auto___39522 = (0);
while(true){
if((i__19241__auto___39522 < len__19240__auto___39521)){
args39518.push((arguments[i__19241__auto___39522]));

var G__39523 = (i__19241__auto___39522 + (1));
i__19241__auto___39522 = G__39523;
continue;
} else {
}
break;
}

var G__39520 = args39518.length;
switch (G__39520) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39518.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__6501__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__6501__auto__)){
var name = temp__6501__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__39527){
var map__39558 = p__39527;
var map__39558__$1 = ((((!((map__39558 == null)))?((((map__39558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39558):map__39558);
var argm = map__39558__$1;
var opt = cljs.core.get.call(null,map__39558__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__39558__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__39558__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__39558__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__39558__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.call(null,map__39558__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__39558__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__39558__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__39558__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__39558__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__39558__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.call(null,cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__39525_SHARP_){
var or__18057__auto__ = k__GT_s.call(null,p1__39525_SHARP_);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return p1__39525_SHARP_;
}
});})(keys_pred,k__GT_s,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec39560 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39560 = (function (opt,p__39527,map_spec_impl,req_un,opt_un,map__39558,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,keys__GT_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta39561){
this.opt = opt;
this.p__39527 = p__39527;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.map__39558 = map__39558;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta39561 = meta39561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec39560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_39562,meta39561__$1){
var self__ = this;
var _39562__$1 = this;
return (new cljs.spec.t_cljs$spec39560(self__.opt,self__.p__39527,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.map__39558,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.keys__GT_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta39561__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39560.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_39562){
var self__ = this;
var _39562__$1 = this;
return self__.meta39561;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec39560.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec39560.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__39566 = cljs.core.keys.call(null,m);
var vec__39567 = G__39566;
var seq__39568 = cljs.core.seq.call(null,vec__39567);
var first__39569 = cljs.core.first.call(null,seq__39568);
var seq__39568__$1 = cljs.core.next.call(null,seq__39568);
var k = first__39569;
var ks = seq__39568__$1;
var keys = vec__39567;
var ret__$1 = ret;
var G__39566__$1 = G__39566;
while(true){
var ret__$2 = ret__$1;
var vec__39570 = G__39566__$1;
var seq__39571 = cljs.core.seq.call(null,vec__39570);
var first__39572 = cljs.core.first.call(null,seq__39571);
var seq__39571__$1 = cljs.core.next.call(null,seq__39571);
var k__$1 = first__39572;
var ks__$1 = seq__39571__$1;
var keys__$1 = vec__39570;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var v = cljs.core.get.call(null,m,k__$1);
var cv = cljs.spec.conform.call(null,self__.keys__GT_specs.call(null,k__$1),v);
if(cljs.core._EQ_.call(null,cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__39588 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__39589 = ks__$1;
ret__$1 = G__39588;
G__39566__$1 = G__39589;
continue;
}
} else {
var G__39590 = ret__$2;
var G__39591 = ks__$1;
ret__$1 = G__39590;
G__39566__$1 = G__39591;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39560.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__39576 = cljs.core.keys.call(null,m);
var vec__39577 = G__39576;
var seq__39578 = cljs.core.seq.call(null,vec__39577);
var first__39579 = cljs.core.first.call(null,seq__39578);
var seq__39578__$1 = cljs.core.next.call(null,seq__39578);
var k = first__39579;
var ks = seq__39578__$1;
var keys = vec__39577;
var ret__$1 = ret;
var G__39576__$1 = G__39576;
while(true){
var ret__$2 = ret__$1;
var vec__39580 = G__39576__$1;
var seq__39581 = cljs.core.seq.call(null,vec__39580);
var first__39582 = cljs.core.first.call(null,seq__39581);
var seq__39581__$1 = cljs.core.next.call(null,seq__39581);
var k__$1 = first__39582;
var ks__$1 = seq__39581__$1;
var keys__$1 = vec__39580;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specs.call(null,k__$1),cv);
var G__39592 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__39593 = ks__$1;
ret__$1 = G__39592;
G__39576__$1 = G__39593;
continue;
} else {
var G__39594 = ret__$2;
var G__39595 = ks__$1;
ret__$1 = G__39594;
G__39576__$1 = G__39595;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39560.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.merge,(function (){var temp__6503__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__6503__auto__){
var probs = temp__6503__auto__;
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.vec.call(null,probs),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__39583){
var vec__39584 = p__39583;
var k = cljs.core.nth.call(null,vec__39584,(0),null);
var v = cljs.core.nth.call(null,vec__39584,(1),null);
if(cljs.core.truth_((function (){var or__18057__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k)));
if(or__18057__auto__){
return or__18057__auto__;
} else {
return cljs.spec.valid_QMARK_.call(null,self__.keys__GT_specs.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specs.call(null,k),self__.keys__GT_specs.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39560.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__39526_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__39526_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39560.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39560.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__39587 = cljs.core.PersistentVector.EMPTY;
var G__39587__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__39587,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__39587);
var G__39587__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__39587__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__39587__$1);
var G__39587__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__39587__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__39587__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__39587__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__39587__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39560.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"p__39527","p__39527",1768566630,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-spec-impl","map-spec-impl",-1682885722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"argm","argm",-181546357,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a map argument"], null)),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"map__39558","map__39558",609441640,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta39561","meta39561",1936271425,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39560.cljs$lang$type = true;

cljs.spec.t_cljs$spec39560.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39560";

cljs.spec.t_cljs$spec39560.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.spec/t_cljs$spec39560");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec39560 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec39560(opt__$1,p__39527__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,map__39558__$2,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta39561){
return (new cljs.spec.t_cljs$spec39560(opt__$1,p__39527__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,map__39558__$2,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta39561));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39558,map__39558__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec39560(opt,p__39527,cljs$spec$map_spec_impl,req_un,opt_un,map__39558__$1,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,keys__GT_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args39596 = [];
var len__19240__auto___39604 = arguments.length;
var i__19241__auto___39605 = (0);
while(true){
if((i__19241__auto___39605 < len__19240__auto___39604)){
args39596.push((arguments[i__19241__auto___39605]));

var G__39606 = (i__19241__auto___39605 + (1));
i__19241__auto___39605 = G__39606;
continue;
} else {
}
break;
}

var G__39598 = args39596.length;
switch (G__39598) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39596.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__39599 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__39599,gfn);
} else {
return G__39599;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,pred))){
var G__39600 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__39600,gfn);
} else {
return G__39600;
}
} else {
if(typeof cljs.spec.t_cljs$spec39601 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39601 = (function (form,pred,gfn,cpred_QMARK_,unc,meta39602){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta39602 = meta39602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec39601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39603,meta39602__$1){
var self__ = this;
var _39603__$1 = this;
return (new cljs.spec.t_cljs$spec39601(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta39602__$1));
});

cljs.spec.t_cljs$spec39601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39603){
var self__ = this;
var _39603__$1 = this;
return self__.meta39602;
});


cljs.spec.t_cljs$spec39601.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec39601.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec39601.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec39601.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
});

cljs.spec.t_cljs$spec39601.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec39601.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec39601.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec39601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta39602","meta39602",-1714801844,null)], null);
});

cljs.spec.t_cljs$spec39601.cljs$lang$type = true;

cljs.spec.t_cljs$spec39601.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39601";

cljs.spec.t_cljs$spec39601.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.spec/t_cljs$spec39601");
});

cljs.spec.__GT_t_cljs$spec39601 = (function cljs$spec$__GT_t_cljs$spec39601(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta39602){
return (new cljs.spec.t_cljs$spec39601(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta39602));
});

}

return (new cljs.spec.t_cljs$spec39601(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args39613 = [];
var len__19240__auto___39627 = arguments.length;
var i__19241__auto___39628 = (0);
while(true){
if((i__19241__auto___39628 < len__19240__auto___39627)){
args39613.push((arguments[i__19241__auto___39628]));

var G__39629 = (i__19241__auto___39628 + (1));
i__19241__auto___39628 = G__39629;
continue;
} else {
}
break;
}

var G__39615 = args39613.length;
switch (G__39615) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39613.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__39608_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__18045__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.methods$.call(null,mm),cljs.core._dispatch_fn.call(null,mm).call(null,p1__39608_SHARP_));
if(and__18045__auto__){
return mm.call(null,p1__39608_SHARP_);
} else {
return and__18045__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__39609_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__39609_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__39610_SHARP_,p2__39611_SHARP_){
return cljs.core.assoc.call(null,p1__39610_SHARP_,retag,p2__39611_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec39616 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39616 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta39617){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta39617 = meta39617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec39616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_39618,meta39617__$1){
var self__ = this;
var _39618__$1 = this;
return (new cljs.spec.t_cljs$spec39616(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta39617__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39616.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_39618){
var self__ = this;
var _39618__$1 = this;
return self__.meta39617;
});})(id,predx,dval,tag))
;


cljs.spec.t_cljs$spec39616.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec39616.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6501__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6501__auto__)){
var pred = temp__6501__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39616.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6501__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6501__auto__)){
var pred = temp__6501__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str("No method of: "),cljs.core.str(self__.form),cljs.core.str(" for dispatch value: "),cljs.core.str(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39616.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__6501__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6501__auto__)){
var pred = temp__6501__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39616.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__39619){
var vec__39620 = p__39619;
var k = cljs.core.nth.call(null,vec__39620,(0),null);
var f = cljs.core.nth.call(null,vec__39620,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__39620,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__39620,k,f,___$1,id,predx,dval,tag){
return (function (p1__39612_SHARP_){
return self__.tag.call(null,p1__39612_SHARP_,k);
});})(rmap__$1,p,vec__39620,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__18983__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__18983__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto____$1);
})(),x__18983__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__39620,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__39623){
var vec__39624 = p__39623;
var k = cljs.core.nth.call(null,vec__39624,(0),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39616.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39616.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__18983__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39616.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta39617","meta39617",682614612,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39616.cljs$lang$type = true;

cljs.spec.t_cljs$spec39616.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39616";

cljs.spec.t_cljs$spec39616.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.spec/t_cljs$spec39616");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec39616 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec39616(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta39617){
return (new cljs.spec.t_cljs$spec39616(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta39617));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec39616(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args39631 = [];
var len__19240__auto___39637 = arguments.length;
var i__19241__auto___39638 = (0);
while(true){
if((i__19241__auto___39638 < len__19240__auto___39637)){
args39631.push((arguments[i__19241__auto___39638]));

var G__39639 = (i__19241__auto___39638 + (1));
i__19241__auto___39638 = G__39639;
continue;
} else {
}
break;
}

var G__39633 = args39631.length;
switch (G__39633) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39631.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec39634 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39634 = (function (forms,preds,gfn,meta39635){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta39635 = meta39635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec39634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39636,meta39635__$1){
var self__ = this;
var _39636__$1 = this;
return (new cljs.spec.t_cljs$spec39634(self__.forms,self__.preds,self__.gfn,meta39635__$1));
});

cljs.spec.t_cljs$spec39634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39636){
var self__ = this;
var _39636__$1 = this;
return self__.meta39635;
});


cljs.spec.t_cljs$spec39634.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec39634.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.dt.call(null,self__.preds.call(null,i),v,self__.forms.call(null,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__39641 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__39642 = (i + (1));
ret = G__39641;
i = G__39642;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec39634.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__39643 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__39644 = (i + (1));
ret = G__39643;
i = G__39644;
continue;
}
break;
}
});

cljs.spec.t_cljs$spec39634.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__18983__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})(),(function (){var x__18983__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec39634.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec39634.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec39634.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec39634.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta39635","meta39635",-1065749860,null)], null);
});

cljs.spec.t_cljs$spec39634.cljs$lang$type = true;

cljs.spec.t_cljs$spec39634.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39634";

cljs.spec.t_cljs$spec39634.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.spec/t_cljs$spec39634");
});

cljs.spec.__GT_t_cljs$spec39634 = (function cljs$spec$__GT_t_cljs$spec39634(forms__$1,preds__$1,gfn__$1,meta39635){
return (new cljs.spec.t_cljs$spec39634(forms__$1,preds__$1,gfn__$1,meta39635));
});

}

return (new cljs.spec.t_cljs$spec39634(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x39646 = v;

x39646.cljs$core$IMapEntry$ = true;


x39646.cljs$core$IMapEntry$_key$arity$1 = ((function (x39646){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x39646))
;


x39646.cljs$core$IMapEntry$_val$arity$1 = ((function (x39646){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x39646))
;

return x39646;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var cform = ((function (id,kps){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count.call(null,preds))){
var pred = preds.call(null,i);
var ret = cljs.spec.dt.call(null,pred,x,cljs.core.nth.call(null,forms,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__39661 = (i + (1));
i = G__39661;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id,kps))
;
if(typeof cljs.spec.t_cljs$spec39654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39654 = (function (or_spec_impl,keys,forms,preds,gfn,id,kps,cform,meta39655){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.cform = cform;
this.meta39655 = meta39655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec39654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,cform){
return (function (_39656,meta39655__$1){
var self__ = this;
var _39656__$1 = this;
return (new cljs.spec.t_cljs$spec39654(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.cform,meta39655__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,cform){
return (function (_39656){
var self__ = this;
var _39656__$1 = this;
return self__.meta39655;
});})(id,kps,cform))
;


cljs.spec.t_cljs$spec39654.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec39654.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39654.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,p__39657){
var self__ = this;
var vec__39658 = p__39657;
var k = cljs.core.nth.call(null,vec__39658,(0),null);
var x = cljs.core.nth.call(null,vec__39658,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39654.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (this$__$1,id,kps,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39654.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,cform))
,null)));
}
});})(___$1,id,kps,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39654.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39654.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39654.getBasis = ((function (id,kps,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-spec-impl","or-spec-impl",-1412945461,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'or'"], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta39655","meta39655",414258868,null)], null);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39654.cljs$lang$type = true;

cljs.spec.t_cljs$spec39654.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39654";

cljs.spec.t_cljs$spec39654.cljs$lang$ctorPrWriter = ((function (id,kps,cform){
return (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.spec/t_cljs$spec39654");
});})(id,kps,cform))
;

cljs.spec.__GT_t_cljs$spec39654 = ((function (id,kps,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec39654(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta39655){
return (new cljs.spec.t_cljs$spec39654(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta39655));
});})(id,kps,cform))
;

}

return (new cljs.spec.t_cljs$spec39654(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,kps,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__39688 = preds;
var vec__39690 = G__39688;
var seq__39691 = cljs.core.seq.call(null,vec__39690);
var first__39692 = cljs.core.first.call(null,seq__39691);
var seq__39691__$1 = cljs.core.next.call(null,seq__39691);
var pred = first__39692;
var preds__$1 = seq__39691__$1;
var G__39689 = forms;
var vec__39693 = G__39689;
var seq__39694 = cljs.core.seq.call(null,vec__39693);
var first__39695 = cljs.core.first.call(null,seq__39694);
var seq__39694__$1 = cljs.core.next.call(null,seq__39694);
var form = first__39695;
var forms__$1 = seq__39694__$1;
var ret__$1 = ret;
var G__39688__$1 = G__39688;
var G__39689__$1 = G__39689;
while(true){
var ret__$2 = ret__$1;
var vec__39696 = G__39688__$1;
var seq__39697 = cljs.core.seq.call(null,vec__39696);
var first__39698 = cljs.core.first.call(null,seq__39697);
var seq__39697__$1 = cljs.core.next.call(null,seq__39697);
var pred__$1 = first__39698;
var preds__$2 = seq__39697__$1;
var vec__39699 = G__39689__$1;
var seq__39700 = cljs.core.seq.call(null,vec__39699);
var first__39701 = cljs.core.first.call(null,seq__39700);
var seq__39700__$1 = cljs.core.next.call(null,seq__39700);
var form__$1 = first__39701;
var forms__$2 = seq__39700__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__39702 = nret;
var G__39703 = preds__$2;
var G__39704 = forms__$2;
ret__$1 = G__39702;
G__39688__$1 = G__39703;
G__39689__$1 = G__39704;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__39731 = forms;
var vec__39733 = G__39731;
var seq__39734 = cljs.core.seq.call(null,vec__39733);
var first__39735 = cljs.core.first.call(null,seq__39734);
var seq__39734__$1 = cljs.core.next.call(null,seq__39734);
var form = first__39735;
var forms__$1 = seq__39734__$1;
var G__39732 = preds;
var vec__39736 = G__39732;
var seq__39737 = cljs.core.seq.call(null,vec__39736);
var first__39738 = cljs.core.first.call(null,seq__39737);
var seq__39737__$1 = cljs.core.next.call(null,seq__39737);
var pred = first__39738;
var preds__$1 = seq__39737__$1;
var ret__$1 = ret;
var G__39731__$1 = G__39731;
var G__39732__$1 = G__39732;
while(true){
var ret__$2 = ret__$1;
var vec__39739 = G__39731__$1;
var seq__39740 = cljs.core.seq.call(null,vec__39739);
var first__39741 = cljs.core.first.call(null,seq__39740);
var seq__39740__$1 = cljs.core.next.call(null,seq__39740);
var form__$1 = first__39741;
var forms__$2 = seq__39740__$1;
var vec__39742 = G__39732__$1;
var seq__39743 = cljs.core.seq.call(null,vec__39742);
var first__39744 = cljs.core.first.call(null,seq__39743);
var seq__39743__$1 = cljs.core.next.call(null,seq__39743);
var pred__$1 = first__39744;
var preds__$2 = seq__39743__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__39745 = nret;
var G__39746 = forms__$2;
var G__39747 = preds__$2;
ret__$1 = G__39745;
G__39731__$1 = G__39746;
G__39732__$1 = G__39747;
continue;
} else {
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec39753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39753 = (function (and_spec_impl,forms,preds,gfn,meta39754){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta39754 = meta39754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec39753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39755,meta39754__$1){
var self__ = this;
var _39755__$1 = this;
return (new cljs.spec.t_cljs$spec39753(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta39754__$1));
});

cljs.spec.t_cljs$spec39753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39755){
var self__ = this;
var _39755__$1 = this;
return self__.meta39754;
});


cljs.spec.t_cljs$spec39753.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec39753.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds.call(null,x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec39753.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__39749_SHARP_,p2__39748_SHARP_){
return cljs.spec.unform.call(null,p2__39748_SHARP_,p1__39749_SHARP_);
});})(___$1))
,x,cljs.core.reverse.call(null,self__.preds));
});

cljs.spec.t_cljs$spec39753.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec39753.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});

cljs.spec.t_cljs$spec39753.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec39753.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});

cljs.spec.t_cljs$spec39753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"and-spec-impl","and-spec-impl",1127339973,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'and'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta39754","meta39754",458043773,null)], null);
});

cljs.spec.t_cljs$spec39753.cljs$lang$type = true;

cljs.spec.t_cljs$spec39753.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39753";

cljs.spec.t_cljs$spec39753.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.spec/t_cljs$spec39753");
});

cljs.spec.__GT_t_cljs$spec39753 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec39753(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta39754){
return (new cljs.spec.t_cljs$spec39753(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta39754));
});

}

return (new cljs.spec.t_cljs$spec39753(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args39758 = [];
var len__19240__auto___39767 = arguments.length;
var i__19241__auto___39768 = (0);
while(true){
if((i__19241__auto___39768 < len__19240__auto___39767)){
args39758.push((arguments[i__19241__auto___39768]));

var G__39769 = (i__19241__auto___39768 + (1));
i__19241__auto___39768 = G__39769;
continue;
} else {
}
break;
}

var G__39760 = args39758.length;
switch (G__39760) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39758.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__39761,gfn){
var map__39762 = p__39761;
var map__39762__$1 = ((((!((map__39762 == null)))?((((map__39762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39762):map__39762);
var opts = map__39762__$1;
var count = cljs.core.get.call(null,map__39762__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var max_count = cljs.core.get.call(null,map__39762__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var min_count = cljs.core.get.call(null,map__39762__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var distinct = cljs.core.get.call(null,map__39762__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var gen_max = cljs.core.get.call(null,map__39762__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var gen_into = cljs.core.get.call(null,map__39762__$1,new cljs.core.Keyword(null,"gen-into","gen-into",-1047890542),cljs.core.PersistentVector.EMPTY);
var kfn = cljs.core.get.call(null,map__39762__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var check_QMARK_ = ((function (map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (p1__39756_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__39756_SHARP_);
});})(map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;
var kfn__$1 = (function (){var or__18057__auto__ = kfn;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return ((function (or__18057__auto__,check_QMARK_,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (i,v){
return i;
});
;})(or__18057__auto__,check_QMARK_,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
}
})();
if(typeof cljs.spec.t_cljs$spec39764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39764 = (function (form,max_count,check_QMARK_,gfn,gen_max,map__39762,pred,distinct,p__39761,kfn,gen_into,count,min_count,opts,meta39765){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.map__39762 = map__39762;
this.pred = pred;
this.distinct = distinct;
this.p__39761 = p__39761;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.meta39765 = meta39765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec39764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_39766,meta39765__$1){
var self__ = this;
var _39766__$1 = this;
return (new cljs.spec.t_cljs$spec39764(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.map__39762,self__.pred,self__.distinct,self__.p__39761,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,meta39765__$1));
});})(check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec39764.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_39766){
var self__ = this;
var _39766__$1 = this;
return self__.meta39765;
});})(check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;


cljs.spec.t_cljs$spec39764.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec39764.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__18057__auto__ = !(cljs.core.seqable_QMARK_.call(null,x));
if(or__18057__auto__){
return or__18057__auto__;
} else {
var or__18057__auto____$1 = (function (){var and__18045__auto__ = self__.distinct;
if(cljs.core.truth_(and__18045__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__18045__auto__;
}
})();
if(cljs.core.truth_(or__18057__auto____$1)){
return or__18057__auto____$1;
} else {
var or__18057__auto____$2 = (function (){var and__18045__auto__ = self__.count;
if(cljs.core.truth_(and__18045__auto__)){
return cljs.core.not_EQ_.call(null,self__.count,cljs.core.bounded_count.call(null,(self__.count + (1)),x));
} else {
return and__18045__auto__;
}
})();
if(cljs.core.truth_(or__18057__auto____$2)){
return or__18057__auto____$2;
} else {
var and__18045__auto__ = (function (){var or__18057__auto____$3 = self__.min_count;
if(cljs.core.truth_(or__18057__auto____$3)){
return or__18057__auto____$3;
} else {
return self__.max_count;
}
})();
if(cljs.core.truth_(and__18045__auto__)){
return !((((function (){var or__18057__auto____$3 = self__.min_count;
if(cljs.core.truth_(or__18057__auto____$3)){
return or__18057__auto____$3;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x) <= (function (){var or__18057__auto____$3 = self__.max_count;
if(cljs.core.truth_(or__18057__auto____$3)){
return or__18057__auto____$3;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__18045__auto__;
}
}
}
}
})())){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__18390__auto__ = (1);
var y__18391__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__18390__auto__ > y__18391__auto__) ? x__18390__auto__ : y__18391__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(self__.check_QMARK_.call(null,cljs.core.nth.call(null,x,i)))){
var G__39771 = (i + step);
i = G__39771;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var or__18057__auto__ = (function (){var and__18045__auto__ = cljs.core.every_QMARK_.call(null,self__.check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,x));
if(and__18045__auto__){
return x;
} else {
return and__18045__auto__;
}
})();
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}

}
});})(check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec39764.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec39764.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.seqable_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"seqable?","seqable?",72462495,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__18045__auto__ = self__.distinct;
if(cljs.core.truth_(and__18045__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__18045__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__18045__auto__ = self__.count;
if(cljs.core.truth_(and__18045__auto__)){
return cljs.core.not_EQ_.call(null,self__.count,cljs.core.bounded_count.call(null,self__.count,x));
} else {
return and__18045__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__18983__auto__ = self__.count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})(),(function (){var x__18983__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","%","cljs.spec/%",-1625123498,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__18045__auto__ = (function (){var or__18057__auto__ = self__.min_count;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return self__.max_count;
}
})();
if(cljs.core.truth_(and__18045__auto__)){
return !((((function (){var or__18057__auto__ = self__.min_count;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x) <= (function (){var or__18057__auto__ = self__.max_count;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__18045__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__18983__auto__ = (function (){var or__18057__auto__ = self__.min_count;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})(),(function (){var x__18983__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","%","cljs.spec/%",-1625123498,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})(),(function (){var x__18983__auto__ = (function (){var or__18057__auto__ = self__.max_count;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return new cljs.core.Symbol("js","Number.MAX_SAFE_INTEGER","js/Number.MAX_SAFE_INTEGER",-1535627560,null);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.take.call(null,cljs.spec._STAR_coll_error_limit_STAR_,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (___$1,check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(___$1,check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
,cljs.core.range.call(null),x))));

}
}
}
}
});})(check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec39764.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var init = cljs.core.empty.call(null,self__.gen_into);
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.fmap.call(null,((function (init,pgen,___$1,check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (p1__39757_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__39757_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__39757_SHARP_);
}
});})(init,pgen,___$1,check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__18057__auto__ = self__.min_count;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__18057__auto__ = self__.max_count;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
var x__18390__auto__ = self__.gen_max;
var y__18391__auto__ = ((2) * (function (){var or__18057__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__18057__auto____$1)){
return or__18057__auto____$1;
} else {
return (0);
}
})());
return ((x__18390__auto__ > y__18391__auto__) ? x__18390__auto__ : y__18391__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__18057__auto__ = self__.min_count;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__18057__auto__ = self__.min_count;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return (0);
}
})(),(function (){var or__18057__auto__ = self__.max_count;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
var x__18390__auto__ = self__.gen_max;
var y__18391__auto__ = ((2) * (function (){var or__18057__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__18057__auto____$1)){
return or__18057__auto____$1;
} else {
return (0);
}
})());
return ((x__18390__auto__ > y__18391__auto__) ? x__18390__auto__ : y__18391__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
}
});})(check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec39764.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec39764.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__18983__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
});})(check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec39764.getBasis = ((function (check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"map__39762","map__39762",-837285366,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"p__39761","p__39761",966505432,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta39765","meta39765",-119004026,null)], null);
});})(check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec39764.cljs$lang$type = true;

cljs.spec.t_cljs$spec39764.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39764";

cljs.spec.t_cljs$spec39764.cljs$lang$ctorPrWriter = ((function (check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.spec/t_cljs$spec39764");
});})(check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.__GT_t_cljs$spec39764 = ((function (check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function cljs$spec$__GT_t_cljs$spec39764(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,map__39762__$2,pred__$1,distinct__$1,p__39761__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,meta39765){
return (new cljs.spec.t_cljs$spec39764(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,map__39762__$2,pred__$1,distinct__$1,p__39761__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,meta39765));
});})(check_QMARK_,kfn__$1,map__39762,map__39762__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

}

return (new cljs.spec.t_cljs$spec39764(form,max_count,check_QMARK_,gfn,gen_max,map__39762__$1,pred,distinct,p__39761,kfn__$1,gen_into,count,min_count,opts,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__39772){
var map__39775 = p__39772;
var map__39775__$1 = ((((!((map__39775 == null)))?((((map__39775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39775):map__39775);
var op = cljs.core.get.call(null,map__39775__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__39777){
var map__39789 = p__39777;
var map__39789__$1 = ((((!((map__39789 == null)))?((((map__39789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39789):map__39789);
var vec__39790 = cljs.core.get.call(null,map__39789__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__39791 = cljs.core.seq.call(null,vec__39790);
var first__39792 = cljs.core.first.call(null,seq__39791);
var seq__39791__$1 = cljs.core.next.call(null,seq__39791);
var p1 = first__39792;
var pr = seq__39791__$1;
var ps = vec__39790;
var vec__39793 = cljs.core.get.call(null,map__39789__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__39794 = cljs.core.seq.call(null,vec__39793);
var first__39795 = cljs.core.first.call(null,seq__39794);
var seq__39794__$1 = cljs.core.next.call(null,seq__39794);
var k1 = first__39795;
var kr = seq__39794__$1;
var ks = vec__39793;
var vec__39796 = cljs.core.get.call(null,map__39789__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__39797 = cljs.core.seq.call(null,vec__39796);
var first__39798 = cljs.core.first.call(null,seq__39797);
var seq__39797__$1 = cljs.core.next.call(null,seq__39797);
var f1 = first__39798;
var fr = seq__39797__$1;
var forms = vec__39796;
var ret = cljs.core.get.call(null,map__39789__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__39789__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__19247__auto__ = [];
var len__19240__auto___39801 = arguments.length;
var i__19241__auto___39802 = (0);
while(true){
if((i__19241__auto___39802 < len__19240__auto___39801)){
args__19247__auto__.push((arguments[i__19241__auto___39802]));

var G__39803 = (i__19241__auto___39802 + (1));
i__19241__auto___39802 = G__39803;
continue;
} else {
}
break;
}

var argseq__19248__auto__ = ((((0) < args__19247__auto__.length))?(new cljs.core.IndexedSeq(args__19247__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__19248__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq39800){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39800));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__18983__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})(),(function (){var x__18983__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__18983__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__18057__auto__ = ks;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__39804_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__39804_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__18057__auto__ = cljs.core.seq.call(null,ks);
if(or__18057__auto__){
return or__18057__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__18057__auto__ = cljs.core.seq.call(null,forms);
if(or__18057__auto__){
return or__18057__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__39805_SHARP_){
return cljs.core.nth.call(null,p1__39805_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__39815 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__39818 = cljs.core.nth.call(null,vec__39815,(0),null);
var seq__39819 = cljs.core.seq.call(null,vec__39818);
var first__39820 = cljs.core.first.call(null,seq__39819);
var seq__39819__$1 = cljs.core.next.call(null,seq__39819);
var p1 = first__39820;
var pr = seq__39819__$1;
var ps__$1 = vec__39818;
var vec__39821 = cljs.core.nth.call(null,vec__39815,(1),null);
var k1 = cljs.core.nth.call(null,vec__39821,(0),null);
var ks__$1 = vec__39821;
var forms__$1 = cljs.core.nth.call(null,vec__39815,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__19247__auto__ = [];
var len__19240__auto___39825 = arguments.length;
var i__19241__auto___39826 = (0);
while(true){
if((i__19241__auto___39826 < len__19240__auto___39825)){
args__19247__auto__.push((arguments[i__19241__auto___39826]));

var G__39827 = (i__19241__auto___39826 + (1));
i__19241__auto___39826 = G__39827;
continue;
} else {
}
break;
}

var argseq__19248__auto__ = ((((0) < args__19247__auto__.length))?(new cljs.core.IndexedSeq(args__19247__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__19248__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq39824){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39824));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__18045__auto__ = p1;
if(cljs.core.truth_(and__18045__auto__)){
return p2;
} else {
return and__18045__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__18057__auto__ = p1;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__18057__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__18057__auto__){
return or__18057__auto__;
} else {
var or__18057__auto____$1 = (function (){var and__18045__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__18045__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__18045__auto__;
}
})();
if(cljs.core.truth_(or__18057__auto____$1)){
return or__18057__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__39831 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__39831__$1 = ((((!((map__39831 == null)))?((((map__39831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39831):map__39831);
var p__$1 = map__39831__$1;
var op = cljs.core.get.call(null,map__39831__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__39831__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__39831__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__39831__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__39831__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__39833 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__39833)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__39833)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__39833)){
var and__18045__auto__ = cljs$spec$accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__18045__auto__)){
var or__18057__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not_EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
}
} else {
return and__18045__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__39833)){
var or__18057__auto__ = (p1 === p2);
if(or__18057__auto__){
return or__18057__auto__;
} else {
return cljs$spec$accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__39833)){
return cljs.core.every_QMARK_.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__39833)){
return cljs.core.some.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__39852 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__39852__$1 = ((((!((map__39852 == null)))?((((map__39852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39852):map__39852);
var p__$1 = map__39852__$1;
var vec__39853 = cljs.core.get.call(null,map__39852__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__39854 = cljs.core.seq.call(null,vec__39853);
var first__39855 = cljs.core.first.call(null,seq__39854);
var seq__39854__$1 = cljs.core.next.call(null,seq__39854);
var p0 = first__39855;
var pr = seq__39854__$1;
var ps = vec__39853;
var vec__39856 = cljs.core.get.call(null,map__39852__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__39856,(0),null);
var ks = vec__39856;
var op = cljs.core.get.call(null,map__39852__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__39852__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__39852__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__39852__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__39860 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__39860)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__39860)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__39860)){
var pret = cljs$spec$preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__39860)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__39860)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__39860)){
var vec__39861 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__39864 = cljs.core.nth.call(null,vec__39861,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__39864,(0),null);
var vec__39867 = cljs.core.nth.call(null,vec__39861,(1),null);
var k0 = cljs.core.nth.call(null,vec__39867,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs$spec$preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__39886 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__39886__$1 = ((((!((map__39886 == null)))?((((map__39886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39886):map__39886);
var p__$1 = map__39886__$1;
var vec__39887 = cljs.core.get.call(null,map__39886__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__39888 = cljs.core.seq.call(null,vec__39887);
var first__39889 = cljs.core.first.call(null,seq__39888);
var seq__39888__$1 = cljs.core.next.call(null,seq__39888);
var p0 = first__39889;
var pr = seq__39888__$1;
var ps = vec__39887;
var vec__39890 = cljs.core.get.call(null,map__39886__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__39890,(0),null);
var ks = vec__39890;
var op = cljs.core.get.call(null,map__39886__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__39886__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__39886__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__39886__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__39886__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__39886__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__39894 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__39894)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__39894)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__39894)){
var px = cljs.core.reduce.call(null,((function (G__39894,map__39886,map__39886__$1,p__$1,vec__39887,seq__39888,first__39889,seq__39888__$1,p0,pr,ps,vec__39890,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__39871_SHARP_,p2__39870_SHARP_){
return cljs.spec.unform.call(null,p2__39870_SHARP_,p1__39871_SHARP_);
});})(G__39894,map__39886,map__39886__$1,p__$1,vec__39887,seq__39888,first__39889,seq__39888__$1,p0,pr,ps,vec__39890,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs$spec$op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__39894)){
return cljs.core.mapcat.call(null,((function (G__39894,map__39886,map__39886__$1,p__$1,vec__39887,seq__39888,first__39889,seq__39888__$1,p0,pr,ps,vec__39890,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__39872_SHARP_){
return cljs$spec$op_unform.call(null,p1,p1__39872_SHARP_);
});})(G__39894,map__39886,map__39886__$1,p__$1,vec__39887,seq__39888,first__39889,seq__39888__$1,p0,pr,ps,vec__39890,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__39894)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__39894,map__39886,map__39886__$1,p__$1,vec__39887,seq__39888,first__39889,seq__39888__$1,p0,pr,ps,vec__39890,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__39873_SHARP_){
return cljs$spec$op_unform.call(null,p0,p1__39873_SHARP_);
});})(G__39894,map__39886,map__39886__$1,p__$1,vec__39887,seq__39888,first__39889,seq__39888__$1,p0,pr,ps,vec__39890,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__39894,map__39886,map__39886__$1,p__$1,vec__39887,seq__39888,first__39889,seq__39888__$1,p0,pr,ps,vec__39890,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__39894,map__39886,map__39886__$1,p__$1,vec__39887,seq__39888,first__39889,seq__39888__$1,p0,pr,ps,vec__39890,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__39894)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__39895 = x;
var k__$1 = cljs.core.nth.call(null,vec__39895,(0),null);
var v = cljs.core.nth.call(null,vec__39895,(1),null);
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__39901 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__39901__$1 = ((((!((map__39901 == null)))?((((map__39901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39901):map__39901);
var p__$1 = map__39901__$1;
var op = cljs.core.get.call(null,map__39901__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__39901__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__39901__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__39901,map__39901__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__39901,map__39901__$1,p__$1,op,ps,splice))
;
var G__39903 = op;
if(cljs.core._EQ_.call(null,null,G__39903)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__39903)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__39903)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__39903)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__39903)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__39903)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__39914 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__39914__$1 = ((((!((map__39914 == null)))?((((map__39914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39914):map__39914);
var p__$1 = map__39914__$1;
var vec__39915 = cljs.core.get.call(null,map__39914__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__39916 = cljs.core.seq.call(null,vec__39915);
var first__39917 = cljs.core.first.call(null,seq__39916);
var seq__39916__$1 = cljs.core.next.call(null,seq__39916);
var p0 = first__39917;
var pr = seq__39916__$1;
var ps = vec__39915;
var vec__39918 = cljs.core.get.call(null,map__39914__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__39919 = cljs.core.seq.call(null,vec__39918);
var first__39920 = cljs.core.first.call(null,seq__39919);
var seq__39919__$1 = cljs.core.next.call(null,seq__39919);
var k0 = first__39920;
var kr = seq__39919__$1;
var ks = vec__39918;
var op = cljs.core.get.call(null,map__39914__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__39914__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__39914__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__39914__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__39914__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__39914__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__39922 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__39922)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__39922)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__39922)){
var temp__6503__auto__ = cljs$spec$deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6503__auto__)){
var p1__$1 = temp__6503__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core._EQ_.call(null,ret__$1,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__39922)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs$spec$deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs$spec$deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__39922)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__39922,map__39914,map__39914__$1,p__$1,vec__39915,seq__39916,first__39917,seq__39916__$1,p0,pr,ps,vec__39918,seq__39919,first__39920,seq__39919__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__39904_SHARP_){
return cljs$spec$deriv.call(null,p1__39904_SHARP_,x);
});})(G__39922,map__39914,map__39914__$1,p__$1,vec__39915,seq__39916,first__39917,seq__39916__$1,p0,pr,ps,vec__39918,seq__39919,first__39920,seq__39919__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__39922)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs$spec$deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs$spec$deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__39926 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__39926__$1 = ((((!((map__39926 == null)))?((((map__39926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39926):map__39926);
var p__$1 = map__39926__$1;
var op = cljs.core.get.call(null,map__39926__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__39926__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__39926__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__39926__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__39926__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__39926__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__39926__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__39926__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__39928 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__39928)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__39928)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__39928)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs$spec$op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__39928)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__18983__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__18057__auto__ = cljs.core.seq.call(null,ks);
if(or__18057__auto__){
return or__18057__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),(function (){var or__18057__auto__ = cljs.core.seq.call(null,forms);
if(or__18057__auto__){
return or__18057__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__39928)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__18983__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__39928)){
var x__18983__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__18983__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto____$1);
})(),x__18983__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__39942 = input;
var x = cljs.core.nth.call(null,vec__39942,(0),null);
var input__$1 = vec__39942;
var map__39945 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__39945__$1 = ((((!((map__39945 == null)))?((((map__39945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39945):map__39945);
var p__$1 = map__39945__$1;
var op = cljs.core.get.call(null,map__39945__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__39945__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__39945__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__39945__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__39945__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__39945__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__39945__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__6501__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__6501__auto__)){
var name = temp__6501__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__39942,x,input__$1,map__39945,map__39945__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
});})(vec__39942,x,input__$1,map__39945,map__39945__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__39947 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__39947)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__39947)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__39947)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__6501__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6501__auto__)){
var p1__$1 = temp__6501__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs$spec$op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__39947)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__18057__auto__ = cljs.core.seq.call(null,ks);
if(or__18057__auto__){
return or__18057__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__18057__auto__ = cljs.core.seq.call(null,forms);
if(or__18057__auto__){
return or__18057__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__39948 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__39947,vec__39942,x,input__$1,map__39945,map__39945__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__39951){
var vec__39952 = p__39951;
var p__$2 = cljs.core.nth.call(null,vec__39952,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__39947,vec__39942,x,input__$1,map__39945,map__39945__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__39948,(0),null);
var k = cljs.core.nth.call(null,vec__39948,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__39948,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__18057__auto__ = form__$1;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs$spec$op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__39947)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (G__39947,vec__39942,x,input__$1,map__39945,map__39945__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain.call(null,(function (){var or__18057__auto__ = form__$1;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__39947,vec__39942,x,input__$1,map__39945,map__39945__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__18057__auto__ = cljs.core.seq.call(null,ks);
if(or__18057__auto__){
return or__18057__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__18057__auto__ = cljs.core.seq.call(null,forms);
if(or__18057__auto__){
return or__18057__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__39947)){
return cljs$spec$op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__39961 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__39961__$1 = ((((!((map__39961 == null)))?((((map__39961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39961):map__39961);
var p__$1 = map__39961__$1;
var op = cljs.core.get.call(null,map__39961__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__39961__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__39961__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__39961__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__39961__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__39961__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__39961__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ret = cljs.core.get.call(null,map__39961__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var id = cljs.core.get.call(null,map__39961__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__39961,map__39961__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__39961,map__39961__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__18045__auto__ = rmap__$1;
if(cljs.core.truth_(and__18045__auto__)){
var and__18045__auto____$1 = id;
if(cljs.core.truth_(and__18045__auto____$1)){
var and__18045__auto____$2 = k;
if(cljs.core.truth_(and__18045__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__18045__auto____$2;
}
} else {
return and__18045__auto____$1;
}
} else {
return and__18045__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__39961,map__39961__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (){
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__18057__auto__ = f__$1;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return p__$2;
}
})());
});})(map__39961,map__39961__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__18057__auto__ = f__$1;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__39961,map__39961__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__18057__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__18057__auto__){
return or__18057__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__18057__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__18057__auto__){
return or__18057__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__39961,map__39961__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
var or__18057__auto__ = (function (){var temp__6503__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__6503__auto__)){
var g = temp__6503__auto__;
var G__39964 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__39964)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__39964)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
if(cljs.core.truth_(p__$1)){
var G__39965 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__39965)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__39965)){
var temp__6503__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__6503__auto__)){
var g = temp__6503__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__39965)){
return cljs$spec$re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__39965)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__39965)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__39965)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__6503__auto__ = cljs$spec$re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__6503__auto__)){
var g = temp__6503__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__6503__auto__,G__39965,or__18057__auto__,map__39961,map__39961__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens){
return (function (p1__39955_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__39955_SHARP_);
});})(g,temp__6503__auto__,G__39965,or__18057__auto__,map__39961,map__39961__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__39966){
while(true){
var vec__39970 = p__39966;
var seq__39971 = cljs.core.seq.call(null,vec__39970);
var first__39972 = cljs.core.first.call(null,seq__39971);
var seq__39971__$1 = cljs.core.next.call(null,seq__39971);
var x = first__39972;
var xs = seq__39971__$1;
var data = vec__39970;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__6501__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__6501__auto__)){
var dp = temp__6501__auto__;
var G__39973 = dp;
var G__39974 = xs;
p = G__39973;
p__39966 = G__39974;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__39988 = input;
var vec__39989 = G__39988;
var seq__39990 = cljs.core.seq.call(null,vec__39989);
var first__39991 = cljs.core.first.call(null,seq__39990);
var seq__39990__$1 = cljs.core.next.call(null,seq__39990);
var x = first__39991;
var xs = seq__39990__$1;
var data = vec__39989;
var i = (0);
var p__$1 = p;
var G__39988__$1 = G__39988;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__39992 = G__39988__$1;
var seq__39993 = cljs.core.seq.call(null,vec__39992);
var first__39994 = cljs.core.first.call(null,seq__39993);
var seq__39993__$1 = cljs.core.next.call(null,seq__39993);
var x__$1 = first__39994;
var xs__$1 = seq__39993__$1;
var data__$1 = vec__39992;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__6501__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__6501__auto__)){
var dp = temp__6501__auto__;
var G__39995 = dp;
var G__39996 = xs__$1;
var G__39997 = (i__$2 + (1));
p__$1 = G__39995;
G__39988__$1 = G__39996;
i__$1 = G__39997;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
} else {
var or__18057__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec40001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec40001 = (function (regex_spec_impl,re,gfn,meta40002){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta40002 = meta40002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec40001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40003,meta40002__$1){
var self__ = this;
var _40003__$1 = this;
return (new cljs.spec.t_cljs$spec40001(self__.regex_spec_impl,self__.re,self__.gfn,meta40002__$1));
});

cljs.spec.t_cljs$spec40001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40003){
var self__ = this;
var _40003__$1 = this;
return self__.meta40002;
});


cljs.spec.t_cljs$spec40001.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec40001.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec40001.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec40001.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});

cljs.spec.t_cljs$spec40001.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec40001.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec40001.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec40001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"regex-spec-impl","regex-spec-impl",1541266692,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a regex op argument"], null)),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta40002","meta40002",1945268526,null)], null);
});

cljs.spec.t_cljs$spec40001.cljs$lang$type = true;

cljs.spec.t_cljs$spec40001.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec40001";

cljs.spec.t_cljs$spec40001.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.spec/t_cljs$spec40001");
});

cljs.spec.__GT_t_cljs$spec40001 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec40001(regex_spec_impl__$1,re__$1,gfn__$1,meta40002){
return (new cljs.spec.t_cljs$spec40001(regex_spec_impl__$1,re__$1,gfn__$1,meta40002));
});

}

return (new cljs.spec.t_cljs$spec40001(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__18045__auto__ = cljs.core.not_EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__18045__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__18045__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__40004_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__40004_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__6501__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__6501__auto__)){
var vec__40008 = temp__6501__auto__;
var smallest = cljs.core.nth.call(null,vec__40008,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec40017 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec40017 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta40018){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta40018 = meta40018;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec40017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_40019,meta40018__$1){
var self__ = this;
var _40019__$1 = this;
return (new cljs.spec.t_cljs$spec40017(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta40018__$1));
});})(specs))
;

cljs.spec.t_cljs$spec40017.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_40019){
var self__ = this;
var _40019__$1 = this;
return self__.meta40018;
});})(specs))
;

cljs.spec.t_cljs$spec40017.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec40017.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;


cljs.spec.t_cljs$spec40017.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec40017.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec40017.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec40017.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e40020){if((e40020 instanceof Error)){
var t = e40020;
return t;
} else {
throw e40020;

}
}})();
if((ret instanceof Error)){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(specs))
;

cljs.spec.t_cljs$spec40017.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$4,specs){
return (function() { 
var G__40023__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__19141__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40021_40024 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40022_40025 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40021_40024,_STAR_print_fn_STAR_40022_40025,sb__19141__auto__,___$4,specs){
return (function (x__19142__auto__){
return sb__19141__auto__.append(x__19142__auto__);
});})(_STAR_print_newline_STAR_40021_40024,_STAR_print_fn_STAR_40022_40025,sb__19141__auto__,___$4,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40022_40025;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40021_40024;
}
return [cljs.core.str(sb__19141__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec));
};
var G__40023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40026__i = 0, G__40026__a = new Array(arguments.length -  0);
while (G__40026__i < G__40026__a.length) {G__40026__a[G__40026__i] = arguments[G__40026__i + 0]; ++G__40026__i;}
  args = new cljs.core.IndexedSeq(G__40026__a,0);
} 
return G__40023__delegate.call(this,args);};
G__40023.cljs$lang$maxFixedArity = 0;
G__40023.cljs$lang$applyTo = (function (arglist__40027){
var args = cljs.core.seq(arglist__40027);
return G__40023__delegate(args);
});
G__40023.cljs$core$IFn$_invoke$arity$variadic = G__40023__delegate;
return G__40023;
})()
;})(___$4,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec40017.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec40017.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__18983__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__18983__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__18983__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec40017.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fspec-impl","fspec-impl",897021908,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'fspec'"], null)),new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta40018","meta40018",-413912158,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec40017.cljs$lang$type = true;

cljs.spec.t_cljs$spec40017.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec40017";

cljs.spec.t_cljs$spec40017.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.spec/t_cljs$spec40017");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec40017 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec40017(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta40018){
return (new cljs.spec.t_cljs$spec40017(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta40018));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec40017(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","any","cljs.spec/any",1039429974),cljs.core.list(new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",775251713,null),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol("cljs.spec.impl.gen","any","cljs.spec.impl.gen/any",-1450752257,null)),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),cljs.core.constantly.call(null,true),cljs.spec.impl.gen.any,null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40028#","p1__40028#",614490767,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__40028#","p1__40028#",614490767,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__40028#","p1__40028#",614490767,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40029#","p1__40029#",-1239326601,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__40029#","p1__40029#",-1239326601,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40028#","p1__40028#",614490767,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__40028#","p1__40028#",614490767,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__40028#","p1__40028#",614490767,null)))),(function (p1__40028_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__40028_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__40028_SHARP_));
}),null,true,(function (p1__40029_SHARP_){
return cljs.core.map.call(null,(function (p__40030){
var vec__40031 = p__40030;
var k = cljs.core.nth.call(null,vec__40031,(0),null);
var v = cljs.core.nth.call(null,vec__40031,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__40029_SHARP_);
})));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args40035 = [];
var len__19240__auto___40038 = arguments.length;
var i__19241__auto___40039 = (0);
while(true){
if((i__19241__auto___40039 < len__19240__auto___40038)){
args40035.push((arguments[i__19241__auto___40039]));

var G__40040 = (i__19241__auto___40039 + (1));
i__19241__auto___40039 = G__40040;
continue;
} else {
}
break;
}

var G__40037 = args40035.length;
switch (G__40037) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40035.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__40034_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__40034_SHARP_,cljs.spec.conform.call(null,spec,p1__40034_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * returns a predicate function that checks *coll-check-limit* items in a collection with pred
 */
cljs.spec.coll_checker = (function cljs$spec$coll_checker(pred){
var check_QMARK_ = (function (p1__40042_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__40042_SHARP_);
});
return ((function (check_QMARK_){
return (function (coll){
return ((coll == null)) || ((cljs.core.coll_QMARK_.call(null,coll)) && (cljs.core.every_QMARK_.call(null,check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,coll))));
});
;})(check_QMARK_))
});
/**
 * returns a function of no args that returns a generator of
 *   collections of items conforming to pred, with the same shape as
 *   init-coll
 */
cljs.spec.coll_gen = (function cljs$spec$coll_gen(pred,init_coll){
var init = cljs.core.empty.call(null,init_coll);
return ((function (init){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (init){
return (function (p1__40043_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__40043_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__40043_SHARP_);
}
});})(init))
,cljs.spec.impl.gen.vector.call(null,cljs.spec.gen.call(null,pred)));
});
;})(init))
});
/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__18045__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__18045__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__18045__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__18045__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__18045__auto__)){
return val.lessThan(end);
} else {
return and__18045__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__18045__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__18045__auto__)){
return val.lessThan(end);
} else {
return and__18045__auto__;
}
} else {
return false;

}
}
}
});

//# sourceMappingURL=spec.js.map?rel=1470410226321