(defproject om-next-template "v0.0.0"
  :description "Some description"
  :url ""
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.9.0-alpha15"]
                 [org.clojure/clojurescript "1.9.521"]
                 [com.cognitect/transit-clj "0.8.300"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [ring "1.6.0-RC3"]
                 [compojure "1.6.0-beta3"]
                 [figwheel-sidecar "0.5.10"]
                 [org.omcljs/om "1.0.0-alpha48"]
                 [com.stuartsierra/component "0.3.1"]]

  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-figwheel "0.5.10"]
            [lein-ring "0.11.0"]]

  :ring {:handler backend.server/handler
         :port 8440}

  :resource-paths ["resources"]

  :source-paths ["src/cljs" "src/clj"]

  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.nrepl "0.2.12"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}
             :uberjar {:aot :all}}

  :cljsbuild
  {:builds
   [{:id "advanced"
     :source-paths ["src/cljs"]
     :compiler {:output-to "resources/public/main.js"
                :output-dir "resources/public/out"
                :optimizations :advanced
                :pretty-print false}}]})

;; Front-End Development
;; 1. cider-jack-in-clojurescript
;; 2. In repl: user> (load-file "script/figwheel.clj")
