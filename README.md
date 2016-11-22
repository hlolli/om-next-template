# Om next template

Ready to be exploited for:
  - SCSS hot reload.
  - Transit based remote sync.
  - Extensible Compojure routing.

### Quick start
Assuming Cider+emacs development environment:
* 1. After cloneing/downloading. Open _om-next-template/src/cljs/ui/core.cljs_
* 2. *M-x* cider-jack-in-clojurescript
* 3. In the clj-repl type `(load-file "script/figwheel.clj")` to start figwheel
* 4. Open http://localhost:8440
* 5. Add css/scss styling in  _om-next-template/scss/style.scss_ (must have scss installed, do so with `sudo npm install -g node-sass`, read more about the SCSS figwheel script here https://github.com/bhauman/lein-figwheel/wiki/SASS-watcher)
* 6. Realize that the backend parser and handlers are located in _om-next-template/src/clj/backend/server.clj_
* 7. For standalone jar, delete _om-next-template/resources/public/main.js_ and this directory _om-next-template/resources/public/out_, then do these two commands `lein cljsbuild once` (for advanced compilation) and then `lein ring uberjar`.

