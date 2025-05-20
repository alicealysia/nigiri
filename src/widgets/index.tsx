// imports
import Importer from '../importer';
import Input from './input'
import { NavigationSplitView, NavigationPage } from './astalified'
import Adw from 'gi://Adw'
import { App, Gtk } from 'astal/gtk4';
const {ApplicationWindow} = Gtk

//module exports
export default (path: string) => {
    console.log(path);
    const doc = Importer(path).kdl('v1');

    const input = new Input(doc.findNodeByName("input"));
    return (
        <ApplicationWindow visible={true} application={App} >
            <NavigationSplitView visible={true} show_content={true}>
                <NavigationPage name={"sidebar"} title={"sidebar"} />
                <NavigationPage name={"content"} title={"content"}>
                    {
                        input.Page
                    }
                </NavigationPage>
            </NavigationSplitView>
        </ApplicationWindow>
    );

    // Outputs, Layout, Workspaces, Window Rules, Workspace Rules, Other Settings, Experimental Features
}
