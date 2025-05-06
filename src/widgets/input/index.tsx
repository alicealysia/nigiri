import { Node } from '@bgotink/kdl'
import Xkb from './xkb'
import { Gtk } from 'astal/gtk4'
import NavigationTabPage from '../navigation-tab-page';
import Adw from 'gi://Adw'
import { PreferencesPage } from '../../helpers'
import { Label } from 'astal/gtk4/widget';
const { ButtonRow } = Adw

export default class implements NavigationTabPage {
    public Tab = (
        <ButtonRow
            title={"Input"}
        />
    );
    private _xkb: Xkb;

    public constructor(node?: Node) {
        console.log(node);
        if (node) {
            this._xkb = new Xkb(node.children.findNodeByName("xkb"));
        } else {
            this._xkb = new Xkb();
        }
    }

    public get Page () {
        return this._xkb.Section
    }
}
