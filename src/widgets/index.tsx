// imports
import { App, Gtk } from 'astal/gtk4';
import ImportKdl, { KdlVersion } from '../libs/import-kdl';

//module exports
export default async (path: string) => {
    const { ApplicationWindow, Notebook, Label } = Gtk;
    const doc = await ImportKdl(path, KdlVersion.V1);
    const notebook = new Notebook();
    notebook.set_scrollable(true);
    notebook.append_page(
        <Label label={"test"} />,
        <Label label={"Input"} />
    )
    notebook.append_page(
        <Label label={"test"} />,
        <Label label={"Outputs"} />
    )
    notebook.append_page(
        <Label label={"test"} />,
        <Label label={"Key Bindings"} />
    )
    notebook.append_page(
        <Label label={"test"} />,
        <Label label={"Layout"} />
    )
    notebook.append_page(
        <Label label={"test"} />,
        <Label label={"Workspaces"} />
    )
    notebook.append_page(
        <Label label={"test"} />,
        <Label label={"Window Rules"} />
    )
    notebook.append_page(
        <Label label={"test"} />,
        <Label label={"Workspace Rules"} />
    )
    notebook.append_page(
        <Label label={"test"} />,
        <Label label={"Other Settings"} />
    )
    notebook.append_page(
        <Label label={"test"} />,
        <Label label={"Experimental Features"} />
    )

    return (
        <ApplicationWindow
            visible={true}
            application={App}
            child={notebook}
        />
    )
}
