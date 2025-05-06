import { App } from "astal/gtk4"
import MainWindow from "./widgets"
App.start(
    {
        css: "./dist/app.css",
    main() {
        MainWindow('./public/niri-test.kdl').catch(console.error);
    },
})
