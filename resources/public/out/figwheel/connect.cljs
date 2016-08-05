(ns figwheel.connect (:require [ui.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:8440/figwheel-ws"})

