import { Node } from '@bgotink/kdl'
import Xkb from './xkb'
import Adw from 'gi://Adw'
import { PreferencesPage } from '../astalified';
const { ButtonRow } = Adw

export default class {
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
        console.log(this._xkb.Section)

        return (<PreferencesPage
            setup={self => {
                self.add(this._xkb.Section as Adw.PreferencesGroup)
            }}
        />)
    }
}
