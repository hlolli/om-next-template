// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35011 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35011 = (function (box,val,meta35012){
this.box = box;
this.val = val;
this.meta35012 = meta35012;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35013,meta35012__$1){
var self__ = this;
var _35013__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35011(self__.box,self__.val,meta35012__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35013){
var self__ = this;
var _35013__$1 = this;
return self__.meta35012;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35011.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"box","box",-1123515375,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null)))], null)),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta35012","meta35012",-1025951994,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35011.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35011.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels35011";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35011.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels35011");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels35011 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels35011(box__$1,val__$1,meta35012){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35011(box__$1,val__$1,meta35012));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35011(cljs$core$async$impl$channels$box,val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__18770__auto__ = (((this$ == null))?null:this$);
var m__18771__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,this$);
} else {
var m__18771__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_35014 = self__.puts.pop();
if((putter_35014 == null)){
} else {
var put_handler_35015 = putter_35014.handler;
var val_35016 = putter_35014.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_35015)){
var put_cb_35017 = cljs.core.async.impl.protocols.commit.call(null,put_handler_35015);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_35017,put_handler_35015,val_35016,putter_35014,this$__$1){
return (function (){
return put_cb_35017.call(null,true);
});})(put_cb_35017,put_handler_35015,val_35016,putter_35014,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str("(not (nil? val))")].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__18045__auto__ = self__.buf;
if(cljs.core.truth_(and__18045__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__18045__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker_35018 = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_35018)){
var take_cb_35019 = cljs.core.async.impl.protocols.commit.call(null,taker_35018);
var val_35020__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_35019,val_35020__$1,taker_35018,done_QMARK_,closed__$1,this$__$1){
return (function (){
return take_cb_35019.call(null,val_35020__$1);
});})(take_cb_35019,val_35020__$1,taker_35018,done_QMARK_,closed__$1,this$__$1))
);
} else {
continue;
}
} else {
}
break;
}

if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str("(< (.-length puts) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var _ = cljs.core.async.impl.protocols.commit.call(null,handler);
var retval = cljs.core.async.impl.channels.box.call(null,cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf));
while(true){
if(cljs.core.truth_(cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))){
} else {
var putter_35021 = self__.puts.pop();
if((putter_35021 == null)){
} else {
var put_handler_35022 = putter_35021.handler;
var val_35023 = putter_35021.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_35022)){
var put_cb_35024 = cljs.core.async.impl.protocols.commit.call(null,put_handler_35022);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_35024,put_handler_35022,val_35023,putter_35021,_,retval,this$__$1){
return (function (){
return put_cb_35024.call(null,true);
});})(put_cb_35024,put_handler_35022,val_35023,putter_35021,_,retval,this$__$1))
);

if(cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val_35023))){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}
} else {
}

continue;
}
}
break;
}

return retval;
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__18045__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__18045__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__18045__auto__;
}
})())){
var has_val = (function (){var and__18045__auto__ = self__.buf;
if(cljs.core.truth_(and__18045__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__18045__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str("(< (.-length takes) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__18045__auto__ = self__.buf;
if(cljs.core.truth_(and__18045__auto__)){
return (self__.puts.length === (0));
} else {
return and__18045__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_35025 = self__.takes.pop();
if((taker_35025 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_35025)){
var take_cb_35026 = cljs.core.async.impl.protocols.commit.call(null,taker_35025);
var val_35027 = (cljs.core.truth_((function (){var and__18045__auto__ = self__.buf;
if(cljs.core.truth_(and__18045__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__18045__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_35026,val_35027,taker_35025,this$__$1){
return (function (){
return take_cb_35026.call(null,val_35027);
});})(take_cb_35026,val_35027,taker_35025,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__18057__auto__ = exh;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var args35028 = [];
var len__19240__auto___35033 = arguments.length;
var i__19241__auto___35034 = (0);
while(true){
if((i__19241__auto___35034 < len__19240__auto___35033)){
args35028.push((arguments[i__19241__auto___35034]));

var G__35035 = (i__19241__auto___35034 + (1));
i__19241__auto___35034 = G__35035;
continue;
} else {
}
break;
}

var G__35030 = args35028.length;
switch (G__35030) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35028.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__35037 = null;
var G__35037__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e35031){var t = e35031;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__35037__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e35032){var t = e35032;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__35037 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__35037__1.call(this,buf__$1);
case 2:
return G__35037__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35037.cljs$core$IFn$_invoke$arity$1 = G__35037__1;
G__35037.cljs$core$IFn$_invoke$arity$2 = G__35037__2;
return G__35037;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1470410183682