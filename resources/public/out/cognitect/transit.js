// Compiled by ClojureScript 1.9.89 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__37032_37036 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__37033_37037 = null;
var count__37034_37038 = (0);
var i__37035_37039 = (0);
while(true){
if((i__37035_37039 < count__37034_37038)){
var k_37040 = cljs.core._nth.call(null,chunk__37033_37037,i__37035_37039);
var v_37041 = (b[k_37040]);
(a[k_37040] = v_37041);

var G__37042 = seq__37032_37036;
var G__37043 = chunk__37033_37037;
var G__37044 = count__37034_37038;
var G__37045 = (i__37035_37039 + (1));
seq__37032_37036 = G__37042;
chunk__37033_37037 = G__37043;
count__37034_37038 = G__37044;
i__37035_37039 = G__37045;
continue;
} else {
var temp__6503__auto___37046 = cljs.core.seq.call(null,seq__37032_37036);
if(temp__6503__auto___37046){
var seq__37032_37047__$1 = temp__6503__auto___37046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37032_37047__$1)){
var c__18960__auto___37048 = cljs.core.chunk_first.call(null,seq__37032_37047__$1);
var G__37049 = cljs.core.chunk_rest.call(null,seq__37032_37047__$1);
var G__37050 = c__18960__auto___37048;
var G__37051 = cljs.core.count.call(null,c__18960__auto___37048);
var G__37052 = (0);
seq__37032_37036 = G__37049;
chunk__37033_37037 = G__37050;
count__37034_37038 = G__37051;
i__37035_37039 = G__37052;
continue;
} else {
var k_37053 = cljs.core.first.call(null,seq__37032_37047__$1);
var v_37054 = (b[k_37053]);
(a[k_37053] = v_37054);

var G__37055 = cljs.core.next.call(null,seq__37032_37047__$1);
var G__37056 = null;
var G__37057 = (0);
var G__37058 = (0);
seq__37032_37036 = G__37055;
chunk__37033_37037 = G__37056;
count__37034_37038 = G__37057;
i__37035_37039 = G__37058;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args37059 = [];
var len__19240__auto___37062 = arguments.length;
var i__19241__auto___37063 = (0);
while(true){
if((i__19241__auto___37063 < len__19240__auto___37062)){
args37059.push((arguments[i__19241__auto___37063]));

var G__37064 = (i__19241__auto___37063 + (1));
i__19241__auto___37063 = G__37064;
continue;
} else {
}
break;
}

var G__37061 = args37059.length;
switch (G__37061) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37059.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__37066 = (i + (2));
var G__37067 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__37066;
ret = G__37067;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__37068_37072 = cljs.core.seq.call(null,v);
var chunk__37069_37073 = null;
var count__37070_37074 = (0);
var i__37071_37075 = (0);
while(true){
if((i__37071_37075 < count__37070_37074)){
var x_37076 = cljs.core._nth.call(null,chunk__37069_37073,i__37071_37075);
ret.push(x_37076);

var G__37077 = seq__37068_37072;
var G__37078 = chunk__37069_37073;
var G__37079 = count__37070_37074;
var G__37080 = (i__37071_37075 + (1));
seq__37068_37072 = G__37077;
chunk__37069_37073 = G__37078;
count__37070_37074 = G__37079;
i__37071_37075 = G__37080;
continue;
} else {
var temp__6503__auto___37081 = cljs.core.seq.call(null,seq__37068_37072);
if(temp__6503__auto___37081){
var seq__37068_37082__$1 = temp__6503__auto___37081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37068_37082__$1)){
var c__18960__auto___37083 = cljs.core.chunk_first.call(null,seq__37068_37082__$1);
var G__37084 = cljs.core.chunk_rest.call(null,seq__37068_37082__$1);
var G__37085 = c__18960__auto___37083;
var G__37086 = cljs.core.count.call(null,c__18960__auto___37083);
var G__37087 = (0);
seq__37068_37072 = G__37084;
chunk__37069_37073 = G__37085;
count__37070_37074 = G__37086;
i__37071_37075 = G__37087;
continue;
} else {
var x_37088 = cljs.core.first.call(null,seq__37068_37082__$1);
ret.push(x_37088);

var G__37089 = cljs.core.next.call(null,seq__37068_37082__$1);
var G__37090 = null;
var G__37091 = (0);
var G__37092 = (0);
seq__37068_37072 = G__37089;
chunk__37069_37073 = G__37090;
count__37070_37074 = G__37091;
i__37071_37075 = G__37092;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__37093_37097 = cljs.core.seq.call(null,v);
var chunk__37094_37098 = null;
var count__37095_37099 = (0);
var i__37096_37100 = (0);
while(true){
if((i__37096_37100 < count__37095_37099)){
var x_37101 = cljs.core._nth.call(null,chunk__37094_37098,i__37096_37100);
ret.push(x_37101);

var G__37102 = seq__37093_37097;
var G__37103 = chunk__37094_37098;
var G__37104 = count__37095_37099;
var G__37105 = (i__37096_37100 + (1));
seq__37093_37097 = G__37102;
chunk__37094_37098 = G__37103;
count__37095_37099 = G__37104;
i__37096_37100 = G__37105;
continue;
} else {
var temp__6503__auto___37106 = cljs.core.seq.call(null,seq__37093_37097);
if(temp__6503__auto___37106){
var seq__37093_37107__$1 = temp__6503__auto___37106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37093_37107__$1)){
var c__18960__auto___37108 = cljs.core.chunk_first.call(null,seq__37093_37107__$1);
var G__37109 = cljs.core.chunk_rest.call(null,seq__37093_37107__$1);
var G__37110 = c__18960__auto___37108;
var G__37111 = cljs.core.count.call(null,c__18960__auto___37108);
var G__37112 = (0);
seq__37093_37097 = G__37109;
chunk__37094_37098 = G__37110;
count__37095_37099 = G__37111;
i__37096_37100 = G__37112;
continue;
} else {
var x_37113 = cljs.core.first.call(null,seq__37093_37107__$1);
ret.push(x_37113);

var G__37114 = cljs.core.next.call(null,seq__37093_37107__$1);
var G__37115 = null;
var G__37116 = (0);
var G__37117 = (0);
seq__37093_37097 = G__37114;
chunk__37094_37098 = G__37115;
count__37095_37099 = G__37116;
i__37096_37100 = G__37117;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__37118_37122 = cljs.core.seq.call(null,v);
var chunk__37119_37123 = null;
var count__37120_37124 = (0);
var i__37121_37125 = (0);
while(true){
if((i__37121_37125 < count__37120_37124)){
var x_37126 = cljs.core._nth.call(null,chunk__37119_37123,i__37121_37125);
ret.push(x_37126);

var G__37127 = seq__37118_37122;
var G__37128 = chunk__37119_37123;
var G__37129 = count__37120_37124;
var G__37130 = (i__37121_37125 + (1));
seq__37118_37122 = G__37127;
chunk__37119_37123 = G__37128;
count__37120_37124 = G__37129;
i__37121_37125 = G__37130;
continue;
} else {
var temp__6503__auto___37131 = cljs.core.seq.call(null,seq__37118_37122);
if(temp__6503__auto___37131){
var seq__37118_37132__$1 = temp__6503__auto___37131;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37118_37132__$1)){
var c__18960__auto___37133 = cljs.core.chunk_first.call(null,seq__37118_37132__$1);
var G__37134 = cljs.core.chunk_rest.call(null,seq__37118_37132__$1);
var G__37135 = c__18960__auto___37133;
var G__37136 = cljs.core.count.call(null,c__18960__auto___37133);
var G__37137 = (0);
seq__37118_37122 = G__37134;
chunk__37119_37123 = G__37135;
count__37120_37124 = G__37136;
i__37121_37125 = G__37137;
continue;
} else {
var x_37138 = cljs.core.first.call(null,seq__37118_37132__$1);
ret.push(x_37138);

var G__37139 = cljs.core.next.call(null,seq__37118_37132__$1);
var G__37140 = null;
var G__37141 = (0);
var G__37142 = (0);
seq__37118_37122 = G__37139;
chunk__37119_37123 = G__37140;
count__37120_37124 = G__37141;
i__37121_37125 = G__37142;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args37143 = [];
var len__19240__auto___37158 = arguments.length;
var i__19241__auto___37159 = (0);
while(true){
if((i__19241__auto___37159 < len__19240__auto___37158)){
args37143.push((arguments[i__19241__auto___37159]));

var G__37160 = (i__19241__auto___37159 + (1));
i__19241__auto___37159 = G__37160;
continue;
} else {
}
break;
}

var G__37145 = args37143.length;
switch (G__37145) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37143.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__37146 = obj;
G__37146.push(kfn.call(null,k),vfn.call(null,v));

return G__37146;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x37147 = cljs.core.clone.call(null,handlers);
x37147.forEach = ((function (x37147,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__37148 = cljs.core.seq.call(null,coll);
var chunk__37149 = null;
var count__37150 = (0);
var i__37151 = (0);
while(true){
if((i__37151 < count__37150)){
var vec__37152 = cljs.core._nth.call(null,chunk__37149,i__37151);
var k = cljs.core.nth.call(null,vec__37152,(0),null);
var v = cljs.core.nth.call(null,vec__37152,(1),null);
f.call(null,v,k);

var G__37162 = seq__37148;
var G__37163 = chunk__37149;
var G__37164 = count__37150;
var G__37165 = (i__37151 + (1));
seq__37148 = G__37162;
chunk__37149 = G__37163;
count__37150 = G__37164;
i__37151 = G__37165;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__37148);
if(temp__6503__auto__){
var seq__37148__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37148__$1)){
var c__18960__auto__ = cljs.core.chunk_first.call(null,seq__37148__$1);
var G__37166 = cljs.core.chunk_rest.call(null,seq__37148__$1);
var G__37167 = c__18960__auto__;
var G__37168 = cljs.core.count.call(null,c__18960__auto__);
var G__37169 = (0);
seq__37148 = G__37166;
chunk__37149 = G__37167;
count__37150 = G__37168;
i__37151 = G__37169;
continue;
} else {
var vec__37155 = cljs.core.first.call(null,seq__37148__$1);
var k = cljs.core.nth.call(null,vec__37155,(0),null);
var v = cljs.core.nth.call(null,vec__37155,(1),null);
f.call(null,v,k);

var G__37170 = cljs.core.next.call(null,seq__37148__$1);
var G__37171 = null;
var G__37172 = (0);
var G__37173 = (0);
seq__37148 = G__37170;
chunk__37149 = G__37171;
count__37150 = G__37172;
i__37151 = G__37173;
continue;
}
} else {
return null;
}
}
break;
}
});})(x37147,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x37147;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args37174 = [];
var len__19240__auto___37180 = arguments.length;
var i__19241__auto___37181 = (0);
while(true){
if((i__19241__auto___37181 < len__19240__auto___37180)){
args37174.push((arguments[i__19241__auto___37181]));

var G__37182 = (i__19241__auto___37181 + (1));
i__19241__auto___37181 = G__37182;
continue;
} else {
}
break;
}

var G__37176 = args37174.length;
switch (G__37176) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37174.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit37177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit37177 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta37178){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta37178 = meta37178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit37177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37179,meta37178__$1){
var self__ = this;
var _37179__$1 = this;
return (new cognitect.transit.t_cognitect$transit37177(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta37178__$1));
});

cognitect.transit.t_cognitect$transit37177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37179){
var self__ = this;
var _37179__$1 = this;
return self__.meta37178;
});

cognitect.transit.t_cognitect$transit37177.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit37177.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit37177.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit37177.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit37177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta37178","meta37178",-818553681,null)], null);
});

cognitect.transit.t_cognitect$transit37177.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit37177.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit37177";

cognitect.transit.t_cognitect$transit37177.cljs$lang$ctorPrWriter = (function (this__18709__auto__,writer__18710__auto__,opt__18711__auto__){
return cljs.core._write.call(null,writer__18710__auto__,"cognitect.transit/t_cognitect$transit37177");
});

cognitect.transit.__GT_t_cognitect$transit37177 = (function cognitect$transit$__GT_t_cognitect$transit37177(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta37178){
return (new cognitect.transit.t_cognitect$transit37177(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta37178));
});

}

return (new cognitect.transit.t_cognitect$transit37177(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__18057__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__18057__auto__)){
return or__18057__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1470410185449