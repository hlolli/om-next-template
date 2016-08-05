// Compiled by ClojureScript 1.9.89 {}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('om.util');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('goog.debug.Console');
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
});
/**
 * Given a query expression return its key.
 */
om.next.expr__GT_key = (function om$next$expr__GT_key(expr){
if((expr instanceof cljs.core.Keyword)){
return expr;
} else {
if(cljs.core.map_QMARK_.call(null,expr)){
return cljs.core.ffirst.call(null,expr);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
var expr_SINGLEQUOTE_ = cljs.core.first.call(null,expr);
if(cljs.core.map_QMARK_.call(null,expr_SINGLEQUOTE_)){
return cljs.core.ffirst.call(null,expr_SINGLEQUOTE_);
} else {
return null;
}
} else {
if(om.util.ident_QMARK_.call(null,expr)){
var G__37420 = expr;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,expr))){
return cljs.core.first.call(null,G__37420);
} else {
return G__37420;
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid query expr "),cljs.core.str(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper.call(null,(function (p1__37421_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__37421_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__37421_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__37421_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null)));
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,node));
}),root);
});
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down.call(null,loc);
while(true){
var node = clojure.zip.node.call(null,loc__$1);
if(cljs.core._EQ_.call(null,k,cljs.core.first.call(null,node))){
return clojure.zip.right.call(null,clojure.zip.down.call(null,loc__$1));
} else {
var G__37422 = clojure.zip.right.call(null,loc__$1);
loc__$1 = G__37422;
continue;
}
break;
}
});
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,path__$1)){
return loc;
} else {
var node = clojure.zip.node.call(null,loc);
if(cljs.core.vector_QMARK_.call(null,node)){
var G__37455 = clojure.zip.down.call(null,loc);
var G__37456 = path__$1;
loc = G__37455;
path__$1 = G__37456;
continue;
} else {
var vec__37451 = path__$1;
var seq__37452 = cljs.core.seq.call(null,vec__37451);
var first__37453 = cljs.core.first.call(null,seq__37452);
var seq__37452__$1 = cljs.core.next.call(null,seq__37452);
var k = first__37453;
var ks = seq__37452__$1;
var k_SINGLEQUOTE_ = om.next.expr__GT_key.call(null,node);
if(cljs.core.keyword_identical_QMARK_.call(null,k,k_SINGLEQUOTE_)){
if((cljs.core.map_QMARK_.call(null,node)) || ((cljs.core.seq_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,node))))){
var loc_SINGLEQUOTE_ = om.next.move_to_key.call(null,(function (){var G__37454 = loc;
if(cljs.core.seq_QMARK_.call(null,node)){
return clojure.zip.down.call(null,G__37454);
} else {
return G__37454;
}
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node.call(null,loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_.call(null,node_SINGLEQUOTE_)){
if(cljs.core.seq.call(null,ks)){
var G__37457 = clojure.zip.replace.call(null,loc_SINGLEQUOTE_,clojure.zip.node.call(null,om.next.move_to_key.call(null,loc_SINGLEQUOTE_,cljs.core.first.call(null,ks))));
var G__37458 = cljs.core.next.call(null,ks);
loc = G__37457;
path__$1 = G__37458;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__37459 = loc_SINGLEQUOTE_;
var G__37460 = ks;
loc = G__37459;
path__$1 = G__37460;
continue;
}
} else {
var G__37461 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc))));
var G__37462 = ks;
loc = G__37461;
path__$1 = G__37462;
continue;
}
} else {
var G__37463 = clojure.zip.right.call(null,loc);
var G__37464 = path__$1;
loc = G__37463;
path__$1 = G__37464;
continue;
}
}
}
break;
}
});
return query_template_STAR_.call(null,om.next.query_zip.call(null,query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,template,new_query));
});
om.next.focused_join = (function om$next$focused_join(expr,ks,full_expr,union_expr){
var expr_meta = cljs.core.meta.call(null,expr);
var expr_SINGLEQUOTE_ = ((cljs.core.map_QMARK_.call(null,expr))?(function (){var join_value = cljs.core.second.call(null,cljs.core.first.call(null,expr));
var join_value__$1 = (((om.util.recursion_QMARK_.call(null,join_value)) && (cljs.core.seq.call(null,ks)))?((!((union_expr == null)))?union_expr:full_expr):join_value);
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst.call(null,expr),om.next.focus_query_STAR_.call(null,join_value__$1,ks,null)], true, false);
})():((cljs.core.seq_QMARK_.call(null,expr))?(function (){var x__18983__auto__ = om$next$focused_join.call(null,cljs.core.first.call(null,expr),ks,null,null);
return cljs.core._conj.call(null,(function (){var x__18983__auto____$1 = cljs.core.second.call(null,expr);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto____$1);
})(),x__18983__auto__);
})():expr
));
var G__37466 = expr_SINGLEQUOTE_;
if(cljs.core.some_QMARK_.call(null,expr_meta)){
return cljs.core.with_meta.call(null,G__37466,expr_meta);
} else {
return G__37466;
}
});
om.next.focus_query_STAR_ = (function om$next$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_.call(null,path)){
return query;
} else {
var vec__37470 = path;
var seq__37471 = cljs.core.seq.call(null,vec__37470);
var first__37472 = cljs.core.first.call(null,seq__37471);
var seq__37471__$1 = cljs.core.next.call(null,seq__37471);
var k = first__37472;
var ks = seq__37471__$1;
var match = ((function (vec__37470,seq__37471,first__37472,seq__37471__$1,k,ks){
return (function om$next$focus_query_STAR__$_match(x){
return cljs.core._EQ_.call(null,k,om.util.join_key.call(null,x));
});})(vec__37470,seq__37471,first__37472,seq__37471__$1,k,ks))
;
var value = ((function (vec__37470,seq__37471,first__37472,seq__37471__$1,k,ks){
return (function om$next$focus_query_STAR__$_value(x){
return om.next.focused_join.call(null,x,ks,query,union_expr);
});})(vec__37470,seq__37471,first__37472,seq__37471__$1,k,ks))
;
if(cljs.core.map_QMARK_.call(null,query)){
return cljs.core.PersistentArrayMap.fromArray([k,om$next$focus_query_STAR_.call(null,cljs.core.get.call(null,query,k),ks,query)], true, false);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,match),cljs.core.map.call(null,value),cljs.core.take.call(null,(1))),query);
}
}
});
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (om.next/focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
om.next.focus_query = (function om$next$focus_query(query,path){
return om.next.focus_query_STAR_.call(null,query,path,null);
});
/**
 * Given a focused query return the path represented by the query.
 * 
 * Examples:
 * 
 *   (om.next/focus->path [{:foo [{:bar {:baz []}]}])
 *   => [:foo :bar :baz]
 */
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args37473 = [];
var len__19240__auto___37479 = arguments.length;
var i__19241__auto___37480 = (0);
while(true){
if((i__19241__auto___37480 < len__19240__auto___37479)){
args37473.push((arguments[i__19241__auto___37480]));

var G__37481 = (i__19241__auto___37480 + (1));
i__19241__auto___37480 = G__37481;
continue;
} else {
}
break;
}

var G__37475 = args37473.length;
switch (G__37475) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37473.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.call(null,focus,new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.call(null,focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__18045__auto__ = (cljs.core._EQ_.call(null,bound,new cljs.core.Symbol(null,"*","*",345799209,null))) || ((cljs.core.not_EQ_.call(null,path,bound)) && ((cljs.core.count.call(null,path) < cljs.core.count.call(null,bound))));
if(and__18045__auto__){
var and__18045__auto____$1 = cljs.core.some.call(null,om.util.join_QMARK_,focus);
if(cljs.core.truth_(and__18045__auto____$1)){
return ((1) === cljs.core.count.call(null,focus));
} else {
return and__18045__auto____$1;
}
} else {
return and__18045__auto__;
}
})())){
var vec__37476 = om.util.join_entry.call(null,cljs.core.first.call(null,focus));
var k = cljs.core.nth.call(null,vec__37476,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__37476,(1),null);
var focus_SINGLEQUOTE___$1 = ((om.util.recursion_QMARK_.call(null,focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__37483 = focus_SINGLEQUOTE___$1;
var G__37484 = bound;
var G__37485 = cljs.core.conj.call(null,path,k);
focus = G__37483;
bound = G__37484;
path = G__37485;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ident for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__18770__auto__ = (((this$ == null))?null:this$);
var m__18771__auto__ = (om.next.ident[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,this$,props);
} else {
var m__18771__auto____$1 = (om.next.ident["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,this$,props);
} else {
throw cljs.core.missing_protocol.call(null,"Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__18770__auto__ = (((this$ == null))?null:this$);
var m__18771__auto__ = (om.next.params[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,this$);
} else {
var m__18771__auto____$1 = (om.next.params["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__18770__auto__ = (((this$ == null))?null:this$);
var m__18771__auto__ = (om.next.query[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,this$);
} else {
var m__18771__auto____$1 = (om.next.query["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__18770__auto__ = (((this$ == null))?null:this$);
var m__18771__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,this$,new_state);
} else {
var m__18771__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__18770__auto__ = (((this$ == null))?null:this$);
var m__18771__auto__ = (om.next._get_state[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,this$);
} else {
var m__18771__auto____$1 = (om.next._get_state["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__18770__auto__ = (((this$ == null))?null:this$);
var m__18771__auto__ = (om.next._get_rendered_state[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,this$);
} else {
var m__18771__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__18770__auto__ = (((this$ == null))?null:this$);
var m__18771__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,this$);
} else {
var m__18771__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__18045__auto__ = (x instanceof cljs.core.Symbol);
if(and__18045__auto__){
return goog.string.startsWith([cljs.core.str(x)].join(''),"?");
} else {
return and__18045__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.call(null,[cljs.core.str(x)].join('').substring((1)));
});
om.next.replace_var = (function om$next$replace_var(expr,params){
if(cljs.core.truth_(om.next.var_QMARK_.call(null,expr))){
return cljs.core.get.call(null,params,om.next.var__GT_keyword.call(null,expr),expr);
} else {
return expr;
}
});
om.next.bind_query = (function om$next$bind_query(query,params){
var qm = cljs.core.meta.call(null,query);
var tr = cljs.core.map.call(null,((function (qm){
return (function (p1__37486_SHARP_){
return om$next$bind_query.call(null,p1__37486_SHARP_,params);
});})(qm))
);
var ret = ((cljs.core.seq_QMARK_.call(null,query))?cljs.core.apply.call(null,cljs.core.list,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,tr,query)):((cljs.core.coll_QMARK_.call(null,query))?cljs.core.into.call(null,cljs.core.empty.call(null,query),tr,query):om.next.replace_var.call(null,query,params)
));
var G__37489 = ret;
if(cljs.core.truth_((function (){var and__18045__auto__ = qm;
if(cljs.core.truth_(and__18045__auto__)){
if(!((ret == null))){
if(((ret.cljs$lang$protocol_mask$partition0$ & (131072))) || (ret.cljs$core$IMeta$)){
return true;
} else {
if((!ret.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,ret);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,ret);
}
} else {
return and__18045__auto__;
}
})())){
return cljs.core.with_meta.call(null,G__37489,qm);
} else {
return G__37489;
}
});





om.next.component__GT_query_data = (function om$next$component__GT_query_data(component){
var G__37492 = om.next.get_reconciler.call(null,component);
var G__37492__$1 = (((G__37492 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__37492));
var G__37492__$2 = (((G__37492__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__37492__$1));
var G__37492__$3 = (((G__37492__$2 == null))?null:cljs.core.deref.call(null,G__37492__$2));
var G__37492__$4 = (((G__37492__$3 == null))?null:new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146).cljs$core$IFn$_invoke$arity$1(G__37492__$3));
if((G__37492__$4 == null)){
return null;
} else {
return cljs.core.get.call(null,G__37492__$4,component);
}
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.query.call(null,component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.params.call(null,component));
});
om.next.get_component_query = (function om$next$get_component_query(var_args){
var args37493 = [];
var len__19240__auto___37496 = arguments.length;
var i__19241__auto___37497 = (0);
while(true){
if((i__19241__auto___37497 < len__19240__auto___37496)){
args37493.push((arguments[i__19241__auto___37497]));

var G__37498 = (i__19241__auto___37497 + (1));
i__19241__auto___37497 = G__37498;
continue;
} else {
}
break;
}

var G__37495 = args37493.length;
switch (G__37495) {
case 1:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37493.length)].join('')));

}
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_component_query.call(null,component,om.next.component__GT_query_data.call(null,component));
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query_data){
var q = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(query_data,om.next.query.call(null,component));
var c_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(component),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str("(nil? c')")].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(query_data,om.next.params.call(null,component))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.type.call(null,component)], null));
});

om.next.get_component_query.cljs$lang$maxFixedArity = 2;

om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$next$IQuery$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Return a IQuery/IParams local bound query. Works for component classes
 * and component instances. Does not use the indexer.
 */
om.next.get_class_or_instance_query = (function om$next$get_class_or_instance_query(x){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
return om.next.get_component_query.call(null,x);
} else {
var q = om.next.query.call(null,x);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str("(nil? c)")].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
}
});
/**
 * Get a component's static query from the indexer. For recursive queries, recurses
 * up the data path. Falls back to `get-class-or-instance-query` if nothing is
 * found in the indexer.
 */
om.next.get_indexed_query = (function om$next$get_indexed_query(component,class_path_query_data,data_path){
while(true){
var qs = cljs.core.filter.call(null,((function (component,class_path_query_data,data_path){
return (function (p1__37502_SHARP_){
return cljs.core._EQ_.call(null,data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__37502_SHARP_),data_path));
});})(component,class_path_query_data,data_path))
,class_path_query_data);
var qs__$1 = ((cljs.core.empty_QMARK_.call(null,qs))?class_path_query_data:qs);
if(!(cljs.core.empty_QMARK_.call(null,qs__$1))){
var q = cljs.core.first.call(null,qs__$1);
var node = clojure.zip.node.call(null,q);
if(!(om.util.recursion_QMARK_.call(null,node))){
return node;
} else {
var G__37503 = component;
var G__37504 = class_path_query_data;
var G__37505 = cljs.core.pop.call(null,data_path);
component = G__37503;
class_path_query_data = G__37504;
data_path = G__37505;
continue;
}
} else {
return om.next.get_class_or_instance_query.call(null,component);
}
break;
}
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:false):false)){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
var temp__6501__auto__ = om.next.component__GT_query_data.call(null,x);
if(cljs.core.truth_(temp__6501__auto__)){
var query_data = temp__6501__auto__;
return om.next.get_component_query.call(null,x,query_data);
} else {
var cp = om.next.class_path.call(null,x);
var r = om.next.get_reconciler.call(null,x);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,x));
var class_path_query_data = cljs.core.get.call(null,new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om.next.get_indexer.call(null,r))),cp);
return om.next.get_indexed_query.call(null,x,class_path_query_data,data_path);
}
} else {
return om.next.get_class_or_instance_query.call(null,x);
}
} else {
return null;
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"basis-t","basis-t",216455797,null)], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props.call(null,null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__6501__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__6501__auto__)){
var rk = temp__6501__auto__;
return rk;
} else {
var temp__6501__auto____$1 = new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props));
if(cljs.core.truth_(temp__6501__auto____$1)){
var idx = temp__6501__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 * om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args37508 = [];
var len__19240__auto___37516 = arguments.length;
var i__19241__auto___37517 = (0);
while(true){
if((i__19241__auto___37517 < len__19240__auto___37516)){
args37508.push((arguments[i__19241__auto___37517]));

var G__37518 = (i__19241__auto___37517 + (1));
i__19241__auto___37517 = G__37518;
continue;
} else {
}
break;
}

var G__37510 = args37508.length;
switch (G__37510) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37508.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.call(null,class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__37511){
var map__37512 = p__37511;
var map__37512__$1 = ((((!((map__37512 == null)))?((((map__37512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37512):map__37512);
var opts = map__37512__$1;
var validator = cljs.core.get.call(null,map__37512__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.call(null,map__37512__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
var instrument_QMARK_ = cljs.core.get.call(null,map__37512__$1,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),true);
if(cljs.core.fn_QMARK_.call(null,class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return ((function (map__37512,map__37512__$1,opts,validator,keyfn,instrument_QMARK_){
return (function() { 
var om$next$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_(validator.call(null,props))){
} else {
throw (new Error("Assert failed: (validator props)"));
}
}

if(cljs.core.truth_((function (){var and__18045__auto__ = om.next._STAR_instrument_STAR_;
if(cljs.core.truth_(and__18045__auto__)){
return instrument_QMARK_;
} else {
return and__18045__auto__;
}
})())){
return om.next._STAR_instrument_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"factory","factory",63933746),om.next.factory.call(null,class$,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),false))], null));
} else {
var key = ((!((keyfn == null)))?keyfn.call(null,props):om.next.compute_react_key.call(null,class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__37515 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__37515)].join('');
} else {
return G__37515;
}
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t.call(null,om.next._STAR_reconciler_STAR_):(0));
return React.createElement(class$,{"omcljs$value": om.next.om_props.call(null,props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "omcljs$reactKey": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_},om.util.force_children.call(null,children));
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__37520__i = 0, G__37520__a = new Array(arguments.length -  1);
while (G__37520__i < G__37520__a.length) {G__37520__a[G__37520__i] = arguments[G__37520__i + 1]; ++G__37520__i;}
  children = new cljs.core.IndexedSeq(G__37520__a,0);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__37521){
var props = cljs.core.first(arglist__37521);
var children = cljs.core.rest(arglist__37521);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__37512,map__37512__$1,opts,validator,keyfn,instrument_QMARK_))
});

om.next.factory.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
return goog.object.get(c.props,k);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
return goog.object.set(c.props,k,v);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return om.next.get_prop.call(null,c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args37522 = [];
var len__19240__auto___37525 = arguments.length;
var i__19241__auto___37526 = (0);
while(true){
if((i__19241__auto___37526 < len__19240__auto___37525)){
args37522.push((arguments[i__19241__auto___37526]));

var G__37527 = (i__19241__auto___37526 + (1));
i__19241__auto___37526 = G__37527;
continue;
} else {
}
break;
}

var G__37524 = args37522.length;
switch (G__37524) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37522.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,om.next.props_STAR_.call(null,y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;

om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args37529 = [];
var len__19240__auto___37532 = arguments.length;
var i__19241__auto___37533 = (0);
while(true){
if((i__19241__auto___37533 < len__19240__auto___37532)){
args37529.push((arguments[i__19241__auto___37533]));

var G__37534 = (i__19241__auto___37533 + (1));
i__19241__auto___37533 = G__37534;
continue;
} else {
}
break;
}

var G__37531 = args37529.length;
switch (G__37531) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37529.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.call(null,om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.call(null,om.next.om_props_basis,om.next.props_STAR_.call(null,x,y),om.next.props_STAR_.call(null,y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;

om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap.call(null,om.next.prev_props_STAR_.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,prev_props),om.next.get_prev_props.call(null,cst)),om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,next_props),om.next.get_next_props.call(null,component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
return goog.object.remove(c.state,"omcljs$prev$value");
});
/**
 * Get basis t value for when the component last read its props from
 * the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,c.props),om.next.get_props.call(null,c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop.call(null,component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *   the mount root.
 */
om.next.depth = (function om$next$depth(component){
if(om.next.component_QMARK_.call(null,component)){
return om.next.get_prop.call(null,component,"omcljs$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return om.next.get_prop.call(null,component,"omcljs$reactKey");
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__18057__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return cljs.core.type.call(null,x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop.call(null,c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var args37536 = [];
var len__19240__auto___37541 = arguments.length;
var i__19241__auto___37542 = (0);
while(true){
if((i__19241__auto___37542 < len__19240__auto___37541)){
args37536.push((arguments[i__19241__auto___37542]));

var G__37543 = (i__19241__auto___37542 + (1));
i__19241__auto___37542 = G__37543;
continue;
} else {
}
break;
}

var G__37538 = args37536.length;
switch (G__37538) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37536.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var shared = goog.object.get(component.props,"omcljs$shared");
var ks = (function (){var G__37539 = k_or_ks;
if(!(cljs.core.sequential_QMARK_.call(null,k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__37539],null));
} else {
return G__37539;
}
})();
var G__37540 = shared;
if(!(cljs.core.empty_QMARK_.call(null,ks))){
return cljs.core.get_in.call(null,G__37540,ks);
} else {
return G__37540;
}
});

om.next.shared.cljs$lang$maxFixedArity = 2;

om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.get_prop.call(null,component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var G__37546 = c.state;
goog.object.set(G__37546,"omcljs$next$value",om.next.om_props.call(null,next_props,om.next.protocols.basis_t.call(null,om.next.get_reconciler.call(null,c))));

return G__37546;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,props)){
var G__37549 = props;
if(!(cljs.core.empty_QMARK_.call(null,computed_map))){
return cljs.core.vary_meta.call(null,G__37549,cljs.core.assoc,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__37549;
}
} else {
var G__37550 = props;
if(!(cljs.core.empty_QMARK_.call(null,computed_map))){
return cljs.core.assoc.call(null,G__37550,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__37550;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args37551 = [];
var len__19240__auto___37556 = arguments.length;
var i__19241__auto___37557 = (0);
while(true){
if((i__19241__auto___37557 < len__19240__auto___37556)){
args37551.push((arguments[i__19241__auto___37557]));

var G__37558 = (i__19241__auto___37557 + (1));
i__19241__auto___37557 = G__37558;
continue;
} else {
}
break;
}

var G__37553 = args37551.length;
switch (G__37553) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37551.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.call(null,x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__37554 = x;
if(om.next.component_QMARK_.call(null,x)){
return om.next.props.call(null,G__37554);
} else {
return G__37554;
}
})();
var ks = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329)], null),(function (){var G__37555 = k_or_ks;
if(!(cljs.core.sequential_QMARK_.call(null,k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__37555],null));
} else {
return G__37555;
}
})());
if(cljs.core.vector_QMARK_.call(null,props)){
return cljs.core.get_in.call(null,cljs.core.meta.call(null,props),ks);
} else {
return cljs.core.get_in.call(null,props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;

/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false)){
om.next._set_state_BANG_.call(null,component,new_state);
} else {
goog.object.set(component.state,"omcljs$pendingState",new_state);
}

var temp__6501__auto__ = om.next.get_reconciler.call(null,component);
if(cljs.core.truth_(temp__6501__auto__)){
var r = temp__6501__auto__;
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return om.next.schedule_render_BANG_.call(null,r);
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args37562 = [];
var len__19240__auto___37566 = arguments.length;
var i__19241__auto___37567 = (0);
while(true){
if((i__19241__auto___37567 < len__19240__auto___37566)){
args37562.push((arguments[i__19241__auto___37567]));

var G__37568 = (i__19241__auto___37567 + (1));
i__19241__auto___37567 = G__37568;
continue;
} else {
}
break;
}

var G__37564 = args37562.length;
switch (G__37564) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37562.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false))?om.next._get_state.call(null,component):(function (){var temp__6503__auto__ = component.state;
if(cljs.core.truth_(temp__6503__auto__)){
var state = temp__6503__auto__;
var or__18057__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args37570 = [];
var len__19240__auto___37580 = arguments.length;
var i__19241__auto___37581 = (0);
while(true){
if((i__19241__auto___37581 < len__19240__auto___37580)){
args37570.push((arguments[i__19241__auto___37581]));

var G__37582 = (i__19241__auto___37581 + (1));
i__19241__auto___37581 = G__37582;
continue;
} else {
}
break;
}

var G__37579 = args37570.length;
switch (G__37579) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__19263__auto__ = (new cljs.core.IndexedSeq(args37570.slice((6)),(0),null));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__19263__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component)));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_.call(null,component,cljs.core.apply.call(null,f,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq37571){
var G__37572 = cljs.core.first.call(null,seq37571);
var seq37571__$1 = cljs.core.next.call(null,seq37571);
var G__37573 = cljs.core.first.call(null,seq37571__$1);
var seq37571__$2 = cljs.core.next.call(null,seq37571__$1);
var G__37574 = cljs.core.first.call(null,seq37571__$2);
var seq37571__$3 = cljs.core.next.call(null,seq37571__$2);
var G__37575 = cljs.core.first.call(null,seq37571__$3);
var seq37571__$4 = cljs.core.next.call(null,seq37571__$3);
var G__37576 = cljs.core.first.call(null,seq37571__$4);
var seq37571__$5 = cljs.core.next.call(null,seq37571__$4);
var G__37577 = cljs.core.first.call(null,seq37571__$5);
var seq37571__$6 = cljs.core.next.call(null,seq37571__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,seq37571__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(var_args){
var args37584 = [];
var len__19240__auto___37589 = arguments.length;
var i__19241__auto___37590 = (0);
while(true){
if((i__19241__auto___37590 < len__19240__auto___37589)){
args37584.push((arguments[i__19241__auto___37590]));

var G__37591 = (i__19241__auto___37590 + (1));
i__19241__auto___37590 = G__37591;
continue;
} else {
}
break;
}

var G__37586 = args37584.length;
switch (G__37586) {
case 1:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37584.length)].join('')));

}
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_rendered_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false))?om.next._get_rendered_state.call(null,component):(function (){var G__37588 = component;
var G__37588__$1 = (((G__37588 == null))?null:G__37588.state);
if((G__37588__$1 == null)){
return null;
} else {
return goog.object.get(G__37588__$1,"omcljs$state");
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_rendered_state.cljs$lang$maxFixedArity = 2;

om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:false):false)){
return om.next._merge_pending_state_BANG_.call(null,c);
} else {
var temp__6503__auto__ = (function (){var G__37596 = c;
var G__37596__$1 = (((G__37596 == null))?null:G__37596.state);
if((G__37596__$1 == null)){
return null;
} else {
return goog.object.get(G__37596__$1,"omcljs$pendingState");
}
})();
if(cljs.core.truth_(temp__6503__auto__)){
var pending = temp__6503__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args37597 = [];
var len__19240__auto___37600 = arguments.length;
var i__19241__auto___37601 = (0);
while(true){
if((i__19241__auto___37601 < len__19240__auto___37600)){
args37597.push((arguments[i__19241__auto___37601]));

var G__37602 = (i__19241__auto___37601 + (1));
i__19241__auto___37601 = G__37602;
continue;
} else {
}
break;
}

var G__37599 = args37597.length;
switch (G__37599) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37597.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.call(null,component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return component.setState({"omcljs$state": new_state},cb);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;






om.next.gather_sends = (function om$next$gather_sends(p__37605,q,remotes){
var map__37612 = p__37605;
var map__37612__$1 = ((((!((map__37612 == null)))?((((map__37612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37612):map__37612);
var env = map__37612__$1;
var parser = cljs.core.get.call(null,map__37612__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__37612,map__37612__$1,env,parser){
return (function (p1__37604_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__37604_SHARP_,parser.call(null,env,q,p1__37604_SHARP_)],null));
});})(map__37612,map__37612__$1,env,parser))
),cljs.core.filter.call(null,((function (map__37612,map__37612__$1,env,parser){
return (function (p__37614){
var vec__37615 = p__37614;
var _ = cljs.core.nth.call(null,vec__37615,(0),null);
var v = cljs.core.nth.call(null,vec__37615,(1),null);
return (cljs.core.count.call(null,v) > (0));
});})(map__37612,map__37612__$1,env,parser))
)),remotes);
});
/**
 * Given r (a reconciler) and a query expression including a mutation and
 * any simple reads, return the equivalent query expression where the simple
 * reads have been replaced by the full query for each component that cares about
 * the specified read.
 */
om.next.transform_reads = (function om$next$transform_reads(r,tx){
var with_target = (function om$next$transform_reads_$_with_target(target,q){
if(!((target == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.force.call(null,cljs.core.first.call(null,q),target)], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,target,tx__$1,c){
return cljs.core.into.call(null,tx__$1,om.next.full_query.call(null,c,with_target.call(null,target,om.next.focus_query.call(null,om.next.get_query.call(null,c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)))));
});
var exprs = cljs.core.seq.call(null,tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var ast = om.next.impl.parser.expr__GT_ast.call(null,expr);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var tgt = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast);
if((key instanceof cljs.core.Keyword)){
var G__37620 = cljs.core.next.call(null,exprs);
var G__37621 = cljs.core.reduce.call(null,((function (exprs,tx_SINGLEQUOTE_,expr,ast,key,tgt){
return (function (p1__37618_SHARP_,p2__37619_SHARP_){
return add_focused_query.call(null,key,tgt,p1__37618_SHARP_,p2__37619_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,expr,ast,key,tgt))
,tx_SINGLEQUOTE_,om.next.ref__GT_components.call(null,r,key));
exprs = G__37620;
tx_SINGLEQUOTE_ = G__37621;
continue;
} else {
var G__37622 = cljs.core.next.call(null,exprs);
var G__37623 = cljs.core.conj.call(null,tx_SINGLEQUOTE_,expr);
exprs = G__37622;
tx_SINGLEQUOTE_ = G__37623;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(var_args){
var args37624 = [];
var len__19240__auto___37631 = arguments.length;
var i__19241__auto___37632 = (0);
while(true){
if((i__19241__auto___37632 < len__19240__auto___37631)){
args37624.push((arguments[i__19241__auto___37632]));

var G__37633 = (i__19241__auto___37632 + (1));
i__19241__auto___37632 = G__37633;
continue;
} else {
}
break;
}

var G__37626 = args37624.length;
switch (G__37626) {
case 2:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37624.length)].join('')));

}
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.call(null,x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__37627,reads){
var map__37628 = p__37627;
var map__37628__$1 = ((((!((map__37628 == null)))?((((map__37628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37628):map__37628);
var params = cljs.core.get.call(null,map__37628__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.call(null,map__37628__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_((function (){var or__18057__auto__ = om.next.reconciler_QMARK_.call(null,x);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return om.next.component_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error("Assert failed: (or (reconciler? x) (component? x))"));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error("Assert failed: (or (not (nil? params)) (not (nil? query)))"));
}

if(((reads == null)) || (cljs.core.vector_QMARK_.call(null,reads))){
} else {
throw (new Error("Assert failed: (or (nil? reads) (vector? reads))"));
}

var r = ((om.next.component_QMARK_.call(null,x))?om.next.get_reconciler.call(null,x):x);
var c = ((om.next.component_QMARK_.call(null,x))?x:null);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(r)));
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));
var temp__6503__auto___37635 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__6503__auto___37635)){
var l_37636 = temp__6503__auto___37635;
goog.log.info(l_37636,[cljs.core.str((function (){var temp__6503__auto____$1 = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(cljs.core.truth_(temp__6503__auto____$1)){
var ident = temp__6503__auto____$1;
return [cljs.core.str(cljs.core.pr_str.call(null,ident)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str((cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?"reconciler ":null)),cljs.core.str((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
} else {
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),(function (){var or__18057__auto__ = c;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return root;
}
})()], null),cljs.core.merge,cljs.core.merge.call(null,(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),params], null):null)));

if((!((c == null))) && ((reads == null))){
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
}

if((reads == null)){
} else {
om.next.protocols.queue_BANG_.call(null,r,reads);
}

om.next.protocols.reindex_BANG_.call(null,r);

var rootq_37637 = ((!((c == null)))?om.next.full_query.call(null,c):(((reads == null))?om.next.get_query.call(null,root):null));
var sends_37638 = om.next.gather_sends.call(null,om.next.to_env.call(null,cfg),cljs.core.into.call(null,(function (){var or__18057__auto__ = rootq_37637;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads.call(null,r,reads)),new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_.call(null,sends_37638)){
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,sends_37638);

om.next.schedule_sends_BANG_.call(null,r);
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Update a component's query and query parameters with a function.
 */
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var args37639 = [];
var len__19240__auto___37649 = arguments.length;
var i__19241__auto___37650 = (0);
while(true){
if((i__19241__auto___37650 < len__19240__auto___37649)){
args37639.push((arguments[i__19241__auto___37650]));

var G__37651 = (i__19241__auto___37650 + (1));
i__19241__auto___37650 = G__37651;
continue;
} else {
}
break;
}

var G__37648 = args37639.length;
switch (G__37648) {
case 2:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__19263__auto__ = (new cljs.core.IndexedSeq(args37639.slice((6)),(0),null));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__19263__auto__);

}
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null)));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_query_BANG_.call(null,component,cljs.core.apply.call(null,f,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq37640){
var G__37641 = cljs.core.first.call(null,seq37640);
var seq37640__$1 = cljs.core.next.call(null,seq37640);
var G__37642 = cljs.core.first.call(null,seq37640__$1);
var seq37640__$2 = cljs.core.next.call(null,seq37640__$1);
var G__37643 = cljs.core.first.call(null,seq37640__$2);
var seq37640__$3 = cljs.core.next.call(null,seq37640__$2);
var G__37644 = cljs.core.first.call(null,seq37640__$3);
var seq37640__$4 = cljs.core.next.call(null,seq37640__$3);
var G__37645 = cljs.core.first.call(null,seq37640__$4);
var seq37640__$5 = cljs.core.next.call(null,seq37640__$4);
var G__37646 = cljs.core.first.call(null,seq37640__$5);
var seq37640__$6 = cljs.core.next.call(null,seq37640__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,seq37640__$6);
});

om.next.update_query_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_.call(null,x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__37654 = component.refs;
if((G__37654 == null)){
return null;
} else {
return goog.object.get(G__37654,name);
}
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

om.next.update_props_BANG_.call(null,c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args37655 = [];
var len__19240__auto___37658 = arguments.length;
var i__19241__auto___37659 = (0);
while(true){
if((i__19241__auto___37659 < len__19240__auto___37658)){
args37655.push((arguments[i__19241__auto___37659]));

var G__37660 = (i__19241__auto___37659 + (1));
i__19241__auto___37659 = G__37660;
continue;
} else {
}
break;
}

var G__37657 = args37655.length;
switch (G__37657) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37655.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.call(null,c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.shouldComponentUpdate({"omcljs$value": next_props},{"omcljs$state": next_state});
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;

om.next.raw_class_path = (function om$next$raw_class_path(c){

var c__$1 = c;
var ret = (function (){var x__18983__auto__ = cljs.core.type.call(null,c__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})();
while(true){
var temp__6501__auto__ = om.next.parent.call(null,c__$1);
if(cljs.core.truth_(temp__6501__auto__)){
var p = temp__6501__auto__;
if(om.next.iquery_QMARK_.call(null,p)){
var G__37662 = p;
var G__37663 = cljs.core.cons.call(null,cljs.core.type.call(null,p),ret);
c__$1 = G__37662;
ret = G__37663;
continue;
} else {
var G__37664 = p;
var G__37665 = ret;
c__$1 = G__37664;
ret = G__37665;
continue;
}
} else {
return ret;
}
break;
}
});
om.next.class_path = (function om$next$class_path(c){

new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.component_QMARK_.call(null,c)], null)], null);

var raw_cp = om.next.raw_class_path.call(null,c);
var cp = cljs.core.seq.call(null,raw_cp);
var ret = cljs.core.PersistentVector.EMPTY;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cp){
var c__$1 = cljs.core.first.call(null,cp);
if(cljs.core.contains_QMARK_.call(null,seen,c__$1)){
var G__37666 = cljs.core.next.call(null,cp);
var G__37667 = ret;
var G__37668 = seen;
cp = G__37666;
ret = G__37667;
seen = G__37668;
continue;
} else {
var G__37669 = cljs.core.next.call(null,cp);
var G__37670 = cljs.core.conj.call(null,ret,c__$1);
var G__37671 = cljs.core.conj.call(null,seen,c__$1);
cp = G__37669;
ret = G__37670;
seen = G__37671;
continue;
}
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
});
om.next.recursive_class_path_QMARK_ = (function om$next$recursive_class_path_QMARK_(c){

new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.component_QMARK_.call(null,c)], null)], null);

return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,om.next.raw_class_path.call(null,c)));
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error("Assert failed: (or (keyword? subquery-ref) (string? subquery-ref))"));
}

if(cljs.core.fn_QMARK_.call(null,subquery_class)){
} else {
throw (new Error("Assert failed: (fn? subquery-class)"));
}

var ref = (function (){var G__37673 = subquery_ref;
if((subquery_ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__37673)].join('');
} else {
return G__37673;
}
})();
if((om.next.component_QMARK_.call(null,x)) && (om.next.mounted_QMARK_.call(null,x))){
return om.next.get_query.call(null,om.next.react_ref.call(null,x,ref));
} else {
return om.next.get_query.call(null,subquery_class);
}
});
om.next.get_ident = (function om$next$get_ident(x){

new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.component_QMARK_.call(null,x)], null)], null);

var m = om.next.props.call(null,x);
if(!((m == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("get-ident invoked on component with nil props"),cljs.core.str("\n"),cljs.core.str("(not (nil? m))")].join('')));
}

return om.next.ident.call(null,x,m);
});
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t.call(null,reconciler);
});
om.next.queue_render_BANG_ = (function om$next$queue_render_BANG_(f){
if(cljs.core.fn_QMARK_.call(null,om.next._STAR_raf_STAR_)){
return om.next._STAR_raf_STAR_.call(null,f);
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_.call(null,reconciler))){
return om.next.queue_render_BANG_.call(null,(function (){
return om.next.protocols.reconcile_BANG_.call(null,reconciler);
}));
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_.call(null,reconciler))){
return setTimeout((function (){
return om.next.protocols.send_BANG_.call(null,reconciler);
}),(0));
} else {
return null;
}
});
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args37674 = [];
var len__19240__auto___37677 = arguments.length;
var i__19241__auto___37678 = (0);
while(true){
if((i__19241__auto___37678 < len__19240__auto___37677)){
args37674.push((arguments[i__19241__auto___37678]));

var G__37679 = (i__19241__auto___37678 + (1));
i__19241__auto___37678 = G__37679;
continue;
} else {
}
break;
}

var G__37676 = args37674.length;
switch (G__37676) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37674.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.call(null,reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

if(cljs.core.fn_QMARK_.call(null,root_class)){
} else {
throw (new Error("Assert failed: (fn? root-class)"));
}

var temp__6503__auto___37681 = cljs.core.get.call(null,cljs.core.deref.call(null,om.next.roots),target);
if(cljs.core.truth_(temp__6503__auto___37681)){
var old_reconciler_37682 = temp__6503__auto___37681;
om.next.remove_root_BANG_.call(null,old_reconciler_37682,target);
} else {
}

cljs.core.swap_BANG_.call(null,om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_.call(null,reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__18770__auto__ = (((c == null))?null:c);
var m__18771__auto__ = (om.next.tx_intercept[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,c,tx);
} else {
var m__18771__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,c,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys.call(null,config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149)], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__18045__auto__ = c;
if(cljs.core.truth_(and__18045__auto__)){
var and__18045__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__18045__auto____$1){
return cljs.core.not.call(null,ref);
} else {
return and__18045__auto____$1;
}
} else {
return and__18045__auto__;
}
})())?om.next.ident.call(null,c,om.next.props.call(null,c)):ref);
var env = cljs.core.merge.call(null,om.next.to_env.call(null,cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),r,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null));
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg)));
var ___$1 = (function (){var temp__6503__auto__ = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__6503__auto__)){
var l = temp__6503__auto__;
return goog.log.info(l,[cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.call(null,ref__$1)),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
} else {
return null;
}
})();
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends.call(null,env,tx,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
var q = (function (){var G__37688 = cljs.core.PersistentVector.EMPTY;
var G__37688__$1 = ((!((c == null)))?cljs.core.conj.call(null,G__37688,c):G__37688);
if(!((ref__$1 == null))){
return cljs.core.conj.call(null,G__37688__$1,ref__$1);
} else {
return G__37688__$1;
}
})();
om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,q,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,v)));

if(cljs.core.empty_QMARK_.call(null,snds)){
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,snds);

om.next.schedule_sends_BANG_.call(null,r);
}

return v;
});
/**
 * Given a query expression annotate all mutations by adding a :mutator -> ident
 * entry to the metadata of each mutation expression in the query.
 */
om.next.annotate_mutations = (function om$next$annotate_mutations(tx,ident){
var annotate = (function om$next$annotate_mutations_$_annotate(expr,ident__$1){
var G__37697 = expr;
if(om.util.mutation_QMARK_.call(null,expr)){
return cljs.core.vary_meta.call(null,G__37697,cljs.core.assoc,new cljs.core.Keyword(null,"mutator","mutator",-1326825366),ident__$1);
} else {
return G__37697;
}
});
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__37689_SHARP_){
return annotate.call(null,p1__37689_SHARP_,ident);
})),tx);
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args37698 = [];
var len__19240__auto___37708 = arguments.length;
var i__19241__auto___37709 = (0);
while(true){
if((i__19241__auto___37709 < len__19240__auto___37708)){
args37698.push((arguments[i__19241__auto___37709]));

var G__37710 = (i__19241__auto___37709 + (1));
i__19241__auto___37709 = G__37710;
continue;
} else {
}
break;
}

var G__37700 = args37698.length;
switch (G__37700) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37698.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__18057__auto__ = om.next.component_QMARK_.call(null,x);
if(or__18057__auto__){
return or__18057__auto__;
} else {
return om.next.reconciler_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error("Assert failed: (or (component? x) (reconciler? x))"));
}

if(cljs.core.vector_QMARK_.call(null,tx)){
} else {
throw (new Error("Assert failed: (vector? tx)"));
}

var tx__$1 = (function (){var G__37701 = tx;
if((function (){var and__18045__auto__ = om.next.component_QMARK_.call(null,x);
if(and__18045__auto__){
if(!((x == null))){
if((false) || (x.om$next$Ident$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
}
} else {
return and__18045__auto__;
}
})()){
return om.next.annotate_mutations.call(null,G__37701,om.next.get_ident.call(null,x));
} else {
return G__37701;
}
})();
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))){
return om.next.transact_STAR_.call(null,x,null,null,tx__$1);
} else {
if(om.next.iquery_QMARK_.call(null,x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("transact! invoked by component "),cljs.core.str(x),cljs.core.str(" that does not implement IQuery")].join('')),cljs.core.str("\n"),cljs.core.str("(iquery? x)")].join('')));
}

var p = om.next.parent.call(null,x);
var x__$1 = x;
var tx__$2 = tx__$1;
while(true){
if((p == null)){
var r = om.next.get_reconciler.call(null,x__$1);
return om.next.transact_STAR_.call(null,r,x__$1,null,om.next.transform_reads.call(null,r,tx__$2));
} else {
var vec__37704 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept.call(null,p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__37704,(0),null);
var tx__$3 = cljs.core.nth.call(null,vec__37704,(1),null);
var G__37712 = om.next.parent.call(null,p);
var G__37713 = x_SINGLEQUOTE_;
var G__37714 = tx__$3;
p = G__37712;
x__$1 = G__37713;
tx__$2 = G__37714;
continue;
}
break;
}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_.call(null,r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__37715){
var map__37718 = p__37715;
var map__37718__$1 = ((((!((map__37718 == null)))?((((map__37718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37718):map__37718);
var opts = map__37718__$1;
var read = cljs.core.get.call(null,map__37718__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__37718__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

return om.next.impl.parser.parser.call(null,opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.query__GT_ast = (function om$next$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast.call(null,query_expr);
});
om.next.ast__GT_query = (function om$next$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.call(null,query_ast,true);
});
/**
 * Cascades a query up the classpath. class-path->query is a map of classpaths
 * to their queries. classpath is the classpath where we start cascading (typically
 * the direct parent's classpath of the component changing query). data-path is
 * the data path in the classpath's query to the new query. new-query is the
 * query to be applied to the classpaths. union-keys are any keys into union
 * queries found during index building; they are used to access union queries
 * when cascading the classpath, and to generate the classpaths' rendered-paths,
 * which skip these keys.
 */
om.next.cascade_query = (function om$next$cascade_query(class_path__GT_query,classpath,data_path,new_query,union_keys){
var cp = classpath;
var data_path__$1 = data_path;
var new_query__$1 = new_query;
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!(cljs.core.empty_QMARK_.call(null,cp))){
var rendered_data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys)),data_path__$1);
var filter_data_path = (function (){var G__37722 = rendered_data_path;
if(!(cljs.core.empty_QMARK_.call(null,rendered_data_path))){
return cljs.core.pop.call(null,G__37722);
} else {
return G__37722;
}
})();
var qs = cljs.core.filter.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path){
return (function (p1__37720_SHARP_){
return cljs.core._EQ_.call(null,filter_data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__37720_SHARP_),filter_data_path));
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path))
,cljs.core.get.call(null,class_path__GT_query,cp));
var qs_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs){
return (function (q){
var new_query__$2 = (cljs.core.truth_((function (){var or__18057__auto__ = cljs.core.map_QMARK_.call(null,clojure.zip.node.call(null,q));
if(or__18057__auto__){
return or__18057__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.peek.call(null,data_path__$1)], true),union_keys);
}
})())?(function (){var union_key = cljs.core.peek.call(null,data_path__$1);
return cljs.core.assoc.call(null,clojure.zip.node.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path)),union_key,new_query__$1);
})():new_query__$1);
return om.next.query_template.call(null,om.next.focus_query.call(null,om.next.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path),new_query__$2),filter_data_path),filter_data_path);
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs))
),qs);
var G__37723 = cljs.core.pop.call(null,cp);
var G__37724 = cljs.core.pop.call(null,data_path__$1);
var G__37725 = clojure.zip.node.call(null,cljs.core.first.call(null,qs_SINGLEQUOTE_));
var G__37726 = cljs.core.assoc.call(null,ret,cp,qs_SINGLEQUOTE_);
cp = G__37723;
data_path__$1 = G__37724;
new_query__$1 = G__37725;
ret = G__37726;
continue;
} else {
return ret;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,extfs,__meta,__extmap,__hash){
this.indexes = indexes;
this.extfs = extfs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next.get_query.call(null,x);
var class$ = (function (){var G__37734 = x;
if(om.next.component_QMARK_.call(null,x)){
return cljs.core.type.call(null,G__37734);
} else {
return G__37734;
}
})();
var get_dispatch_key = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$get_dispatch_key(prop){
var G__37794 = prop;
if((!(om.util.ident_QMARK_.call(null,prop))) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,prop),new cljs.core.Symbol(null,"_","_",-1201019570,null)))){
return cljs.core.comp.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),om.next.impl.parser.expr__GT_ast).call(null,G__37794);
} else {
return G__37794;
}
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$build_index_STAR_(class$__$1,query,path,classpath,union_expr,union_keys){
var l__37409__auto___37859 = om.next._STAR_logger_STAR_;
if((!(om.next.iquery_QMARK_.call(null,class$__$1))) || ((om.next.iquery_QMARK_.call(null,class$__$1)) && (!(cljs.core.empty_QMARK_.call(null,query))))){
} else {
goog.log.error(l__37409__auto___37859,[cljs.core.str("Invariant Violation"),cljs.core.str(((("build-index*" == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str("build-index*"),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("`IQuery` implementation must return a non-empty query."),cljs.core.str(" Check the `IQuery` implementation of component `"),cljs.core.str(((om.next.component_QMARK_.call(null,class$__$1))?class$__$1.constructor.displayName:class$__$1.prototype.constructor.displayName)),cljs.core.str("`.")].join(''))].join(''));
}

var recursive_QMARK_ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([class$__$1], true),classpath);
var classpath__$1 = (function (){var G__37823 = classpath;
if((!((class$__$1 == null))) && (cljs.core.not.call(null,recursive_QMARK_))){
return cljs.core.conj.call(null,G__37823,class$__$1);
} else {
return G__37823;
}
})();
var dp__GT_cs = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.indexes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750)], null));
if(cljs.core.truth_(class$__$1)){
var focused_query_37860 = om.next.query_template.call(null,om.next.focus_query.call(null,rootq,path),path);
var cp_query_37861 = (function (){var G__37824 = focused_query_37860;
if((cljs.core.not_EQ_.call(null,clojure.zip.node.call(null,focused_query_37860),query)) && (cljs.core.not.call(null,recursive_QMARK_))){
return clojure.zip.replace.call(null,G__37824,query);
} else {
return G__37824;
}
})();
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cp_query_37861);
} else {
}

var recursive_join_QMARK_ = (function (){var and__18045__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__18045__auto__)){
var and__18045__auto____$1 = cljs.core.some.call(null,((function (and__18045__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (e){
var and__18045__auto____$1 = om.util.join_QMARK_.call(null,e);
if(cljs.core.truth_(and__18045__auto____$1)){
return !(om.util.recursion_QMARK_.call(null,om.util.join_value.call(null,e)));
} else {
return and__18045__auto____$1;
}
});})(and__18045__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
,query);
if(cljs.core.truth_(and__18045__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.distinct.call(null,path),path);
} else {
return and__18045__auto____$1;
}
} else {
return and__18045__auto__;
}
})();
var recursive_union_QMARK_ = (function (){var and__18045__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__18045__auto__)){
var and__18045__auto____$1 = union_expr;
if(cljs.core.truth_(and__18045__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.distinct.call(null,path),path);
} else {
return and__18045__auto____$1;
}
} else {
return and__18045__auto__;
}
})();
if(cljs.core.truth_((function (){var or__18057__auto__ = cljs.core.not.call(null,recursive_QMARK_);
if(or__18057__auto__){
return or__18057__auto__;
} else {
var or__18057__auto____$1 = recursive_join_QMARK_;
if(cljs.core.truth_(or__18057__auto____$1)){
return or__18057__auto____$1;
} else {
return recursive_union_QMARK_;
}
}
})())){
if(cljs.core.vector_QMARK_.call(null,query)){
var map__37825 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__37825__$1 = ((((!((map__37825 == null)))?((((map__37825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37825):map__37825);
var props = cljs.core.get.call(null,map__37825__$1,false);
var joins = cljs.core.get.call(null,map__37825__$1,true);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (map__37825,map__37825__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__37727_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__37727_SHARP_,cljs.core.zipmap.call(null,cljs.core.map.call(null,get_dispatch_key,props),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.fromArray([class$__$1], true))));
});})(map__37825,map__37825__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);

var seq__37827 = cljs.core.seq.call(null,joins);
var chunk__37828 = null;
var count__37829 = (0);
var i__37830 = (0);
while(true){
if((i__37830 < count__37829)){
var join = cljs.core._nth.call(null,chunk__37828,i__37830);
var vec__37831_37862 = om.util.join_entry.call(null,join);
var prop_37863 = cljs.core.nth.call(null,vec__37831_37862,(0),null);
var query_SINGLEQUOTE__37864 = cljs.core.nth.call(null,vec__37831_37862,(1),null);
var prop_dispatch_key_37865 = get_dispatch_key.call(null,prop_37863);
var recursion_QMARK__37866 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__37864);
var union_recursion_QMARK__37867 = (function (){var and__18045__auto__ = recursion_QMARK__37866;
if(and__18045__auto__){
return union_expr;
} else {
return and__18045__auto__;
}
})();
var query_SINGLEQUOTE__37868__$1 = ((recursion_QMARK__37866)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__37864);
var path_SINGLEQUOTE__37869 = cljs.core.conj.call(null,path,prop_37863);
var rendered_path_SINGLEQUOTE__37870 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__37869));
var cs_37871 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__37870);
var cascade_query_QMARK__37872 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_37871),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__37868__$1)),cljs.core.type.call(null,cljs.core.first.call(null,cs_37871)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__37868__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__37873 = ((cascade_query_QMARK__37872)?om.next.get_query.call(null,cljs.core.first.call(null,cs_37871)):query_SINGLEQUOTE__37868__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__37827,chunk__37828,count__37829,i__37830,vec__37831_37862,prop_37863,query_SINGLEQUOTE__37864,prop_dispatch_key_37865,recursion_QMARK__37866,union_recursion_QMARK__37867,query_SINGLEQUOTE__37868__$1,path_SINGLEQUOTE__37869,rendered_path_SINGLEQUOTE__37870,cs_37871,cascade_query_QMARK__37872,query_SINGLEQUOTE__SINGLEQUOTE__37873,join,map__37825,map__37825__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__37728_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__37728_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_37865,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__37827,chunk__37828,count__37829,i__37830,vec__37831_37862,prop_37863,query_SINGLEQUOTE__37864,prop_dispatch_key_37865,recursion_QMARK__37866,union_recursion_QMARK__37867,query_SINGLEQUOTE__37868__$1,path_SINGLEQUOTE__37869,rendered_path_SINGLEQUOTE__37870,cs_37871,cascade_query_QMARK__37872,query_SINGLEQUOTE__SINGLEQUOTE__37873,join,map__37825,map__37825__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);

if((cascade_query_QMARK__37872) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__37868__$1,query_SINGLEQUOTE__SINGLEQUOTE__37873))){
var cp__GT_q_SINGLEQUOTE__37874 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__37869,query_SINGLEQUOTE__SINGLEQUOTE__37873,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__37874);
} else {
}

var class_SINGLEQUOTE__37875 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__37873));
if((recursion_QMARK__37866) && ((class_SINGLEQUOTE__37875 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__37875,query_SINGLEQUOTE__SINGLEQUOTE__37873,path_SINGLEQUOTE__37869,classpath__$1,((recursion_QMARK__37866)?union_expr:null),union_keys);
}

var G__37876 = seq__37827;
var G__37877 = chunk__37828;
var G__37878 = count__37829;
var G__37879 = (i__37830 + (1));
seq__37827 = G__37876;
chunk__37828 = G__37877;
count__37829 = G__37878;
i__37830 = G__37879;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__37827);
if(temp__6503__auto__){
var seq__37827__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37827__$1)){
var c__18960__auto__ = cljs.core.chunk_first.call(null,seq__37827__$1);
var G__37880 = cljs.core.chunk_rest.call(null,seq__37827__$1);
var G__37881 = c__18960__auto__;
var G__37882 = cljs.core.count.call(null,c__18960__auto__);
var G__37883 = (0);
seq__37827 = G__37880;
chunk__37828 = G__37881;
count__37829 = G__37882;
i__37830 = G__37883;
continue;
} else {
var join = cljs.core.first.call(null,seq__37827__$1);
var vec__37834_37884 = om.util.join_entry.call(null,join);
var prop_37885 = cljs.core.nth.call(null,vec__37834_37884,(0),null);
var query_SINGLEQUOTE__37886 = cljs.core.nth.call(null,vec__37834_37884,(1),null);
var prop_dispatch_key_37887 = get_dispatch_key.call(null,prop_37885);
var recursion_QMARK__37888 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__37886);
var union_recursion_QMARK__37889 = (function (){var and__18045__auto__ = recursion_QMARK__37888;
if(and__18045__auto__){
return union_expr;
} else {
return and__18045__auto__;
}
})();
var query_SINGLEQUOTE__37890__$1 = ((recursion_QMARK__37888)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__37886);
var path_SINGLEQUOTE__37891 = cljs.core.conj.call(null,path,prop_37885);
var rendered_path_SINGLEQUOTE__37892 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__37891));
var cs_37893 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__37892);
var cascade_query_QMARK__37894 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_37893),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__37890__$1)),cljs.core.type.call(null,cljs.core.first.call(null,cs_37893)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__37890__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__37895 = ((cascade_query_QMARK__37894)?om.next.get_query.call(null,cljs.core.first.call(null,cs_37893)):query_SINGLEQUOTE__37890__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__37827,chunk__37828,count__37829,i__37830,vec__37834_37884,prop_37885,query_SINGLEQUOTE__37886,prop_dispatch_key_37887,recursion_QMARK__37888,union_recursion_QMARK__37889,query_SINGLEQUOTE__37890__$1,path_SINGLEQUOTE__37891,rendered_path_SINGLEQUOTE__37892,cs_37893,cascade_query_QMARK__37894,query_SINGLEQUOTE__SINGLEQUOTE__37895,join,seq__37827__$1,temp__6503__auto__,map__37825,map__37825__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__37728_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__37728_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_37887,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__37827,chunk__37828,count__37829,i__37830,vec__37834_37884,prop_37885,query_SINGLEQUOTE__37886,prop_dispatch_key_37887,recursion_QMARK__37888,union_recursion_QMARK__37889,query_SINGLEQUOTE__37890__$1,path_SINGLEQUOTE__37891,rendered_path_SINGLEQUOTE__37892,cs_37893,cascade_query_QMARK__37894,query_SINGLEQUOTE__SINGLEQUOTE__37895,join,seq__37827__$1,temp__6503__auto__,map__37825,map__37825__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);

if((cascade_query_QMARK__37894) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__37890__$1,query_SINGLEQUOTE__SINGLEQUOTE__37895))){
var cp__GT_q_SINGLEQUOTE__37896 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__37891,query_SINGLEQUOTE__SINGLEQUOTE__37895,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__37896);
} else {
}

var class_SINGLEQUOTE__37897 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__37895));
if((recursion_QMARK__37888) && ((class_SINGLEQUOTE__37897 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__37897,query_SINGLEQUOTE__SINGLEQUOTE__37895,path_SINGLEQUOTE__37891,classpath__$1,((recursion_QMARK__37888)?union_expr:null),union_keys);
}

var G__37898 = cljs.core.next.call(null,seq__37827__$1);
var G__37899 = null;
var G__37900 = (0);
var G__37901 = (0);
seq__37827 = G__37898;
chunk__37828 = G__37899;
count__37829 = G__37900;
i__37830 = G__37901;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var seq__37837 = cljs.core.seq.call(null,query);
var chunk__37838 = null;
var count__37839 = (0);
var i__37840 = (0);
while(true){
if((i__37840 < count__37839)){
var vec__37841 = cljs.core._nth.call(null,chunk__37838,i__37840);
var prop = cljs.core.nth.call(null,vec__37841,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__37841,(1),null);
var path_SINGLEQUOTE__37902 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__37903 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_37904 = cljs.core.filter.call(null,((function (seq__37837,chunk__37838,count__37839,i__37840,path_SINGLEQUOTE__37902,class_SINGLEQUOTE__37903,vec__37841,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__37729_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__37903,cljs.core.type.call(null,p1__37729_SHARP_));
});})(seq__37837,chunk__37838,count__37839,i__37840,path_SINGLEQUOTE__37902,class_SINGLEQUOTE__37903,vec__37841,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__37905 = (function (){var and__18045__auto__ = class_SINGLEQUOTE__37903;
if(cljs.core.truth_(and__18045__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_37904),(1));
} else {
return and__18045__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__37906 = (cljs.core.truth_(cascade_query_QMARK__37905)?om.next.get_query.call(null,cljs.core.first.call(null,cs_37904)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__18045__auto__ = cascade_query_QMARK__37905;
if(cljs.core.truth_(and__18045__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__37906);
} else {
return and__18045__auto__;
}
})())){
var qs_37907 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_37908 = cljs.core.first.call(null,qs_37907);
var qnode_37909 = clojure.zip.node.call(null,(function (){var G__37844 = q_37908;
if((class$__$1 == null)){
return om.next.query_template.call(null,G__37844,path);
} else {
return G__37844;
}
})());
var new_query_37910 = cljs.core.assoc.call(null,qnode_37909,prop,query_SINGLEQUOTE__SINGLEQUOTE__37906);
var q_SINGLEQUOTE__37911 = (function (){var G__37845 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_37908),path),new_query_37910);
if((class$__$1 == null)){
return om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__37845),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path));
} else {
return G__37845;
}
})();
var qs_SINGLEQUOTE__37912 = cljs.core.into.call(null,cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__37911], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([q_37908], true)),qs_37907);
var cp__GT_q_SINGLEQUOTE__37913 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__37912], true, false),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__37911),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__37913);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__37903,query_SINGLEQUOTE__SINGLEQUOTE__37906,path_SINGLEQUOTE__37902,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__37914 = seq__37837;
var G__37915 = chunk__37838;
var G__37916 = count__37839;
var G__37917 = (i__37840 + (1));
seq__37837 = G__37914;
chunk__37838 = G__37915;
count__37839 = G__37916;
i__37840 = G__37917;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__37837);
if(temp__6503__auto__){
var seq__37837__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37837__$1)){
var c__18960__auto__ = cljs.core.chunk_first.call(null,seq__37837__$1);
var G__37918 = cljs.core.chunk_rest.call(null,seq__37837__$1);
var G__37919 = c__18960__auto__;
var G__37920 = cljs.core.count.call(null,c__18960__auto__);
var G__37921 = (0);
seq__37837 = G__37918;
chunk__37838 = G__37919;
count__37839 = G__37920;
i__37840 = G__37921;
continue;
} else {
var vec__37846 = cljs.core.first.call(null,seq__37837__$1);
var prop = cljs.core.nth.call(null,vec__37846,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__37846,(1),null);
var path_SINGLEQUOTE__37922 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__37923 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_37924 = cljs.core.filter.call(null,((function (seq__37837,chunk__37838,count__37839,i__37840,path_SINGLEQUOTE__37922,class_SINGLEQUOTE__37923,vec__37846,prop,query_SINGLEQUOTE_,seq__37837__$1,temp__6503__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__37729_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__37923,cljs.core.type.call(null,p1__37729_SHARP_));
});})(seq__37837,chunk__37838,count__37839,i__37840,path_SINGLEQUOTE__37922,class_SINGLEQUOTE__37923,vec__37846,prop,query_SINGLEQUOTE_,seq__37837__$1,temp__6503__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__37925 = (function (){var and__18045__auto__ = class_SINGLEQUOTE__37923;
if(cljs.core.truth_(and__18045__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_37924),(1));
} else {
return and__18045__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__37926 = (cljs.core.truth_(cascade_query_QMARK__37925)?om.next.get_query.call(null,cljs.core.first.call(null,cs_37924)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__18045__auto__ = cascade_query_QMARK__37925;
if(cljs.core.truth_(and__18045__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__37926);
} else {
return and__18045__auto__;
}
})())){
var qs_37927 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_37928 = cljs.core.first.call(null,qs_37927);
var qnode_37929 = clojure.zip.node.call(null,(function (){var G__37849 = q_37928;
if((class$__$1 == null)){
return om.next.query_template.call(null,G__37849,path);
} else {
return G__37849;
}
})());
var new_query_37930 = cljs.core.assoc.call(null,qnode_37929,prop,query_SINGLEQUOTE__SINGLEQUOTE__37926);
var q_SINGLEQUOTE__37931 = (function (){var G__37850 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_37928),path),new_query_37930);
if((class$__$1 == null)){
return om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__37850),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path));
} else {
return G__37850;
}
})();
var qs_SINGLEQUOTE__37932 = cljs.core.into.call(null,cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__37931], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([q_37928], true)),qs_37927);
var cp__GT_q_SINGLEQUOTE__37933 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__37932], true, false),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__37931),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__37933);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__37923,query_SINGLEQUOTE__SINGLEQUOTE__37926,path_SINGLEQUOTE__37922,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__37934 = cljs.core.next.call(null,seq__37837__$1);
var G__37935 = null;
var G__37936 = (0);
var G__37937 = (0);
seq__37837 = G__37934;
chunk__37838 = G__37935;
count__37839 = G__37936;
i__37840 = G__37937;
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
}
} else {
return null;
}
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
build_index_STAR_.call(null,class$,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),cljs.core.deref.call(null,prop__GT_classes),new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cljs.core.deref.call(null,class_path__GT_query)], null));
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),data_path], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?(function (){var ident = om.next.ident.call(null,c,om.next.props.call(null,c));
var l__37409__auto___37938 = om.next._STAR_logger_STAR_;
if(om.util.ident_QMARK_.call(null,ident)){
} else {
goog.log.error(l__37409__auto___37938,[cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("malformed Ident. An ident must be a vector of "),cljs.core.str("two elements (a keyword and an EDN value). Check "),cljs.core.str("the Ident implementation of component `"),cljs.core.str(c.constructor.displayName),cljs.core.str("`.")].join(''))].join(''));
}

return ident;
})():null);
if(!((ident == null))){
var G__37852 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.call(null,G__37852,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__37852;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.disj,c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),data_path], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(!((ident == null))){
var G__37854 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.call(null,G__37854,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.disj,c);
} else {
return G__37854;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref.call(null,self__.indexes);
if(om.next.component_QMARK_.call(null,k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var temp__6501__auto__ = new cljs.core.Keyword(null,"ref->components","ref->components",-303587249).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,k);
if(cljs.core.truth_(temp__6501__auto__)){
var cs = temp__6501__auto__;
return cs;
} else {
var cs = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407));
if(!(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407),cs))){
return cs;
} else {
if((k instanceof cljs.core.Keyword)){
var cs__$1 = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null));
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (cs__$1,cs,temp__6501__auto__,indexes__$1,___$1){
return (function (p1__37730_SHARP_){
return cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__37730_SHARP_], null));
});})(cs__$1,cs,temp__6501__auto__,indexes__$1,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.PersistentHashSet.EMPTY,cs__$1);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
}
}
}
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18727__auto__,k__18728__auto__){
var self__ = this;
var this__18727__auto____$1 = this;
return cljs.core._lookup.call(null,this__18727__auto____$1,k__18728__auto__,null);
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18729__auto__,k37732,else__18730__auto__){
var self__ = this;
var this__18729__auto____$1 = this;
var G__37855 = (((k37732 instanceof cljs.core.Keyword))?k37732.fqn:null);
switch (G__37855) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37732,else__18730__auto__);

}
});

om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18741__auto__,writer__18742__auto__,opts__18743__auto__){
var self__ = this;
var this__18741__auto____$1 = this;
var pr_pair__18744__auto__ = ((function (this__18741__auto____$1){
return (function (keyval__18745__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18742__auto__,cljs.core.pr_writer,""," ","",opts__18743__auto__,keyval__18745__auto__);
});})(this__18741__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18742__auto__,pr_pair__18744__auto__,"#om.next.Indexer{",", ","}",opts__18743__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IIterable$ = true;

om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37731){
var self__ = this;
var G__37731__$1 = this;
return (new cljs.core.RecordIter((0),G__37731__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18725__auto__){
var self__ = this;
var this__18725__auto____$1 = this;
return self__.__meta;
});

om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18721__auto__){
var self__ = this;
var this__18721__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18731__auto__){
var self__ = this;
var this__18731__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18722__auto__){
var self__ = this;
var this__18722__auto____$1 = this;
var h__18494__auto__ = self__.__hash;
if(!((h__18494__auto__ == null))){
return h__18494__auto__;
} else {
var h__18494__auto____$1 = cljs.core.hash_imap.call(null,this__18722__auto____$1);
self__.__hash = h__18494__auto____$1;

return h__18494__auto____$1;
}
});

om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18723__auto__,other__18724__auto__){
var self__ = this;
var this__18723__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18045__auto__ = other__18724__auto__;
if(cljs.core.truth_(and__18045__auto__)){
var and__18045__auto____$1 = (this__18723__auto____$1.constructor === other__18724__auto__.constructor);
if(and__18045__auto____$1){
return cljs.core.equiv_map.call(null,this__18723__auto____$1,other__18724__auto__);
} else {
return and__18045__auto____$1;
}
} else {
return and__18045__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18736__auto__,k__18737__auto__){
var self__ = this;
var this__18736__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extfs","extfs",607041493),null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__18737__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18736__auto____$1),self__.__meta),k__18737__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18737__auto__)),null));
}
});

om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18734__auto__,k__18735__auto__,G__37731){
var self__ = this;
var this__18734__auto____$1 = this;
var pred__37856 = cljs.core.keyword_identical_QMARK_;
var expr__37857 = k__18735__auto__;
if(cljs.core.truth_(pred__37856.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__37857))){
return (new om.next.Indexer(G__37731,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37856.call(null,new cljs.core.Keyword(null,"extfs","extfs",607041493),expr__37857))){
return (new om.next.Indexer(self__.indexes,G__37731,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18735__auto__,G__37731),null));
}
}
});

om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18739__auto__){
var self__ = this;
var this__18739__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18726__auto__,G__37731){
var self__ = this;
var this__18726__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,G__37731,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18732__auto__,entry__18733__auto__){
var self__ = this;
var this__18732__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18733__auto__)){
return cljs.core._assoc.call(null,this__18732__auto____$1,cljs.core._nth.call(null,entry__18733__auto__,(0)),cljs.core._nth.call(null,entry__18733__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18732__auto____$1,entry__18733__auto__);
}
});

om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.indexes);
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null),new cljs.core.Symbol(null,"extfs","extfs",-2047394276,null)], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__18763__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__18763__auto__,writer__18764__auto__){
return cljs.core._write.call(null,writer__18764__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes,extfs){
return (new om.next.Indexer(indexes,extfs,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__37733){
return (new om.next.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__37733),new cljs.core.Keyword(null,"extfs","extfs",607041493).cljs$core$IFn$_invoke$arity$1(G__37733),null,cljs.core.dissoc.call(null,G__37733,new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(var_args){
var args37940 = [];
var len__19240__auto___37943 = arguments.length;
var i__19241__auto___37944 = (0);
while(true){
if((i__19241__auto___37944 < len__19240__auto___37943)){
args37940.push((arguments[i__19241__auto___37944]));

var G__37945 = (i__19241__auto___37944 + (1));
i__19241__auto___37944 = G__37945;
continue;
} else {
}
break;
}

var G__37942 = args37940.length;
switch (G__37942) {
case 0:
return om.next.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37940.length)].join('')));

}
});

om.next.indexer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.next.indexer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-component","index-component",-1258618905),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"drop-component","drop-component",1805913749),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),(function (indexes,ref){
return null;
})], null));
});

om.next.indexer.cljs$core$IFn$_invoke$arity$1 = (function (extfs){
return (new om.next.Indexer(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),cljs.core.PersistentArrayMap.EMPTY], null)),extfs,null,null,null));
});

om.next.indexer.cljs$lang$maxFixedArity = 1;

/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return om.next.protocols.key__GT_components.call(null,indexer,ref);
}
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
om.next.class_path__GT_queries = (function om$next$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
var cp = ((om.next.component_QMARK_.call(null,y))?om.next.class_path.call(null,y):y);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,clojure.zip.root),cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args37948 = [];
var len__19240__auto___37952 = arguments.length;
var i__19241__auto___37953 = (0);
while(true){
if((i__19241__auto___37953 < len__19240__auto___37952)){
args37948.push((arguments[i__19241__auto___37953]));

var G__37954 = (i__19241__auto___37953 + (1));
i__19241__auto___37953 = G__37954;
continue;
} else {
}
break;
}

var G__37950 = args37948.length;
switch (G__37950) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37948.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_.call(null,component)){
if((om.next.path.call(null,component) == null)){
return om.next.replace.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),om.next.class_path.call(null,component)], null))),om.next.get_query.call(null,component));
} else {
return om.next.full_query.call(null,component,om.next.get_query.call(null,component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next.iquery_QMARK_.call(null,component)){
var xf = (function (){var G__37951 = cljs.core.remove.call(null,cljs.core.number_QMARK_);
if(om.next.recursive_class_path_QMARK_.call(null,component)){
return cljs.core.comp.call(null,cljs.core.distinct.call(null),G__37951);
} else {
return G__37951;
}
})();
var path_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xf,om.next.path.call(null,component));
var cp = om.next.class_path.call(null,component);
var qs = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null));
if(!(cljs.core.empty_QMARK_.call(null,qs))){
var q = cljs.core.first.call(null,cljs.core.filter.call(null,((function (xf,path_SINGLEQUOTE_,cp,qs){
return (function (p1__37947_SHARP_){
return cljs.core._EQ_.call(null,path_SINGLEQUOTE_,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__37947_SHARP_),path_SINGLEQUOTE_));
});})(xf,path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace.call(null,q,query);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp),cljs.core.str(" or data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;

om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query));
var ident = ((((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))?om.next.ident.call(null,class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.call(null,om$next$normalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,ident)),data,refs,union_seen),cljs.core.assoc,new cljs.core.Keyword("om","tag","om/tag",-1290356769),cljs.core.first.call(null,ident));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_.call(null,data)){
return data;
} else {
var q = cljs.core.seq.call(null,query);
var ret = data;
while(true){
if(!((q == null))){
var expr = cljs.core.first.call(null,q);
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var vec__37971 = om.util.join_entry.call(null,expr);
var k = cljs.core.nth.call(null,vec__37971,(0),null);
var sel = cljs.core.nth.call(null,vec__37971,(1),null);
var recursive_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var union_entry = ((om.util.union_QMARK_.call(null,expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel__$1));
var v = cljs.core.get.call(null,data,k);
if((recursive_QMARK_) && (om.util.ident_QMARK_.call(null,v))){
var G__37982 = cljs.core.next.call(null,q);
var G__37983 = ret;
q = G__37982;
ret = G__37983;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var x = om$next$normalize_STAR_.call(null,sel__$1,v,refs,union_entry);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var i = om.next.ident.call(null,class$,v);
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.second.call(null,i)], null),cljs.core.merge,x);

var G__37984 = cljs.core.next.call(null,q);
var G__37985 = cljs.core.assoc.call(null,ret,k,i);
q = G__37984;
ret = G__37985;
continue;
} else {
var G__37986 = cljs.core.next.call(null,q);
var G__37987 = cljs.core.assoc.call(null,ret,k,x);
q = G__37986;
ret = G__37987;
continue;
}
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
var xs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,vec__37971,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__37956_SHARP_){
return om$next$normalize_STAR_.call(null,sel__$1,p1__37956_SHARP_,refs,union_entry);
});})(q,ret,vec__37971,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,xs,vec__37971,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__37957_SHARP_){
return om.next.ident.call(null,class$,p1__37957_SHARP_);
});})(q,ret,xs,vec__37971,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_.call(null,sel__$1)){
if(cljs.core.empty_QMARK_.call(null,is)){
} else {
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst.call(null,is)], null),((function (q,ret,is,xs,vec__37971,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ys){
return cljs.core.merge_with.call(null,cljs.core.merge,ys,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.second,is),xs));
});})(q,ret,is,xs,vec__37971,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__37971,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__37971,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__37978){
var vec__37979 = p__37978;
var i = cljs.core.nth.call(null,vec__37979,(0),null);
var x = cljs.core.nth.call(null,vec__37979,(1),null);
return cljs.core.update_in.call(null,ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__37971,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.call(null,cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__37971,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__37988 = cljs.core.next.call(null,q);
var G__37989 = cljs.core.assoc.call(null,ret,k,is);
q = G__37988;
ret = G__37989;
continue;
} else {
var G__37990 = cljs.core.next.call(null,q);
var G__37991 = cljs.core.assoc.call(null,ret,k,xs);
q = G__37990;
ret = G__37991;
continue;
}
} else {
if((v == null)){
var G__37992 = cljs.core.next.call(null,q);
var G__37993 = ret;
q = G__37992;
ret = G__37993;
continue;
} else {
var G__37994 = cljs.core.next.call(null,q);
var G__37995 = cljs.core.assoc.call(null,ret,k,v);
q = G__37994;
ret = G__37995;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_.call(null,expr))?cljs.core.first.call(null,expr):expr);
var v = cljs.core.get.call(null,data,k);
if((v == null)){
var G__37996 = cljs.core.next.call(null,q);
var G__37997 = ret;
q = G__37996;
ret = G__37997;
continue;
} else {
var G__37998 = cljs.core.next.call(null,q);
var G__37999 = cljs.core.assoc.call(null,ret,k,v);
q = G__37998;
ret = G__37999;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args38000 = [];
var len__19240__auto___38003 = arguments.length;
var i__19241__auto___38004 = (0);
while(true){
if((i__19241__auto___38004 < len__19240__auto___38003)){
args38000.push((arguments[i__19241__auto___38004]));

var G__38005 = (i__19241__auto___38004 + (1));
i__19241__auto___38004 = G__38005;
continue;
} else {
}
break;
}

var G__38002 = args38000.length;
switch (G__38002) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38000.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.call(null,x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_.call(null,x))?x:om.next.get_query.call(null,x));
var ret = om.next.normalize_STAR_.call(null,x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = cljs.core.deref.call(null,refs);
return cljs.core.assoc.call(null,cljs.core.merge.call(null,ret,refs_SINGLEQUOTE_),new cljs.core.Keyword("om.next","tables","om.next/tables",1677536335),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta.call(null,ret,cljs.core.deref.call(null,refs));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;

om.next.sift_idents = (function om$next$sift_idents(res){
var map__38010 = cljs.core.group_by.call(null,(function (p1__38007_SHARP_){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__38007_SHARP_));
}),res);
var map__38010__$1 = ((((!((map__38010 == null)))?((((map__38010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38010):map__38010);
var idents = cljs.core.get.call(null,map__38010__$1,true);
var rest = cljs.core.get.call(null,map__38010__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
om.next.reduce_query_depth = (function om$next$reduce_query_depth(q,k){
if(!(cljs.core.empty_QMARK_.call(null,om.next.focus_query.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))))){
var pos = om.next.query_template.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node.call(null,pos);
var node_SINGLEQUOTE_ = (function (){var G__38013 = node;
if(typeof node === 'number'){
return (G__38013 - (1));
} else {
return G__38013;
}
})();
return om.next.replace.call(null,pos,node_SINGLEQUOTE_);
} else {
return q;
}
});
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
om.next.reduce_union_recursion_depth = (function om$next$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__38018){
var vec__38019 = p__38018;
var k = cljs.core.nth.call(null,vec__38019,(0),null);
var q = cljs.core.nth.call(null,vec__38019,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next.reduce_query_depth.call(null,q,recursion_key)], null);
}),union_expr));
});
om.next.mappable_ident_QMARK_ = (function om$next$mappable_ident_QMARK_(refs,ident){
return (om.util.ident_QMARK_.call(null,ident)) && (cljs.core.contains_QMARK_.call(null,refs,cljs.core.first.call(null,ident)));
});
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
om.next.denormalize_STAR_ = (function om$next$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
var union_recur_QMARK_ = (function (){var and__18045__auto__ = union_expr;
if(cljs.core.truth_(and__18045__auto__)){
return recurse_key;
} else {
return and__18045__auto__;
}
})();
var recur_ident = (cljs.core.truth_(union_recur_QMARK_)?data:null);
var data__$1 = (function (){var data__$1 = data;
while(true){
if(cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,data__$1))){
var G__38069 = cljs.core.get_in.call(null,refs,map_ident.call(null,data__$1));
data__$1 = G__38069;
continue;
} else {
return data__$1;
}
break;
}
})();
if(cljs.core.vector_QMARK_.call(null,data__$1)){
var step = ((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (ident){
if(cljs.core.not.call(null,om.next.mappable_ident_QMARK_.call(null,refs,ident))){
if(cljs.core._EQ_.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null))){
return ident;
} else {
var map__38047 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__38047__$1 = ((((!((map__38047 == null)))?((((map__38047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38047):map__38047);
var props = cljs.core.get.call(null,map__38047__$1,false);
var joins = cljs.core.get.call(null,map__38047__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__38047,map__38047__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__38022_SHARP_){
var G__38049 = p1__38022_SHARP_;
if(cljs.core.seq_QMARK_.call(null,p1__38022_SHARP_)){
return cljs.core.first.call(null,G__38049);
} else {
return G__38049;
}
});})(map__38047,map__38047__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var vec__38050 = om.util.join_entry.call(null,join);
var key = cljs.core.nth.call(null,vec__38050,(0),null);
var sel = cljs.core.nth.call(null,vec__38050,(1),null);
var v = cljs.core.get.call(null,ident,key);
var G__38070 = cljs.core.next.call(null,joins__$1);
var G__38071 = cljs.core.assoc.call(null,ret,key,om$next$denormalize_STAR_.call(null,sel,v,refs,map_ident,idents_seen,union_expr,recurse_key));
joins__$1 = G__38070;
ret = G__38071;
continue;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,ident,props__$1),ret);
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.call(null,refs,map_ident.call(null,ident));
var query__$1 = (function (){var G__38053 = query;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth.call(null,G__38053,recurse_key);
} else {
return G__38053;
}
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__38054 = union_expr;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth.call(null,G__38054,recurse_key);
} else {
return G__38054;
}
})();
var query_SINGLEQUOTE_ = (function (){var G__38055 = query__$1;
if(cljs.core.map_QMARK_.call(null,query__$1)){
return cljs.core.get.call(null,G__38055,cljs.core.first.call(null,ident));
} else {
return G__38055;
}
})();
return om$next$denormalize_STAR_.call(null,query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null);
}
});})(union_recur_QMARK_,recur_ident,data__$1))
;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,step),data__$1);
} else {
if(cljs.core.truth_((function (){var and__18045__auto__ = cljs.core.map_QMARK_.call(null,query);
if(and__18045__auto__){
return union_recur_QMARK_;
} else {
return and__18045__auto__;
}
})())){
return om$next$denormalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,recur_ident)),data__$1,refs,map_ident,idents_seen,union_expr,recurse_key);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
var map__38056 = cljs.core.group_by.call(null,((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__38023_SHARP_){
var or__18057__auto__ = om.util.join_QMARK_.call(null,p1__38023_SHARP_);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return (om.util.ident_QMARK_.call(null,p1__38023_SHARP_)) || ((cljs.core.seq_QMARK_.call(null,p1__38023_SHARP_)) && (om.util.ident_QMARK_.call(null,cljs.core.first.call(null,p1__38023_SHARP_))));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__38056__$1 = ((((!((map__38056 == null)))?((((map__38056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38056):map__38056);
var props = cljs.core.get.call(null,map__38056__$1,false);
var joins = cljs.core.get.call(null,map__38056__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__38056,map__38056__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__38024_SHARP_){
var G__38058 = p1__38024_SHARP_;
if(cljs.core.seq_QMARK_.call(null,p1__38024_SHARP_)){
return cljs.core.first.call(null,G__38058);
} else {
return G__38058;
}
});})(map__38056,map__38056__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var join__$1 = (function (){var G__38062 = join;
if(cljs.core.seq_QMARK_.call(null,join)){
return cljs.core.first.call(null,G__38062);
} else {
return G__38062;
}
})();
var join__$2 = (function (){var G__38063 = join__$1;
if(om.util.ident_QMARK_.call(null,join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__38063],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]);
} else {
return G__38063;
}
})();
var vec__38059 = om.util.join_entry.call(null,join__$2);
var key = cljs.core.nth.call(null,vec__38059,(0),null);
var sel = cljs.core.nth.call(null,vec__38059,(1),null);
var recurse_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((om.util.ident_QMARK_.call(null,key))?((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,key)))?cljs.core.get.call(null,refs,cljs.core.first.call(null,key)):cljs.core.get_in.call(null,refs,map_ident.call(null,key))):cljs.core.get.call(null,data__$1,key));
var key__$1 = (function (){var G__38064 = key;
if(om.util.unique_ident_QMARK_.call(null,key)){
return cljs.core.first.call(null,G__38064);
} else {
return G__38064;
}
})();
var v__$1 = (cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,v))?(function (){var v__$1 = v;
while(true){
var next = cljs.core.get_in.call(null,refs,map_ident.call(null,v__$1));
if(cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,next))){
var G__38072 = next;
v__$1 = G__38072;
continue;
} else {
return map_ident.call(null,v__$1);
}
break;
}
})():v);
var limit = ((typeof sel === 'number')?sel:new cljs.core.Keyword(null,"none","none",1333468478));
var union_entry = ((om.util.union_QMARK_.call(null,join__$2))?sel:((recurse_QMARK_)?union_expr:null));
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:om.next.reduce_query_depth.call(null,query,key__$1)):(cljs.core.truth_((function (){var and__18045__auto__ = om.next.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__18045__auto__)){
return om.util.union_QMARK_.call(null,join__$2);
} else {
return and__18045__auto__;
}
})())?cljs.core.get.call(null,sel,cljs.core.first.call(null,v__$1)):(((om.util.ident_QMARK_.call(null,key__$1)) && (om.util.union_QMARK_.call(null,join__$2)))?cljs.core.get.call(null,sel,cljs.core.first.call(null,key__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.get.call(null,idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),limit));
var idents_seen__$1 = (cljs.core.truth_((function (){var and__18045__auto__ = om.next.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__18045__auto__)){
return recurse_QMARK_;
} else {
return and__18045__auto__;
}
})())?cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.call(null,(0),limit)){
var G__38073 = cljs.core.next.call(null,joins__$1);
var G__38074 = ret;
joins__$1 = G__38073;
ret = G__38074;
continue;
} else {
if(graph_loop_QMARK_){
var G__38075 = cljs.core.next.call(null,joins__$1);
var G__38076 = ret;
joins__$1 = G__38075;
ret = G__38076;
continue;
} else {
if((v__$1 == null)){
var G__38077 = cljs.core.next.call(null,joins__$1);
var G__38078 = ret;
joins__$1 = G__38077;
ret = G__38078;
continue;
} else {
var G__38079 = cljs.core.next.call(null,joins__$1);
var G__38080 = cljs.core.assoc.call(null,ret,key__$1,om$next$denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1));
joins__$1 = G__38079;
ret = G__38080;
continue;

}
}
}
} else {
var temp__6501__auto__ = cljs.core.some.call(null,((function (joins__$1,ret,map__38056,map__38056__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__38065){
var vec__38066 = p__38065;
var k = cljs.core.nth.call(null,vec__38066,(0),null);
var identset = cljs.core.nth.call(null,vec__38066,(1),null);
if(cljs.core.contains_QMARK_.call(null,identset,cljs.core.get.call(null,data__$1,k))){
return cljs.core.get_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),k], null));
} else {
return null;
}
});})(joins__$1,ret,map__38056,map__38056__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
,cljs.core.dissoc.call(null,idents_seen,new cljs.core.Keyword(null,"last-ident","last-ident",534500972)));
if(cljs.core.truth_(temp__6501__auto__)){
var looped_key = temp__6501__auto__;
return looped_key;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,data__$1,props__$1),ret);
}
}
break;
}
}

}
}
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var args38081 = [];
var len__19240__auto___38084 = arguments.length;
var i__19241__auto___38085 = (0);
while(true){
if((i__19241__auto___38085 < len__19240__auto___38084)){
args38081.push((arguments[i__19241__auto___38085]));

var G__38086 = (i__19241__auto___38085 + (1));
i__19241__auto___38085 = G__38086;
continue;
} else {
}
break;
}

var G__38083 = args38081.length;
switch (G__38083) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38081.length)].join('')));

}
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_.call(null,query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_.call(null,query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = 4;

om.next.rewrite = (function om$next$rewrite(rewrite_map,result){
var step = (function om$next$rewrite_$_step(res,p__38111){
var vec__38115 = p__38111;
var k = cljs.core.nth.call(null,vec__38115,(0),null);
var orig_paths = cljs.core.nth.call(null,vec__38115,(1),null);
var to_move = cljs.core.get.call(null,result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.call(null,((function (to_move,vec__38115,k,orig_paths){
return (function (p1__38088_SHARP_,p2__38089_SHARP_){
return cljs.core.assoc_in.call(null,p1__38088_SHARP_,cljs.core.conj.call(null,p2__38089_SHARP_,k),to_move);
});})(to_move,vec__38115,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.call(null,res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.call(null,step,result,rewrite_map);
});
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
om.next.move_roots = (function om$next$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$move_roots_$_query_root_QMARK_(join__$1){
return new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,join__$1)) === true;
});
if(cljs.core.truth_(om.util.join_QMARK_.call(null,join))){
if(cljs.core.truth_(query_root_QMARK_.call(null,join))){
return cljs.core.conj.call(null,result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
return cljs.core.mapcat.call(null,(function (p1__38118_SHARP_){
return om$next$move_roots.call(null,p1__38118_SHARP_,result_roots,cljs.core.conj.call(null,path,om.util.join_key.call(null,join)));
}),om.util.join_value.call(null,join));
}
} else {
return result_roots;
}
});
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
om.next.merge_joins = (function om$next$merge_joins(query){
var step = (function om$next$merge_joins_$_step(res,expr){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521).cljs$core$IFn$_invoke$arity$1(res),expr)){
return res;
} else {
return cljs.core.update_in.call(null,(cljs.core.truth_((function (){var and__18045__auto__ = om.util.join_QMARK_.call(null,expr);
if(cljs.core.truth_(and__18045__auto__)){
return (!(om.util.union_QMARK_.call(null,expr))) && (!(cljs.core.list_QMARK_.call(null,expr)));
} else {
return and__18045__auto__;
}
})())?(function (){var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var q = (function (){var or__18057__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res),jk);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var nq = ((om.util.recursion_QMARK_.call(null,q))?q:((om.util.recursion_QMARK_.call(null,jv))?jv:om$next$merge_joins.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,q,jv)))
));
return cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450)], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370)], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521)], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370),cljs.core.PersistentVector.EMPTY], null);
var res = cljs.core.reduce.call(null,step,init,query);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370).cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.call(null,((function (init,res){
return (function (p__38123){
var vec__38124 = p__38123;
var jkey = cljs.core.nth.call(null,vec__38124,(0),null);
var jsel = cljs.core.nth.call(null,vec__38124,(1),null);
return cljs.core.PersistentArrayMap.fromArray([jkey,jsel], true, false);
});})(init,res))
,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res))));
});
om.next.process_roots = (function om$next$process_roots(query){

var retain = (function om$next$process_roots_$_retain(expr){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,cljs.core.PersistentVector.EMPTY], null)], null);
});
var reroot = (function om$next$process_roots_$_reroot(expr){
var roots = om.next.move_roots.call(null,expr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_.call(null,roots)){
return retain.call(null,expr);
} else {
return roots;
}
});
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__38148){
var vec__38152 = p__38148;
var expr = cljs.core.nth.call(null,vec__38152,(0),null);
var path = cljs.core.nth.call(null,vec__38152,(1),null);
if(cljs.core.empty_QMARK_.call(null,path)){
return rewrites;
} else {
return cljs.core.update_in.call(null,rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key.call(null,expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.call(null,reroot,query);
var query__$1 = om.next.merge_joins.call(null,cljs.core.mapv.call(null,cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.call(null,rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"rewrite","rewrite",870487388),cljs.core.partial.call(null,om.next.rewrite,rewrite_map)], null);
});
om.next.merge_idents = (function om$next$merge_idents(tree,config,refs,query){
var map__38172 = config;
var map__38172__$1 = ((((!((map__38172 == null)))?((((map__38172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38172):map__38172);
var merge_ident = cljs.core.get.call(null,map__38172__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862));
var indexer = cljs.core.get.call(null,map__38172__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var ident_joins = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (map__38172,map__38172__$1,merge_ident,indexer){
return (function (p1__38155_SHARP_){
var and__18045__auto__ = om.util.join_QMARK_.call(null,p1__38155_SHARP_);
if(cljs.core.truth_(and__18045__auto__)){
return om.util.ident_QMARK_.call(null,om.util.join_key.call(null,p1__38155_SHARP_));
} else {
return and__18045__auto__;
}
});})(map__38172,map__38172__$1,merge_ident,indexer))
,query));
var step = ((function (map__38172,map__38172__$1,merge_ident,indexer,ident_joins){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__38181){
var vec__38185 = p__38181;
var ident = cljs.core.nth.call(null,vec__38185,(0),null);
var props = cljs.core.nth.call(null,vec__38185,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__18057__auto__ = cljs.core.get.call(null,ident_joins,ident);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return om.next.ref__GT_any.call(null,indexer,ident);
}
})();
var props_SINGLEQUOTE_ = om.next.tree__GT_db.call(null,c_or_q,props);
var refs__$1 = cljs.core.meta.call(null,props_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_),refs__$1);
} else {
return merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props);
}
});})(map__38172,map__38172__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.call(null,step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__38191 = om.next.sift_idents.call(null,res);
var idts = cljs.core.nth.call(null,vec__38191,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__38191,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.call(null,(function (){var or__18057__auto__ = query;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_idents.call(null,state,config,idts,query),res_SINGLEQUOTE___$1);
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res)),new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,res,query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(var_args){
var args38194 = [];
var len__19240__auto___38199 = arguments.length;
var i__19241__auto___38200 = (0);
while(true){
if((i__19241__auto___38200 < len__19240__auto___38199)){
args38194.push((arguments[i__19241__auto___38200]));

var G__38201 = (i__19241__auto___38200 + (1));
i__19241__auto___38200 = G__38201;
continue;
} else {
}
break;
}

var G__38196 = args38194.length;
switch (G__38196) {
case 2:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38194.length)].join('')));

}
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.call(null,reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config);
var merge_STAR_ = new cljs.core.Keyword(null,"merge","merge",-1804319409).cljs$core$IFn$_invoke$arity$1(config);
var map__38197 = merge_STAR_.call(null,reconciler,cljs.core.deref.call(null,state),delta,query);
var map__38197__$1 = ((((!((map__38197 == null)))?((((map__38197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38197):map__38197);
var keys = cljs.core.get.call(null,map__38197__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var next = cljs.core.get.call(null,map__38197__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var tempids = cljs.core.get.call(null,map__38197__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
om.next.protocols.queue_BANG_.call(null,reconciler,keys);

return cljs.core.reset_BANG_.call(null,state,(function (){var temp__6501__auto__ = new cljs.core.Keyword(null,"migrate","migrate",-207110743).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__6501__auto__)){
var migrate = temp__6501__auto__;
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null)),migrate.call(null,next,(function (){var or__18057__auto__ = query;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return om.next.get_query.call(null,new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler))));
}
})(),tempids,new cljs.core.Keyword(null,"id-key","id-key",-1881730044).cljs$core$IFn$_invoke$arity$1(config)));
} else {
return next;
}
})());
});

om.next.merge_BANG_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18727__auto__,k__18728__auto__){
var self__ = this;
var this__18727__auto____$1 = this;
return cljs.core._lookup.call(null,this__18727__auto____$1,k__18728__auto__,null);
});

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18729__auto__,k38208,else__18730__auto__){
var self__ = this;
var this__18729__auto____$1 = this;
var G__38210 = (((k38208 instanceof cljs.core.Keyword))?k38208.fqn:null);
switch (G__38210) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k38208,else__18730__auto__);

}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,ks);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765)], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202).cljs$core$IFn$_invoke$arity$1(self__.config),sends);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.empty_QMARK_.call(null,sends)){
return null;
} else {
cljs.core.swap_BANG_.call(null,self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),false);
});})(sends,this$__$1))
);

return new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function (res,query){
return om.next.merge_BANG_.call(null,this$__$1,res,query);
});})(sends,this$__$1))
);
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var st = cljs.core.deref.call(null,self__.state);
var q = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(st);
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);

if(cljs.core.empty_QMARK_.call(null,q)){
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
var cs = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (st,q,___$1){
return (function (p1__38204_SHARP_){
return om.next.protocols.key__GT_components.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),p1__38204_SHARP_);
});})(st,q,___$1))
),((function (st,q,___$1){
return (function (p1__38205_SHARP_,p2__38206_SHARP_){
return cljs.core.into.call(null,p1__38205_SHARP_,p2__38206_SHARP_);
});})(st,q,___$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__38211 = self__.config;
var map__38211__$1 = ((((!((map__38211 == null)))?((((map__38211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38211):map__38211);
var ui__GT_props = cljs.core.get.call(null,map__38211__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102));
var env = om.next.to_env.call(null,self__.config);
var seq__38213 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__38214 = null;
var count__38215 = (0);
var i__38216 = (0);
while(true){
if((i__38216 < count__38215)){
var c = cljs.core._nth.call(null,chunk__38214,i__38216);
if(om.next.mounted_QMARK_.call(null,c)){
var computed_38224 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_props_38225 = om.next.computed.call(null,ui__GT_props.call(null,env,c),computed_38224);
if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_38225,om.next.get_state.call(null,c)))){
if(!((next_props_38225 == null))){
om.next.update_component_BANG_.call(null,c,next_props_38225);
} else {
c.forceUpdate();
}
} else {
}
} else {
}

var G__38226 = seq__38213;
var G__38227 = chunk__38214;
var G__38228 = count__38215;
var G__38229 = (i__38216 + (1));
seq__38213 = G__38226;
chunk__38214 = G__38227;
count__38215 = G__38228;
i__38216 = G__38229;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__38213);
if(temp__6503__auto__){
var seq__38213__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38213__$1)){
var c__18960__auto__ = cljs.core.chunk_first.call(null,seq__38213__$1);
var G__38230 = cljs.core.chunk_rest.call(null,seq__38213__$1);
var G__38231 = c__18960__auto__;
var G__38232 = cljs.core.count.call(null,c__18960__auto__);
var G__38233 = (0);
seq__38213 = G__38230;
chunk__38214 = G__38231;
count__38215 = G__38232;
i__38216 = G__38233;
continue;
} else {
var c = cljs.core.first.call(null,seq__38213__$1);
if(om.next.mounted_QMARK_.call(null,c)){
var computed_38234 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_props_38235 = om.next.computed.call(null,ui__GT_props.call(null,env,c),computed_38234);
if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_38235,om.next.get_state.call(null,c)))){
if(!((next_props_38235 == null))){
om.next.update_component_BANG_.call(null,c,next_props_38235);
} else {
c.forceUpdate();
}
} else {
}
} else {
}

var G__38236 = cljs.core.next.call(null,seq__38213__$1);
var G__38237 = null;
var G__38238 = (0);
var G__38239 = (0);
seq__38213 = G__38236;
chunk__38214 = G__38237;
count__38215 = G__38238;
i__38216 = G__38239;
continue;
}
} else {
return null;
}
}
break;
}
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queued","queued",1701634607),true);

return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),true);

return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.call(null,null);
var rctor = om.next.factory.call(null,root_class);
var guid = cljs.core.random_uuid.call(null);
if(om.next.iquery_QMARK_.call(null,root_class)){
om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__18045__auto__ = new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__18045__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));
} else {
return and__18045__auto__;
}
})())){
var new_state_38240 = om.next.tree__GT_db.call(null,root_class,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_38241 = cljs.core.meta.call(null,new_state_38240);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.call(null,new_state_38240,refs_38241));

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_38217 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_38218 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_38219 = om.next._STAR_instrument_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config))?new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null));

om.next._STAR_instrument_STAR_ = new cljs.core.Keyword(null,"instrument","instrument",-960698844).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?new cljs.core.Keyword(null,"root-render","root-render",835981146).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,rctor.call(null,data),target):(((cljs.core.deref.call(null,ret) == null))?rctor.call(null,data):(function (){var temp__6503__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(temp__6503__auto__)){
var c_SINGLEQUOTE_ = temp__6503__auto__;
if(om.next.mounted_QMARK_.call(null,c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if(((cljs.core.deref.call(null,ret) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),c);

return cljs.core.reset_BANG_.call(null,ret,c);
} else {
return null;
}
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_38219;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_38218;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_38217;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query.call(null,(function (){var or__18057__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return root_class;
}
})());
if(((sel == null)) || (cljs.core.vector_QMARK_.call(null,sel))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Application root query must be a vector"),cljs.core.str("\n"),cljs.core.str("(or (nil? sel) (vector? sel))")].join('')));
}

if(!((sel == null))){
var env = om.next.to_env.call(null,self__.config);
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_.call(null,v)){
return null;
} else {
return renderf.call(null,v);
}
} else {
return renderf.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"render","render",-1408033454),parsef,new cljs.core.Keyword(null,"root","root",-448657453),root_class,new cljs.core.Keyword(null,"remove","remove",-131428414),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__18057__auto__ = target;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.call(null,self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__38203_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__38203_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__18057__auto__ = target;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc);

if(!(om.next.iquery_QMARK_.call(null,root_class))){
return om.next.queue_render_BANG_.call(null,parsef);
} else {
return om.next.schedule_render_BANG_.call(null,this$__$1);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef.call(null);

var temp__6503__auto___38242 = om.next.get_query.call(null,(function (){var or__18057__auto__ = (function (){var and__18045__auto__ = target;
if(cljs.core.truth_(and__18045__auto__)){
return cljs.core.deref.call(null,ret);
} else {
return and__18045__auto__;
}
})();
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__6503__auto___38242)){
var sel_38243 = temp__6503__auto___38242;
var env_38244 = om.next.to_env.call(null,self__.config);
var snds_38245 = om.next.gather_sends.call(null,env_38244,sel_38243,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_.call(null,snds_38245)){
} else {
var temp__6503__auto___38246__$1 = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__6503__auto___38246__$1)){
var send_38247 = temp__6503__auto___38246__$1;
send_38247.call(null,snds_38245,((function (send_38247,temp__6503__auto___38246__$1,env_38244,snds_38245,sel_38243,temp__6503__auto___38242,renderf,parsef,ret,rctor,guid,this$__$1){
return (function (res,query){
om.next.merge_BANG_.call(null,this$__$1,res,query);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_38244,sel_38243));
});})(send_38247,temp__6503__auto___38246__$1,env_38244,snds_38245,sel_38243,temp__6503__auto___38242,renderf,parsef,ret,rctor,guid,this$__$1))
);
} else {
}
}
} else {
}

return cljs.core.deref.call(null,ret);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var root = cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword(null,"root","root",-448657453));
if(om.next.iquery_QMARK_.call(null,root)){
var indexer = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config);
var c = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),root], null)));
return om.next.protocols.index_root.call(null,indexer,(function (){var or__18057__auto__ = c;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return root;
}
})());
} else {
return null;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__6503__auto__ = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.truth_(temp__6503__auto__)){
var remove = temp__6503__auto__;
return remove.call(null);
} else {
return null;
}
});

om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18741__auto__,writer__18742__auto__,opts__18743__auto__){
var self__ = this;
var this__18741__auto____$1 = this;
var pr_pair__18744__auto__ = ((function (this__18741__auto____$1){
return (function (keyval__18745__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18742__auto__,cljs.core.pr_writer,""," ","",opts__18743__auto__,keyval__18745__auto__);
});})(this__18741__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18742__auto__,pr_pair__18744__auto__,"#om.next.Reconciler{",", ","}",opts__18743__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IIterable$ = true;

om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38207){
var self__ = this;
var G__38207__$1 = this;
return (new cljs.core.RecordIter((0),G__38207__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18725__auto__){
var self__ = this;
var this__18725__auto____$1 = this;
return self__.__meta;
});

om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18721__auto__){
var self__ = this;
var this__18721__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18731__auto__){
var self__ = this;
var this__18731__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18722__auto__){
var self__ = this;
var this__18722__auto____$1 = this;
var h__18494__auto__ = self__.__hash;
if(!((h__18494__auto__ == null))){
return h__18494__auto__;
} else {
var h__18494__auto____$1 = cljs.core.hash_imap.call(null,this__18722__auto____$1);
self__.__hash = h__18494__auto____$1;

return h__18494__auto____$1;
}
});

om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18723__auto__,other__18724__auto__){
var self__ = this;
var this__18723__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18045__auto__ = other__18724__auto__;
if(cljs.core.truth_(and__18045__auto__)){
var and__18045__auto____$1 = (this__18723__auto____$1.constructor === other__18724__auto__.constructor);
if(and__18045__auto____$1){
return cljs.core.equiv_map.call(null,this__18723__auto____$1,other__18724__auto__);
} else {
return and__18045__auto____$1;
}
} else {
return and__18045__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18736__auto__,k__18737__auto__){
var self__ = this;
var this__18736__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__18737__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18736__auto____$1),self__.__meta),k__18737__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18737__auto__)),null));
}
});

om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18734__auto__,k__18735__auto__,G__38207){
var self__ = this;
var this__18734__auto____$1 = this;
var pred__38220 = cljs.core.keyword_identical_QMARK_;
var expr__38221 = k__18735__auto__;
if(cljs.core.truth_(pred__38220.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__38221))){
return (new om.next.Reconciler(G__38207,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38220.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__38221))){
return (new om.next.Reconciler(self__.config,G__38207,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18735__auto__,G__38207),null));
}
}
});

om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18739__auto__){
var self__ = this;
var this__18739__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18726__auto__,G__38207){
var self__ = this;
var this__18726__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__38207,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18732__auto__,entry__18733__auto__){
var self__ = this;
var this__18732__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18733__auto__)){
return cljs.core._assoc.call(null,this__18732__auto____$1,cljs.core._nth.call(null,entry__18733__auto__,(0)),cljs.core._nth.call(null,entry__18733__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18732__auto____$1,entry__18733__auto__);
}
});

om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__18763__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__18763__auto__,writer__18764__auto__){
return cljs.core._write.call(null,writer__18764__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__38209){
return (new om.next.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__38209),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__38209),null,cljs.core.dissoc.call(null,G__38209,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__38248,c){
var map__38254 = p__38248;
var map__38254__$1 = ((((!((map__38254 == null)))?((((map__38254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38254):map__38254);
var env = map__38254__$1;
var parser = cljs.core.get.call(null,map__38254__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var pathopt = cljs.core.get.call(null,map__38254__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149));
var ui = (((function (){var and__18045__auto__ = pathopt;
if(and__18045__auto__){
var and__18045__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__18045__auto____$1){
return om.next.iquery_QMARK_.call(null,c);
} else {
return and__18045__auto____$1;
}
} else {
return and__18045__auto__;
}
})())?(function (){var id = om.next.ident.call(null,c,om.next.props.call(null,c));
return cljs.core.get.call(null,parser.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([id,om.next.get_query.call(null,c)], true, false)], null)),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next.full_query.call(null,c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time.call(null);
var ui__$1 = parser.call(null,env,fq);
var e = cljs.core.system_time.call(null);
var temp__6503__auto___38259 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__6503__auto___38259)){
var l_38260 = temp__6503__auto___38259;
var dt_38261 = (e - s);
if(((16) < dt_38261)){
goog.log.warning(l_38260,[cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_38261),cljs.core.str(" msecs")].join(''));
} else {
}
} else {
}

return cljs.core.get_in.call(null,ui__$1,om.next.path.call(null,c));
}
}
});
om.next.default_merge_ident = (function om$next$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.call(null,tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_.call(null,a)){
return cljs.core.merge.call(null,a,b);
} else {
return b;
}
});
/**
 * Given app-state-pure (the application state as an immutable value), a query,
 * tempids (a hash map from tempid to stable id), and an optional id-key
 * keyword, return a new application state value with the tempids replaced by
 * the stable ids.
 */
om.next.default_migrate = (function om$next$default_migrate(var_args){
var args38262 = [];
var len__19240__auto___38309 = arguments.length;
var i__19241__auto___38310 = (0);
while(true){
if((i__19241__auto___38310 < len__19240__auto___38309)){
args38262.push((arguments[i__19241__auto___38310]));

var G__38311 = (i__19241__auto___38310 + (1));
i__19241__auto___38310 = G__38311;
continue;
} else {
}
break;
}

var G__38264 = args38262.length;
switch (G__38264) {
case 3:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38262.length)].join('')));

}
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next.default_migrate.call(null,app_state_pure,query,tempids,null);
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$dissoc_in(pure,p__38287){
var vec__38291 = p__38287;
var table = cljs.core.nth.call(null,vec__38291,(0),null);
var id = cljs.core.nth.call(null,vec__38291,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function om$next$step(pure,p__38294){
var vec__38302 = p__38294;
var old = cljs.core.nth.call(null,vec__38302,(0),null);
var vec__38305 = cljs.core.nth.call(null,vec__38302,(1),null);
var _ = cljs.core.nth.call(null,vec__38305,(0),null);
var id = cljs.core.nth.call(null,vec__38305,(1),null);
var new$ = vec__38305;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__38308 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
if(!((id_key == null))){
return cljs.core.assoc.call(null,G__38308,id_key,id);
} else {
return G__38308;
}
})());
});
if(!(cljs.core.empty_QMARK_.call(null,tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.call(null,step,app_state_pure,tempids);
return om.next.tree__GT_db.call(null,query,om.next.db__GT_tree.call(null,query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.call(null,tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return app_state_pure;
}
});

om.next.default_migrate.cljs$lang$maxFixedArity = 4;

om.next.has_error_QMARK_ = (function om$next$has_error_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword("om.next","error","om.next/error",-1841983205)));
});
om.next.default_extract_errors = (function om$next$default_extract_errors(reconciler,res,query){
var extract_STAR_ = (function om$next$default_extract_errors_$_extract_STAR_(query__$1,res__$1,errs){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query__$1));
var top_error_QMARK_ = (((!((class$ == null))) && (om.next.has_error_QMARK_.call(null,res__$1)))?cljs.core.swap_BANG_.call(null,errs,((function (class$){
return (function (p1__38313_SHARP_){
return cljs.core.update_in.call(null,p1__38313_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.ident.call(null,class$,res__$1)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_.call(null,query__$1)){
if(cljs.core.vector_QMARK_.call(null,res__$1)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (class$,top_error_QMARK_,ret){
return (function (p1__38314_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,query__$1,p1__38314_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq.call(null,query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var k = (function (){var k = om.next.expr__GT_key.call(null,expr);
var G__38325 = k;
if(om.util.unique_ident_QMARK_.call(null,k)){
return cljs.core.first.call(null,G__38325);
} else {
return G__38325;
}
})();
var data = cljs.core.get.call(null,res__$1,k);
if(om.util.mutation_QMARK_.call(null,expr)){
var mk = om.util.mutation_key.call(null,expr);
var ret_SINGLEQUOTE_ = cljs.core.get.call(null,res__$1,mk);
if(om.next.has_error_QMARK_.call(null,ret_SINGLEQUOTE_)){
var x = new cljs.core.Keyword(null,"mutator","mutator",-1326825366).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,expr));
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__38315_SHARP_){
return cljs.core.update_in.call(null,p1__38315_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(ret_SINGLEQUOTE_));
});})(exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__38326 = cljs.core.next.call(null,exprs);
var G__38327 = ret__$1;
exprs = G__38326;
ret__$1 = G__38327;
continue;
} else {
var G__38328 = cljs.core.next.call(null,exprs);
var G__38329 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,mk,ret_SINGLEQUOTE_));
exprs = G__38328;
ret__$1 = G__38329;
continue;
}
} else {
if(om.util.union_QMARK_.call(null,expr)){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var class_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,jv));
if(!(cljs.core.vector_QMARK_.call(null,data))){
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,data))),data,errs);
var G__38330 = cljs.core.next.call(null,exprs);
var G__38331 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__38330;
ret__$1 = G__38331;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__38316_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,p1__38316_SHARP_))),p1__38316_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__38332 = cljs.core.next.call(null,exprs);
var G__38333 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__38332;
ret__$1 = G__38333;
continue;
}
} else {
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,jv,data,errs);
var G__38334 = cljs.core.next.call(null,exprs);
var G__38335 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__38334;
ret__$1 = G__38335;
continue;
} else {
if((cljs.core.map_QMARK_.call(null,data)) && (om.next.has_error_QMARK_.call(null,data))){
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__38317_SHARP_){
return cljs.core.update_in.call(null,p1__38317_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__18057__auto__ = (((class$ == null))?null:om.next.ident.call(null,class$,res__$1));
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__38336 = cljs.core.next.call(null,exprs);
var G__38337 = null;
exprs = G__38336;
ret__$1 = G__38337;
continue;
} else {
var G__38338 = cljs.core.next.call(null,exprs);
var G__38339 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,k,data));
exprs = G__38338;
ret__$1 = G__38339;
continue;

}
}
}
}
} else {
return ret__$1;
}
break;
}
}
} else {
return null;
}
});
var errs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ret = extract_STAR_.call(null,query,res,errs);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tree","tree",-196312028),ret,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.deref.call(null,errs)], null);
});
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 */
om.next.reconciler = (function om$next$reconciler(p__38345){
var map__38349 = p__38345;
var map__38349__$1 = ((((!((map__38349 == null)))?((((map__38349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38349):map__38349);
var config = map__38349__$1;
var root_render = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"root-render","root-render",835981146),((function (map__38349,map__38349__$1,config){
return (function (p1__38342_SHARP_,p2__38343_SHARP_){
return ReactDOM.render(p1__38342_SHARP_,p2__38343_SHARP_);
});})(map__38349,map__38349__$1,config))
);
var normalize = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var prune_tree = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431),om.next.default_extract_errors);
var pathopt = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),false);
var instrument = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var id_key = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044));
var merge_sends = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__38349,map__38349__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key){
return (function (p1__38340_SHARP_,p2__38341_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__38340_SHARP_,p2__38341_SHARP_);
});})(map__38349,map__38349__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),om.next.default_merge_ident);
var remotes = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var migrate = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),om.next.default_migrate);
var history = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"history","history",-247395220),(100));
var state = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var merge = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"merge","merge",-1804319409),om.next.default_merge);
var shared_fn = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var ui__GT_props = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),om.next.default_ui__GT_props);
var parser = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var indexer = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),om.next.indexer);
var root_unmount = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),((function (map__38349,map__38349__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__38344_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__38344_SHARP_);
});})(map__38349,map__38349__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),om.next.default_merge_tree);
var shared = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var optimize = cljs.core.get.call(null,map__38349__$1,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),((function (map__38349,map__38349__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.call(null,om.next.depth,cs);
});})(map__38349,map__38349__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var idxr = indexer.call(null);
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || (state.cljs$core$IAtom$))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.call(null,state));
var logger = ((cljs.core.contains_QMARK_.call(null,config,new cljs.core.Keyword(null,"logger","logger",-220675947)))?new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"root-render","root-render",835981146),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431)],[pathopt,id_key,instrument,merge_ident,merge_sends,remotes,migrate,om.next.cache.cache.call(null,history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__18057__auto__ = !(norm_QMARK_);
if(or__18057__auto__){
return or__18057__auto__;
} else {
return normalize;
}
})(),prune_tree]),cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),new cljs.core.Keyword(null,"queued","queued",1701634607),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"target","target",253001721)],[norm_QMARK_,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null])),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
om.next.app_root = (function om$next$app_root(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"root","root",-448657453));
});
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
om.next.force_root_render_BANG_ = (function om$next$force_root_render_BANG_(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"render","render",-1408033454)).call(null);
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var args38352 = [];
var len__19240__auto___38355 = arguments.length;
var i__19241__auto___38356 = (0);
while(true){
if((i__19241__auto___38356 < len__19240__auto___38355)){
args38352.push((arguments[i__19241__auto___38356]));

var G__38357 = (i__19241__auto___38356 + (1));
i__19241__auto___38356 = G__38357;
continue;
} else {
}
break;
}

var G__38354 = args38352.length;
switch (G__38354) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38352.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.call(null);
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.call(null,id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;

/**
 * Return true if x is a tempid, false otherwise
 */
om.next.tempid_QMARK_ = (function om$next$tempid_QMARK_(x){
return om.tempid.tempid_QMARK_.call(null,x);
});
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var args38359 = [];
var len__19240__auto___38362 = arguments.length;
var i__19241__auto___38363 = (0);
while(true){
if((i__19241__auto___38363 < len__19240__auto___38362)){
args38359.push((arguments[i__19241__auto___38363]));

var G__38364 = (i__19241__auto___38363 + (1));
i__19241__auto___38363 = G__38364;
continue;
} else {
}
break;
}

var G__38361 = args38359.length;
switch (G__38361) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38359.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.call(null);
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.call(null,opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;

/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var args38366 = [];
var len__19240__auto___38369 = arguments.length;
var i__19241__auto___38370 = (0);
while(true){
if((i__19241__auto___38370 < len__19240__auto___38369)){
args38366.push((arguments[i__19241__auto___38370]));

var G__38371 = (i__19241__auto___38370 + (1));
i__19241__auto___38370 = G__38371;
continue;
} else {
}
break;
}

var G__38368 = args38366.length;
switch (G__38368) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38366.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.call(null);
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.call(null,opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;

/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
om.next.force = (function om$next$force(var_args){
var args38373 = [];
var len__19240__auto___38376 = arguments.length;
var i__19241__auto___38377 = (0);
while(true){
if((i__19241__auto___38377 < len__19240__auto___38376)){
args38373.push((arguments[i__19241__auto___38377]));

var G__38378 = (i__19241__auto___38377 + (1));
i__19241__auto___38377 = G__38378;
continue;
} else {
}
break;
}

var G__38375 = args38373.length;
switch (G__38375) {
case 1:
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38373.length)].join('')));

}
});

om.next.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next.force.call(null,expr,new cljs.core.Keyword(null,"remote","remote",-1593576576));
});

om.next.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,(function (){var x__18983__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18983__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});

om.next.force.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=next.js.map?rel=1470410186669