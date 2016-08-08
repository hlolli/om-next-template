(require 
 '[figwheel-sidecar.repl-api :as ra]
 '[com.stuartsierra.component :as component]
 '[backend.server])


(import 'java.lang.Runtime)

(def figwheel-config
  {:figwheel-options {:ring-handler "backend.server/handler"
                      :server-port 8440
                      :css-dirs ["resources/public/css"]}
   :build-ids ["dev"]
   :all-builds
   [{:id "dev"
     :figwheel true
     :source-paths ["src/cljs" "src/clj"]
     :compiler {:main "ui.core"
                :asset-path "/out"
                :output-to "resources/public/main.js"
                :output-dir "resources/public/out"
                :verbose true}}]})

(def sass-config
  {:executable-path "sass"
   :input-dir "scss"
   :output-dir "resources/public/css"})

(defrecord Figwheel []
  component/Lifecycle
  (start [config]
    (ra/start-figwheel! config)
    config)
  (stop [config]
    (ra/stop-figwheel!)
    config))

(defrecord SassWatcher [executable-path input-dir output-dir]
  component/Lifecycle
  (start [config]
    (if (not (:sass-watcher-process config))
      (do
        (println "Figwheel: Starting SASS watch process")
        (assoc config :sass-watcher-process
               (.exec (Runtime/getRuntime)
                      (str executable-path " --watch " input-dir ":" output-dir))))
      config))
  (stop [config]
    (when-let [process (:sass-watcher-process config)]
      (println "Figwheel: Stopping SASS watch process")
      (.destroy process))
    config))

(def system
  (atom
   (component/system-map
    :figwheel (map->Figwheel figwheel-config)
    :sass (map->SassWatcher sass-config))))

(defn start []
  (swap! system component/start))

(defn stop []
  (swap! system component/stop))

(defn reload []
  (stop)
  (start))

(defn repl []
  (ra/cljs-repl))

;; Start the components and the repl
(start)
(repl)


