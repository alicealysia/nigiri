import { App } from "astal/gtk4"
import KdlRenderer from "./widgets/kdl-renderer"
import { readFileAsync } from 'astal';

App.start(
    {
        css: "./dist/app.css",
    main() {
        KdlRenderer('./public/niri-test.kdl').catch(console.error);
    },
})
