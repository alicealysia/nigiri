import { Node } from '@bgotink/kdl'
import Xkb from './xkb'
import { Gtk } from 'astal/gtk4'
import { Box } from 'astal/gtk4/widget'
import NavigationTabPage from '../navigation-tab-page';
import Adw from 'gi://Adw'

const { Label } =  Gtk
const { ButtonRow, PreferencesPage } = Adw

export default class implements NavigationTabPage {
    public Tab = (
        <ButtonRow
            title={"Input"}
        />
    );
    private _xkb: Xkb;

    public constructor(node?: Node) {
        if (node) {
            this._xkb = new Xkb(node.children.findNodeByName("xkb"));
        } else {
            this._xkb = new Xkb();
        }
    }

    public get Page () {
        const sections = {
            xkb: this._xkb.Section,
            test: <Label label={"test"}/>
        }
        return (
            <PreferencesPage>
                {
                    this._xkb.Section
                }
            </PreferencesPage>
        )
    }
}
