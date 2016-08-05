// Compiled by ClojureScript 1.9.89 {}
goog.provide('ui.core');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('ui.util');
goog.require('goog.dom');
cljs.core.enable_console_print_BANG_.call(null);
ui.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * @constructor
 */
ui.core.Root = (function ui$core$Root(){
var this__36257__auto__ = this;
React.Component.apply(this__36257__auto__,arguments);

if(!((this__36257__auto__.initLocalState == null))){
this__36257__auto__.state = this__36257__auto__.initLocalState();
} else {
this__36257__auto__.state = {};
}

return this__36257__auto__;
});

ui.core.Root.prototype = goog.object.clone(React.Component.prototype);

var x38449_38461 = ui.core.Root.prototype;
x38449_38461.componentWillUpdate = ((function (x38449_38461){
return (function (next_props__36136__auto__,next_state__36137__auto__){
var this__36135__auto__ = this;
if(((!((this__36135__auto__ == null)))?(((false) || (this__36135__auto__.om$next$Ident$))?true:false):false)){
var ident__36139__auto___38462 = om.next.ident.call(null,this__36135__auto__,om.next.props.call(null,this__36135__auto__));
var next_ident__36140__auto___38463 = om.next.ident.call(null,this__36135__auto__,om.next._next_props.call(null,next_props__36136__auto__,this__36135__auto__));
if(cljs.core.not_EQ_.call(null,ident__36139__auto___38462,next_ident__36140__auto___38463)){
var idxr__36141__auto___38464 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36135__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__36141__auto___38464 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__36141__auto___38464),((function (idxr__36141__auto___38464,ident__36139__auto___38462,next_ident__36140__auto___38463,this__36135__auto__,x38449_38461){
return (function (indexes__36142__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__36142__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__36139__auto___38462], null),cljs.core.disj,this__36135__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__36140__auto___38463], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__36135__auto__);
});})(idxr__36141__auto___38464,ident__36139__auto___38462,next_ident__36140__auto___38463,this__36135__auto__,x38449_38461))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__36135__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__36135__auto__);
});})(x38449_38461))
;

x38449_38461.shouldComponentUpdate = ((function (x38449_38461){
return (function (next_props__36136__auto__,next_state__36137__auto__){
var this__36135__auto__ = this;
var next_children__36138__auto__ = next_props__36136__auto__.children;
var next_props__36136__auto____$1 = goog.object.get(next_props__36136__auto__,"omcljs$value");
var next_props__36136__auto____$2 = (function (){var G__38451 = next_props__36136__auto____$1;
if((next_props__36136__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__38451);
} else {
return G__38451;
}
})();
var or__18057__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__36135__auto__),next_props__36136__auto____$2);
if(or__18057__auto__){
return or__18057__auto__;
} else {
var or__18057__auto____$1 = (function (){var and__18045__auto__ = this__36135__auto__.state;
if(cljs.core.truth_(and__18045__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__36135__auto__.state,"omcljs$state"),goog.object.get(next_state__36137__auto__,"omcljs$state"));
} else {
return and__18045__auto__;
}
})();
if(cljs.core.truth_(or__18057__auto____$1)){
return or__18057__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__36135__auto__.props.children,next_children__36138__auto__);
}
}
});})(x38449_38461))
;

x38449_38461.componentWillUnmount = ((function (x38449_38461){
return (function (){
var this__36135__auto__ = this;
var r__36146__auto__ = om.next.get_reconciler.call(null,this__36135__auto__);
var cfg__36147__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__36146__auto__);
var st__36148__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__36147__auto__);
var indexer__36145__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__36147__auto__);
if(cljs.core.truth_((function (){var and__18045__auto__ = !((st__36148__auto__ == null));
if(and__18045__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__36148__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__36135__auto__], null));
} else {
return and__18045__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__36148__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__36135__auto__);
} else {
}

if((indexer__36145__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__36145__auto__,this__36135__auto__);
}
});})(x38449_38461))
;

x38449_38461.componentDidUpdate = ((function (x38449_38461){
return (function (prev_props__36143__auto__,prev_state__36144__auto__){
var this__36135__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__36135__auto__);
});})(x38449_38461))
;

x38449_38461.isMounted = ((function (x38449_38461){
return (function (){
var this__36135__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__36135__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x38449_38461))
;

x38449_38461.componentWillMount = ((function (x38449_38461){
return (function (){
var this__36135__auto__ = this;
var indexer__36145__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36135__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__36145__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__36145__auto__,this__36135__auto__);
}
});})(x38449_38461))
;

x38449_38461.render = ((function (x38449_38461){
return (function (){
var this__36134__auto__ = this;
var this$ = this__36134__auto__;
var _STAR_reconciler_STAR_38452 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_38453 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_38454 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_38455 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_38456 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__36134__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__36134__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__36134__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__36134__auto__);

om.next._STAR_parent_STAR_ = this__36134__auto__;

try{var map__38457 = om.next.props.call(null,this$);
var map__38457__$1 = ((((!((map__38457 == null)))?((((map__38457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38457):map__38457);
var example_remote = cljs.core.get.call(null,map__38457__$1,new cljs.core.Keyword(null,"example-remote","example-remote",389614282));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,example_remote))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_38456;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_38455;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_38454;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_38453;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_38452;
}});})(x38449_38461))
;


ui.core.Root.prototype.constructor = ui.core.Root;

ui.core.Root.prototype.constructor.displayName = "ui.core/Root";

ui.core.Root.prototype.om$isComponent = true;

var x38459_38465 = ui.core.Root;
/** @nocollapse */
x38459_38465.om$next$IQuery$ = true;

/** @nocollapse */
x38459_38465.om$next$IQuery$query$arity$1 = ((function (x38459_38465){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example-remote","example-remote",389614282)], null);
});})(x38459_38465))
;


var x38460_38466 = ui.core.Root.prototype;

x38460_38466.om$next$IQuery$ = true;


x38460_38466.om$next$IQuery$query$arity$1 = ((function (x38460_38466){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example-remote","example-remote",389614282)], null);
});})(x38460_38466))
;


ui.core.Root.cljs$lang$type = true;

ui.core.Root.cljs$lang$ctorStr = "ui.core/Root";

ui.core.Root.cljs$lang$ctorPrWriter = (function (this__36260__auto__,writer__36261__auto__,opt__36262__auto__){
return cljs.core._write.call(null,writer__36261__auto__,"ui.core/Root");
});
if(typeof ui.core.read !== 'undefined'){
} else {
ui.core.read = (function (){var method_table__19080__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19081__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19082__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19083__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19084__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19084__auto__,method_table__19080__auto__,prefer_table__19081__auto__,method_cache__19082__auto__,cached_hierarchy__19083__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword(null,"example-remote","example-remote",389614282),(function (env,k,params){
var st = cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"greeting","greeting",462222107)], null))], null);
}));
if(typeof ui.core.mutate !== 'undefined'){
} else {
ui.core.mutate = (function (){var method_table__19080__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19081__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19082__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19083__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19084__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19084__auto__,method_table__19080__auto__,prefer_table__19081__auto__,method_cache__19082__auto__,cached_hierarchy__19083__auto__));
})();
}
ui.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),ui.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ui.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),ui.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),ui.util.transit_post.call(null,"/api")], null));
ui.core.init = (function ui$core$init(){
return om.next.add_root_BANG_.call(null,ui.core.reconciler,ui.core.Root,goog.dom.getElement("app"));
});
ui.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1470415015209