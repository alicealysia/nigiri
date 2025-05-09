// imports
import Importer from '../importer';
import Input from './input'
import { NavigationSplitView, NavigationPage } from '../helpers'
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
            <NavigationSplitView visible={true} show_content={true}
                sidebar={Adw.NavigationPage.new(Gtk.Label.new('sidebar'), 'sidebar')}
                content={Adw.NavigationPage.new(input.Page, 'content')}
            >
            </NavigationSplitView>
        </ApplicationWindow>
    );

    // Outputs, Layout, Workspaces, Window Rules, Workspace Rules, Other Settings, Experimental Features
}
