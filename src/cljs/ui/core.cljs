(ns ui.core
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [ui.util :refer [transit-post]]
            [goog.dom :as gdom]))


(enable-console-print!)

(def app-state (atom {}))

(defui Root
  static om/IQuery
  (query [this]
    [:example-remote])
  Object
  (render [this]
    (let [{:keys [example-remote]} (om/props this)]
      (dom/div nil
               (dom/p nil example-remote)))))

(defmulti read om/dispatch)

(defmethod read :example-remote
  [env k params]
  (let [st @(:state env)]
    {:remote true
     :value (get-in st [k :greeting])}))

(defmulti mutate om/dispatch)

(def reconciler 
  (om/reconciler {:state app-state
                  :parser (om/parser {:read read
                                      :mutate mutate})
                  :send (transit-post "/api")}))

(defn init []
  (om/add-root! reconciler Root (gdom/getElement "app")))

(init)
