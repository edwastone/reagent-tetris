// Compiled by ClojureScript 0.0-3211 {:optimize-constants true, :static-fns true}
goog.provide('tetris.core');
goog.require('cljs.core');
goog.require('tetris.board');
goog.require('reagent.core');
tetris.core.GRAVITY_WAIT = (400);
tetris.core.ADJUST_WAIT = (300);
cljs.core.enable_console_print_BANG_();
tetris.core.appstate = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$piece,null,cljs.core.constant$keyword$cells,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$active,true,cljs.core.constant$keyword$score,(0)], null));
tetris.core.current_piece = reagent.ratom.make_reaction((function (){
return cljs.core.constant$keyword$piece.cljs$core$IFn$_invoke$arity$1((function (){var G__10344 = tetris.core.appstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10344) : cljs.core.deref.call(null,G__10344));
})());
}));
tetris.core.current_cells = reagent.ratom.make_reaction((function (){
return cljs.core.constant$keyword$cells.cljs$core$IFn$_invoke$arity$1((function (){var G__10345 = tetris.core.appstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10345) : cljs.core.deref.call(null,G__10345));
})());
}));
tetris.core.current_score = reagent.ratom.make_reaction((function (){
return cljs.core.constant$keyword$score.cljs$core$IFn$_invoke$arity$1((function (){var G__10346 = tetris.core.appstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10346) : cljs.core.deref.call(null,G__10346));
})());
}));
tetris.core.gravitate = (function tetris$core$gravitate(p__10347){
var map__10351 = p__10347;
var map__10351__$1 = ((cljs.core.seq_QMARK_(map__10351))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10351):map__10351);
var data = map__10351__$1;
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10351__$1,cljs.core.constant$keyword$cells);
var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10351__$1,cljs.core.constant$keyword$piece);
if(cljs.core.truth_(piece)){
var piece2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(piece,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$y], null),cljs.core.inc);
if(cljs.core.truth_(tetris.board.valid_QMARK_(piece2,cells))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$piece,piece2);
} else {
var G__10352_10354 = ((function (piece2,map__10351,map__10351__$1,data,cells,piece){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.core.appstate,tetris.board.remove_piece);
});})(piece2,map__10351,map__10351__$1,data,cells,piece))
;
var G__10353_10355 = tetris.core.ADJUST_WAIT;
setTimeout(G__10352_10354,G__10353_10355);

return data;
}
} else {
var piece2 = tetris.board.new_piece();
if(cljs.core.truth_(tetris.board.valid_QMARK_(piece2,cells))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$piece,piece2);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$active,false);
}
}
});
tetris.core.cell_view = (function tetris$core$cell_view(p__10356){
var map__10358 = p__10356;
var map__10358__$1 = ((cljs.core.seq_QMARK_(map__10358))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10358):map__10358);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10358__$1,cljs.core.constant$keyword$color);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10358__$1,cljs.core.constant$keyword$y);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10358__$1,cljs.core.constant$keyword$x);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$rect,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$x,x,cljs.core.constant$keyword$y,y,cljs.core.constant$keyword$width,(1),cljs.core.constant$keyword$height,(1),cljs.core.constant$keyword$stroke,"black",cljs.core.constant$keyword$stroke_DASH_width,0.01,cljs.core.constant$keyword$rx,0.1,cljs.core.constant$keyword$fill,color], null)], null);
});
tetris.core.piece_view = (function tetris$core$piece_view(){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$g], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.core.cell_view,tetris.board.piece__GT_cells((function (){var G__10360 = tetris.core.current_piece;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10360) : cljs.core.deref.call(null,G__10360));
})())));
});
});
tetris.core.cells_view = (function tetris$core$cells_view(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$g], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.core.cell_view,(function (){var G__10362 = tetris.core.current_cells;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10362) : cljs.core.deref.call(null,G__10362));
})()));
});
tetris.core.board = (function tetris$core$board(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$border,"1px solid black",cljs.core.constant$keyword$width,((25) * tetris.board.boardW),cljs.core.constant$keyword$height,((25) * tetris.board.boardH)], null),cljs.core.constant$keyword$view_DASH_box,[cljs.core.str("0 0 "),cljs.core.str(tetris.board.boardW),cljs.core.str(" "),cljs.core.str(tetris.board.boardH)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.piece_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.cells_view], null)], null);
});
tetris.core.score_panel = (function tetris$core$score_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"Score ",(function (){var G__10364 = tetris.core.current_score;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10364) : cljs.core.deref.call(null,G__10364));
})()], null);
});
});
tetris.core.page = (function tetris$core$page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$text_DASH_align,"center"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.board], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.score_panel], null)], null);
});
tetris.core.maybe = (function tetris$core$maybe(appstate,f){
var piece = (function (){var G__10366 = appstate;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10366) : f.call(null,G__10366));
})();
if(cljs.core.truth_(tetris.board.valid_QMARK_(piece,cljs.core.constant$keyword$cells.cljs$core$IFn$_invoke$arity$1(appstate)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(appstate,cljs.core.constant$keyword$piece,piece);
} else {
return appstate;
}
});
tetris.core.key_action = new cljs.core.PersistentArrayMap(null, 4, [(37),tetris.board.move_left,(38),tetris.board.move_rotate,(39),tetris.board.move_right,(40),tetris.board.move_down], null);
tetris.core.handle_keydown = (function tetris$core$handle_keydown(event){
tetris.core.event = event;

if(cljs.core.truth_((function (){var and__4323__auto__ = cljs.core.constant$keyword$active.cljs$core$IFn$_invoke$arity$1((function (){var G__10372 = tetris.core.appstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10372) : cljs.core.deref.call(null,G__10372));
})());
if(cljs.core.truth_(and__4323__auto__)){
return cljs.core.constant$keyword$piece.cljs$core$IFn$_invoke$arity$1((function (){var G__10373 = tetris.core.appstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10373) : cljs.core.deref.call(null,G__10373));
})());
} else {
return and__4323__auto__;
}
})())){
var temp__4126__auto__ = (function (){var G__10374 = event.keyCode;
return (tetris.core.key_action.cljs$core$IFn$_invoke$arity$1 ? tetris.core.key_action.cljs$core$IFn$_invoke$arity$1(G__10374) : tetris.core.key_action.call(null,G__10374));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
event.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tetris.core.appstate,tetris.core.maybe,f);
} else {
return null;
}
} else {
return null;
}
});
var G__10375_10377 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.core.appstate,tetris.core.gravitate);
});
var G__10376_10378 = tetris.core.GRAVITY_WAIT;
setInterval(G__10375_10377,G__10376_10378);
document.addEventListener("keydown",tetris.core.handle_keydown);
tetris.core.main = (function tetris$core$main(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.page], null),document.getElementById("app"));
});
goog.exportSymbol('tetris.core.main', tetris.core.main);
