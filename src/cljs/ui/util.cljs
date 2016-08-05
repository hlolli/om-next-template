(ns ui.util
  (:require [cognitect.transit :as t]
            [om.transit :as omt]
            [goog.net.XhrIo :as xhr])
  (:import [goog.net XhrIo]))


(defn transit-post [url]
  (fn [{:keys [remote]} cb]
    (.send XhrIo url
           (fn [e]
             (this-as this
               (cb (t/read (omt/reader) (.getResponseText this)))))
           "POST" (t/write (omt/writer) remote)
           #js {"Content-Type" "application/transit+json"})))


;;Example transit POST;;
;;((transit-post "/api") {:example-data {:params {:a 1 :b 2}}} prn)
