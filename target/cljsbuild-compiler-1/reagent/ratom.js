// Compiled by ClojureScript 0.0-3211 {:optimize-constants true, :static-fns true}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = (function (){var G__10652 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10652) : cljs.core.atom.call(null,G__10652));
})();
}
reagent.ratom.running = (function reagent$ratom$running(){
var G__10654 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10654) : cljs.core.deref.call(null,G__10654));
});
reagent.ratom.capture_derefed = (function reagent$ratom$capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_10656 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_10656;
}});
reagent.ratom.captured = (function reagent$ratom$captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj10658 = {};
return obj10658;
})();


/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__10659 = this$__$1;
return goog.getUid(G__10659);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((function (){var G__10660 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__10660) : self__.validator.call(null,G__10660));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))], 0)))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10661 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10661) : f.call(null,G__10661));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10662 = self__.state;
var G__10663 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10662,G__10663) : f.call(null,G__10662,G__10663));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10664 = self__.state;
var G__10665 = x;
var G__10666 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__10664,G__10665,G__10666) : f.call(null,G__10664,G__10665,G__10666));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__10667_10671 = key;
var G__10668_10672 = this$__$1;
var G__10669_10673 = oldval;
var G__10670_10674 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__10667_10671,G__10668_10672,G__10669_10673,G__10670_10674) : f.call(null,G__10667_10671,G__10668_10672,G__10669_10673,G__10670_10674));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(){
var G__10678 = arguments.length;
switch (G__10678) {
case 1:
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__5386__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5386__auto__);

}
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__10679){
var map__10680 = p__10679;
var map__10680__$1 = ((cljs.core.seq_QMARK_(map__10680))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10680):map__10680);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10680__$1,cljs.core.constant$keyword$validator);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10680__$1,cljs.core.constant$keyword$meta);
return (new reagent.ratom.RAtom(x,meta,validator,null));
});

reagent.ratom.atom.cljs$lang$applyTo = (function (seq10675){
var G__10676 = cljs.core.first(seq10675);
var seq10675__$1 = cljs.core.next(seq10675);
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic(G__10676,seq10675__$1);
});

reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (((function (){var G__10688 = self__.ratom;
if(G__10688){
var bit__5009__auto__ = (G__10688.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5009__auto__) || (G__10688.cljs$core$IDeref$)){
return true;
} else {
if((!G__10688.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__10688);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__10688);
}
})())?(function (){var G__10689 = ((function (this$){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__10692 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10692) : cljs.core.deref.call(null,G__10692));
})(),self__.path);
});})(this$))
;
var G__10690 = cljs.core.constant$keyword$on_DASH_set;
var G__10691 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY))?((function (G__10689,G__10690,this$){
return (function (p1__10683_SHARP_,p2__10682_SHARP_){
var G__10693 = self__.ratom;
var G__10694 = p2__10682_SHARP_;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10693,G__10694) : cljs.core.reset_BANG_.call(null,G__10693,G__10694));
});})(G__10689,G__10690,this$))
:((function (G__10689,G__10690,this$){
return (function (p1__10685_SHARP_,p2__10684_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,p2__10684_SHARP_);
});})(G__10689,G__10690,this$))
);
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__10689,G__10690,G__10691) : reagent.ratom.make_reaction.call(null,G__10689,G__10690,G__10691));
})():(function (){var G__10695 = ((function (this$){
return (function (){
var G__10698 = self__.path;
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(G__10698) : self__.ratom.call(null,G__10698));
});})(this$))
;
var G__10696 = cljs.core.constant$keyword$on_DASH_set;
var G__10697 = ((function (G__10695,G__10696,this$){
return (function (p1__10687_SHARP_,p2__10686_SHARP_){
var G__10699 = self__.path;
var G__10700 = p2__10686_SHARP_;
return (self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(G__10699,G__10700) : self__.ratom.call(null,G__10699,G__10700));
});})(G__10695,G__10696,this$))
;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__10695,G__10696,G__10697) : reagent.ratom.make_reaction.call(null,G__10695,G__10696,G__10697));
})());
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_10701 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_10701;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer(a__$1._peek(),writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches(this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch(this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch(this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref(this$__$1._reaction());
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((function (){var G__10706 = path;
if(G__10706){
var bit__5009__auto__ = (G__10706.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5009__auto__) || (G__10706.cljs$core$IDeref$)){
return true;
} else {
if((!G__10706.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__10706);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__10706);
}
})()){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0))),cljs.core.str(")")].join(''));
} else {
}

if((function (){var G__10707 = path;
if(G__10707){
var bit__5009__auto__ = null;
if(cljs.core.truth_((function (){var or__4335__auto__ = bit__5009__auto__;
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return G__10707.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__10707.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__10707);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__10707);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null))], 0)))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__4335__auto__ = (function (){var G__10709 = src;
if(G__10709){
var bit__5009__auto__ = null;
if(cljs.core.truth_((function (){var or__4335__auto__ = bit__5009__auto__;
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return G__10709.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__10709.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__10709);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__10709);
}
})();
if(or__4335__auto__){
return or__4335__auto__;
} else {
return (cljs.core.ifn_QMARK_(src)) && (!(cljs.core.vector_QMARK_(src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null)))))], 0)))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj10711 = {};
return obj10711;
})();

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((function (){var and__4323__auto__ = this$;
if(and__4323__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__4323__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4971__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4335__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__10715 = x__4971__auto__;
return goog.typeOf(G__10715);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj10717 = {};
return obj10717;
})();

reagent.ratom.run = (function reagent$ratom$run(this$){
if((function (){var and__4323__auto__ = this$;
if(and__4323__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__4323__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4971__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4335__auto__ = (reagent.ratom.run[(function (){var G__10721 = x__4971__auto__;
return goog.typeOf(G__10721);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (reagent.ratom.run["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj10723 = {};
return obj10723;
})();

reagent.ratom._update_watching = (function reagent$ratom$_update_watching(this$,derefed){
if((function (){var and__4323__auto__ = this$;
if(and__4323__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__4323__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4971__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4335__auto__ = (reagent.ratom._update_watching[(function (){var G__10727 = x__4971__auto__;
return goog.typeOf(G__10727);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function reagent$ratom$_handle_change(k,sender,oldval,newval){
if((function (){var and__4323__auto__ = k;
if(and__4323__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__4323__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4971__auto__ = (((k == null))?null:k);
return (function (){var or__4335__auto__ = (reagent.ratom._handle_change[(function (){var G__10731 = x__4971__auto__;
return goog.typeOf(G__10731);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom._peek_at = (function reagent$ratom$_peek_at(this$){
if((function (){var and__4323__auto__ = this$;
if(and__4323__auto__){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1;
} else {
return and__4323__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__4971__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4335__auto__ = (reagent.ratom._peek_at[(function (){var G__10735 = x__4971__auto__;
return goog.typeOf(G__10735);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (reagent.ratom._peek_at["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-peek-at",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4323__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__4323__auto__)){
return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__4323__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__4335__auto__ = self__.auto_run;
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__10736_10762 = cljs.core.seq(derefed);
var chunk__10737_10763 = null;
var count__10738_10764 = (0);
var i__10739_10765 = (0);
while(true){
if((i__10739_10765 < count__10738_10764)){
var w_10766 = chunk__10737_10763.cljs$core$IIndexed$_nth$arity$2(null,i__10739_10765);
if(cljs.core.contains_QMARK_(self__.watching,w_10766)){
} else {
cljs.core.add_watch(w_10766,this$__$1,reagent.ratom._handle_change);
}

var G__10767 = seq__10736_10762;
var G__10768 = chunk__10737_10763;
var G__10769 = count__10738_10764;
var G__10770 = (i__10739_10765 + (1));
seq__10736_10762 = G__10767;
chunk__10737_10763 = G__10768;
count__10738_10764 = G__10769;
i__10739_10765 = G__10770;
continue;
} else {
var temp__4126__auto___10771 = cljs.core.seq(seq__10736_10762);
if(temp__4126__auto___10771){
var seq__10736_10772__$1 = temp__4126__auto___10771;
if(cljs.core.chunked_seq_QMARK_(seq__10736_10772__$1)){
var c__5120__auto___10773 = cljs.core.chunk_first(seq__10736_10772__$1);
var G__10774 = cljs.core.chunk_rest(seq__10736_10772__$1);
var G__10775 = c__5120__auto___10773;
var G__10776 = cljs.core.count(c__5120__auto___10773);
var G__10777 = (0);
seq__10736_10762 = G__10774;
chunk__10737_10763 = G__10775;
count__10738_10764 = G__10776;
i__10739_10765 = G__10777;
continue;
} else {
var w_10778 = cljs.core.first(seq__10736_10772__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_10778)){
} else {
cljs.core.add_watch(w_10778,this$__$1,reagent.ratom._handle_change);
}

var G__10779 = cljs.core.next(seq__10736_10772__$1);
var G__10780 = null;
var G__10781 = (0);
var G__10782 = (0);
seq__10736_10762 = G__10779;
chunk__10737_10763 = G__10780;
count__10738_10764 = G__10781;
i__10739_10765 = G__10782;
continue;
}
} else {
}
}
break;
}

var seq__10740_10783 = cljs.core.seq(self__.watching);
var chunk__10741_10784 = null;
var count__10742_10785 = (0);
var i__10743_10786 = (0);
while(true){
if((i__10743_10786 < count__10742_10785)){
var w_10787 = chunk__10741_10784.cljs$core$IIndexed$_nth$arity$2(null,i__10743_10786);
if(cljs.core.contains_QMARK_(derefed,w_10787)){
} else {
cljs.core.remove_watch(w_10787,this$__$1);
}

var G__10788 = seq__10740_10783;
var G__10789 = chunk__10741_10784;
var G__10790 = count__10742_10785;
var G__10791 = (i__10743_10786 + (1));
seq__10740_10783 = G__10788;
chunk__10741_10784 = G__10789;
count__10742_10785 = G__10790;
i__10743_10786 = G__10791;
continue;
} else {
var temp__4126__auto___10792 = cljs.core.seq(seq__10740_10783);
if(temp__4126__auto___10792){
var seq__10740_10793__$1 = temp__4126__auto___10792;
if(cljs.core.chunked_seq_QMARK_(seq__10740_10793__$1)){
var c__5120__auto___10794 = cljs.core.chunk_first(seq__10740_10793__$1);
var G__10795 = cljs.core.chunk_rest(seq__10740_10793__$1);
var G__10796 = c__5120__auto___10794;
var G__10797 = cljs.core.count(c__5120__auto___10794);
var G__10798 = (0);
seq__10740_10783 = G__10795;
chunk__10741_10784 = G__10796;
count__10742_10785 = G__10797;
i__10743_10786 = G__10798;
continue;
} else {
var w_10799 = cljs.core.first(seq__10740_10793__$1);
if(cljs.core.contains_QMARK_(derefed,w_10799)){
} else {
cljs.core.remove_watch(w_10799,this$__$1);
}

var G__10800 = cljs.core.next(seq__10740_10793__$1);
var G__10801 = null;
var G__10802 = (0);
var G__10803 = (0);
seq__10740_10783 = G__10800;
chunk__10741_10784 = G__10801;
count__10742_10785 = G__10802;
i__10743_10786 = G__10803;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not(self__.dirty_QMARK_)){
return self__.state;
} else {
var _STAR_ratom_context_STAR_10744 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_10744;
}}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash(this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__10745 = this$__$1;
return goog.getUid(G__10745);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__10746_10804 = cljs.core.seq(self__.watching);
var chunk__10747_10805 = null;
var count__10748_10806 = (0);
var i__10749_10807 = (0);
while(true){
if((i__10749_10807 < count__10748_10806)){
var w_10808 = chunk__10747_10805.cljs$core$IIndexed$_nth$arity$2(null,i__10749_10807);
cljs.core.remove_watch(w_10808,this$__$1);

var G__10809 = seq__10746_10804;
var G__10810 = chunk__10747_10805;
var G__10811 = count__10748_10806;
var G__10812 = (i__10749_10807 + (1));
seq__10746_10804 = G__10809;
chunk__10747_10805 = G__10810;
count__10748_10806 = G__10811;
i__10749_10807 = G__10812;
continue;
} else {
var temp__4126__auto___10813 = cljs.core.seq(seq__10746_10804);
if(temp__4126__auto___10813){
var seq__10746_10814__$1 = temp__4126__auto___10813;
if(cljs.core.chunked_seq_QMARK_(seq__10746_10814__$1)){
var c__5120__auto___10815 = cljs.core.chunk_first(seq__10746_10814__$1);
var G__10816 = cljs.core.chunk_rest(seq__10746_10814__$1);
var G__10817 = c__5120__auto___10815;
var G__10818 = cljs.core.count(c__5120__auto___10815);
var G__10819 = (0);
seq__10746_10804 = G__10816;
chunk__10747_10805 = G__10817;
count__10748_10806 = G__10818;
i__10749_10807 = G__10819;
continue;
} else {
var w_10820 = cljs.core.first(seq__10746_10814__$1);
cljs.core.remove_watch(w_10820,this$__$1);

var G__10821 = cljs.core.next(seq__10746_10814__$1);
var G__10822 = null;
var G__10823 = (0);
var G__10824 = (0);
seq__10746_10804 = G__10821;
chunk__10747_10805 = G__10822;
count__10748_10806 = G__10823;
i__10749_10807 = G__10824;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

var G__10750_10825 = oldval;
var G__10751_10826 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__10750_10825,G__10751_10826) : self__.on_set.call(null,G__10750_10825,G__10751_10826));
} else {
}

cljs.core._notify_watches(a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10752 = reagent.ratom._peek_at(a__$1);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__10752) : f__$1.call(null,G__10752));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10753 = reagent.ratom._peek_at(a__$1);
var G__10754 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__10753,G__10754) : f__$1.call(null,G__10753,G__10754));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10755 = reagent.ratom._peek_at(a__$1);
var G__10756 = x;
var G__10757 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__10755,G__10756,G__10757) : f__$1.call(null,G__10755,G__10756,G__10757));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,reagent.ratom._peek_at(a__$1),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed(self__.f,this$__$1);
var derefed = reagent.ratom.captured(this$__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching)){
reagent.ratom._update_watching(this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches(this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f__$1){
var G__10758_10827 = key;
var G__10759_10828 = this$__$1;
var G__10760_10829 = oldval;
var G__10761_10830 = newval;
(f__$1.cljs$core$IFn$_invoke$arity$4 ? f__$1.cljs$core$IFn$_invoke$arity$4(G__10758_10827,G__10759_10828,G__10760_10829,G__10761_10830) : f__$1.call(null,G__10758_10827,G__10759_10828,G__10760_10829,G__10761_10830));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);

if((cljs.core.empty_QMARK_(self__.watches)) && (cljs.core.not(self__.auto_run))){
return reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__4335__auto__ = self__.auto_run;
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run(this$__$1);
} else {
return self__.state;
}
} else {
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_10831 = self__.state;
self__.state = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

if((oldstate_10831 === self__.state)){
} else {
cljs.core._notify_watches(this$__$1,oldstate_10831,self__.state);
}
} else {
}

return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(){
var argseq__5375__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5375__auto__);
});

reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__10834){
var map__10835 = p__10834;
var map__10835__$1 = ((cljs.core.seq_QMARK_(map__10835))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10835):map__10835);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10835__$1,cljs.core.constant$keyword$derefed);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10835__$1,cljs.core.constant$keyword$on_DASH_dispose);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10835__$1,cljs.core.constant$keyword$on_DASH_set);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10835__$1,cljs.core.constant$keyword$auto_DASH_run);
var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}

return reaction;
});

reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq10832){
var G__10833 = cljs.core.first(seq10832);
var seq10832__$1 = cljs.core.next(seq10832);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(G__10833,seq10832__$1);
});

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write(writer,"#<wrap: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__10836_10847 = key;
var G__10837_10848 = this$__$1;
var G__10838_10849 = oldval;
var G__10839_10850 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__10836_10847,G__10837_10848,G__10838_10849,G__10839_10850) : f.call(null,G__10836_10847,G__10837_10848,G__10838_10849,G__10839_10850));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not(self__.changed)) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10840 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10840) : f.call(null,G__10840));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10841 = self__.state;
var G__10842 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10841,G__10842) : f.call(null,G__10841,G__10842));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10843 = self__.state;
var G__10844 = x;
var G__10845 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__10843,G__10844,G__10845) : f.call(null,G__10843,G__10844,G__10845));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(this$__$1,oldval,newval);
}

var G__10846_10851 = newval;
(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(G__10846_10851) : self__.callback.call(null,G__10846_10851));

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4323__auto__ = self__.changed;
if(cljs.core.truth_(and__4323__auto__)){
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__4323__auto__;
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0)))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});
