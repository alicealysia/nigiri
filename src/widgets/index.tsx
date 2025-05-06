// imports
import Importer from '../importer';
import Input from './input'
import { NavigationSplitView, NavigationPage } from '../helpers'
import { App, Gtk } from 'astal/gtk4';
const {ApplicationWindow} = Gtk

//module exports
export default async (path: string) => {
    console.log(path);
    const doc = await Importer(path).kdl('v1');

    const input = new Input(doc.findNodeByName("input"));
    console.log(doc)
    console.log(JSON.stringify(doc.nodes))
    return (
        <ApplicationWindow visible={true} application={App} >
            <NavigationSplitView>
                <NavigationPage name={"sidebar"}>
                </NavigationPage>
                <NavigationPage name={"content"}>
                    {input.Page}
                </NavigationPage>
            </NavigationSplitView>
        </ApplicationWindow>
    );

    // Outputs, Layout, Workspaces, Window Rules, Workspace Rules, Other Settings, Experimental Features
}
