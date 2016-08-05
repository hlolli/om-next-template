// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args47472 = [];
var len__19240__auto___47475 = arguments.length;
var i__19241__auto___47476 = (0);
while(true){
if((i__19241__auto___47476 < len__19240__auto___47475)){
args47472.push((arguments[i__19241__auto___47476]));

var G__47477 = (i__19241__auto___47476 + (1));
i__19241__auto___47476 = G__47477;
continue;
} else {
}
break;
}

var G__47474 = args47472.length;
switch (G__47474) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47472.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__19247__auto__ = [];
var len__19240__auto___47480 = arguments.length;
var i__19241__auto___47481 = (0);
while(true){
if((i__19241__auto___47481 < len__19240__auto___47480)){
args__19247__auto__.push((arguments[i__19241__auto___47481]));

var G__47482 = (i__19241__auto___47481 + (1));
i__19241__auto___47481 = G__47482;
continue;
} else {
}
break;
}

var argseq__19248__auto__ = ((((0) < args__19247__auto__.length))?(new cljs.core.IndexedSeq(args__19247__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19248__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq47479){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47479));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__19247__auto__ = [];
var len__19240__auto___47484 = arguments.length;
var i__19241__auto___47485 = (0);
while(true){
if((i__19241__auto___47485 < len__19240__auto___47484)){
args__19247__auto__.push((arguments[i__19241__auto___47485]));

var G__47486 = (i__19241__auto___47485 + (1));
i__19241__auto___47485 = G__47486;
continue;
} else {
}
break;
}

var argseq__19248__auto__ = ((((0) < args__19247__auto__.length))?(new cljs.core.IndexedSeq(args__19247__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19248__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq47483){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47483));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__47487 = cljs.core._EQ_;
var expr__47488 = (function (){var or__18057__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e47491){if((e47491 instanceof Error)){
var e = e47491;
return false;
} else {
throw e47491;

}
}})();
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__47487.call(null,"true",expr__47488))){
return true;
} else {
if(cljs.core.truth_(pred__47487.call(null,"false",expr__47488))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__47488)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e47493){if((e47493 instanceof Error)){
var e = e47493;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e47493;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__47494){
var map__47497 = p__47494;
var map__47497__$1 = ((((!((map__47497 == null)))?((((map__47497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47497):map__47497);
var message = cljs.core.get.call(null,map__47497__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__47497__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18057__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18045__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18045__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18045__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__41654__auto___47659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___47659,ch){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___47659,ch){
return (function (state_47628){
var state_val_47629 = (state_47628[(1)]);
if((state_val_47629 === (7))){
var inst_47624 = (state_47628[(2)]);
var state_47628__$1 = state_47628;
var statearr_47630_47660 = state_47628__$1;
(statearr_47630_47660[(2)] = inst_47624);

(statearr_47630_47660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (1))){
var state_47628__$1 = state_47628;
var statearr_47631_47661 = state_47628__$1;
(statearr_47631_47661[(2)] = null);

(statearr_47631_47661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (4))){
var inst_47581 = (state_47628[(7)]);
var inst_47581__$1 = (state_47628[(2)]);
var state_47628__$1 = (function (){var statearr_47632 = state_47628;
(statearr_47632[(7)] = inst_47581__$1);

return statearr_47632;
})();
if(cljs.core.truth_(inst_47581__$1)){
var statearr_47633_47662 = state_47628__$1;
(statearr_47633_47662[(1)] = (5));

} else {
var statearr_47634_47663 = state_47628__$1;
(statearr_47634_47663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (15))){
var inst_47588 = (state_47628[(8)]);
var inst_47603 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47588);
var inst_47604 = cljs.core.first.call(null,inst_47603);
var inst_47605 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_47604);
var inst_47606 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_47605)].join('');
var inst_47607 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_47606);
var state_47628__$1 = state_47628;
var statearr_47635_47664 = state_47628__$1;
(statearr_47635_47664[(2)] = inst_47607);

(statearr_47635_47664[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (13))){
var inst_47612 = (state_47628[(2)]);
var state_47628__$1 = state_47628;
var statearr_47636_47665 = state_47628__$1;
(statearr_47636_47665[(2)] = inst_47612);

(statearr_47636_47665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (6))){
var state_47628__$1 = state_47628;
var statearr_47637_47666 = state_47628__$1;
(statearr_47637_47666[(2)] = null);

(statearr_47637_47666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (17))){
var inst_47610 = (state_47628[(2)]);
var state_47628__$1 = state_47628;
var statearr_47638_47667 = state_47628__$1;
(statearr_47638_47667[(2)] = inst_47610);

(statearr_47638_47667[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (3))){
var inst_47626 = (state_47628[(2)]);
var state_47628__$1 = state_47628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47628__$1,inst_47626);
} else {
if((state_val_47629 === (12))){
var inst_47587 = (state_47628[(9)]);
var inst_47601 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_47587,opts);
var state_47628__$1 = state_47628;
if(cljs.core.truth_(inst_47601)){
var statearr_47639_47668 = state_47628__$1;
(statearr_47639_47668[(1)] = (15));

} else {
var statearr_47640_47669 = state_47628__$1;
(statearr_47640_47669[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (2))){
var state_47628__$1 = state_47628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47628__$1,(4),ch);
} else {
if((state_val_47629 === (11))){
var inst_47588 = (state_47628[(8)]);
var inst_47593 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47594 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_47588);
var inst_47595 = cljs.core.async.timeout.call(null,(1000));
var inst_47596 = [inst_47594,inst_47595];
var inst_47597 = (new cljs.core.PersistentVector(null,2,(5),inst_47593,inst_47596,null));
var state_47628__$1 = state_47628;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47628__$1,(14),inst_47597);
} else {
if((state_val_47629 === (9))){
var inst_47588 = (state_47628[(8)]);
var inst_47614 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_47615 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47588);
var inst_47616 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47615);
var inst_47617 = [cljs.core.str("Not loading: "),cljs.core.str(inst_47616)].join('');
var inst_47618 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_47617);
var state_47628__$1 = (function (){var statearr_47641 = state_47628;
(statearr_47641[(10)] = inst_47614);

return statearr_47641;
})();
var statearr_47642_47670 = state_47628__$1;
(statearr_47642_47670[(2)] = inst_47618);

(statearr_47642_47670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (5))){
var inst_47581 = (state_47628[(7)]);
var inst_47583 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_47584 = (new cljs.core.PersistentArrayMap(null,2,inst_47583,null));
var inst_47585 = (new cljs.core.PersistentHashSet(null,inst_47584,null));
var inst_47586 = figwheel.client.focus_msgs.call(null,inst_47585,inst_47581);
var inst_47587 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_47586);
var inst_47588 = cljs.core.first.call(null,inst_47586);
var inst_47589 = figwheel.client.autoload_QMARK_.call(null);
var state_47628__$1 = (function (){var statearr_47643 = state_47628;
(statearr_47643[(9)] = inst_47587);

(statearr_47643[(8)] = inst_47588);

return statearr_47643;
})();
if(cljs.core.truth_(inst_47589)){
var statearr_47644_47671 = state_47628__$1;
(statearr_47644_47671[(1)] = (8));

} else {
var statearr_47645_47672 = state_47628__$1;
(statearr_47645_47672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (14))){
var inst_47599 = (state_47628[(2)]);
var state_47628__$1 = state_47628;
var statearr_47646_47673 = state_47628__$1;
(statearr_47646_47673[(2)] = inst_47599);

(statearr_47646_47673[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (16))){
var state_47628__$1 = state_47628;
var statearr_47647_47674 = state_47628__$1;
(statearr_47647_47674[(2)] = null);

(statearr_47647_47674[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (10))){
var inst_47620 = (state_47628[(2)]);
var state_47628__$1 = (function (){var statearr_47648 = state_47628;
(statearr_47648[(11)] = inst_47620);

return statearr_47648;
})();
var statearr_47649_47675 = state_47628__$1;
(statearr_47649_47675[(2)] = null);

(statearr_47649_47675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (8))){
var inst_47587 = (state_47628[(9)]);
var inst_47591 = figwheel.client.reload_file_state_QMARK_.call(null,inst_47587,opts);
var state_47628__$1 = state_47628;
if(cljs.core.truth_(inst_47591)){
var statearr_47650_47676 = state_47628__$1;
(statearr_47650_47676[(1)] = (11));

} else {
var statearr_47651_47677 = state_47628__$1;
(statearr_47651_47677[(1)] = (12));

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
});})(c__41654__auto___47659,ch))
;
return ((function (switch__41540__auto__,c__41654__auto___47659,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__41541__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__41541__auto____0 = (function (){
var statearr_47655 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47655[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__41541__auto__);

(statearr_47655[(1)] = (1));

return statearr_47655;
});
var figwheel$client$file_reloader_plugin_$_state_machine__41541__auto____1 = (function (state_47628){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_47628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e47656){if((e47656 instanceof Object)){
var ex__41544__auto__ = e47656;
var statearr_47657_47678 = state_47628;
(statearr_47657_47678[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47679 = state_47628;
state_47628 = G__47679;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__41541__auto__ = function(state_47628){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__41541__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__41541__auto____1.call(this,state_47628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__41541__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__41541__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___47659,ch))
})();
var state__41656__auto__ = (function (){var statearr_47658 = f__41655__auto__.call(null);
(statearr_47658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___47659);

return statearr_47658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___47659,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__47680_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__47680_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_47683 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_47683){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e47682){if((e47682 instanceof Error)){
var e = e47682;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_47683], null));
} else {
var e = e47682;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_47683))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__47684){
var map__47693 = p__47684;
var map__47693__$1 = ((((!((map__47693 == null)))?((((map__47693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47693):map__47693);
var opts = map__47693__$1;
var build_id = cljs.core.get.call(null,map__47693__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__47693,map__47693__$1,opts,build_id){
return (function (p__47695){
var vec__47696 = p__47695;
var seq__47697 = cljs.core.seq.call(null,vec__47696);
var first__47698 = cljs.core.first.call(null,seq__47697);
var seq__47697__$1 = cljs.core.next.call(null,seq__47697);
var map__47699 = first__47698;
var map__47699__$1 = ((((!((map__47699 == null)))?((((map__47699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47699):map__47699);
var msg = map__47699__$1;
var msg_name = cljs.core.get.call(null,map__47699__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47697__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__47696,seq__47697,first__47698,seq__47697__$1,map__47699,map__47699__$1,msg,msg_name,_,map__47693,map__47693__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__47696,seq__47697,first__47698,seq__47697__$1,map__47699,map__47699__$1,msg,msg_name,_,map__47693,map__47693__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__47693,map__47693__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__47707){
var vec__47708 = p__47707;
var seq__47709 = cljs.core.seq.call(null,vec__47708);
var first__47710 = cljs.core.first.call(null,seq__47709);
var seq__47709__$1 = cljs.core.next.call(null,seq__47709);
var map__47711 = first__47710;
var map__47711__$1 = ((((!((map__47711 == null)))?((((map__47711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47711):map__47711);
var msg = map__47711__$1;
var msg_name = cljs.core.get.call(null,map__47711__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47709__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__47713){
var map__47725 = p__47713;
var map__47725__$1 = ((((!((map__47725 == null)))?((((map__47725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47725):map__47725);
var on_compile_warning = cljs.core.get.call(null,map__47725__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__47725__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__47725,map__47725__$1,on_compile_warning,on_compile_fail){
return (function (p__47727){
var vec__47728 = p__47727;
var seq__47729 = cljs.core.seq.call(null,vec__47728);
var first__47730 = cljs.core.first.call(null,seq__47729);
var seq__47729__$1 = cljs.core.next.call(null,seq__47729);
var map__47731 = first__47730;
var map__47731__$1 = ((((!((map__47731 == null)))?((((map__47731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47731):map__47731);
var msg = map__47731__$1;
var msg_name = cljs.core.get.call(null,map__47731__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47729__$1;
var pred__47733 = cljs.core._EQ_;
var expr__47734 = msg_name;
if(cljs.core.truth_(pred__47733.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__47734))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__47733.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__47734))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__47725,map__47725__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__41654__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto__,msg_hist,msg_names,msg){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto__,msg_hist,msg_names,msg){
return (function (state_47942){
var state_val_47943 = (state_47942[(1)]);
if((state_val_47943 === (7))){
var inst_47870 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
if(cljs.core.truth_(inst_47870)){
var statearr_47944_47990 = state_47942__$1;
(statearr_47944_47990[(1)] = (8));

} else {
var statearr_47945_47991 = state_47942__$1;
(statearr_47945_47991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (20))){
var inst_47936 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47946_47992 = state_47942__$1;
(statearr_47946_47992[(2)] = inst_47936);

(statearr_47946_47992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (27))){
var inst_47932 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47947_47993 = state_47942__$1;
(statearr_47947_47993[(2)] = inst_47932);

(statearr_47947_47993[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (1))){
var inst_47863 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_47942__$1 = state_47942;
if(cljs.core.truth_(inst_47863)){
var statearr_47948_47994 = state_47942__$1;
(statearr_47948_47994[(1)] = (2));

} else {
var statearr_47949_47995 = state_47942__$1;
(statearr_47949_47995[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (24))){
var inst_47934 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47950_47996 = state_47942__$1;
(statearr_47950_47996[(2)] = inst_47934);

(statearr_47950_47996[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (4))){
var inst_47940 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47942__$1,inst_47940);
} else {
if((state_val_47943 === (15))){
var inst_47938 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47951_47997 = state_47942__$1;
(statearr_47951_47997[(2)] = inst_47938);

(statearr_47951_47997[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (21))){
var inst_47897 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47952_47998 = state_47942__$1;
(statearr_47952_47998[(2)] = inst_47897);

(statearr_47952_47998[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (31))){
var inst_47921 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_47942__$1 = state_47942;
if(cljs.core.truth_(inst_47921)){
var statearr_47953_47999 = state_47942__$1;
(statearr_47953_47999[(1)] = (34));

} else {
var statearr_47954_48000 = state_47942__$1;
(statearr_47954_48000[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (32))){
var inst_47930 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47955_48001 = state_47942__$1;
(statearr_47955_48001[(2)] = inst_47930);

(statearr_47955_48001[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (33))){
var inst_47919 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47956_48002 = state_47942__$1;
(statearr_47956_48002[(2)] = inst_47919);

(statearr_47956_48002[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (13))){
var inst_47884 = figwheel.client.heads_up.clear.call(null);
var state_47942__$1 = state_47942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47942__$1,(16),inst_47884);
} else {
if((state_val_47943 === (22))){
var inst_47901 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47902 = figwheel.client.heads_up.append_warning_message.call(null,inst_47901);
var state_47942__$1 = state_47942;
var statearr_47957_48003 = state_47942__$1;
(statearr_47957_48003[(2)] = inst_47902);

(statearr_47957_48003[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (36))){
var inst_47928 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47958_48004 = state_47942__$1;
(statearr_47958_48004[(2)] = inst_47928);

(statearr_47958_48004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (29))){
var inst_47912 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47959_48005 = state_47942__$1;
(statearr_47959_48005[(2)] = inst_47912);

(statearr_47959_48005[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (6))){
var inst_47865 = (state_47942[(7)]);
var state_47942__$1 = state_47942;
var statearr_47960_48006 = state_47942__$1;
(statearr_47960_48006[(2)] = inst_47865);

(statearr_47960_48006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (28))){
var inst_47908 = (state_47942[(2)]);
var inst_47909 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47910 = figwheel.client.heads_up.display_warning.call(null,inst_47909);
var state_47942__$1 = (function (){var statearr_47961 = state_47942;
(statearr_47961[(8)] = inst_47908);

return statearr_47961;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47942__$1,(29),inst_47910);
} else {
if((state_val_47943 === (25))){
var inst_47906 = figwheel.client.heads_up.clear.call(null);
var state_47942__$1 = state_47942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47942__$1,(28),inst_47906);
} else {
if((state_val_47943 === (34))){
var inst_47923 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47942__$1 = state_47942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47942__$1,(37),inst_47923);
} else {
if((state_val_47943 === (17))){
var inst_47890 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47962_48007 = state_47942__$1;
(statearr_47962_48007[(2)] = inst_47890);

(statearr_47962_48007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (3))){
var inst_47882 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_47942__$1 = state_47942;
if(cljs.core.truth_(inst_47882)){
var statearr_47963_48008 = state_47942__$1;
(statearr_47963_48008[(1)] = (13));

} else {
var statearr_47964_48009 = state_47942__$1;
(statearr_47964_48009[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (12))){
var inst_47878 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47965_48010 = state_47942__$1;
(statearr_47965_48010[(2)] = inst_47878);

(statearr_47965_48010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (2))){
var inst_47865 = (state_47942[(7)]);
var inst_47865__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_47942__$1 = (function (){var statearr_47966 = state_47942;
(statearr_47966[(7)] = inst_47865__$1);

return statearr_47966;
})();
if(cljs.core.truth_(inst_47865__$1)){
var statearr_47967_48011 = state_47942__$1;
(statearr_47967_48011[(1)] = (5));

} else {
var statearr_47968_48012 = state_47942__$1;
(statearr_47968_48012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (23))){
var inst_47904 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_47942__$1 = state_47942;
if(cljs.core.truth_(inst_47904)){
var statearr_47969_48013 = state_47942__$1;
(statearr_47969_48013[(1)] = (25));

} else {
var statearr_47970_48014 = state_47942__$1;
(statearr_47970_48014[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (35))){
var state_47942__$1 = state_47942;
var statearr_47971_48015 = state_47942__$1;
(statearr_47971_48015[(2)] = null);

(statearr_47971_48015[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (19))){
var inst_47899 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_47942__$1 = state_47942;
if(cljs.core.truth_(inst_47899)){
var statearr_47972_48016 = state_47942__$1;
(statearr_47972_48016[(1)] = (22));

} else {
var statearr_47973_48017 = state_47942__$1;
(statearr_47973_48017[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (11))){
var inst_47874 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47974_48018 = state_47942__$1;
(statearr_47974_48018[(2)] = inst_47874);

(statearr_47974_48018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (9))){
var inst_47876 = figwheel.client.heads_up.clear.call(null);
var state_47942__$1 = state_47942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47942__$1,(12),inst_47876);
} else {
if((state_val_47943 === (5))){
var inst_47867 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_47942__$1 = state_47942;
var statearr_47975_48019 = state_47942__$1;
(statearr_47975_48019[(2)] = inst_47867);

(statearr_47975_48019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (14))){
var inst_47892 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_47942__$1 = state_47942;
if(cljs.core.truth_(inst_47892)){
var statearr_47976_48020 = state_47942__$1;
(statearr_47976_48020[(1)] = (18));

} else {
var statearr_47977_48021 = state_47942__$1;
(statearr_47977_48021[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (26))){
var inst_47914 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_47942__$1 = state_47942;
if(cljs.core.truth_(inst_47914)){
var statearr_47978_48022 = state_47942__$1;
(statearr_47978_48022[(1)] = (30));

} else {
var statearr_47979_48023 = state_47942__$1;
(statearr_47979_48023[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (16))){
var inst_47886 = (state_47942[(2)]);
var inst_47887 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47888 = figwheel.client.heads_up.display_exception.call(null,inst_47887);
var state_47942__$1 = (function (){var statearr_47980 = state_47942;
(statearr_47980[(9)] = inst_47886);

return statearr_47980;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47942__$1,(17),inst_47888);
} else {
if((state_val_47943 === (30))){
var inst_47916 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47917 = figwheel.client.heads_up.display_warning.call(null,inst_47916);
var state_47942__$1 = state_47942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47942__$1,(33),inst_47917);
} else {
if((state_val_47943 === (10))){
var inst_47880 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47981_48024 = state_47942__$1;
(statearr_47981_48024[(2)] = inst_47880);

(statearr_47981_48024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (18))){
var inst_47894 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47895 = figwheel.client.heads_up.display_exception.call(null,inst_47894);
var state_47942__$1 = state_47942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47942__$1,(21),inst_47895);
} else {
if((state_val_47943 === (37))){
var inst_47925 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47982_48025 = state_47942__$1;
(statearr_47982_48025[(2)] = inst_47925);

(statearr_47982_48025[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (8))){
var inst_47872 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47942__$1 = state_47942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47942__$1,(11),inst_47872);
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
});})(c__41654__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__41540__auto__,c__41654__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41541__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41541__auto____0 = (function (){
var statearr_47986 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47986[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41541__auto__);

(statearr_47986[(1)] = (1));

return statearr_47986;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41541__auto____1 = (function (state_47942){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_47942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e47987){if((e47987 instanceof Object)){
var ex__41544__auto__ = e47987;
var statearr_47988_48026 = state_47942;
(statearr_47988_48026[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48027 = state_47942;
state_47942 = G__48027;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41541__auto__ = function(state_47942){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41541__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41541__auto____1.call(this,state_47942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41541__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41541__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto__,msg_hist,msg_names,msg))
})();
var state__41656__auto__ = (function (){var statearr_47989 = f__41655__auto__.call(null);
(statearr_47989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto__);

return statearr_47989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto__,msg_hist,msg_names,msg))
);

return c__41654__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__41654__auto___48090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___48090,ch){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___48090,ch){
return (function (state_48073){
var state_val_48074 = (state_48073[(1)]);
if((state_val_48074 === (1))){
var state_48073__$1 = state_48073;
var statearr_48075_48091 = state_48073__$1;
(statearr_48075_48091[(2)] = null);

(statearr_48075_48091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48074 === (2))){
var state_48073__$1 = state_48073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48073__$1,(4),ch);
} else {
if((state_val_48074 === (3))){
var inst_48071 = (state_48073[(2)]);
var state_48073__$1 = state_48073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48073__$1,inst_48071);
} else {
if((state_val_48074 === (4))){
var inst_48061 = (state_48073[(7)]);
var inst_48061__$1 = (state_48073[(2)]);
var state_48073__$1 = (function (){var statearr_48076 = state_48073;
(statearr_48076[(7)] = inst_48061__$1);

return statearr_48076;
})();
if(cljs.core.truth_(inst_48061__$1)){
var statearr_48077_48092 = state_48073__$1;
(statearr_48077_48092[(1)] = (5));

} else {
var statearr_48078_48093 = state_48073__$1;
(statearr_48078_48093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48074 === (5))){
var inst_48061 = (state_48073[(7)]);
var inst_48063 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_48061);
var state_48073__$1 = state_48073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48073__$1,(8),inst_48063);
} else {
if((state_val_48074 === (6))){
var state_48073__$1 = state_48073;
var statearr_48079_48094 = state_48073__$1;
(statearr_48079_48094[(2)] = null);

(statearr_48079_48094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48074 === (7))){
var inst_48069 = (state_48073[(2)]);
var state_48073__$1 = state_48073;
var statearr_48080_48095 = state_48073__$1;
(statearr_48080_48095[(2)] = inst_48069);

(statearr_48080_48095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48074 === (8))){
var inst_48065 = (state_48073[(2)]);
var state_48073__$1 = (function (){var statearr_48081 = state_48073;
(statearr_48081[(8)] = inst_48065);

return statearr_48081;
})();
var statearr_48082_48096 = state_48073__$1;
(statearr_48082_48096[(2)] = null);

(statearr_48082_48096[(1)] = (2));


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
});})(c__41654__auto___48090,ch))
;
return ((function (switch__41540__auto__,c__41654__auto___48090,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__41541__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__41541__auto____0 = (function (){
var statearr_48086 = [null,null,null,null,null,null,null,null,null];
(statearr_48086[(0)] = figwheel$client$heads_up_plugin_$_state_machine__41541__auto__);

(statearr_48086[(1)] = (1));

return statearr_48086;
});
var figwheel$client$heads_up_plugin_$_state_machine__41541__auto____1 = (function (state_48073){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_48073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e48087){if((e48087 instanceof Object)){
var ex__41544__auto__ = e48087;
var statearr_48088_48097 = state_48073;
(statearr_48088_48097[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48098 = state_48073;
state_48073 = G__48098;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__41541__auto__ = function(state_48073){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__41541__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__41541__auto____1.call(this,state_48073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__41541__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__41541__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___48090,ch))
})();
var state__41656__auto__ = (function (){var statearr_48089 = f__41655__auto__.call(null);
(statearr_48089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___48090);

return statearr_48089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___48090,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__41654__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto__){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto__){
return (function (state_48119){
var state_val_48120 = (state_48119[(1)]);
if((state_val_48120 === (1))){
var inst_48114 = cljs.core.async.timeout.call(null,(3000));
var state_48119__$1 = state_48119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48119__$1,(2),inst_48114);
} else {
if((state_val_48120 === (2))){
var inst_48116 = (state_48119[(2)]);
var inst_48117 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_48119__$1 = (function (){var statearr_48121 = state_48119;
(statearr_48121[(7)] = inst_48116);

return statearr_48121;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48119__$1,inst_48117);
} else {
return null;
}
}
});})(c__41654__auto__))
;
return ((function (switch__41540__auto__,c__41654__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__41541__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__41541__auto____0 = (function (){
var statearr_48125 = [null,null,null,null,null,null,null,null];
(statearr_48125[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__41541__auto__);

(statearr_48125[(1)] = (1));

return statearr_48125;
});
var figwheel$client$enforce_project_plugin_$_state_machine__41541__auto____1 = (function (state_48119){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_48119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e48126){if((e48126 instanceof Object)){
var ex__41544__auto__ = e48126;
var statearr_48127_48129 = state_48119;
(statearr_48127_48129[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48130 = state_48119;
state_48119 = G__48130;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__41541__auto__ = function(state_48119){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__41541__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__41541__auto____1.call(this,state_48119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__41541__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__41541__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto__))
})();
var state__41656__auto__ = (function (){var statearr_48128 = f__41655__auto__.call(null);
(statearr_48128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto__);

return statearr_48128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto__))
);

return c__41654__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6503__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6503__auto__)){
var figwheel_version = temp__6503__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__41654__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto__,figwheel_version,temp__6503__auto__){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto__,figwheel_version,temp__6503__auto__){
return (function (state_48153){
var state_val_48154 = (state_48153[(1)]);
if((state_val_48154 === (1))){
var inst_48147 = cljs.core.async.timeout.call(null,(2000));
var state_48153__$1 = state_48153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48153__$1,(2),inst_48147);
} else {
if((state_val_48154 === (2))){
var inst_48149 = (state_48153[(2)]);
var inst_48150 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_48151 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_48150);
var state_48153__$1 = (function (){var statearr_48155 = state_48153;
(statearr_48155[(7)] = inst_48149);

return statearr_48155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48153__$1,inst_48151);
} else {
return null;
}
}
});})(c__41654__auto__,figwheel_version,temp__6503__auto__))
;
return ((function (switch__41540__auto__,c__41654__auto__,figwheel_version,temp__6503__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41541__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41541__auto____0 = (function (){
var statearr_48159 = [null,null,null,null,null,null,null,null];
(statearr_48159[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41541__auto__);

(statearr_48159[(1)] = (1));

return statearr_48159;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41541__auto____1 = (function (state_48153){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_48153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e48160){if((e48160 instanceof Object)){
var ex__41544__auto__ = e48160;
var statearr_48161_48163 = state_48153;
(statearr_48161_48163[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48164 = state_48153;
state_48153 = G__48164;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41541__auto__ = function(state_48153){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41541__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41541__auto____1.call(this,state_48153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41541__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41541__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto__,figwheel_version,temp__6503__auto__))
})();
var state__41656__auto__ = (function (){var statearr_48162 = f__41655__auto__.call(null);
(statearr_48162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto__);

return statearr_48162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto__,figwheel_version,temp__6503__auto__))
);

return c__41654__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__48165){
var map__48169 = p__48165;
var map__48169__$1 = ((((!((map__48169 == null)))?((((map__48169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48169):map__48169);
var file = cljs.core.get.call(null,map__48169__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48169__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48169__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__48171 = "";
var G__48171__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__48171),cljs.core.str("file "),cljs.core.str(file)].join(''):G__48171);
var G__48171__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__48171__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__48171__$1);
if(cljs.core.truth_((function (){var and__18045__auto__ = line;
if(cljs.core.truth_(and__18045__auto__)){
return column;
} else {
return and__18045__auto__;
}
})())){
return [cljs.core.str(G__48171__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__48171__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__48172){
var map__48179 = p__48172;
var map__48179__$1 = ((((!((map__48179 == null)))?((((map__48179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48179):map__48179);
var ed = map__48179__$1;
var formatted_exception = cljs.core.get.call(null,map__48179__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__48179__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__48179__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__48181_48185 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__48182_48186 = null;
var count__48183_48187 = (0);
var i__48184_48188 = (0);
while(true){
if((i__48184_48188 < count__48183_48187)){
var msg_48189 = cljs.core._nth.call(null,chunk__48182_48186,i__48184_48188);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48189);

var G__48190 = seq__48181_48185;
var G__48191 = chunk__48182_48186;
var G__48192 = count__48183_48187;
var G__48193 = (i__48184_48188 + (1));
seq__48181_48185 = G__48190;
chunk__48182_48186 = G__48191;
count__48183_48187 = G__48192;
i__48184_48188 = G__48193;
continue;
} else {
var temp__6503__auto___48194 = cljs.core.seq.call(null,seq__48181_48185);
if(temp__6503__auto___48194){
var seq__48181_48195__$1 = temp__6503__auto___48194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48181_48195__$1)){
var c__18960__auto___48196 = cljs.core.chunk_first.call(null,seq__48181_48195__$1);
var G__48197 = cljs.core.chunk_rest.call(null,seq__48181_48195__$1);
var G__48198 = c__18960__auto___48196;
var G__48199 = cljs.core.count.call(null,c__18960__auto___48196);
var G__48200 = (0);
seq__48181_48185 = G__48197;
chunk__48182_48186 = G__48198;
count__48183_48187 = G__48199;
i__48184_48188 = G__48200;
continue;
} else {
var msg_48201 = cljs.core.first.call(null,seq__48181_48195__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48201);

var G__48202 = cljs.core.next.call(null,seq__48181_48195__$1);
var G__48203 = null;
var G__48204 = (0);
var G__48205 = (0);
seq__48181_48185 = G__48202;
chunk__48182_48186 = G__48203;
count__48183_48187 = G__48204;
i__48184_48188 = G__48205;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__48206){
var map__48209 = p__48206;
var map__48209__$1 = ((((!((map__48209 == null)))?((((map__48209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48209):map__48209);
var w = map__48209__$1;
var message = cljs.core.get.call(null,map__48209__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18045__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18045__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18045__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__48221 = cljs.core.seq.call(null,plugins);
var chunk__48222 = null;
var count__48223 = (0);
var i__48224 = (0);
while(true){
if((i__48224 < count__48223)){
var vec__48225 = cljs.core._nth.call(null,chunk__48222,i__48224);
var k = cljs.core.nth.call(null,vec__48225,(0),null);
var plugin = cljs.core.nth.call(null,vec__48225,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48231 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48221,chunk__48222,count__48223,i__48224,pl_48231,vec__48225,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_48231.call(null,msg_hist);
});})(seq__48221,chunk__48222,count__48223,i__48224,pl_48231,vec__48225,k,plugin))
);
} else {
}

var G__48232 = seq__48221;
var G__48233 = chunk__48222;
var G__48234 = count__48223;
var G__48235 = (i__48224 + (1));
seq__48221 = G__48232;
chunk__48222 = G__48233;
count__48223 = G__48234;
i__48224 = G__48235;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__48221);
if(temp__6503__auto__){
var seq__48221__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48221__$1)){
var c__18960__auto__ = cljs.core.chunk_first.call(null,seq__48221__$1);
var G__48236 = cljs.core.chunk_rest.call(null,seq__48221__$1);
var G__48237 = c__18960__auto__;
var G__48238 = cljs.core.count.call(null,c__18960__auto__);
var G__48239 = (0);
seq__48221 = G__48236;
chunk__48222 = G__48237;
count__48223 = G__48238;
i__48224 = G__48239;
continue;
} else {
var vec__48228 = cljs.core.first.call(null,seq__48221__$1);
var k = cljs.core.nth.call(null,vec__48228,(0),null);
var plugin = cljs.core.nth.call(null,vec__48228,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48240 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48221,chunk__48222,count__48223,i__48224,pl_48240,vec__48228,k,plugin,seq__48221__$1,temp__6503__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_48240.call(null,msg_hist);
});})(seq__48221,chunk__48222,count__48223,i__48224,pl_48240,vec__48228,k,plugin,seq__48221__$1,temp__6503__auto__))
);
} else {
}

var G__48241 = cljs.core.next.call(null,seq__48221__$1);
var G__48242 = null;
var G__48243 = (0);
var G__48244 = (0);
seq__48221 = G__48241;
chunk__48222 = G__48242;
count__48223 = G__48243;
i__48224 = G__48244;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args48245 = [];
var len__19240__auto___48252 = arguments.length;
var i__19241__auto___48253 = (0);
while(true){
if((i__19241__auto___48253 < len__19240__auto___48252)){
args48245.push((arguments[i__19241__auto___48253]));

var G__48254 = (i__19241__auto___48253 + (1));
i__19241__auto___48253 = G__48254;
continue;
} else {
}
break;
}

var G__48247 = args48245.length;
switch (G__48247) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48245.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__48248_48256 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__48249_48257 = null;
var count__48250_48258 = (0);
var i__48251_48259 = (0);
while(true){
if((i__48251_48259 < count__48250_48258)){
var msg_48260 = cljs.core._nth.call(null,chunk__48249_48257,i__48251_48259);
figwheel.client.socket.handle_incoming_message.call(null,msg_48260);

var G__48261 = seq__48248_48256;
var G__48262 = chunk__48249_48257;
var G__48263 = count__48250_48258;
var G__48264 = (i__48251_48259 + (1));
seq__48248_48256 = G__48261;
chunk__48249_48257 = G__48262;
count__48250_48258 = G__48263;
i__48251_48259 = G__48264;
continue;
} else {
var temp__6503__auto___48265 = cljs.core.seq.call(null,seq__48248_48256);
if(temp__6503__auto___48265){
var seq__48248_48266__$1 = temp__6503__auto___48265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48248_48266__$1)){
var c__18960__auto___48267 = cljs.core.chunk_first.call(null,seq__48248_48266__$1);
var G__48268 = cljs.core.chunk_rest.call(null,seq__48248_48266__$1);
var G__48269 = c__18960__auto___48267;
var G__48270 = cljs.core.count.call(null,c__18960__auto___48267);
var G__48271 = (0);
seq__48248_48256 = G__48268;
chunk__48249_48257 = G__48269;
count__48250_48258 = G__48270;
i__48251_48259 = G__48271;
continue;
} else {
var msg_48272 = cljs.core.first.call(null,seq__48248_48266__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_48272);

var G__48273 = cljs.core.next.call(null,seq__48248_48266__$1);
var G__48274 = null;
var G__48275 = (0);
var G__48276 = (0);
seq__48248_48256 = G__48273;
chunk__48249_48257 = G__48274;
count__48250_48258 = G__48275;
i__48251_48259 = G__48276;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19247__auto__ = [];
var len__19240__auto___48281 = arguments.length;
var i__19241__auto___48282 = (0);
while(true){
if((i__19241__auto___48282 < len__19240__auto___48281)){
args__19247__auto__.push((arguments[i__19241__auto___48282]));

var G__48283 = (i__19241__auto___48282 + (1));
i__19241__auto___48282 = G__48283;
continue;
} else {
}
break;
}

var argseq__19248__auto__ = ((((0) < args__19247__auto__.length))?(new cljs.core.IndexedSeq(args__19247__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19248__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__48278){
var map__48279 = p__48278;
var map__48279__$1 = ((((!((map__48279 == null)))?((((map__48279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48279):map__48279);
var opts = map__48279__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq48277){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48277));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e48285){if((e48285 instanceof Error)){
var e = e48285;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e48285;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__48289){
var map__48290 = p__48289;
var map__48290__$1 = ((((!((map__48290 == null)))?((((map__48290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48290):map__48290);
var msg_name = cljs.core.get.call(null,map__48290__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1470410263870