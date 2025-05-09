import { Node as KDLNode } from '@bgotink/kdl';
import {
    listKeymapVariants,
    listKeymaps,
    newDropDownFromString,
    PreferencesGroup,
    PreferencesRow,
    ListBox,
    ComboRow,
    PreferencesPage,
} from '../../helpers';
import { Gtk } from 'astal/gtk4';

// helper functions
const dropDownFromKeymaps = (value: string) => newDropDownFromString(listKeymaps(value));
const reduceVariants = (accumulator: variantStore, current: string) => {
    accumulator[current] = Gtk.StringList.new(listKeymapVariants(current))
    return accumulator;
}

export default class {
    // rules file to use as a reference point for any xkb values
    private _possibleValues : possibleValues;
    private _node : KDLNode;

    constructor(node?: KDLNode) {
        this._node = node;
        // generate a collection of dropdown elements from cli
        const layoutStrings = listKeymaps("layouts")
        this._possibleValues = {
            models: Gtk.StringList.new(listKeymaps("models")),
            layouts: Gtk.StringList.new(layoutStrings),
            variants: layoutStrings.reduce(reduceVariants, {}),
            options: Gtk.StringList.new(listKeymaps("options"))
        }

    }

    public get Section () {
        return (
            <PreferencesGroup title={"Keyboard"}
                setup={self => {
                    self.add(<ComboRow title={"model"} visible={true} model={ this._possibleValues.models } />)
                    self.add(<ComboRow title={"layouts"} visible={true} model={ this._possibleValues.layouts } />)
                    self.add(<ComboRow title={"options"} visible={true} model={ this._possibleValues.options } />)
                }}
            />
        )
    }
}

interface possibleValues {
    models: Gtk.StringList;
    layouts: Gtk.StringList;
    variants: variantStore;
    options: Gtk.StringList;
}
interface variantStore {
    [key:string]: Gtk.StringList
}
