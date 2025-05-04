import { Identifier, Node as KDLNode, Entry, Value } from '@bgotink/kdl';
import { exec } from 'astal/process';
import {Gtk} from 'astal/gtk4';
import { Box } from 'astal/gtk4/widget'

const { Orientation, Label, DropDown } = Gtk;

const findVariants = (value: string) => {
    if (!value) {
        return [];
    }
    try {
        const outputStr = exec(`/usr/bin/localectl list-x11-keymap-variants ${value}`);
        if (!outputStr) {
            return [];
        }
        return outputStr.split('\n');
    } catch (e) {
        console.error(`Running:localectl list-x11-keymap-variants ${value}, got ${e}`);
    }
    return [];
}

export default class {
    // rules file to use as a reference point for any xkb values
    private _possibleValues: iXkbLookup
    private _xkb: Partial<iXkb>;
    private _dropDown: Gtk.DropDown;

    constructor(node?: KDLNode) {
        if (node) {
            this.Node = node;
        }
        this._possibleValues = {
            models: exec("/usr/bin/localectl list-x11-keymap-models").split('\n'),
            layouts: exec("/usr/bin/localectl list-x11-keymap-layouts").split('\n').map((value: string) => ({
                name: value,
                variants: findVariants(value),
            })),
            options: exec("/usr/bin/localectl list-x11-keymap-options").split('\n')
        }
        this._dropDown = DropDown.new_from_strings(this._possibleValues.models);
    }

    public set Node (node: KDLNode) {
        const map = new Map();
        node.entries.forEach(entry => {
            map.set(entry.getName(), entry.getValue());
        })
        this._xkb = Object.fromEntries(map);
    }

    public get Node () {
        this._xkb.model = this._possibleValues.models[this._dropDown.get_selected()];
        const entries = Object.entries(this._xkb).map(([key, value]) => new Entry(new Value(value), new Identifier(key)))
        return new KDLNode(new Identifier("xkb"), entries);
    }

    public get Section () {
        return (
            <Box orientation={ Orientation.VERTICAL }>
                <Label label={ "Model" }/>
                {
                    this._dropDown
                }
            </Box>
        )
    }
}

interface iXkb {
    rules: string;
    model: string;
    layout: string;
    variant: string;
    options: string;
    filePath: string;
}

interface iXkbLookup {
    models: string[];
    layouts: {
        name: string;
        variants: string[];
    }[]
    options: string[];
}
