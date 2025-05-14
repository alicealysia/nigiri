import { Node as KDLNode } from '@bgotink/kdl';
import { Xkb } from '../../importer'

import {
    PreferencesGroup,
    ComboRow
} from '../../helpers';
import { Gtk } from 'astal/gtk4';

export default class {
    // rules file to use as a reference point for any xkb values
    private _defaults = {
        model: 'pc105',
        layout: 'us',
        options: []
    };

    constructor(node?: KDLNode) {
        new Xkb(node);
    }

    public get Section () {
        return (
            <PreferencesGroup title={"Keyboard"}
                setup={self => {
                    self.add(<ComboRow title={"model"} visible={true} model={ Gtk.StringList.new(this._possibleValues.models) } setup={row => {

                    }} />)
                    self.add(<ComboRow title={"layouts"} visible={true} model={ Gtk.StringList.new(this._possibleValues.layouts) } />)
                    self.add(<ComboRow title={"options"} visible={true} model={ Gtk.StringList.new(this._possibleValues.options) } />)
                }}
            />
        )
    }
}
