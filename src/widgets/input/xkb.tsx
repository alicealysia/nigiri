import { Node as KDLNode } from '@bgotink/kdl';
import { listKeymapVariants, listKeymaps, newDropDownFromString, PreferencesGroup, PreferencesRow } from '../../helpers'
import { Gtk } from 'astal/gtk4';

// helper functions
const dropDownFromKeymaps = (value: string) => newDropDownFromString(listKeymaps(value));
const reduceVariants = (accumulator: variantStore, current: string) => {
    accumulator[current] = Gtk.DropDown.new_from_strings(listKeymapVariants(current))
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
            models: dropDownFromKeymaps("models"),
            layouts: newDropDownFromString(layoutStrings),
            variants: layoutStrings.reduce(reduceVariants, {}),
            options: dropDownFromKeymaps("options")
        }

    }

    public get Section () {
        const possibleVariants = this._possibleValues.variants;
        const variants = PreferencesRow({title: "variants"});
        this._possibleValues.layouts.connect('activate', src => {
            variants.child = possibleVariants[src.get_selected()];
        });

        return (
            <PreferencesGroup title={"keyboard"}>
                <PreferencesRow title={"model"}>
                    { this._possibleValues.models }
                </PreferencesRow>
                <PreferencesRow title={"layouts"}>
                    { this._possibleValues.layouts }
                </PreferencesRow>
                {
                    variants
                }
                <PreferencesRow title={"options"}>
                    { this._possibleValues.options }
                </PreferencesRow>
            </PreferencesGroup>
        )
    }
}

interface possibleValues {
    models: Gtk.DropDown;
    layouts: Gtk.DropDown;
    variants: variantStore;
    options: Gtk.DropDown;
}
interface variantStore {
    [key:string]: Gtk.DropDown
}
