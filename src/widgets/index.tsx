// imports
import { App, Gtk, Astal } from 'astal/gtk4';
import NavigationTabPage  from './navigation-tab-page';
import Importer from '../importer';
import Input from './input'
import adw from 'gi://Adw'

const { ApplicationWindow, Notebook, Label } = Gtk;
const { NavigationSplitView, NavigationPage, ButtonRow } = adw
const { Box } = Astal

//module exports
export default async (path: string) => {
    const doc = await Importer(path).kdl('v1');
    const notebook = new Notebook();
    const input = new Input(doc.findNodeByName("input"));

    const splitView = (
        <NavigationSplitView>
            <NavigationPage name={"sidebar"}>
            </NavigationPage>
            <NavigationPage name={"content"}>
                {input.Page}
            </NavigationPage>
        </NavigationSplitView>
    );

    notebook.set_scrollable(true);
    notebook.append_page(
        input.Page,
        input.Tab
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
