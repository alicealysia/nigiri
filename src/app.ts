import { App } from "astal/gtk4"
import style from "inline:./styles/style.scss"
import KdlRenderer from "./widgets/kdl-renderer"

App.start({
    css: style,
    main() {
        KdlRenderer('./public/niri-test.kdl').catch(console.error);
    },
})
