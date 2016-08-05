// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18057__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18057__auto__){
return or__18057__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18057__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__44523_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__44523_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__44528 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__44529 = null;
var count__44530 = (0);
var i__44531 = (0);
while(true){
if((i__44531 < count__44530)){
var n = cljs.core._nth.call(null,chunk__44529,i__44531);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44532 = seq__44528;
var G__44533 = chunk__44529;
var G__44534 = count__44530;
var G__44535 = (i__44531 + (1));
seq__44528 = G__44532;
chunk__44529 = G__44533;
count__44530 = G__44534;
i__44531 = G__44535;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__44528);
if(temp__6503__auto__){
var seq__44528__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44528__$1)){
var c__18960__auto__ = cljs.core.chunk_first.call(null,seq__44528__$1);
var G__44536 = cljs.core.chunk_rest.call(null,seq__44528__$1);
var G__44537 = c__18960__auto__;
var G__44538 = cljs.core.count.call(null,c__18960__auto__);
var G__44539 = (0);
seq__44528 = G__44536;
chunk__44529 = G__44537;
count__44530 = G__44538;
i__44531 = G__44539;
continue;
} else {
var n = cljs.core.first.call(null,seq__44528__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44540 = cljs.core.next.call(null,seq__44528__$1);
var G__44541 = null;
var G__44542 = (0);
var G__44543 = (0);
seq__44528 = G__44540;
chunk__44529 = G__44541;
count__44530 = G__44542;
i__44531 = G__44543;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__44594_44605 = cljs.core.seq.call(null,deps);
var chunk__44595_44606 = null;
var count__44596_44607 = (0);
var i__44597_44608 = (0);
while(true){
if((i__44597_44608 < count__44596_44607)){
var dep_44609 = cljs.core._nth.call(null,chunk__44595_44606,i__44597_44608);
topo_sort_helper_STAR_.call(null,dep_44609,(depth + (1)),state);

var G__44610 = seq__44594_44605;
var G__44611 = chunk__44595_44606;
var G__44612 = count__44596_44607;
var G__44613 = (i__44597_44608 + (1));
seq__44594_44605 = G__44610;
chunk__44595_44606 = G__44611;
count__44596_44607 = G__44612;
i__44597_44608 = G__44613;
continue;
} else {
var temp__6503__auto___44614 = cljs.core.seq.call(null,seq__44594_44605);
if(temp__6503__auto___44614){
var seq__44594_44615__$1 = temp__6503__auto___44614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44594_44615__$1)){
var c__18960__auto___44616 = cljs.core.chunk_first.call(null,seq__44594_44615__$1);
var G__44617 = cljs.core.chunk_rest.call(null,seq__44594_44615__$1);
var G__44618 = c__18960__auto___44616;
var G__44619 = cljs.core.count.call(null,c__18960__auto___44616);
var G__44620 = (0);
seq__44594_44605 = G__44617;
chunk__44595_44606 = G__44618;
count__44596_44607 = G__44619;
i__44597_44608 = G__44620;
continue;
} else {
var dep_44621 = cljs.core.first.call(null,seq__44594_44615__$1);
topo_sort_helper_STAR_.call(null,dep_44621,(depth + (1)),state);

var G__44622 = cljs.core.next.call(null,seq__44594_44615__$1);
var G__44623 = null;
var G__44624 = (0);
var G__44625 = (0);
seq__44594_44605 = G__44622;
chunk__44595_44606 = G__44623;
count__44596_44607 = G__44624;
i__44597_44608 = G__44625;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__44598){
var vec__44602 = p__44598;
var seq__44603 = cljs.core.seq.call(null,vec__44602);
var first__44604 = cljs.core.first.call(null,seq__44603);
var seq__44603__$1 = cljs.core.next.call(null,seq__44603);
var x = first__44604;
var xs = seq__44603__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__44602,seq__44603,first__44604,seq__44603__$1,x,xs,get_deps__$1){
return (function (p1__44544_SHARP_){
return clojure.set.difference.call(null,p1__44544_SHARP_,x);
});})(vec__44602,seq__44603,first__44604,seq__44603__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__44638 = cljs.core.seq.call(null,provides);
var chunk__44639 = null;
var count__44640 = (0);
var i__44641 = (0);
while(true){
if((i__44641 < count__44640)){
var prov = cljs.core._nth.call(null,chunk__44639,i__44641);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44642_44650 = cljs.core.seq.call(null,requires);
var chunk__44643_44651 = null;
var count__44644_44652 = (0);
var i__44645_44653 = (0);
while(true){
if((i__44645_44653 < count__44644_44652)){
var req_44654 = cljs.core._nth.call(null,chunk__44643_44651,i__44645_44653);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44654,prov);

var G__44655 = seq__44642_44650;
var G__44656 = chunk__44643_44651;
var G__44657 = count__44644_44652;
var G__44658 = (i__44645_44653 + (1));
seq__44642_44650 = G__44655;
chunk__44643_44651 = G__44656;
count__44644_44652 = G__44657;
i__44645_44653 = G__44658;
continue;
} else {
var temp__6503__auto___44659 = cljs.core.seq.call(null,seq__44642_44650);
if(temp__6503__auto___44659){
var seq__44642_44660__$1 = temp__6503__auto___44659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44642_44660__$1)){
var c__18960__auto___44661 = cljs.core.chunk_first.call(null,seq__44642_44660__$1);
var G__44662 = cljs.core.chunk_rest.call(null,seq__44642_44660__$1);
var G__44663 = c__18960__auto___44661;
var G__44664 = cljs.core.count.call(null,c__18960__auto___44661);
var G__44665 = (0);
seq__44642_44650 = G__44662;
chunk__44643_44651 = G__44663;
count__44644_44652 = G__44664;
i__44645_44653 = G__44665;
continue;
} else {
var req_44666 = cljs.core.first.call(null,seq__44642_44660__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44666,prov);

var G__44667 = cljs.core.next.call(null,seq__44642_44660__$1);
var G__44668 = null;
var G__44669 = (0);
var G__44670 = (0);
seq__44642_44650 = G__44667;
chunk__44643_44651 = G__44668;
count__44644_44652 = G__44669;
i__44645_44653 = G__44670;
continue;
}
} else {
}
}
break;
}

var G__44671 = seq__44638;
var G__44672 = chunk__44639;
var G__44673 = count__44640;
var G__44674 = (i__44641 + (1));
seq__44638 = G__44671;
chunk__44639 = G__44672;
count__44640 = G__44673;
i__44641 = G__44674;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__44638);
if(temp__6503__auto__){
var seq__44638__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44638__$1)){
var c__18960__auto__ = cljs.core.chunk_first.call(null,seq__44638__$1);
var G__44675 = cljs.core.chunk_rest.call(null,seq__44638__$1);
var G__44676 = c__18960__auto__;
var G__44677 = cljs.core.count.call(null,c__18960__auto__);
var G__44678 = (0);
seq__44638 = G__44675;
chunk__44639 = G__44676;
count__44640 = G__44677;
i__44641 = G__44678;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44638__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44646_44679 = cljs.core.seq.call(null,requires);
var chunk__44647_44680 = null;
var count__44648_44681 = (0);
var i__44649_44682 = (0);
while(true){
if((i__44649_44682 < count__44648_44681)){
var req_44683 = cljs.core._nth.call(null,chunk__44647_44680,i__44649_44682);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44683,prov);

var G__44684 = seq__44646_44679;
var G__44685 = chunk__44647_44680;
var G__44686 = count__44648_44681;
var G__44687 = (i__44649_44682 + (1));
seq__44646_44679 = G__44684;
chunk__44647_44680 = G__44685;
count__44648_44681 = G__44686;
i__44649_44682 = G__44687;
continue;
} else {
var temp__6503__auto___44688__$1 = cljs.core.seq.call(null,seq__44646_44679);
if(temp__6503__auto___44688__$1){
var seq__44646_44689__$1 = temp__6503__auto___44688__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44646_44689__$1)){
var c__18960__auto___44690 = cljs.core.chunk_first.call(null,seq__44646_44689__$1);
var G__44691 = cljs.core.chunk_rest.call(null,seq__44646_44689__$1);
var G__44692 = c__18960__auto___44690;
var G__44693 = cljs.core.count.call(null,c__18960__auto___44690);
var G__44694 = (0);
seq__44646_44679 = G__44691;
chunk__44647_44680 = G__44692;
count__44648_44681 = G__44693;
i__44649_44682 = G__44694;
continue;
} else {
var req_44695 = cljs.core.first.call(null,seq__44646_44689__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44695,prov);

var G__44696 = cljs.core.next.call(null,seq__44646_44689__$1);
var G__44697 = null;
var G__44698 = (0);
var G__44699 = (0);
seq__44646_44679 = G__44696;
chunk__44647_44680 = G__44697;
count__44648_44681 = G__44698;
i__44649_44682 = G__44699;
continue;
}
} else {
}
}
break;
}

var G__44700 = cljs.core.next.call(null,seq__44638__$1);
var G__44701 = null;
var G__44702 = (0);
var G__44703 = (0);
seq__44638 = G__44700;
chunk__44639 = G__44701;
count__44640 = G__44702;
i__44641 = G__44703;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__44708_44712 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__44709_44713 = null;
var count__44710_44714 = (0);
var i__44711_44715 = (0);
while(true){
if((i__44711_44715 < count__44710_44714)){
var ns_44716 = cljs.core._nth.call(null,chunk__44709_44713,i__44711_44715);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44716);

var G__44717 = seq__44708_44712;
var G__44718 = chunk__44709_44713;
var G__44719 = count__44710_44714;
var G__44720 = (i__44711_44715 + (1));
seq__44708_44712 = G__44717;
chunk__44709_44713 = G__44718;
count__44710_44714 = G__44719;
i__44711_44715 = G__44720;
continue;
} else {
var temp__6503__auto___44721 = cljs.core.seq.call(null,seq__44708_44712);
if(temp__6503__auto___44721){
var seq__44708_44722__$1 = temp__6503__auto___44721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44708_44722__$1)){
var c__18960__auto___44723 = cljs.core.chunk_first.call(null,seq__44708_44722__$1);
var G__44724 = cljs.core.chunk_rest.call(null,seq__44708_44722__$1);
var G__44725 = c__18960__auto___44723;
var G__44726 = cljs.core.count.call(null,c__18960__auto___44723);
var G__44727 = (0);
seq__44708_44712 = G__44724;
chunk__44709_44713 = G__44725;
count__44710_44714 = G__44726;
i__44711_44715 = G__44727;
continue;
} else {
var ns_44728 = cljs.core.first.call(null,seq__44708_44722__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44728);

var G__44729 = cljs.core.next.call(null,seq__44708_44722__$1);
var G__44730 = null;
var G__44731 = (0);
var G__44732 = (0);
seq__44708_44712 = G__44729;
chunk__44709_44713 = G__44730;
count__44710_44714 = G__44731;
i__44711_44715 = G__44732;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18057__auto__ = goog.require__;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__44733__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__44733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44734__i = 0, G__44734__a = new Array(arguments.length -  0);
while (G__44734__i < G__44734__a.length) {G__44734__a[G__44734__i] = arguments[G__44734__i + 0]; ++G__44734__i;}
  args = new cljs.core.IndexedSeq(G__44734__a,0);
} 
return G__44733__delegate.call(this,args);};
G__44733.cljs$lang$maxFixedArity = 0;
G__44733.cljs$lang$applyTo = (function (arglist__44735){
var args = cljs.core.seq(arglist__44735);
return G__44733__delegate(args);
});
G__44733.cljs$core$IFn$_invoke$arity$variadic = G__44733__delegate;
return G__44733;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__44737 = cljs.core._EQ_;
var expr__44738 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__44737.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__44738))){
var path_parts = ((function (pred__44737,expr__44738){
return (function (p1__44736_SHARP_){
return clojure.string.split.call(null,p1__44736_SHARP_,/[\/\\]/);
});})(pred__44737,expr__44738))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__44737,expr__44738){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e44740){if((e44740 instanceof Error)){
var e = e44740;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44740;

}
}})());
});
;})(path_parts,sep,root,pred__44737,expr__44738))
} else {
if(cljs.core.truth_(pred__44737.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__44738))){
return ((function (pred__44737,expr__44738){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__44737,expr__44738){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__44737,expr__44738))
);

return deferred.addErrback(((function (deferred,pred__44737,expr__44738){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__44737,expr__44738))
);
});
;})(pred__44737,expr__44738))
} else {
return ((function (pred__44737,expr__44738){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__44737,expr__44738))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__44741,callback){
var map__44744 = p__44741;
var map__44744__$1 = ((((!((map__44744 == null)))?((((map__44744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44744):map__44744);
var file_msg = map__44744__$1;
var request_url = cljs.core.get.call(null,map__44744__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__44744,map__44744__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__44744,map__44744__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__41654__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto__){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto__){
return (function (state_44768){
var state_val_44769 = (state_44768[(1)]);
if((state_val_44769 === (7))){
var inst_44764 = (state_44768[(2)]);
var state_44768__$1 = state_44768;
var statearr_44770_44790 = state_44768__$1;
(statearr_44770_44790[(2)] = inst_44764);

(statearr_44770_44790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44769 === (1))){
var state_44768__$1 = state_44768;
var statearr_44771_44791 = state_44768__$1;
(statearr_44771_44791[(2)] = null);

(statearr_44771_44791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44769 === (4))){
var inst_44748 = (state_44768[(7)]);
var inst_44748__$1 = (state_44768[(2)]);
var state_44768__$1 = (function (){var statearr_44772 = state_44768;
(statearr_44772[(7)] = inst_44748__$1);

return statearr_44772;
})();
if(cljs.core.truth_(inst_44748__$1)){
var statearr_44773_44792 = state_44768__$1;
(statearr_44773_44792[(1)] = (5));

} else {
var statearr_44774_44793 = state_44768__$1;
(statearr_44774_44793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44769 === (6))){
var state_44768__$1 = state_44768;
var statearr_44775_44794 = state_44768__$1;
(statearr_44775_44794[(2)] = null);

(statearr_44775_44794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44769 === (3))){
var inst_44766 = (state_44768[(2)]);
var state_44768__$1 = state_44768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44768__$1,inst_44766);
} else {
if((state_val_44769 === (2))){
var state_44768__$1 = state_44768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44768__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_44769 === (11))){
var inst_44760 = (state_44768[(2)]);
var state_44768__$1 = (function (){var statearr_44776 = state_44768;
(statearr_44776[(8)] = inst_44760);

return statearr_44776;
})();
var statearr_44777_44795 = state_44768__$1;
(statearr_44777_44795[(2)] = null);

(statearr_44777_44795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44769 === (9))){
var inst_44754 = (state_44768[(9)]);
var inst_44752 = (state_44768[(10)]);
var inst_44756 = inst_44754.call(null,inst_44752);
var state_44768__$1 = state_44768;
var statearr_44778_44796 = state_44768__$1;
(statearr_44778_44796[(2)] = inst_44756);

(statearr_44778_44796[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44769 === (5))){
var inst_44748 = (state_44768[(7)]);
var inst_44750 = figwheel.client.file_reloading.blocking_load.call(null,inst_44748);
var state_44768__$1 = state_44768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44768__$1,(8),inst_44750);
} else {
if((state_val_44769 === (10))){
var inst_44752 = (state_44768[(10)]);
var inst_44758 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_44752);
var state_44768__$1 = state_44768;
var statearr_44779_44797 = state_44768__$1;
(statearr_44779_44797[(2)] = inst_44758);

(statearr_44779_44797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44769 === (8))){
var inst_44754 = (state_44768[(9)]);
var inst_44748 = (state_44768[(7)]);
var inst_44752 = (state_44768[(2)]);
var inst_44753 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_44754__$1 = cljs.core.get.call(null,inst_44753,inst_44748);
var state_44768__$1 = (function (){var statearr_44780 = state_44768;
(statearr_44780[(9)] = inst_44754__$1);

(statearr_44780[(10)] = inst_44752);

return statearr_44780;
})();
if(cljs.core.truth_(inst_44754__$1)){
var statearr_44781_44798 = state_44768__$1;
(statearr_44781_44798[(1)] = (9));

} else {
var statearr_44782_44799 = state_44768__$1;
(statearr_44782_44799[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__41654__auto__))
;
return ((function (switch__41540__auto__,c__41654__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__41541__auto__ = null;
var figwheel$client$file_reloading$state_machine__41541__auto____0 = (function (){
var statearr_44786 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44786[(0)] = figwheel$client$file_reloading$state_machine__41541__auto__);

(statearr_44786[(1)] = (1));

return statearr_44786;
});
var figwheel$client$file_reloading$state_machine__41541__auto____1 = (function (state_44768){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_44768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e44787){if((e44787 instanceof Object)){
var ex__41544__auto__ = e44787;
var statearr_44788_44800 = state_44768;
(statearr_44788_44800[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44801 = state_44768;
state_44768 = G__44801;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__41541__auto__ = function(state_44768){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__41541__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__41541__auto____1.call(this,state_44768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__41541__auto____0;
figwheel$client$file_reloading$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__41541__auto____1;
return figwheel$client$file_reloading$state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto__))
})();
var state__41656__auto__ = (function (){var statearr_44789 = f__41655__auto__.call(null);
(statearr_44789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto__);

return statearr_44789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto__))
);

return c__41654__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__44802,callback){
var map__44805 = p__44802;
var map__44805__$1 = ((((!((map__44805 == null)))?((((map__44805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44805):map__44805);
var file_msg = map__44805__$1;
var namespace = cljs.core.get.call(null,map__44805__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__44805,map__44805__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__44805,map__44805__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__44807){
var map__44810 = p__44807;
var map__44810__$1 = ((((!((map__44810 == null)))?((((map__44810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44810):map__44810);
var file_msg = map__44810__$1;
var namespace = cljs.core.get.call(null,map__44810__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18045__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18045__auto__){
var or__18057__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
var or__18057__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18057__auto____$1)){
return or__18057__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18045__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__44812,callback){
var map__44815 = p__44812;
var map__44815__$1 = ((((!((map__44815 == null)))?((((map__44815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44815):map__44815);
var file_msg = map__44815__$1;
var request_url = cljs.core.get.call(null,map__44815__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__44815__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__41654__auto___44919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___44919,out){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___44919,out){
return (function (state_44901){
var state_val_44902 = (state_44901[(1)]);
if((state_val_44902 === (1))){
var inst_44875 = cljs.core.seq.call(null,files);
var inst_44876 = cljs.core.first.call(null,inst_44875);
var inst_44877 = cljs.core.next.call(null,inst_44875);
var inst_44878 = files;
var state_44901__$1 = (function (){var statearr_44903 = state_44901;
(statearr_44903[(7)] = inst_44876);

(statearr_44903[(8)] = inst_44878);

(statearr_44903[(9)] = inst_44877);

return statearr_44903;
})();
var statearr_44904_44920 = state_44901__$1;
(statearr_44904_44920[(2)] = null);

(statearr_44904_44920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44902 === (2))){
var inst_44878 = (state_44901[(8)]);
var inst_44884 = (state_44901[(10)]);
var inst_44883 = cljs.core.seq.call(null,inst_44878);
var inst_44884__$1 = cljs.core.first.call(null,inst_44883);
var inst_44885 = cljs.core.next.call(null,inst_44883);
var inst_44886 = (inst_44884__$1 == null);
var inst_44887 = cljs.core.not.call(null,inst_44886);
var state_44901__$1 = (function (){var statearr_44905 = state_44901;
(statearr_44905[(11)] = inst_44885);

(statearr_44905[(10)] = inst_44884__$1);

return statearr_44905;
})();
if(inst_44887){
var statearr_44906_44921 = state_44901__$1;
(statearr_44906_44921[(1)] = (4));

} else {
var statearr_44907_44922 = state_44901__$1;
(statearr_44907_44922[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44902 === (3))){
var inst_44899 = (state_44901[(2)]);
var state_44901__$1 = state_44901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44901__$1,inst_44899);
} else {
if((state_val_44902 === (4))){
var inst_44884 = (state_44901[(10)]);
var inst_44889 = figwheel.client.file_reloading.reload_js_file.call(null,inst_44884);
var state_44901__$1 = state_44901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44901__$1,(7),inst_44889);
} else {
if((state_val_44902 === (5))){
var inst_44895 = cljs.core.async.close_BANG_.call(null,out);
var state_44901__$1 = state_44901;
var statearr_44908_44923 = state_44901__$1;
(statearr_44908_44923[(2)] = inst_44895);

(statearr_44908_44923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44902 === (6))){
var inst_44897 = (state_44901[(2)]);
var state_44901__$1 = state_44901;
var statearr_44909_44924 = state_44901__$1;
(statearr_44909_44924[(2)] = inst_44897);

(statearr_44909_44924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44902 === (7))){
var inst_44885 = (state_44901[(11)]);
var inst_44891 = (state_44901[(2)]);
var inst_44892 = cljs.core.async.put_BANG_.call(null,out,inst_44891);
var inst_44878 = inst_44885;
var state_44901__$1 = (function (){var statearr_44910 = state_44901;
(statearr_44910[(12)] = inst_44892);

(statearr_44910[(8)] = inst_44878);

return statearr_44910;
})();
var statearr_44911_44925 = state_44901__$1;
(statearr_44911_44925[(2)] = null);

(statearr_44911_44925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__41654__auto___44919,out))
;
return ((function (switch__41540__auto__,c__41654__auto___44919,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41541__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41541__auto____0 = (function (){
var statearr_44915 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44915[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41541__auto__);

(statearr_44915[(1)] = (1));

return statearr_44915;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41541__auto____1 = (function (state_44901){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_44901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e44916){if((e44916 instanceof Object)){
var ex__41544__auto__ = e44916;
var statearr_44917_44926 = state_44901;
(statearr_44917_44926[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44927 = state_44901;
state_44901 = G__44927;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41541__auto__ = function(state_44901){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41541__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41541__auto____1.call(this,state_44901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41541__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41541__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___44919,out))
})();
var state__41656__auto__ = (function (){var statearr_44918 = f__41655__auto__.call(null);
(statearr_44918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___44919);

return statearr_44918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___44919,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__44928,opts){
var map__44932 = p__44928;
var map__44932__$1 = ((((!((map__44932 == null)))?((((map__44932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44932):map__44932);
var eval_body__$1 = cljs.core.get.call(null,map__44932__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__44932__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18045__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18045__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18045__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e44934){var e = e44934;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6501__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__44935_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44935_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6501__auto__)){
var file_msg = temp__6501__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__44944){
var vec__44945 = p__44944;
var k = cljs.core.nth.call(null,vec__44945,(0),null);
var v = cljs.core.nth.call(null,vec__44945,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__44948){
var vec__44949 = p__44948;
var k = cljs.core.nth.call(null,vec__44949,(0),null);
var v = cljs.core.nth.call(null,vec__44949,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__44955,p__44956){
var map__45203 = p__44955;
var map__45203__$1 = ((((!((map__45203 == null)))?((((map__45203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45203):map__45203);
var opts = map__45203__$1;
var before_jsload = cljs.core.get.call(null,map__45203__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__45203__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__45203__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__45204 = p__44956;
var map__45204__$1 = ((((!((map__45204 == null)))?((((map__45204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45204):map__45204);
var msg = map__45204__$1;
var files = cljs.core.get.call(null,map__45204__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__45204__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__45204__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__41654__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_45357){
var state_val_45358 = (state_45357[(1)]);
if((state_val_45358 === (7))){
var inst_45220 = (state_45357[(7)]);
var inst_45219 = (state_45357[(8)]);
var inst_45221 = (state_45357[(9)]);
var inst_45218 = (state_45357[(10)]);
var inst_45226 = cljs.core._nth.call(null,inst_45219,inst_45221);
var inst_45227 = figwheel.client.file_reloading.eval_body.call(null,inst_45226,opts);
var inst_45228 = (inst_45221 + (1));
var tmp45359 = inst_45220;
var tmp45360 = inst_45219;
var tmp45361 = inst_45218;
var inst_45218__$1 = tmp45361;
var inst_45219__$1 = tmp45360;
var inst_45220__$1 = tmp45359;
var inst_45221__$1 = inst_45228;
var state_45357__$1 = (function (){var statearr_45362 = state_45357;
(statearr_45362[(7)] = inst_45220__$1);

(statearr_45362[(11)] = inst_45227);

(statearr_45362[(8)] = inst_45219__$1);

(statearr_45362[(9)] = inst_45221__$1);

(statearr_45362[(10)] = inst_45218__$1);

return statearr_45362;
})();
var statearr_45363_45449 = state_45357__$1;
(statearr_45363_45449[(2)] = null);

(statearr_45363_45449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (20))){
var inst_45261 = (state_45357[(12)]);
var inst_45269 = figwheel.client.file_reloading.sort_files.call(null,inst_45261);
var state_45357__$1 = state_45357;
var statearr_45364_45450 = state_45357__$1;
(statearr_45364_45450[(2)] = inst_45269);

(statearr_45364_45450[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (27))){
var state_45357__$1 = state_45357;
var statearr_45365_45451 = state_45357__$1;
(statearr_45365_45451[(2)] = null);

(statearr_45365_45451[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (1))){
var inst_45210 = (state_45357[(13)]);
var inst_45207 = before_jsload.call(null,files);
var inst_45208 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_45209 = (function (){return ((function (inst_45210,inst_45207,inst_45208,state_val_45358,c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44952_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44952_SHARP_);
});
;})(inst_45210,inst_45207,inst_45208,state_val_45358,c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45210__$1 = cljs.core.filter.call(null,inst_45209,files);
var inst_45211 = cljs.core.not_empty.call(null,inst_45210__$1);
var state_45357__$1 = (function (){var statearr_45366 = state_45357;
(statearr_45366[(14)] = inst_45207);

(statearr_45366[(13)] = inst_45210__$1);

(statearr_45366[(15)] = inst_45208);

return statearr_45366;
})();
if(cljs.core.truth_(inst_45211)){
var statearr_45367_45452 = state_45357__$1;
(statearr_45367_45452[(1)] = (2));

} else {
var statearr_45368_45453 = state_45357__$1;
(statearr_45368_45453[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (24))){
var state_45357__$1 = state_45357;
var statearr_45369_45454 = state_45357__$1;
(statearr_45369_45454[(2)] = null);

(statearr_45369_45454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (39))){
var inst_45311 = (state_45357[(16)]);
var state_45357__$1 = state_45357;
var statearr_45370_45455 = state_45357__$1;
(statearr_45370_45455[(2)] = inst_45311);

(statearr_45370_45455[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (46))){
var inst_45352 = (state_45357[(2)]);
var state_45357__$1 = state_45357;
var statearr_45371_45456 = state_45357__$1;
(statearr_45371_45456[(2)] = inst_45352);

(statearr_45371_45456[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (4))){
var inst_45255 = (state_45357[(2)]);
var inst_45256 = cljs.core.List.EMPTY;
var inst_45257 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_45256);
var inst_45258 = (function (){return ((function (inst_45255,inst_45256,inst_45257,state_val_45358,c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44953_SHARP_){
var and__18045__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44953_SHARP_);
if(cljs.core.truth_(and__18045__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44953_SHARP_));
} else {
return and__18045__auto__;
}
});
;})(inst_45255,inst_45256,inst_45257,state_val_45358,c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45259 = cljs.core.filter.call(null,inst_45258,files);
var inst_45260 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_45261 = cljs.core.concat.call(null,inst_45259,inst_45260);
var state_45357__$1 = (function (){var statearr_45372 = state_45357;
(statearr_45372[(17)] = inst_45255);

(statearr_45372[(18)] = inst_45257);

(statearr_45372[(12)] = inst_45261);

return statearr_45372;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_45373_45457 = state_45357__$1;
(statearr_45373_45457[(1)] = (16));

} else {
var statearr_45374_45458 = state_45357__$1;
(statearr_45374_45458[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (15))){
var inst_45245 = (state_45357[(2)]);
var state_45357__$1 = state_45357;
var statearr_45375_45459 = state_45357__$1;
(statearr_45375_45459[(2)] = inst_45245);

(statearr_45375_45459[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (21))){
var inst_45271 = (state_45357[(19)]);
var inst_45271__$1 = (state_45357[(2)]);
var inst_45272 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_45271__$1);
var state_45357__$1 = (function (){var statearr_45376 = state_45357;
(statearr_45376[(19)] = inst_45271__$1);

return statearr_45376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45357__$1,(22),inst_45272);
} else {
if((state_val_45358 === (31))){
var inst_45355 = (state_45357[(2)]);
var state_45357__$1 = state_45357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45357__$1,inst_45355);
} else {
if((state_val_45358 === (32))){
var inst_45311 = (state_45357[(16)]);
var inst_45316 = inst_45311.cljs$lang$protocol_mask$partition0$;
var inst_45317 = (inst_45316 & (64));
var inst_45318 = inst_45311.cljs$core$ISeq$;
var inst_45319 = (inst_45317) || (inst_45318);
var state_45357__$1 = state_45357;
if(cljs.core.truth_(inst_45319)){
var statearr_45377_45460 = state_45357__$1;
(statearr_45377_45460[(1)] = (35));

} else {
var statearr_45378_45461 = state_45357__$1;
(statearr_45378_45461[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (40))){
var inst_45332 = (state_45357[(20)]);
var inst_45331 = (state_45357[(2)]);
var inst_45332__$1 = cljs.core.get.call(null,inst_45331,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_45333 = cljs.core.get.call(null,inst_45331,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_45334 = cljs.core.not_empty.call(null,inst_45332__$1);
var state_45357__$1 = (function (){var statearr_45379 = state_45357;
(statearr_45379[(20)] = inst_45332__$1);

(statearr_45379[(21)] = inst_45333);

return statearr_45379;
})();
if(cljs.core.truth_(inst_45334)){
var statearr_45380_45462 = state_45357__$1;
(statearr_45380_45462[(1)] = (41));

} else {
var statearr_45381_45463 = state_45357__$1;
(statearr_45381_45463[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (33))){
var state_45357__$1 = state_45357;
var statearr_45382_45464 = state_45357__$1;
(statearr_45382_45464[(2)] = false);

(statearr_45382_45464[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (13))){
var inst_45231 = (state_45357[(22)]);
var inst_45235 = cljs.core.chunk_first.call(null,inst_45231);
var inst_45236 = cljs.core.chunk_rest.call(null,inst_45231);
var inst_45237 = cljs.core.count.call(null,inst_45235);
var inst_45218 = inst_45236;
var inst_45219 = inst_45235;
var inst_45220 = inst_45237;
var inst_45221 = (0);
var state_45357__$1 = (function (){var statearr_45383 = state_45357;
(statearr_45383[(7)] = inst_45220);

(statearr_45383[(8)] = inst_45219);

(statearr_45383[(9)] = inst_45221);

(statearr_45383[(10)] = inst_45218);

return statearr_45383;
})();
var statearr_45384_45465 = state_45357__$1;
(statearr_45384_45465[(2)] = null);

(statearr_45384_45465[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (22))){
var inst_45271 = (state_45357[(19)]);
var inst_45275 = (state_45357[(23)]);
var inst_45274 = (state_45357[(24)]);
var inst_45279 = (state_45357[(25)]);
var inst_45274__$1 = (state_45357[(2)]);
var inst_45275__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45274__$1);
var inst_45276 = (function (){var all_files = inst_45271;
var res_SINGLEQUOTE_ = inst_45274__$1;
var res = inst_45275__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_45271,inst_45275,inst_45274,inst_45279,inst_45274__$1,inst_45275__$1,state_val_45358,c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44954_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__44954_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_45271,inst_45275,inst_45274,inst_45279,inst_45274__$1,inst_45275__$1,state_val_45358,c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45277 = cljs.core.filter.call(null,inst_45276,inst_45274__$1);
var inst_45278 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_45279__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45278);
var inst_45280 = cljs.core.not_empty.call(null,inst_45279__$1);
var state_45357__$1 = (function (){var statearr_45385 = state_45357;
(statearr_45385[(26)] = inst_45277);

(statearr_45385[(23)] = inst_45275__$1);

(statearr_45385[(24)] = inst_45274__$1);

(statearr_45385[(25)] = inst_45279__$1);

return statearr_45385;
})();
if(cljs.core.truth_(inst_45280)){
var statearr_45386_45466 = state_45357__$1;
(statearr_45386_45466[(1)] = (23));

} else {
var statearr_45387_45467 = state_45357__$1;
(statearr_45387_45467[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (36))){
var state_45357__$1 = state_45357;
var statearr_45388_45468 = state_45357__$1;
(statearr_45388_45468[(2)] = false);

(statearr_45388_45468[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (41))){
var inst_45332 = (state_45357[(20)]);
var inst_45336 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_45337 = cljs.core.map.call(null,inst_45336,inst_45332);
var inst_45338 = cljs.core.pr_str.call(null,inst_45337);
var inst_45339 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_45338)].join('');
var inst_45340 = figwheel.client.utils.log.call(null,inst_45339);
var state_45357__$1 = state_45357;
var statearr_45389_45469 = state_45357__$1;
(statearr_45389_45469[(2)] = inst_45340);

(statearr_45389_45469[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (43))){
var inst_45333 = (state_45357[(21)]);
var inst_45343 = (state_45357[(2)]);
var inst_45344 = cljs.core.not_empty.call(null,inst_45333);
var state_45357__$1 = (function (){var statearr_45390 = state_45357;
(statearr_45390[(27)] = inst_45343);

return statearr_45390;
})();
if(cljs.core.truth_(inst_45344)){
var statearr_45391_45470 = state_45357__$1;
(statearr_45391_45470[(1)] = (44));

} else {
var statearr_45392_45471 = state_45357__$1;
(statearr_45392_45471[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (29))){
var inst_45277 = (state_45357[(26)]);
var inst_45271 = (state_45357[(19)]);
var inst_45275 = (state_45357[(23)]);
var inst_45274 = (state_45357[(24)]);
var inst_45279 = (state_45357[(25)]);
var inst_45311 = (state_45357[(16)]);
var inst_45307 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_45310 = (function (){var all_files = inst_45271;
var res_SINGLEQUOTE_ = inst_45274;
var res = inst_45275;
var files_not_loaded = inst_45277;
var dependencies_that_loaded = inst_45279;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45277,inst_45271,inst_45275,inst_45274,inst_45279,inst_45311,inst_45307,state_val_45358,c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45309){
var map__45393 = p__45309;
var map__45393__$1 = ((((!((map__45393 == null)))?((((map__45393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45393):map__45393);
var namespace = cljs.core.get.call(null,map__45393__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45277,inst_45271,inst_45275,inst_45274,inst_45279,inst_45311,inst_45307,state_val_45358,c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45311__$1 = cljs.core.group_by.call(null,inst_45310,inst_45277);
var inst_45313 = (inst_45311__$1 == null);
var inst_45314 = cljs.core.not.call(null,inst_45313);
var state_45357__$1 = (function (){var statearr_45395 = state_45357;
(statearr_45395[(28)] = inst_45307);

(statearr_45395[(16)] = inst_45311__$1);

return statearr_45395;
})();
if(inst_45314){
var statearr_45396_45472 = state_45357__$1;
(statearr_45396_45472[(1)] = (32));

} else {
var statearr_45397_45473 = state_45357__$1;
(statearr_45397_45473[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (44))){
var inst_45333 = (state_45357[(21)]);
var inst_45346 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45333);
var inst_45347 = cljs.core.pr_str.call(null,inst_45346);
var inst_45348 = [cljs.core.str("not required: "),cljs.core.str(inst_45347)].join('');
var inst_45349 = figwheel.client.utils.log.call(null,inst_45348);
var state_45357__$1 = state_45357;
var statearr_45398_45474 = state_45357__$1;
(statearr_45398_45474[(2)] = inst_45349);

(statearr_45398_45474[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (6))){
var inst_45252 = (state_45357[(2)]);
var state_45357__$1 = state_45357;
var statearr_45399_45475 = state_45357__$1;
(statearr_45399_45475[(2)] = inst_45252);

(statearr_45399_45475[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (28))){
var inst_45277 = (state_45357[(26)]);
var inst_45304 = (state_45357[(2)]);
var inst_45305 = cljs.core.not_empty.call(null,inst_45277);
var state_45357__$1 = (function (){var statearr_45400 = state_45357;
(statearr_45400[(29)] = inst_45304);

return statearr_45400;
})();
if(cljs.core.truth_(inst_45305)){
var statearr_45401_45476 = state_45357__$1;
(statearr_45401_45476[(1)] = (29));

} else {
var statearr_45402_45477 = state_45357__$1;
(statearr_45402_45477[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (25))){
var inst_45275 = (state_45357[(23)]);
var inst_45291 = (state_45357[(2)]);
var inst_45292 = cljs.core.not_empty.call(null,inst_45275);
var state_45357__$1 = (function (){var statearr_45403 = state_45357;
(statearr_45403[(30)] = inst_45291);

return statearr_45403;
})();
if(cljs.core.truth_(inst_45292)){
var statearr_45404_45478 = state_45357__$1;
(statearr_45404_45478[(1)] = (26));

} else {
var statearr_45405_45479 = state_45357__$1;
(statearr_45405_45479[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (34))){
var inst_45326 = (state_45357[(2)]);
var state_45357__$1 = state_45357;
if(cljs.core.truth_(inst_45326)){
var statearr_45406_45480 = state_45357__$1;
(statearr_45406_45480[(1)] = (38));

} else {
var statearr_45407_45481 = state_45357__$1;
(statearr_45407_45481[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (17))){
var state_45357__$1 = state_45357;
var statearr_45408_45482 = state_45357__$1;
(statearr_45408_45482[(2)] = recompile_dependents);

(statearr_45408_45482[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (3))){
var state_45357__$1 = state_45357;
var statearr_45409_45483 = state_45357__$1;
(statearr_45409_45483[(2)] = null);

(statearr_45409_45483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (12))){
var inst_45248 = (state_45357[(2)]);
var state_45357__$1 = state_45357;
var statearr_45410_45484 = state_45357__$1;
(statearr_45410_45484[(2)] = inst_45248);

(statearr_45410_45484[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (2))){
var inst_45210 = (state_45357[(13)]);
var inst_45217 = cljs.core.seq.call(null,inst_45210);
var inst_45218 = inst_45217;
var inst_45219 = null;
var inst_45220 = (0);
var inst_45221 = (0);
var state_45357__$1 = (function (){var statearr_45411 = state_45357;
(statearr_45411[(7)] = inst_45220);

(statearr_45411[(8)] = inst_45219);

(statearr_45411[(9)] = inst_45221);

(statearr_45411[(10)] = inst_45218);

return statearr_45411;
})();
var statearr_45412_45485 = state_45357__$1;
(statearr_45412_45485[(2)] = null);

(statearr_45412_45485[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (23))){
var inst_45277 = (state_45357[(26)]);
var inst_45271 = (state_45357[(19)]);
var inst_45275 = (state_45357[(23)]);
var inst_45274 = (state_45357[(24)]);
var inst_45279 = (state_45357[(25)]);
var inst_45282 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_45284 = (function (){var all_files = inst_45271;
var res_SINGLEQUOTE_ = inst_45274;
var res = inst_45275;
var files_not_loaded = inst_45277;
var dependencies_that_loaded = inst_45279;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45277,inst_45271,inst_45275,inst_45274,inst_45279,inst_45282,state_val_45358,c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45283){
var map__45413 = p__45283;
var map__45413__$1 = ((((!((map__45413 == null)))?((((map__45413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45413):map__45413);
var request_url = cljs.core.get.call(null,map__45413__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45277,inst_45271,inst_45275,inst_45274,inst_45279,inst_45282,state_val_45358,c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45285 = cljs.core.reverse.call(null,inst_45279);
var inst_45286 = cljs.core.map.call(null,inst_45284,inst_45285);
var inst_45287 = cljs.core.pr_str.call(null,inst_45286);
var inst_45288 = figwheel.client.utils.log.call(null,inst_45287);
var state_45357__$1 = (function (){var statearr_45415 = state_45357;
(statearr_45415[(31)] = inst_45282);

return statearr_45415;
})();
var statearr_45416_45486 = state_45357__$1;
(statearr_45416_45486[(2)] = inst_45288);

(statearr_45416_45486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (35))){
var state_45357__$1 = state_45357;
var statearr_45417_45487 = state_45357__$1;
(statearr_45417_45487[(2)] = true);

(statearr_45417_45487[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (19))){
var inst_45261 = (state_45357[(12)]);
var inst_45267 = figwheel.client.file_reloading.expand_files.call(null,inst_45261);
var state_45357__$1 = state_45357;
var statearr_45418_45488 = state_45357__$1;
(statearr_45418_45488[(2)] = inst_45267);

(statearr_45418_45488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (11))){
var state_45357__$1 = state_45357;
var statearr_45419_45489 = state_45357__$1;
(statearr_45419_45489[(2)] = null);

(statearr_45419_45489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (9))){
var inst_45250 = (state_45357[(2)]);
var state_45357__$1 = state_45357;
var statearr_45420_45490 = state_45357__$1;
(statearr_45420_45490[(2)] = inst_45250);

(statearr_45420_45490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (5))){
var inst_45220 = (state_45357[(7)]);
var inst_45221 = (state_45357[(9)]);
var inst_45223 = (inst_45221 < inst_45220);
var inst_45224 = inst_45223;
var state_45357__$1 = state_45357;
if(cljs.core.truth_(inst_45224)){
var statearr_45421_45491 = state_45357__$1;
(statearr_45421_45491[(1)] = (7));

} else {
var statearr_45422_45492 = state_45357__$1;
(statearr_45422_45492[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (14))){
var inst_45231 = (state_45357[(22)]);
var inst_45240 = cljs.core.first.call(null,inst_45231);
var inst_45241 = figwheel.client.file_reloading.eval_body.call(null,inst_45240,opts);
var inst_45242 = cljs.core.next.call(null,inst_45231);
var inst_45218 = inst_45242;
var inst_45219 = null;
var inst_45220 = (0);
var inst_45221 = (0);
var state_45357__$1 = (function (){var statearr_45423 = state_45357;
(statearr_45423[(32)] = inst_45241);

(statearr_45423[(7)] = inst_45220);

(statearr_45423[(8)] = inst_45219);

(statearr_45423[(9)] = inst_45221);

(statearr_45423[(10)] = inst_45218);

return statearr_45423;
})();
var statearr_45424_45493 = state_45357__$1;
(statearr_45424_45493[(2)] = null);

(statearr_45424_45493[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (45))){
var state_45357__$1 = state_45357;
var statearr_45425_45494 = state_45357__$1;
(statearr_45425_45494[(2)] = null);

(statearr_45425_45494[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (26))){
var inst_45277 = (state_45357[(26)]);
var inst_45271 = (state_45357[(19)]);
var inst_45275 = (state_45357[(23)]);
var inst_45274 = (state_45357[(24)]);
var inst_45279 = (state_45357[(25)]);
var inst_45294 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_45296 = (function (){var all_files = inst_45271;
var res_SINGLEQUOTE_ = inst_45274;
var res = inst_45275;
var files_not_loaded = inst_45277;
var dependencies_that_loaded = inst_45279;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45277,inst_45271,inst_45275,inst_45274,inst_45279,inst_45294,state_val_45358,c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45295){
var map__45426 = p__45295;
var map__45426__$1 = ((((!((map__45426 == null)))?((((map__45426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45426):map__45426);
var namespace = cljs.core.get.call(null,map__45426__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__45426__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45277,inst_45271,inst_45275,inst_45274,inst_45279,inst_45294,state_val_45358,c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45297 = cljs.core.map.call(null,inst_45296,inst_45275);
var inst_45298 = cljs.core.pr_str.call(null,inst_45297);
var inst_45299 = figwheel.client.utils.log.call(null,inst_45298);
var inst_45300 = (function (){var all_files = inst_45271;
var res_SINGLEQUOTE_ = inst_45274;
var res = inst_45275;
var files_not_loaded = inst_45277;
var dependencies_that_loaded = inst_45279;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45277,inst_45271,inst_45275,inst_45274,inst_45279,inst_45294,inst_45296,inst_45297,inst_45298,inst_45299,state_val_45358,c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45277,inst_45271,inst_45275,inst_45274,inst_45279,inst_45294,inst_45296,inst_45297,inst_45298,inst_45299,state_val_45358,c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45301 = setTimeout(inst_45300,(10));
var state_45357__$1 = (function (){var statearr_45428 = state_45357;
(statearr_45428[(33)] = inst_45299);

(statearr_45428[(34)] = inst_45294);

return statearr_45428;
})();
var statearr_45429_45495 = state_45357__$1;
(statearr_45429_45495[(2)] = inst_45301);

(statearr_45429_45495[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (16))){
var state_45357__$1 = state_45357;
var statearr_45430_45496 = state_45357__$1;
(statearr_45430_45496[(2)] = reload_dependents);

(statearr_45430_45496[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (38))){
var inst_45311 = (state_45357[(16)]);
var inst_45328 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45311);
var state_45357__$1 = state_45357;
var statearr_45431_45497 = state_45357__$1;
(statearr_45431_45497[(2)] = inst_45328);

(statearr_45431_45497[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (30))){
var state_45357__$1 = state_45357;
var statearr_45432_45498 = state_45357__$1;
(statearr_45432_45498[(2)] = null);

(statearr_45432_45498[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (10))){
var inst_45231 = (state_45357[(22)]);
var inst_45233 = cljs.core.chunked_seq_QMARK_.call(null,inst_45231);
var state_45357__$1 = state_45357;
if(inst_45233){
var statearr_45433_45499 = state_45357__$1;
(statearr_45433_45499[(1)] = (13));

} else {
var statearr_45434_45500 = state_45357__$1;
(statearr_45434_45500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (18))){
var inst_45265 = (state_45357[(2)]);
var state_45357__$1 = state_45357;
if(cljs.core.truth_(inst_45265)){
var statearr_45435_45501 = state_45357__$1;
(statearr_45435_45501[(1)] = (19));

} else {
var statearr_45436_45502 = state_45357__$1;
(statearr_45436_45502[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (42))){
var state_45357__$1 = state_45357;
var statearr_45437_45503 = state_45357__$1;
(statearr_45437_45503[(2)] = null);

(statearr_45437_45503[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (37))){
var inst_45323 = (state_45357[(2)]);
var state_45357__$1 = state_45357;
var statearr_45438_45504 = state_45357__$1;
(statearr_45438_45504[(2)] = inst_45323);

(statearr_45438_45504[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45358 === (8))){
var inst_45231 = (state_45357[(22)]);
var inst_45218 = (state_45357[(10)]);
var inst_45231__$1 = cljs.core.seq.call(null,inst_45218);
var state_45357__$1 = (function (){var statearr_45439 = state_45357;
(statearr_45439[(22)] = inst_45231__$1);

return statearr_45439;
})();
if(inst_45231__$1){
var statearr_45440_45505 = state_45357__$1;
(statearr_45440_45505[(1)] = (10));

} else {
var statearr_45441_45506 = state_45357__$1;
(statearr_45441_45506[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__41540__auto__,c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41541__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41541__auto____0 = (function (){
var statearr_45445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45445[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__41541__auto__);

(statearr_45445[(1)] = (1));

return statearr_45445;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41541__auto____1 = (function (state_45357){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_45357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e45446){if((e45446 instanceof Object)){
var ex__41544__auto__ = e45446;
var statearr_45447_45507 = state_45357;
(statearr_45447_45507[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45508 = state_45357;
state_45357 = G__45508;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__41541__auto__ = function(state_45357){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41541__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41541__auto____1.call(this,state_45357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__41541__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__41541__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__41656__auto__ = (function (){var statearr_45448 = f__41655__auto__.call(null);
(statearr_45448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto__);

return statearr_45448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto__,map__45203,map__45203__$1,opts,before_jsload,on_jsload,reload_dependents,map__45204,map__45204__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__41654__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__45511,link){
var map__45514 = p__45511;
var map__45514__$1 = ((((!((map__45514 == null)))?((((map__45514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45514):map__45514);
var file = cljs.core.get.call(null,map__45514__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = link.href;
if(cljs.core.truth_(temp__6503__auto__)){
var link_href = temp__6503__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6503__auto__,map__45514,map__45514__$1,file){
return (function (p1__45509_SHARP_,p2__45510_SHARP_){
if(cljs.core._EQ_.call(null,p1__45509_SHARP_,p2__45510_SHARP_)){
return p1__45509_SHARP_;
} else {
return false;
}
});})(link_href,temp__6503__auto__,map__45514,map__45514__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6503__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__45520){
var map__45521 = p__45520;
var map__45521__$1 = ((((!((map__45521 == null)))?((((map__45521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45521):map__45521);
var match_length = cljs.core.get.call(null,map__45521__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__45521__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__45516_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__45516_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6503__auto__)){
var res = temp__6503__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args45523 = [];
var len__19240__auto___45526 = arguments.length;
var i__19241__auto___45527 = (0);
while(true){
if((i__19241__auto___45527 < len__19240__auto___45526)){
args45523.push((arguments[i__19241__auto___45527]));

var G__45528 = (i__19241__auto___45527 + (1));
i__19241__auto___45527 = G__45528;
continue;
} else {
}
break;
}

var G__45525 = args45523.length;
switch (G__45525) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45523.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__45530_SHARP_,p2__45531_SHARP_){
return cljs.core.assoc.call(null,p1__45530_SHARP_,cljs.core.get.call(null,p2__45531_SHARP_,key),p2__45531_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__45532){
var map__45535 = p__45532;
var map__45535__$1 = ((((!((map__45535 == null)))?((((map__45535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45535):map__45535);
var f_data = map__45535__$1;
var file = cljs.core.get.call(null,map__45535__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6503__auto__)){
var link = temp__6503__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__45537,files_msg){
var map__45544 = p__45537;
var map__45544__$1 = ((((!((map__45544 == null)))?((((map__45544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45544):map__45544);
var opts = map__45544__$1;
var on_cssload = cljs.core.get.call(null,map__45544__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__45546_45550 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__45547_45551 = null;
var count__45548_45552 = (0);
var i__45549_45553 = (0);
while(true){
if((i__45549_45553 < count__45548_45552)){
var f_45554 = cljs.core._nth.call(null,chunk__45547_45551,i__45549_45553);
figwheel.client.file_reloading.reload_css_file.call(null,f_45554);

var G__45555 = seq__45546_45550;
var G__45556 = chunk__45547_45551;
var G__45557 = count__45548_45552;
var G__45558 = (i__45549_45553 + (1));
seq__45546_45550 = G__45555;
chunk__45547_45551 = G__45556;
count__45548_45552 = G__45557;
i__45549_45553 = G__45558;
continue;
} else {
var temp__6503__auto___45559 = cljs.core.seq.call(null,seq__45546_45550);
if(temp__6503__auto___45559){
var seq__45546_45560__$1 = temp__6503__auto___45559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45546_45560__$1)){
var c__18960__auto___45561 = cljs.core.chunk_first.call(null,seq__45546_45560__$1);
var G__45562 = cljs.core.chunk_rest.call(null,seq__45546_45560__$1);
var G__45563 = c__18960__auto___45561;
var G__45564 = cljs.core.count.call(null,c__18960__auto___45561);
var G__45565 = (0);
seq__45546_45550 = G__45562;
chunk__45547_45551 = G__45563;
count__45548_45552 = G__45564;
i__45549_45553 = G__45565;
continue;
} else {
var f_45566 = cljs.core.first.call(null,seq__45546_45560__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_45566);

var G__45567 = cljs.core.next.call(null,seq__45546_45560__$1);
var G__45568 = null;
var G__45569 = (0);
var G__45570 = (0);
seq__45546_45550 = G__45567;
chunk__45547_45551 = G__45568;
count__45548_45552 = G__45569;
i__45549_45553 = G__45570;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__45544,map__45544__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__45544,map__45544__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1470410260375