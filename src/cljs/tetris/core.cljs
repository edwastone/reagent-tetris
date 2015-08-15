(ns tetris.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as R]
            [tetris.board :as T]))

(def GRAVITY-WAIT 400)
(def ADJUST-WAIT 300)

(enable-console-print!)

(def appstate (R/atom {:piece nil :cells [] :active true :score 0}))
(def current-piece (reaction (:piece @appstate)))
(def current-cells (reaction (:cells @appstate)))
(def current-score (reaction (:score @appstate)))

(defn gravitate [{:keys [piece cells] :as data}]
  (if piece
    (let [piece2 (update-in piece [:y] inc)]
      (if (T/valid? piece2 cells)
        (assoc data :piece piece2)
        (do
          (js/setTimeout #(swap! appstate T/remove-piece) ADJUST-WAIT)
          data)))
    (let [piece2 (T/new-piece)]
      (if (T/valid? piece2 cells)
        (assoc data :piece piece2)
        (assoc data :active false)))))

(defn cell-view [{:keys [x y color]}]
  [:rect  {:x x
           :y y
           :width 1
           :height 1
           :stroke "black"
           :stroke-width 0.01
           :rx 0.1
           :fill color}])

(defn piece-view []
  (fn []
    (into [:g]
       (map cell-view (T/piece->cells @current-piece)))))

(defn cells-view []
  (into [:g] (map cell-view @current-cells)))

(defn board []
   [:svg {:style {:border "1px solid black"
                         :width (* 25 T/boardW)
                         :height (* 25 T/boardH)}
                 :view-box (str "0 0 " T/boardW " " T/boardH)}
    [piece-view]
    [cells-view]])

(defn score-panel []
  (fn [] [:h2 "Score " @current-score]))

(defn page []
  [:div {:style {:text-align "center"}}
   [board]
   [score-panel]])

(defn maybe [appstate f]
  (let [piece (f appstate)]
    (if (T/valid? piece (:cells appstate))
      (assoc appstate :piece piece)
      appstate)))

(def key-action
  {37 T/move-left
   38 T/move-rotate
   39 T/move-right
   40 T/move-down})

;Code to benchmark response time
;(defn now [] (.valueOf (js/Date.)))
;(def render-start (atom (now)))

(defn handle-keydown [event]
  (def event event)
  (when (and (:active @appstate) (:piece @appstate))
    (when-let [f (-> event .-keyCode key-action)]
      (.preventDefault event)
      ;(swap! render-start now)
      (swap! appstate maybe f)
      ;(print "Response time: " (- (now) @render-start))
      )))

(js/setInterval #(swap! appstate gravitate) GRAVITY-WAIT)
(.addEventListener js/document "keydown" handle-keydown)

(defn ^:export main []
  (R/render [page]
                  (.getElementById js/document "app")))
