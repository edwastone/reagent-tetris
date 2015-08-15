(ns tetris.board)
;Data model: Board -> piece -> matrix -> cell

(def boardH 20)
(def boardW 10)

(def matrices
 [[[1 1]
   [1 1]]
  [[1 0]
   [1 1]
   [0 1]]
  [[1 1]
   [1 0]
   [1 0]]
  [[1 1 1]
   [0 1 0]]
  [[1]
   [1]
   [1]
   [1]]])

(def colors
  ["#F7B538"
   "#DB7C26"
   "#C32F27"
   "#D8572A"
   "#780116"
   ])


(defn flip [mat]
  (vec (reverse mat)))

(defn transpose [mat]
  (let [H (count mat) W (count (first mat))]
    (mapv #(mapv nth mat (repeat %)) (range W))))

(def piece-choices
   (mapcat #(set
                 [(hash-map :mat %1 :color %2)
                 (hash-map :mat (flip %1) :color %2)])
               matrices colors))

(defn piece->cells [{:keys [mat x y color]}]
  ;Given a piece's information, return cells of that piece
  (let [H (count mat) W (count (first mat))]
    (for [i (range H) j (range W)
          :when (pos? (get-in mat [i j]))]
      {:x (+ j x) :y (+ i y) :color color})))

(defn new-piece []
  (assoc (rand-nth piece-choices)
    :x (/ boardW 2) :y 0 ))

(defn valid? [piece cells]
  (let [cells2 (piece->cells piece)
        cells (set (map (juxt :x :y) cells))]
    (every?
     #(and
       (-> % :y (< boardH))
       (-> % :x (< boardW))
       (-> % :x (>= 0))
       (nil? (cells ((juxt :x :y) %)))) cells2)))

(defn lower-row [cells score]
  (map update-in cells (repeat [:y])
       (repeat #(+ % score))))

(defn calc-score [{:keys [cells score] :as data}]
  ;Detect completed rows, accumulate to score, and remove those rows from board
  (let [rows (sort-by (comp - key) (group-by :y cells))
        [score1 cells]
          (reduce (fn [[score res] [_ cells]]
                    (if (= boardW (count cells)) [(inc score) res]
                      [score (concat res (lower-row cells score))]
                      )) [0 []] rows)]
    (assoc data :cells cells :score (+ score score1))))

(defn remove-piece [{:keys [piece cells] :as data}]
  (let [piece2 (update-in piece [:y] inc)] ;check if the piece can still drop
    (if (valid? piece2 cells)
      data
      (calc-score
       (assoc data :piece nil
         :cells (concat cells (piece->cells piece)))))))

(defn move-left [{:keys [piece]}]
  (update-in piece [:x] dec))

(defn move-right [{:keys [piece]}]
  (update-in piece [:x] inc))

(defn move-down [{:keys [piece cells]}]
  (loop [piece piece]
    (let [piece2 (update-in piece [:y] inc)]
      (if (valid? piece2 cells)
        (recur piece2)
        piece))))

(defn move-rotate [{:keys [piece]}]
  (update-in piece [:mat] (comp transpose flip)))
