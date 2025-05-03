import { App } from "astal/gtk4"
import KdlRenderer from "./widgets"

App.start(
    {
        css: "./dist/app.css",
    main() {
        KdlRenderer('./public/niri-test.kdl').catch(console.error);
    },
})
