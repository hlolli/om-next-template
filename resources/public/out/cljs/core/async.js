// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args41713 = [];
var len__19240__auto___41719 = arguments.length;
var i__19241__auto___41720 = (0);
while(true){
if((i__19241__auto___41720 < len__19240__auto___41719)){
args41713.push((arguments[i__19241__auto___41720]));

var G__41721 = (i__19241__auto___41720 + (1));
i__19241__auto___41720 = G__41721;
continue;
} else {
}
break;
}

var G__41715 = args41713.length;
switch (G__41715) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41713.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async41716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41716 = (function (f,blockable,meta41717){
this.f = f;
this.blockable = blockable;
this.meta41717 = meta41717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41718,meta41717__$1){
var self__ = this;
var _41718__$1 = this;
return (new cljs.core.async.t_cljs$core$async41716(self__.f,self__.blockable,meta41717__$1));
});

cljs.core.async.t_cljs$core$async41716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41718){
var self__ = this;
var _41718__$1 = this;
return self__.meta41717;
});


cljs.core.async.t_cljs$core$async41716.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41716.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41716.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async41716.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async41716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41717","meta41717",1425123858,null)], null);
});

cljs.core.async.t_cljs$core$async41716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41716";

cljs.core.async.t_cljs$core$async41716.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.core.async/t_cljs$core$async41716");
});

cljs.core.async.__GT_t_cljs$core$async41716 = (function cljs$core$async$__GT_t_cljs$core$async41716(f__$1,blockable__$1,meta41717){
return (new cljs.core.async.t_cljs$core$async41716(f__$1,blockable__$1,meta41717));
});

}

return (new cljs.core.async.t_cljs$core$async41716(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args41725 = [];
var len__19240__auto___41728 = arguments.length;
var i__19241__auto___41729 = (0);
while(true){
if((i__19241__auto___41729 < len__19240__auto___41728)){
args41725.push((arguments[i__19241__auto___41729]));

var G__41730 = (i__19241__auto___41729 + (1));
i__19241__auto___41729 = G__41730;
continue;
} else {
}
break;
}

var G__41727 = args41725.length;
switch (G__41727) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41725.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args41732 = [];
var len__19240__auto___41735 = arguments.length;
var i__19241__auto___41736 = (0);
while(true){
if((i__19241__auto___41736 < len__19240__auto___41735)){
args41732.push((arguments[i__19241__auto___41736]));

var G__41737 = (i__19241__auto___41736 + (1));
i__19241__auto___41736 = G__41737;
continue;
} else {
}
break;
}

var G__41734 = args41732.length;
switch (G__41734) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41732.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args41739 = [];
var len__19240__auto___41742 = arguments.length;
var i__19241__auto___41743 = (0);
while(true){
if((i__19241__auto___41743 < len__19240__auto___41742)){
args41739.push((arguments[i__19241__auto___41743]));

var G__41744 = (i__19241__auto___41743 + (1));
i__19241__auto___41743 = G__41744;
continue;
} else {
}
break;
}

var G__41741 = args41739.length;
switch (G__41741) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41739.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_41746 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_41746);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_41746,ret){
return (function (){
return fn1.call(null,val_41746);
});})(val_41746,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args41747 = [];
var len__19240__auto___41750 = arguments.length;
var i__19241__auto___41751 = (0);
while(true){
if((i__19241__auto___41751 < len__19240__auto___41750)){
args41747.push((arguments[i__19241__auto___41751]));

var G__41752 = (i__19241__auto___41751 + (1));
i__19241__auto___41751 = G__41752;
continue;
} else {
}
break;
}

var G__41749 = args41747.length;
switch (G__41749) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41747.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6501__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6501__auto__)){
var ret = temp__6501__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6501__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6501__auto__)){
var retb = temp__6501__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6501__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6501__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19070__auto___41754 = n;
var x_41755 = (0);
while(true){
if((x_41755 < n__19070__auto___41754)){
(a[x_41755] = (0));

var G__41756 = (x_41755 + (1));
x_41755 = G__41756;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__41757 = (i + (1));
i = G__41757;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async41761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41761 = (function (alt_flag,flag,meta41762){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta41762 = meta41762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_41763,meta41762__$1){
var self__ = this;
var _41763__$1 = this;
return (new cljs.core.async.t_cljs$core$async41761(self__.alt_flag,self__.flag,meta41762__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async41761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_41763){
var self__ = this;
var _41763__$1 = this;
return self__.meta41762;
});})(flag))
;


cljs.core.async.t_cljs$core$async41761.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async41761.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41761.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41762","meta41762",999824310,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async41761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41761";

cljs.core.async.t_cljs$core$async41761.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.core.async/t_cljs$core$async41761");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async41761 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41761(alt_flag__$1,flag__$1,meta41762){
return (new cljs.core.async.t_cljs$core$async41761(alt_flag__$1,flag__$1,meta41762));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async41761(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async41767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41767 = (function (alt_handler,flag,cb,meta41768){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta41768 = meta41768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41769,meta41768__$1){
var self__ = this;
var _41769__$1 = this;
return (new cljs.core.async.t_cljs$core$async41767(self__.alt_handler,self__.flag,self__.cb,meta41768__$1));
});

cljs.core.async.t_cljs$core$async41767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41769){
var self__ = this;
var _41769__$1 = this;
return self__.meta41768;
});


cljs.core.async.t_cljs$core$async41767.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async41767.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async41767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41768","meta41768",1586712051,null)], null);
});

cljs.core.async.t_cljs$core$async41767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41767";

cljs.core.async.t_cljs$core$async41767.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.core.async/t_cljs$core$async41767");
});

cljs.core.async.__GT_t_cljs$core$async41767 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41767(alt_handler__$1,flag__$1,cb__$1,meta41768){
return (new cljs.core.async.t_cljs$core$async41767(alt_handler__$1,flag__$1,cb__$1,meta41768));
});

}

return (new cljs.core.async.t_cljs$core$async41767(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41770_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41770_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41771_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41771_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18057__auto__ = wport;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41772 = (i + (1));
i = G__41772;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18057__auto__ = ret;
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6503__auto__ = (function (){var and__18045__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18045__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18045__auto__;
}
})();
if(cljs.core.truth_(temp__6503__auto__)){
var got = temp__6503__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19247__auto__ = [];
var len__19240__auto___41778 = arguments.length;
var i__19241__auto___41779 = (0);
while(true){
if((i__19241__auto___41779 < len__19240__auto___41778)){
args__19247__auto__.push((arguments[i__19241__auto___41779]));

var G__41780 = (i__19241__auto___41779 + (1));
i__19241__auto___41779 = G__41780;
continue;
} else {
}
break;
}

var argseq__19248__auto__ = ((((1) < args__19247__auto__.length))?(new cljs.core.IndexedSeq(args__19247__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19248__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41775){
var map__41776 = p__41775;
var map__41776__$1 = ((((!((map__41776 == null)))?((((map__41776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41776):map__41776);
var opts = map__41776__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41773){
var G__41774 = cljs.core.first.call(null,seq41773);
var seq41773__$1 = cljs.core.next.call(null,seq41773);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41774,seq41773__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args41781 = [];
var len__19240__auto___41831 = arguments.length;
var i__19241__auto___41832 = (0);
while(true){
if((i__19241__auto___41832 < len__19240__auto___41831)){
args41781.push((arguments[i__19241__auto___41832]));

var G__41833 = (i__19241__auto___41832 + (1));
i__19241__auto___41832 = G__41833;
continue;
} else {
}
break;
}

var G__41783 = args41781.length;
switch (G__41783) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41781.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41654__auto___41835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___41835){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___41835){
return (function (state_41807){
var state_val_41808 = (state_41807[(1)]);
if((state_val_41808 === (7))){
var inst_41803 = (state_41807[(2)]);
var state_41807__$1 = state_41807;
var statearr_41809_41836 = state_41807__$1;
(statearr_41809_41836[(2)] = inst_41803);

(statearr_41809_41836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41808 === (1))){
var state_41807__$1 = state_41807;
var statearr_41810_41837 = state_41807__$1;
(statearr_41810_41837[(2)] = null);

(statearr_41810_41837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41808 === (4))){
var inst_41786 = (state_41807[(7)]);
var inst_41786__$1 = (state_41807[(2)]);
var inst_41787 = (inst_41786__$1 == null);
var state_41807__$1 = (function (){var statearr_41811 = state_41807;
(statearr_41811[(7)] = inst_41786__$1);

return statearr_41811;
})();
if(cljs.core.truth_(inst_41787)){
var statearr_41812_41838 = state_41807__$1;
(statearr_41812_41838[(1)] = (5));

} else {
var statearr_41813_41839 = state_41807__$1;
(statearr_41813_41839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41808 === (13))){
var state_41807__$1 = state_41807;
var statearr_41814_41840 = state_41807__$1;
(statearr_41814_41840[(2)] = null);

(statearr_41814_41840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41808 === (6))){
var inst_41786 = (state_41807[(7)]);
var state_41807__$1 = state_41807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41807__$1,(11),to,inst_41786);
} else {
if((state_val_41808 === (3))){
var inst_41805 = (state_41807[(2)]);
var state_41807__$1 = state_41807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41807__$1,inst_41805);
} else {
if((state_val_41808 === (12))){
var state_41807__$1 = state_41807;
var statearr_41815_41841 = state_41807__$1;
(statearr_41815_41841[(2)] = null);

(statearr_41815_41841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41808 === (2))){
var state_41807__$1 = state_41807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41807__$1,(4),from);
} else {
if((state_val_41808 === (11))){
var inst_41796 = (state_41807[(2)]);
var state_41807__$1 = state_41807;
if(cljs.core.truth_(inst_41796)){
var statearr_41816_41842 = state_41807__$1;
(statearr_41816_41842[(1)] = (12));

} else {
var statearr_41817_41843 = state_41807__$1;
(statearr_41817_41843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41808 === (9))){
var state_41807__$1 = state_41807;
var statearr_41818_41844 = state_41807__$1;
(statearr_41818_41844[(2)] = null);

(statearr_41818_41844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41808 === (5))){
var state_41807__$1 = state_41807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41819_41845 = state_41807__$1;
(statearr_41819_41845[(1)] = (8));

} else {
var statearr_41820_41846 = state_41807__$1;
(statearr_41820_41846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41808 === (14))){
var inst_41801 = (state_41807[(2)]);
var state_41807__$1 = state_41807;
var statearr_41821_41847 = state_41807__$1;
(statearr_41821_41847[(2)] = inst_41801);

(statearr_41821_41847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41808 === (10))){
var inst_41793 = (state_41807[(2)]);
var state_41807__$1 = state_41807;
var statearr_41822_41848 = state_41807__$1;
(statearr_41822_41848[(2)] = inst_41793);

(statearr_41822_41848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41808 === (8))){
var inst_41790 = cljs.core.async.close_BANG_.call(null,to);
var state_41807__$1 = state_41807;
var statearr_41823_41849 = state_41807__$1;
(statearr_41823_41849[(2)] = inst_41790);

(statearr_41823_41849[(1)] = (10));


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
});})(c__41654__auto___41835))
;
return ((function (switch__41540__auto__,c__41654__auto___41835){
return (function() {
var cljs$core$async$state_machine__41541__auto__ = null;
var cljs$core$async$state_machine__41541__auto____0 = (function (){
var statearr_41827 = [null,null,null,null,null,null,null,null];
(statearr_41827[(0)] = cljs$core$async$state_machine__41541__auto__);

(statearr_41827[(1)] = (1));

return statearr_41827;
});
var cljs$core$async$state_machine__41541__auto____1 = (function (state_41807){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_41807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e41828){if((e41828 instanceof Object)){
var ex__41544__auto__ = e41828;
var statearr_41829_41850 = state_41807;
(statearr_41829_41850[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41851 = state_41807;
state_41807 = G__41851;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$state_machine__41541__auto__ = function(state_41807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41541__auto____1.call(this,state_41807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41541__auto____0;
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41541__auto____1;
return cljs$core$async$state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___41835))
})();
var state__41656__auto__ = (function (){var statearr_41830 = f__41655__auto__.call(null);
(statearr_41830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___41835);

return statearr_41830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___41835))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__42039){
var vec__42040 = p__42039;
var v = cljs.core.nth.call(null,vec__42040,(0),null);
var p = cljs.core.nth.call(null,vec__42040,(1),null);
var job = vec__42040;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__41654__auto___42226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___42226,res,vec__42040,v,p,job,jobs,results){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___42226,res,vec__42040,v,p,job,jobs,results){
return (function (state_42047){
var state_val_42048 = (state_42047[(1)]);
if((state_val_42048 === (1))){
var state_42047__$1 = state_42047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42047__$1,(2),res,v);
} else {
if((state_val_42048 === (2))){
var inst_42044 = (state_42047[(2)]);
var inst_42045 = cljs.core.async.close_BANG_.call(null,res);
var state_42047__$1 = (function (){var statearr_42049 = state_42047;
(statearr_42049[(7)] = inst_42044);

return statearr_42049;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42047__$1,inst_42045);
} else {
return null;
}
}
});})(c__41654__auto___42226,res,vec__42040,v,p,job,jobs,results))
;
return ((function (switch__41540__auto__,c__41654__auto___42226,res,vec__42040,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____0 = (function (){
var statearr_42053 = [null,null,null,null,null,null,null,null];
(statearr_42053[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__);

(statearr_42053[(1)] = (1));

return statearr_42053;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____1 = (function (state_42047){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_42047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e42054){if((e42054 instanceof Object)){
var ex__41544__auto__ = e42054;
var statearr_42055_42227 = state_42047;
(statearr_42055_42227[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42228 = state_42047;
state_42047 = G__42228;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__ = function(state_42047){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____1.call(this,state_42047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___42226,res,vec__42040,v,p,job,jobs,results))
})();
var state__41656__auto__ = (function (){var statearr_42056 = f__41655__auto__.call(null);
(statearr_42056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___42226);

return statearr_42056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___42226,res,vec__42040,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42057){
var vec__42058 = p__42057;
var v = cljs.core.nth.call(null,vec__42058,(0),null);
var p = cljs.core.nth.call(null,vec__42058,(1),null);
var job = vec__42058;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19070__auto___42229 = n;
var __42230 = (0);
while(true){
if((__42230 < n__19070__auto___42229)){
var G__42061_42231 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__42061_42231) {
case "compute":
var c__41654__auto___42233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42230,c__41654__auto___42233,G__42061_42231,n__19070__auto___42229,jobs,results,process,async){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (__42230,c__41654__auto___42233,G__42061_42231,n__19070__auto___42229,jobs,results,process,async){
return (function (state_42074){
var state_val_42075 = (state_42074[(1)]);
if((state_val_42075 === (1))){
var state_42074__$1 = state_42074;
var statearr_42076_42234 = state_42074__$1;
(statearr_42076_42234[(2)] = null);

(statearr_42076_42234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (2))){
var state_42074__$1 = state_42074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42074__$1,(4),jobs);
} else {
if((state_val_42075 === (3))){
var inst_42072 = (state_42074[(2)]);
var state_42074__$1 = state_42074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42074__$1,inst_42072);
} else {
if((state_val_42075 === (4))){
var inst_42064 = (state_42074[(2)]);
var inst_42065 = process.call(null,inst_42064);
var state_42074__$1 = state_42074;
if(cljs.core.truth_(inst_42065)){
var statearr_42077_42235 = state_42074__$1;
(statearr_42077_42235[(1)] = (5));

} else {
var statearr_42078_42236 = state_42074__$1;
(statearr_42078_42236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (5))){
var state_42074__$1 = state_42074;
var statearr_42079_42237 = state_42074__$1;
(statearr_42079_42237[(2)] = null);

(statearr_42079_42237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (6))){
var state_42074__$1 = state_42074;
var statearr_42080_42238 = state_42074__$1;
(statearr_42080_42238[(2)] = null);

(statearr_42080_42238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (7))){
var inst_42070 = (state_42074[(2)]);
var state_42074__$1 = state_42074;
var statearr_42081_42239 = state_42074__$1;
(statearr_42081_42239[(2)] = inst_42070);

(statearr_42081_42239[(1)] = (3));


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
});})(__42230,c__41654__auto___42233,G__42061_42231,n__19070__auto___42229,jobs,results,process,async))
;
return ((function (__42230,switch__41540__auto__,c__41654__auto___42233,G__42061_42231,n__19070__auto___42229,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____0 = (function (){
var statearr_42085 = [null,null,null,null,null,null,null];
(statearr_42085[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__);

(statearr_42085[(1)] = (1));

return statearr_42085;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____1 = (function (state_42074){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_42074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e42086){if((e42086 instanceof Object)){
var ex__41544__auto__ = e42086;
var statearr_42087_42240 = state_42074;
(statearr_42087_42240[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42241 = state_42074;
state_42074 = G__42241;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__ = function(state_42074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____1.call(this,state_42074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__;
})()
;})(__42230,switch__41540__auto__,c__41654__auto___42233,G__42061_42231,n__19070__auto___42229,jobs,results,process,async))
})();
var state__41656__auto__ = (function (){var statearr_42088 = f__41655__auto__.call(null);
(statearr_42088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___42233);

return statearr_42088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(__42230,c__41654__auto___42233,G__42061_42231,n__19070__auto___42229,jobs,results,process,async))
);


break;
case "async":
var c__41654__auto___42242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42230,c__41654__auto___42242,G__42061_42231,n__19070__auto___42229,jobs,results,process,async){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (__42230,c__41654__auto___42242,G__42061_42231,n__19070__auto___42229,jobs,results,process,async){
return (function (state_42101){
var state_val_42102 = (state_42101[(1)]);
if((state_val_42102 === (1))){
var state_42101__$1 = state_42101;
var statearr_42103_42243 = state_42101__$1;
(statearr_42103_42243[(2)] = null);

(statearr_42103_42243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42102 === (2))){
var state_42101__$1 = state_42101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42101__$1,(4),jobs);
} else {
if((state_val_42102 === (3))){
var inst_42099 = (state_42101[(2)]);
var state_42101__$1 = state_42101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42101__$1,inst_42099);
} else {
if((state_val_42102 === (4))){
var inst_42091 = (state_42101[(2)]);
var inst_42092 = async.call(null,inst_42091);
var state_42101__$1 = state_42101;
if(cljs.core.truth_(inst_42092)){
var statearr_42104_42244 = state_42101__$1;
(statearr_42104_42244[(1)] = (5));

} else {
var statearr_42105_42245 = state_42101__$1;
(statearr_42105_42245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42102 === (5))){
var state_42101__$1 = state_42101;
var statearr_42106_42246 = state_42101__$1;
(statearr_42106_42246[(2)] = null);

(statearr_42106_42246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42102 === (6))){
var state_42101__$1 = state_42101;
var statearr_42107_42247 = state_42101__$1;
(statearr_42107_42247[(2)] = null);

(statearr_42107_42247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42102 === (7))){
var inst_42097 = (state_42101[(2)]);
var state_42101__$1 = state_42101;
var statearr_42108_42248 = state_42101__$1;
(statearr_42108_42248[(2)] = inst_42097);

(statearr_42108_42248[(1)] = (3));


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
});})(__42230,c__41654__auto___42242,G__42061_42231,n__19070__auto___42229,jobs,results,process,async))
;
return ((function (__42230,switch__41540__auto__,c__41654__auto___42242,G__42061_42231,n__19070__auto___42229,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____0 = (function (){
var statearr_42112 = [null,null,null,null,null,null,null];
(statearr_42112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__);

(statearr_42112[(1)] = (1));

return statearr_42112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____1 = (function (state_42101){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_42101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e42113){if((e42113 instanceof Object)){
var ex__41544__auto__ = e42113;
var statearr_42114_42249 = state_42101;
(statearr_42114_42249[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42250 = state_42101;
state_42101 = G__42250;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__ = function(state_42101){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____1.call(this,state_42101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__;
})()
;})(__42230,switch__41540__auto__,c__41654__auto___42242,G__42061_42231,n__19070__auto___42229,jobs,results,process,async))
})();
var state__41656__auto__ = (function (){var statearr_42115 = f__41655__auto__.call(null);
(statearr_42115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___42242);

return statearr_42115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(__42230,c__41654__auto___42242,G__42061_42231,n__19070__auto___42229,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__42251 = (__42230 + (1));
__42230 = G__42251;
continue;
} else {
}
break;
}

var c__41654__auto___42252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___42252,jobs,results,process,async){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___42252,jobs,results,process,async){
return (function (state_42137){
var state_val_42138 = (state_42137[(1)]);
if((state_val_42138 === (1))){
var state_42137__$1 = state_42137;
var statearr_42139_42253 = state_42137__$1;
(statearr_42139_42253[(2)] = null);

(statearr_42139_42253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42138 === (2))){
var state_42137__$1 = state_42137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42137__$1,(4),from);
} else {
if((state_val_42138 === (3))){
var inst_42135 = (state_42137[(2)]);
var state_42137__$1 = state_42137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42137__$1,inst_42135);
} else {
if((state_val_42138 === (4))){
var inst_42118 = (state_42137[(7)]);
var inst_42118__$1 = (state_42137[(2)]);
var inst_42119 = (inst_42118__$1 == null);
var state_42137__$1 = (function (){var statearr_42140 = state_42137;
(statearr_42140[(7)] = inst_42118__$1);

return statearr_42140;
})();
if(cljs.core.truth_(inst_42119)){
var statearr_42141_42254 = state_42137__$1;
(statearr_42141_42254[(1)] = (5));

} else {
var statearr_42142_42255 = state_42137__$1;
(statearr_42142_42255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42138 === (5))){
var inst_42121 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42137__$1 = state_42137;
var statearr_42143_42256 = state_42137__$1;
(statearr_42143_42256[(2)] = inst_42121);

(statearr_42143_42256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42138 === (6))){
var inst_42118 = (state_42137[(7)]);
var inst_42123 = (state_42137[(8)]);
var inst_42123__$1 = cljs.core.async.chan.call(null,(1));
var inst_42124 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42125 = [inst_42118,inst_42123__$1];
var inst_42126 = (new cljs.core.PersistentVector(null,2,(5),inst_42124,inst_42125,null));
var state_42137__$1 = (function (){var statearr_42144 = state_42137;
(statearr_42144[(8)] = inst_42123__$1);

return statearr_42144;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42137__$1,(8),jobs,inst_42126);
} else {
if((state_val_42138 === (7))){
var inst_42133 = (state_42137[(2)]);
var state_42137__$1 = state_42137;
var statearr_42145_42257 = state_42137__$1;
(statearr_42145_42257[(2)] = inst_42133);

(statearr_42145_42257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42138 === (8))){
var inst_42123 = (state_42137[(8)]);
var inst_42128 = (state_42137[(2)]);
var state_42137__$1 = (function (){var statearr_42146 = state_42137;
(statearr_42146[(9)] = inst_42128);

return statearr_42146;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42137__$1,(9),results,inst_42123);
} else {
if((state_val_42138 === (9))){
var inst_42130 = (state_42137[(2)]);
var state_42137__$1 = (function (){var statearr_42147 = state_42137;
(statearr_42147[(10)] = inst_42130);

return statearr_42147;
})();
var statearr_42148_42258 = state_42137__$1;
(statearr_42148_42258[(2)] = null);

(statearr_42148_42258[(1)] = (2));


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
});})(c__41654__auto___42252,jobs,results,process,async))
;
return ((function (switch__41540__auto__,c__41654__auto___42252,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____0 = (function (){
var statearr_42152 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42152[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__);

(statearr_42152[(1)] = (1));

return statearr_42152;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____1 = (function (state_42137){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_42137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e42153){if((e42153 instanceof Object)){
var ex__41544__auto__ = e42153;
var statearr_42154_42259 = state_42137;
(statearr_42154_42259[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42260 = state_42137;
state_42137 = G__42260;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__ = function(state_42137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____1.call(this,state_42137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___42252,jobs,results,process,async))
})();
var state__41656__auto__ = (function (){var statearr_42155 = f__41655__auto__.call(null);
(statearr_42155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___42252);

return statearr_42155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___42252,jobs,results,process,async))
);


var c__41654__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto__,jobs,results,process,async){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto__,jobs,results,process,async){
return (function (state_42193){
var state_val_42194 = (state_42193[(1)]);
if((state_val_42194 === (7))){
var inst_42189 = (state_42193[(2)]);
var state_42193__$1 = state_42193;
var statearr_42195_42261 = state_42193__$1;
(statearr_42195_42261[(2)] = inst_42189);

(statearr_42195_42261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (20))){
var state_42193__$1 = state_42193;
var statearr_42196_42262 = state_42193__$1;
(statearr_42196_42262[(2)] = null);

(statearr_42196_42262[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (1))){
var state_42193__$1 = state_42193;
var statearr_42197_42263 = state_42193__$1;
(statearr_42197_42263[(2)] = null);

(statearr_42197_42263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (4))){
var inst_42158 = (state_42193[(7)]);
var inst_42158__$1 = (state_42193[(2)]);
var inst_42159 = (inst_42158__$1 == null);
var state_42193__$1 = (function (){var statearr_42198 = state_42193;
(statearr_42198[(7)] = inst_42158__$1);

return statearr_42198;
})();
if(cljs.core.truth_(inst_42159)){
var statearr_42199_42264 = state_42193__$1;
(statearr_42199_42264[(1)] = (5));

} else {
var statearr_42200_42265 = state_42193__$1;
(statearr_42200_42265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (15))){
var inst_42171 = (state_42193[(8)]);
var state_42193__$1 = state_42193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42193__$1,(18),to,inst_42171);
} else {
if((state_val_42194 === (21))){
var inst_42184 = (state_42193[(2)]);
var state_42193__$1 = state_42193;
var statearr_42201_42266 = state_42193__$1;
(statearr_42201_42266[(2)] = inst_42184);

(statearr_42201_42266[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (13))){
var inst_42186 = (state_42193[(2)]);
var state_42193__$1 = (function (){var statearr_42202 = state_42193;
(statearr_42202[(9)] = inst_42186);

return statearr_42202;
})();
var statearr_42203_42267 = state_42193__$1;
(statearr_42203_42267[(2)] = null);

(statearr_42203_42267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (6))){
var inst_42158 = (state_42193[(7)]);
var state_42193__$1 = state_42193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42193__$1,(11),inst_42158);
} else {
if((state_val_42194 === (17))){
var inst_42179 = (state_42193[(2)]);
var state_42193__$1 = state_42193;
if(cljs.core.truth_(inst_42179)){
var statearr_42204_42268 = state_42193__$1;
(statearr_42204_42268[(1)] = (19));

} else {
var statearr_42205_42269 = state_42193__$1;
(statearr_42205_42269[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (3))){
var inst_42191 = (state_42193[(2)]);
var state_42193__$1 = state_42193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42193__$1,inst_42191);
} else {
if((state_val_42194 === (12))){
var inst_42168 = (state_42193[(10)]);
var state_42193__$1 = state_42193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42193__$1,(14),inst_42168);
} else {
if((state_val_42194 === (2))){
var state_42193__$1 = state_42193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42193__$1,(4),results);
} else {
if((state_val_42194 === (19))){
var state_42193__$1 = state_42193;
var statearr_42206_42270 = state_42193__$1;
(statearr_42206_42270[(2)] = null);

(statearr_42206_42270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (11))){
var inst_42168 = (state_42193[(2)]);
var state_42193__$1 = (function (){var statearr_42207 = state_42193;
(statearr_42207[(10)] = inst_42168);

return statearr_42207;
})();
var statearr_42208_42271 = state_42193__$1;
(statearr_42208_42271[(2)] = null);

(statearr_42208_42271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (9))){
var state_42193__$1 = state_42193;
var statearr_42209_42272 = state_42193__$1;
(statearr_42209_42272[(2)] = null);

(statearr_42209_42272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (5))){
var state_42193__$1 = state_42193;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42210_42273 = state_42193__$1;
(statearr_42210_42273[(1)] = (8));

} else {
var statearr_42211_42274 = state_42193__$1;
(statearr_42211_42274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (14))){
var inst_42173 = (state_42193[(11)]);
var inst_42171 = (state_42193[(8)]);
var inst_42171__$1 = (state_42193[(2)]);
var inst_42172 = (inst_42171__$1 == null);
var inst_42173__$1 = cljs.core.not.call(null,inst_42172);
var state_42193__$1 = (function (){var statearr_42212 = state_42193;
(statearr_42212[(11)] = inst_42173__$1);

(statearr_42212[(8)] = inst_42171__$1);

return statearr_42212;
})();
if(inst_42173__$1){
var statearr_42213_42275 = state_42193__$1;
(statearr_42213_42275[(1)] = (15));

} else {
var statearr_42214_42276 = state_42193__$1;
(statearr_42214_42276[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (16))){
var inst_42173 = (state_42193[(11)]);
var state_42193__$1 = state_42193;
var statearr_42215_42277 = state_42193__$1;
(statearr_42215_42277[(2)] = inst_42173);

(statearr_42215_42277[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (10))){
var inst_42165 = (state_42193[(2)]);
var state_42193__$1 = state_42193;
var statearr_42216_42278 = state_42193__$1;
(statearr_42216_42278[(2)] = inst_42165);

(statearr_42216_42278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (18))){
var inst_42176 = (state_42193[(2)]);
var state_42193__$1 = state_42193;
var statearr_42217_42279 = state_42193__$1;
(statearr_42217_42279[(2)] = inst_42176);

(statearr_42217_42279[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (8))){
var inst_42162 = cljs.core.async.close_BANG_.call(null,to);
var state_42193__$1 = state_42193;
var statearr_42218_42280 = state_42193__$1;
(statearr_42218_42280[(2)] = inst_42162);

(statearr_42218_42280[(1)] = (10));


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
});})(c__41654__auto__,jobs,results,process,async))
;
return ((function (switch__41540__auto__,c__41654__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____0 = (function (){
var statearr_42222 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42222[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__);

(statearr_42222[(1)] = (1));

return statearr_42222;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____1 = (function (state_42193){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_42193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e42223){if((e42223 instanceof Object)){
var ex__41544__auto__ = e42223;
var statearr_42224_42281 = state_42193;
(statearr_42224_42281[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42282 = state_42193;
state_42193 = G__42282;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__ = function(state_42193){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____1.call(this,state_42193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto__,jobs,results,process,async))
})();
var state__41656__auto__ = (function (){var statearr_42225 = f__41655__auto__.call(null);
(statearr_42225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto__);

return statearr_42225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto__,jobs,results,process,async))
);

return c__41654__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args42283 = [];
var len__19240__auto___42286 = arguments.length;
var i__19241__auto___42287 = (0);
while(true){
if((i__19241__auto___42287 < len__19240__auto___42286)){
args42283.push((arguments[i__19241__auto___42287]));

var G__42288 = (i__19241__auto___42287 + (1));
i__19241__auto___42287 = G__42288;
continue;
} else {
}
break;
}

var G__42285 = args42283.length;
switch (G__42285) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42283.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args42290 = [];
var len__19240__auto___42293 = arguments.length;
var i__19241__auto___42294 = (0);
while(true){
if((i__19241__auto___42294 < len__19240__auto___42293)){
args42290.push((arguments[i__19241__auto___42294]));

var G__42295 = (i__19241__auto___42294 + (1));
i__19241__auto___42294 = G__42295;
continue;
} else {
}
break;
}

var G__42292 = args42290.length;
switch (G__42292) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42290.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args42297 = [];
var len__19240__auto___42350 = arguments.length;
var i__19241__auto___42351 = (0);
while(true){
if((i__19241__auto___42351 < len__19240__auto___42350)){
args42297.push((arguments[i__19241__auto___42351]));

var G__42352 = (i__19241__auto___42351 + (1));
i__19241__auto___42351 = G__42352;
continue;
} else {
}
break;
}

var G__42299 = args42297.length;
switch (G__42299) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42297.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__41654__auto___42354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___42354,tc,fc){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___42354,tc,fc){
return (function (state_42325){
var state_val_42326 = (state_42325[(1)]);
if((state_val_42326 === (7))){
var inst_42321 = (state_42325[(2)]);
var state_42325__$1 = state_42325;
var statearr_42327_42355 = state_42325__$1;
(statearr_42327_42355[(2)] = inst_42321);

(statearr_42327_42355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (1))){
var state_42325__$1 = state_42325;
var statearr_42328_42356 = state_42325__$1;
(statearr_42328_42356[(2)] = null);

(statearr_42328_42356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (4))){
var inst_42302 = (state_42325[(7)]);
var inst_42302__$1 = (state_42325[(2)]);
var inst_42303 = (inst_42302__$1 == null);
var state_42325__$1 = (function (){var statearr_42329 = state_42325;
(statearr_42329[(7)] = inst_42302__$1);

return statearr_42329;
})();
if(cljs.core.truth_(inst_42303)){
var statearr_42330_42357 = state_42325__$1;
(statearr_42330_42357[(1)] = (5));

} else {
var statearr_42331_42358 = state_42325__$1;
(statearr_42331_42358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (13))){
var state_42325__$1 = state_42325;
var statearr_42332_42359 = state_42325__$1;
(statearr_42332_42359[(2)] = null);

(statearr_42332_42359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (6))){
var inst_42302 = (state_42325[(7)]);
var inst_42308 = p.call(null,inst_42302);
var state_42325__$1 = state_42325;
if(cljs.core.truth_(inst_42308)){
var statearr_42333_42360 = state_42325__$1;
(statearr_42333_42360[(1)] = (9));

} else {
var statearr_42334_42361 = state_42325__$1;
(statearr_42334_42361[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (3))){
var inst_42323 = (state_42325[(2)]);
var state_42325__$1 = state_42325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42325__$1,inst_42323);
} else {
if((state_val_42326 === (12))){
var state_42325__$1 = state_42325;
var statearr_42335_42362 = state_42325__$1;
(statearr_42335_42362[(2)] = null);

(statearr_42335_42362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (2))){
var state_42325__$1 = state_42325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42325__$1,(4),ch);
} else {
if((state_val_42326 === (11))){
var inst_42302 = (state_42325[(7)]);
var inst_42312 = (state_42325[(2)]);
var state_42325__$1 = state_42325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42325__$1,(8),inst_42312,inst_42302);
} else {
if((state_val_42326 === (9))){
var state_42325__$1 = state_42325;
var statearr_42336_42363 = state_42325__$1;
(statearr_42336_42363[(2)] = tc);

(statearr_42336_42363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (5))){
var inst_42305 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42306 = cljs.core.async.close_BANG_.call(null,fc);
var state_42325__$1 = (function (){var statearr_42337 = state_42325;
(statearr_42337[(8)] = inst_42305);

return statearr_42337;
})();
var statearr_42338_42364 = state_42325__$1;
(statearr_42338_42364[(2)] = inst_42306);

(statearr_42338_42364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (14))){
var inst_42319 = (state_42325[(2)]);
var state_42325__$1 = state_42325;
var statearr_42339_42365 = state_42325__$1;
(statearr_42339_42365[(2)] = inst_42319);

(statearr_42339_42365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (10))){
var state_42325__$1 = state_42325;
var statearr_42340_42366 = state_42325__$1;
(statearr_42340_42366[(2)] = fc);

(statearr_42340_42366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42326 === (8))){
var inst_42314 = (state_42325[(2)]);
var state_42325__$1 = state_42325;
if(cljs.core.truth_(inst_42314)){
var statearr_42341_42367 = state_42325__$1;
(statearr_42341_42367[(1)] = (12));

} else {
var statearr_42342_42368 = state_42325__$1;
(statearr_42342_42368[(1)] = (13));

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
});})(c__41654__auto___42354,tc,fc))
;
return ((function (switch__41540__auto__,c__41654__auto___42354,tc,fc){
return (function() {
var cljs$core$async$state_machine__41541__auto__ = null;
var cljs$core$async$state_machine__41541__auto____0 = (function (){
var statearr_42346 = [null,null,null,null,null,null,null,null,null];
(statearr_42346[(0)] = cljs$core$async$state_machine__41541__auto__);

(statearr_42346[(1)] = (1));

return statearr_42346;
});
var cljs$core$async$state_machine__41541__auto____1 = (function (state_42325){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_42325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e42347){if((e42347 instanceof Object)){
var ex__41544__auto__ = e42347;
var statearr_42348_42369 = state_42325;
(statearr_42348_42369[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42370 = state_42325;
state_42325 = G__42370;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$state_machine__41541__auto__ = function(state_42325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41541__auto____1.call(this,state_42325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41541__auto____0;
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41541__auto____1;
return cljs$core$async$state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___42354,tc,fc))
})();
var state__41656__auto__ = (function (){var statearr_42349 = f__41655__auto__.call(null);
(statearr_42349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___42354);

return statearr_42349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___42354,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__41654__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto__){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto__){
return (function (state_42434){
var state_val_42435 = (state_42434[(1)]);
if((state_val_42435 === (7))){
var inst_42430 = (state_42434[(2)]);
var state_42434__$1 = state_42434;
var statearr_42436_42457 = state_42434__$1;
(statearr_42436_42457[(2)] = inst_42430);

(statearr_42436_42457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42435 === (1))){
var inst_42414 = init;
var state_42434__$1 = (function (){var statearr_42437 = state_42434;
(statearr_42437[(7)] = inst_42414);

return statearr_42437;
})();
var statearr_42438_42458 = state_42434__$1;
(statearr_42438_42458[(2)] = null);

(statearr_42438_42458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42435 === (4))){
var inst_42417 = (state_42434[(8)]);
var inst_42417__$1 = (state_42434[(2)]);
var inst_42418 = (inst_42417__$1 == null);
var state_42434__$1 = (function (){var statearr_42439 = state_42434;
(statearr_42439[(8)] = inst_42417__$1);

return statearr_42439;
})();
if(cljs.core.truth_(inst_42418)){
var statearr_42440_42459 = state_42434__$1;
(statearr_42440_42459[(1)] = (5));

} else {
var statearr_42441_42460 = state_42434__$1;
(statearr_42441_42460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42435 === (6))){
var inst_42421 = (state_42434[(9)]);
var inst_42417 = (state_42434[(8)]);
var inst_42414 = (state_42434[(7)]);
var inst_42421__$1 = f.call(null,inst_42414,inst_42417);
var inst_42422 = cljs.core.reduced_QMARK_.call(null,inst_42421__$1);
var state_42434__$1 = (function (){var statearr_42442 = state_42434;
(statearr_42442[(9)] = inst_42421__$1);

return statearr_42442;
})();
if(inst_42422){
var statearr_42443_42461 = state_42434__$1;
(statearr_42443_42461[(1)] = (8));

} else {
var statearr_42444_42462 = state_42434__$1;
(statearr_42444_42462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42435 === (3))){
var inst_42432 = (state_42434[(2)]);
var state_42434__$1 = state_42434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42434__$1,inst_42432);
} else {
if((state_val_42435 === (2))){
var state_42434__$1 = state_42434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42434__$1,(4),ch);
} else {
if((state_val_42435 === (9))){
var inst_42421 = (state_42434[(9)]);
var inst_42414 = inst_42421;
var state_42434__$1 = (function (){var statearr_42445 = state_42434;
(statearr_42445[(7)] = inst_42414);

return statearr_42445;
})();
var statearr_42446_42463 = state_42434__$1;
(statearr_42446_42463[(2)] = null);

(statearr_42446_42463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42435 === (5))){
var inst_42414 = (state_42434[(7)]);
var state_42434__$1 = state_42434;
var statearr_42447_42464 = state_42434__$1;
(statearr_42447_42464[(2)] = inst_42414);

(statearr_42447_42464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42435 === (10))){
var inst_42428 = (state_42434[(2)]);
var state_42434__$1 = state_42434;
var statearr_42448_42465 = state_42434__$1;
(statearr_42448_42465[(2)] = inst_42428);

(statearr_42448_42465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42435 === (8))){
var inst_42421 = (state_42434[(9)]);
var inst_42424 = cljs.core.deref.call(null,inst_42421);
var state_42434__$1 = state_42434;
var statearr_42449_42466 = state_42434__$1;
(statearr_42449_42466[(2)] = inst_42424);

(statearr_42449_42466[(1)] = (10));


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
});})(c__41654__auto__))
;
return ((function (switch__41540__auto__,c__41654__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__41541__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41541__auto____0 = (function (){
var statearr_42453 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42453[(0)] = cljs$core$async$reduce_$_state_machine__41541__auto__);

(statearr_42453[(1)] = (1));

return statearr_42453;
});
var cljs$core$async$reduce_$_state_machine__41541__auto____1 = (function (state_42434){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_42434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e42454){if((e42454 instanceof Object)){
var ex__41544__auto__ = e42454;
var statearr_42455_42467 = state_42434;
(statearr_42455_42467[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42468 = state_42434;
state_42434 = G__42468;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41541__auto__ = function(state_42434){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41541__auto____1.call(this,state_42434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41541__auto____0;
cljs$core$async$reduce_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41541__auto____1;
return cljs$core$async$reduce_$_state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto__))
})();
var state__41656__auto__ = (function (){var statearr_42456 = f__41655__auto__.call(null);
(statearr_42456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto__);

return statearr_42456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto__))
);

return c__41654__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args42469 = [];
var len__19240__auto___42521 = arguments.length;
var i__19241__auto___42522 = (0);
while(true){
if((i__19241__auto___42522 < len__19240__auto___42521)){
args42469.push((arguments[i__19241__auto___42522]));

var G__42523 = (i__19241__auto___42522 + (1));
i__19241__auto___42522 = G__42523;
continue;
} else {
}
break;
}

var G__42471 = args42469.length;
switch (G__42471) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42469.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41654__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto__){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto__){
return (function (state_42496){
var state_val_42497 = (state_42496[(1)]);
if((state_val_42497 === (7))){
var inst_42478 = (state_42496[(2)]);
var state_42496__$1 = state_42496;
var statearr_42498_42525 = state_42496__$1;
(statearr_42498_42525[(2)] = inst_42478);

(statearr_42498_42525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42497 === (1))){
var inst_42472 = cljs.core.seq.call(null,coll);
var inst_42473 = inst_42472;
var state_42496__$1 = (function (){var statearr_42499 = state_42496;
(statearr_42499[(7)] = inst_42473);

return statearr_42499;
})();
var statearr_42500_42526 = state_42496__$1;
(statearr_42500_42526[(2)] = null);

(statearr_42500_42526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42497 === (4))){
var inst_42473 = (state_42496[(7)]);
var inst_42476 = cljs.core.first.call(null,inst_42473);
var state_42496__$1 = state_42496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42496__$1,(7),ch,inst_42476);
} else {
if((state_val_42497 === (13))){
var inst_42490 = (state_42496[(2)]);
var state_42496__$1 = state_42496;
var statearr_42501_42527 = state_42496__$1;
(statearr_42501_42527[(2)] = inst_42490);

(statearr_42501_42527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42497 === (6))){
var inst_42481 = (state_42496[(2)]);
var state_42496__$1 = state_42496;
if(cljs.core.truth_(inst_42481)){
var statearr_42502_42528 = state_42496__$1;
(statearr_42502_42528[(1)] = (8));

} else {
var statearr_42503_42529 = state_42496__$1;
(statearr_42503_42529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42497 === (3))){
var inst_42494 = (state_42496[(2)]);
var state_42496__$1 = state_42496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42496__$1,inst_42494);
} else {
if((state_val_42497 === (12))){
var state_42496__$1 = state_42496;
var statearr_42504_42530 = state_42496__$1;
(statearr_42504_42530[(2)] = null);

(statearr_42504_42530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42497 === (2))){
var inst_42473 = (state_42496[(7)]);
var state_42496__$1 = state_42496;
if(cljs.core.truth_(inst_42473)){
var statearr_42505_42531 = state_42496__$1;
(statearr_42505_42531[(1)] = (4));

} else {
var statearr_42506_42532 = state_42496__$1;
(statearr_42506_42532[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42497 === (11))){
var inst_42487 = cljs.core.async.close_BANG_.call(null,ch);
var state_42496__$1 = state_42496;
var statearr_42507_42533 = state_42496__$1;
(statearr_42507_42533[(2)] = inst_42487);

(statearr_42507_42533[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42497 === (9))){
var state_42496__$1 = state_42496;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42508_42534 = state_42496__$1;
(statearr_42508_42534[(1)] = (11));

} else {
var statearr_42509_42535 = state_42496__$1;
(statearr_42509_42535[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42497 === (5))){
var inst_42473 = (state_42496[(7)]);
var state_42496__$1 = state_42496;
var statearr_42510_42536 = state_42496__$1;
(statearr_42510_42536[(2)] = inst_42473);

(statearr_42510_42536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42497 === (10))){
var inst_42492 = (state_42496[(2)]);
var state_42496__$1 = state_42496;
var statearr_42511_42537 = state_42496__$1;
(statearr_42511_42537[(2)] = inst_42492);

(statearr_42511_42537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42497 === (8))){
var inst_42473 = (state_42496[(7)]);
var inst_42483 = cljs.core.next.call(null,inst_42473);
var inst_42473__$1 = inst_42483;
var state_42496__$1 = (function (){var statearr_42512 = state_42496;
(statearr_42512[(7)] = inst_42473__$1);

return statearr_42512;
})();
var statearr_42513_42538 = state_42496__$1;
(statearr_42513_42538[(2)] = null);

(statearr_42513_42538[(1)] = (2));


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
});})(c__41654__auto__))
;
return ((function (switch__41540__auto__,c__41654__auto__){
return (function() {
var cljs$core$async$state_machine__41541__auto__ = null;
var cljs$core$async$state_machine__41541__auto____0 = (function (){
var statearr_42517 = [null,null,null,null,null,null,null,null];
(statearr_42517[(0)] = cljs$core$async$state_machine__41541__auto__);

(statearr_42517[(1)] = (1));

return statearr_42517;
});
var cljs$core$async$state_machine__41541__auto____1 = (function (state_42496){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_42496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e42518){if((e42518 instanceof Object)){
var ex__41544__auto__ = e42518;
var statearr_42519_42539 = state_42496;
(statearr_42519_42539[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42540 = state_42496;
state_42496 = G__42540;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$state_machine__41541__auto__ = function(state_42496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41541__auto____1.call(this,state_42496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41541__auto____0;
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41541__auto____1;
return cljs$core$async$state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto__))
})();
var state__41656__auto__ = (function (){var statearr_42520 = f__41655__auto__.call(null);
(statearr_42520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto__);

return statearr_42520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto__))
);

return c__41654__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18770__auto__ = (((_ == null))?null:_);
var m__18771__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,_);
} else {
var m__18771__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18770__auto__ = (((m == null))?null:m);
var m__18771__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18771__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18770__auto__ = (((m == null))?null:m);
var m__18771__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,m,ch);
} else {
var m__18771__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18770__auto__ = (((m == null))?null:m);
var m__18771__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,m);
} else {
var m__18771__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async42766 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42766 = (function (mult,ch,cs,meta42767){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta42767 = meta42767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42768,meta42767__$1){
var self__ = this;
var _42768__$1 = this;
return (new cljs.core.async.t_cljs$core$async42766(self__.mult,self__.ch,self__.cs,meta42767__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42768){
var self__ = this;
var _42768__$1 = this;
return self__.meta42767;
});})(cs))
;


cljs.core.async.t_cljs$core$async42766.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42766.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async42766.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async42766.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42766.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42766.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42766.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42767","meta42767",-943765708,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42766.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42766";

cljs.core.async.t_cljs$core$async42766.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.core.async/t_cljs$core$async42766");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42766 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42766(mult__$1,ch__$1,cs__$1,meta42767){
return (new cljs.core.async.t_cljs$core$async42766(mult__$1,ch__$1,cs__$1,meta42767));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42766(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__41654__auto___42991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___42991,cs,m,dchan,dctr,done){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___42991,cs,m,dchan,dctr,done){
return (function (state_42903){
var state_val_42904 = (state_42903[(1)]);
if((state_val_42904 === (7))){
var inst_42899 = (state_42903[(2)]);
var state_42903__$1 = state_42903;
var statearr_42905_42992 = state_42903__$1;
(statearr_42905_42992[(2)] = inst_42899);

(statearr_42905_42992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (20))){
var inst_42802 = (state_42903[(7)]);
var inst_42814 = cljs.core.first.call(null,inst_42802);
var inst_42815 = cljs.core.nth.call(null,inst_42814,(0),null);
var inst_42816 = cljs.core.nth.call(null,inst_42814,(1),null);
var state_42903__$1 = (function (){var statearr_42906 = state_42903;
(statearr_42906[(8)] = inst_42815);

return statearr_42906;
})();
if(cljs.core.truth_(inst_42816)){
var statearr_42907_42993 = state_42903__$1;
(statearr_42907_42993[(1)] = (22));

} else {
var statearr_42908_42994 = state_42903__$1;
(statearr_42908_42994[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (27))){
var inst_42846 = (state_42903[(9)]);
var inst_42851 = (state_42903[(10)]);
var inst_42771 = (state_42903[(11)]);
var inst_42844 = (state_42903[(12)]);
var inst_42851__$1 = cljs.core._nth.call(null,inst_42844,inst_42846);
var inst_42852 = cljs.core.async.put_BANG_.call(null,inst_42851__$1,inst_42771,done);
var state_42903__$1 = (function (){var statearr_42909 = state_42903;
(statearr_42909[(10)] = inst_42851__$1);

return statearr_42909;
})();
if(cljs.core.truth_(inst_42852)){
var statearr_42910_42995 = state_42903__$1;
(statearr_42910_42995[(1)] = (30));

} else {
var statearr_42911_42996 = state_42903__$1;
(statearr_42911_42996[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (1))){
var state_42903__$1 = state_42903;
var statearr_42912_42997 = state_42903__$1;
(statearr_42912_42997[(2)] = null);

(statearr_42912_42997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (24))){
var inst_42802 = (state_42903[(7)]);
var inst_42821 = (state_42903[(2)]);
var inst_42822 = cljs.core.next.call(null,inst_42802);
var inst_42780 = inst_42822;
var inst_42781 = null;
var inst_42782 = (0);
var inst_42783 = (0);
var state_42903__$1 = (function (){var statearr_42913 = state_42903;
(statearr_42913[(13)] = inst_42780);

(statearr_42913[(14)] = inst_42783);

(statearr_42913[(15)] = inst_42782);

(statearr_42913[(16)] = inst_42821);

(statearr_42913[(17)] = inst_42781);

return statearr_42913;
})();
var statearr_42914_42998 = state_42903__$1;
(statearr_42914_42998[(2)] = null);

(statearr_42914_42998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (39))){
var state_42903__$1 = state_42903;
var statearr_42918_42999 = state_42903__$1;
(statearr_42918_42999[(2)] = null);

(statearr_42918_42999[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (4))){
var inst_42771 = (state_42903[(11)]);
var inst_42771__$1 = (state_42903[(2)]);
var inst_42772 = (inst_42771__$1 == null);
var state_42903__$1 = (function (){var statearr_42919 = state_42903;
(statearr_42919[(11)] = inst_42771__$1);

return statearr_42919;
})();
if(cljs.core.truth_(inst_42772)){
var statearr_42920_43000 = state_42903__$1;
(statearr_42920_43000[(1)] = (5));

} else {
var statearr_42921_43001 = state_42903__$1;
(statearr_42921_43001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (15))){
var inst_42780 = (state_42903[(13)]);
var inst_42783 = (state_42903[(14)]);
var inst_42782 = (state_42903[(15)]);
var inst_42781 = (state_42903[(17)]);
var inst_42798 = (state_42903[(2)]);
var inst_42799 = (inst_42783 + (1));
var tmp42915 = inst_42780;
var tmp42916 = inst_42782;
var tmp42917 = inst_42781;
var inst_42780__$1 = tmp42915;
var inst_42781__$1 = tmp42917;
var inst_42782__$1 = tmp42916;
var inst_42783__$1 = inst_42799;
var state_42903__$1 = (function (){var statearr_42922 = state_42903;
(statearr_42922[(13)] = inst_42780__$1);

(statearr_42922[(14)] = inst_42783__$1);

(statearr_42922[(15)] = inst_42782__$1);

(statearr_42922[(17)] = inst_42781__$1);

(statearr_42922[(18)] = inst_42798);

return statearr_42922;
})();
var statearr_42923_43002 = state_42903__$1;
(statearr_42923_43002[(2)] = null);

(statearr_42923_43002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (21))){
var inst_42825 = (state_42903[(2)]);
var state_42903__$1 = state_42903;
var statearr_42927_43003 = state_42903__$1;
(statearr_42927_43003[(2)] = inst_42825);

(statearr_42927_43003[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (31))){
var inst_42851 = (state_42903[(10)]);
var inst_42855 = done.call(null,null);
var inst_42856 = cljs.core.async.untap_STAR_.call(null,m,inst_42851);
var state_42903__$1 = (function (){var statearr_42928 = state_42903;
(statearr_42928[(19)] = inst_42855);

return statearr_42928;
})();
var statearr_42929_43004 = state_42903__$1;
(statearr_42929_43004[(2)] = inst_42856);

(statearr_42929_43004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (32))){
var inst_42846 = (state_42903[(9)]);
var inst_42845 = (state_42903[(20)]);
var inst_42844 = (state_42903[(12)]);
var inst_42843 = (state_42903[(21)]);
var inst_42858 = (state_42903[(2)]);
var inst_42859 = (inst_42846 + (1));
var tmp42924 = inst_42845;
var tmp42925 = inst_42844;
var tmp42926 = inst_42843;
var inst_42843__$1 = tmp42926;
var inst_42844__$1 = tmp42925;
var inst_42845__$1 = tmp42924;
var inst_42846__$1 = inst_42859;
var state_42903__$1 = (function (){var statearr_42930 = state_42903;
(statearr_42930[(9)] = inst_42846__$1);

(statearr_42930[(20)] = inst_42845__$1);

(statearr_42930[(22)] = inst_42858);

(statearr_42930[(12)] = inst_42844__$1);

(statearr_42930[(21)] = inst_42843__$1);

return statearr_42930;
})();
var statearr_42931_43005 = state_42903__$1;
(statearr_42931_43005[(2)] = null);

(statearr_42931_43005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (40))){
var inst_42871 = (state_42903[(23)]);
var inst_42875 = done.call(null,null);
var inst_42876 = cljs.core.async.untap_STAR_.call(null,m,inst_42871);
var state_42903__$1 = (function (){var statearr_42932 = state_42903;
(statearr_42932[(24)] = inst_42875);

return statearr_42932;
})();
var statearr_42933_43006 = state_42903__$1;
(statearr_42933_43006[(2)] = inst_42876);

(statearr_42933_43006[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (33))){
var inst_42862 = (state_42903[(25)]);
var inst_42864 = cljs.core.chunked_seq_QMARK_.call(null,inst_42862);
var state_42903__$1 = state_42903;
if(inst_42864){
var statearr_42934_43007 = state_42903__$1;
(statearr_42934_43007[(1)] = (36));

} else {
var statearr_42935_43008 = state_42903__$1;
(statearr_42935_43008[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (13))){
var inst_42792 = (state_42903[(26)]);
var inst_42795 = cljs.core.async.close_BANG_.call(null,inst_42792);
var state_42903__$1 = state_42903;
var statearr_42936_43009 = state_42903__$1;
(statearr_42936_43009[(2)] = inst_42795);

(statearr_42936_43009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (22))){
var inst_42815 = (state_42903[(8)]);
var inst_42818 = cljs.core.async.close_BANG_.call(null,inst_42815);
var state_42903__$1 = state_42903;
var statearr_42937_43010 = state_42903__$1;
(statearr_42937_43010[(2)] = inst_42818);

(statearr_42937_43010[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (36))){
var inst_42862 = (state_42903[(25)]);
var inst_42866 = cljs.core.chunk_first.call(null,inst_42862);
var inst_42867 = cljs.core.chunk_rest.call(null,inst_42862);
var inst_42868 = cljs.core.count.call(null,inst_42866);
var inst_42843 = inst_42867;
var inst_42844 = inst_42866;
var inst_42845 = inst_42868;
var inst_42846 = (0);
var state_42903__$1 = (function (){var statearr_42938 = state_42903;
(statearr_42938[(9)] = inst_42846);

(statearr_42938[(20)] = inst_42845);

(statearr_42938[(12)] = inst_42844);

(statearr_42938[(21)] = inst_42843);

return statearr_42938;
})();
var statearr_42939_43011 = state_42903__$1;
(statearr_42939_43011[(2)] = null);

(statearr_42939_43011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (41))){
var inst_42862 = (state_42903[(25)]);
var inst_42878 = (state_42903[(2)]);
var inst_42879 = cljs.core.next.call(null,inst_42862);
var inst_42843 = inst_42879;
var inst_42844 = null;
var inst_42845 = (0);
var inst_42846 = (0);
var state_42903__$1 = (function (){var statearr_42940 = state_42903;
(statearr_42940[(9)] = inst_42846);

(statearr_42940[(20)] = inst_42845);

(statearr_42940[(27)] = inst_42878);

(statearr_42940[(12)] = inst_42844);

(statearr_42940[(21)] = inst_42843);

return statearr_42940;
})();
var statearr_42941_43012 = state_42903__$1;
(statearr_42941_43012[(2)] = null);

(statearr_42941_43012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (43))){
var state_42903__$1 = state_42903;
var statearr_42942_43013 = state_42903__$1;
(statearr_42942_43013[(2)] = null);

(statearr_42942_43013[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (29))){
var inst_42887 = (state_42903[(2)]);
var state_42903__$1 = state_42903;
var statearr_42943_43014 = state_42903__$1;
(statearr_42943_43014[(2)] = inst_42887);

(statearr_42943_43014[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (44))){
var inst_42896 = (state_42903[(2)]);
var state_42903__$1 = (function (){var statearr_42944 = state_42903;
(statearr_42944[(28)] = inst_42896);

return statearr_42944;
})();
var statearr_42945_43015 = state_42903__$1;
(statearr_42945_43015[(2)] = null);

(statearr_42945_43015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (6))){
var inst_42835 = (state_42903[(29)]);
var inst_42834 = cljs.core.deref.call(null,cs);
var inst_42835__$1 = cljs.core.keys.call(null,inst_42834);
var inst_42836 = cljs.core.count.call(null,inst_42835__$1);
var inst_42837 = cljs.core.reset_BANG_.call(null,dctr,inst_42836);
var inst_42842 = cljs.core.seq.call(null,inst_42835__$1);
var inst_42843 = inst_42842;
var inst_42844 = null;
var inst_42845 = (0);
var inst_42846 = (0);
var state_42903__$1 = (function (){var statearr_42946 = state_42903;
(statearr_42946[(9)] = inst_42846);

(statearr_42946[(20)] = inst_42845);

(statearr_42946[(30)] = inst_42837);

(statearr_42946[(29)] = inst_42835__$1);

(statearr_42946[(12)] = inst_42844);

(statearr_42946[(21)] = inst_42843);

return statearr_42946;
})();
var statearr_42947_43016 = state_42903__$1;
(statearr_42947_43016[(2)] = null);

(statearr_42947_43016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (28))){
var inst_42862 = (state_42903[(25)]);
var inst_42843 = (state_42903[(21)]);
var inst_42862__$1 = cljs.core.seq.call(null,inst_42843);
var state_42903__$1 = (function (){var statearr_42948 = state_42903;
(statearr_42948[(25)] = inst_42862__$1);

return statearr_42948;
})();
if(inst_42862__$1){
var statearr_42949_43017 = state_42903__$1;
(statearr_42949_43017[(1)] = (33));

} else {
var statearr_42950_43018 = state_42903__$1;
(statearr_42950_43018[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (25))){
var inst_42846 = (state_42903[(9)]);
var inst_42845 = (state_42903[(20)]);
var inst_42848 = (inst_42846 < inst_42845);
var inst_42849 = inst_42848;
var state_42903__$1 = state_42903;
if(cljs.core.truth_(inst_42849)){
var statearr_42951_43019 = state_42903__$1;
(statearr_42951_43019[(1)] = (27));

} else {
var statearr_42952_43020 = state_42903__$1;
(statearr_42952_43020[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (34))){
var state_42903__$1 = state_42903;
var statearr_42953_43021 = state_42903__$1;
(statearr_42953_43021[(2)] = null);

(statearr_42953_43021[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (17))){
var state_42903__$1 = state_42903;
var statearr_42954_43022 = state_42903__$1;
(statearr_42954_43022[(2)] = null);

(statearr_42954_43022[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (3))){
var inst_42901 = (state_42903[(2)]);
var state_42903__$1 = state_42903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42903__$1,inst_42901);
} else {
if((state_val_42904 === (12))){
var inst_42830 = (state_42903[(2)]);
var state_42903__$1 = state_42903;
var statearr_42955_43023 = state_42903__$1;
(statearr_42955_43023[(2)] = inst_42830);

(statearr_42955_43023[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (2))){
var state_42903__$1 = state_42903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42903__$1,(4),ch);
} else {
if((state_val_42904 === (23))){
var state_42903__$1 = state_42903;
var statearr_42956_43024 = state_42903__$1;
(statearr_42956_43024[(2)] = null);

(statearr_42956_43024[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (35))){
var inst_42885 = (state_42903[(2)]);
var state_42903__$1 = state_42903;
var statearr_42957_43025 = state_42903__$1;
(statearr_42957_43025[(2)] = inst_42885);

(statearr_42957_43025[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (19))){
var inst_42802 = (state_42903[(7)]);
var inst_42806 = cljs.core.chunk_first.call(null,inst_42802);
var inst_42807 = cljs.core.chunk_rest.call(null,inst_42802);
var inst_42808 = cljs.core.count.call(null,inst_42806);
var inst_42780 = inst_42807;
var inst_42781 = inst_42806;
var inst_42782 = inst_42808;
var inst_42783 = (0);
var state_42903__$1 = (function (){var statearr_42958 = state_42903;
(statearr_42958[(13)] = inst_42780);

(statearr_42958[(14)] = inst_42783);

(statearr_42958[(15)] = inst_42782);

(statearr_42958[(17)] = inst_42781);

return statearr_42958;
})();
var statearr_42959_43026 = state_42903__$1;
(statearr_42959_43026[(2)] = null);

(statearr_42959_43026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (11))){
var inst_42780 = (state_42903[(13)]);
var inst_42802 = (state_42903[(7)]);
var inst_42802__$1 = cljs.core.seq.call(null,inst_42780);
var state_42903__$1 = (function (){var statearr_42960 = state_42903;
(statearr_42960[(7)] = inst_42802__$1);

return statearr_42960;
})();
if(inst_42802__$1){
var statearr_42961_43027 = state_42903__$1;
(statearr_42961_43027[(1)] = (16));

} else {
var statearr_42962_43028 = state_42903__$1;
(statearr_42962_43028[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (9))){
var inst_42832 = (state_42903[(2)]);
var state_42903__$1 = state_42903;
var statearr_42963_43029 = state_42903__$1;
(statearr_42963_43029[(2)] = inst_42832);

(statearr_42963_43029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (5))){
var inst_42778 = cljs.core.deref.call(null,cs);
var inst_42779 = cljs.core.seq.call(null,inst_42778);
var inst_42780 = inst_42779;
var inst_42781 = null;
var inst_42782 = (0);
var inst_42783 = (0);
var state_42903__$1 = (function (){var statearr_42964 = state_42903;
(statearr_42964[(13)] = inst_42780);

(statearr_42964[(14)] = inst_42783);

(statearr_42964[(15)] = inst_42782);

(statearr_42964[(17)] = inst_42781);

return statearr_42964;
})();
var statearr_42965_43030 = state_42903__$1;
(statearr_42965_43030[(2)] = null);

(statearr_42965_43030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (14))){
var state_42903__$1 = state_42903;
var statearr_42966_43031 = state_42903__$1;
(statearr_42966_43031[(2)] = null);

(statearr_42966_43031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (45))){
var inst_42893 = (state_42903[(2)]);
var state_42903__$1 = state_42903;
var statearr_42967_43032 = state_42903__$1;
(statearr_42967_43032[(2)] = inst_42893);

(statearr_42967_43032[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (26))){
var inst_42835 = (state_42903[(29)]);
var inst_42889 = (state_42903[(2)]);
var inst_42890 = cljs.core.seq.call(null,inst_42835);
var state_42903__$1 = (function (){var statearr_42968 = state_42903;
(statearr_42968[(31)] = inst_42889);

return statearr_42968;
})();
if(inst_42890){
var statearr_42969_43033 = state_42903__$1;
(statearr_42969_43033[(1)] = (42));

} else {
var statearr_42970_43034 = state_42903__$1;
(statearr_42970_43034[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (16))){
var inst_42802 = (state_42903[(7)]);
var inst_42804 = cljs.core.chunked_seq_QMARK_.call(null,inst_42802);
var state_42903__$1 = state_42903;
if(inst_42804){
var statearr_42971_43035 = state_42903__$1;
(statearr_42971_43035[(1)] = (19));

} else {
var statearr_42972_43036 = state_42903__$1;
(statearr_42972_43036[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (38))){
var inst_42882 = (state_42903[(2)]);
var state_42903__$1 = state_42903;
var statearr_42973_43037 = state_42903__$1;
(statearr_42973_43037[(2)] = inst_42882);

(statearr_42973_43037[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (30))){
var state_42903__$1 = state_42903;
var statearr_42974_43038 = state_42903__$1;
(statearr_42974_43038[(2)] = null);

(statearr_42974_43038[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (10))){
var inst_42783 = (state_42903[(14)]);
var inst_42781 = (state_42903[(17)]);
var inst_42791 = cljs.core._nth.call(null,inst_42781,inst_42783);
var inst_42792 = cljs.core.nth.call(null,inst_42791,(0),null);
var inst_42793 = cljs.core.nth.call(null,inst_42791,(1),null);
var state_42903__$1 = (function (){var statearr_42975 = state_42903;
(statearr_42975[(26)] = inst_42792);

return statearr_42975;
})();
if(cljs.core.truth_(inst_42793)){
var statearr_42976_43039 = state_42903__$1;
(statearr_42976_43039[(1)] = (13));

} else {
var statearr_42977_43040 = state_42903__$1;
(statearr_42977_43040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (18))){
var inst_42828 = (state_42903[(2)]);
var state_42903__$1 = state_42903;
var statearr_42978_43041 = state_42903__$1;
(statearr_42978_43041[(2)] = inst_42828);

(statearr_42978_43041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (42))){
var state_42903__$1 = state_42903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42903__$1,(45),dchan);
} else {
if((state_val_42904 === (37))){
var inst_42771 = (state_42903[(11)]);
var inst_42862 = (state_42903[(25)]);
var inst_42871 = (state_42903[(23)]);
var inst_42871__$1 = cljs.core.first.call(null,inst_42862);
var inst_42872 = cljs.core.async.put_BANG_.call(null,inst_42871__$1,inst_42771,done);
var state_42903__$1 = (function (){var statearr_42979 = state_42903;
(statearr_42979[(23)] = inst_42871__$1);

return statearr_42979;
})();
if(cljs.core.truth_(inst_42872)){
var statearr_42980_43042 = state_42903__$1;
(statearr_42980_43042[(1)] = (39));

} else {
var statearr_42981_43043 = state_42903__$1;
(statearr_42981_43043[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42904 === (8))){
var inst_42783 = (state_42903[(14)]);
var inst_42782 = (state_42903[(15)]);
var inst_42785 = (inst_42783 < inst_42782);
var inst_42786 = inst_42785;
var state_42903__$1 = state_42903;
if(cljs.core.truth_(inst_42786)){
var statearr_42982_43044 = state_42903__$1;
(statearr_42982_43044[(1)] = (10));

} else {
var statearr_42983_43045 = state_42903__$1;
(statearr_42983_43045[(1)] = (11));

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
});})(c__41654__auto___42991,cs,m,dchan,dctr,done))
;
return ((function (switch__41540__auto__,c__41654__auto___42991,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__41541__auto__ = null;
var cljs$core$async$mult_$_state_machine__41541__auto____0 = (function (){
var statearr_42987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42987[(0)] = cljs$core$async$mult_$_state_machine__41541__auto__);

(statearr_42987[(1)] = (1));

return statearr_42987;
});
var cljs$core$async$mult_$_state_machine__41541__auto____1 = (function (state_42903){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_42903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e42988){if((e42988 instanceof Object)){
var ex__41544__auto__ = e42988;
var statearr_42989_43046 = state_42903;
(statearr_42989_43046[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43047 = state_42903;
state_42903 = G__43047;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41541__auto__ = function(state_42903){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41541__auto____1.call(this,state_42903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41541__auto____0;
cljs$core$async$mult_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41541__auto____1;
return cljs$core$async$mult_$_state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___42991,cs,m,dchan,dctr,done))
})();
var state__41656__auto__ = (function (){var statearr_42990 = f__41655__auto__.call(null);
(statearr_42990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___42991);

return statearr_42990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___42991,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args43048 = [];
var len__19240__auto___43051 = arguments.length;
var i__19241__auto___43052 = (0);
while(true){
if((i__19241__auto___43052 < len__19240__auto___43051)){
args43048.push((arguments[i__19241__auto___43052]));

var G__43053 = (i__19241__auto___43052 + (1));
i__19241__auto___43052 = G__43053;
continue;
} else {
}
break;
}

var G__43050 = args43048.length;
switch (G__43050) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43048.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18770__auto__ = (((m == null))?null:m);
var m__18771__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,m,ch);
} else {
var m__18771__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18770__auto__ = (((m == null))?null:m);
var m__18771__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,m,ch);
} else {
var m__18771__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18770__auto__ = (((m == null))?null:m);
var m__18771__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,m);
} else {
var m__18771__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18770__auto__ = (((m == null))?null:m);
var m__18771__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,m,state_map);
} else {
var m__18771__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18770__auto__ = (((m == null))?null:m);
var m__18771__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,m,mode);
} else {
var m__18771__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19247__auto__ = [];
var len__19240__auto___43065 = arguments.length;
var i__19241__auto___43066 = (0);
while(true){
if((i__19241__auto___43066 < len__19240__auto___43065)){
args__19247__auto__.push((arguments[i__19241__auto___43066]));

var G__43067 = (i__19241__auto___43066 + (1));
i__19241__auto___43066 = G__43067;
continue;
} else {
}
break;
}

var argseq__19248__auto__ = ((((3) < args__19247__auto__.length))?(new cljs.core.IndexedSeq(args__19247__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19248__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43059){
var map__43060 = p__43059;
var map__43060__$1 = ((((!((map__43060 == null)))?((((map__43060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43060):map__43060);
var opts = map__43060__$1;
var statearr_43062_43068 = state;
(statearr_43062_43068[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6503__auto__ = cljs.core.async.do_alts.call(null,((function (map__43060,map__43060__$1,opts){
return (function (val){
var statearr_43063_43069 = state;
(statearr_43063_43069[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__43060,map__43060__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6503__auto__)){
var cb = temp__6503__auto__;
var statearr_43064_43070 = state;
(statearr_43064_43070[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43055){
var G__43056 = cljs.core.first.call(null,seq43055);
var seq43055__$1 = cljs.core.next.call(null,seq43055);
var G__43057 = cljs.core.first.call(null,seq43055__$1);
var seq43055__$2 = cljs.core.next.call(null,seq43055__$1);
var G__43058 = cljs.core.first.call(null,seq43055__$2);
var seq43055__$3 = cljs.core.next.call(null,seq43055__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43056,G__43057,G__43058,seq43055__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async43236 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43236 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43237){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43237 = meta43237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43238,meta43237__$1){
var self__ = this;
var _43238__$1 = this;
return (new cljs.core.async.t_cljs$core$async43236(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43237__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43238){
var self__ = this;
var _43238__$1 = this;
return self__.meta43237;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async43236.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async43236.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async43236.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async43236.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43236.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43236.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43236.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43236.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43236.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43237","meta43237",1126495518,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43236.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43236";

cljs.core.async.t_cljs$core$async43236.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.core.async/t_cljs$core$async43236");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async43236 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43236(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43237){
return (new cljs.core.async.t_cljs$core$async43236(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43237));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43236(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41654__auto___43401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___43401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___43401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43338){
var state_val_43339 = (state_43338[(1)]);
if((state_val_43339 === (7))){
var inst_43254 = (state_43338[(2)]);
var state_43338__$1 = state_43338;
var statearr_43340_43402 = state_43338__$1;
(statearr_43340_43402[(2)] = inst_43254);

(statearr_43340_43402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (20))){
var inst_43266 = (state_43338[(7)]);
var state_43338__$1 = state_43338;
var statearr_43341_43403 = state_43338__$1;
(statearr_43341_43403[(2)] = inst_43266);

(statearr_43341_43403[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (27))){
var state_43338__$1 = state_43338;
var statearr_43342_43404 = state_43338__$1;
(statearr_43342_43404[(2)] = null);

(statearr_43342_43404[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (1))){
var inst_43242 = (state_43338[(8)]);
var inst_43242__$1 = calc_state.call(null);
var inst_43244 = (inst_43242__$1 == null);
var inst_43245 = cljs.core.not.call(null,inst_43244);
var state_43338__$1 = (function (){var statearr_43343 = state_43338;
(statearr_43343[(8)] = inst_43242__$1);

return statearr_43343;
})();
if(inst_43245){
var statearr_43344_43405 = state_43338__$1;
(statearr_43344_43405[(1)] = (2));

} else {
var statearr_43345_43406 = state_43338__$1;
(statearr_43345_43406[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (24))){
var inst_43312 = (state_43338[(9)]);
var inst_43289 = (state_43338[(10)]);
var inst_43298 = (state_43338[(11)]);
var inst_43312__$1 = inst_43289.call(null,inst_43298);
var state_43338__$1 = (function (){var statearr_43346 = state_43338;
(statearr_43346[(9)] = inst_43312__$1);

return statearr_43346;
})();
if(cljs.core.truth_(inst_43312__$1)){
var statearr_43347_43407 = state_43338__$1;
(statearr_43347_43407[(1)] = (29));

} else {
var statearr_43348_43408 = state_43338__$1;
(statearr_43348_43408[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (4))){
var inst_43257 = (state_43338[(2)]);
var state_43338__$1 = state_43338;
if(cljs.core.truth_(inst_43257)){
var statearr_43349_43409 = state_43338__$1;
(statearr_43349_43409[(1)] = (8));

} else {
var statearr_43350_43410 = state_43338__$1;
(statearr_43350_43410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (15))){
var inst_43283 = (state_43338[(2)]);
var state_43338__$1 = state_43338;
if(cljs.core.truth_(inst_43283)){
var statearr_43351_43411 = state_43338__$1;
(statearr_43351_43411[(1)] = (19));

} else {
var statearr_43352_43412 = state_43338__$1;
(statearr_43352_43412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (21))){
var inst_43288 = (state_43338[(12)]);
var inst_43288__$1 = (state_43338[(2)]);
var inst_43289 = cljs.core.get.call(null,inst_43288__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43290 = cljs.core.get.call(null,inst_43288__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43291 = cljs.core.get.call(null,inst_43288__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43338__$1 = (function (){var statearr_43353 = state_43338;
(statearr_43353[(12)] = inst_43288__$1);

(statearr_43353[(13)] = inst_43290);

(statearr_43353[(10)] = inst_43289);

return statearr_43353;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43338__$1,(22),inst_43291);
} else {
if((state_val_43339 === (31))){
var inst_43320 = (state_43338[(2)]);
var state_43338__$1 = state_43338;
if(cljs.core.truth_(inst_43320)){
var statearr_43354_43413 = state_43338__$1;
(statearr_43354_43413[(1)] = (32));

} else {
var statearr_43355_43414 = state_43338__$1;
(statearr_43355_43414[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (32))){
var inst_43297 = (state_43338[(14)]);
var state_43338__$1 = state_43338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43338__$1,(35),out,inst_43297);
} else {
if((state_val_43339 === (33))){
var inst_43288 = (state_43338[(12)]);
var inst_43266 = inst_43288;
var state_43338__$1 = (function (){var statearr_43356 = state_43338;
(statearr_43356[(7)] = inst_43266);

return statearr_43356;
})();
var statearr_43357_43415 = state_43338__$1;
(statearr_43357_43415[(2)] = null);

(statearr_43357_43415[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (13))){
var inst_43266 = (state_43338[(7)]);
var inst_43273 = inst_43266.cljs$lang$protocol_mask$partition0$;
var inst_43274 = (inst_43273 & (64));
var inst_43275 = inst_43266.cljs$core$ISeq$;
var inst_43276 = (inst_43274) || (inst_43275);
var state_43338__$1 = state_43338;
if(cljs.core.truth_(inst_43276)){
var statearr_43358_43416 = state_43338__$1;
(statearr_43358_43416[(1)] = (16));

} else {
var statearr_43359_43417 = state_43338__$1;
(statearr_43359_43417[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (22))){
var inst_43298 = (state_43338[(11)]);
var inst_43297 = (state_43338[(14)]);
var inst_43296 = (state_43338[(2)]);
var inst_43297__$1 = cljs.core.nth.call(null,inst_43296,(0),null);
var inst_43298__$1 = cljs.core.nth.call(null,inst_43296,(1),null);
var inst_43299 = (inst_43297__$1 == null);
var inst_43300 = cljs.core._EQ_.call(null,inst_43298__$1,change);
var inst_43301 = (inst_43299) || (inst_43300);
var state_43338__$1 = (function (){var statearr_43360 = state_43338;
(statearr_43360[(11)] = inst_43298__$1);

(statearr_43360[(14)] = inst_43297__$1);

return statearr_43360;
})();
if(cljs.core.truth_(inst_43301)){
var statearr_43361_43418 = state_43338__$1;
(statearr_43361_43418[(1)] = (23));

} else {
var statearr_43362_43419 = state_43338__$1;
(statearr_43362_43419[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (36))){
var inst_43288 = (state_43338[(12)]);
var inst_43266 = inst_43288;
var state_43338__$1 = (function (){var statearr_43363 = state_43338;
(statearr_43363[(7)] = inst_43266);

return statearr_43363;
})();
var statearr_43364_43420 = state_43338__$1;
(statearr_43364_43420[(2)] = null);

(statearr_43364_43420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (29))){
var inst_43312 = (state_43338[(9)]);
var state_43338__$1 = state_43338;
var statearr_43365_43421 = state_43338__$1;
(statearr_43365_43421[(2)] = inst_43312);

(statearr_43365_43421[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (6))){
var state_43338__$1 = state_43338;
var statearr_43366_43422 = state_43338__$1;
(statearr_43366_43422[(2)] = false);

(statearr_43366_43422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (28))){
var inst_43308 = (state_43338[(2)]);
var inst_43309 = calc_state.call(null);
var inst_43266 = inst_43309;
var state_43338__$1 = (function (){var statearr_43367 = state_43338;
(statearr_43367[(7)] = inst_43266);

(statearr_43367[(15)] = inst_43308);

return statearr_43367;
})();
var statearr_43368_43423 = state_43338__$1;
(statearr_43368_43423[(2)] = null);

(statearr_43368_43423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (25))){
var inst_43334 = (state_43338[(2)]);
var state_43338__$1 = state_43338;
var statearr_43369_43424 = state_43338__$1;
(statearr_43369_43424[(2)] = inst_43334);

(statearr_43369_43424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (34))){
var inst_43332 = (state_43338[(2)]);
var state_43338__$1 = state_43338;
var statearr_43370_43425 = state_43338__$1;
(statearr_43370_43425[(2)] = inst_43332);

(statearr_43370_43425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (17))){
var state_43338__$1 = state_43338;
var statearr_43371_43426 = state_43338__$1;
(statearr_43371_43426[(2)] = false);

(statearr_43371_43426[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (3))){
var state_43338__$1 = state_43338;
var statearr_43372_43427 = state_43338__$1;
(statearr_43372_43427[(2)] = false);

(statearr_43372_43427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (12))){
var inst_43336 = (state_43338[(2)]);
var state_43338__$1 = state_43338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43338__$1,inst_43336);
} else {
if((state_val_43339 === (2))){
var inst_43242 = (state_43338[(8)]);
var inst_43247 = inst_43242.cljs$lang$protocol_mask$partition0$;
var inst_43248 = (inst_43247 & (64));
var inst_43249 = inst_43242.cljs$core$ISeq$;
var inst_43250 = (inst_43248) || (inst_43249);
var state_43338__$1 = state_43338;
if(cljs.core.truth_(inst_43250)){
var statearr_43373_43428 = state_43338__$1;
(statearr_43373_43428[(1)] = (5));

} else {
var statearr_43374_43429 = state_43338__$1;
(statearr_43374_43429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (23))){
var inst_43297 = (state_43338[(14)]);
var inst_43303 = (inst_43297 == null);
var state_43338__$1 = state_43338;
if(cljs.core.truth_(inst_43303)){
var statearr_43375_43430 = state_43338__$1;
(statearr_43375_43430[(1)] = (26));

} else {
var statearr_43376_43431 = state_43338__$1;
(statearr_43376_43431[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (35))){
var inst_43323 = (state_43338[(2)]);
var state_43338__$1 = state_43338;
if(cljs.core.truth_(inst_43323)){
var statearr_43377_43432 = state_43338__$1;
(statearr_43377_43432[(1)] = (36));

} else {
var statearr_43378_43433 = state_43338__$1;
(statearr_43378_43433[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (19))){
var inst_43266 = (state_43338[(7)]);
var inst_43285 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43266);
var state_43338__$1 = state_43338;
var statearr_43379_43434 = state_43338__$1;
(statearr_43379_43434[(2)] = inst_43285);

(statearr_43379_43434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (11))){
var inst_43266 = (state_43338[(7)]);
var inst_43270 = (inst_43266 == null);
var inst_43271 = cljs.core.not.call(null,inst_43270);
var state_43338__$1 = state_43338;
if(inst_43271){
var statearr_43380_43435 = state_43338__$1;
(statearr_43380_43435[(1)] = (13));

} else {
var statearr_43381_43436 = state_43338__$1;
(statearr_43381_43436[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (9))){
var inst_43242 = (state_43338[(8)]);
var state_43338__$1 = state_43338;
var statearr_43382_43437 = state_43338__$1;
(statearr_43382_43437[(2)] = inst_43242);

(statearr_43382_43437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (5))){
var state_43338__$1 = state_43338;
var statearr_43383_43438 = state_43338__$1;
(statearr_43383_43438[(2)] = true);

(statearr_43383_43438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (14))){
var state_43338__$1 = state_43338;
var statearr_43384_43439 = state_43338__$1;
(statearr_43384_43439[(2)] = false);

(statearr_43384_43439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (26))){
var inst_43298 = (state_43338[(11)]);
var inst_43305 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43298);
var state_43338__$1 = state_43338;
var statearr_43385_43440 = state_43338__$1;
(statearr_43385_43440[(2)] = inst_43305);

(statearr_43385_43440[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (16))){
var state_43338__$1 = state_43338;
var statearr_43386_43441 = state_43338__$1;
(statearr_43386_43441[(2)] = true);

(statearr_43386_43441[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (38))){
var inst_43328 = (state_43338[(2)]);
var state_43338__$1 = state_43338;
var statearr_43387_43442 = state_43338__$1;
(statearr_43387_43442[(2)] = inst_43328);

(statearr_43387_43442[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (30))){
var inst_43290 = (state_43338[(13)]);
var inst_43289 = (state_43338[(10)]);
var inst_43298 = (state_43338[(11)]);
var inst_43315 = cljs.core.empty_QMARK_.call(null,inst_43289);
var inst_43316 = inst_43290.call(null,inst_43298);
var inst_43317 = cljs.core.not.call(null,inst_43316);
var inst_43318 = (inst_43315) && (inst_43317);
var state_43338__$1 = state_43338;
var statearr_43388_43443 = state_43338__$1;
(statearr_43388_43443[(2)] = inst_43318);

(statearr_43388_43443[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (10))){
var inst_43242 = (state_43338[(8)]);
var inst_43262 = (state_43338[(2)]);
var inst_43263 = cljs.core.get.call(null,inst_43262,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43264 = cljs.core.get.call(null,inst_43262,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43265 = cljs.core.get.call(null,inst_43262,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43266 = inst_43242;
var state_43338__$1 = (function (){var statearr_43389 = state_43338;
(statearr_43389[(16)] = inst_43265);

(statearr_43389[(7)] = inst_43266);

(statearr_43389[(17)] = inst_43263);

(statearr_43389[(18)] = inst_43264);

return statearr_43389;
})();
var statearr_43390_43444 = state_43338__$1;
(statearr_43390_43444[(2)] = null);

(statearr_43390_43444[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (18))){
var inst_43280 = (state_43338[(2)]);
var state_43338__$1 = state_43338;
var statearr_43391_43445 = state_43338__$1;
(statearr_43391_43445[(2)] = inst_43280);

(statearr_43391_43445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (37))){
var state_43338__$1 = state_43338;
var statearr_43392_43446 = state_43338__$1;
(statearr_43392_43446[(2)] = null);

(statearr_43392_43446[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43339 === (8))){
var inst_43242 = (state_43338[(8)]);
var inst_43259 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43242);
var state_43338__$1 = state_43338;
var statearr_43393_43447 = state_43338__$1;
(statearr_43393_43447[(2)] = inst_43259);

(statearr_43393_43447[(1)] = (10));


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
});})(c__41654__auto___43401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__41540__auto__,c__41654__auto___43401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__41541__auto__ = null;
var cljs$core$async$mix_$_state_machine__41541__auto____0 = (function (){
var statearr_43397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43397[(0)] = cljs$core$async$mix_$_state_machine__41541__auto__);

(statearr_43397[(1)] = (1));

return statearr_43397;
});
var cljs$core$async$mix_$_state_machine__41541__auto____1 = (function (state_43338){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_43338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e43398){if((e43398 instanceof Object)){
var ex__41544__auto__ = e43398;
var statearr_43399_43448 = state_43338;
(statearr_43399_43448[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43449 = state_43338;
state_43338 = G__43449;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41541__auto__ = function(state_43338){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41541__auto____1.call(this,state_43338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41541__auto____0;
cljs$core$async$mix_$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41541__auto____1;
return cljs$core$async$mix_$_state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___43401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__41656__auto__ = (function (){var statearr_43400 = f__41655__auto__.call(null);
(statearr_43400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___43401);

return statearr_43400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___43401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18770__auto__ = (((p == null))?null:p);
var m__18771__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18771__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18770__auto__ = (((p == null))?null:p);
var m__18771__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,p,v,ch);
} else {
var m__18771__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args43450 = [];
var len__19240__auto___43453 = arguments.length;
var i__19241__auto___43454 = (0);
while(true){
if((i__19241__auto___43454 < len__19240__auto___43453)){
args43450.push((arguments[i__19241__auto___43454]));

var G__43455 = (i__19241__auto___43454 + (1));
i__19241__auto___43454 = G__43455;
continue;
} else {
}
break;
}

var G__43452 = args43450.length;
switch (G__43452) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43450.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18770__auto__ = (((p == null))?null:p);
var m__18771__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,p);
} else {
var m__18771__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18770__auto__ = (((p == null))?null:p);
var m__18771__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18770__auto__)]);
if(!((m__18771__auto__ == null))){
return m__18771__auto__.call(null,p,v);
} else {
var m__18771__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18771__auto____$1 == null))){
return m__18771__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args43458 = [];
var len__19240__auto___43583 = arguments.length;
var i__19241__auto___43584 = (0);
while(true){
if((i__19241__auto___43584 < len__19240__auto___43583)){
args43458.push((arguments[i__19241__auto___43584]));

var G__43585 = (i__19241__auto___43584 + (1));
i__19241__auto___43584 = G__43585;
continue;
} else {
}
break;
}

var G__43460 = args43458.length;
switch (G__43460) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43458.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18057__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18057__auto__,mults){
return (function (p1__43457_SHARP_){
if(cljs.core.truth_(p1__43457_SHARP_.call(null,topic))){
return p1__43457_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43457_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18057__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async43461 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43461 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43462){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43462 = meta43462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43463,meta43462__$1){
var self__ = this;
var _43463__$1 = this;
return (new cljs.core.async.t_cljs$core$async43461(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43462__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43463){
var self__ = this;
var _43463__$1 = this;
return self__.meta43462;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async43461.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async43461.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async43461.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async43461.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43461.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6503__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6503__auto__)){
var m = temp__6503__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43461.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43461.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43461.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43462","meta43462",1382325519,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43461";

cljs.core.async.t_cljs$core$async43461.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.core.async/t_cljs$core$async43461");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async43461 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43461(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43462){
return (new cljs.core.async.t_cljs$core$async43461(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43462));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43461(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41654__auto___43587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___43587,mults,ensure_mult,p){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___43587,mults,ensure_mult,p){
return (function (state_43535){
var state_val_43536 = (state_43535[(1)]);
if((state_val_43536 === (7))){
var inst_43531 = (state_43535[(2)]);
var state_43535__$1 = state_43535;
var statearr_43537_43588 = state_43535__$1;
(statearr_43537_43588[(2)] = inst_43531);

(statearr_43537_43588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (20))){
var state_43535__$1 = state_43535;
var statearr_43538_43589 = state_43535__$1;
(statearr_43538_43589[(2)] = null);

(statearr_43538_43589[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (1))){
var state_43535__$1 = state_43535;
var statearr_43539_43590 = state_43535__$1;
(statearr_43539_43590[(2)] = null);

(statearr_43539_43590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (24))){
var inst_43514 = (state_43535[(7)]);
var inst_43523 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43514);
var state_43535__$1 = state_43535;
var statearr_43540_43591 = state_43535__$1;
(statearr_43540_43591[(2)] = inst_43523);

(statearr_43540_43591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (4))){
var inst_43466 = (state_43535[(8)]);
var inst_43466__$1 = (state_43535[(2)]);
var inst_43467 = (inst_43466__$1 == null);
var state_43535__$1 = (function (){var statearr_43541 = state_43535;
(statearr_43541[(8)] = inst_43466__$1);

return statearr_43541;
})();
if(cljs.core.truth_(inst_43467)){
var statearr_43542_43592 = state_43535__$1;
(statearr_43542_43592[(1)] = (5));

} else {
var statearr_43543_43593 = state_43535__$1;
(statearr_43543_43593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (15))){
var inst_43508 = (state_43535[(2)]);
var state_43535__$1 = state_43535;
var statearr_43544_43594 = state_43535__$1;
(statearr_43544_43594[(2)] = inst_43508);

(statearr_43544_43594[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (21))){
var inst_43528 = (state_43535[(2)]);
var state_43535__$1 = (function (){var statearr_43545 = state_43535;
(statearr_43545[(9)] = inst_43528);

return statearr_43545;
})();
var statearr_43546_43595 = state_43535__$1;
(statearr_43546_43595[(2)] = null);

(statearr_43546_43595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (13))){
var inst_43490 = (state_43535[(10)]);
var inst_43492 = cljs.core.chunked_seq_QMARK_.call(null,inst_43490);
var state_43535__$1 = state_43535;
if(inst_43492){
var statearr_43547_43596 = state_43535__$1;
(statearr_43547_43596[(1)] = (16));

} else {
var statearr_43548_43597 = state_43535__$1;
(statearr_43548_43597[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (22))){
var inst_43520 = (state_43535[(2)]);
var state_43535__$1 = state_43535;
if(cljs.core.truth_(inst_43520)){
var statearr_43549_43598 = state_43535__$1;
(statearr_43549_43598[(1)] = (23));

} else {
var statearr_43550_43599 = state_43535__$1;
(statearr_43550_43599[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (6))){
var inst_43514 = (state_43535[(7)]);
var inst_43516 = (state_43535[(11)]);
var inst_43466 = (state_43535[(8)]);
var inst_43514__$1 = topic_fn.call(null,inst_43466);
var inst_43515 = cljs.core.deref.call(null,mults);
var inst_43516__$1 = cljs.core.get.call(null,inst_43515,inst_43514__$1);
var state_43535__$1 = (function (){var statearr_43551 = state_43535;
(statearr_43551[(7)] = inst_43514__$1);

(statearr_43551[(11)] = inst_43516__$1);

return statearr_43551;
})();
if(cljs.core.truth_(inst_43516__$1)){
var statearr_43552_43600 = state_43535__$1;
(statearr_43552_43600[(1)] = (19));

} else {
var statearr_43553_43601 = state_43535__$1;
(statearr_43553_43601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (25))){
var inst_43525 = (state_43535[(2)]);
var state_43535__$1 = state_43535;
var statearr_43554_43602 = state_43535__$1;
(statearr_43554_43602[(2)] = inst_43525);

(statearr_43554_43602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (17))){
var inst_43490 = (state_43535[(10)]);
var inst_43499 = cljs.core.first.call(null,inst_43490);
var inst_43500 = cljs.core.async.muxch_STAR_.call(null,inst_43499);
var inst_43501 = cljs.core.async.close_BANG_.call(null,inst_43500);
var inst_43502 = cljs.core.next.call(null,inst_43490);
var inst_43476 = inst_43502;
var inst_43477 = null;
var inst_43478 = (0);
var inst_43479 = (0);
var state_43535__$1 = (function (){var statearr_43555 = state_43535;
(statearr_43555[(12)] = inst_43478);

(statearr_43555[(13)] = inst_43479);

(statearr_43555[(14)] = inst_43477);

(statearr_43555[(15)] = inst_43476);

(statearr_43555[(16)] = inst_43501);

return statearr_43555;
})();
var statearr_43556_43603 = state_43535__$1;
(statearr_43556_43603[(2)] = null);

(statearr_43556_43603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (3))){
var inst_43533 = (state_43535[(2)]);
var state_43535__$1 = state_43535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43535__$1,inst_43533);
} else {
if((state_val_43536 === (12))){
var inst_43510 = (state_43535[(2)]);
var state_43535__$1 = state_43535;
var statearr_43557_43604 = state_43535__$1;
(statearr_43557_43604[(2)] = inst_43510);

(statearr_43557_43604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (2))){
var state_43535__$1 = state_43535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43535__$1,(4),ch);
} else {
if((state_val_43536 === (23))){
var state_43535__$1 = state_43535;
var statearr_43558_43605 = state_43535__$1;
(statearr_43558_43605[(2)] = null);

(statearr_43558_43605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (19))){
var inst_43516 = (state_43535[(11)]);
var inst_43466 = (state_43535[(8)]);
var inst_43518 = cljs.core.async.muxch_STAR_.call(null,inst_43516);
var state_43535__$1 = state_43535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43535__$1,(22),inst_43518,inst_43466);
} else {
if((state_val_43536 === (11))){
var inst_43490 = (state_43535[(10)]);
var inst_43476 = (state_43535[(15)]);
var inst_43490__$1 = cljs.core.seq.call(null,inst_43476);
var state_43535__$1 = (function (){var statearr_43559 = state_43535;
(statearr_43559[(10)] = inst_43490__$1);

return statearr_43559;
})();
if(inst_43490__$1){
var statearr_43560_43606 = state_43535__$1;
(statearr_43560_43606[(1)] = (13));

} else {
var statearr_43561_43607 = state_43535__$1;
(statearr_43561_43607[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (9))){
var inst_43512 = (state_43535[(2)]);
var state_43535__$1 = state_43535;
var statearr_43562_43608 = state_43535__$1;
(statearr_43562_43608[(2)] = inst_43512);

(statearr_43562_43608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (5))){
var inst_43473 = cljs.core.deref.call(null,mults);
var inst_43474 = cljs.core.vals.call(null,inst_43473);
var inst_43475 = cljs.core.seq.call(null,inst_43474);
var inst_43476 = inst_43475;
var inst_43477 = null;
var inst_43478 = (0);
var inst_43479 = (0);
var state_43535__$1 = (function (){var statearr_43563 = state_43535;
(statearr_43563[(12)] = inst_43478);

(statearr_43563[(13)] = inst_43479);

(statearr_43563[(14)] = inst_43477);

(statearr_43563[(15)] = inst_43476);

return statearr_43563;
})();
var statearr_43564_43609 = state_43535__$1;
(statearr_43564_43609[(2)] = null);

(statearr_43564_43609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (14))){
var state_43535__$1 = state_43535;
var statearr_43568_43610 = state_43535__$1;
(statearr_43568_43610[(2)] = null);

(statearr_43568_43610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (16))){
var inst_43490 = (state_43535[(10)]);
var inst_43494 = cljs.core.chunk_first.call(null,inst_43490);
var inst_43495 = cljs.core.chunk_rest.call(null,inst_43490);
var inst_43496 = cljs.core.count.call(null,inst_43494);
var inst_43476 = inst_43495;
var inst_43477 = inst_43494;
var inst_43478 = inst_43496;
var inst_43479 = (0);
var state_43535__$1 = (function (){var statearr_43569 = state_43535;
(statearr_43569[(12)] = inst_43478);

(statearr_43569[(13)] = inst_43479);

(statearr_43569[(14)] = inst_43477);

(statearr_43569[(15)] = inst_43476);

return statearr_43569;
})();
var statearr_43570_43611 = state_43535__$1;
(statearr_43570_43611[(2)] = null);

(statearr_43570_43611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (10))){
var inst_43478 = (state_43535[(12)]);
var inst_43479 = (state_43535[(13)]);
var inst_43477 = (state_43535[(14)]);
var inst_43476 = (state_43535[(15)]);
var inst_43484 = cljs.core._nth.call(null,inst_43477,inst_43479);
var inst_43485 = cljs.core.async.muxch_STAR_.call(null,inst_43484);
var inst_43486 = cljs.core.async.close_BANG_.call(null,inst_43485);
var inst_43487 = (inst_43479 + (1));
var tmp43565 = inst_43478;
var tmp43566 = inst_43477;
var tmp43567 = inst_43476;
var inst_43476__$1 = tmp43567;
var inst_43477__$1 = tmp43566;
var inst_43478__$1 = tmp43565;
var inst_43479__$1 = inst_43487;
var state_43535__$1 = (function (){var statearr_43571 = state_43535;
(statearr_43571[(12)] = inst_43478__$1);

(statearr_43571[(13)] = inst_43479__$1);

(statearr_43571[(14)] = inst_43477__$1);

(statearr_43571[(17)] = inst_43486);

(statearr_43571[(15)] = inst_43476__$1);

return statearr_43571;
})();
var statearr_43572_43612 = state_43535__$1;
(statearr_43572_43612[(2)] = null);

(statearr_43572_43612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (18))){
var inst_43505 = (state_43535[(2)]);
var state_43535__$1 = state_43535;
var statearr_43573_43613 = state_43535__$1;
(statearr_43573_43613[(2)] = inst_43505);

(statearr_43573_43613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43536 === (8))){
var inst_43478 = (state_43535[(12)]);
var inst_43479 = (state_43535[(13)]);
var inst_43481 = (inst_43479 < inst_43478);
var inst_43482 = inst_43481;
var state_43535__$1 = state_43535;
if(cljs.core.truth_(inst_43482)){
var statearr_43574_43614 = state_43535__$1;
(statearr_43574_43614[(1)] = (10));

} else {
var statearr_43575_43615 = state_43535__$1;
(statearr_43575_43615[(1)] = (11));

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
});})(c__41654__auto___43587,mults,ensure_mult,p))
;
return ((function (switch__41540__auto__,c__41654__auto___43587,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__41541__auto__ = null;
var cljs$core$async$state_machine__41541__auto____0 = (function (){
var statearr_43579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43579[(0)] = cljs$core$async$state_machine__41541__auto__);

(statearr_43579[(1)] = (1));

return statearr_43579;
});
var cljs$core$async$state_machine__41541__auto____1 = (function (state_43535){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_43535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e43580){if((e43580 instanceof Object)){
var ex__41544__auto__ = e43580;
var statearr_43581_43616 = state_43535;
(statearr_43581_43616[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43617 = state_43535;
state_43535 = G__43617;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$state_machine__41541__auto__ = function(state_43535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41541__auto____1.call(this,state_43535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41541__auto____0;
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41541__auto____1;
return cljs$core$async$state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___43587,mults,ensure_mult,p))
})();
var state__41656__auto__ = (function (){var statearr_43582 = f__41655__auto__.call(null);
(statearr_43582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___43587);

return statearr_43582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___43587,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args43618 = [];
var len__19240__auto___43621 = arguments.length;
var i__19241__auto___43622 = (0);
while(true){
if((i__19241__auto___43622 < len__19240__auto___43621)){
args43618.push((arguments[i__19241__auto___43622]));

var G__43623 = (i__19241__auto___43622 + (1));
i__19241__auto___43622 = G__43623;
continue;
} else {
}
break;
}

var G__43620 = args43618.length;
switch (G__43620) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43618.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args43625 = [];
var len__19240__auto___43628 = arguments.length;
var i__19241__auto___43629 = (0);
while(true){
if((i__19241__auto___43629 < len__19240__auto___43628)){
args43625.push((arguments[i__19241__auto___43629]));

var G__43630 = (i__19241__auto___43629 + (1));
i__19241__auto___43629 = G__43630;
continue;
} else {
}
break;
}

var G__43627 = args43625.length;
switch (G__43627) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43625.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args43632 = [];
var len__19240__auto___43703 = arguments.length;
var i__19241__auto___43704 = (0);
while(true){
if((i__19241__auto___43704 < len__19240__auto___43703)){
args43632.push((arguments[i__19241__auto___43704]));

var G__43705 = (i__19241__auto___43704 + (1));
i__19241__auto___43704 = G__43705;
continue;
} else {
}
break;
}

var G__43634 = args43632.length;
switch (G__43634) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43632.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__41654__auto___43707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___43707,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___43707,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43673){
var state_val_43674 = (state_43673[(1)]);
if((state_val_43674 === (7))){
var state_43673__$1 = state_43673;
var statearr_43675_43708 = state_43673__$1;
(statearr_43675_43708[(2)] = null);

(statearr_43675_43708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (1))){
var state_43673__$1 = state_43673;
var statearr_43676_43709 = state_43673__$1;
(statearr_43676_43709[(2)] = null);

(statearr_43676_43709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (4))){
var inst_43637 = (state_43673[(7)]);
var inst_43639 = (inst_43637 < cnt);
var state_43673__$1 = state_43673;
if(cljs.core.truth_(inst_43639)){
var statearr_43677_43710 = state_43673__$1;
(statearr_43677_43710[(1)] = (6));

} else {
var statearr_43678_43711 = state_43673__$1;
(statearr_43678_43711[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (15))){
var inst_43669 = (state_43673[(2)]);
var state_43673__$1 = state_43673;
var statearr_43679_43712 = state_43673__$1;
(statearr_43679_43712[(2)] = inst_43669);

(statearr_43679_43712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (13))){
var inst_43662 = cljs.core.async.close_BANG_.call(null,out);
var state_43673__$1 = state_43673;
var statearr_43680_43713 = state_43673__$1;
(statearr_43680_43713[(2)] = inst_43662);

(statearr_43680_43713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (6))){
var state_43673__$1 = state_43673;
var statearr_43681_43714 = state_43673__$1;
(statearr_43681_43714[(2)] = null);

(statearr_43681_43714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (3))){
var inst_43671 = (state_43673[(2)]);
var state_43673__$1 = state_43673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43673__$1,inst_43671);
} else {
if((state_val_43674 === (12))){
var inst_43659 = (state_43673[(8)]);
var inst_43659__$1 = (state_43673[(2)]);
var inst_43660 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43659__$1);
var state_43673__$1 = (function (){var statearr_43682 = state_43673;
(statearr_43682[(8)] = inst_43659__$1);

return statearr_43682;
})();
if(cljs.core.truth_(inst_43660)){
var statearr_43683_43715 = state_43673__$1;
(statearr_43683_43715[(1)] = (13));

} else {
var statearr_43684_43716 = state_43673__$1;
(statearr_43684_43716[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (2))){
var inst_43636 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43637 = (0);
var state_43673__$1 = (function (){var statearr_43685 = state_43673;
(statearr_43685[(9)] = inst_43636);

(statearr_43685[(7)] = inst_43637);

return statearr_43685;
})();
var statearr_43686_43717 = state_43673__$1;
(statearr_43686_43717[(2)] = null);

(statearr_43686_43717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (11))){
var inst_43637 = (state_43673[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43673,(10),Object,null,(9));
var inst_43646 = chs__$1.call(null,inst_43637);
var inst_43647 = done.call(null,inst_43637);
var inst_43648 = cljs.core.async.take_BANG_.call(null,inst_43646,inst_43647);
var state_43673__$1 = state_43673;
var statearr_43687_43718 = state_43673__$1;
(statearr_43687_43718[(2)] = inst_43648);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43673__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (9))){
var inst_43637 = (state_43673[(7)]);
var inst_43650 = (state_43673[(2)]);
var inst_43651 = (inst_43637 + (1));
var inst_43637__$1 = inst_43651;
var state_43673__$1 = (function (){var statearr_43688 = state_43673;
(statearr_43688[(10)] = inst_43650);

(statearr_43688[(7)] = inst_43637__$1);

return statearr_43688;
})();
var statearr_43689_43719 = state_43673__$1;
(statearr_43689_43719[(2)] = null);

(statearr_43689_43719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (5))){
var inst_43657 = (state_43673[(2)]);
var state_43673__$1 = (function (){var statearr_43690 = state_43673;
(statearr_43690[(11)] = inst_43657);

return statearr_43690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43673__$1,(12),dchan);
} else {
if((state_val_43674 === (14))){
var inst_43659 = (state_43673[(8)]);
var inst_43664 = cljs.core.apply.call(null,f,inst_43659);
var state_43673__$1 = state_43673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43673__$1,(16),out,inst_43664);
} else {
if((state_val_43674 === (16))){
var inst_43666 = (state_43673[(2)]);
var state_43673__$1 = (function (){var statearr_43691 = state_43673;
(statearr_43691[(12)] = inst_43666);

return statearr_43691;
})();
var statearr_43692_43720 = state_43673__$1;
(statearr_43692_43720[(2)] = null);

(statearr_43692_43720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (10))){
var inst_43641 = (state_43673[(2)]);
var inst_43642 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43673__$1 = (function (){var statearr_43693 = state_43673;
(statearr_43693[(13)] = inst_43641);

return statearr_43693;
})();
var statearr_43694_43721 = state_43673__$1;
(statearr_43694_43721[(2)] = inst_43642);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43673__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (8))){
var inst_43655 = (state_43673[(2)]);
var state_43673__$1 = state_43673;
var statearr_43695_43722 = state_43673__$1;
(statearr_43695_43722[(2)] = inst_43655);

(statearr_43695_43722[(1)] = (5));


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
});})(c__41654__auto___43707,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__41540__auto__,c__41654__auto___43707,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__41541__auto__ = null;
var cljs$core$async$state_machine__41541__auto____0 = (function (){
var statearr_43699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43699[(0)] = cljs$core$async$state_machine__41541__auto__);

(statearr_43699[(1)] = (1));

return statearr_43699;
});
var cljs$core$async$state_machine__41541__auto____1 = (function (state_43673){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_43673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e43700){if((e43700 instanceof Object)){
var ex__41544__auto__ = e43700;
var statearr_43701_43723 = state_43673;
(statearr_43701_43723[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43724 = state_43673;
state_43673 = G__43724;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$state_machine__41541__auto__ = function(state_43673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41541__auto____1.call(this,state_43673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41541__auto____0;
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41541__auto____1;
return cljs$core$async$state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___43707,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__41656__auto__ = (function (){var statearr_43702 = f__41655__auto__.call(null);
(statearr_43702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___43707);

return statearr_43702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___43707,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args43726 = [];
var len__19240__auto___43784 = arguments.length;
var i__19241__auto___43785 = (0);
while(true){
if((i__19241__auto___43785 < len__19240__auto___43784)){
args43726.push((arguments[i__19241__auto___43785]));

var G__43786 = (i__19241__auto___43785 + (1));
i__19241__auto___43785 = G__43786;
continue;
} else {
}
break;
}

var G__43728 = args43726.length;
switch (G__43728) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43726.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41654__auto___43788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___43788,out){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___43788,out){
return (function (state_43760){
var state_val_43761 = (state_43760[(1)]);
if((state_val_43761 === (7))){
var inst_43740 = (state_43760[(7)]);
var inst_43739 = (state_43760[(8)]);
var inst_43739__$1 = (state_43760[(2)]);
var inst_43740__$1 = cljs.core.nth.call(null,inst_43739__$1,(0),null);
var inst_43741 = cljs.core.nth.call(null,inst_43739__$1,(1),null);
var inst_43742 = (inst_43740__$1 == null);
var state_43760__$1 = (function (){var statearr_43762 = state_43760;
(statearr_43762[(7)] = inst_43740__$1);

(statearr_43762[(8)] = inst_43739__$1);

(statearr_43762[(9)] = inst_43741);

return statearr_43762;
})();
if(cljs.core.truth_(inst_43742)){
var statearr_43763_43789 = state_43760__$1;
(statearr_43763_43789[(1)] = (8));

} else {
var statearr_43764_43790 = state_43760__$1;
(statearr_43764_43790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43761 === (1))){
var inst_43729 = cljs.core.vec.call(null,chs);
var inst_43730 = inst_43729;
var state_43760__$1 = (function (){var statearr_43765 = state_43760;
(statearr_43765[(10)] = inst_43730);

return statearr_43765;
})();
var statearr_43766_43791 = state_43760__$1;
(statearr_43766_43791[(2)] = null);

(statearr_43766_43791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43761 === (4))){
var inst_43730 = (state_43760[(10)]);
var state_43760__$1 = state_43760;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43760__$1,(7),inst_43730);
} else {
if((state_val_43761 === (6))){
var inst_43756 = (state_43760[(2)]);
var state_43760__$1 = state_43760;
var statearr_43767_43792 = state_43760__$1;
(statearr_43767_43792[(2)] = inst_43756);

(statearr_43767_43792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43761 === (3))){
var inst_43758 = (state_43760[(2)]);
var state_43760__$1 = state_43760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43760__$1,inst_43758);
} else {
if((state_val_43761 === (2))){
var inst_43730 = (state_43760[(10)]);
var inst_43732 = cljs.core.count.call(null,inst_43730);
var inst_43733 = (inst_43732 > (0));
var state_43760__$1 = state_43760;
if(cljs.core.truth_(inst_43733)){
var statearr_43769_43793 = state_43760__$1;
(statearr_43769_43793[(1)] = (4));

} else {
var statearr_43770_43794 = state_43760__$1;
(statearr_43770_43794[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43761 === (11))){
var inst_43730 = (state_43760[(10)]);
var inst_43749 = (state_43760[(2)]);
var tmp43768 = inst_43730;
var inst_43730__$1 = tmp43768;
var state_43760__$1 = (function (){var statearr_43771 = state_43760;
(statearr_43771[(11)] = inst_43749);

(statearr_43771[(10)] = inst_43730__$1);

return statearr_43771;
})();
var statearr_43772_43795 = state_43760__$1;
(statearr_43772_43795[(2)] = null);

(statearr_43772_43795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43761 === (9))){
var inst_43740 = (state_43760[(7)]);
var state_43760__$1 = state_43760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43760__$1,(11),out,inst_43740);
} else {
if((state_val_43761 === (5))){
var inst_43754 = cljs.core.async.close_BANG_.call(null,out);
var state_43760__$1 = state_43760;
var statearr_43773_43796 = state_43760__$1;
(statearr_43773_43796[(2)] = inst_43754);

(statearr_43773_43796[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43761 === (10))){
var inst_43752 = (state_43760[(2)]);
var state_43760__$1 = state_43760;
var statearr_43774_43797 = state_43760__$1;
(statearr_43774_43797[(2)] = inst_43752);

(statearr_43774_43797[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43761 === (8))){
var inst_43740 = (state_43760[(7)]);
var inst_43730 = (state_43760[(10)]);
var inst_43739 = (state_43760[(8)]);
var inst_43741 = (state_43760[(9)]);
var inst_43744 = (function (){var cs = inst_43730;
var vec__43735 = inst_43739;
var v = inst_43740;
var c = inst_43741;
return ((function (cs,vec__43735,v,c,inst_43740,inst_43730,inst_43739,inst_43741,state_val_43761,c__41654__auto___43788,out){
return (function (p1__43725_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43725_SHARP_);
});
;})(cs,vec__43735,v,c,inst_43740,inst_43730,inst_43739,inst_43741,state_val_43761,c__41654__auto___43788,out))
})();
var inst_43745 = cljs.core.filterv.call(null,inst_43744,inst_43730);
var inst_43730__$1 = inst_43745;
var state_43760__$1 = (function (){var statearr_43775 = state_43760;
(statearr_43775[(10)] = inst_43730__$1);

return statearr_43775;
})();
var statearr_43776_43798 = state_43760__$1;
(statearr_43776_43798[(2)] = null);

(statearr_43776_43798[(1)] = (2));


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
});})(c__41654__auto___43788,out))
;
return ((function (switch__41540__auto__,c__41654__auto___43788,out){
return (function() {
var cljs$core$async$state_machine__41541__auto__ = null;
var cljs$core$async$state_machine__41541__auto____0 = (function (){
var statearr_43780 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43780[(0)] = cljs$core$async$state_machine__41541__auto__);

(statearr_43780[(1)] = (1));

return statearr_43780;
});
var cljs$core$async$state_machine__41541__auto____1 = (function (state_43760){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_43760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e43781){if((e43781 instanceof Object)){
var ex__41544__auto__ = e43781;
var statearr_43782_43799 = state_43760;
(statearr_43782_43799[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43800 = state_43760;
state_43760 = G__43800;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$state_machine__41541__auto__ = function(state_43760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41541__auto____1.call(this,state_43760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41541__auto____0;
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41541__auto____1;
return cljs$core$async$state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___43788,out))
})();
var state__41656__auto__ = (function (){var statearr_43783 = f__41655__auto__.call(null);
(statearr_43783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___43788);

return statearr_43783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___43788,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args43801 = [];
var len__19240__auto___43850 = arguments.length;
var i__19241__auto___43851 = (0);
while(true){
if((i__19241__auto___43851 < len__19240__auto___43850)){
args43801.push((arguments[i__19241__auto___43851]));

var G__43852 = (i__19241__auto___43851 + (1));
i__19241__auto___43851 = G__43852;
continue;
} else {
}
break;
}

var G__43803 = args43801.length;
switch (G__43803) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43801.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41654__auto___43854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___43854,out){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___43854,out){
return (function (state_43827){
var state_val_43828 = (state_43827[(1)]);
if((state_val_43828 === (7))){
var inst_43809 = (state_43827[(7)]);
var inst_43809__$1 = (state_43827[(2)]);
var inst_43810 = (inst_43809__$1 == null);
var inst_43811 = cljs.core.not.call(null,inst_43810);
var state_43827__$1 = (function (){var statearr_43829 = state_43827;
(statearr_43829[(7)] = inst_43809__$1);

return statearr_43829;
})();
if(inst_43811){
var statearr_43830_43855 = state_43827__$1;
(statearr_43830_43855[(1)] = (8));

} else {
var statearr_43831_43856 = state_43827__$1;
(statearr_43831_43856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43828 === (1))){
var inst_43804 = (0);
var state_43827__$1 = (function (){var statearr_43832 = state_43827;
(statearr_43832[(8)] = inst_43804);

return statearr_43832;
})();
var statearr_43833_43857 = state_43827__$1;
(statearr_43833_43857[(2)] = null);

(statearr_43833_43857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43828 === (4))){
var state_43827__$1 = state_43827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43827__$1,(7),ch);
} else {
if((state_val_43828 === (6))){
var inst_43822 = (state_43827[(2)]);
var state_43827__$1 = state_43827;
var statearr_43834_43858 = state_43827__$1;
(statearr_43834_43858[(2)] = inst_43822);

(statearr_43834_43858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43828 === (3))){
var inst_43824 = (state_43827[(2)]);
var inst_43825 = cljs.core.async.close_BANG_.call(null,out);
var state_43827__$1 = (function (){var statearr_43835 = state_43827;
(statearr_43835[(9)] = inst_43824);

return statearr_43835;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43827__$1,inst_43825);
} else {
if((state_val_43828 === (2))){
var inst_43804 = (state_43827[(8)]);
var inst_43806 = (inst_43804 < n);
var state_43827__$1 = state_43827;
if(cljs.core.truth_(inst_43806)){
var statearr_43836_43859 = state_43827__$1;
(statearr_43836_43859[(1)] = (4));

} else {
var statearr_43837_43860 = state_43827__$1;
(statearr_43837_43860[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43828 === (11))){
var inst_43804 = (state_43827[(8)]);
var inst_43814 = (state_43827[(2)]);
var inst_43815 = (inst_43804 + (1));
var inst_43804__$1 = inst_43815;
var state_43827__$1 = (function (){var statearr_43838 = state_43827;
(statearr_43838[(10)] = inst_43814);

(statearr_43838[(8)] = inst_43804__$1);

return statearr_43838;
})();
var statearr_43839_43861 = state_43827__$1;
(statearr_43839_43861[(2)] = null);

(statearr_43839_43861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43828 === (9))){
var state_43827__$1 = state_43827;
var statearr_43840_43862 = state_43827__$1;
(statearr_43840_43862[(2)] = null);

(statearr_43840_43862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43828 === (5))){
var state_43827__$1 = state_43827;
var statearr_43841_43863 = state_43827__$1;
(statearr_43841_43863[(2)] = null);

(statearr_43841_43863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43828 === (10))){
var inst_43819 = (state_43827[(2)]);
var state_43827__$1 = state_43827;
var statearr_43842_43864 = state_43827__$1;
(statearr_43842_43864[(2)] = inst_43819);

(statearr_43842_43864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43828 === (8))){
var inst_43809 = (state_43827[(7)]);
var state_43827__$1 = state_43827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43827__$1,(11),out,inst_43809);
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
});})(c__41654__auto___43854,out))
;
return ((function (switch__41540__auto__,c__41654__auto___43854,out){
return (function() {
var cljs$core$async$state_machine__41541__auto__ = null;
var cljs$core$async$state_machine__41541__auto____0 = (function (){
var statearr_43846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43846[(0)] = cljs$core$async$state_machine__41541__auto__);

(statearr_43846[(1)] = (1));

return statearr_43846;
});
var cljs$core$async$state_machine__41541__auto____1 = (function (state_43827){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_43827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e43847){if((e43847 instanceof Object)){
var ex__41544__auto__ = e43847;
var statearr_43848_43865 = state_43827;
(statearr_43848_43865[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43866 = state_43827;
state_43827 = G__43866;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$state_machine__41541__auto__ = function(state_43827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41541__auto____1.call(this,state_43827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41541__auto____0;
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41541__auto____1;
return cljs$core$async$state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___43854,out))
})();
var state__41656__auto__ = (function (){var statearr_43849 = f__41655__auto__.call(null);
(statearr_43849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___43854);

return statearr_43849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___43854,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43874 = (function (map_LT_,f,ch,meta43875){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta43875 = meta43875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43876,meta43875__$1){
var self__ = this;
var _43876__$1 = this;
return (new cljs.core.async.t_cljs$core$async43874(self__.map_LT_,self__.f,self__.ch,meta43875__$1));
});

cljs.core.async.t_cljs$core$async43874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43876){
var self__ = this;
var _43876__$1 = this;
return self__.meta43875;
});


cljs.core.async.t_cljs$core$async43874.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43874.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43874.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async43874.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43874.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43877 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43877 = (function (map_LT_,f,ch,meta43875,_,fn1,meta43878){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta43875 = meta43875;
this._ = _;
this.fn1 = fn1;
this.meta43878 = meta43878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43879,meta43878__$1){
var self__ = this;
var _43879__$1 = this;
return (new cljs.core.async.t_cljs$core$async43877(self__.map_LT_,self__.f,self__.ch,self__.meta43875,self__._,self__.fn1,meta43878__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43879){
var self__ = this;
var _43879__$1 = this;
return self__.meta43878;
});})(___$1))
;


cljs.core.async.t_cljs$core$async43877.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async43877.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43877.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43877.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43867_SHARP_){
return f1.call(null,(((p1__43867_SHARP_ == null))?null:self__.f.call(null,p1__43867_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43877.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43875","meta43875",1668061666,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43874","cljs.core.async/t_cljs$core$async43874",-1162022375,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43878","meta43878",-562050821,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43877";

cljs.core.async.t_cljs$core$async43877.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.core.async/t_cljs$core$async43877");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43877 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43877(map_LT___$1,f__$1,ch__$1,meta43875__$1,___$2,fn1__$1,meta43878){
return (new cljs.core.async.t_cljs$core$async43877(map_LT___$1,f__$1,ch__$1,meta43875__$1,___$2,fn1__$1,meta43878));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43877(self__.map_LT_,self__.f,self__.ch,self__.meta43875,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18045__auto__ = ret;
if(cljs.core.truth_(and__18045__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18045__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async43874.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43874.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43875","meta43875",1668061666,null)], null);
});

cljs.core.async.t_cljs$core$async43874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43874";

cljs.core.async.t_cljs$core$async43874.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.core.async/t_cljs$core$async43874");
});

cljs.core.async.__GT_t_cljs$core$async43874 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43874(map_LT___$1,f__$1,ch__$1,meta43875){
return (new cljs.core.async.t_cljs$core$async43874(map_LT___$1,f__$1,ch__$1,meta43875));
});

}

return (new cljs.core.async.t_cljs$core$async43874(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43883 = (function (map_GT_,f,ch,meta43884){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta43884 = meta43884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43885,meta43884__$1){
var self__ = this;
var _43885__$1 = this;
return (new cljs.core.async.t_cljs$core$async43883(self__.map_GT_,self__.f,self__.ch,meta43884__$1));
});

cljs.core.async.t_cljs$core$async43883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43885){
var self__ = this;
var _43885__$1 = this;
return self__.meta43884;
});


cljs.core.async.t_cljs$core$async43883.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43883.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async43883.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43883.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async43883.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43883.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43884","meta43884",-962640934,null)], null);
});

cljs.core.async.t_cljs$core$async43883.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43883";

cljs.core.async.t_cljs$core$async43883.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.core.async/t_cljs$core$async43883");
});

cljs.core.async.__GT_t_cljs$core$async43883 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43883(map_GT___$1,f__$1,ch__$1,meta43884){
return (new cljs.core.async.t_cljs$core$async43883(map_GT___$1,f__$1,ch__$1,meta43884));
});

}

return (new cljs.core.async.t_cljs$core$async43883(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43889 = (function (filter_GT_,p,ch,meta43890){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta43890 = meta43890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43891,meta43890__$1){
var self__ = this;
var _43891__$1 = this;
return (new cljs.core.async.t_cljs$core$async43889(self__.filter_GT_,self__.p,self__.ch,meta43890__$1));
});

cljs.core.async.t_cljs$core$async43889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43891){
var self__ = this;
var _43891__$1 = this;
return self__.meta43890;
});


cljs.core.async.t_cljs$core$async43889.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43889.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async43889.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async43889.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43890","meta43890",45359741,null)], null);
});

cljs.core.async.t_cljs$core$async43889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43889";

cljs.core.async.t_cljs$core$async43889.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cljs.core.async/t_cljs$core$async43889");
});

cljs.core.async.__GT_t_cljs$core$async43889 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43889(filter_GT___$1,p__$1,ch__$1,meta43890){
return (new cljs.core.async.t_cljs$core$async43889(filter_GT___$1,p__$1,ch__$1,meta43890));
});

}

return (new cljs.core.async.t_cljs$core$async43889(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args43892 = [];
var len__19240__auto___43936 = arguments.length;
var i__19241__auto___43937 = (0);
while(true){
if((i__19241__auto___43937 < len__19240__auto___43936)){
args43892.push((arguments[i__19241__auto___43937]));

var G__43938 = (i__19241__auto___43937 + (1));
i__19241__auto___43937 = G__43938;
continue;
} else {
}
break;
}

var G__43894 = args43892.length;
switch (G__43894) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43892.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41654__auto___43940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___43940,out){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___43940,out){
return (function (state_43915){
var state_val_43916 = (state_43915[(1)]);
if((state_val_43916 === (7))){
var inst_43911 = (state_43915[(2)]);
var state_43915__$1 = state_43915;
var statearr_43917_43941 = state_43915__$1;
(statearr_43917_43941[(2)] = inst_43911);

(statearr_43917_43941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (1))){
var state_43915__$1 = state_43915;
var statearr_43918_43942 = state_43915__$1;
(statearr_43918_43942[(2)] = null);

(statearr_43918_43942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (4))){
var inst_43897 = (state_43915[(7)]);
var inst_43897__$1 = (state_43915[(2)]);
var inst_43898 = (inst_43897__$1 == null);
var state_43915__$1 = (function (){var statearr_43919 = state_43915;
(statearr_43919[(7)] = inst_43897__$1);

return statearr_43919;
})();
if(cljs.core.truth_(inst_43898)){
var statearr_43920_43943 = state_43915__$1;
(statearr_43920_43943[(1)] = (5));

} else {
var statearr_43921_43944 = state_43915__$1;
(statearr_43921_43944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (6))){
var inst_43897 = (state_43915[(7)]);
var inst_43902 = p.call(null,inst_43897);
var state_43915__$1 = state_43915;
if(cljs.core.truth_(inst_43902)){
var statearr_43922_43945 = state_43915__$1;
(statearr_43922_43945[(1)] = (8));

} else {
var statearr_43923_43946 = state_43915__$1;
(statearr_43923_43946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (3))){
var inst_43913 = (state_43915[(2)]);
var state_43915__$1 = state_43915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43915__$1,inst_43913);
} else {
if((state_val_43916 === (2))){
var state_43915__$1 = state_43915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43915__$1,(4),ch);
} else {
if((state_val_43916 === (11))){
var inst_43905 = (state_43915[(2)]);
var state_43915__$1 = state_43915;
var statearr_43924_43947 = state_43915__$1;
(statearr_43924_43947[(2)] = inst_43905);

(statearr_43924_43947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (9))){
var state_43915__$1 = state_43915;
var statearr_43925_43948 = state_43915__$1;
(statearr_43925_43948[(2)] = null);

(statearr_43925_43948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (5))){
var inst_43900 = cljs.core.async.close_BANG_.call(null,out);
var state_43915__$1 = state_43915;
var statearr_43926_43949 = state_43915__$1;
(statearr_43926_43949[(2)] = inst_43900);

(statearr_43926_43949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (10))){
var inst_43908 = (state_43915[(2)]);
var state_43915__$1 = (function (){var statearr_43927 = state_43915;
(statearr_43927[(8)] = inst_43908);

return statearr_43927;
})();
var statearr_43928_43950 = state_43915__$1;
(statearr_43928_43950[(2)] = null);

(statearr_43928_43950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (8))){
var inst_43897 = (state_43915[(7)]);
var state_43915__$1 = state_43915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43915__$1,(11),out,inst_43897);
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
});})(c__41654__auto___43940,out))
;
return ((function (switch__41540__auto__,c__41654__auto___43940,out){
return (function() {
var cljs$core$async$state_machine__41541__auto__ = null;
var cljs$core$async$state_machine__41541__auto____0 = (function (){
var statearr_43932 = [null,null,null,null,null,null,null,null,null];
(statearr_43932[(0)] = cljs$core$async$state_machine__41541__auto__);

(statearr_43932[(1)] = (1));

return statearr_43932;
});
var cljs$core$async$state_machine__41541__auto____1 = (function (state_43915){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_43915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e43933){if((e43933 instanceof Object)){
var ex__41544__auto__ = e43933;
var statearr_43934_43951 = state_43915;
(statearr_43934_43951[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43952 = state_43915;
state_43915 = G__43952;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$state_machine__41541__auto__ = function(state_43915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41541__auto____1.call(this,state_43915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41541__auto____0;
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41541__auto____1;
return cljs$core$async$state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___43940,out))
})();
var state__41656__auto__ = (function (){var statearr_43935 = f__41655__auto__.call(null);
(statearr_43935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___43940);

return statearr_43935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___43940,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args43953 = [];
var len__19240__auto___43956 = arguments.length;
var i__19241__auto___43957 = (0);
while(true){
if((i__19241__auto___43957 < len__19240__auto___43956)){
args43953.push((arguments[i__19241__auto___43957]));

var G__43958 = (i__19241__auto___43957 + (1));
i__19241__auto___43957 = G__43958;
continue;
} else {
}
break;
}

var G__43955 = args43953.length;
switch (G__43955) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43953.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__41654__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto__){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto__){
return (function (state_44125){
var state_val_44126 = (state_44125[(1)]);
if((state_val_44126 === (7))){
var inst_44121 = (state_44125[(2)]);
var state_44125__$1 = state_44125;
var statearr_44127_44168 = state_44125__$1;
(statearr_44127_44168[(2)] = inst_44121);

(statearr_44127_44168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (20))){
var inst_44091 = (state_44125[(7)]);
var inst_44102 = (state_44125[(2)]);
var inst_44103 = cljs.core.next.call(null,inst_44091);
var inst_44077 = inst_44103;
var inst_44078 = null;
var inst_44079 = (0);
var inst_44080 = (0);
var state_44125__$1 = (function (){var statearr_44128 = state_44125;
(statearr_44128[(8)] = inst_44102);

(statearr_44128[(9)] = inst_44078);

(statearr_44128[(10)] = inst_44079);

(statearr_44128[(11)] = inst_44080);

(statearr_44128[(12)] = inst_44077);

return statearr_44128;
})();
var statearr_44129_44169 = state_44125__$1;
(statearr_44129_44169[(2)] = null);

(statearr_44129_44169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (1))){
var state_44125__$1 = state_44125;
var statearr_44130_44170 = state_44125__$1;
(statearr_44130_44170[(2)] = null);

(statearr_44130_44170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (4))){
var inst_44066 = (state_44125[(13)]);
var inst_44066__$1 = (state_44125[(2)]);
var inst_44067 = (inst_44066__$1 == null);
var state_44125__$1 = (function (){var statearr_44131 = state_44125;
(statearr_44131[(13)] = inst_44066__$1);

return statearr_44131;
})();
if(cljs.core.truth_(inst_44067)){
var statearr_44132_44171 = state_44125__$1;
(statearr_44132_44171[(1)] = (5));

} else {
var statearr_44133_44172 = state_44125__$1;
(statearr_44133_44172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (15))){
var state_44125__$1 = state_44125;
var statearr_44137_44173 = state_44125__$1;
(statearr_44137_44173[(2)] = null);

(statearr_44137_44173[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (21))){
var state_44125__$1 = state_44125;
var statearr_44138_44174 = state_44125__$1;
(statearr_44138_44174[(2)] = null);

(statearr_44138_44174[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (13))){
var inst_44078 = (state_44125[(9)]);
var inst_44079 = (state_44125[(10)]);
var inst_44080 = (state_44125[(11)]);
var inst_44077 = (state_44125[(12)]);
var inst_44087 = (state_44125[(2)]);
var inst_44088 = (inst_44080 + (1));
var tmp44134 = inst_44078;
var tmp44135 = inst_44079;
var tmp44136 = inst_44077;
var inst_44077__$1 = tmp44136;
var inst_44078__$1 = tmp44134;
var inst_44079__$1 = tmp44135;
var inst_44080__$1 = inst_44088;
var state_44125__$1 = (function (){var statearr_44139 = state_44125;
(statearr_44139[(14)] = inst_44087);

(statearr_44139[(9)] = inst_44078__$1);

(statearr_44139[(10)] = inst_44079__$1);

(statearr_44139[(11)] = inst_44080__$1);

(statearr_44139[(12)] = inst_44077__$1);

return statearr_44139;
})();
var statearr_44140_44175 = state_44125__$1;
(statearr_44140_44175[(2)] = null);

(statearr_44140_44175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (22))){
var state_44125__$1 = state_44125;
var statearr_44141_44176 = state_44125__$1;
(statearr_44141_44176[(2)] = null);

(statearr_44141_44176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (6))){
var inst_44066 = (state_44125[(13)]);
var inst_44075 = f.call(null,inst_44066);
var inst_44076 = cljs.core.seq.call(null,inst_44075);
var inst_44077 = inst_44076;
var inst_44078 = null;
var inst_44079 = (0);
var inst_44080 = (0);
var state_44125__$1 = (function (){var statearr_44142 = state_44125;
(statearr_44142[(9)] = inst_44078);

(statearr_44142[(10)] = inst_44079);

(statearr_44142[(11)] = inst_44080);

(statearr_44142[(12)] = inst_44077);

return statearr_44142;
})();
var statearr_44143_44177 = state_44125__$1;
(statearr_44143_44177[(2)] = null);

(statearr_44143_44177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (17))){
var inst_44091 = (state_44125[(7)]);
var inst_44095 = cljs.core.chunk_first.call(null,inst_44091);
var inst_44096 = cljs.core.chunk_rest.call(null,inst_44091);
var inst_44097 = cljs.core.count.call(null,inst_44095);
var inst_44077 = inst_44096;
var inst_44078 = inst_44095;
var inst_44079 = inst_44097;
var inst_44080 = (0);
var state_44125__$1 = (function (){var statearr_44144 = state_44125;
(statearr_44144[(9)] = inst_44078);

(statearr_44144[(10)] = inst_44079);

(statearr_44144[(11)] = inst_44080);

(statearr_44144[(12)] = inst_44077);

return statearr_44144;
})();
var statearr_44145_44178 = state_44125__$1;
(statearr_44145_44178[(2)] = null);

(statearr_44145_44178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (3))){
var inst_44123 = (state_44125[(2)]);
var state_44125__$1 = state_44125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44125__$1,inst_44123);
} else {
if((state_val_44126 === (12))){
var inst_44111 = (state_44125[(2)]);
var state_44125__$1 = state_44125;
var statearr_44146_44179 = state_44125__$1;
(statearr_44146_44179[(2)] = inst_44111);

(statearr_44146_44179[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (2))){
var state_44125__$1 = state_44125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44125__$1,(4),in$);
} else {
if((state_val_44126 === (23))){
var inst_44119 = (state_44125[(2)]);
var state_44125__$1 = state_44125;
var statearr_44147_44180 = state_44125__$1;
(statearr_44147_44180[(2)] = inst_44119);

(statearr_44147_44180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (19))){
var inst_44106 = (state_44125[(2)]);
var state_44125__$1 = state_44125;
var statearr_44148_44181 = state_44125__$1;
(statearr_44148_44181[(2)] = inst_44106);

(statearr_44148_44181[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (11))){
var inst_44091 = (state_44125[(7)]);
var inst_44077 = (state_44125[(12)]);
var inst_44091__$1 = cljs.core.seq.call(null,inst_44077);
var state_44125__$1 = (function (){var statearr_44149 = state_44125;
(statearr_44149[(7)] = inst_44091__$1);

return statearr_44149;
})();
if(inst_44091__$1){
var statearr_44150_44182 = state_44125__$1;
(statearr_44150_44182[(1)] = (14));

} else {
var statearr_44151_44183 = state_44125__$1;
(statearr_44151_44183[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (9))){
var inst_44113 = (state_44125[(2)]);
var inst_44114 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_44125__$1 = (function (){var statearr_44152 = state_44125;
(statearr_44152[(15)] = inst_44113);

return statearr_44152;
})();
if(cljs.core.truth_(inst_44114)){
var statearr_44153_44184 = state_44125__$1;
(statearr_44153_44184[(1)] = (21));

} else {
var statearr_44154_44185 = state_44125__$1;
(statearr_44154_44185[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (5))){
var inst_44069 = cljs.core.async.close_BANG_.call(null,out);
var state_44125__$1 = state_44125;
var statearr_44155_44186 = state_44125__$1;
(statearr_44155_44186[(2)] = inst_44069);

(statearr_44155_44186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (14))){
var inst_44091 = (state_44125[(7)]);
var inst_44093 = cljs.core.chunked_seq_QMARK_.call(null,inst_44091);
var state_44125__$1 = state_44125;
if(inst_44093){
var statearr_44156_44187 = state_44125__$1;
(statearr_44156_44187[(1)] = (17));

} else {
var statearr_44157_44188 = state_44125__$1;
(statearr_44157_44188[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (16))){
var inst_44109 = (state_44125[(2)]);
var state_44125__$1 = state_44125;
var statearr_44158_44189 = state_44125__$1;
(statearr_44158_44189[(2)] = inst_44109);

(statearr_44158_44189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (10))){
var inst_44078 = (state_44125[(9)]);
var inst_44080 = (state_44125[(11)]);
var inst_44085 = cljs.core._nth.call(null,inst_44078,inst_44080);
var state_44125__$1 = state_44125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44125__$1,(13),out,inst_44085);
} else {
if((state_val_44126 === (18))){
var inst_44091 = (state_44125[(7)]);
var inst_44100 = cljs.core.first.call(null,inst_44091);
var state_44125__$1 = state_44125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44125__$1,(20),out,inst_44100);
} else {
if((state_val_44126 === (8))){
var inst_44079 = (state_44125[(10)]);
var inst_44080 = (state_44125[(11)]);
var inst_44082 = (inst_44080 < inst_44079);
var inst_44083 = inst_44082;
var state_44125__$1 = state_44125;
if(cljs.core.truth_(inst_44083)){
var statearr_44159_44190 = state_44125__$1;
(statearr_44159_44190[(1)] = (10));

} else {
var statearr_44160_44191 = state_44125__$1;
(statearr_44160_44191[(1)] = (11));

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
});})(c__41654__auto__))
;
return ((function (switch__41540__auto__,c__41654__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__41541__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41541__auto____0 = (function (){
var statearr_44164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44164[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41541__auto__);

(statearr_44164[(1)] = (1));

return statearr_44164;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41541__auto____1 = (function (state_44125){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_44125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e44165){if((e44165 instanceof Object)){
var ex__41544__auto__ = e44165;
var statearr_44166_44192 = state_44125;
(statearr_44166_44192[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44193 = state_44125;
state_44125 = G__44193;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41541__auto__ = function(state_44125){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41541__auto____1.call(this,state_44125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41541__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41541__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto__))
})();
var state__41656__auto__ = (function (){var statearr_44167 = f__41655__auto__.call(null);
(statearr_44167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto__);

return statearr_44167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto__))
);

return c__41654__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args44194 = [];
var len__19240__auto___44197 = arguments.length;
var i__19241__auto___44198 = (0);
while(true){
if((i__19241__auto___44198 < len__19240__auto___44197)){
args44194.push((arguments[i__19241__auto___44198]));

var G__44199 = (i__19241__auto___44198 + (1));
i__19241__auto___44198 = G__44199;
continue;
} else {
}
break;
}

var G__44196 = args44194.length;
switch (G__44196) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44194.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args44201 = [];
var len__19240__auto___44204 = arguments.length;
var i__19241__auto___44205 = (0);
while(true){
if((i__19241__auto___44205 < len__19240__auto___44204)){
args44201.push((arguments[i__19241__auto___44205]));

var G__44206 = (i__19241__auto___44205 + (1));
i__19241__auto___44205 = G__44206;
continue;
} else {
}
break;
}

var G__44203 = args44201.length;
switch (G__44203) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44201.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args44208 = [];
var len__19240__auto___44259 = arguments.length;
var i__19241__auto___44260 = (0);
while(true){
if((i__19241__auto___44260 < len__19240__auto___44259)){
args44208.push((arguments[i__19241__auto___44260]));

var G__44261 = (i__19241__auto___44260 + (1));
i__19241__auto___44260 = G__44261;
continue;
} else {
}
break;
}

var G__44210 = args44208.length;
switch (G__44210) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44208.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41654__auto___44263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___44263,out){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___44263,out){
return (function (state_44234){
var state_val_44235 = (state_44234[(1)]);
if((state_val_44235 === (7))){
var inst_44229 = (state_44234[(2)]);
var state_44234__$1 = state_44234;
var statearr_44236_44264 = state_44234__$1;
(statearr_44236_44264[(2)] = inst_44229);

(statearr_44236_44264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (1))){
var inst_44211 = null;
var state_44234__$1 = (function (){var statearr_44237 = state_44234;
(statearr_44237[(7)] = inst_44211);

return statearr_44237;
})();
var statearr_44238_44265 = state_44234__$1;
(statearr_44238_44265[(2)] = null);

(statearr_44238_44265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (4))){
var inst_44214 = (state_44234[(8)]);
var inst_44214__$1 = (state_44234[(2)]);
var inst_44215 = (inst_44214__$1 == null);
var inst_44216 = cljs.core.not.call(null,inst_44215);
var state_44234__$1 = (function (){var statearr_44239 = state_44234;
(statearr_44239[(8)] = inst_44214__$1);

return statearr_44239;
})();
if(inst_44216){
var statearr_44240_44266 = state_44234__$1;
(statearr_44240_44266[(1)] = (5));

} else {
var statearr_44241_44267 = state_44234__$1;
(statearr_44241_44267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (6))){
var state_44234__$1 = state_44234;
var statearr_44242_44268 = state_44234__$1;
(statearr_44242_44268[(2)] = null);

(statearr_44242_44268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (3))){
var inst_44231 = (state_44234[(2)]);
var inst_44232 = cljs.core.async.close_BANG_.call(null,out);
var state_44234__$1 = (function (){var statearr_44243 = state_44234;
(statearr_44243[(9)] = inst_44231);

return statearr_44243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44234__$1,inst_44232);
} else {
if((state_val_44235 === (2))){
var state_44234__$1 = state_44234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44234__$1,(4),ch);
} else {
if((state_val_44235 === (11))){
var inst_44214 = (state_44234[(8)]);
var inst_44223 = (state_44234[(2)]);
var inst_44211 = inst_44214;
var state_44234__$1 = (function (){var statearr_44244 = state_44234;
(statearr_44244[(10)] = inst_44223);

(statearr_44244[(7)] = inst_44211);

return statearr_44244;
})();
var statearr_44245_44269 = state_44234__$1;
(statearr_44245_44269[(2)] = null);

(statearr_44245_44269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (9))){
var inst_44214 = (state_44234[(8)]);
var state_44234__$1 = state_44234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44234__$1,(11),out,inst_44214);
} else {
if((state_val_44235 === (5))){
var inst_44214 = (state_44234[(8)]);
var inst_44211 = (state_44234[(7)]);
var inst_44218 = cljs.core._EQ_.call(null,inst_44214,inst_44211);
var state_44234__$1 = state_44234;
if(inst_44218){
var statearr_44247_44270 = state_44234__$1;
(statearr_44247_44270[(1)] = (8));

} else {
var statearr_44248_44271 = state_44234__$1;
(statearr_44248_44271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (10))){
var inst_44226 = (state_44234[(2)]);
var state_44234__$1 = state_44234;
var statearr_44249_44272 = state_44234__$1;
(statearr_44249_44272[(2)] = inst_44226);

(statearr_44249_44272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (8))){
var inst_44211 = (state_44234[(7)]);
var tmp44246 = inst_44211;
var inst_44211__$1 = tmp44246;
var state_44234__$1 = (function (){var statearr_44250 = state_44234;
(statearr_44250[(7)] = inst_44211__$1);

return statearr_44250;
})();
var statearr_44251_44273 = state_44234__$1;
(statearr_44251_44273[(2)] = null);

(statearr_44251_44273[(1)] = (2));


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
});})(c__41654__auto___44263,out))
;
return ((function (switch__41540__auto__,c__41654__auto___44263,out){
return (function() {
var cljs$core$async$state_machine__41541__auto__ = null;
var cljs$core$async$state_machine__41541__auto____0 = (function (){
var statearr_44255 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44255[(0)] = cljs$core$async$state_machine__41541__auto__);

(statearr_44255[(1)] = (1));

return statearr_44255;
});
var cljs$core$async$state_machine__41541__auto____1 = (function (state_44234){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_44234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e44256){if((e44256 instanceof Object)){
var ex__41544__auto__ = e44256;
var statearr_44257_44274 = state_44234;
(statearr_44257_44274[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44275 = state_44234;
state_44234 = G__44275;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$state_machine__41541__auto__ = function(state_44234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41541__auto____1.call(this,state_44234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41541__auto____0;
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41541__auto____1;
return cljs$core$async$state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___44263,out))
})();
var state__41656__auto__ = (function (){var statearr_44258 = f__41655__auto__.call(null);
(statearr_44258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___44263);

return statearr_44258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___44263,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args44276 = [];
var len__19240__auto___44346 = arguments.length;
var i__19241__auto___44347 = (0);
while(true){
if((i__19241__auto___44347 < len__19240__auto___44346)){
args44276.push((arguments[i__19241__auto___44347]));

var G__44348 = (i__19241__auto___44347 + (1));
i__19241__auto___44347 = G__44348;
continue;
} else {
}
break;
}

var G__44278 = args44276.length;
switch (G__44278) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44276.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41654__auto___44350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___44350,out){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___44350,out){
return (function (state_44316){
var state_val_44317 = (state_44316[(1)]);
if((state_val_44317 === (7))){
var inst_44312 = (state_44316[(2)]);
var state_44316__$1 = state_44316;
var statearr_44318_44351 = state_44316__$1;
(statearr_44318_44351[(2)] = inst_44312);

(statearr_44318_44351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44317 === (1))){
var inst_44279 = (new Array(n));
var inst_44280 = inst_44279;
var inst_44281 = (0);
var state_44316__$1 = (function (){var statearr_44319 = state_44316;
(statearr_44319[(7)] = inst_44281);

(statearr_44319[(8)] = inst_44280);

return statearr_44319;
})();
var statearr_44320_44352 = state_44316__$1;
(statearr_44320_44352[(2)] = null);

(statearr_44320_44352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44317 === (4))){
var inst_44284 = (state_44316[(9)]);
var inst_44284__$1 = (state_44316[(2)]);
var inst_44285 = (inst_44284__$1 == null);
var inst_44286 = cljs.core.not.call(null,inst_44285);
var state_44316__$1 = (function (){var statearr_44321 = state_44316;
(statearr_44321[(9)] = inst_44284__$1);

return statearr_44321;
})();
if(inst_44286){
var statearr_44322_44353 = state_44316__$1;
(statearr_44322_44353[(1)] = (5));

} else {
var statearr_44323_44354 = state_44316__$1;
(statearr_44323_44354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44317 === (15))){
var inst_44306 = (state_44316[(2)]);
var state_44316__$1 = state_44316;
var statearr_44324_44355 = state_44316__$1;
(statearr_44324_44355[(2)] = inst_44306);

(statearr_44324_44355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44317 === (13))){
var state_44316__$1 = state_44316;
var statearr_44325_44356 = state_44316__$1;
(statearr_44325_44356[(2)] = null);

(statearr_44325_44356[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44317 === (6))){
var inst_44281 = (state_44316[(7)]);
var inst_44302 = (inst_44281 > (0));
var state_44316__$1 = state_44316;
if(cljs.core.truth_(inst_44302)){
var statearr_44326_44357 = state_44316__$1;
(statearr_44326_44357[(1)] = (12));

} else {
var statearr_44327_44358 = state_44316__$1;
(statearr_44327_44358[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44317 === (3))){
var inst_44314 = (state_44316[(2)]);
var state_44316__$1 = state_44316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44316__$1,inst_44314);
} else {
if((state_val_44317 === (12))){
var inst_44280 = (state_44316[(8)]);
var inst_44304 = cljs.core.vec.call(null,inst_44280);
var state_44316__$1 = state_44316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44316__$1,(15),out,inst_44304);
} else {
if((state_val_44317 === (2))){
var state_44316__$1 = state_44316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44316__$1,(4),ch);
} else {
if((state_val_44317 === (11))){
var inst_44296 = (state_44316[(2)]);
var inst_44297 = (new Array(n));
var inst_44280 = inst_44297;
var inst_44281 = (0);
var state_44316__$1 = (function (){var statearr_44328 = state_44316;
(statearr_44328[(7)] = inst_44281);

(statearr_44328[(8)] = inst_44280);

(statearr_44328[(10)] = inst_44296);

return statearr_44328;
})();
var statearr_44329_44359 = state_44316__$1;
(statearr_44329_44359[(2)] = null);

(statearr_44329_44359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44317 === (9))){
var inst_44280 = (state_44316[(8)]);
var inst_44294 = cljs.core.vec.call(null,inst_44280);
var state_44316__$1 = state_44316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44316__$1,(11),out,inst_44294);
} else {
if((state_val_44317 === (5))){
var inst_44289 = (state_44316[(11)]);
var inst_44281 = (state_44316[(7)]);
var inst_44280 = (state_44316[(8)]);
var inst_44284 = (state_44316[(9)]);
var inst_44288 = (inst_44280[inst_44281] = inst_44284);
var inst_44289__$1 = (inst_44281 + (1));
var inst_44290 = (inst_44289__$1 < n);
var state_44316__$1 = (function (){var statearr_44330 = state_44316;
(statearr_44330[(12)] = inst_44288);

(statearr_44330[(11)] = inst_44289__$1);

return statearr_44330;
})();
if(cljs.core.truth_(inst_44290)){
var statearr_44331_44360 = state_44316__$1;
(statearr_44331_44360[(1)] = (8));

} else {
var statearr_44332_44361 = state_44316__$1;
(statearr_44332_44361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44317 === (14))){
var inst_44309 = (state_44316[(2)]);
var inst_44310 = cljs.core.async.close_BANG_.call(null,out);
var state_44316__$1 = (function (){var statearr_44334 = state_44316;
(statearr_44334[(13)] = inst_44309);

return statearr_44334;
})();
var statearr_44335_44362 = state_44316__$1;
(statearr_44335_44362[(2)] = inst_44310);

(statearr_44335_44362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44317 === (10))){
var inst_44300 = (state_44316[(2)]);
var state_44316__$1 = state_44316;
var statearr_44336_44363 = state_44316__$1;
(statearr_44336_44363[(2)] = inst_44300);

(statearr_44336_44363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44317 === (8))){
var inst_44289 = (state_44316[(11)]);
var inst_44280 = (state_44316[(8)]);
var tmp44333 = inst_44280;
var inst_44280__$1 = tmp44333;
var inst_44281 = inst_44289;
var state_44316__$1 = (function (){var statearr_44337 = state_44316;
(statearr_44337[(7)] = inst_44281);

(statearr_44337[(8)] = inst_44280__$1);

return statearr_44337;
})();
var statearr_44338_44364 = state_44316__$1;
(statearr_44338_44364[(2)] = null);

(statearr_44338_44364[(1)] = (2));


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
});})(c__41654__auto___44350,out))
;
return ((function (switch__41540__auto__,c__41654__auto___44350,out){
return (function() {
var cljs$core$async$state_machine__41541__auto__ = null;
var cljs$core$async$state_machine__41541__auto____0 = (function (){
var statearr_44342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44342[(0)] = cljs$core$async$state_machine__41541__auto__);

(statearr_44342[(1)] = (1));

return statearr_44342;
});
var cljs$core$async$state_machine__41541__auto____1 = (function (state_44316){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_44316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e44343){if((e44343 instanceof Object)){
var ex__41544__auto__ = e44343;
var statearr_44344_44365 = state_44316;
(statearr_44344_44365[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44366 = state_44316;
state_44316 = G__44366;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$state_machine__41541__auto__ = function(state_44316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41541__auto____1.call(this,state_44316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41541__auto____0;
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41541__auto____1;
return cljs$core$async$state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___44350,out))
})();
var state__41656__auto__ = (function (){var statearr_44345 = f__41655__auto__.call(null);
(statearr_44345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___44350);

return statearr_44345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___44350,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args44367 = [];
var len__19240__auto___44441 = arguments.length;
var i__19241__auto___44442 = (0);
while(true){
if((i__19241__auto___44442 < len__19240__auto___44441)){
args44367.push((arguments[i__19241__auto___44442]));

var G__44443 = (i__19241__auto___44442 + (1));
i__19241__auto___44442 = G__44443;
continue;
} else {
}
break;
}

var G__44369 = args44367.length;
switch (G__44369) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44367.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41654__auto___44445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41654__auto___44445,out){
return (function (){
var f__41655__auto__ = (function (){var switch__41540__auto__ = ((function (c__41654__auto___44445,out){
return (function (state_44411){
var state_val_44412 = (state_44411[(1)]);
if((state_val_44412 === (7))){
var inst_44407 = (state_44411[(2)]);
var state_44411__$1 = state_44411;
var statearr_44413_44446 = state_44411__$1;
(statearr_44413_44446[(2)] = inst_44407);

(statearr_44413_44446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44412 === (1))){
var inst_44370 = [];
var inst_44371 = inst_44370;
var inst_44372 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44411__$1 = (function (){var statearr_44414 = state_44411;
(statearr_44414[(7)] = inst_44371);

(statearr_44414[(8)] = inst_44372);

return statearr_44414;
})();
var statearr_44415_44447 = state_44411__$1;
(statearr_44415_44447[(2)] = null);

(statearr_44415_44447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44412 === (4))){
var inst_44375 = (state_44411[(9)]);
var inst_44375__$1 = (state_44411[(2)]);
var inst_44376 = (inst_44375__$1 == null);
var inst_44377 = cljs.core.not.call(null,inst_44376);
var state_44411__$1 = (function (){var statearr_44416 = state_44411;
(statearr_44416[(9)] = inst_44375__$1);

return statearr_44416;
})();
if(inst_44377){
var statearr_44417_44448 = state_44411__$1;
(statearr_44417_44448[(1)] = (5));

} else {
var statearr_44418_44449 = state_44411__$1;
(statearr_44418_44449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44412 === (15))){
var inst_44401 = (state_44411[(2)]);
var state_44411__$1 = state_44411;
var statearr_44419_44450 = state_44411__$1;
(statearr_44419_44450[(2)] = inst_44401);

(statearr_44419_44450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44412 === (13))){
var state_44411__$1 = state_44411;
var statearr_44420_44451 = state_44411__$1;
(statearr_44420_44451[(2)] = null);

(statearr_44420_44451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44412 === (6))){
var inst_44371 = (state_44411[(7)]);
var inst_44396 = inst_44371.length;
var inst_44397 = (inst_44396 > (0));
var state_44411__$1 = state_44411;
if(cljs.core.truth_(inst_44397)){
var statearr_44421_44452 = state_44411__$1;
(statearr_44421_44452[(1)] = (12));

} else {
var statearr_44422_44453 = state_44411__$1;
(statearr_44422_44453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44412 === (3))){
var inst_44409 = (state_44411[(2)]);
var state_44411__$1 = state_44411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44411__$1,inst_44409);
} else {
if((state_val_44412 === (12))){
var inst_44371 = (state_44411[(7)]);
var inst_44399 = cljs.core.vec.call(null,inst_44371);
var state_44411__$1 = state_44411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44411__$1,(15),out,inst_44399);
} else {
if((state_val_44412 === (2))){
var state_44411__$1 = state_44411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44411__$1,(4),ch);
} else {
if((state_val_44412 === (11))){
var inst_44375 = (state_44411[(9)]);
var inst_44379 = (state_44411[(10)]);
var inst_44389 = (state_44411[(2)]);
var inst_44390 = [];
var inst_44391 = inst_44390.push(inst_44375);
var inst_44371 = inst_44390;
var inst_44372 = inst_44379;
var state_44411__$1 = (function (){var statearr_44423 = state_44411;
(statearr_44423[(11)] = inst_44389);

(statearr_44423[(7)] = inst_44371);

(statearr_44423[(12)] = inst_44391);

(statearr_44423[(8)] = inst_44372);

return statearr_44423;
})();
var statearr_44424_44454 = state_44411__$1;
(statearr_44424_44454[(2)] = null);

(statearr_44424_44454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44412 === (9))){
var inst_44371 = (state_44411[(7)]);
var inst_44387 = cljs.core.vec.call(null,inst_44371);
var state_44411__$1 = state_44411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44411__$1,(11),out,inst_44387);
} else {
if((state_val_44412 === (5))){
var inst_44375 = (state_44411[(9)]);
var inst_44379 = (state_44411[(10)]);
var inst_44372 = (state_44411[(8)]);
var inst_44379__$1 = f.call(null,inst_44375);
var inst_44380 = cljs.core._EQ_.call(null,inst_44379__$1,inst_44372);
var inst_44381 = cljs.core.keyword_identical_QMARK_.call(null,inst_44372,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44382 = (inst_44380) || (inst_44381);
var state_44411__$1 = (function (){var statearr_44425 = state_44411;
(statearr_44425[(10)] = inst_44379__$1);

return statearr_44425;
})();
if(cljs.core.truth_(inst_44382)){
var statearr_44426_44455 = state_44411__$1;
(statearr_44426_44455[(1)] = (8));

} else {
var statearr_44427_44456 = state_44411__$1;
(statearr_44427_44456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44412 === (14))){
var inst_44404 = (state_44411[(2)]);
var inst_44405 = cljs.core.async.close_BANG_.call(null,out);
var state_44411__$1 = (function (){var statearr_44429 = state_44411;
(statearr_44429[(13)] = inst_44404);

return statearr_44429;
})();
var statearr_44430_44457 = state_44411__$1;
(statearr_44430_44457[(2)] = inst_44405);

(statearr_44430_44457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44412 === (10))){
var inst_44394 = (state_44411[(2)]);
var state_44411__$1 = state_44411;
var statearr_44431_44458 = state_44411__$1;
(statearr_44431_44458[(2)] = inst_44394);

(statearr_44431_44458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44412 === (8))){
var inst_44375 = (state_44411[(9)]);
var inst_44371 = (state_44411[(7)]);
var inst_44379 = (state_44411[(10)]);
var inst_44384 = inst_44371.push(inst_44375);
var tmp44428 = inst_44371;
var inst_44371__$1 = tmp44428;
var inst_44372 = inst_44379;
var state_44411__$1 = (function (){var statearr_44432 = state_44411;
(statearr_44432[(7)] = inst_44371__$1);

(statearr_44432[(14)] = inst_44384);

(statearr_44432[(8)] = inst_44372);

return statearr_44432;
})();
var statearr_44433_44459 = state_44411__$1;
(statearr_44433_44459[(2)] = null);

(statearr_44433_44459[(1)] = (2));


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
});})(c__41654__auto___44445,out))
;
return ((function (switch__41540__auto__,c__41654__auto___44445,out){
return (function() {
var cljs$core$async$state_machine__41541__auto__ = null;
var cljs$core$async$state_machine__41541__auto____0 = (function (){
var statearr_44437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44437[(0)] = cljs$core$async$state_machine__41541__auto__);

(statearr_44437[(1)] = (1));

return statearr_44437;
});
var cljs$core$async$state_machine__41541__auto____1 = (function (state_44411){
while(true){
var ret_value__41542__auto__ = (function (){try{while(true){
var result__41543__auto__ = switch__41540__auto__.call(null,state_44411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41543__auto__;
}
break;
}
}catch (e44438){if((e44438 instanceof Object)){
var ex__41544__auto__ = e44438;
var statearr_44439_44460 = state_44411;
(statearr_44439_44460[(5)] = ex__41544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44461 = state_44411;
state_44411 = G__44461;
continue;
} else {
return ret_value__41542__auto__;
}
break;
}
});
cljs$core$async$state_machine__41541__auto__ = function(state_44411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41541__auto____1.call(this,state_44411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41541__auto____0;
cljs$core$async$state_machine__41541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41541__auto____1;
return cljs$core$async$state_machine__41541__auto__;
})()
;})(switch__41540__auto__,c__41654__auto___44445,out))
})();
var state__41656__auto__ = (function (){var statearr_44440 = f__41655__auto__.call(null);
(statearr_44440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41654__auto___44445);

return statearr_44440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41656__auto__);
});})(c__41654__auto___44445,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1470410259631