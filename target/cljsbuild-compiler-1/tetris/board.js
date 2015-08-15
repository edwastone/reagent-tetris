// Compiled by ClojureScript 0.0-3211 {:optimize-constants true, :static-fns true}
goog.provide('tetris.board');
goog.require('cljs.core');
tetris.board.boardH = (20);
tetris.board.boardW = (10);
tetris.board.matrices = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null)], null);
tetris.board.colors = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#F7B538","#DB7C26","#C32F27","#D8572A","#780116"], null);
tetris.board.flip = (function tetris$board$flip(mat){
return cljs.core.vec(cljs.core.reverse(mat));
});
tetris.board.transpose = (function tetris$board$transpose(mat){
var H = cljs.core.count(mat);
var W = cljs.core.count(cljs.core.first(mat));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (H,W){
return (function (p1__9832_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.nth,mat,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(p1__9832_SHARP_));
});})(H,W))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(W));
});
tetris.board.piece_choices = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__9833_SHARP_,p2__9834_SHARP_){
return cljs.core.set(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$mat,cljs.core.constant$keyword$color],[p1__9833_SHARP_,p2__9834_SHARP_]),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$mat,cljs.core.constant$keyword$color],[tetris.board.flip(p1__9833_SHARP_),p2__9834_SHARP_])], null));
}),cljs.core.array_seq([tetris.board.matrices,tetris.board.colors], 0));
tetris.board.piece__GT_cells = (function tetris$board$piece__GT_cells(p__9835){
var map__9848 = p__9835;
var map__9848__$1 = ((cljs.core.seq_QMARK_(map__9848))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9848):map__9848);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9848__$1,cljs.core.constant$keyword$color);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9848__$1,cljs.core.constant$keyword$y);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9848__$1,cljs.core.constant$keyword$x);
var mat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9848__$1,cljs.core.constant$keyword$mat);
var H = cljs.core.count(mat);
var W = cljs.core.count(cljs.core.first(mat));
var iter__5089__auto__ = ((function (H,W,map__9848,map__9848__$1,color,y,x,mat){
return (function tetris$board$piece__GT_cells_$_iter__9849(s__9850){
return (new cljs.core.LazySeq(null,((function (H,W,map__9848,map__9848__$1,color,y,x,mat){
return (function (){
var s__9850__$1 = s__9850;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__9850__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var i = cljs.core.first(xs__4624__auto__);
var iterys__5085__auto__ = ((function (s__9850__$1,i,xs__4624__auto__,temp__4126__auto__,H,W,map__9848,map__9848__$1,color,y,x,mat){
return (function tetris$board$piece__GT_cells_$_iter__9849_$_iter__9851(s__9852){
return (new cljs.core.LazySeq(null,((function (s__9850__$1,i,xs__4624__auto__,temp__4126__auto__,H,W,map__9848,map__9848__$1,color,y,x,mat){
return (function (){
var s__9852__$1 = s__9852;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__9852__$1);
if(temp__4126__auto____$1){
var s__9852__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9852__$2)){
var c__5087__auto__ = cljs.core.chunk_first(s__9852__$2);
var size__5088__auto__ = cljs.core.count(c__5087__auto__);
var b__9854 = cljs.core.chunk_buffer(size__5088__auto__);
if((function (){var i__9853 = (0);
while(true){
if((i__9853 < size__5088__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5087__auto__,i__9853);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)) > (0))){
cljs.core.chunk_append(b__9854,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$x,(j + x),cljs.core.constant$keyword$y,(i + y),cljs.core.constant$keyword$color,color], null));

var G__9860 = (i__9853 + (1));
i__9853 = G__9860;
continue;
} else {
var G__9861 = (i__9853 + (1));
i__9853 = G__9861;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9854),tetris$board$piece__GT_cells_$_iter__9849_$_iter__9851(cljs.core.chunk_rest(s__9852__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9854),null);
}
} else {
var j = cljs.core.first(s__9852__$2);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)) > (0))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$x,(j + x),cljs.core.constant$keyword$y,(i + y),cljs.core.constant$keyword$color,color], null),tetris$board$piece__GT_cells_$_iter__9849_$_iter__9851(cljs.core.rest(s__9852__$2)));
} else {
var G__9862 = cljs.core.rest(s__9852__$2);
s__9852__$1 = G__9862;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__9850__$1,i,xs__4624__auto__,temp__4126__auto__,H,W,map__9848,map__9848__$1,color,y,x,mat))
,null,null));
});})(s__9850__$1,i,xs__4624__auto__,temp__4126__auto__,H,W,map__9848,map__9848__$1,color,y,x,mat))
;
var fs__5086__auto__ = cljs.core.seq(iterys__5085__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(W)));
if(fs__5086__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5086__auto__,tetris$board$piece__GT_cells_$_iter__9849(cljs.core.rest(s__9850__$1)));
} else {
var G__9863 = cljs.core.rest(s__9850__$1);
s__9850__$1 = G__9863;
continue;
}
} else {
return null;
}
break;
}
});})(H,W,map__9848,map__9848__$1,color,y,x,mat))
,null,null));
});})(H,W,map__9848,map__9848__$1,color,y,x,mat))
;
return iter__5089__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(H));
});
tetris.board.new_piece = (function tetris$board$new_piece(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.rand_nth(tetris.board.piece_choices),cljs.core.constant$keyword$x,(tetris.board.boardW / (2)),cljs.core.array_seq([cljs.core.constant$keyword$y,(0)], 0));
});
tetris.board.valid_QMARK_ = (function tetris$board$valid_QMARK_(piece,cells){
var cells2 = tetris.board.piece__GT_cells(piece);
var cells__$1 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$x,cljs.core.constant$keyword$y),cells));
return cljs.core.every_QMARK_(((function (cells2,cells__$1){
return (function (p1__9864_SHARP_){
return ((cljs.core.constant$keyword$y.cljs$core$IFn$_invoke$arity$1(p1__9864_SHARP_) < tetris.board.boardH)) && ((cljs.core.constant$keyword$x.cljs$core$IFn$_invoke$arity$1(p1__9864_SHARP_) < tetris.board.boardW)) && ((cljs.core.constant$keyword$x.cljs$core$IFn$_invoke$arity$1(p1__9864_SHARP_) >= (0))) && (((function (){var G__9868 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$x,cljs.core.constant$keyword$y).call(null,p1__9864_SHARP_);
return (cells__$1.cljs$core$IFn$_invoke$arity$1 ? cells__$1.cljs$core$IFn$_invoke$arity$1(G__9868) : cells__$1.call(null,G__9868));
})() == null));
});})(cells2,cells__$1))
,cells2);
});
tetris.board.lower_row = (function tetris$board$lower_row(cells,score){
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,cells,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$y], null)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((function (p1__9869_SHARP_){
return (p1__9869_SHARP_ + score);
})));
});
tetris.board.calc_score = (function tetris$board$calc_score(p__9870){
var map__9877 = p__9870;
var map__9877__$1 = ((cljs.core.seq_QMARK_(map__9877))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9877):map__9877);
var data = map__9877__$1;
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9877__$1,cljs.core.constant$keyword$score);
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9877__$1,cljs.core.constant$keyword$cells);
var rows = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.key),cljs.core.group_by(cljs.core.constant$keyword$y,cells));
var vec__9878 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (rows,map__9877,map__9877__$1,data,score,cells){
return (function (p__9879,p__9880){
var vec__9881 = p__9879;
var score__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9881,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9881,(1),null);
var vec__9882 = p__9880;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9882,(0),null);
var cells__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9882,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tetris.board.boardW,cljs.core.count(cells__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(score__$1 + (1)),res], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [score__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(res,tetris.board.lower_row(cells__$1,score__$1))], null);
}
});})(rows,map__9877,map__9877__$1,data,score,cells))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY], null),rows);
var score1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9878,(0),null);
var cells__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9878,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$cells,cells__$1,cljs.core.array_seq([cljs.core.constant$keyword$score,(score + score1)], 0));
});
tetris.board.remove_piece = (function tetris$board$remove_piece(p__9883){
var map__9885 = p__9883;
var map__9885__$1 = ((cljs.core.seq_QMARK_(map__9885))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9885):map__9885);
var data = map__9885__$1;
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9885__$1,cljs.core.constant$keyword$cells);
var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9885__$1,cljs.core.constant$keyword$piece);
var piece2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(piece,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$y], null),cljs.core.inc);
if(cljs.core.truth_(tetris.board.valid_QMARK_(piece2,cells))){
return data;
} else {
return tetris.board.calc_score(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$piece,null,cljs.core.array_seq([cljs.core.constant$keyword$cells,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cells,tetris.board.piece__GT_cells(piece))], 0)));
}
});
tetris.board.move_left = (function tetris$board$move_left(p__9886){
var map__9888 = p__9886;
var map__9888__$1 = ((cljs.core.seq_QMARK_(map__9888))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9888):map__9888);
var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9888__$1,cljs.core.constant$keyword$piece);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(piece,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$x], null),cljs.core.dec);
});
tetris.board.move_right = (function tetris$board$move_right(p__9889){
var map__9891 = p__9889;
var map__9891__$1 = ((cljs.core.seq_QMARK_(map__9891))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9891):map__9891);
var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9891__$1,cljs.core.constant$keyword$piece);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(piece,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$x], null),cljs.core.inc);
});
tetris.board.move_down = (function tetris$board$move_down(p__9892){
var map__9894 = p__9892;
var map__9894__$1 = ((cljs.core.seq_QMARK_(map__9894))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9894):map__9894);
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9894__$1,cljs.core.constant$keyword$cells);
var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9894__$1,cljs.core.constant$keyword$piece);
var piece__$1 = piece;
while(true){
var piece2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(piece__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$y], null),cljs.core.inc);
if(cljs.core.truth_(tetris.board.valid_QMARK_(piece2,cells))){
var G__9895 = piece2;
piece__$1 = G__9895;
continue;
} else {
return piece__$1;
}
break;
}
});
tetris.board.move_rotate = (function tetris$board$move_rotate(p__9896){
var map__9898 = p__9896;
var map__9898__$1 = ((cljs.core.seq_QMARK_(map__9898))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9898):map__9898);
var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9898__$1,cljs.core.constant$keyword$piece);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(piece,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$mat], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(tetris.board.transpose,tetris.board.flip));
});
