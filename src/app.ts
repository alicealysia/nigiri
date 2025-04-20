import { App } from "astal/gtk4"
import style from "./style.scss"
import KdlRenderer from "./windows/kdl-renderer"

App.start({
    css: style,
    main() {
        KdlRenderer();
    },
})
