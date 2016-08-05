(ns backend.server
  (:gen-class)
  (:require
   [compojure.core :refer [GET POST defroutes]]
   [compojure.route :as route]
   [om.next.server :as om]
   [ring.util.response :refer [resource-response]]
   [backend.middleware :refer [wrap-transit-params
                               wrap-transit-response]]))

(defmulti read-server om/dispatch)

(defmethod read-server :example-remote
  [env dispatch-key params]
  {:value {:greeting "Hello from the backend with some transit love."}})

(defmulti mutate-server om/dispatch)

(def server-parser
  (om/parser {:read read-server
              :mutate mutate-server}))

(defn generate-transit-response [data & r]
  {:status  200
   :headers {"Content-Type" "application/transit+json"}
   :body    data})

(defroutes main-routes
  (POST "/api" request (generate-transit-response
                        (server-parser {} (:transit-params request))))
  (route/files "/" {:root "public"})
  (route/resources "/")
  (GET "/" []  (resource-response "index.html" {:root "public"}))
  (route/not-found "404 Page not found!"))


(def handler
  (-> main-routes
      wrap-transit-params
      wrap-transit-response))


